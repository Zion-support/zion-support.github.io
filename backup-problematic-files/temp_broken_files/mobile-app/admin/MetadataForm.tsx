
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { UseFormReturn } from "react-hook-form",;
import { AppMetadataValues } from "./MetadataManager",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
import { X } from "lucide-react",;
=======
=======
import React from "react";""
import { UseFormReturn } from "react-hook-form";""
import { AppMetadataValues } from "./MetadataManager";""
import { Input } from "@/components/ui/input";""
import { Textarea } from "@/components/ui/textarea";""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";""
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";""
import { Badge } from "@/components/ui/badge";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { X } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
import { X } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
interface MetadataFormProps {;
  form:UseFormReturn<AppMetadataValues>;

export const MetadataForm: React.FC<MetadataFormProps> = ({ form ;}) => {;

  const addKeyword = (e:React.KeyboardEvent<HTMLInputElement>) => {;
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card className="bg-zion-blue border-zion-purple/30">;
=======

    <Card className="bg-zion-blue border-zion-purple/30">;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <CardHeader>;

        <CardTitle>App Metadata;
      <CardContent>;

        <Form {...form}>;
<<<<<<< HEAD
          <div className="space-y-4">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;

=======
=======
"
          <div className="space-y-4">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <FormField;
              control={control}"
              name="appTitle";"
              render={({ field } { field: any ;}) => (;

                <FormItem>;

                  <FormLabel>App Title;
                  <FormControl>;
<<<<<<< HEAD
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

                    <Input ;"
                      placeholder="Enter app title";""
                      maxLength={platform === "ios" ? 30 :50}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      {...field}
                    />;

                  <FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="shortDescription";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    Max {platform === "ios" ? "170" :"80"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="longDescription";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea ;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      maxLength={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

                    {keyword}
                    <button ;
                      type="button";
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {longDescription.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>;
              )}
            />;
            ;
=======

                  ;)
                ;              )}
              name="shortDescription";"


                  <FormLabel>Short Description;

                      placeholder="Brief description of your app";""
                      maxLength={platform === "ios" ? 170 :80}"


              name="longDescription";"


                  <FormLabel>Long Description;

                    <Textarea ;"
                      placeholder="Detailed description of your app";""
                      className="min-h-32";"
                      maxLength={maxDescriptionLength}


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <div>;
</div>"
              <FormLabel htmlFor="keywords">Keywords;"
                id="keywords";")"
                placeholder="Add keywords (press Enter or comma to add)";"
                onKeyDown={addKeyword}"
                className="mb-2";"
              <div className="flex flex-wrap gap-2 mt-2">;"
                  <Badge key={index} className="bg-zion-purple/60 hover:bg-zion-purple">;"

                    <button;"
                      type="button";"
                      onClick={() => removeKeyword(keyword)}
<<<<<<< HEAD
                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded";
                      aria-label="Remove keyword";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    >;
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
              </div>;
              <FormDescription className="mt-2">;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                Add keywords to improve discoverability (max 100 characters total);
              </FormDescription>;
            </div>;
            ;
            <FormField;
              control={control}
              name="version";
              render={({ field } { field:any }) => (;
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            />;
          </div>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/MetadataForm.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  ),;
},; import {;
  {;
  {;
  X ;
}from 'lucide-react' interface MetadataFormProps {;
=======
</button>"
                      <X className="h-3 w-3" />;"

                    </button>;
              </div>;"
              <FormDescription className="mt-2">;"

            </div>;
              name="version";"


                  <FormLabel>App Version;

                      placeholder="e.g., 1.0.0";"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  form: UseFormReturn<AppMetadataValues> ;

}export const MetadataForm: React.FC<MetadataFormProps> = ({;
<<<<<<< HEAD
  form ;
}) => {;
  e.preventDefault ();
const value = e.currentTarget.value.trim ();
if (value && !keywords.includes (value) ) {;
  ;
}
};
}/> <FormField <FormItem> <FormLabel>Short Description</FormLabel> <FormControl> <Input </FormDescription> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Long Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> {;
  longDescription.length ;
}/ {;
  maxDescriptionLength ;
}characters </FormDescription> </FormItem>) ;
}/> <div> <FormLabel htmlFor="keywords" >Keywords</FormLabel> <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> > <X className="h-3 w-3" /> </button> </Badge>) ) ";"}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) ;
}/> </div> </Form> </CardContent> </Card>) ;
:temp_broken_files/mobile-app/admin/MetadataForm.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/mobile-app/admin/MetadataForm.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/admin/MetadataForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
)
}/> <FormField <FormItem> <FormLabel>Short Description <FormControl> <Input  ) ;

}/> <FormField <FormItem> <FormLabel>Long Description <FormControl> <Textarea />  <FormDescription> {;

}characters  ) ;"
}/> <div> <FormLabel htmlFor="keywords" >Keywords <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> > <X className="h-3 w-3" /> </button> ) ) ";"}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total)  </div> <FormField <FormItem> <FormLabel>App Version <FormControl> <Input />  ) ;"
}/> </div>   ) ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
