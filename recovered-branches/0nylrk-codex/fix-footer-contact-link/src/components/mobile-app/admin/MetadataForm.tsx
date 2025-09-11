
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;

<<<<<<< HEAD
<<<<<<< HEAD


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
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;
<<<<<<< HEAD
<<<<<<< HEAD
} from "@/components/ui/form";

} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;

interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");




import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from "lucide-react",

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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;

  const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");

=======



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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

<<<<<<< HEAD


export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
  const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" |e.key === ",") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
      
<<<<<<< HEAD
=======
      if (value && !keywords.includes(value)) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();
<<<<<<< HEAD
      if (value && !keywords && keywords.includes(value)) {;
=======

      if (value && !keywords && keywords.includes(value)) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setValue("keywords", [...keywords, value]);
        e && e.currentTarget.value = "";
      }
    }
<<<<<<< HEAD

  };
  const removeKeyword = (keyword: string) => {;
    setValue(;
      "keywords",;
      keywords && keywords.filter((k) => k !== keyword),;

<<<<<<< HEAD
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]),
        e.currentTarget.value = ""
      }
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords"
      keywords.filter((k) => k !== keyword)
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const longDescription = watch("longDescription");
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords",
      keywords.filter((k) => k !== keyword)
    )
  },
  
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),

  return (
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
              )}
            />
            <FormField
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              )}
            />
            <FormField
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
import { X } from "lucide-react",;
<<<<<<< HEAD
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
<<<<<<< HEAD
            <FormField;
              control={control}
              name="appTitle";
=======
            <FormField
              control={control}
              name="appTitle"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
=======
                    <Input
                      placeholder="Enter app title"
                      maxLength={platform === "ios" ? 30 : 50}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
            />;
            <FormField
              control={control}
              name="shortDescription"
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="shortDescription";
=======
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>;

            />;


            <FormField
              control={control}
              name="shortDescription"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
=======
                    <Input
                      placeholder="Brief description of your app"
                      maxLength={platform === "ios" ? 170 : 80}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
            />;
            <FormField
              control={control}
              name="longDescription"
                    Max {platform === "ios" ? "170" :"80"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="longDescription";
=======
                    Max {platform === "ios" ? "170" : "80"} characters;
                  </FormDescription>;

            />;


            <FormField
              control={control}
              name="longDescription"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea ;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      maxLength={maxDescriptionLength}
=======
                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
)}
            />
            <FormField
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </FormItem>;
              )}
            />;
            <FormField;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
            />;
            <FormField;

/>
            <FormField

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />
            <FormField
            />;
            <FormField;
<<<<<<< HEAD
=======

            />;
            <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              control={control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Textarea 

<Textarea

                    <Textarea
                    <Textarea 
=======

                    <Textarea 

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <Textarea
                    <Textarea 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
            
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input 
=======
            

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
=======
            />;

            <div>;
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Input
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
<<<<<<< HEAD


              


<<<<<<< HEAD
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
              />;
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
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
                    {keyword}

                    <button 


                      type="button"
                    <button ;
                      type="button";
=======
=======
              />
              


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
=======
              />;

              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
                    {keyword}
<<<<<<< HEAD


=======
                    <button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <button 


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      type="button"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
                    >;
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              />

              
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
                    {keyword}
                    <button
                    <button 
                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              </div>;
              <FormDescription className="mt-2">;
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;

            
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
);

=======

);

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
<<<<<<< HEAD
                  </FormControl>;
                </FormItem>;
              )}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </FormControl>;
                </FormItem>;
              )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<Input placeholder="e.g., 1.0.0" {...field} />
                    <Input placeholder="e.g., 1.0.0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </Card>);
}
;

<<<<<<< HEAD


};
<<<<<<< HEAD
    </Card>);
}
;
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
  );
}

);
                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
            />;
          </div>;
        </Form>;
      </CardContent>;
    </Card>;
  );
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
