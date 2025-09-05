
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from "lucide-react",
=======
import React from &quot;react&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { AppMetadataValues } from &quot;./MetadataManager&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { X } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
<<<<<<< HEAD
  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
      
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]),
        e.currentTarget.value = ""
=======
  const { control, register, watch, setValue } = form;
  const keywords = watch(&quot;keywords&quot;);
  const platform = watch(&quot;platform&quot;);
  
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === &quot;Enter&quot; || e.key === &quot;,&quot;) {
=======
import React from "react";

interface MetadataFormProps {_form: UseFormReturn<AppMetadataValues>;}

export const MetadataForm: React.FC<MetadataFormProps> = (_{_form}) => {_const { control, _register, _watch, _setValue} = form;
  const _keywords = watch("keywords");
  const _platform = watch("platform");
  
  const _addKeyword = (_e: React.KeyboardEvent<HTMLInputElement>) => {_if (e.key === "Enter" || e.key === ", _") {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      e.preventDefault();
      const _value = e.currentTarget.value.trim();
      
      if (value && !keywords.includes(value)) {
<<<<<<< HEAD
        setValue(&quot;keywords&quot;, [...keywords, value]);
        e.currentTarget.value = "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
        setValue("keywords", _[...keywords, _value]);
        e.currentTarget.value = "";}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const removeKeyword = (keyword: string) => {
    setValue(
      &quot;keywords&quot;,
      keywords.filter((k) => k !== keyword)
    )
  },
  
<<<<<<< HEAD
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),
=======
  const maxDescriptionLength = platform === &quot;ios&quot; ? 4000 : 4000;
  const longDescription = watch(&quot;longDescription");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _removeKeyword = (_keyword: string) => {_setValue(_"keywords", _keywords.filter((k) => k !== keyword)
    );};
  
  const _maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const _longDescription = watch("longDescription");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <Form {...form}>
          <div className="space-y-4&quot;>
            <FormField
              control={control}
              name=&quot;appTitle&quot;
              render={({ field }) => (
=======
        <Form {_...form}>
          <div className="space-y-4">
            <FormField
              control={_control}
              name="appTitle"
              render={_({ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input 
<<<<<<< HEAD
                      placeholder=&quot;Enter app title&quot;
                      maxLength={platform === &quot;ios&quot; ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;30&quot; : &quot;50&quot;} characters
=======
                      placeholder="Enter app title"
                      maxLength={_platform === "ios" ? 30 : 50}
                      {_...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {_platform === "ios" ? "30" : "50"} characters
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormDescription>
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={control}
              name=&quot;shortDescription&quot;
              render={({ field }) => (
=======
              control={_control}
              name="shortDescription"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input 
<<<<<<< HEAD
                      placeholder=&quot;Brief description of your app&quot;
                      maxLength={platform === &quot;ios&quot; ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;170&quot; : &quot;80&quot;} characters
=======
                      placeholder="Brief description of your app"
                      maxLength={_platform === "ios" ? 170 : 80}
                      {_...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {_platform === "ios" ? "170" : "80"} characters
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormDescription>
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={control}
              name=&quot;longDescription&quot;
              render={({ field }) => (
=======
              control={_control}
              name="longDescription"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea 
<<<<<<< HEAD
                      placeholder=&quot;Detailed description of your app"
                      className="min-h-32&quot;
                      maxLength={maxDescriptionLength}
                      {...field}
=======
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength={_maxDescriptionLength}
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                  <FormDescription>
                    {_longDescription.length}/{_maxDescriptionLength} characters
                  </FormDescription>
                </FormItem>
              )}
            />
            
            <div>
              <FormLabel htmlFor=&quot;keywords&quot;>Keywords</FormLabel>
              <Input 
<<<<<<< HEAD
                id=&quot;keywords&quot;
                placeholder=&quot;Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
=======
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={_addKeyword}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                className="mb-2"
              />
              
              <div className="flex flex-wrap gap-2 mt-2">
<<<<<<< HEAD
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple&quot;>
                    {keyword}
                    <button 
                      type=&quot;button"
                      onClick={() => removeKeyword(keyword)}
=======
                {_keywords.map(_(keyword, _index) => (_<Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
                    {_keyword}
                    <button 
                      type="button"
                      onClick={_() => removeKeyword(keyword)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="ml-1 hover:text-red-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <FormDescription className="mt-2&quot;>
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
            
            <FormField
<<<<<<< HEAD
              control={control}
              name=&quot;version&quot;
              render={({ field }) => (
=======
              control={_control}
              name="version"
              render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
                    <Input 
<<<<<<< HEAD
                      placeholder=&quot;e.g., 1.0.0"
                      {...field}
=======
                      placeholder="e.g., 1.0.0"
                      {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
  )
},
