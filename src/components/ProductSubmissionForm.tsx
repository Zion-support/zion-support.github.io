import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router",
import Image from 'next/image', // Import next/image,
import {logErrorToProduction} from '@/utils/productionLogger',import Image from 'next/image'; // Import next/image,
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",import { Sparkles } from 'lucide-react'

// Define the form schema with zod,
const productSchema = z.object({
  title: z.string().min(3, &quot;Title must be at least 3 characters&quot;),
  description: z.string().min(10, &quot;Description must be at least 10 characters&quot;),
  price: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: &quot;Price must be a valid number&quot}),
  category: z.string().min(1, &quot;Please select a category&quot;),
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

// Define the form schema with zod,
const productSchema = z.object({title: z.string().min(3, _"Title must be at least 3 characters"), description: z.string().min(10, _"Description must be at least 10 characters"), price: z
    .string()
    .refine(_(val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, _{
      message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  tags: z.string().optional()}),

// Type for our form values,
type ProductFormValues = z.infer<typeof productSchema>,

export function ProductSubmissionForm() {
  const { user } = useAuth(),
  const { toast } = useToast(),
  const router = useRouter(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [imagePreview, setImagePreview] = React.useState(null as string | null),
  const [activeTab, setActiveTab] = React.useState("manual"),  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState(&quot;manual&quot;);
  
  // Initialize the form,
const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "&quot;,
      description: "&quot;,
      price: "&quot;,
      category: "&quot;,
      video: undefined,
      model: undefined,
      tags: ""}}),  
  // Handle image upload preview,
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("image", file),
      const reader = new FileReader(),      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      },
      reader.readAsDataURL(file)
  const form = useForm<ProductFormValues>({resolver: zodResolver(productSchema), defaultValues: {
      title: "", description: "", price: "", category: "", video: undefined, model: undefined, tags: ""}});
  
  // Handle image upload preview,
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string)};
      reader.readAsDataURL(file)
    }
  },

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("video", file)    }
  },

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("model", file)    }
  },

  // Apply AI-generated content to the form,
const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description),
    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range,
const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content,
setActiveTab("manual")
  },  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];
    if (file) {
      form.setValue("video", file)}
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {const file = e.target.files?.[0];
    if (file) {
      form.setValue("model", file)}
  };

  // Apply AI-generated content to the form,
const handleApplyGenerated = (content: unknown) => {form.setValue("description", content.description);
    form.setValue("tags", content.tags.join(", _"));
    
    // Set a default price as the middle of the suggested range,
const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price", averagePrice);
    
    // Switch to the manual tab to show applied content,
setActiveTab("manual")};

  // Handle form submission,
const onSubmit = async (values: ProductFormValues) => {if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return      return
    }

    setIsSubmitting(true),
    
    try {
      // Create the product listing,
const productData = {
        title: values.title,
        description: values.description,
        price: parseFloat(values.price),
        category: values.category,
        currency: "USD", // Default currency,
tags: values.tags ? values.tags.split().map(tag => tag.trim()) : [],        author: {
          name: user.displayName || &quot;Anonymous Creator&quot;,
          id: user.id},
        createdAt: new Date().toISOString()},
    try {_// Create the product listing,
const productData = {
        title: values.title, description: values.description, price: parseFloat(values.price), category: values.category, currency: "USD", _// Default currency,
tags: values.tags ? values.tags.split(', _').map(tag => tag.trim()) : [], author: {
          name: user.displayName || "Anonymous Creator", id: user.id},
        createdAt: new Date().toISOString()};
      
      const {data: productRecord, error: productError} = await supabase
        .from('productlistings')
        .insert([productData])
        .select('id')
        .single(),
        
      if (productError) {
        throw new Error(productError.message)
      }
      let imagePublicUrl: string | undefined,

      // If we have an image, upload it,
if (values.image) {
        const imagePath = `productimages/${productRecord.id}/${values.image.name}`,
        const { error: uploadError } = await supabase.storage          .from('products')
          .upload(imagePath, values.image),
          
        if (uploadError) {
          throw new Error(uploadError.message)
        }        
        // Get the public window.URL for the image,
const {data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(imagePath),
        imagePublicUrl = publicUrlData.publicUrl,
          
        // Update the product with the image window.URL,
const {error: updateError} = await supabase
          .from('productlistings')
          .update({
            images: [imagePublicUrl]
          })
          .eq('id', productRecord.id),
          
      if (updateError) {
        throw new Error(updateError.message)
      }
    }

      // Upload video if provided,
if (values.video) {
        const videoPath = `productvideos/${productRecord.id}/${values.video.name}`,
        const { error: uploadError } = await supabase.storage          .from('products')
          .upload(videoPath, values.video),

        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const {data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(videoPath),

        const {error: updateError} = await supabase
          .from('productlistings')
          .update({ videourl: publicUrlData.publicUrl })
          .eq('id', productRecord.id),

        if (updateError) {
          throw new Error(updateError.message)
        }
      }

      // Upload model if provided,
if (values.model) {
        const modelPath = `productmodels/${productRecord.id}/${values.model.name}`,
        const { error: uploadError } = await supabase.storage          .from('products')
          .upload(modelPath, values.model),

        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const {data: publicUrlData} = supabase.storage
          .from('products')
          .getPublicUrl(modelPath),

        const {error: updateError} = await supabase
          .from('productlistings')
          .update({ modelurl: publicUrlData.publicUrl })
          .eq('id', productRecord.id),

        if (updateError) {
          throw new Error(updateError.message)
        }      }

      // Send listing to moderation service,
try {await supabase.functions.invoke('moderate-listing', _{
          body: {
            listingId: productRecord.id,
            listingType: 'product',
            description: values.description,
            images: imagePublicUrl ? [imagePublicUrl] : [],
            sellerId: user.id}
        })
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err })
      }
      
      // Show success message,
toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),      
      // Redirect to product page,
router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6&quot;>
        <TabsTrigger value=&quot;manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple&quot;>
            listingId: productRecord.id, listingType: 'product', description: values.description, images: imagePublicUrl ? [imagePublicUrl] : [], sellerId: user.id}
        })
      } catch (err) {logErrorToProduction('Error invoking moderation:', _{ data: err})
      }
      
      // Show success message,
toast({title: "Product Published!", description: "Your product has been successfully published on Zion."});
      
      // Redirect to product page,
router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {toast({
        title: "Publication Failed", description: error instanceof Error ? error.message : "An unknown error occurred", variant: "destructive"})
    } finally {setIsSubmitting(false)}
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
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
            <FormField,
control={form.control}
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {
                const { onChange, onBlur, value, ref } = field,      <TabsContent value="manual">
        <Form {_...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField,
control={form.control}
              name="title"
              render={_(_{ field}: {field: ControllerRenderProps<ProductFormValues, _"title">}) => {const { onChange, onBlur, value, ref} = field;
                return (
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input,
placeholder=&quot;Enter product title&quot;
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}                      />
                    </FormControl>
                    <FormDescription>
                      Create a compelling title that describes your product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <FormField,
control={form.control}
              name="description"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (              control={form.control}
              name="description"
              render={_(_{ field}: {field: ControllerRenderProps<ProductFormValues, _"description">}) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea,
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
              <FormField,
control={form.control}
                name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type=&quot;number&quot; min=&quot;0&quot; step=&quot;0.01&quot; placeholder=&quot;0.00&quot; {...field} />
                control={form.control}
                name="price"
                render={_(_{ field}: {field: ControllerRenderProps<ProductFormValues, _"price">}) => (
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

              <FormField,
control={form.control}
                name="category"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (                control={form.control}
                name="category"
                render={_(_{ field}: {field: ControllerRenderProps<ProductFormValues, _"category">}) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select,
className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm&quot;
                        {...field}                      >
                        <option value="&quot;>Select a category</option>
                        <option value=&quot;digitalproduct&quot;>Digital Product</option>
                        <option value=&quot;service&quot;>Service</option>
                        <option value=&quot;aitool&quot;>AI Tool</option>
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

            <FormField,
control={form.control}
              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;Enter tags separated by commas&quot; {...field} />
              control={form.control}
              name="tags"
              render={_(_{ field}: {field: ControllerRenderProps<ProductFormValues, _"tags">}) => (
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

            <FormField,
control={form.control}
              name=&quot;image&quot;
              render={() => (                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input,
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
                        <Image,
src={imagePreview}
                          alt=&quot;Product image preview&quot;
                          width={600} // Example width, adjust as needed,
height={400} // Example height, adjust as needed,
className=&quot;w-full h-full object-cover&quot;
                          priority={false} // Preview images are not LCP                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField,
control={form.control}
              name=&quot;video&quot;
              render={() => (                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type=&quot;file&quot; accept=&quot;video/mp4&quot; onChange={handleVideoChange} className=&quot;cursor-pointer&quot; />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField,
control={form.control}
              name=&quot;model&quot;
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type=&quot;file&quot; accept=&quot;model/gltf-binary,.glb&quot; onChange={handleModelChange} className=&quot;cursor-pointer&quot; />                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=&quot;flex justify-end&quot;>
              <Button,
type=&quot;submit&quot; 
                disabled={isSubmitting}
                className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
              >
                {isSubmitting ? &quot;Publishing...&quot; : &quot;Publish Product&quot}              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value=&quot;ai&quot;>
        <AIListingGenerator,
onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues(&quot;title&quot;),
            category: form.getValues(&quot;category&quot;)
          }}        />
      </TabsContent>
    </Tabs>
  )
}