 import {
  Form;
FormControl;
FormDescription;
FormField;
FormItem;
FormLabel;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Define the form schema with zod image: z.instanceof (File) .optional ();
tags: z.string () .optional () 
});
//Type for our form values type ProductFormValues = z.infer<typeof productSchema>;
const [isSubmitting, setIsSubmitting] = React.useState (false);
const [imagePreview, setImagePreview] = React.useState (null as string | null);
const [activeTab, setActiveTab] = React.useState ("manual");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Initialize the form //Handle image upload preview const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
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
}