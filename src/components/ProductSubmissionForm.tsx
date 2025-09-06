
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {

  Form
  FormControl
  FormDescription
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AIListingGenerator } from '@/components/listing/AIListingGenerator'
import { Sparkles } from 'lucide-react'
// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters')
  description: z.string().min(10, 'Description must be at least 10 characters')
  price: z
    .string()
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: 'Price must be a valid number'
    })
  category: z.string().min(1, 'Please select a category')
  image:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  video:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  model:
    typeof window === 'undefined'
      ? z.any().optional()
      : z.instanceof(File).optional()
  tags: z.string().optional()
})
// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>
export function ProductSubmissionForm() {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState(null as string | null)
  const [activeTab, setActiveTab] = React.useState('manual')

import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router",
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      tags: ""}}),
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("image", file),
      const reader = new FileReader(),
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      },
      reader.readAsDataURL(file)
    }
  },

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("video", file)
    }
  },

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0],
    if (file) {
      form.setValue("model", file)
    }
  },

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description),
    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),
    
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    try {
      // Create the product listing
      const productData = {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
        title: values.title,
        description: values.description,
        price: parse_float (values.price),
        category: values.category,
        currency: 'USD', // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],
        author: {
          name: user.displayName || 'Anonymous Creator',
          id: user.id,
        },
        createdAt: new Date().toISOString(),

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single()
      if (productError) {
        throw new Error(productError.message)
      }
      let imagePublicUrl: string | undefined
      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath)
        imagePublicUrl = publicUrlData.publicUrl
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({
            images: [imagePublicUrl]
          })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(videoPath, values.video)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(videoPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ video_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(modelPath, values.model)
        if (uploadError) {
          throw new Error(uploadError.message)
        }
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(modelPath)
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ model_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
        }
      }
      // Send listing to moderation service
      try {
        await supabase.functions.invoke('moderate-listing', {
          body: {
            listingId: productRecord.id
            listingType: 'product'
            description: values.description
            images: imagePublicUrl ? [imagePublicUrl] : []
            sellerId: user.id
          }
        })
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err })
      }
      // Show success message
      toast({
        title: 'Product Published!'
        description: 'Your product has been successfully published on Zion.'
      })
        .single(),
        
      if (productError) {
        throw new Error(productError.message)
import React from "react",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import z from "zod",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { useRouter } from "next/router",;
import Image from 'next/image', // Import next/image;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AIListingGenerator } from '@/components/listing/AIListingGenerator';
import { Sparkles } from 'lucide-react';
// Define the form schema with zod;
const productSchema = z && z.object({;
  title: z && z.string().min(3, 'Title must be at least 3 characters'),;
  description: z && z.string().min(10, 'Description must be at least 10 characters'),;
  price: z;
    .string();
    .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
      message: 'Price must be a valid number',;
    }),;
  category: z && z.string().min(1, 'Please select a category'),;
  image:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  video:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  model:;
    typeof window === 'undefined';
      ? z && z.any().optional();
      : z && z.instanceof(File).optional(),;
  tags: z && z.string().optional(),;
});
// Type for our form values;
type ProductFormValues = z && z.infer<typeof productSchema>;

export function ProductSubmissionForm() {;
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React && React.useState(false);
  const [imagePreview, setImagePreview] = React && React.useState(null as string | null);
  const [activeTab, setActiveTab] = React && React.useState('manual');

  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;
      title: '',;
      description: '',;
      price: '',;
      category: '',;
      video: undefined,;
      model: undefined,;
      tags: '',;
    },;
  });

  // Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('image', file);
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setImagePreview(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('video', file);
    }
  };

  const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('model', file);
    }
  };

  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {;
    form && form.setValue('description', content && content.description);
    form && form.setValue('tags', content && content.tags.join(', '));
    // Set a default price as the middle of the suggested range;
    const averagePrice = (;
      (content && content.suggestedPrice.min + content && content.suggestedPrice.max) /;
      2;
    ).toFixed(2);
    form && form.setValue('price', averagePrice);

    // Switch to the manual tab to show applied content;
    setActiveTab('manual');
  };

  // Handle form submission;
  const onSubmit = async (values: ProductFormValues,) => {;
    if (!user) {;
      toast({;
        title: 'Authentication Required',;
        description: 'You must be logged in to publish products',;
        variant: 'destructive',;
      });
      return;
    }

    setIsSubmitting(true);

    try {;
      // Create the product listing;
      const productData = {;
        title: values && values.title,;
        description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;
        currency: 'USD', // Default currency;
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [],;
        author: {;
          name: user && user.displayName || 'Anonymous Creator',;
          id: user && user.id,;
        },;
        createdAt: new Date().toISOString(),;
      };

      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single();

      if (productError) {;
        throw new Error(productError && productError.message);
      }

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it;
      if (values && values.image) {;
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(imagePath, values && values.image);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData && publicUrlData.publicUrl;

        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({;
            images: [imagePublicUrl],;
          });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload video if provided;
      if (values && values.video) {;
        const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(videoPath, values && values.video);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(videoPath);

        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ video_url: publicUrlData && publicUrlData.publicUrl });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Upload model if provided;
      if (values && values.model) {;
        const modelPath = `product_models/${productRecord && productRecord.id}/${values && values.model.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(modelPath, values && values.model);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(modelPath);

        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ model_url: publicUrlData && publicUrlData.publicUrl });
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }

      // Send listing to moderation service;
      try {;
        await supabase && supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord && productRecord.id,;
            listingType: 'product',;
            description: values && values.description,;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user && user.id,;
          },;
        });
      } catch (err) {;
        logErrorToProduction('Error invoking moderation:', { data: err });
      }

      
      // Show success message
      toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),
      
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
      // Redirect to product page
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
        title: 'Publication Failed'
        title: 'Publication Failed',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
=======
      <TabsContent value='manual'>
      
      <TabsContent value="manual">


        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          className='data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple'>;
          <Sparkles className='h-4 w-4 mr-2' />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;

      <TabsContent value='manual'>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-6'>;
            <FormField

      // Show success message;
      toast ({
        title: 'Product Published!',
        description: 'Your product has been successfully published on Zion.',
      });
      // Redirect to product page;
      router.push (`/marketplace / listing/${product_record.id}`);
    } catch (error) {
      toast ({
        title: 'Publication Failed',
        description:;
          error instanceof Error ? error.message : 'An unknown error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <Tabs value={active_tab} onValueChange={setActiveTab} className='w - full'>;
      <TabsList className='grid grid - cols - 2 mb - 6'>;
        <TabsTrigger;
          value='manual';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger;
          value='ai';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          <Sparkles className='h - 4 w - 4 mr - 2' />;
          AI - Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value='manual'>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
            <FormField;
              control={form.control}
              name='title'
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'title'>
              }) => {
                const { onChange, onBlur, value, ref } = field; return (
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {
                const { onChange, onBlur, value, ref } = field,
                return (


                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                field: ControllerRenderProps<ProductFormValues, 'title'>;
              }) => {;
                const { onChange, onBlur, value, ref } = field;                return (
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input

                        ref={ref}                      />;

                        placeholder="Enter product title"
;
      // Show success message;
      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;
      // Redirect to product page;
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;
        title: "Publication Failed",;
        description: error instanceof Error ? error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return (;
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value="manual">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {;
                const { onChange, onBlur, value, ref } = field,;
                return (;
                  <FormItem>;
                    <FormLabel>Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        placeholder="Enter product title";
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                      />;

                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                );
              }}
            />;

                field: ControllerRenderProps < ProductFormValues, 'title'>;
              }) => {
                const { on_change, on_blur, value, ref } = field; return (
            <FormField;
              control={form.control}
              name="description"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
              name="description";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your product in detail...";
                      className="min-h-32";
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
=======
            />
            <FormField
              control={form.control}
              name='model'              render={() => (
            />;
            <FormField;
              control={form.control}
              name="model"
              render={() => (
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>

}
  setIsSubmitting (false);


      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
          }}
        />;
      </TabsContent>;
    </Tabs>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
