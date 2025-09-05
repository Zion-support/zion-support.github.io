import React from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import z from &quot;zod&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { AIListingGenerator } from &quot;@/components/listing/AIListingGenerator&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, &quot;Title must be at least 3 characters&quot;),
  description: z.string().min(10, &quot;Description must be at least 10 characters&quot;),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: &quot;Price must be a valid number&quot;}),
  category: z.string().min(1, &quot;Please select a category&quot;),
  image: z.instanceof(File).optional(),
  tags: z.string().optional()});

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;

export function ProductSubmissionForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState(&quot;manual&quot;);
  
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "&quot;,
      description: "&quot;,
      price: "&quot;,
      category: "&quot;,
      tags: "&quot;}});
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue(&quot;image&quot;, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue(&quot;description&quot;, content.description);
    form.setValue(&quot;tags&quot;, content.tags.join(&quot;, &quot;));
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue(&quot;price&quot;, averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab(&quot;manual&quot;);
  };

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: &quot;Authentication Required&quot;,
        description: &quot;You must be logged in to publish products&quot;,
        variant: &quot;destructive&quot;});
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create the product listing
      const productData = {
        title: values.title,
        description: values.description,
        price: parseFloat(values.price),
        category: values.category,
        currency: &quot;USD&quot;, // Default currency
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],
        author: {
          name: user.displayName || &quot;Anonymous Creator&quot;,
          id: user.id},
        createdAt: new Date().toISOString()};
      
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single();
        
      if (productError) {
        throw new Error(productError.message);
      }

      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image);
          
        if (uploadError) {
          throw new Error(uploadError.message);
        }
        
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath);
          
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ 
            images: [publicUrlData.publicUrl]
          })
          .eq('id', productRecord.id);
          
        if (updateError) {
          throw new Error(updateError.message);
        }
      }
      
      // Show success message
      toast({
        title: &quot;Product Published!&quot;,
        description: &quot;Your product has been successfully published on Zion.&quot;});
      
      // Redirect to product page
      navigate(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {
      toast({
        title: &quot;Publication Failed&quot;,
        description: error instanceof Error ? error.message : &quot;An unknown error occurred&quot;,
        variant: &quot;destructive"});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6&quot;>
        <TabsTrigger value=&quot;manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value=&quot;ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2&quot; />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value=&quot;manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6&quot;>
            <FormField
              control={form.control}
              name=&quot;title&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;Enter product title&quot; {...field} />
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
              name=&quot;description&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder=&quot;Describe your product in detail..." 
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
              <FormField
                control={form.control}
                name=&quot;price&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type=&quot;number&quot; min=&quot;0&quot; step=&quot;0.01&quot; placeholder=&quot;0.00&quot; {...field} />
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
                name=&quot;category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;
                        {...field}
                      >
                        <option value="&quot;>Select a category</option>
                        <option value=&quot;digital_product&quot;>Digital Product</option>
                        <option value=&quot;service&quot;>Service</option>
                        <option value=&quot;ai_tool&quot;>AI Tool</option>
                        <option value=&quot;course&quot;>Course</option>
                        <option value=&quot;template&quot;>Template</option>
                        <option value=&quot;other&quot;>Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name=&quot;tags&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;Enter tags separated by commas&quot; {...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name=&quot;image&quot;
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input 
                      type=&quot;file&quot; 
                      accept=&quot;image/*&quot; 
                      onChange={handleImageChange}
                      className=&quot;cursor-pointer&quot;
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {imagePreview && (
                    <div className=&quot;mt-2 w-full max-w-md border rounded overflow-hidden&quot;>
                      <AspectRatio ratio={3/2}>
                        <img 
                          src={imagePreview} 
                          alt=&quot;Preview&quot; 
                          className=&quot;w-full h-full object-cover&quot;
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <div className=&quot;flex justify-end&quot;>
              <Button 
                type=&quot;submit&quot; 
                disabled={isSubmitting}
                className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
              >
                {isSubmitting ? &quot;Publishing...&quot; : &quot;Publish Product&quot;}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value=&quot;ai&quot;>
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues(&quot;title&quot;),
            category: form.getValues(&quot;category&quot;)
          }}
        />
      </TabsContent>
    </Tabs>
  );
}