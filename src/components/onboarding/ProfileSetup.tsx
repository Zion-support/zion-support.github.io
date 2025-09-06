<<<<<<< HEAD

=======
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues,) => void
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues,) => void
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
=======
  onComplete: (data: ProfileFormValues) => void,
ursor/fix-website-loading-errors-and-merge-6662
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string
userType: string
}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
      displayName: ""
      bio: ""
      headline: ""}})
  const getTypeLabel = () => {
    switch (userType) {
      case "serviceProvider": return "Service Provider"
      case "talent":
        return "Talent"
      case "client":
        return "Client"
      default:
        return "User"
    }
  }
      displayName: "",
      bio: "",
      headline: ""}}),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const getTypeLabel = () => {
    switch (userType) {
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

=======
  return (





  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>
      <Form {...form}>
      

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
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
            )}
          />
          <FormField
            control = {form.control,}
            name="headline"
            render={({ field }: { field: any },) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form";

const profileSchema = z && z.object({;
  displayName: z && z.string().min(2, "Full Name must be at least 2 characters");
  bio: z && z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters");
  headline: z && z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")});

type ProfileFormValues = z && z.infer<typeof profileSchema>;

interface ProfileSetupProps {;
  onComplete: (data: ProfileFormValues,) => void,;
  userType: string;
}

export function ProfileSetup(): any ({ onComplete, userType }: ProfileSetupProps) {;
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
=======
      case "serviceProvider": return "Service Provider",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "talent":;
        return "Talent";
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input
                      placeholder="Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          />;
          <FormField;
            control={form.control}
            name="headline"
            render={({ field }: { field: any }) => (
<<<<<<< HEAD

=======
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <Input
                      placeholder={`e && e.g., ${
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      }`}
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
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
          />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <FormField
            control = {form && form.control,}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          />;
          <FormField;
            control = {form.control, }
            name="bio";
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${
                      user_type === "service_provider" ? "services and expertise" :;
                      user_type === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]";
                    {...field}
<<<<<<< HEAD

          />;
          <FormField;
            control={form.control}
            name="bio"
            render={({ field }: { field: any }) => (


              <FormItem>
=======
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control = {form.control,}
            name="bio"
            render={({ field }: { field: any },) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

          

          <Button
=======
          />
          
          

          <Button
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          />;

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white">;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
  );
<<<<<<< HEAD
case "talent": return "Talent";";
case "client": return "Client";
default: ;

};
getTypeLabel () ";
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
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
se "talent": return "Talent";"
case "talent": return "Talent";"
case "client": return "Client"
default:
}
getTypeLabel () "
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) "
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)
}/> <Button > Complete Profile </Button> </form> </Form> </div>)
}"}
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <Button;
            type="submit";
<<<<<<< HEAD
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
=======
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
    </div>;
  );
}
;
}
;
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {
  ...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {
  ...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
