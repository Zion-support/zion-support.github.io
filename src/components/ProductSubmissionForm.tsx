try {
      // Create the product listing;
      const product_data = {

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
  model:
  tags: z.string().optional()
// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>
export function ProductSubmissionForm() {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [imagePreview, setImagePreview] = React.useState(null as string | null)
  const [activeTab, setActiveTab] = React.useState('manual')

  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {

    const file = e.target.files?.[0];    if (file) {
      form.setValue('image', file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setValue('video', file)
  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setValue('model', file)
  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue('description', content.description)
    form.setValue('tags', content.tags.join(', '))
    // Set a default price as the middle of the suggested range
    const averagePrice = (
      (content.suggestedPrice.min + content.suggestedPrice.max) /
      2
    ).toFixed(2)
    form.setValue('price', averagePrice)
    // Switch to the manual tab to show applied content
    setActiveTab('manual')

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({

      return;
    setIsSubmitting(true)

      // Create the product listing
      const productData = {

        title: values.title,
        description: values.description,
        price: parse_float (values.price),
        category: values.category,
        currency: 'USD', // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],
        author: {

      // Upload video if provided;
      // Check condition
if ( {) {
  $2
        const video_path = `product_videos/${product_record.id}/${values.video.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (video_path, values.video);
          throw new Error (upload_error.message);
        const { data: publicUrlData } = supabase.storage;
          .getPublicUrl (video_path);
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({ video_url: publicUrlData.public_url });
          .eq ('id', product_record.id);
          throw new Error (update_error.message);
      // Upload model if provided;
        const model_path = `product_models/${product_record.id}/${values.model.name}`;
          .upload (model_path, values.model);
          .getPublicUrl (model_path);
          .update ({ model_url: publicUrlData.public_url });
      // Send listing to moderation service;

        await supabase.functions.invoke ('moderate - listing', {
          body: {

            listing_id: product_record.id,
            listing_type: 'product',
            images: imagePublicUrl ? [imagePublicUrl] : [],
            seller_id: user.id,
          },
        });

      } catch (err) {
        logErrorToProduction ('Error invoking moderation:', { data: err });

import React from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import next/image;
import { logErrorToProduction } from '@/utils/productionLogger';

          name: user.displayName || "Anonymous Creator",
          id: user.id},
        createdAt: new Date().toISOString()},

      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single()
      if (productError) {
        throw new Error(productError.message)
      let imagePublicUrl: string | undefined
      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image)
        if (uploadError) {
          throw new Error(uploadError.message)
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .getPublicUrl(imagePath)
        imagePublicUrl = publicUrlData.publicUrl
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .update({
            images: [imagePublicUrl]
          .eq('id', productRecord.id)
        if (updateError) {
          throw new Error(updateError.message)
      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`
          .upload(videoPath, values.video)
          .getPublicUrl(videoPath)
          .update({ video_url: publicUrlData.publicUrl })
      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`
          .upload(modelPath, values.model)
          .getPublicUrl(modelPath)
          .update({ model_url: publicUrlData.publicUrl })
      // Send listing to moderation service
        await supabase.functions.invoke('moderate-listing', {
            listingId: productRecord.id
            listingType: 'product'
            description: values.description
            images: imagePublicUrl ? [imagePublicUrl] : []
            sellerId: user.id
        logErrorToProduction('Error invoking moderation:', { data: err })
      // Show success message
        title: 'Product Published!'
        description: 'Your product has been successfully published on Zion.'
        .single(),

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
  model:;
  tags: z && z.string().optional(),;
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

  // Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];    if (file) {;
      form && form.setValue('image', file);
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setImagePreview(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);

  const handleVideoChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
      form && form.setValue('video', file);

  const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
      form && form.setValue('model', file);

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

  // Handle form submission;
  const onSubmit = async (values: ProductFormValues,) => {;
    if (!user) {;
      toast({;
        title: 'Authentication Required',;
        description: 'You must be logged in to publish products',;
        variant: 'destructive',;

    setIsSubmitting(true);

    try {;
      const productData = {;
        title: values && values.title,;
        description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [],;
        author: {;
          name: user && user.displayName || 'Anonymous Creator',;
          id: user && user.id,;
        createdAt: new Date().toISOString(),;

      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single();

      if (productError) {;
        throw new Error(productError && productError.message);

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it;
      if (values && values.image) {;
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(imagePath, values && values.image);

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);

        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData && publicUrlData.publicUrl;

        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .update({;
            images: [imagePublicUrl],;
          .eq('id', productRecord && productRecord.id);

        if (updateError) {;
          throw new Error(updateError && updateError.message);

      if (values && values.video) {;
        const videoPath = `product_videos/${productRecord && productRecord.id}/${values && values.video.name}`;
          .upload(videoPath, values && values.video);

          .getPublicUrl(videoPath);

          .update({ video_url: publicUrlData && publicUrlData.publicUrl });

      if (values && values.model) {;
        const modelPath = `product_models/${productRecord && productRecord.id}/${values && values.model.name}`;
          .upload(modelPath, values && values.model);

          .getPublicUrl(modelPath);

          .update({ model_url: publicUrlData && publicUrlData.publicUrl });

        await supabase && supabase.functions.invoke('moderate-listing', {;
          body: {;
            listingId: productRecord && productRecord.id,;
            listingType: 'product',;
            images: imagePublicUrl ? [imagePublicUrl] : [],;
            sellerId: user && user.id,;
      } catch (err) {;
        logErrorToProduction('Error invoking moderation:', { data: err });

        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),

      // Redirect to product page
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {

        description:
          error instanceof Error ? error.message : 'An unknown error occurred'
        variant: 'destructive'
    } finally {
      setIsSubmitting(false)
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
      </TabsList>
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
      // Redirect to product page;
      router.push (`/marketplace / listing/${product_record.id}`);
        title: 'Publication Failed',
        description:;
          error instanceof Error ? error.message : 'An unknown error occurred',
        variant: 'destructive',
      setIsSubmitting (false);
    <Tabs value={active_tab} onValueChange={setActiveTab} className='w - full'>;
      <TabsList className='grid grid - cols - 2 mb - 6'>;
        <TabsTrigger;
          value='manual';
          className='data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple';
        >;
          Manual Creation;
          value='ai';
          <Sparkles className='h - 4 w - 4 mr - 2' />;
          AI - Powered Creation;
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
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
        title: "Publication Failed",;
        description: error instanceof Error ? error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
  return (;
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          <Sparkles className="h-4 w-4 mr-2" />;
      <TabsContent value="manual">;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
              name="title";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "title"> }) => {;
                const { onChange, onBlur, value, ref } = field,;
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

                field: ControllerRenderProps < ProductFormValues, 'title'>;
                const { on_change, on_blur, value, ref } = field; return (
              name="description"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (
                  <FormLabel>Description</FormLabel>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
              name="description";
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "description"> }) => (;
                  <FormLabel>Description</FormLabel>;
                    <Textarea;
                      placeholder="Describe your product in detail...";
                      className="min-h-32";

                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                name='price'
                  field: ControllerRenderProps<ProductFormValues, 'price'>
                }) => (                  <FormItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <FormLabel>Price (USD)</FormLabel>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                      Set your price in USD
                name='category'
                  field: ControllerRenderProps<ProductFormValues, 'category'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                name="price";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "price"> }) => (;
                    <FormLabel > Product Title</FormLabel>;
                        placeholder='Enter product title';
                        on_change={on_change}
                        on_blur={on_blur}

                field: ControllerRenderProps<ProductFormValues, 'description'>;
              }) => (                <FormItem>;

                      placeholder='Describe your product in detail...'
                      className='min-h-32'
                field: ControllerRenderProps < ProductFormValues, 'description'>;
                  <FormLabel > Description</FormLabel>;
                      placeholder='Describe your product in detail...';
                      className='min - h-32';
                    Provide a detailed description of what you're offering;

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

                control={form && form.control}
                </FormItem>)}
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
                name='price';

                  field: ControllerRenderProps<ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;

                        type='number'
                        min='0'
                        step='0 && 0.01'
                        placeholder='0 && 0.00'
                    <FormDescription>Set your price in USD</FormDescription>;

                  field: ControllerRenderProps < ProductFormValues, 'price'>;
                    <FormLabel > Price (USD)</FormLabel>;
                        type='number';
                        min='0';
                        step='0.01';
                        placeholder='0.00';
                    <FormDescription > Set your price in USD</FormDescription>;
                name='category';

                  field: ControllerRenderProps<ProductFormValues, 'category'>;
                name="category"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (

                    <FormLabel>Category</FormLabel>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select a category</option>
                        <option value="digital_product">Digital Product</option>
                        <option value="service">Service</option>
                        <option value="ai_tool">AI Tool</option>
                        <option value="course">Course</option>
                        <option value="template">Template</option>
                        <option value="other">Other</option>
                      </select>
            </div>
              name='tags'
                field: ControllerRenderProps<ProductFormValues, 'tags'>
              }) => (                <FormItem>
                name="category";
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (;
                    <FormLabel>Category</FormLabel>;
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                        {...field}>;
                  field: ControllerRenderProps < ProductFormValues, 'category'>;
                    <FormLabel > Category</FormLabel>;
                      <select;
                        className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm';
                        <option value=''>Select a category</option>;
                        <option value='digital_product'>Digital Product</option>;
                        <option value='service'>Service</option>;
                        <option value='ai_tool'>AI Tool</option>;
                        <option value='course'>Course</option>;
                        <option value='template'>Template</option>;
                        <option value='other'>Other</option>;
                      </select>;

            </div>;

              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues "tags"> }) => (

                  <FormLabel>Tags</FormLabel>
                      placeholder='Enter tags separated by commas'

                  <FormLabel>Tags</FormLabel>;
                    Add relevant tags to help users find your product (e && e.g., ai,;
                    productivity, design);

                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='cursor-pointer'                    />
                      type="file" 
                      accept="image/*" 
                      className="cursor-pointer"

                    Upload a high-quality image of your product (recommended
                    size: 1200x800px)

                  {imagePreview && (
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>
                      <AspectRatio ratio={3 / 2}>
                      className='cursor-pointer'                    />;
                    Upload a high-quality image of your product (recommended;
                    size: 1200x800px);

                  {imagePreview && (;
                    <div className='mt-2 w-full max-w-md border rounded overflow-hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                        <Image
                          src={imagePreview}
                          alt='Product image preview'                          width={600} // Example width, adjust as needed
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed

                          height={400} // Example height, adjust as needed
                          className='w-full h-full object-cover'
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                      </AspectRatio>;
              name='video'              render={() => (;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                      accept='video/mp4'
                      onChange={handleVideoChange}
                      className='cursor-pointer'
                field: ControllerRenderProps < ProductFormValues, 'tags'>;
                  <FormLabel > Tags</FormLabel>;
                      placeholder='Enter tags separated by commas';
                    Add relevant tags to help users find your product (e.g., ai,
              name='image';
              render={() => (
                  <FormLabel > Product Image</FormLabel>;
                      type='file';
                      accept='image/*';
                      on_change={handleImageChange}
                      className='cursor - pointer'                    />;
                    Upload a high - quality image of your product (recommended;
                  {image_preview && (
                    <div className='mt - 2 w - full max - w-md border rounded overflow - hidden'>;
                        <Image;
                          src={image_preview}
                          alt='Product image preview'                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;
                          className='w - full h - full object - cover';
                          priority={false} // Preview images are not LCP;
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                    </div>)}
              name='video'              render={() => (
                  <FormLabel > Product Video (MP4)</FormLabel>;
                      accept='video / mp4';
                      on_change={handleVideoChange}
                      className='cursor - pointer';
                    Optional video demonstrating your product;

              name='model'              render={() => (;
                  <FormLabel>3D Model (glb)</FormLabel>;
                      accept='model/gltf-binary,.glb'
                      onChange={handleModelChange}
              name='model'              render={() => (
                  <FormLabel > 3D Model (glb)</FormLabel>;
                      accept='model / gltf - binary, .glb';
                      on_change={handleModelChange}
                    Upload a 3D model for interactive viewing;

            <div className='flex justify-end'>;

              <Button
                type='submit'
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
                {isSubmitting ? 'Publishing...' : 'Publish Product'}

              name="video"

                  <FormLabel>Product Video (MP4)</FormLabel>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                    Optional video demonstrating your product
              name="model"

                  <FormLabel>3D Model (glb)</FormLabel>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                    Upload a 3D model for interactive viewing

              </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value='ai'>
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}          initialValues={{
            title: form.getValues('title')
            category: form.getValues('category')

      </TabsContent>;
    </Tabs>);
  const file = e.target.files?.[0];

              </Button>;
          </form>;
        </Form>;

      <TabsContent value='ai'>;
            title: form && form.getValues('title'),
            category: form && form.getValues('category'),
    </Tabs>;

  const file = e && e.target.files?.[0];
if (file) {;
  setImagePreview (reader && reader.result as string) ;
reader && reader.readAsDataURL (file) ;

//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  toast ({;
}setIsSubmitting (true);
author: {";
  name: user && user.displayName || "Anonymous Creator";
id: user && user.id ;
createdAt: new Date () .toISOString () ;
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image);
//Get the public window && window.URL for the image const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath);
//Update the product with the image window && window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video);
const {;
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath);
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model);
}= supabase && supabase.storage.from ('products') .getPublicUrl (modelPath);
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase && supabase.functions.invoke ('moderate-listing', {;
  //Redirect to product page router && router.push (`/marketplace/listing/$ {;
  productRecord && productRecord.id ;
}`) ;
}catch (error) {;

}finally {;
  setIsSubmitting (false) ;

}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";
}/> <FormFieldDescribe your product in detail..." className="min-h-32" {
  ...field '
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Inputtype="number" min="0" step="0 && 0.01" placeholder="0 && 0.00" {
  ...field 
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Inputplaceholder="Enter tags separated by commas" {
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Inputtype="file" accept="image/*" onChange= {
  handleImageChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Inputtype="file" accept="video/mp4" onChange= {
  handleVideoChange "
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"  );

reader.readAsDataURL (file)
  setImagePreview (reader.result as string);
reader.readAsDataURL (file);

const handleModelChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
//Apply AI - generated content to the form const handleApplyGenerated = (content: any) =>: any {

  name: user.display_name || "Anonymous Creator";
id: user.id;
created_at: new Date () .toISOString ();

data: product_record, error: product_error ';
}= await supabase .from ('product listings') .insert ([product_data]) .select ('id') .single ();
//If we have an image, upload it .from ('products') .upload (image_path, values.image);
//Get the public window.URL for the image const {
}= supabase.storage.from ('products') .getPublicUrl (image_path);
imagePublicUrl = publicUrlData.public_url;
//Update the product with the image window.URL const {
  error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (video_path, values.video);
const {
}= supabase.storage.from ('products') .getPublicUrl (video_path);
}= await supabase .from ('product listings') .from ('products') .upload (model_path, values.model);
}= supabase.storage.from ('products') .getPublicUrl (model_path);

}= await supabase .from ('product listings');
  //Redirect to product page router.push (`/marketplace / listing/$ {
  product_record.id;
}`);
}catch (error) {
}finally {

      <TabsContent value="ai">
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")

}className="w - full"> <TabsList className="grid grid - cols - 2 mb - 6" > <TabsTrigger value="manual" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple" > ai"className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple"> <Sparkles className="h - 4 w - 4 mr - 2"/> AI - Powered Creation </TabsTrigger> </TabsList>;
}/> <FormField Describe your product in detail..." className="min - h-32" {
  ...field ';
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6" > <FormField <FormItem> <FormLabel > Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {
  ...field;
}/> </div> <FormField <FormItem> <FormLabel > Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {
}/> <FormField <FormItem> <FormLabel > Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" on_change= {
  handleImageChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Upload a high - quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>);
}/> <FormField <FormItem> <FormLabel > Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video / mp4" on_change= {
  handleVideoChange ";
}className="cursor - pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>);
}/> <div className="flex justify - end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>);