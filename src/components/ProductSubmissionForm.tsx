import {logErrorToProduction} from '@/utils/productionLogger';
import React from 'react'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import next/image
import { logErrorToProduction } from '@/utils/productionLogger'
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
import {logErrorToProduction} from '@/utils/productionLogger',
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
            <FormField
              name='description'
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'description'>
              }) => (                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe your product in detail...'
                      className='min-h-32'
                name='category'
                render={({
                  field
                }: {
                  field: ControllerRenderProps<ProductFormValues, 'category'>
                }) => (                  <FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='tags'
              render={({
                field
              }: {
                field: ControllerRenderProps<ProductFormValues, 'tags'>
              }) => (                <FormItem>


                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>

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


            />;
            <FormField;
              control={form.control}
              name="video"
              render={() => (


                <FormItem>
              name="model"
              render={() => (

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
  reader.onloadend = () => {

              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;

      <TabsContent value='ai'>;
        <AIListingGenerator
          onApplyGenerated={handleApplyGenerated}          initialValues={{
            title: form && form.getValues('title'),
            category: form && form.getValues('category'),
          }}
        />;
      </TabsContent>;
    </Tabs>;
  );

  const file = e && e.target.files?.[0];
if (file) {;
  reader && reader.onloadend = () => {;
  setImagePreview (reader && reader.result as string) ;
};
reader && reader.readAsDataURL (file) ;

};

};
const handleModelChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
  const file = e && e.target.files?.[0];
if (file) {;


};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
}setIsSubmitting (true);
author: {";
  name: user && user.displayName || "Anonymous Creator";
id: user && user.id ;
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values && values.image);
//Get the public window && window.URL for the image const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData && publicUrlData.publicUrl;
//Update the product with the image window && window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values && values.video);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values && values.model);
const {;
  data: publicUrlData ';
}= supabase && supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase && supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router && router.push (`/marketplace/listing/$ {;
  productRecord && productRecord.id ;
}`) ;
}catch (error) {;
  toast ({;

}finally {;
  setIsSubmitting (false) ;

};

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
  ...field 
}/> ";
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

}

reader.readAsDataURL (file)
  setImagePreview (reader.result as string);
}
reader.readAsDataURL (file);

}
}
const handleModelChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
  const file = e.target.files?.[0];
// Check condition
if ( {) {
  $2
}
}
//Apply AI - generated content to the form const handleApplyGenerated = (content: any) =>: any {
  // Check condition
if ( {) {
  $2
}
  toast ({

  return;
}setIsSubmitting (true);
author: {";
  name: user.display_name || "Anonymous Creator";
id: user.id;
}
created_at: new Date () .toISOString ();

}
data: product_record, error: product_error ';
}= await supabase .from ('product listings') .insert ([product_data]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (image_path, values.image);
//Get the public window.URL for the image const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (image_path);
imagePublicUrl = publicUrlData.public_url;
//Update the product with the image window.URL const {
  error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (video_path, values.video);
const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (video_path);
const {
  error: update_error ';
}= await supabase .from ('product listings') .from ('products') .upload (model_path, values.model);
const {
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (model_path);
const {



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


}
