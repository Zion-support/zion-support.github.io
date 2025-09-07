
import React, { useState } from "react",;""
import { useForm } from "react-hook-form",;""
import { zodResolver } from "@hookform/resolvers/zod",;""
import { z } from "zod",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Switch } from "@/components/ui/switch",;""
import { Badge } from "@/components/ui/badge",;""
import { Separator } from "@/components/ui/separator",;"
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",;""
import { toast } from "@/components/ui/use-toast",;""
import { supabase } from "@/integrations/supabase/client",;""
import { AspectRatio } from "@/components/ui/aspect-ratio",;""
import { useAuth } from "@/hooks/useAuth",;"
;
// Define form schema;
const serviceProfileSchema = z.object({;)"
  name:z.string().min(2, "Name must be at least 2 characters long"),;""
  title:z.string().min(5, "Business name/title is required"),;""
  bio:z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;""
  location:z.string().min(2, "Location is required"),;""
  services:z.string().min(2, "Enter at least one service"),;"
  hourlyRate:z.string().refine((val) => !isNaN(Number(val)), {;"
    message:"Rate must be a number"}),;""
  availability:z.enum(["available", "limited", "unavailable"]),;"
  enhancedProfile:z.boolean().default(true),;"
  website:z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),;"
type ServiceFormValues = z.infer<typeof serviceProfileSchema>,;
</typeof>
  const [serviceTags, setServiceTags] = useState<string[]>([]),;
</string>
  const [generatedContent, setGeneratedContent] = useState<{ summary:string, services:string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
  const form = useForm<ServiceFormValues>({;
)
  const handleAvatarUpload = (e:React.ChangeEvent<HTMLInputElement>) => {;

    if (!formData.bio || formData.bio.length < 20) {;
      toast({;"
        title:"More information needed",;")"
        description:"Please provide at least a detailed bio before generating enhanced content."}),;"
      return,;
    }
    try {;
      setIsGenerating(true),;
      // Call the Supabase Edge Function;"
      const { data, error } = await supabase.functions.invoke('service-profile-enhancer', {;
        body: {;,
  providerData:{;
            name:formData.name,;
            title:formData.title,;
            bio:formData.bio,;
            services:serviceTags,;
            location:formData.location;
        })
      }),;
      if (error) {;
        throw new Error(error.message),;
      setGeneratedContent(data as { summary:string, services:string[] }),;
      toast({;
        title:"Enhanced Profile Generated",;")"
        description:"AI has created a professional bio and suggested additional services for your profile."}),;"
    } catch (error:any) {;"
      console.error("Error generating enhanced profile:", error),;"
        title:"Generation failed",;""
        description:error.message || "There was an error generating your enhanced profile. Please try again.",;")"
        variant:"destructive"}),;"
    } finally {;
      setIsGenerating(false),;
  },;
  // Apply generated content to form;
  const applyGeneratedContent = () => {;
    if (generatedContent) {;"
      form.setValue("bio", generatedContent.summary),;"
      if (generatedContent.services && generatedContent.services.length > 0) {;
        const newServices = generatedContent.services.filter(;)"
          service => typeof service === 'string' && service && !serviceTags.includes(service);
        ),;
        if (newServices.length > 0) {;
          setServiceTags([...serviceTags, ...newServices]),;
  // Handle form submission;
  const onSubmit = async (values:ServiceFormValues) => {;
    if (serviceTags.length === 0) {;
        title:"Services required",;""
        description:"Please add at least one service to your profile.",;")"
    setIsSubmitting(true),;
      // For actual implementation with Supabase;
      if (!user?.id) {;"
        throw new Error("User not authenticated"),;"
      // Enhance profile if not already done;
      let finalSummary = values.bio,;
      let finalServices = serviceTags,;
      if (values.enhancedProfile && !generatedContent) {;
        try {;"
          const { data:aiData } = await supabase.functions.invoke('service-profile-enhancer', {;
                name:values.name,;
                title:values.title,;
                bio:values.bio,;
                location:values.location;
          if (aiData) {;
            finalSummary = (aiData as any).summary || values.bio,;
            // Merge AI suggested services with user-provided services;
            const aiServices = (aiData as any).services || [],;
            finalServices = [...new Set([...serviceTags, ...aiServices])],;
        } catch (error) {;
          console.error("Error enhancing profile:", error),;"
          // Continue with submission even if enhancement fails;
      } else if (generatedContent) {;
        finalSummary = generatedContent.summary,;
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])],;
      // Get user email for notification;
      const { data:userData } = await supabase.auth.getUser(),;
      const userEmail = userData.user?.email,;
      // Create the service profile;
      const { data:profileData, error } = await supabase;"
        .from('profiles');
        .update({;
          display_name:values.name,;
          bio:finalSummary,;
          user_type:"creator", // Set as service provider;"
          profile_complete:true,;)
          updated_at:new Date().toISOString(),;
          headline:values.title,;
          // Additional fields that might be in profiles table;
        });"
        .eq('id', user.id);
        .select(),;
      if (error) throw error,;
      // Store service-specific data in service_profiles table;
      // (This assumes you have a service_profiles table in your database);
      /*;
      const { error:serviceError } = await supabase;
        .from('service_profiles');
        .insert({;
          user_id:user.id,;
          services:finalServices,;)
          hourly_rate:Number(values.hourlyRate),;
          availability_status:values.availability,;
          location:values.location,;
          website:values.website || null}),;
      if (serviceError) throw serviceError,;
      */;
      // Send notification email if available;
      if (userEmail && values.enhancedProfile) {;
          await supabase.functions.invoke('send-email', {;
  to:userEmail,;
              subject:"Your Zion Service Profile Is Ready",;"
              html:`;"
              <div style="font-family:Arial, sans-serif, max-width:600px, margin:0 auto,">;"
</div>"
                <h2 style="color:#6D28D9,">Service Profile Created!</h2>;"
                <p>Your service provider profile has been successfully created and published.</p>;"
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>;
                <p>You can now start receiving service requests and connecting with clients.</p>;
                <div style="margin-top:30px, padding-top:20px, border-top:1px solid #eee,">;"
</div>)"
                  <p style="color:#666, font-size:12px,"> ${new Date().getFullYear()} Zion Marketplace</p>;"
                </div>;
              </div>;"
    <div className="max-w-4xl mx-auto p-4 md:p-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"

        <CardHeader>;
"
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile;""
          <CardDescription className="text-zion-slate">;"

        <Form {...form}>;

          <form onSubmit={form.handleSubmit(onSubmit)}>;
</form>"
            <CardContent className="space-y-8">;"
              <div className="space-y-4">;"
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
                  <div className="col-span-1">;"
</div>
                    <FormField;
                      control={form.control}"
                      name="name";"
                      render={({ field }) => (;

                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Full Name;"
                          <FormControl>;
                            <div className="relative">;"
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";""
                                placeholder="Your full name";"
                                {...field}
                              />;

                          ;"
                          <FormMessage className="text-red-400" />;"

                      name="title";")

                          <FormLabel className="text-zion-slate-light">Business/Service Name;"
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                                placeholder="e.g., Creative Design Studio";"


                      name="location";")

                          <FormLabel className="text-zion-slate-light">Location;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                                placeholder="City, State/Province, Country";"


                      name="website";")

)"
                          <FormLabel className="text-zion-slate-light">Website (optional);"
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;"

                                placeholder="https://yourwebsite.com";"


                        ;                      )}
                <div className="space-y-2">;"
                  <FormLabel className="text-zion-slate-light">Profile Picture;""
                  <div className="flex items-center gap-6">;"
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;"
                        <AspectRatio ratio={1/1}>;

                          <img;
                            src={uploadedAvatar}"
                            alt="Avatar preview";""
                            className="w-full h-full object-cover";"
</img>
                        <div className="flex items-center justify-center h-full">;"
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;"

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;"
</label>"
                      <Upload className="mr-2 h-4 w-4" />;"

                      <span>Upload Photo</span>;
                      <input;"
                        type="file";""
                        accept="image/*";""
                        className="hidden";"
                        onChange={handleAvatarUpload}
</input>
                    </label>;
                  <p className="text-sm text-zion-slate">;"
</p>
                  </p>;
              <Separator className="bg-zion-blue-light/50" />;"
                <h3 className="text-lg font-medium text-white">Service Description</h3>;"
                  name="bio";"

                      <FormLabel className="text-zion-slate-light">About Your Services;"

                        <Textarea;"
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";""
                          placeholder="Describe your services, expertise, and what sets you apart from others...";"

                      <FormDescription className="text-zion-slate">;"

                  name="enhancedProfile";")
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">;"
                      <div className="space-y-0.5">;"
                        <FormLabel className="text-white flex items-center">;"
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />;"

                        <FormDescription className="text-zion-slate-light">;"


                        <Switch;
                          checked={field.value}
                          onCheckedChange={field.onChange}"
                          className="data-[state=checked]:bg-zion-purple";"

                  <div className="flex justify-end">;"
                    <Button;"
                      type="button";""
                      variant="outline";""
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";"
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >;
                      <Sparkles className="mr-2 h-4 w-4" />;"

                    ;)
                  </div>;                )}"
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">;"
                    <div className="flex items-center justify-between mb-3">;"
                      <h4 className="text-white font-medium flex items-center">;"
</h4>"

                      </h4>;
                        size="sm";""
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white";"
                        onClick={applyGeneratedContent}
                        <Check className="mr-1 h-3 w-3" /> Apply;"

                      <div>;
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>;""
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>;"
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>;""
                          <div className="flex flex-wrap gap-2 mt-1">;"
                              <Badge;
                                key={index}"
                                className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none";"
                              >;                                {service}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>;"
                    name="services";"

                        <FormLabel className="text-zion-slate-light">Services;""
                        <div className="flex gap-2">;"

                              className="flex-1 bg-zion-blue border-zion-blue-light text-white";""
                              placeholder="Add a service...";"
                              onKeyDown={handleServiceKeyPress}

                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";"
                            onClick={handleAddService}



                  <div className="flex flex-wrap gap-2 mt-2">;"
                        key={service}"
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1";"

                        <button;"
                          type="button";")
                          onClick={() => handleRemoveService(service)}
</button>"
                          <X className="h-3 w-3" />;"

                        </button>;
                      <p className="text-zion-slate text-sm italic">No services added yet</p>;"
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>;"
                    name="hourlyRate";"

                        <FormLabel className="text-zion-slate-light">Starting Rate (USD);"
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;"
                              className="pl-8 bg-zion-blue border-zion-blue-light text-white";""
                              placeholder="e.g., 85";"



                    name="availability";"
                      <FormItem className="space-y-4">;"
                        <FormLabel className="text-zion-slate-light">Current Status;"
                            <div className="flex items-center space-x-2">;"
                                type="radio";""
                                id="available";""
                                value="available";""
                                checked={field.value === "available"}")"
                                onChange={() => field.onChange("available")}"
</input>"
                              <label htmlFor="available" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;"
                                id="limited";""
                                value="limited";""
                                checked={field.value === "limited"}""
                                onChange={() => field.onChange("limited")}"
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;"
                                id="unavailable";""
                                value="unavailable";""
                                checked={field.value === "unavailable"}""
                                onChange={() => field.onChange("unavailable")}"
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>;"

            <CardFooter className="border-t border-zion-blue-light pt-6">;"
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">;"

                <Button ;"
                  type="submit";""
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
                  disabled={isSubmitting}

          </form>;
//Handle avatar upload const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  <p>Your service provider profile has been successfully created and published.</p> <p>We've enhanced your profile with AI to help you stand out to potential clients.</p> <p>You can now start receiving service requests and connecting with clients.</p> <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee, "> <p style="color: #666, font-size: 12px, "> $ {"
  new Date () .getFullYear () 
}Zion Marketplace</p> "
max-w-4xl mx-auto p-4 md:p-6"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-2xl text-white">Create Your Service Provider Profile <CardDescription className=" text-zion-slate"> Showcase your services and expertise to potential clients.   <FormItem> <FormLabel className=" text-zion-slate-light">Full Name <FormControl> <div className=" relative"> <UserRound className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div>  <FormMessage className=" text-red-400"/> )"
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Business/Service Name <FormControl> <div className=" relative"> <Briefcase className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div>  <FormMessage className=" text-red-400"/> )""
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Location <FormControl> <div className=" relative"> <MapPin className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div>  <FormMessage className=" text-red-400"/> )""
}/> </div> <div className=" col-span-1"> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Website (optional)  <FormControl> <div className=" relative"> <Globe className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4"/> <Input /> </div>  <FormMessage className=" text-red-400"/> )""
}/> </div> </div> /> ) : (<div className=" flex items-center justify-center h-full"> <UserRound className=" h-10 w-10 text-zion-slate opacity-50"/> </div>)""
}</div> <label className=" flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors"> <Upload className=" mr-2 h-4 w-4"/> <span>Upload Photo</span> <input /> </label> </div> <p className=" text-sm text-zion-slate"> For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format. </p> </div> </div> <Separator className=" bg-zion-blue-light/50"/> <FormItem> <FormLabel className=" text-zion-slate-light">About Your Services <FormControl> <Textarea  )""
}<FormField AI Profile Enhancement  <FormDescription className=" text-zion-slate-light"> Let AI help optimize your service description for better visibility and client engagement  </div> <FormControl> <Switch />  )"
}/> <Button type=" button"variant=" outline"className=" border-zion-purple text-zion-purple hover:bg-zion-purple/10"onClick= {"
  generateEnhancedProfile;
}disabled= {
  isGenerating;
}>  </div>) "
}AI-Generated Content </h4> <Button type=" button"size=" sm"className=" bg-zion-purple hover:bg-zion-purple-dark text-white"onClick= {"
  applyGeneratedContent;"
}> <Check className=" mr-1 h-3 w-3"/> Apply  </div> <div className=" space-y-4"> <div> </div> {"
  generatedContent.services && generatedContent.services.length > 0 && (<div> <Badge key= {
</div>)
}) ) 
}</div> </div>) 
}</div> </div>) "
}</div> <Separator className=" bg-zion-blue-light/50"/> <FormItem> <FormLabel className=" text-zion-slate-light">Services <div className=" flex gap-2"> <FormControl> <Input > Add  </div> <FormDescription className=" text-zion-slate"> Press Enter or click Add to include a service  <FormMessage className=" text-red-400"/> )"

}/> <Badge key= {
  service;"
}className=" bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"> {"
}<button > <X className=" h-3 w-3"/> </button> ) )""
}</div> </div> <FormItem> <FormLabel className=" text-zion-slate-light">Starting Rate (USD)  <FormControl> <div className=" relative"> <span className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span> <Input /> </div>  <FormDescription className=" text-zion-slate"> Your base hourly or project rate  <FormMessage className=" text-red-400"/> )""
}/> <FormField <FormControl> <div className=" space-y-2"> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" available"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-green-500"></div> Available for Work </label> </div> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" limited"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-yellow-500"></div> Limited Availability </label> </div> <div className=" flex items-center space-x-2"> <input /> <label htmlFor=" unavailable"className=" text-white flex items-center gap-2"> <div className=" h-2 w-2 rounded-full bg-red-500"></div> Currently Unavailable </label> </div> </div>  <FormMessage className=" text-red-400"/> )"
}/> </div> </div>  <CardFooter className=" border-t border-zion-blue-light pt-6"> <div className=" flex flex-col sm:flex-row gap-4 w-full sm:justify-between"> <Button type=" button"variant=" outline"className=" border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" > Save as Draft  <Button  </div>  </form>   </div>)""`;