<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useNavigate } from "react-router-dom",
=======
import React from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import z from &quot;zod&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",
import { Sparkles } from "lucide-react",
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { AIListingGenerator } from &quot;@/components/listing/AIListingGenerator&quot;;
import { Sparkles } from &quot;lucide-react&quot;;
=======
import React from "react";
import z from "zod";

import {_Form, _FormControl, _FormDescription, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Define the form schema with zod
<<<<<<< HEAD
const productSchema = z.object({
  title: z.string().min(3, &quot;Title must be at least 3 characters&quot;),
  description: z.string().min(10, &quot;Description must be at least 10 characters&quot;),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: &quot;Price must be a valid number&quot;}),
  category: z.string().min(1, &quot;Please select a category&quot;),
=======
const _productSchema = z.object({_title: z.string().min(3, _"Title must be at least 3 characters"), _description: z.string().min(10, _"Description must be at least 10 characters"), _price: z.string().refine(_(val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, _{
    message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  image: z.instanceof(File).optional(),
  tags: z.string().optional()}),

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>,

<<<<<<< HEAD
export function ProductSubmissionForm() {
<<<<<<< HEAD
  const { user } = useAuth(),
  const { toast } = useToast(),
  const navigate = useNavigate(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [imagePreview, setImagePreview] = React.useState(null as string | null),
  const [activeTab, setActiveTab] = React.useState("manual"),
=======
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
=======
export function ProductSubmissionForm() {_const { user} = useAuth();
  const {_toast} = useToast();
  const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState(&quot;manual&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Initialize the form
<<<<<<< HEAD
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
<<<<<<< HEAD
      title: "",
      description: "",
      price: "",
      category: "",
      tags: ""}}),
=======
      title: "&quot;,
      description: "&quot;,
      price: "&quot;,
      category: "&quot;,
      tags: "&quot;}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
<<<<<<< HEAD
      form.setValue("image", file),
      const reader = new FileReader(),
=======
      form.setValue(&quot;image&quot;, file);
      const reader = new FileReader();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      },
      reader.readAsDataURL(file)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  // Apply AI-generated content to the form
<<<<<<< HEAD
  const handleApplyGenerated = (content: any) => {
<<<<<<< HEAD
    form.setValue("description", content.description),
    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  },
=======
    form.setValue(&quot;description&quot;, content.description);
    form.setValue(&quot;tags&quot;, content.tags.join(&quot;, &quot;));
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue(&quot;price&quot;, averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab(&quot;manual&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _handleApplyGenerated = (_content: unknown) => {_form.setValue("description", _content.description);
    form.setValue("tags", _content.tags.join(", _"));
    
    // Set a default price as the middle of the suggested range
    const _averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price", _averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual");};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Handle form submission
  const _onSubmit = async (_values: ProductFormValues) => {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication Required&quot;,
        description: &quot;You must be logged in to publish products&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Authentication Required", _description: "You must be logged in to publish products", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),
    
<<<<<<< HEAD
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
        createdAt: new Date().toISOString()},
=======
    try {_// Create the product listing
      const _productData = {
        title: values.title, _description: values.description, _price: parseFloat(values.price), _category: values.category, _currency: "USD", _// Default currency
        tags: values.tags ? values.tags.split(', _').map(tag => tag.trim()) : [], _author: {
          name: user.displayName || "Anonymous Creator", _id: user.id},
        createdAt: new Date().toISOString()};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const {_data: productRecord, _error: productError} = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single(),
        
<<<<<<< HEAD
      if (productError) {
        throw new Error(productError.message)
      }

      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,
        const { error: uploadError } = await supabase.storage
=======
      if (productError) {_throw new Error(productError.message);}

      // If we have an image, upload it
      if (values.image) {_const _imagePath = `product_images/${productRecord.id}/${_values.image.name}`;
        const {_error: uploadError} = await supabase.storage
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          .from('products')
          .upload(imagePath, values.image),
          
<<<<<<< HEAD
        if (uploadError) {
          throw new Error(uploadError.message)
        }
=======
        if (uploadError) {_throw new Error(uploadError.message);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Get the public window.URL for the image
        const {_data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(imagePath),
          
        // Update the product with the image window.URL
        const {_error: updateError} = await supabase
          .from('product_listings')
<<<<<<< HEAD
          .update({ 
            images: [publicUrlData.publicUrl]
          })
          .eq('id', productRecord.id),
          
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      
      // Show success message
      toast({
<<<<<<< HEAD
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),
=======
        title: &quot;Product Published!&quot;,
        description: &quot;Your product has been successfully published on Zion.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Redirect to product page
      navigate(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})
=======
        title: &quot;Publication Failed&quot;,
        description: error instanceof Error ? error.message : &quot;An unknown error occurred&quot;,
        variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6&quot;>
        <TabsTrigger value=&quot;manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value=&quot;ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2&quot; />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormDescription>
                    Create a compelling title that describes your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;description&quot;
              render={({ field }) => (
=======
              control={_form.control}
              name="description"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder=&quot;Describe your product in detail..." 
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;price&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type=&quot;number&quot; min=&quot;0&quot; step=&quot;0.01&quot; placeholder=&quot;0.00&quot; {...field} />
=======
                control={_form.control}
                name="price"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;category"
                render={({ field }) => (
=======
                control={_form.control}
                name="category"
                render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
<<<<<<< HEAD
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;
                        {...field}
=======
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;tags&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;Enter tags separated by commas&quot; {...field} />
=======
              control={_form.control}
              name="tags"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;image&quot;
              render={() => (
=======
              control={_form.control}
              name="image"
              render={_() => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                  
<<<<<<< HEAD
                  {imagePreview && (
                    <div className=&quot;mt-2 w-full max-w-md border rounded overflow-hidden&quot;>
                      <AspectRatio ratio={3/2}>
                        <img 
                          src={imagePreview} 
                          alt=&quot;Preview&quot; 
                          className=&quot;w-full h-full object-cover&quot;
=======
                  {_imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <img 
                          src={_imagePreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <div className=&quot;flex justify-end&quot;>
              <Button 
<<<<<<< HEAD
                type=&quot;submit&quot; 
                disabled={isSubmitting}
                className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
              >
                {isSubmitting ? &quot;Publishing...&quot; : &quot;Publish Product&quot;}
=======
                type="submit" 
                disabled={_isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {_isSubmitting ? "Publishing..." : "Publish Product"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value=&quot;ai&quot;>
        <AIListingGenerator 
<<<<<<< HEAD
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues(&quot;title&quot;),
            category: form.getValues(&quot;category&quot;)
          }}
=======
          onApplyGenerated={_handleApplyGenerated}
          initialValues={_{
            title: form.getValues("title"), _category: form.getValues("category")}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </TabsContent>
    </Tabs>
  )
}