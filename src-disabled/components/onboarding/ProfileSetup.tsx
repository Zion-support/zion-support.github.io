<<<<<<< HEAD

=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/onboarding/ProfileSetup.tsx
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form;

;
import { useState } from "react",import { zodResolver } from "@hookform/resolvers/zod",import { useForm } from "react-hook-form",import { z } from "zod",import { User, Mail, AtSign, GraduationCap  } from 'lucide-react';
import { Button } from "@/components/ui/button",import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import {Form;
=======
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/cursor/delete-old-data-records-6bba

  FormControl;
  FormField;
  FormItem;
  FormLabel;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/onboarding/ProfileSetup.tsx
  FormMessage} from "@/components/ui/form",

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
interface ProfileSetupProps {
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onComplete: (data: ProfileFormValues) => void,
  userType: string

>>>>>>> merged-prs-20250907-203621
  onComplete: (data: ProfileFormValues,) => void
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string

<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
userType: string
=======

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
<<<<<<< HEAD



=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/onboarding/ProfileSetup.tsx
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
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc







<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>

<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      


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
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
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
  FormMessage} from "@/components/ui/form",const profileSchema = null;
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
const profileSchema = z.object({displayName: z.string().min(2, "Full Name must be at least 2 characters")bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters")headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")})type ProfileFormValues = z.infer<typeof profileSchema>;
interface ProfileSetupProps  {onComplete: (data: ProfileFormValues) => void,userType: string;
userType: string;
}
export function ProfileSetup() {const form = useForm<ProfileFormValues>({resolver: zodResolver(profileSchema)defaultValues: {case "serviceProvider": return "Service Provider";
      case "talent":;
        return "Talent";
      case "client":;
        return "Client";
      default:;
        return "User";
    }
  }case "serviceProvider": return "Service Provider",case "talent":;
        return "Talent",case "client":;
        return "Client",default:;
        return "User";
    }
  },return (<div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (<FormItem>;
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
import { Input } from "@/components/ui/input",import { Textarea } from "@/components/ui/textarea",Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form",const profileSchema = z.object({displayName: z.string().min(2, "Full Name must be at least 2 characters"),bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),type ProfileFormValues = z.infer<typeof profileSchema>,interface ProfileSetupProps  {onComplete: (data: ProfileFormValues) => void,userType: string;
}export function ProfileSetup() {const form = useForm<ProfileFormValues>({resolver: zodResolver(profileSchema),defaultValues: {displayName: "",bio: "",headline: ""}}),const getTypeLabel = () => {switch (userType) {case "serviceProvider": return "Service Provider";
  on_complete: (data: ProfileFormValues, ) => void,user_type: string;
}
export /**;
 * ProfileSetup - Function description;
 */;
function ProfileSetup() {const form = use_form < ProfileFormValues>({resolver: zod_resolver (profile_schema),default_values: {display_name: "",bio: "",headline: ""}}),const getTypeLabel = () =>: any {switch (user_type) {case "service_provider": return "Service Provider";
      case "talent":;
        return "Talent",case "client":;
        return "Client";
      default:;
        return "User";}
  }return (<div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onComplete)} className="space-y-6">;<FormField;
            control = {form && form.control}
            name="displayName";
            render={({ field }: { field: any },) => (<FormItem>;
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
            )}/>;<FormField;
            control = {form && form.control}
            name="headline";
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;/>;
          <FormField;
            control={form.control}
            name="headline";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="space-y-6">"
      <div className="text-center mb-6">"
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>"
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>
      </div>

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/onboarding/ProfileSetup.tsx
            )}
          />
          <FormField
            control = {form.control,}
            name="headline"
            render={({ field }: { field: any },) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      }`}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;

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

        return "Client";
      default:;"
        return "User";
    }

  };
  return (;
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;

        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;

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

          />;

            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
          />;

          <FormField;

              <FormItem>

                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>"

                  <div className="relative">
                    <Input;
                      placeholder={`e.g., ${"
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :"
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :"
                        "Creative Director at XYZ Studios"

    <div className="space - y-6">;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Input;
                      placeholder={`e.g., ${userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :;
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}<div className="space - y-6">;
<<<<<<< HEAD
      <div className="text - center mb - 6">;
=======
      <div className=text - center mb - 6>;
=======
>>>>>>> merged-prs-20250907-203621
      <div className="text - center mb - 6">;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;

        <p className="text - zion - slate - light mt - 2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;"
        <form on_submit={form.handle_submit (on_complete)} className="space - y-6">;
          <FormField;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            control = {form.control }
            name="display_name";
            render={({ field }: { field: any }, ) => (<FormItem>;
<<<<<<< HEAD
            control = {form.control, }"
            name="display_name";
=======
            control = {form.control}"
            name=display_name;
=======
>>>>>>> merged-prs-20250907-203621
            control = {form.control, }"
            name="display_name";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            control = {form.control }
            name="headline";
            render={({ field }: { field: any }, ) => (<FormItem>;
<<<<<<< HEAD
            control = {form.control, }"
            name="headline";
=======
            control = {form.control}"
            name="headline;
=======
>>>>>>> merged-prs-20250907-203621
            control = {form.control, }"
            name="headline";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <Input;
                      placeholder={`e.g., ${user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;/>;<FormField;
            control = {form.control}
            name="bio";
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"

                      {...field}
                    />;

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            control = {form.control }
            name="bio";
            render={({ field }: { field: any }, ) => (<FormItem>;
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === "serviceProvider" ? "services and expertise" :;
                      userType === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}/>;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === "serviceProvider" ? "services and expertise" :;
                      userType === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
            control = {form.control, }"
            name="bio";
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
            control = {form.control, }"
            name="bio";
            control = {form.control}"
            name="bio;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;

                      {...field}
                    />"
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/onboarding/ProfileSetup.tsx
          />
          <FormField
            control = {form.control,}
            name="bio"
            render={({ field }: { field: any },) => (
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
          <FormField;
            control={form.control}"
            name="bio"
            render={({ field }: { field: any }) => (

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


              <FormItem>

                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";

                    {...field}
                  />
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
<<<<<<< HEAD



=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          




          

>>>>>>> merged-prs-20250907-203621
:src/components/onboarding/ProfileSetup.tsx
          <Button
<<<<<<< HEAD
            type="submit"
=======
            type=submit
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile;
          </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



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
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
  );
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba



  );
origin/cursor/automate-test-improve-and-merge-code-2533
case "talent": return "Talent";";
case "client": return "Client";
default: ;
};
getTypeLabel () ";
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/onboarding/ProfileSetup.tsx
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
}Profile</h3> <p className=text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=relative > <Inputplaceholder="Your full name" className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  ...field "

}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
<<<<<<< HEAD


=======
<<<<<<< HEAD
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
:src_backup/components/onboarding/ProfileSetup.tsx
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
=======
<<<<<<< HEAD
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
=======
<<<<<<< HEAD
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> </FormControl> <FormMessage className=text-red-400" /> </FormItem>) ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"}

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
  )/>;
          <Button;
            type="submit";
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
<<<<<<< HEAD
  ))case "talent": return "Talent";";
case "client": return "Client";
default: ;}getTypeLabel () ";}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}<FormMessage className="text - red - 400" />;
=======
  ))case "talent: return Talent";";
case client: return "Client";
default: ;}getTypeLabel () ;}Profile</h3> <p className=text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light>Full Name</FormLabel> <FormControl> <div className=relative" > <Inputplaceholder="Your full name className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <User className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative > <InputclassName=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <GraduationCap className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4 /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px] {...field ;
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}}<FormMessage className=text - red - 400" />;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/onboarding/ProfileSetup.tsx
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)
}/> <Button > Complete Profile </Button> </form> </Form> </div>)
<<<<<<< HEAD
}"}
=======
}}
=======
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;"
}"}

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
:src_backup/components/onboarding/ProfileSetup.tsx
    </div>)case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
:src_backup/components/onboarding/ProfileSetup.tsx
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
}
<<<<<<< HEAD
;

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;


  ...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className=bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px] {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
:src_backup/components/onboarding/ProfileSetup.tsx
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
<<<<<<< HEAD

=======
<<<<<<< HEAD
}"
:src_backup/components/onboarding/ProfileSetup.tsx
=======
<<<<<<< HEAD
}"
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}";

