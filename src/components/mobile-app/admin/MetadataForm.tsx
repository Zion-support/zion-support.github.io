
<<<<<<< HEAD
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
=======
=======
import React from "react",
import { UseFormReturn } from "react-hook-form",
import { AppMetadataValues } from "./MetadataManager",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
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
      };
    };
  };
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
};  const removeKeyword = (keyword: string,) => {
    setValue(
      "keywords"
      keywords.filter((k,) => k !== keyword)
    )
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000
  const longDescription = watch("longDescription")
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>App Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control = {control,}
              name="appTitle"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>App Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter app title"
                      maxLength = {platform === "ios" ? 30 : 50,}
                      {...field}
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
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "170" : "80"} characters
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control = {control,}
              name="longDescription"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"
                      maxLength = {maxDescriptionLength,}
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
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown = {addKeyword,}
                className="mb-2"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index,) => (
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">
                    {keyword}
                    <button
                      type="button"
                      onClick = {(,) => removeKeyword(keyword),}
                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      aria-label="Remove keyword"
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
            <FormField
              control = {control,}
              name="version"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 1.0.0"
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from 'lucide-react'

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
};

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Badge } from "@/components/ui/badge",
import { X } from 'lucide-react'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
