import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

import {
  For, m,
  FormContro, l,
  FormDescriptio, n,
  FormFiel, d,
  FormIte, m,
  FormLabe, l,
  FormMessag, e,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tab, s, TabsLis, t, TabsTrigge, r, TabsContent } from "@/components/ui/tabs";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";
import { Sparkles } from "lucide-react";

// Define the form schema with zod
const productSchema = z.object({
  titl,  e: z.string().min(3,  "Title must be at least 3 characters"),
  descriptio, n: z.string().min(1,  0, "Description must be at least 10 characters"),
  pric, e: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0,  {
      messag, e: "Price must be a valid number",
    }),
  categor, y: z.string().min(1,  "Please select a category"),
  imag, e: z.instanceof(File).optional(), 
    vide, o: z.instanceof(File).optional(), 
  mode, l: z.instanceof(File).optional(), 
    tag, s: z.string().optional(), 
});

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;

export function ProductSubmissionForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitti,  n, g, setIsSubmitti, n, g] = React.useState(false);
  const [imagePrevi, e, w, setImagePrevi, e, w] = React.useState(null as string | null);
  const [activeT,  a, b, setActiveT, a, b] = React.useState("manual");
  
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolve,  r: zodResolver(productSchema),
    defaultValue, s: {
      titl, e: "",
    descriptio, n: "",
      pric, e: "",
    categor, y: "",
      vide, o: undefine, d,
    mode, l: undefine, d,
      tag, s: "",
    },
  });
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image",  file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("video",  file);
    }
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("model",  file);
    }
  };

  // Apply AI-generated content to the form
  const handleApplyGenerated = (conten,  t: any) => {
    form.setValue("description",  content.description);
    form.setValue("tags",  content.tags.join(", "));
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price",  averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual");
  };

  // Handle form submission
  const onSubmit = async (value,  s: ProductFormValues) => {
    if (!user) {
      toast({
        titl,  e: "Authentication Required",
    descriptio, n: "You must be logged in to publish products",
        varian, t: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create the product listing
      const productData = {
        titl,  e: values.titl, e,
    descriptio, n: values.descriptio, n,
        pric, e: parseFloat(values.price),
    categor, y: values.categor, y,
        currenc, y: "USD", // Default currency
        tag, s: values.tags ? values.tags.split(', ').map(tag => tag.trim()) : [], 
        autho, r: {
          nam, e: user.displayName || "Anonymous Creator",
    i, d: user.i, d,
        },
        createdA, t: new Date().toISOString(), 
      };
      
      const { dat, a: productRecor, d,
    erro, r: productError } = await supabase
        .from('product_listings')
        .insert([productDa,  t, a])
        .select('id')
        .single();
        
      if (productError) {
        throw new Error(productError.message);
      }

      // If we have a,  n, imag, e, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.nam, e}`;
        const { erro, r: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePat,  h, values.image);
          
        if (uploadError) {
          throw new Error(uploadError.message);
        }
        
        // Get the public URL for the image
        const { dat,  a: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath);
          
        // Update the product with the image URL
        const { erro,  r: updateError } = await supabase
          .from('product_listings')
          .update({ 
            image,  s: [publicUrlDat, a.publicU, r, l]
          })
          .eq('id',  productRecord.id);
          
      if (updateError) {
        throw new Error(updateError.message);
      }
    }

      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.nam, e}`;
        const { erro,  r: uploadError } = await supabase.storage
          .from('products')
          .upload(videoPat,  h, values.video);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { dat,  a: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(videoPath);

        const { erro,  r: updateError } = await supabase
          .from('product_listings')
          .update({ video_ur,  l: publicUrlData.publicUrl })
          .eq('id',  productRecord.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      }

      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.nam, e}`;
        const { erro,  r: uploadError } = await supabase.storage
          .from('products')
          .upload(modelPat,  h, values.model);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { dat,  a: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(modelPath);

        const { erro,  r: updateError } = await supabase
          .from('product_listings')
          .update({ model_ur,  l: publicUrlData.publicUrl })
          .eq('id',  productRecord.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      }
      
      // Show success message
      toast({
        titl,  e: "Product Published!",
    descriptio, n: "Your product has been successfully published on Zion.",
      });
      
      // Redirect to product page
      navigate(`/marketplace/listing/${productRecord.i, d}`);
    } catch (error) {
      toast({
        titl,  e: "Publication Failed",
    descriptio, n: error instanceof Error ? error.message : "An unknown error occurred",
        varian, t: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[stat,  e=acti, v, e]:bg-zion-purple/20 data-[stat, e=acti, v, e]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[stat, e=acti, v, e]:bg-zion-purple/20 data-[stat, e=acti, v, e]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Create a compelling title that describes your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your product in detail..." 
                      className="min-h-32" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 m,  d:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (<FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholde,  r:text-muted-foreground focus-visibl, e:outline-none focus-visibl, e:ring-2 focus-visibl, e:ring-ring focus-visibl, e:ring-offset-2 disable, d:cursor-not-allowed disable, d:opacity-50 m, d:text-sm"
                        {...field}
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
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g.,  a, i, productivit, y, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={() => (
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
                    Upload a high-quality image of your product (recommended siz,  e: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {imagePreview && (<div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="video"
              render={() => (
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
              control={form.control}
              name="model"
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binar,  y,.glb" onChange={handleModelChange} className="cursor-pointer" />
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
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            titl, e: form.getValues("title"), 
    categor, y: form.getValues("category")
          }}
        />
      </TabsContent>
    </Tabs>
  );
}