
=======
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
import { X } from "lucide-react",;
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
<<<<<<< HEAD

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;

                      maxLength={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

                    {keyword}
                    <button ;
                      type="button";
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
                    >;
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
              </div>;
              <FormDescription className="mt-2">;

            />;
          </div>;
        </Form>;
      </CardContent>;

