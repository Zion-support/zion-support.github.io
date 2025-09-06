
<<<<<<< HEAD

<<<<<<< HEAD
=======
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues,) => void
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from "@/components/ui/form"
const profileSchema = z.object({
  displayName: z.string().min(2, "Full Name must be at least 2 characters")
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters")
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")})
type ProfileFormValues = z.infer<typeof profileSchema>
<<<<<<< HEAD
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues,) => void
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",

const profileSchema = z.object({
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),

type ProfileFormValues = z.infer<typeof profileSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,

=======
>>>>>>> interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
>>>>>>>   userType: string
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  userType: string
>>>>>>> }
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      displayName: ""
      bio: ""
      headline: ""}})
  const getTypeLabel = () => {
    switch (userType) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "serviceProvider": return "Service Provider"
      case "talent":
        return "Talent"
      case "client":
        return "Client"
      default:
        return "User"
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      displayName: "",
      bio: "",
      headline: ""}}),

  const getTypeLabel = () => {
    switch (userType) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "serviceProvider": return "Service Provider",
      case "talent":
        return "Talent",
      case "client":
        return "Client",
      default:
        return "User"
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <div className="space-y-6">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Form {...form}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Form {...form}>
>>>>>>>         <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD

              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          />
          <FormField
            control = {form.control,}
            name="headline"
            render={({ field }: { field: any },) => (
<<<<<<< HEAD
>>>>>>>               <FormItem>
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
const profileSchema = z.object({;
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),;
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),;
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),;
type ProfileFormValues = z.infer<typeof profileSchema>,;
interface ProfileSetupProps {;
  onComplete: (data: ProfileFormValues) => void,;
  userType: string;
}
;
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {;
  const form = useForm<ProfileFormValues>({;
    resolver: zodResolver(profileSchema),;
    defaultValues: {;
      displayName: "",;
      bio: "",;
      headline: ""}}),;
  const getTypeLabel = () => {;
    switch (userType) {;
<<<<<<< HEAD
      case "serviceProvider": return "Service Provider";
  on_complete: (data: ProfileFormValues, ) => void,
  user_type: string;
}
export /**
 * ProfileSetup - Function description
 */
function ProfileSetup() {
  const form = use_form < ProfileFormValues>({
    resolver: zod_resolver (profile_schema),
    default_values: {
      display_name: "",
      bio: "",
      headline: ""}}),
  const getTypeLabel = () =>: any {
    switch (user_type) {
      case "service_provider": return "Service Provider";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      case "serviceProvider": return "Service Provider",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "talent":;
        return "Talent",;
      case "client":;
        return "Client";
      default:;
        return "User";
<<<<<<< HEAD


    }
  }

  return (

=======
    }
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
<<<<<<< HEAD
        <form onSubmit={form && form.handleSubmit(onComplete)} className="space-y-6">;

          <FormField
            control = {form && form.control,}
            name="displayName"
            render={({ field }: { field: any },) => (;
=======
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input;
                      placeholder="Your full name";
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
<<<<<<< HEAD

          />;


          <FormField
            control = {form && form.control,}
            name="headline"
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
          />;
          <FormField;
            control={form.control}
            name="headline"
            render={({ field }: { field: any }) => (

>>>>>>>               <FormItem>
>>>>>>>                 <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <FormControl>
                  <div className="relative">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
          />;
          <FormField;
            control={form.control}
            name="headline"
            render={({ field }: { field: any }) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Input
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
<<<<<<< HEAD

    <div className="space - y-6">;
      <div className="text - center mb - 6">;
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;
        <p className="text - zion - slate - light mt - 2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
        <form on_submit={form.handle_submit (on_complete)} className="space - y-6">;
          <FormField;
            control = {form.control, }
            name="display_name";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input;
                      placeholder="Your full name";
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                      {...field}
                    />;
                    <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }
            name="headline";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input;
                      placeholder={`e.g., ${
                        user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
<<<<<<< HEAD
                    />;

          />;


=======
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
<<<<<<< HEAD
          />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <FormField
            control = {form.control,}
            name="bio"
<<<<<<< HEAD
            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea
                    <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
=======
            render={({ field }: { field: any },) => (
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />;
          <FormField;
            control={form.control}
            name="bio"
            render={({ field }: { field: any }) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <FormItem>
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {...field}
<<<<<<< HEAD
                  />;
                </FormControl>;

                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
=======
                  />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
<<<<<<< HEAD
<<<<<<< HEAD

              <FormItem>
=======
          />
          <FormField
            control = {form.control,}
            name="bio"
            render={({ field }: { field: any },) => (
>>>>>>>               <FormItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
<<<<<<< HEAD

=======
          />
<<<<<<< HEAD
=======
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        </form>
      </Form>
    </div>
  )
<<<<<<< HEAD
=======
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
          />;
          <Button;
            type="submit";
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </form>;
      </Form>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

}
;

=======
se "talent": return "Talent";"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
case "talent": return "Talent";"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
case "client": return "Client"
default:
}
getTypeLabel () "
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
<<<<<<< HEAD
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"}
=======
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)
}/> <Button > Complete Profile </Button> </form> </Form> </div>)
}"}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
          />;
          <Button;
            type="submit";
<<<<<<< HEAD
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
=======
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD
    </div>);
case "talent": return "Talent";";
case "client": return "Client";
default:;
}
;
>>>>>>> 


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
