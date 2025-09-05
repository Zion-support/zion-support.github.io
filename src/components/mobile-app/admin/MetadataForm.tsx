
<<<<<<< HEAD
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
=======
import React from &quot;react&quot;;
import { UseFormReturn } from &quot;react-hook-form&quot;;
import { AppMetadataValues } from &quot;./MetadataManager&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { X } from 'lucide-react'

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
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      
      if (value && !keywords.includes(value)) {
        setValue(&quot;keywords&quot;, [...keywords, value]);
        e.currentTarget.value = "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    }
  },
  
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

  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4&quot;>
            <FormField
              control={control}
              name=&quot;appTitle&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;Enter app title&quot;
                      maxLength={platform === &quot;ios&quot; ? 30 : 50}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;30&quot; : &quot;50&quot;} characters
                  </FormDescription>
                </FormItem>
              )}
            />
            
            <FormField
              control={control}
              name=&quot;shortDescription&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;Brief description of your app&quot;
                      maxLength={platform === &quot;ios&quot; ? 170 : 80}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === &quot;ios&quot; ? &quot;170&quot; : &quot;80&quot;} characters
                  </FormDescription>
                </FormItem>
              )}
            />
            
            <FormField
              control={control}
              name=&quot;longDescription&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder=&quot;Detailed description of your app"
                      className="min-h-32&quot;
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
            
            <div>
              <FormLabel htmlFor=&quot;keywords&quot;>Keywords</FormLabel>
              <Input 
                id=&quot;keywords&quot;
                placeholder=&quot;Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"
              />
              
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple&quot;>
                    {keyword}
                    <button
                      type=&quot;button"
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded&quot;
                      aria-label=&quot;Remove keyword"
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
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder=&quot;e.g., 1.0.0"
                      {...field}
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
