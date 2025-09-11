
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
=======
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

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


export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  

              control={control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
<Textarea

                    <Textarea
                    <Textarea 
=======

                    <Textarea 
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
            
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
=======
            />;

            <div>;
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Input

              


                    <button 


                      type="button"
                    <button ;
                      type="button";
=======
=======
              />
              
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
=======
                    <button                    <button 


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      type="button"
              
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
=======              </div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
              </div>;
              <FormDescription className="mt-2">;
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;

            
=======
            

            <FormField
              control={control}
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
);

=======

);

=======                    <Input 
                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
    </Card>);
}
;

};
