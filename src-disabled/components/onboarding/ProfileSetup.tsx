<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
import { useState } from "react,
import { zodResolver } from @hookform/resolvers/zod",
import { useForm } from "react-hook-form,
import { z } from zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react
import { Button } from "@/components/ui/button,
import { Input } from @/components/ui/input";
import { Textarea } from "@/components/ui/textarea;
import { User, Mail, AtSign, GraduationCap } from lucide-react'
import { Button } from @/components/ui/button",
import { Input } from "@/components/ui/input;
import { Textarea } from @/components/ui/textarea";

import {
  Form;
import { useState } from "react,import { zodResolver } from @hookform/resolvers/zod",import { useForm } from "react-hook-form,import { z } from zod",import { User, Mail, AtSign, GraduationCap  } from 'lucide-react;
import { Button } from "@/components/ui/button,import { Input  } from @/components/ui/input';
import { Textarea  } from '@/components/ui/textarea;
import {Form;
=======
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
  FormMessage} from @/components/ui/form",

  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from "@/components/ui/form
const profileSchema = z.object({
  displayName: z.string().min(2, Full Name must be at least 2 characters")
  bio: z.string().min(10, "Bio must be at least 10 characters).max(500, Bio must be less than 500 characters")
  headline: z.string().min(5, "Headline must be at least 5 characters).max(100, Headline must be less than 100 characters")})
type ProfileFormValues = z.infer<typeof profileSchema>
interface ProfileSetupProps {
<<<<<<< HEAD
=======
  onComplete: (data: ProfileFormValues) => void,
  userType: string
userType: string

>>>>>>> merged-prs-20250907-203621
  onComplete: (data: ProfileFormValues,) => void
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string

<<<<<<< HEAD
=======
userType: string
=======

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
      displayName: "
      bio: "
      headline: "}})
  const getTypeLabel = () => {
    switch (userType) {
      case serviceProvider": return "Service Provider
      case talent":
        return "Talent
      case client":
        return "Client
      default:
        return User"
    }
  }
      case "serviceProvider: return Service Provider",
      case "talent:
        return Talent",
      case "client:
        return Client",
      default:
        return "User
    }
  },
<<<<<<< HEAD
=======








origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className=space-y-6">
      <div className="text-center mb-6>
        <h3 className=text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2>
          Help others get to know you better
        </p>
      </div>


      


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onComplete)} className=space-y-6">
          <FormField
            control={form.control}
            name="displayName
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className=text-zion-slate-light">Full Name</FormLabel>
                <FormControl>
                  <div className="relative>
                    <Input
                      placeholder=Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple
                      {...field}
                    />
                    <User className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 />
              </FormItem>

import { useState } from react",
import { zodResolver } from "@hookform/resolvers/zod,
import { useForm } from react-hook-form",
import { z } from "zod,
import { User, Mail, AtSign, GraduationCap } from lucide-react';
import { Input } from "@/components/ui/input,
import { Textarea } from @/components/ui/textarea",
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form,
  displayName: z.string().min(2, Full Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters).max(500, Bio must be less than 500 characters"),
  headline: z.string().min(5, "Headline must be at least 5 characters).max(100, Headline must be less than 100 characters")}),
type ProfileFormValues = z.infer<typeof profileSchema>,
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string;
}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: ",
      bio: ",
      headline: "}}),
    switch (userType) {
      case serviceProvider": return "Service Provider;
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
      display_name: ",
      bio: ",
      headline: "}}),
  const getTypeLabel = () =>: any {
    switch (user_type) {
      case "service_provider: return Service Provider";
  FormMessage} from "@/components/ui/form,const profileSchema = null;
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form;
const profileSchema = z.object({displayName: z.string().min(2, Full Name must be at least 2 characters")bio: z.string().min(10, "Bio must be at least 10 characters).max(500, Bio must be less than 500 characters")headline: z.string().min(5, "Headline must be at least 5 characters).max(100, Headline must be less than 100 characters")})type ProfileFormValues = z.infer<typeof profileSchema>;
interface ProfileSetupProps  {onComplete: (data: ProfileFormValues) => void,userType: string;
userType: string;
}
export function ProfileSetup() {const form = useForm<ProfileFormValues>({resolver: zodResolver(profileSchema)defaultValues: {case "serviceProvider: return Service Provider";
      case "talent:;
        return Talent";
      case "client:;
        return Client";
      default:;
        return "User;
    }
  }case serviceProvider": return "Service Provider,case talent":;
        return "Talent,case client":;
        return "Client,default:;
        return User";
    }
  },return (<div className="space-y-6>;
      <div className=text-center mb-6">;
        <h3 className="text-2xl font-bold text-white>Create Your {getTypeLabel()} Profile</h3>;
        <p className=text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6>;
          <FormField;
            control={form.control}
            name=displayName";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light>Full Name</FormLabel>;
                <FormControl>;
                  <div className=relative">;
                    <Input;
                      placeholder="Your full name;
                      className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 />;
                  </div>;
                </FormControl>;
                <FormMessage className=text-red-400" />;
              </FormItem>;
import { Input } from "@/components/ui/input,import { Textarea } from @/components/ui/textarea",Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form,const profileSchema = z.object({displayName: z.string().min(2, Full Name must be at least 2 characters"),bio: z.string().min(10, "Bio must be at least 10 characters).max(500, Bio must be less than 500 characters"),headline: z.string().min(5, "Headline must be at least 5 characters).max(100, Headline must be less than 100 characters")}),type ProfileFormValues = z.infer<typeof profileSchema>,interface ProfileSetupProps  {onComplete: (data: ProfileFormValues) => void,userType: string;
}export function ProfileSetup() {const form = useForm<ProfileFormValues>({resolver: zodResolver(profileSchema),defaultValues: {displayName: ",bio: ",headline: "}}),const getTypeLabel = () => {switch (userType) {case serviceProvider": return "Service Provider;
  on_complete: (data: ProfileFormValues, ) => void,user_type: string;
}
export /**;
 * ProfileSetup - Function description;
 */;
      case talent":;
        return "Talent,case client":;
        return "Client;
      default:;
        return User";}
  }return (<div className="space-y-6>;
      <div className=text-center mb-6">;
        <h3 className="text-2xl font-bold text-white>Create Your {getTypeLabel()} Profile</h3>;
        <p className=text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onComplete)} className="space-y-6>;<FormField;
            control = {form && form.control}
            name=displayName";
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className="text-zion-slate-light>Full Name</FormLabel>;
                <FormControl>;
                  <div className=relative">;
                    <Input;
                      placeholder="Your full name;
                      className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 />;
                  </div>;
                </FormControl>;
                <FormMessage className=text-red-400" />;
              </FormItem>;
            )}/>;<FormField;
            control = {form && form.control}
            name="headline;
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className=text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative>;/>;
          <FormField;
            control={form.control}
            name=headline";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light>Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;

          />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  return (
    <div className="space-y-6>
      <div className="text-center mb-6">
        <h3 className=text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>"
        <p className=text-zion-slate-light mt-2>;
          Help others get to know you better;
        </p>
      </div>

        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
          <FormField;
            control={form.control}
            name=displayName"
            render={({ field }: { field: any }) => (
              <FormItem>"
                <FormLabel className=text-zion-slate-light>Full Name</FormLabel>
                <FormControl>"
                  <div className="relative>
                    <Input
                      placeholder="Your full name"
                      className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />"
                    <User className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400 />
              </FormItem>
<<<<<<< HEAD
:src/components/onboarding/ProfileSetup.tsx
            )}
          />
          <FormField
            control = {form.control}
            name=headline"
            render={({ field }: { field: any },) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light>Professional Headline</FormLabel>
                <FormControl>
                  <div className=relative">
                    <Input
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
                      }`}
=======
>>>>>>> origin/chore/fix-lint-and-merge


import { Button } from "@/components/ui/button",
import { Input } from @/components/ui/input","
import { Textarea } from @/components/ui/textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,"
  FormMessage} from "@/components/ui/form,
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),
  bio: z.string().min(10, Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, Headline must be less than 100 characters)}),
type ProfileFormValues = z.infer<typeof profileSchema>,
interface ProfileSetupProps {
  onComplete: (data:,  ProfileFormValues) => void,
  userType: string;
}
export function ProfileSetup({ onComplete, userType }:,  ProfileSetupProps) {
    resolver: zodResolver(profileSchema),
    defaultValues: {,
  onComplete: (data: ProfileFormValues) => void,
  userType: string;
}
export function ProfileSetup() { return null; }
      headline: ""}}),

        return Client;
      default:;"
        return "User;
    }

  }
  return (;
    <div className=space-y-6">;
      <div className="text-center mb-6>;
        <h3 className=text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;

        <p className="text-zion-slate-light mt-2>;
          Help others get to know you better;
        </p>;
      </div>;

                <FormLabel className=text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;"
                  <div className=relative>;
                    <Input;"
                      placeholder="Your full name;
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <User className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className=text-red-400 />;
              </FormItem>;
            )}

          />;

            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light>Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
          />;

          <FormField;

              <FormItem>

                <FormLabel className=text-zion-slate-light>Professional Headline</FormLabel>
                <FormControl>"

                  <div className="relative>
                    <Input;
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? Professional Videographer with 5+ years experience :"
                        userType === "talent ? Senior Motion Designer specialized in 3D Animation" :"
                        Creative Director at XYZ Studios

    <div className="space - y-6">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Input;
                      placeholder={`e.g., ${userType === serviceProvider ? "Professional Videographer with 5+ years experience" :;
                        userType === talent ? "Senior Motion Designer specialized in 3D Animation" :;
                        Creative Director at XYZ Studios;
                      }`}<div className="space - y-6">;
      <div className=text - center mb - 6>;
=======
>>>>>>> merged-prs-20250907-203621
      <div className="text - center mb - 6">;
>>>>>>> origin/chore/fix-lint-and-merge
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;

        <p className=text - zion - slate - light mt - 2>;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;"
        <form on_submit={form.handle_submit (on_complete)} className="space - y-6>;
          <FormField;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            control = {form.control }
            name=display_name";
            render={({ field }: { field: any }, ) => (<FormItem>;
            control = {form.control}"
            name=display_name;
=======
>>>>>>> merged-prs-20250907-203621
            control = {form.control, }"
            name="display_name";
>>>>>>> origin/chore/fix-lint-and-merge
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light>Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input;
                      placeholder=Your full name";"
                      className=bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple;
                      {...field}
                    />;"
                    <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4 />;
                  </div>;
                </FormControl>;
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            control = {form.control }
            name=headline;
            render={({ field }: { field: any }, ) => (<FormItem>;
            control = {form.control}"
            name="headline;
=======
>>>>>>> merged-prs-20250907-203621
            control = {form.control, }"
            name="headline";
>>>>>>> origin/chore/fix-lint-and-merge
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Input;
                      placeholder={`e.g., ${user_type === "service_provider ? Professional Videographer with 5+ years experience" :;
                        user_type === "talent ? Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios;}`}
                      className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;/>;<FormField;
            control = {form.control}
            name="bio;
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className=text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple

                      {...field}
                    />;
          />;

            render={({ field }: { field: any },) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea
                    <GraduationCap className=absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className=text - red - 400 />;
              </FormItem>)}
          />;
          <FormField;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            control = {form.control }
            name="bio";
            render={({ field }: { field: any }, ) => (<FormItem>;
                <FormLabel className=text - zion - slate - light>Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === "serviceProvider" ? services and expertise :;
                      userType === "talent" ? skills and experience :;
                      "business and needs";
                    }`}
                    className=bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px];
                    {...field}
                  />;
                </FormControl>;}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}/>;
          <FormField;
            control={form.control}
            name=bio;
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === serviceProvider ? "services and expertise" :;
                      userType === talent ? "skills and experience" :;
                      business and needs;
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage className=text-red-400 />;
              </FormItem>;
            )}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
            control = {form.control, }"
            name="bio";
            control = {form.control}"
            name="bio;
            render={({ field }: { field: any }, ) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;

                      {...field}
                    />
                    <GraduationCap className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className=text-red-400 />
              </FormItem>
            )}
<<<<<<< HEAD
:src/components/onboarding/ProfileSetup.tsx
          />
          <FormField
            control = {form.control}
            name="bio"
            render={({ field }: { field: any },) => (
=======
>>>>>>> origin/chore/fix-lint-and-merge

          />;
          <FormField;
            control={form.control}
            name=bio"
            render={({ field }: { field: any }) => (

<<<<<<< HEAD
=======
<<<<<<< HEAD


                      }`}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              <FormItem>

                <FormLabel className="text-zion-slate-light>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === serviceProvider" ? "services and expertise :
                      userType === talent" ? "skills and experience :
                      business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px];

                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
<<<<<<< HEAD
=======
<<<<<<< HEAD

          




          

>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
          <Button
            type=submit
=======
>>>>>>> origin/chore/fix-lint-and-merge

            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile;
          </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD




        </form>
      </Form>
    </div>


        </form>
      </Form>
    </div>
  )

>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> origin/chore/fix-lint-and-merge

          />;
          <Button;
            type=submit";"
            className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white;
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
  );
origin/cursor/automate-test-improve-and-merge-code-2533

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  );
origin/cursor/automate-test-improve-and-merge-code-2533
case "talent": return Talent;";
case "client: return Client";
default: ;
}
getTypeLabel () ";
<<<<<<< HEAD
=======
<<<<<<< HEAD
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
}Profile</h3> <p className=text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=relative > <Inputplaceholder="Your full name" className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

  ...field "

}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 /> </div> </FormControl> <FormMessage className=text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light>Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {
  ...field "
<<<<<<< HEAD
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
=======
<<<<<<< HEAD
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> </FormControl> <FormMessage className=text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"}

}Profile</h3> <p className=text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=relative > <Input placeholder="Your full name" className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {
  ...field ";
  )/>;
          <Button;
            type="submit;
            className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
  ))case "talent: return Talent";";
case client: return "Client";
default: ;}getTypeLabel () ;}Profile</h3> <p className=text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light>Full Name</FormLabel> <FormControl> <div className=relative" > <Inputplaceholder="Your full name className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <User className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative > <InputclassName=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <GraduationCap className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px] {...field ;
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}}<FormMessage className=text - red - 400" />;
>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
}/> </FormControl> <FormMessage className="text-red-400 /> </FormItem>)
}/> <Button > Complete Profile </Button> </form> </Form> </div>)
}}
=======
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
>>>>>>> origin/chore/fix-lint-and-merge

}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}}

              </FormItem>)}
          />;
          <Button;
            type="submit";

          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>)case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {
    </div>)case talent: return "Talent";;
case client": return "Client;
default:;
}
getTypeLabel () ;
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className=text - zion - slate - light>Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder=Your full name className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ;
}/> <User className=absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className=relative > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ;
}/> <GraduationCap className=absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className=bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px] {...field ";
}/> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className=text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative > <Input placeholder=Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {...field ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className=bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px] {
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
<<<<<<< HEAD
  ...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
=======
>>>>>>> merged-prs-20250907-203621
  ...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className=bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px] {
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400 /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
<<<<<<< HEAD
}"
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className=bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px] {...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}";
=======
}"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
