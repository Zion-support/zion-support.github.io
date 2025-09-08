
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
  FormControl,
  FormDescription,
  FormField,
  FormItem,

  FormLabel,
<<<<<<< HEAD
  FormMessage,;
  const { control, register, watch, setValue } = form;

      e.preventDefault();
      const value = e.currentTarget.value.trim();
  const { control, register, watch, setValue } = form,"
  const keywords = watch("keywords"),"
  const platform = watch("platform"),
  
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
      

                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
                    Max {platform === "ios" ? "170" : "80"} characters;
                  </FormDescription>;

            />;

            <FormField
              control={control}
              name="longDescription"              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea
                      placeholder="Detailed description of your app"
                      className="min-h-32"                      maxLength={maxDescriptionLength}                </FormItem>)}
            />;

=======


            />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormField;
              control={control}"
              name="long_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      max_length={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

                </FormItem>;
              )}
            />;
            <FormField;
              control={control}

>>>>>>> origin/cursor/delete-old-data-records-6bba
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>                      placeholder="Detailed description of your app"
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
            />              />;

              />;
"
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
                    {keyword}

                    <button 

                      type="button"            <FormField
              control={control}
>>>>>>> origin/cursor/delete-old-data-records-6bba

              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>

););
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
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df