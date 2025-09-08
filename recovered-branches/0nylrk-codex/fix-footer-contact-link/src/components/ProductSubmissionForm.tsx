








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






            images: [publicUrlData && publicUrlData.publicUrl];
          });'
          .eq('id', productRecord && productRecord.id);





      // Show success message;

      toast({;
        title: "Product Published!",;
        description: "Your product has been successfully published on Zion."}),;

      navigate(`/marketplace/listing/${productRecord && productRecord.id}`);








  };
  return (;



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

                    <Textarea
                      placeholder="Describe your product in detail..." 
                      className="min-h-32" 

            <FormField;
              control={form && form.control}"
              name="description"


                    />;






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


              )}



}
