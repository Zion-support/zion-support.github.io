
<<<<<<< HEAD
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
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;
            <FormField;
              control={control}
              name="appTitle";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;
                </FormItem>;
=======
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from "lucide-react",interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

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
        e.currentTarget.value = ""      e.preventDefault();
      const _value = e.currentTarget.value.trim();
      
      if (value && !keywords.includes(value)) {
        setValue(&quot;keywords&quot;, [...keywords, value]);
        e.currentTarget.value = "&quot;;
      }    }
  },
  
  const removeKeyword = (keyword: string) => {
    setValue(
      &quot;keywords&quot;,
      keywords.filter((k) => k !== keyword)
    )
  },
  
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000,
  const longDescription = watch("longDescription"),  const _removeKeyword = (_keyword: string) => {_setValue(_"keywords", _keywords.filter((k) => k !== keyword)
    );};
  
  const _maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const _longDescription = watch("longDescription");

  return (_<Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4&quot;>
            <FormField
              control={control}
              name=&quot;appTitle&quot;
              render={({ field }) => (                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;Enter app title&quot;
                      maxLength={platform === &quot;ios&quot; ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;30&quot; : &quot;50&quot;} characters                  </FormDescription>
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            ;
            <FormField;
              control={control}
<<<<<<< HEAD
              name="shortDescription";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "170" :"80"} characters;
                  </FormDescription>;
                </FormItem>;
=======
              name=&quot;shortDescription&quot;
              render={({ field }) => (                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;Brief description of your app&quot;
                      maxLength={platform === &quot;ios&quot; ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;170&quot; : &quot;80&quot;} characters                  </FormDescription>
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            ;
            <FormField;
              control={control}
<<<<<<< HEAD
              name="longDescription";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea ;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      maxLength={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
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
    </Card>;
  ),;
},;
=======
              name=&quot;longDescription&quot;
              render={({ field }) => (                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder=&quot;Detailed description of your app"
                      className="min-h-32&quot;
                      maxLength={maxDescriptionLength}
                      {...field}                    />
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
                id=&quot;keywords&quot;
                placeholder=&quot;Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}                className="mb-2"
              />
              
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple&quot;>
                    {keyword}
                    <button 
                      type=&quot;button"
                      onClick={() => removeKeyword(keyword)}                      className="ml-1 hover:text-red-300"
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
              control={control}
              name=&quot;version&quot;
              render={({ field }) => (                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;e.g., 1.0.0"
                      {...field}                    />
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
