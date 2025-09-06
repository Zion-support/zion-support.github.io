
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

=======


  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

<<<<<<< HEAD
=======

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;

========
interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from "lucide-react",

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { AppMetadataValues } from "./MetadataManager";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
Form
  FormControl
  FormDescription
  FormField
  FormItem
  FormLabel
  FormMessage
} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

<<<<<<< HEAD
<<<<<<< HEAD
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

=======


export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" |e.key === ",") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
<<<<<<< HEAD
<<<<<<< HEAD

=======
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (value && !keywords.includes(value)) {
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();
      if (value && !keywords && keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]);
        e && e.currentTarget.value = "";
      }
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
  };
  const removeKeyword = (keyword: string) => {;
    setValue(;
      "keywords",;
      keywords && keywords.filter((k) => k !== keyword),;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
=======

      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]),
        e.currentTarget.value = ""
      }
    }
}
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords"
      keywords.filter((k) => k !== keyword)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    );
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const longDescription = watch("longDescription");
  return (
<<<<<<< HEAD
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
  },
  
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords",
      keywords.filter((k) => k !== keyword)
    )
  },
  
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={control}
              name="appTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter app title"
                      maxLength={platform === "ios" ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "30" : "50"} characters
                  </FormDescription>
                </FormItem>
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
import { X } from "lucide-react",;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
}
;
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form,;
  const keywords = watch("keywords"),;
  const platform = watch("platform"),;
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === "Enter" || e.key === ",") {;
      e.preventDefault(),;
      const value = e.currentTarget.value.trim(),;
      if (value && !keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]),;
        e.currentTarget.value = "";
      }
    }
  },;
  const removeKeyword = (keyword: string) => {;
    setValue(;
      "keywords",;
      keywords.filter((k) => k !== keyword);
    );
  },;
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,;
  const longDescription = watch("longDescription");
  return (;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
;
interface MetadataFormProps {;
  form:UseFormReturn<AppMetadataValues>;
}
;
export const MetadataForm:React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form,;
  const keywords = watch("keywords"),;
  const platform = watch("platform"),;
  ;
  const addKeyword = (e:React.KeyboardEvent<HTMLInputElement>) => {;
    if (e.key === "Enter" || e.key === ",") {;
      e.preventDefault(),;
      const value = e.currentTarget.value.trim(),;
      ;
      if (value && !keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]),;
        e.currentTarget.value = "",;
      }
    }
  },;
  ;
  const removeKeyword = (keyword:string) => {;
    setValue(;
      "keywords",;
      keywords.filter((k) => k !== keyword);
    ),;
  },;
  ;
  const maxDescriptionLength = platform === "ios" ? 4000 :4000,;
  const longDescription = watch("longDescription"),;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
<<<<<<< HEAD
            <FormField
              control={control}
              name="appTitle"
=======
            <FormField;
              control={control}
              name="appTitle";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input
                      placeholder="Enter app title"
                      maxLength={platform === "ios" ? 30 : 50}
import React from './react';
import { UseFormReturn  } from './react - hook - form';
import { AppMetadataValues  } from './MetadataManager';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components / ui / form';
import { Badge  } from '@/components / ui / badge';
import { X  } from './lucide-react';
interface MetadataFormProps {
  form: UseFormReturn < AppMetadataValues>;
}
export const MetadataForm: React.FC < MetadataFormProps> = ({ form }) => {
  const { control, register, watch, set_value } = form;
  const keywords = watch ("keywords");
  const platform = watch ("platform");
;
  const add_keyword = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      const value = e.current_target.value.trim ();
;
      if () {) {
  $2
}
        set_value ("keywords", [...keywords, value]);
        e.current_target.value = "";
      }
    }
  }
;
  const remove_keyword = (keyword: string) =>: any {
    set_value (
      "keywords",
      keywords.filter ((k) => k !== keyword),
    );
  }
;
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const long_description = watch ("long_description");
;
  return (
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle > App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space - y-4">;
            <FormField;
              control={control}
              name="app_title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > App Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Enter app title";
                      max_length={platform === "ios" ? 30 : 50}
=======
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

            />;


========
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
            <FormField
              control={control}
              name="shortDescription"
=======
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="shortDescription";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input
                      placeholder="Brief description of your app"
                      maxLength={platform === "ios" ? 170 : 80}
                </FormItem>)}
            />;
            <FormField;
              control={control}
              name="short_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Short Description</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Brief description of your app";
                      max_length={platform === "ios" ? 170 : 80}
=======
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
                    Max {platform === "ios" ? "170" : "80"} characters;
                  </FormDescription>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

            />;


========
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
            <FormField
              control={control}
              name="longDescription"
=======
                    Max {platform === "ios" ? "170" :"80"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="longDescription";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
=======
                    <Textarea ;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      maxLength={maxDescriptionLength}
                </FormItem>)}
            />;
            <FormField;
              control={control}
              name="long_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Detailed description of your app";
                      className="min - h-32";
                      max_length={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

                </FormItem>;
              )}
            />;
            <FormField;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
)}
            />
            <FormField

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              control={control}
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Brief description of your app"
                      maxLength={platform === "ios" ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "170" : "80"} characters
                  </FormDescription>
                </FormItem>
              )}
<<<<<<< HEAD

<<<<<<< HEAD
=======
            />;
            <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
/>
            <FormField

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              control={control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
<<<<<<< HEAD

<<<<<<< HEAD
=======
                    <Textarea 

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<Textarea

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {longDescription.length}/{maxDescriptionLength} characters
                  </FormDescription>
                </FormItem>
              )}
            />

<<<<<<< HEAD
<<<<<<< HEAD
=======
            

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
            />;
            <div>;
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
              <Input
=======
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
<<<<<<< HEAD
              />

=======


              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
              />;
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
=======
                    {longDescription.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>;
              )}
            />;
            ;
            <div>;
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
              <Input ;
                id="keywords";
                placeholder="Add keywords (press Enter or comma to add)";
                onKeyDown={addKeyword}
                className="mb-2";
              />;
              ;
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords.map((keyword, index) => (;
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {keyword}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

<<<<<<< HEAD
=======

                    <button 


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      type="button"
========
                    <button ;
                      type="button";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
                    >;
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
<<<<<<< HEAD
=======
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
                    {keyword}
<button

                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
              </div>;
              <FormDescription className="mt-2">;
<<<<<<< HEAD
                    {long_description.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>)}
            />;
            <div>;
              <FormLabel html_for="keywords">Keywords</FormLabel>;
              <Input;
                id="keywords";
                placeholder="Add keywords (press Enter or comma to add)";
                onKeyDown={add_keyword}
                className="mb - 2";
              />;
              <div className="flex flex - wrap gap - 2 mt - 2">;
                {keywords.map ((keyword, index) => (
                  <Badge;
                    key={index}
                    className="bg - zion - purple / 60 hover:bg - zion - purple";
                  >;
                    {keyword}
                    <button;
                      type="button";
                      on_click={() => remove_keyword (keyword)}
                      className="ml - 1 hover:text - red - 300";
                    >;
                      <X className="h - 3 w - 3" />;
                    </button>;
                  </Badge>))}
              </div>;
              <FormDescription className="mt - 2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx


            

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

            <FormField
              control={control}
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
<<<<<<< HEAD

<<<<<<< HEAD
=======
);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </FormControl>;
                </FormItem>;
              )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
            <FormField;
              control={control}
              name="version";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > App Version</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g., 1.0.0" {...field} />;
                  </FormControl>;
                </FormItem>)}
=======
                Add keywords to improve discoverability (max 100 characters total);
              </FormDescription>;
            </div>;
            ;
            <FormField;
              control={control}
              name="version";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Version</FormLabel>;
                  <FormControl>;
                    <Input ;
                      placeholder="e.g., 1.0.0";
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            />;
          </div>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
    </Card>;
=======
<Input placeholder="e.g., 1.0.0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>

  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );

};

<<<<<<< HEAD
=======

    </Card>);
}
;

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </Card>);
}
;
=======
    </Card>;
  ),;
},; interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues> 
}export const MetadataForm: React.FC<MetadataFormProps> = ({
  form 
}) => {
  e.preventDefault ();
const value = e.currentTarget.value.trim ();
if (value && !keywords.includes (value) ) {
  
}
};
}/> <FormField <FormItem> <FormLabel>Short Description</FormLabel> <FormControl> <Input </FormDescription> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Long Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> {
  longDescription.length 
}/ {
  maxDescriptionLength 
}characters </FormDescription> </FormItem>) 
}/> <div> <FormLabel htmlFor="keywords" >Keywords</FormLabel> <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> className="ml-1 hover:text-red-300" > <X className="h-3 w-3" /> </button> </Badge>) ) 
}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) 
}/> </div> </Form> </CardContent> </Card>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
