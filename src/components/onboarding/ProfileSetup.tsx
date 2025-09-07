<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
  FormMessage} from "@/components/ui/form",

const profileSchema = null;
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
origin/cursor/automate-test-improve-and-merge-code-2533
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
  userType: string}
=======
=======
  userType: string
userType: string
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx

}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



<<<<<<< HEAD
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "",
      bio: "",
      headline: ""}}),

  const getTypeLabel = () => {
    switch (userType) {
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
userType: string;
}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {}
  const form = useForm<ProfileFormValues>({}
    resolver: zodResolver(profileSchema)
    defaultValues: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
  return (
    <div className="space-y-6">"
      <div className="text-center mb-6">"
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>"
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>
      </div>

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
      <Form {...form}>
=======
      <Form {...form}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
          <FormField;
            control={form.control}"
            name="displayName"
            render={({ field }: { field: any }) => (
              <FormItem>"
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>"
                  <div className="relative">
                    <Input"
                      placeholder="Your full name""
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />"
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
=======
"
import { useState } from "react",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { useForm } from "react-hook-form",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;
const profileSchema = z.object({;"
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),;"
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),;"
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),;
type ProfileFormValues = z.infer<typeof profileSchema>,;
interface ProfileSetupProps {;
  onComplete: (data:,  ProfileFormValues) => void,;
  userType: string;
}
;
export function ProfileSetup({ onComplete, userType }:,  ProfileSetupProps) {;
  const form = useForm<ProfileFormValues>({;
    resolver: zodResolver(profileSchema),;
    defaultValues: {;,
  onComplete: (data: ProfileFormValues) => void,;
  userType: string;
}
;
export function ProfileSetup() { return null; }
      headline: ""}}),;
  const getTypeLabel = () => {;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
    switch (userType) {;
      case "serviceProvider": return "Service Provider",;
      case "talent":;
        return "Talent",;
      case "client":;
=======
    switch (userType) {;"
      case "serviceProvider": return "Service Provider";
  on_complete: (data: ProfileFormValues, ) => void,
  user_type: string;
}
export /**;
 * ProfileSetup - Function description;
 */
function ProfileSetup() {}
  const form = use_form < ProfileFormValues>({}
    resolver: zod_resolver (profile_schema),
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
    default_values: {"
      display_name: "","
      bio: "","
      headline: ""}}),
  const getTypeLabel = () =>: any {}
    switch (user_type) {"
      case "service_provider": return "Service Provider";"
      case "talent":;"
        return "Talent",;"
      case "client":;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
        return "Client";
      default:;"
        return "User";
    }
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
=======
    default_values: {,
      display_name: "","
      bio: "","
      headline: ""}}),"
  const getTypeLabel = () =>: any {
    switch (user_type) {
      case "service_provider": return "Service Provider";
      case "serviceProvider": return "Service Provider",;
      case "talent":;
        return "Talent",;
      case "client":;
        return "Client";
      default:;,
        return "User";
    }
  }
  return (
      default:;
        return "User";
    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
  };
  return (;
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
=======
  }

  return (
"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (;
              <FormItem>;
=======
      <Form {...form}>;"
        <form onSubmit={form && form.handleSubmit(onComplete)} className="space-y-6">;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx

          <FormField;
            control = {form && form.control,}"
            name="displayName"
            render={({ field }: { field: any },) => (;
              <FormItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
=======
          <FormField
            control = {form && form.control,}
            name="displayName""
            render={({ field }: { field: any },) => (;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (;
              <FormItem>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
                    <Input;"
                      placeholder="Your full name";"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;"
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          />;
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


          <FormField;
            control = {form && form.control,}"
            name="headline"
=======
          />;
          <FormField
            control = {form && form.control,}
            name="headline""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
          />;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
          <FormField;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
            control={form.control}"
            name="headline"
            render={({ field }: { field: any }) => (
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <FormItem>
=======
              <FormItem>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>"
=======
            control={form.control}
            name="headline""
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>"
                <FormControl>
                  <div className="relative">"
                    <Input placeholder={`e.g., ${`
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :"
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :"
                        "Creative Director at XYZ Studios""
    <div className="space - y-6" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
                  <div className="relative">
                    <Input;
                      placeholder={`e.g., ${"
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :"
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :"
                        "Creative Director at XYZ Studios"
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                      }`}
<<<<<<< HEAD
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
=======
=======
=======
                      }`}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx

    <div className="space - y-6">;
      <div className="text - center mb - 6">;
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;
=======
"
    <div className="space - y-6">;"
      <div className="text - center mb - 6">;"
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
        <p className="text - zion - slate - light mt - 2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;"
        <form on_submit={form.handle_submit (on_complete)} className="space - y-6">;
          <FormField;
            control = {form.control, }"
            name="display_name";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
                    <Input;"
                      placeholder="Your full name";"
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                      {...field}
                    />;"
                    <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="headline";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
                    <Input;`
                      placeholder={`e.g., ${"
                        user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;"
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;"
                        "Creative Director at XYZ Studios";
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx

                      }`}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
`
                      }`}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
=======
                    <Input;
                      placeholder={`e.g., ${`
                        user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}`
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
                      {...field}
                    />;
          />;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx


          <FormField;
            control = {form.control,}"
            name="bio"
=======
          <FormField
            control = {form.control,}
            name="bio""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea"
                    <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="bio";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
                  <Textarea;`
                    placeholder={`Tell us about your ${"
                      userType === "serviceProvider" ? "services and expertise" :"
                      userType === "talent" ? "skills and experience" :"
                      "business and needs"`
                    }`}"
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {...field}
                  />;
                </FormControl>;
`
                      }`}"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <Textarea;
                    placeholder={`Tell us about your ${`
                      userType === "serviceProvider" ? "services and expertise" :"
                      userType === "talent" ? "skills and experience" :"
                      "business and needs""
                    }`}`
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"",
                    {...field}
                  />;
                </FormControl>;
                      }`}`
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple""
                      {...field}
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />"
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />"
          <FormField;
            control={form.control}
            name="headline"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
                      {...field}
                    />"
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />;
          <FormField;
            control={form.control}"
            name="bio"
            render={({ field }: { field: any }) => (

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
          />;
          <FormField;
            control={form.control}
            name="bio""
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>"
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${`
                      userType === "serviceProvider" ? "services and expertise" :"
                      userType === "talent" ? "skills and experience" :"
                      "business and needs""
                    }`}`
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"",
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />"
              </FormItem>
            )}
          />
          <Button
            type="submit""
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white""
            name="bio"
            render={({ field }: { field: any }) => (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
              <FormItem>
=======
                      }`}              <FormItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
=======
              <FormItem>"
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea;`
                    placeholder={`Tell us about your ${"
                      userType === "serviceProvider" ? "services and expertise" :"
                      userType === "talent" ? "skills and experience" :"
                      "business and needs"`
                    }`}"
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
                    {...field}
                  />
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          

<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
          <Button
            type="submit"
=======
          <Button"
            type="submit""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile;
          </Button>
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
      </Form>
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        </form>
      </Form>
    </div>
  )

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======




        </form>
      </Form>
    </div>


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
        </form>
      </Form>
    </div>
  )
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
          />;
          <Button;"
            type="submit";"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
  );
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
;
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
  );
origin/cursor/automate-test-improve-and-merge-code-2533
case "talent": return "Talent";";
case "client": return "Client";
default: ;
};
getTypeLabel () ";
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
<<<<<<< HEAD
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  ...field "
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
=======
  );"
case "talent": return "Talent";";"
case "client": return "Client";
default: ;

};"
getTypeLabel () ";"
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {"
  ...field ""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;"
}"}
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx

                <FormMessage className="text - red-400" />;
=======
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {",
  ...field ""
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"}"
                <FormMessage className="text - red - 400" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
              </FormItem>)}
          />;
          <Button;
            type="submit";
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text-white";
=======
"
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <Button;"
            type="submit";"
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
=======
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
    </div>);"
case "talent": return "Talent";";"
case "client": return "Client";
default:;
<<<<<<< HEAD:src_backup/components/onboarding/ProfileSetup.tsx
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple" {
  ...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" /> </div> </FormControl> <FormMessage className="text - red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple" {
  ...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" /> </div> </FormControl> <FormMessage className="text - red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min-h-[120px]" {
  ...field ";
}/> </FormControl> <FormMessage className="text - red-400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
<<<<<<< HEAD
}"}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}"}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
}"}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
    </div>);
case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {",
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
}
;
}"}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/onboarding/ProfileSetup.tsx
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"
<<<<<<< HEAD:src/components/onboarding/ProfileSetup.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/onboarding/ProfileSetup.tsx
=======
}"
getTypeLabel () ";"
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";"
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";"
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {"
  ...field ";"
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);"
}"}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/onboarding/ProfileSetup.tsx
