<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import z from "zod";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {useToast} from "@/hooks/use-toast";
import {useNavigate} from "react-router-dom";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {AIListingGenerator} from "@/components/listing/AIListingGenerator";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD



import React from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
import { useToast } from "@/hooks/use-toast",
import { useNavigate } from "react-router-dom",
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
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";
import { Sparkles } from "lucide-react";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",
import { Sparkles } from "lucide-react",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define the form schema with zod;
const productSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  description: z && z.string().min(10, "Description must be at least 10 characters");
  price: z && z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
    message: "Price must be a valid number"}),;
  category: z && z.string().min(1, "Please select a category");
  image: z && z.instanceof(File).optional(),;
  tags: z && z.string().optional()}),;

// Type for our form values;
type ProductFormValues = z && z.infer<typeof productSchema>;

export function ProductSubmissionForm() {;
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React && React.useState(false);
  const [imagePreview, setImagePreview] = React && React.useState(null as string | null);
  const [activeTab, setActiveTab] = React && React.useState("manual");
=======



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define the form schema with zod

const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    message: "Price must be a valid number"})
  category: z.string().min(1, "Please select a category");
  image: z.instanceof(File).optional()
  tags: z.string().optional()})
// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;
export function ProductSubmissionForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState("manual");
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    message: "Price must be a valid number"}),
  category: z.string().min(1, "Please select a category"),
  image: z.instanceof(File).optional(),
  tags: z.string().optional()}),

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ProductSubmissionForm() {;
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState("manual");
export function ProductSubmissionForm() {
  const { user } = useAuth(),
  const { toast } = useToast(),
  const navigate = useNavigate(),
  const [isSubmitting, setIsSubmitting] = React.useState(false),
  const [imagePreview, setImagePreview] = React.useState(null as string | null),
  const [activeTab, setActiveTab] = React.useState("manual"),
  
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema)
    defaultValues: {
      title: ""
      description: ""
      price: ""
      category: ""
      tags: ""}})
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      form.setValue("image", file),
      const reader = new FileReader(),
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      reader.readAsDataURL(file)
    }
  }
  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description);
    form.setValue("tags", content.tags.join(", "));
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price", averagePrice);
    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },
      reader.readAsDataURL(file)
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD

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

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: "Authentication Required"
        description: "You must be logged in to publish products"
        variant: "destructive"})
      return
    }
    setIsSubmitting(true);

    setIsSubmitting(true),
    
    try {
      // Create the product listing
      const productData = {
        title: values.title
        description: values.description
        price: parseFloat(values.price)
        category: values.category
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],
        author: {
          name: user.displayName |"Anonymous Creator"
          id: user.id}
        createdAt: new Date().toISOString()}
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single();
      if (productError) {
        throw new Error(productError.message)
      }
      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image);
        if (uploadError) {
          throw new Error(uploadError.message)
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
          throw new Error(updateError.message)
        }
      }
        .single(),
        
      if (productError) {
        throw new Error(productError.message)
import React from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import z from "zod",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { useNavigate } from "react-router-dom",;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
import { Sparkles } from "lucide-react",;
// Define the form schema with zod;
const productSchema = z.object({;
  title: z.string().min(3, "Title must be at least 3 characters"),;
  description: z.string().min(10, "Description must be at least 10 characters"),;
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
    message: "Price must be a valid number"}),;
  category: z.string().min(1, "Please select a category"),;
  image: z.instanceof(File).optional(),;
  tags: z.string().optional()}),;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
export function ProductSubmissionForm() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const navigate = useNavigate(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;
  const [activeTab, setActiveTab] = React.useState("manual"),;

      },
      reader.readAsDataURL(file)
    }
  },

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;
      title: "",;
      description: "",;
      price: "",;
      category: "",;
      tags: ""}}),;
<<<<<<< HEAD
<<<<<<< HEAD
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("image", file),;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setImagePreview(reader.result as string);
      },;
      reader.readAsDataURL(file);
    }
  },;
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual");
  },;
  // Handle image upload preview;
  const handleImageChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0],;
    if (file) {;
      form && form.setValue("image", file);
      const reader = new FileReader();
      reader && reader.onloadend = () => {;
        setImagePreview(reader && reader.result as string);
      };
      reader && reader.readAsDataURL(file);
    }
  };
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content: any) => {;
    form && form.setValue("description", content && content.description);
    form && form.setValue("tags", content && content.tags.join(", "));
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content && content.suggestedPrice.min + content && content.suggestedPrice.max) / 2).toFixed(2);
    form && form.setValue("price", averagePrice);
    // Switch to the manual tab to show applied content;
    setActiveTab("manual");
  };
  // Handle form submission;
  const onSubmit = async (values: ProductFormValues) => {;
    if (!user) {;
      toast({;
        title: "Authentication Required",;
        description: "You must be logged in to publish products",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Create the product listing;
      const productData = {;
        title: values.title,;
        description: values.description,;
        price: parseFloat(values.price),;
        category: values.category,;
        currency: "USD", // Default currency;
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],;
        author: {;
          name: user.displayName || "Anonymous Creator",;
          id: user.id},;
        createdAt: new Date().toISOString()},;
      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single(),;
      if (productError) {;
        throw new Error(productError.message);
      }
;
      // If we have an image, upload it;
      if (values.image) {;
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,;
        const { error: uploadError } = await supabase.storage;
          .from('products');
          .upload(imagePath, values.image),;
        if (uploadError) {;
          throw new Error(uploadError.message);
        }
;
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(imagePath),;
        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({;
            images: [publicUrlData.publicUrl];
          });
          .eq('id', productRecord.id),;
        if (updateError) {;
          throw new Error(updateError.message);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: "Authentication Required"
        description: "You must be logged in to publish products"
        variant: "destructive"})
      return
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    setIsSubmitting(true),
    


    try {
      // Create the product listing
      const productData = {
        title: values.title
        description: values.description
        price: parseFloat(values.price)
        category: values.category
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [];
        author: {
          name: user.displayName |"Anonymous Creator"
          id: user.id}
        createdAt: new Date().toISOString()}
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')



        }
      }
      
<<<<<<< HEAD

<<<<<<< HEAD
        }
      }
      
        }
      }
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Show success message
      toast({
        title: "Product Published!"
        description: "Your product has been successfully published on Zion."})
      // Redirect to product page
      navigate(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({
        title: "Publication Failed"
        description: error instanceof Error ? error.message : "An unknown error occurred"
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
<<<<<<< HEAD
    setIsSubmitting(true);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      // Create the product listing;
      const productData = {;
        title: values && values.title,;
        description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;
        currency: "USD", // Default currency;
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [];
        author: {;
          name: user && user.displayName || "Anonymous Creator",;
          id: user && user.id},;
        createdAt: new Date().toISOString()},;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single();
<<<<<<< HEAD
<<<<<<< HEAD
      if (productError) {;
        throw new Error(productError && productError.message);
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      if (productError) {;
        throw new Error(productError && productError.message);
      }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // If we have an image, upload it;
      if (values && values.image) {;
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;
          .from('products');
          .upload(imagePath, values && values.image);
<<<<<<< HEAD
<<<<<<< HEAD
        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;
          .from('products');
          .getPublicUrl(imagePath);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({ ;
            images: [publicUrlData && publicUrlData.publicUrl];
          });
          .eq('id', productRecord && productRecord.id);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Show success message;
      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Redirect to product page;
      navigate(`/marketplace/listing/${productRecord && productRecord.id}`);
    } catch (error) {;
      toast({;
        title: "Publication Failed",;
        description: error instanceof Error ? error && error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======

    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  },


<<<<<<< HEAD
  return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  }
  },

  return (
<<<<<<< HEAD
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
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
      // Show success message;
      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;
      // Redirect to product page;
      navigate(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;
        title: "Publication Failed",;
        description: error instanceof Error ? error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
  return (
import React from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import z from "zod",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { useNavigate } from "react-router-dom",;
;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;
import { Sparkles } from "lucide-react",;
;
// Define the form schema with zod;
const productSchema = z.object({;
  title:z.string().min(3, "Title must be at least 3 characters"),;
  description:z.string().min(10, "Description must be at least 10 characters"),;
  price:z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;
    message:"Price must be a valid number"}),;
  category:z.string().min(1, "Please select a category"),;
  image:z.instanceof(File).optional(),;
  tags:z.string().optional()}),;
;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
;
export function ProductSubmissionForm() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const navigate = useNavigate(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;
  const [activeTab, setActiveTab] = React.useState("manual"),;
  ;
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver:zodResolver(productSchema),;
    defaultValues:{;
      title:"",;
      description:"",;
      price:"",;
      category:"",;
      tags:""}}),;
  ;
  // Handle image upload preview;
  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0],;
    if (file) {;
      form.setValue("image", file),;
      const reader = new FileReader(),;
      reader.onloadend = () => {;
        setImagePreview(reader.result as string),;
      },;
      reader.readAsDataURL(file),;
    }
  },;
;
  // Apply AI-generated content to the form;
  const handleApplyGenerated = (content:any) => {;
    form.setValue("description", content.description),;
    form.setValue("tags", content.tags.join(", ")),;
    ;
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),;
    form.setValue("price", averagePrice),;
    ;
    // Switch to the manual tab to show applied content;
    setActiveTab("manual"),;
  },;
;
  // Handle form submission;
  const onSubmit = async (values:ProductFormValues) => {;
    if (!user) {;
      toast({;
        title:"Authentication Required",;
        description:"You must be logged in to publish products",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsSubmitting(true),;
    ;
    try {;
      // Create the product listing;
      const productData = {;
        title:values.title,;
        description:values.description,;
        price:parseFloat(values.price),;
        category:values.category,;
        currency:"USD", // Default currency;
        tags:values.tags ? values.tags.split(',').map(tag => tag.trim()) :[],;
        author:{;
          name:user.displayName || "Anonymous Creator",;
          id:user.id},;
        createdAt:new Date().toISOString()},;
      ;
      const { data:productRecord, error:productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');
        .single(),;
        ;
      if (productError) {;
        throw new Error(productError.message),;
      }
;
      // If we have an image, upload it;
      if (values.image) {;
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`,;
        const { error:uploadError } = await supabase.storage;
          .from('products');
          .upload(imagePath, values.image),;
          ;
        if (uploadError) {;
          throw new Error(uploadError.message),;
        }
        ;
        // Get the public URL for the image;
        const { data:publicUrlData } = supabase.storage;
          .from('products');
          .getPublicUrl(imagePath),;
          ;
        // Update the product with the image URL;
        const { error:updateError } = await supabase;
          .from('product_listings');
          .update({ ;
            images:[publicUrlData.publicUrl];
          });
          .eq('id', productRecord.id),;
          ;
        if (updateError) {;
          throw new Error(updateError.message),;
        }
      }
      ;
      // Show success message;
      toast({;
        title:"Product Published!",;
        description:"Your product has been successfully published on Zion."}),;
      ;
      // Redirect to product page;
      navigate(`/marketplace/listing/${productRecord.id}`),;
    } catch (error) {;
      toast({;
        title:"Publication Failed",;
        description:error instanceof Error ? error.message :"An unknown error occurred",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            />;
            <FormField
              control={form && form.control}
              name="description"
      ;
      <TabsContent value="manual">;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Product Title</FormLabel>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <TabsContent value="manual">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <FormField
              control={form && form.control}
              name="title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Product Title</FormLabel>;
=======
import React from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import z from './zod';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { use_toast } from '@/hooks / use - toast';
import { use_navigate } from './react-router-dom';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';
import { AIListingGenerator } from '@/components / listing / AIListingGenerator';
import { Sparkles } from './lucide-react';
// Define the form schema with zod;
const product_schema = z.object ({
  title: z.string ().min (3, "Title must be at least 3 characters");
  description: z.string ().min (10, "Description must be at least 10 characters");
  price: z.string ().refine ((val) => !isNaN (parse_float (val)) && parse_float (val) >= 0, {
    message: "Price must be a valid number"}),
  category: z.string ().min (1, "Please select a category");
  image: z.instanceof (File).optional (),
  tags: z.string ().optional ()}),
// Type for our form values;
type ProductFormValues = z.infer < typeof product_schema>;
;
export /**
 * ProductSubmissionForm - Function description
 */
function ProductSubmissionForm() {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const navigate = use_navigate ();
  const [is_submitting, setIsSubmitting] = React.useState (false);
  const [image_preview, setImagePreview] = React.useState (null as string | null);
  const [active_tab, setActiveTab] = React.useState ("manual");
;
  // Initialize the form;
  const form = use_form < ProductFormValues>({
    resolver: zod_resolver (product_schema),
    default_values: {
      title: "",
      description: "",
      price: "",
      category: "",
      tags: ""}}),
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const file = e.target.files?.[0],
    // Check condition
if ( {) {
  $2
}
      form.set_value ("image", file);
      const reader = new FileReader ();
      reader.onloadend = () => {
        setImagePreview (reader.result as string);
      }
      reader.readAsDataURL (file);
    }
  }
;
  // Apply AI - generated content to the form;
  const handleApplyGenerated = (content: any) =>: any {
    form.set_value ("description", content.description);
    form.set_value ("tags", content.tags.join (", "));
;
    // Set a default price as the middle of the suggested range;
    const average_price = ((content.suggested_price.min + content.suggested_price.max) / 2).to_fixed (2);
    form.set_value ("price", average_price);
;
    // Switch to the manual tab to show applied content;
    setActiveTab ("manual");
  }
;
  // Handle form submission;
  const on_submit = async (values: ProductFormValues) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
    try {
      // Create the product listing;
      const product_data = {
        title: values.title,
        description: values.description,
        price: parse_float (values.price),
        category: values.category,
        currency: "USD", // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [];
        author: {
          name: user.display_name || "Anonymous Creator",
          id: user.id},
        created_at: new Date ().toISOString ()},
      const { data: product_record, error: product_error } = await supabase;
        .from ('product_listings');
        .insert ([product_data]);
        .select ('id');
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (product_error.message);
      }
      // If we have an image, upload it;
      // Check condition
if ( {) {
  $2
}
        const image_path = `product_images/${product_record.id}/${values.image.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (image_path, values.image);
;
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (image_path);
;
        // Update the product with the image URL;
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({
            images: [publicUrlData.public_url];
          });
          .eq ('id', product_record.id);
;
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Show success message;
      toast ({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),
      // Redirect to product page;
      navigate (`/marketplace / listing/${product_record.id}`);
    } catch (error) {
      toast ({
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"});
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
      <TabsList className="grid grid - cols - 2 mb - 6">;
        <TabsTrigger value="manual" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state = active]:bg - zion - purple / 20 data-[state = active]:text - zion - purple">;
          <Sparkles className="h - 4 w - 4 mr - 2" />;
          AI - Powered Creation;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value="manual">;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Product Title</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <FormControl>;
                    <Input placeholder="Enter product title" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Create a compelling title that describes your product;
                  </FormDescription>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Textarea ;
                      placeholder="Describe your product in detail..." ;
                      className="min-h-32" ;
                      {...field} ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </FormItem>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}

            />;


            <FormField
              control={form && form.control}
              name="description"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
                    <Textarea
                      placeholder="Describe your product in detail..." 
                      className="min-h-32" 
                      {...field} 
=======
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Describe your product in detail...";
                      className="min - h-32";
                      {...field}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                </FormItem>;
              )}
            />;
;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <FormField;
                control={form.control}
                name="price";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </FormItem>)}
            />;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              <FormField;
                control={form.control}
                name="price";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Price (USD)</FormLabel>;
                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                  </FormItem>;                )}
              />;
;
              <FormField;
                control={form.control}
                name="category";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              />;


              <FormField
                control={form && form.control}
                name="category"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                      <select;
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
                        {...field}
                      >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}>;
=======
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="category";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className="flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm";
                        {...field}
                      >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <option value="">Select a category</option>;
                        <option value="digital_product">Digital Product</option>;
                        <option value="service">Service</option>;
                        <option value="ai_tool">AI Tool</option>;
                        <option value="course">Course</option>;
                        <option value="template">Template</option>;
                        <option value="other">Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
            />;
            <FormField
              control={form && form.control}
              name="image"
                  </FormItem>;                )}
              />;
            </div>;
;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              />;
            </div>;


            <FormField
              control={form && form.control}
              name="tags"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
=======
                  </FormItem>)}
              />;
            </div>;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Tags</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field} />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;              )}
            />;
;
            <FormField;
              control={form.control}
              name="image";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;


            <FormField
              control={form && form.control}
              name="image"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={() => (;
                <FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;

                  {imagePreview && (;
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">;
                      <AspectRatio ratio={3/2}>;
                        <img
                          src={imagePreview} 
                          alt="Preview" 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="w-full h-full object-cover"
                        />;
                      </AspectRatio>;
                    </div>;
                  )}
                </FormItem>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
            />;
            <div className="flex justify-end">;
              <Button
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                {isSubmitting ? "Publishing..." : "Publish Product"}
                    <Input ;
                      type="file" ;
                      accept="image/*" ;
                      onChange={handleImageChange}
                      className="cursor-pointer";
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high-quality image of your product (recommended size:1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  ;
                  {imagePreview && (;
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">;
                      <AspectRatio ratio={3/2}>;
                        <img ;
                          src={imagePreview} ;
                          alt="Preview" ;
                          className="w-full h-full object-cover";
                        />;
                      </AspectRatio>;
                    </div>;                  )}
                </FormItem>;
              )}
            />;
;
            <div className="flex justify-end">;
              <Button ;
                type="submit" ;
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
              >;
                {isSubmitting ? "Publishing..." :"Publish Product"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;

            <div className="flex justify-end">;
              <Button
                type="submit" 

                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                {isSubmitting ? "Publishing..." : "Publish Product"}


            title: form.getValues("title"),


            category: form.getValues("category")
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                </FormItem>;
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
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
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
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
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
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
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="ai">
=======

      <TabsContent value="ai">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form && form.getValues("title"),
            category: form && form.getValues("category")
<<<<<<< HEAD
      ;
      <TabsContent value="ai">;
        <AIListingGenerator ;
          onApplyGenerated={handleApplyGenerated}
          initialValues={{;
            title:form.getValues("title"),;
            category:form.getValues("category");
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />;
      </TabsContent>;
    </Tabs>;
<<<<<<< HEAD
  ),; import {
  Form;
FormControl;
FormDescription;
FormField;
FormItem;
FormLabel;
tags: z.string () .optional () 
});
//Type for our form values type ProductFormValues = z.infer<typeof productSchema>;
const [isSubmitting, setIsSubmitting] = React.useState (false);
const [imagePreview, setImagePreview] = React.useState (null as string | null);
const [activeTab, setActiveTab] = React.useState ("manual");
  const file = e.target.files?.[0];
if (file) {
  reader.onloadend = () => {
  setImagePreview (reader.result as string) 
};
reader.readAsDataURL (file) 
}
};
//Apply AI-generated content to the form if (!user) {
  toast ({
  return;
}setIsSubmitting (true);
const {
  data: productRecord, error: productError 
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
.from ('products') .upload (imagePath, values.image);
//Get the public window.URL for the image const {
  data: publicUrlData 
}= supabase.storage.from ('products') .getPublicUrl (imagePath);
//Update the product with the image window.URL const {
  error: updateError 
}= await supabase .from ('product listings') //Redirect to product page navigate (`/marketplace/listing/$ {
  productRecord.id 
}`) 
}catch (error) {
  toast ({
  
}finally {
  setIsSubmitting (false) 
}
};
return (<Tabs value= {
  activeTab 
}onValueChange= {
  setActiveTab 
}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> </FormControl> <FormDescription> Create a compelling title that describes your product </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Description</FormLabel> <FormControl> <Textarea placeholder=" Describe your product in detail..."className="min-h-32" {
  ...field 
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <FormField </FormControl> <FormDescription> Set your price in USD </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Category</FormLabel> <FormControl> <select > <option value="">Select a category</option> <option value=" digital product">Digital Product</option> <option value=" service">Service</option> <option value=" ai tool">AI Tool</option> <option value=" course">Course</option> <option value=" template">Template</option> <option value=" other">Other</option> </select> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <FormField </FormControl> <FormDescription> Add relevant tags to help users find your product (e.g., ai, productivity, design) </FormDescription> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type=" file"accept=" image/*"onChange= {
  handleImageChange 
}className=" cursor-pointer"/> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> /> </AspectRatio> </div>) 
}</FormItem>) 
}/> <div className=" flex justify-end"> <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value=" ai" > <AIListingGenerator /> </TabsContent> </Tabs>) 
=======

      <TabsContent value="ai">;
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            title: form.getValues("title")

            title: form.getValues("title"),
            category: form.getValues("category")
          }}
<<<<<<< HEAD
        />
      </TabsContent>
    </Tabs>
  )
=======
=======
        />;
      </TabsContent>;
    </Tabs>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
=======
                    Add relevant tags to help users find your product (e.g., ai, productivity, design);
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="image";
              render={() => (
                <FormItem>;
                  <FormLabel > Product Image</FormLabel>;
                  <FormControl>;
                    <Input;
                      type="file";
                      accept="image/*";
                      on_change={handleImageChange}
                      className="cursor - pointer";
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high - quality image of your product (recommended size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  {image_preview && (
                    <div className="mt - 2 w - full max - w-md border rounded overflow - hidden">;
                      <AspectRatio ratio={3 / 2}>;
                        <img;
                          src={image_preview}
                          alt="Preview";
                          className="w - full h - full object - cover";
                        />;
                      </AspectRatio>;
                    </div>)}
                </FormItem>)}
            />;
            <div className="flex justify - end">;
              <Button;
                type="submit";
                disabled={is_submitting}
                className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
              >;
                {is_submitting ? "Publishing..." : "Publish Product"}
              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;
      <TabsContent value="ai">;
        <AIListingGenerator;
          onApplyGenerated={handleApplyGenerated}
          initial_values={{
            title: form.get_values ("title"),
            category: form.get_values ("category");
          }}
        />;
      </TabsContent>;
    </Tabs>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}