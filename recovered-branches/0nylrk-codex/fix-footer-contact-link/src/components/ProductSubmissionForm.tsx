import React from "react";
import z from "zod";

import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

// Define the form schema with zod
const _productSchema = z.object({_title: z.string().min(3, _"Title must be at least 3 characters"), _description: z.string().min(10, _"Description must be at least 10 characters"), _price: z.string().refine(_(val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, _{
    message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
  image: z.instanceof(File).optional(),
  tags: z.string().optional()});

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;

export function ProductSubmissionForm() {_const { user} = useAuth();
  const {_toast} = useToast();
  const _navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState("manual");
  
  // Initialize the form
  const _form = useForm<ProductFormValues>({_resolver: zodResolver(productSchema), _defaultValues: {
      title: "", _description: "", _price: "", _category: "", _tags: ""}});
  
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
          
        // Update the product with the image window.URL
        const {_error: updateError} = await supabase
          .from('product_listings')
          .update({_images: [publicUrlData.publicUrl]})
          .eq('id', productRecord.id);
          
        if (updateError) {_throw new Error(updateError.message);}
      }
      
      // Show success message
      toast({_title: "Product Published!", _description: "Your product has been successfully published on Zion."});
      
      // Redirect to product page
      navigate(`/marketplace/listing/${_productRecord.id}`);
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
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title" {_...field} />
                  </FormControl>
                  <FormDescription>
                    Create a compelling title that describes your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={_form.control}
              name="description"
              render={_(_{ field}) => (
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
                render={_(_{ field}) => (
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
                render={_(_{ field}) => (
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
              render={_(_{ field}) => (
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
                        <img 
                          src={_imagePreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  )}
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