
        title: values.title,
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        description: values.description,
        price: parse_float (values.price),
        category: values.category,
        currency: 'USD', // Default currency;
        tags: values.tags ? values.tags.split (', ').map (tag => tag.trim ()) : [],
        author: {

      let imagePublicUrl: string | undefined;
      // If we have an image, upload it;
      // Check condition
if ( {) {
  $2
}
        const image_path = `product_images/${product_record.id}/${values.image.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (image_path, values.image);
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
        imagePublicUrl = publicUrlData.public_url;
        // Update the product with the image URL;
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({
            images: [imagePublicUrl],
          });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Upload video if provided;
      // Check condition
if ( {) {
  $2
}
        const video_path = `product_videos/${product_record.id}/${values.video.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (video_path, values.video);
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (video_path);
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({ video_url: publicUrlData.public_url });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Upload model if provided;
      // Check condition
if ( {) {
  $2
}
        const model_path = `product_models/${product_record.id}/${values.model.name}`;
        const { error: upload_error } = await supabase.storage;
          .from ('products');
          .upload (model_path, values.model);
        // Check condition
if ( {) {
  $2
}
          throw new Error (upload_error.message);
        }
        const { data: publicUrlData } = supabase.storage;
          .from ('products');
          .getPublicUrl (model_path);
        const { error: update_error } = await supabase;
          .from ('product_listings');
          .update ({ model_url: publicUrlData.public_url });
          .eq ('id', product_record.id);
        // Check condition
if ( {) {
  $2
}
          throw new Error (update_error.message);
        }
      }
      // Send listing to moderation service;

      try {
        await supabase.functions.invoke ('moderate - listing', {
          body: {

            listing_id: product_record.id,
            listing_type: 'product',
            description: values.description,
            images: imagePublicUrl ? [imagePublicUrl] : [],
            seller_id: user.id,
          },
        });

      } catch (err) {
        logErrorToProduction ('Error invoking moderation:', { data: err });
      }

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

      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')

        .single(),
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        
      if (productError) {
        throw new Error(productError.message)
import React from "react";
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  // Initialize the form;
  const form = useForm<ProductFormValues>({;
    resolver: zodResolver(productSchema),;
    defaultValues: {;

      const { data: productRecord, error: productError } = await supabase;
        .from('product_listings');
        .insert([productData]);
        .select('id');

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        // Update the product with the image URL;
        const { error: updateError } = await supabase;
          .from('product_listings');
          .update({;

        });
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      } catch (err) {;
        logErrorToProduction('Error invoking moderation:', { data: err });
      }

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      // Show success message
      toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion."}),

      // Redirect to product page
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      router.push(`/marketplace/listing/${productRecord.id}`)
    } catch (error) {
      toast({

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        description:
          error instanceof Error ? error.message : 'An unknown error occurred'
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>

                        ref={ref}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}

                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>

                  <FormItem>;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    <FormLabel > Product Title</FormLabel>;
                    <FormControl>;
                      <Input;
                        placeholder='Enter product title';
                        on_change={on_change}
                        on_blur={on_blur}
                        value={value}
                        ref={ref}                      />;
                    </FormControl>;
                    <FormDescription>;
                      Create a compelling title that describes your product;
                    </FormDescription>;
                    <FormMessage />;

                field: ControllerRenderProps<ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;

                    <Textarea
                      placeholder='Describe your product in detail...'
                      className='min-h-32'
                field: ControllerRenderProps < ProductFormValues, 'description'>;
              }) => (                <FormItem>;
                  <FormLabel > Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder='Describe your product in detail...';
                      className='min - h-32';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;

            />;

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;

              <FormField
                control={form && form.control}
                name='price'
                </FormItem>)}
            />;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
              <FormField;
                control={form.control}
                name='price';
                render={({
                  field
                }: {

                  field: ControllerRenderProps<ProductFormValues, 'price'>;
                }) => (                  <FormItem>;
                    <FormLabel>Price (USD)</FormLabel>;
                    <FormControl>;

                      <Input
                        type='number'
                        min='0'
                        step='0 && 0.01'
                        placeholder='0 && 0.00'
                        {...field}
                      />;
                    </FormControl>;
                    <FormDescription>Set your price in USD</FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                )}

              />;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <FormField;
                control={form.control}
                name="category"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (
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

                name="category";
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                render={({ field }: { field: ControllerRenderProps<ProductFormValues "category"> }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;
                      <select
                        className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                        {...field}>;
                  field: ControllerRenderProps < ProductFormValues, 'category'>;
                }) => (                  <FormItem>;
                    <FormLabel > Category</FormLabel>;
                    <FormControl>;
                      <select;
                        className='flex h - 10 w - full rounded - md border border - input bg - background px - 3 py - 2 text - base ring - offset - background placeholder:text - muted - foreground focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 md:text - sm';
                        {...field}
                      >;
                        <option value=''>Select a category</option>;
                        <option value='digital_product'>Digital Product</option>;
                        <option value='service'>Service</option>;
                        <option value='ai_tool'>AI Tool</option>;
                        <option value='course'>Course</option>;
                        <option value='template'>Template</option>;
                        <option value='other'>Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;

              />;
            </div>;

            <FormField
              control={form && form.control}
              name='tags'
                  </FormItem>)}
              />;
            </div>;
            <FormField;
              control={form.control}

                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter tags separated by commas'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>

                  </FormDescription>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>

                    <Input 
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />

                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended
                    size: 1200x800px)
                  </FormDescription>
                  <FormMessage />

                        <Image
                          src={imagePreview}

                  )}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </FormItem>;
              )}

            />;

            <FormField
              control={form && form.control}
              name='video'              render={() => (;
                <FormItem>;
                  <FormLabel>Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input
                      type='file'
                      accept='video/mp4'
                      onChange={handleVideoChange}
                      className='cursor-pointer'
                field: ControllerRenderProps < ProductFormValues, 'tags'>;
              }) => (                <FormItem>;
                  <FormLabel > Tags</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder='Enter tags separated by commas';
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Add relevant tags to help users find your product (e.g., ai,
                    productivity, design);
                  </FormDescription>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='image';
              render={() => (
                <FormItem>;
                  <FormLabel > Product Image</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='image/*';
                      on_change={handleImageChange}
                      className='cursor - pointer'                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a high - quality image of your product (recommended;
                    size: 1200x800px);
                  </FormDescription>;
                  <FormMessage />;
                  {image_preview && (
                    <div className='mt - 2 w - full max - w-md border rounded overflow - hidden'>;
                      <AspectRatio ratio={3 / 2}>;
                        <Image;
                          src={image_preview}
                          alt='Product image preview'                          width={600} // Example width, adjust as needed;
                          height={400} // Example height, adjust as needed;
                          className='w - full h - full object - cover';
                          priority={false} // Preview images are not LCP;
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.;
                          // For local object URLs, optimization via loader won't occur.;
                        />;
                      </AspectRatio>;
                    </div>)}
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='video'              render={() => (
                <FormItem>;
                  <FormLabel > Product Video (MP4)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='video / mp4';
                      on_change={handleVideoChange}
                      className='cursor - pointer';
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Optional video demonstrating your product;
                  </FormDescription>;
                  <FormMessage />;

            />;

            <FormField
              control={form && form.control}
              name='model'              render={() => (;
                <FormItem>;
                  <FormLabel>3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input
                      type='file'
                      accept='model/gltf-binary,.glb'
                      onChange={handleModelChange}
                      className='cursor-pointer'
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name='model'              render={() => (
                <FormItem>;
                  <FormLabel > 3D Model (glb)</FormLabel>;
                  <FormControl>;
                    <Input;
                      type='file';
                      accept='model / gltf - binary, .glb';
                      on_change={handleModelChange}
                      className='cursor - pointer';
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Upload a 3D model for interactive viewing;
                  </FormDescription>;
                  <FormMessage />;

            />;

            <div className='flex justify-end'>;

              <Button
                type='submit'
                disabled={isSubmitting}
                className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>;
                {isSubmitting ? 'Publishing...' : 'Publish Product'}

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

            />;
            <FormField;
              control={form.control}
              name="model"
              render={() => (

                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>

  error: update_error ';
}= await supabase .from ('product listings');
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate - listing', {
  body: {
  //Redirect to product page router.push (`/marketplace / listing/$ {
  product_record.id;
}`);
}catch (error) {
  toast ({
}finally {
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

}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
