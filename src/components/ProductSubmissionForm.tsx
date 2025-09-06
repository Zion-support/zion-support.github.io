
import React from "react",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import z from "zod",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { useRouter } from "next/router";
import Image from 'next/image', // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger';
import {
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";
import { Sparkles } from 'lucide-react'

// Define the form schema with zod
const productSchema = null;
            category: form.getValues("category")

          }}
        />
      </TabsContent>
    </Tabs>
);

  const file = e.target.files?.[0];
if (file) {;
  reader.onloadend = () => {;
  setImagePreview (reader.result as string) ;
};
reader.readAsDataURL (file) ;

};

};
const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
  const file = e.target.files?.[0];
if (file) {;
  ;

};
//Apply AI-generated content to the form const handleApplyGenerated = (content: any) => {;
  if (!user) {;
  toast ({;
  return;
}setIsSubmitting (true);
author: {";
  name: user.displayName || "Anonymous Creator";
id: user.id ;
};
createdAt: new Date () .toISOString () ;
};
data: productRecord, error: productError ';
}= await supabase .from ('product listings') .insert ([productData]) .select ('id') .single ();
let imagePublicUrl: string | undefined;';
//If we have an image, upload it .from ('products') .upload (imagePath, values.image);
//Get the public window.URL for the image const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (imagePath);
imagePublicUrl = publicUrlData.publicUrl;
//Update the product with the image window.URL const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (videoPath, values.video);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (videoPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') .from ('products') .upload (modelPath, values.model);
const {;
  data: publicUrlData ';
}= supabase.storage.from ('products') .getPublicUrl (modelPath);
const {;
  error: updateError ';
}= await supabase .from ('product listings') ;
}//Send listing to moderation service try {';
  await supabase.functions.invoke ('moderate-listing', {;
  body: {;
  //Redirect to product page router.push (`/marketplace/listing/$ {;
  productRecord.id ;
}`) ;
}catch (error) {;
  toast ({;
  ;
}finally {;
  setIsSubmitting (false) ;

};

}className="w-full"> <TabsList className="grid grid-cols-2 mb-6" > <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple" > ai"className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple"> <Sparkles className="h-4 w-4 mr-2"/> AI-Powered Creation </TabsTrigger> </TabsList> ;
}";
}/> <FormField Describe your product in detail..." className="min-h-32" {;
  ...field ';
}/> </FormControl> <FormDescription> Provide a detailed description of what you're offering </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormItem> <FormLabel>Price (USD) </FormLabel> <FormControl> <Input type="number" min="0" step="0.01" placeholder="0.00" {;
  ...field ;
}/> ";
}/> <FormField >Select a category</option> <option value="digital product" >Digital Product</option> <option value="service" >Service</option> <option value="ai tool" >AI Tool</option> <option value="course" >Course</option> <option value="template" >Template</option> <option value="other" >Other</option> </select> </FormControl> <FormMessage /> </FormItem>) ";
}/> </div> <FormField <FormItem> <FormLabel>Tags</FormLabel> <FormControl> <Input placeholder="Enter tags separated by commas" {;
  ...field ;
}/> ";
}/> <FormField <FormItem> <FormLabel>Product Image</FormLabel> <FormControl> <Input type="file" accept="image/*" onChange= {;
  handleImageChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Upload a high-quality image of your product (recommended size: 1200x800px) </FormDescription> <FormMessage /> //`sizes` might not be strictly necessary for a preview of this nature;';
//but can be added if responsive behavior is critical here. //For local object URLs, optimization via loader won't occur. /> </AspectRatio> </div>) ;
}</FormItem>) ";
}/> <FormField <FormItem> <FormLabel>Product Video (MP4) </FormLabel> <FormControl> <Input type="file" accept="video/mp4" onChange= {;
  handleVideoChange ";
}className="cursor-pointer" /> </FormControl> <FormDescription> Optional video demonstrating your product </FormDescription> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormDescription> Upload a 3D model for interactive viewing </FormDescription> <FormMessage /> </FormItem>) ";
}/> <div className="flex justify-end" > <Button </Button> </div> </form> </Form> </TabsContent> <TabsContent value="ai" > <AIListingGenerator /> </TabsContent> </Tabs>) ;
}'"  )
}
