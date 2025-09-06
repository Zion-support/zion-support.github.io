<<<<<<< HEAD
<<<<<<< HEAD
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
import { X } from 'lucide-react'

interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
=======
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
=======
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AppMetadataValues } from './MetadataManager';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;
} from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
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
interface MetadataFormProps {;
  form: UseFormReturn<AppMetadataValues>;
=======
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

<<<<<<< HEAD

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");  ;
  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>,) => {;
    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();

      if (value && !keywords && keywords.includes(value)) {;
        setValue("keywords", [...keywords, value]);
        e && e.currentTarget.value = "";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    }
  },
  
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords",
      keywords.filter((k) => k !== keyword)
    )
  },
  
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
=======
  const { control, register, watch, setValue } = form
  const keywords = watch("keywords")
  const platform = watch("platform")
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    if (e.key === "Enter" |e.key === ",") {
      e.preventDefault()
      const value = e.currentTarget.value.trim()
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value])
        e.currentTarget.value = ""
      }
};
  };
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000
};  const removeKeyword = (keyword: string,) => {
    setValue(
      "keywords"
      keywords.filter((k,) => k !== keyword)
    )
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000
  const longDescription = watch("longDescription")  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input 
=======
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>                    <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

                    <Input
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
import { X } from 'lucide-react';
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
<<<<<<< HEAD
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
    <Card className="bg-zion-blue border-zion-purple/30">;
=======
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
}  const remove_keyword = (keyword: string, ) =>: any {
    set_value (
      "keywords",
      keywords.filter ((k, ) => k !== keyword));
  },
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const long_description = watch ("long_description"),
  return (
    <Card className="bg - zion - blue border - zion-purple / 30">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
            <FormField;
              control={control}
              name="appTitle";
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 : 50}
                      {...field}
<<<<<<< HEAD
<<<<<<< HEAD
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "30" : "50"} characters;
                  </FormDescription>;
                </FormItem>;
              )}
            />;
            <FormField;
              control={control}
              name="shortDescription"
              render={({ field }: { field: any }) => (
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
            />;
            <FormField;
              control={control}
              name="longDescription"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength={maxDescriptionLength}
=======
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "30" : "50"} characters
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control = {control,}
              name="shortDescription"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief description of your app"
                      maxLength = {platform === "ios" ? 170 : 80,}
              )}
            />
            <FormField
              control = {control,}
              name="longDescription"                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength = {maxDescriptionLength,}
                </FormItem>)}
            />;
            <FormField;
              control = {control, }
              name="long_description";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      max_length = {maxDescriptionLength, }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    {longDescription.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>;
              )}
            />
            
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input 
=======

                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength = {maxDescriptionLength,}

              <Input
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
<<<<<<< HEAD
<<<<<<< HEAD
              />
              
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    {keyword}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <button
                      type="button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      aria-label="Remove keyword"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
<<<<<<< HEAD
              </div>
              <FormDescription className="mt-2">
                Add keywords to improve discoverability (max 100 characters total)
              </FormDescription>
            </div>
            
            <FormField
              control={control}
              name="version"
<<<<<<< HEAD
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
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
<<<<<<< HEAD
    </Card>;
  );
};
=======



    </Card>);
},
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              render={({ field }: { field: any },) => (;
                <FormItem>;
                  <FormLabel>App Version</FormLabel>;
                  <FormControl>;
                    <Input
                      placeholder="e && e.g., 1 && 1.0.0"

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
<<<<<<< HEAD
            />
          </div>
        </Form>
      </CardContent>
    </Card>
  )

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
                onKeyDown = {add_keyword, }
                className="mb - 2";
              />;
              <div className="flex flex - wrap gap - 2 mt - 2">;
                {keywords.map ((keyword, index, ) => (
                  <Badge key={index} className="bg - zion - purple / 60 hover:bg - zion - purple">;
                    {keyword}
                    <button;
                      type="button";
                      on_click = {(, ) => remove_keyword (keyword), }
                      className="ml - 1 hover:text - red - 300 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 rounded";
                      aria - label="Remove keyword";
                    >;
                      <X className="h - 3 w - 3" />;
                    </button>;
                  </Badge>))}
              </div>;
              <FormDescription className="mt - 2">;
                Add keywords to improve discoverability (max 100 characters total);
              </FormDescription>;
            </div>;
            <FormField;
              control = {control, }
              name="version";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > App Version</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="e.g., 1.0.0";
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>)}

            />;
          </div>;
        </Form>;
      </CardContent>;



    </Card>);
},
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  );
};
}/> <FormField <FormItem> <FormLabel>Short Description</FormLabel> <FormControl> <Input </FormDescription> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Long Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> {;
  longDescription.length ;
}/ {;
  maxDescriptionLength ;
}characters </FormDescription> </FormItem>) ;
}/> <div> <FormLabel htmlFor="keywords" >Keywords</FormLabel> <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> > <X className="h-3 w-3" /> </button> </Badge>) ) ";
}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) ;
}/> </div> </Form> </CardContent> </Card>) ;
};
'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
