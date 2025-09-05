
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
=======
import { useState } from &quot;react&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",

const profileSchema = z.object({
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
=======
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";

const _profileSchema = z.object({_displayName: z.string().min(2, _"Full Name must be at least 2 characters"), _bio: z.string().min(10, _"Bio must be at least 10 characters").max(500, _"Bio must be less than 500 characters"), _headline: z.string().min(5, _"Headline must be at least 5 characters").max(100, _"Headline must be less than 100 characters")});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const profileSchema = z.object({
  displayName: z.string().min(2, &quot;Full Name must be at least 2 characters&quot;),
  bio: z.string().min(10, &quot;Bio must be at least 10 characters&quot;).max(500, &quot;Bio must be less than 500 characters&quot;),
  headline: z.string().min(5, &quot;Headline must be at least 5 characters&quot;).max(100, &quot;Headline must be less than 100 characters&quot;)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type ProfileFormValues = z.infer<typeof profileSchema>,

<<<<<<< HEAD
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
<<<<<<< HEAD
      displayName: "",
      bio: "",
      headline: ""}}),

  const getTypeLabel = () => {
    switch (userType) {
      case "serviceProvider": return "Service Provider",
=======
interface ProfileSetupProps {_onComplete: (_data: ProfileFormValues) => void;
  userType: string;}

export function ProfileSetup(_{_onComplete, _userType}: ProfileSetupProps) {_const _form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema), _defaultValues: {
      displayName: "", _bio: "", _headline: ""}});

  const _getTypeLabel = () => {_switch (userType) {
      case "serviceProvider":
        return "Service Provider";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "talent":
        return "Talent",
      case "client":
        return "Client",
      default:
<<<<<<< HEAD
        return "User"
=======
      displayName: "&quot;,
      bio: "&quot;,
      headline: "&quot;}});

  const getTypeLabel = () => {
    switch (userType) {
      case &quot;serviceProvider&quot;:
        return &quot;Service Provider&quot;;
      case &quot;talent&quot;:
        return &quot;Talent&quot;;
      case &quot;client&quot;:
        return &quot;Client&quot;;
      default:
        return &quot;User";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return "User";}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {_getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>
      
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6&quot;>
          <FormField
            control={form.control}
            name=&quot;displayName"
            render={({ field }: { field: any }) => (
=======
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(onComplete)} className="space-y-6">
          <FormField
            control={_form.control}
            name="displayName"
            render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>
                  <div className="relative&quot;>
                    <Input
                      placeholder=&quot;Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {_...field}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;headline"
            render={({ field }: { field: any }) => (
=======
            control={_form.control}
            name="headline"
            render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative&quot;>
                    <Input
<<<<<<< HEAD
                      placeholder={`e.g., ${
                        userType === &quot;serviceProvider&quot; ? &quot;Professional Videographer with 5+ years experience&quot; :
                        userType === &quot;talent&quot; ? &quot;Senior Motion Designer specialized in 3D Animation&quot; :
                        &quot;Creative Director at XYZ Studios"
                      }`}
=======
                      placeholder={_`e.g., _${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {_...field}
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;bio"
            render={({ field }: { field: any }) => (
=======
            control={_form.control}
            name="bio"
            render={_(_{ field}: {_field: unknown}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel className="text-zion-slate-light&quot;>Bio</FormLabel>
                <FormControl>
                  <Textarea
<<<<<<< HEAD
                    placeholder={`Tell us about your ${
                      userType === &quot;serviceProvider&quot; ? &quot;services and expertise&quot; :
                      userType === &quot;talent&quot; ? &quot;skills and experience&quot; :
                      &quot;business and needs"
                    }`}
=======
                    placeholder={_`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <Button
<<<<<<< HEAD
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
=======
            type=&quot;submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            Complete Profile
          </Button>
        </form>
      </Form>
    </div>
  )
}
