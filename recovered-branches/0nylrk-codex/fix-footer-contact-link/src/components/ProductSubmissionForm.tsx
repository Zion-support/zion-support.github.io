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
const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {

    form.setValue("tags", content.tags.join(", ")),
    
    // Set a default price as the middle of the suggested range;
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2),"
    form.setValue("price", averagePrice),
    
    // Switch to the manual tab to show applied content"
    setActiveTab("manual")
  },

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

        }
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

<<<<<<< HEAD


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
      }
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

=======
        }
        "title": values && values.title,,
  "description": values && values.description,;
        "price": parseFloat(values && values.price),;
        "category": values && values.category,;
        "currency": "USD", // Default currency;"
        "tags": values && values.tags ? values && values.tags.split(',').map(tag => { return tag && tag.trim()) : []; }'
        "author": {;
          }
          "name": user && user.displayName || "Anonymous Creator",;"
          "id": user && user.id},;
        "createdAt": new Date().toISOString()},;
      const { "data": productRecord, "error": productError } = await supabase;
        .from('product_listings');'
        .insert([productData]);
        .select('id');'

      const { data: productRecord, error: productError } = await supabase;'
        .from('product_listings');
        .insert([productData]);'
        .select('id');
        .single();
>>>>>>> origin/cursor/delete-old-data-records-6bba

      if (productError) {;
        }
        throw new Error(productError && productError.message);
      }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // If we have an image, upload it;
      if (values && values.image) {;
        }
        const imagePath = `product_images/${productRecord && productRecord.id}/${values && values.image.name}`;`        const { "error": uploadError } = await supabase && supabase.storage;
          .from('products');'
          .upload(imagePath, values && values.image);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        if (uploadError) {;
          }
          throw new Error(uploadError && uploadError.message);
        }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        // Get the public URL for the image;
        const { "data": publicUrlData } = supabase && supabase.storage;
          .from('products');'
          .getPublicUrl(imagePath);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        // Update the product with the image URL;
        const { "error": updateError } = await supabase;
          .from('product_listings');'
          .update({ ;
<<<<<<< HEAD
            images: [publicUrlData && publicUrlData.publicUrl];
          });'
          .eq('id', productRecord && productRecord.id);



=======
            }
            "images": [publicUrlData && publicUrlData.publicUrl];
          });
          .eq('id', productRecord && productRecord.id);'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        if (updateError) {;
          }
          throw new Error(updateError && updateError.message);
        }
      }

<<<<<<< HEAD


      // Show success message;

      toast({;
        title: "Product Published!",,
  description: "Your product has been successfully published on Zion."}),;

      navigate(`/marketplace/listing/${productRecord && productRecord.id}`);
=======
      // Show success message;
      toast({;
        title: "Publication Failed",,
  description: error instanceof Error ? error && error.message : "An unknown error occurred",;
        variant: "destructive"});
    } finally {;
      }
      setIsSubmitting(false);

    }
  }    }


  },

  return (    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;

        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;"
          <Sparkles className="h-4 w-4 mr-2" />;"
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;
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
                    <Input placeholder="Enter product title" {...field} />;
                  </FormControl>;
                  <FormDescription>;
                    Create a compelling title that describes your product;
                  </FormDescription>;
                  <FormMessage />;

                </FormItem>;

            />;

            <FormField
              control={form && form.control}
              name="description"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea
                      placeholder="Describe your product in detail..." 
                      className="min-h-32" 
                      {...field}                     />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;'
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
              <FormField;
                control={form.control}
                name="price";"
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;                  <FormControl>;
                    <Input placeholder="Enter tags separated by commas" {...field} />;
                  </FormControl>;
                  <FormDescription>;

            />;

            <FormField
              control={form && form.control}
              name="image"
              render={() => (;
                <FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;
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
                          className="w-full h-full object-cover"
                        />;
                      </AspectRatio>;
                    </div>;
                  )}
                </FormItem>;
              )}}