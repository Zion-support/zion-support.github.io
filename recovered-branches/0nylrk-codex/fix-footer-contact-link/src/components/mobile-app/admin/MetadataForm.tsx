<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


<<<<<<< HEAD
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;


import React from "react";"
import { UseFormReturn } from "react-hook-form";"
import { AppMetadataValues } from "./MetadataManager";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {};
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
  FormMessage;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Form,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  Form,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  FormControl,
  FormDescription,
  FormField,
  FormItem,
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  FormLabel,
  FormMessage,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
} from "@/components/ui/form";
"
} from "@/components/ui/form";"
import { Badge } from "@/components/ui/badge";"
import { X } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;

  const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
} from "@/components/ui/form";

} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
=======
<<<<<<< HEAD
=======
  const { control, register, watch, setValue } = form;"
  const keywords = watch("keywords");"
  const platform = watch("platform");

"
import React from "react","
import { UseFormReturn } from "react-hook-form","
import { AppMetadataValues } from "./MetadataManager","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card","
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form","
import { Badge } from "@/components/ui/badge","
import { X } from "lucide-react",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MetadataFormProps {
=======
interface MetadataFormProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  form: UseFormReturn<AppMetadataValues>
}



export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {};
  const { control, register, watch, setValue } = form;
"
  const keywords = watch("keywords");"
  const platform = watch("platform");
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { control, register, watch, setValue } = form;

<<<<<<< HEAD
  const keywords = watch("keywords");
  const platform = watch("platform");
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" |e.key === ",") {
=======
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {"
    if (e.key === "Enter" |e.key === ",") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      e.preventDefault();
      const value = e.currentTarget.value.trim();
  const { control, register, watch, setValue } = form,"
  const keywords = watch("keywords"),"
  const platform = watch("platform"),
  
<<<<<<< HEAD
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
      
<<<<<<< HEAD
      if (value && !keywords.includes(value)) {
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (value && !keywords.includes(value)) {

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
=======

      if (value && !keywords.includes(value)) {}
  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();

<<<<<<< HEAD
      if (value && !keywords && keywords.includes(value)) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        setValue("keywords", [...keywords, value]);
=======
      if (value && !keywords && keywords.includes(value)) {;"
        setValue("keywords", [...keywords, value]);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        e && e.currentTarget.value = "";
      }
    }



    );
  }"
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;"
  const longDescription = watch("longDescription");


  },
  
  const removeKeyword = (keyword: string) => {}
    setValue("
      "keywords",
      keywords.filter((k) => k !== keyword)
    )
  },
  "
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,"
  const longDescription = watch("longDescription"),


  return ("
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>"
          <div className="space-y-4">
            <FormField;
              control={control}"
              name="appTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input "
                      placeholder="Enter app title""
                      maxLength={platform === "ios" ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>"
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>
                </FormItem>
"
import React from "react",;"
import { UseFormReturn } from "react-hook-form",;"
import { AppMetadataValues } from "./MetadataManager",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;"
import { Badge } from "@/components/ui/badge",;"
import { X } from "lucide-react",;


  return (
"
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;"
          <div className="space-y-4">;


            <FormField;
              control={control}"
              name="appTitle"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;

                    <Input"
                      placeholder="Enter app title""
                      maxLength={platform === "ios" ? 30 : 50}
import React from './react';'
import { UseFormReturn  } from './react - hook - form';'
import { AppMetadataValues  } from './MetadataManager';'
import { Input  } from '@/components / ui / input';'
import { Textarea  } from '@/components / ui / textarea';'
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import {}
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,';
} from '@/components / ui / form';'
import { Badge  } from '@/components / ui / badge';'
import { X  } from './lucide-react';
interface MetadataFormProps {}
  form: UseFormReturn < AppMetadataValues>;
}
export const MetadataForm: React.FC < MetadataFormProps> = ({ form }) => {};
  const { control, register, watch, set_value } = form;"
  const keywords = watch ("keywords");"
  const platform = watch ("platform");
;
  const add_keyword = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      e.prevent_default ();
      const value = e.current_target.value.trim ();
;
      if () {) {}
  $2;
}"
        set_value ("keywords", [...keywords, value]);"
        e.current_target.value = "";
      }
    }
  }
;
  const remove_keyword = (keyword: string) =>: any {}
    set_value ("
      "keywords",
      keywords.filter ((k) => k !== keyword),
    );
  }
;"
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;"
  const long_description = watch ("long_description");
;
  return ("
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle > App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;"
          <div className="space - y-4">;
            <FormField;
              control={control}



<<<<<<< HEAD
=======
      if (value && !keywords.includes(value)) {

  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();

      if (value && !keywords && keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]);
        e && e.currentTarget.value = "";
      }
    }

  };

  const removeKeyword = (keyword: string) => {;
    setValue(;
      "keywords",;
      keywords && keywords.filter((k) => k !== keyword),;

    );
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const longDescription = watch("longDescription");
  return (

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

import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
import { X } from "lucide-react",;
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
  return (
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
            <FormField
              control={control}
              name="appTitle"
            <FormField
              control={control}
              name="appTitle"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
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
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>;

            />;


            <FormField
              control={control}
              name="shortDescription"
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
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder="Brief description of your app"
                      maxLength={platform === "ios" ? 170 : 80}
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

            <FormField;
              control={control}"
              name="shortDescription""
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
=======


                    <Input ;"
                      placeholder="Brief description of your app";"
                      maxLength={platform === "ios" ? 170 :80}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
                    Max {platform === "ios" ? "170" : "80"} characters;
                  </FormDescription>;

            />;


            <FormField
              control={control}
              name="longDescription"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea
                      placeholder="Detailed description of your app"
<<<<<<< HEAD
                      className="min-h-32"                      maxLength={maxDescriptionLength}                </FormItem>)}
=======

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;

                      maxLength={maxDescriptionLength}



                </FormItem>)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
                </FormItem>)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            />;
            <FormField;
              control={control}"
              name="long_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Textarea;
                      placeholder="Detailed description of your app";
<<<<<<< HEAD
                      className="min-h-32";
=======
                    <Textarea;"
                      placeholder="Detailed description of your app";"
                      className="min - h-32";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      className="min - h-32";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      max_length={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

<<<<<<< HEAD
                </FormItem>;
              )}
            />;
            <FormField;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
)}
            />
            <FormField
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


              control={control}"
=======


              control={control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
<<<<<<< HEAD
                    <Input "
                      placeholder="Brief description of your app""
=======
                    <Input 
                      placeholder="Brief description of your app"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      maxLength={platform === "ios" ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
<<<<<<< HEAD
                  <FormDescription>"
                    Max {platform === "ios" ? "170" : "80"} characters;
=======
                  <FormDescription>
                    Max {platform === "ios" ? "170" : "80"} characters
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </FormDescription>
                </FormItem>
              )}

<<<<<<< HEAD


<<<<<<< HEAD
=======
            />;
            <FormField;

            />;
            <FormField;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
/>
            <FormField

            />
            <FormField
            />;
            <FormField;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              control={control}
=======
              control={control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Textarea
                    <Textarea 
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
                  <FormControl>

                    <Textarea 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Textarea 

<Textarea

                    <Textarea
                    <Textarea 
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      placeholder="Detailed description of your app"
=======
                  <FormControl>                      placeholder="Detailed description of your app"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <FormControl>                      placeholder="Detailed description of your app"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
                      placeholder="Detailed description of your app""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      placeholder="Detailed description of your app"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {longDescription.length}/{maxDescriptionLength} characters;
                  </FormDescription>
                </FormItem>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            />
=======
            />
            

            

            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
            />;

            <div>;
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
              <Input
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
              />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
<<<<<<< HEAD
            

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            />;

            <div>;"
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Input
<<<<<<< HEAD
=======
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
            
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
<<<<<<< HEAD
              />
              
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
=======
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              />;
=======
            />              />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            />              />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Input;
"
                id="keywords""
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}"
                className="mb-2""
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



              />;
"
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
                    {keyword}


                    <button 
<<<<<<< HEAD
=======
=======
                  <Badge;
                    key={index}"
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <button;
"
                      type="button"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    <button ;
                      type="button";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    {keyword}
=======


                    {keyword}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      type="button"

                      onClick={() => removeKeyword(keyword)}"
                      className="ml-1 hover:text-red-300";
                    >;"
=======

                      type="button"
                    {keyword}
                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
                    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}

<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
              <FormDescription className="mt-2">;
=======
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

=======
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
              </div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
<<<<<<< HEAD
            
=======

              </div>;
              <FormDescription className="mt-2">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              </div>;
              <FormDescription className="mt-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;


<<<<<<< HEAD

<<<<<<< HEAD

=======

            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <FormField
=======
                      type="button"            <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      type="button"            <FormField
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            


            <FormField
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              control={control}
=======
            <FormField;
              control={control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

);

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <Input placeholder="e.g., 1.0.0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
<<<<<<< HEAD
);
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <Input 
=======



);

                    <Input "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;

            <FormField;
              control={control}"
              name="version";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > App Version</FormLabel>;
                  <FormControl>;"
                    <Input placeholder="e.g., 1.0.0" {...field} />;
                  </FormControl>;
                </FormItem>)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            />;
          </div>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  );
};
    </Card>);
}
;
    </Card>;
  ),;
},; interface MetadataFormProps {}
  form: UseFormReturn<AppMetadataValues> 
}export const MetadataForm: React.FC<MetadataFormProps> = ({};
  form;
}) => {}
  e.preventDefault ();
const value = e.currentTarget.value.trim ();
if (value && !keywords.includes (value) ) {}
}
};
}/> <FormField <FormItem> <FormLabel>Short Description</FormLabel> <FormControl> <Input </FormDescription> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Long Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> {}
  longDescription.length;
}/ {}
  maxDescriptionLength;
}characters </FormDescription> </FormItem>) "
}/> <div> <FormLabel htmlFor="keywords" >Keywords</FormLabel> <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> className="ml-1 hover:text-red-300" > <X className="h-3 w-3" /> </button> </Badge>) ) "
}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) 
}/> </div> </Form> </CardContent> </Card>) 
};
  );

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};




}


);
<<<<<<< HEAD
=======

<<<<<<< HEAD
););
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

););
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);

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


);
                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;
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
            />;
          </div>;
        </Form>;
      </CardContent>;

    </Card>);
  );
};
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

};
}

);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <Input 
=======
                    <Input "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
