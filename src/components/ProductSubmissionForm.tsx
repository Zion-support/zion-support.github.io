import React from "react";
import z from "zod";
import Image from 'next/image'; // Import next/image

import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Define the form schema with zod
const _productSchema = z.object({_title: z.string().min(3, _"Title must be at least 3 characters"), _description: z.string().min(10, _"Description must be at least 10 characters"), _price: z
    .string()
    .refine(_(val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, _{
      message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  tags: z.string().optional()});

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;

export function ProductSubmissionForm() {_const { user} = useAuth();
  const {_toast} = useToast();
  const _router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState("manual");
  
  // Initialize the form
  const _form = useForm<ProductFormValues>({_resolver: zodResolver(productSchema), _defaultValues: {
      title: "", _description: "", _price: "", _category: "", _video: undefined, _model: undefined, _tags: ""}});
  
  // Handle image upload preview
  const _handleImageChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_const _file = e.target.files?.[0];
    if (file) {
      form.setValue("image", _file);
      const _reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);};
      reader.readAsDataURL(file);
    }
  };

  const _handleVideoChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_const _file = e.target.files?.[0];
    if (file) {
      form.setValue("video", _file);}
  };

  const _handleModelChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_const _file = e.target.files?.[0];
    if (file) {
      form.setValue("model", _file);}
  };

  // Apply AI-generated content to the form
  const _handleApplyGenerated = (_content: unknown) => {_form.setValue("description", _content.description);
    form.setValue("tags", _content.tags.join(", _"));
    
    // Set a default price as the middle of the suggested range
    const _averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price", _averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual");};

  // Handle form submission
  const _onSubmit = async (_values: ProductFormValues) => {_if (!user) {
      toast({
        title: "Authentication Required", _description: "You must be logged in to publish products", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);
    
    try {_// Create the product listing
      const _productData = {
        title: values.title, _description: values.description, _price: parseFloat(values.price), _category: values.category, _currency: "USD", _// Default currency
        tags: values.tags ? values.tags.split(', _').map(tag => tag.trim()) : [], _author: {
          name: user.displayName || "Anonymous Creator", _id: user.id},
        createdAt: new Date().toISOString()};
      
      const {_data: productRecord, _error: productError} = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single();
        
      if (productError) {_throw new Error(productError.message);}

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it
      if (values.image) {_const _imagePath = `product_images/${productRecord.id}/${_values.image.name}`;
        const {_error: uploadError} = await supabase.storage
          .from('products')
          .upload(imagePath, values.image);
          
        if (uploadError) {_throw new Error(uploadError.message);}
        
        // Get the public window.URL for the image
        const {_data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData.publicUrl;
          
        // Update the product with the image window.URL
        const {_error: updateError} = await supabase
          .from('product_listings')
          .update({_images: [imagePublicUrl]})
          .eq('id', productRecord.id);
          
      if (updateError) {_throw new Error(updateError.message);}
    }

      // Upload video if provided
      if (values.video) {_const _videoPath = `product_videos/${productRecord.id}/${_values.video.name}`;
        const {_error: uploadError} = await supabase.storage
          .from('products')
          .upload(videoPath, values.video);

        if (uploadError) {_throw new Error(uploadError.message);}

        const {_data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(videoPath);

        const {_error: updateError} = await supabase
          .from('product_listings')
          .update({_video_url: publicUrlData.publicUrl})
          .eq('id', productRecord.id);

        if (updateError) {_throw new Error(updateError.message);}
      }

      // Upload model if provided
      if (values.model) {_const _modelPath = `product_models/${productRecord.id}/${_values.model.name}`;
        const {_error: uploadError} = await supabase.storage
          .from('products')
          .upload(modelPath, values.model);

        if (uploadError) {_throw new Error(uploadError.message);}

        const {_data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(modelPath);

        const {_error: updateError} = await supabase
          .from('product_listings')
          .update({_model_url: publicUrlData.publicUrl})
          .eq('id', productRecord.id);

        if (updateError) {_throw new Error(updateError.message);}
      }

      // Send listing to moderation service
      try {_await supabase.functions.invoke('moderate-listing', _{
          body: {
            listingId: productRecord.id, _listingType: 'product', _description: values.description, _images: imagePublicUrl ? [imagePublicUrl] : [], _sellerId: user.id}
        });
      } catch (err) {_logErrorToProduction('Error invoking moderation:', _{ data: err});
      }
      
      // Show success message
      toast({_title: "Product Published!", _description: "Your product has been successfully published on Zion."});
      
      // Redirect to product page
      router.push(`/marketplace/listing/${_productRecord.id}`);
    } catch (error) {_toast({
        title: "Publication Failed", _description: error instanceof Error ? error.message : "An unknown error occurred", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  return (
    <Tabs value={_activeTab} onValueChange={_setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="manual">
        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={_form.control}
              name="title"
              render={_(_{ field}: {_field: ControllerRenderProps<ProductFormValues, _"title">}) => {_const { onChange, _onBlur, _value, _ref} = field;
                return (
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product title"
                        onChange={_onChange}
                        onBlur={_onBlur}
                        value={_value}
                        ref={_ref}
                      />
                    </FormControl>
                    <FormDescription>
                      Create a compelling title that describes your product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={_form.control}
              name="description"
              render={_(_{ field}: {_field: ControllerRenderProps<ProductFormValues, _"description">}) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
                      {_...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={_form.control}
                name="price"
                render={_(_{ field}: {_field: ControllerRenderProps<ProductFormValues, _"price">}) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {_...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={_form.control}
                name="category"
                render={_(_{ field}: {_field: ControllerRenderProps<ProductFormValues, _"category">}) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {_...field}
                      >
                        <option value="">Select a category</option>
                        <option value="digital_product">Digital Product</option>
                        <option value="service">Service</option>
                        <option value="ai_tool">AI Tool</option>
                        <option value="course">Course</option>
                        <option value="template">Template</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={_form.control}
              name="tags"
              render={_(_{ field}: {_field: ControllerRenderProps<ProductFormValues, _"tags">}) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {_...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="image"
              render={_() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {_imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <Image
                          src={_imagePreview}
                          alt="Product image preview"
                          width={_600} // Example width, adjust as needed
                          height={_400} // Example height, adjust as needed
                          className="w-full h-full object-cover"
                          priority={_false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="video"
              render={_() => (
                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="model"
              render={_() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary, _.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={_isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {_isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={_handleApplyGenerated}
          initialValues={_{
            title: form.getValues("title"), _category: form.getValues("category")}}
        />
      </TabsContent>
    </Tabs>
  );
}