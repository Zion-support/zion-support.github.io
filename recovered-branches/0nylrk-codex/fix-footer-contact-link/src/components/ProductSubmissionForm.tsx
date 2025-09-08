

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


// Define the form schema with zod

const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {



    message: "Price must be a valid number"}),

  category: z.string().min(1, "Please select a category"),
  image: z.instanceof(File).optional(),
  tags: z.string().optional()}),

// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,



  // Initialize the form
  const form = useForm<ProductFormValues>({

    resolver: zodResolver(productSchema)
    defaultValues: {"
      title: """
      description: """
      price: """
      category: """
      tags: ""}})
  // Handle image upload preview;
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
    const file = e.target.files?.[0]
    if (file) {"
      form.setValue("image", file),
      const reader = new FileReader(),
      reader.onloadend = () => {}
        setImagePreview(reader.result as string)



      },
      reader.readAsDataURL(file)
    }
  },



  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;
      title: "",;
      description: "",;
      price: "",;
      category: "",;
      tags: ""}}),;




  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: "Authentication Required"
        description: "You must be logged in to publish products"
        variant: "destructive"})
      return
    }



    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),"
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content"
    setActiveTab("manual")
  },

    setIsSubmitting(true),


const productSchema = z.object({
  title: z.string().min($2);
  description: z.string().min($2);
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: "Price must be a valid number"}),
  category: z.string().min($2);
  image: z.instanceof(File).optional($2);
  tags: z.string().optional()}),

// Type for our form values
type ProductFormValues = $2;
export function ProductSubmissionForm() {
  const { user } = useAuth($2);
  const { toast } = useToast($2);
  const navigate = useNavigate($2);
  const [isSubmitting, setIsSubmitting] = React.useState($2);
  const [imagePreview, setImagePreview] = React.useState($2);
  const [activeTab, setActiveTab] = React.useState($2);
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      tags: ""}}),
  
  // Handle image upload preview
  const handleImageChange = $2;
    if (file) {
      form.setValue($2);
      const reader = new FileReader($2);
      reader.onloadend = $2;
      reader.readAsDataURL(file)
    }
  },

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue($2);
    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed($2);
    form.setValue($2);
    // Switch to the manual tab to show applied content
    setActiveTab("manual")
  },

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast($2);
      return
    }

    setIsSubmitting($2);
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

      }
      // If we have an image, upload it;
      if (values.image) {}
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
        const { error: uploadError } = await supabase.storage;
          .from('products')
          .upload(imagePath, values.image);
        if (uploadError) {}
          throw new Error(uploadError.message)
        }
        // Get the public URL for the image;
        const { data: publicUrlData } = supabase.storage'
          .from('products')
          .getPublicUrl(imagePath);
        // Update the product with the image URL;
        const { error: updateError } = await supabase'
          .from('product_listings')
          .update({}
            images: [publicUrlData.publicUrl]
          })'
          .eq('id', productRecord.id);
        if (updateError) {}
          throw new Error(updateError.message)

        }
      }
        .single(),
        
      if (productError) {}
        throw new Error(productError.message)"
import React from "react",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import z from "zod",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useToast } from "@/hooks/use-toast",;"

import { useNavigate } from "react-router-dom",;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
import { Input } from "@/components/ui/input",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;"
import { AspectRatio } from "@/components/ui/aspect-ratio",;"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;"
import { AIListingGenerator } from "@/components/listing/AIListingGenerator",;"
import { Sparkles } from "lucide-react",;
// Define the form schema with zod;
const productSchema = z.object({;"
  title: z.string().min(3, "Title must be at least 3 characters"),;"
  description: z.string().min(10, "Description must be at least 10 characters"),;
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {;"
    message: "Price must be a valid number"}),;"
  category: z.string().min(1, "Please select a category"),;
  image: z.instanceof(File).optional(),;
  tags: z.string().optional()}),;
// Type for our form values;
type ProductFormValues = z.infer<typeof productSchema>,;
export function ProductSubmissionForm() { return null; }
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const navigate = useNavigate(),;
  const [isSubmitting, setIsSubmitting] = React.useState(false),;
  const [imagePreview, setImagePreview] = React.useState(null as string | null),;"
  const [activeTab, setActiveTab] = React.useState("manual"),;

  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;"
      title: "","
      description: "",;"
      price: "",;"
      category: "",;"
      tags: ""}}),;

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
  const onSubmit = async (values: ProductFormValues) => {}
    if (!user) {}
      toast({"
        title: "Authentication Required""
        description: "You must be logged in to publish products""
        variant: "destructive"})
      return;
    }

    setIsSubmitting(true),

        price: parseFloat(values.price)
        category: values.category"
        currency: "USD", // Default currency'
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [];
        author: {"
          name: user.displayName |"Anonymous Creator"
          id: user.id}
        createdAt: new Date().toISOString()}
      const { data: productRecord, error: productError } = await supabase'
        .from('product_listings')
        .insert([productData])'
        .select('id')

        }
      }



      // Show success message
      toast({
        title: "Product Published!"

        description: "Your product has been successfully published on Zion."})
      // Redirect to product page;`
      navigate(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {}
      toast({"
        title: "Publication Failed""
        description: error instanceof Error ? error.message : "An unknown error occurred""
        variant: "destructive"})
    } finally {}
      setIsSubmitting(false)



    try {;
      // Create the product listing;
      const productData = {;

        title: values && values.title,,
  description: values && values.description,;
        price: parseFloat(values && values.price),;
        category: values && values.category,;"
        currency: "USD", // Default currency;'
        tags: values && values.tags ? values && values.tags.split(',').map(tag => tag && tag.trim()) : [];
        author: {;"
          name: user && user.displayName || "Anonymous Creator",;
          id: user && user.id},;
        createdAt: new Date().toISOString()},;

        .from('product_listings');
        .insert([productData]);'
        .select('id');

        .single();


      if (productError) {;
        throw new Error(productError && productError.message);
      }


      // If we have an image, upload it;
      if (values && values.image) {;`
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;
        const { error: uploadError } = await supabase && supabase.storage;'
          .from('products');
          .upload(imagePath, values && values.image);


        if (uploadError) {;
          throw new Error(uploadError && uploadError.message);
        }


        // Get the public URL for the image;
        const { data: publicUrlData } = supabase && supabase.storage;'
          .from('products');
          .getPublicUrl(imagePath);



        // Update the product with the image URL;
        const { error: updateError } = await supabase;'
          .from('product_listings');
          .update({ ;
            images: [publicUrlData && publicUrlData.publicUrl];
          });'
          .eq('id', productRecord && productRecord.id);



        if (updateError) {;
          throw new Error(updateError && updateError.message);
        }
      }



      // Show success message;

      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;

      navigate(`/marketplace/listing/${productRecord && productRecord.id}`);
    } catch (error) {;

        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);


    }


  },

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




            <FormField
              control={form.control}

              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>

                  </FormDescription>
                  <FormMessage />
                </FormItem>



;
      // Show success message;
      toast({;
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),;
      // Redirect to product page;
      navigate(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {;
      toast({;

        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",;

        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }

  };
  return (;

      <TabsList className="grid grid-cols-2 mb-6">;

        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;"
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;"
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;


"
      <TabsContent value="manual">;
        <Form {...form}>;"

          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
    }
    setIsSubmitting(true);
    }
  }
  return (

            <FormField
              control={form && form.control}
              name="title"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Product Title</FormLabel>;

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
const product_schema = z.object ({"
  title: z.string ().min (3, "Title must be at least 3 characters");"
  description: z.string ().min (10, "Description must be at least 10 characters");
  price: z.string ().refine ((val) => !isNaN (parse_float (val)) && parse_float (val) >= 0, {"
    message: "Price must be a valid number"}),"

  category: z.string ().min (1, "Please select a category");
  image: z.instanceof (File).optional (),
  tags: z.string ().optional ()}),
// Type for our form values;
type ProductFormValues = z.infer < typeof product_schema>;
;

  const { user } = use_auth ();
  const { toast } = use_toast ();
  const navigate = use_navigate ();
  const [is_submitting, setIsSubmitting] = React.useState (false);

        setImagePreview (reader.result as string);
      }
      reader.readAsDataURL (file);
    }
  }
;
  // Apply AI - generated content to the form;

    setActiveTab ("manual");
  }
;
  // Handle form submission;

        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;

}
        throw new Error (product_error.message);
      }
      // If we have an image, upload it;

}
          throw new Error (upload_error.message);
        }
        // Get the public URL for the image;

          .from ('products');
          .getPublicUrl (image_path);
;
        // Update the product with the image URL;

}
          throw new Error (update_error.message);
        }
      }
      // Show success message;

      setIsSubmitting (false);
    }
  }
;

              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Product Title</FormLabel>;


                  <FormControl>;

                    <Input placeholder="Enter product title" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Create a compelling title that describes your product;
                  </FormDescription>;
                  <FormMessage />;


              )}

            />;

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

            <FormField;
              control={form && form.control}"
              name="description"


                    />;

                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;

                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;



                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;



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


              name="tags"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Tags</FormLabel>;
                  </FormItem>)}
              />;
            </div>;
            <FormField;

              name="tags";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Tags</FormLabel>;

                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field} />;
                  </FormControl>;
                  <FormDescription>;



            />;

            <FormField
              control={form && form.control}
              name="image"



              render={() => (;

                <FormItem>;
                  <FormLabel>Tags</FormLabel>;

                  <FormControl>;


                          className="w-full h-full object-cover"
                        />;
                      </AspectRatio>;
                    </div>;
                  )}
                </FormItem>;

              )}

              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;




          }}
        />;
      </TabsContent>;
    </Tabs>;




}