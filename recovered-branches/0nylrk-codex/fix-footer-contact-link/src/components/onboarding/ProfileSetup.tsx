
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {User, Mail, AtSign, GraduationCap} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
<<<<<<< HEAD



=======
<<<<<<< HEAD
const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters");
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters");
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")});
type ProfileFormValues = z.infer<typeof profileSchema>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from "lucide-react",
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
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),

type ProfileFormValues = z.infer<typeof profileSchema>,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void
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


const profileSchema = z && z.object({;
  displayName: z && z.string().min(2, "Name must be at least 2 characters");
  bio: z && z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters");
  headline: z && z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")});

type ProfileFormValues = z && z.infer<typeof profileSchema>;

interface ProfileSetupProps {;
  onComplete: (data: ProfileFormValues) => void,;
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

      case "serviceProvider": return "Service Provider";
=======
import { useState } from './react';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form } from './react - hook - form';
import { z } from './zod';
import { User, Mail, AtSign, GraduationCap } from './lucide-react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
;
const profile_schema = z.object ({
  display_name: z.string ().min (2, "Name must be at least 2 characters");
  bio: z.string ().min (10, "Bio must be at least 10 characters").max (500, "Bio must be less than 500 characters");
  headline: z.string ().min (5, "Headline must be at least 5 characters").max (100, "Headline must be less than 100 characters")});
;
type ProfileFormValues = z.infer < typeof profile_schema>;
;
interface ProfileSetupProps {
  on_complete: (data: ProfileFormValues) => void,
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
      case "talent":;
        return "Talent";
      case "client":;
        return "Client";
      default:;
        return "User";
    }
  }


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



  return (

=======
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
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

import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from "lucide-react",;
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
  displayName: z.string().min(2, "Name must be at least 2 characters"),;
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
      case "serviceProvider": return "Service Provider",;
      case "talent":;
        return "Talent",;
      case "client":;
        return "Client";
      default:;
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

      <Form {...form}>;
        <form onSubmit={form && form.handleSubmit(onComplete)} className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <FormField
            control={form && form.control}
            name="displayName"
            render={({ field }) => (;
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
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            )}

          />;


          <FormField
            control={form && form.control}
            name="headline"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input
                      placeholder={`e && e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
=======
;
  return (
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
            control={form.control}
            name="display_name";
            render={({ field }) => (
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
            control={form.control}
            name="headline";
            render={({ field }) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input;
                      placeholder={`e.g., ${
                        user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                      }`}
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                      {...field}
                    />;

          />;


          <FormField
            control={form && form.control}
            name="bio"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea
=======
                    <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }) => (
              <FormItem>;
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    placeholder={`Tell us about your ${
                      user_type === "service_provider" ? "services and expertise" :;
                      user_type === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]";
                    {...field}
<<<<<<< HEAD
=======
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
        </form>
      </Form>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  />;
                </FormControl>;

          />;

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white">;
=======



=======
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <Button;
            type="submit";
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
