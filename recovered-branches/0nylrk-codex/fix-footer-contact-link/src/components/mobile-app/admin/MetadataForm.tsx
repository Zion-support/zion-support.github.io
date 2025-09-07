<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage,;

<<<<<<< HEAD
=======
<<<<<<< HEAD


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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Form,

  FormControl,
  FormDescription,
  FormField,
  FormItem,

  FormLabel,
  FormMessage,;
<<<<<<< HEAD
} from "@/components/ui/form";

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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from "@/components/ui/form";
"
} from "@/components/ui/form";"
import { Badge } from "@/components/ui/badge";"
import { X } from "lucide-react";
<<<<<<< HEAD
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}
=======

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;

  const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");

} from "@/components/ui/form";

} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
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

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface MetadataFormProps {

  form: UseFormReturn<AppMetadataValues>
}

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {};
  const { control, register, watch, setValue } = form;
"
  const keywords = watch("keywords");"
  const platform = watch("platform");

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {

  const { control, register, watch, setValue } = form;

      e.preventDefault();
      const value = e.currentTarget.value.trim();
  const { control, register, watch, setValue } = form,"
  const keywords = watch("keywords"),"
  const platform = watch("platform"),

<<<<<<< HEAD
      if (value && !keywords.includes(value)) {
=======
<<<<<<< HEAD
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {;
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
  const { control, register, watch, setValue } = form;

  const keywords = watch("keywords");
  const platform = watch("platform");
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" |e.key === ",") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
  const { control, register, watch, setValue } = form,
  const keywords = watch("keywords"),
  const platform = watch("platform"),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(),
      const value = e.currentTarget.value.trim(),
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const addKeyword = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;

    if (e && e.key === "Enter" || e && e.key === ",") {;
      e && e.preventDefault();
      const value = e && e.currentTarget.value && value.trim();
<<<<<<< HEAD

        e && e.currentTarget.value = "";
      }
    });
  }"
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;"
  const longDescription = watch("longDescription");
=======
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

<<<<<<< HEAD
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]),
        e.currentTarget.value = ""
      }
    }
  }
  const removeKeyword = (keyword: string) => {
    setValue(
      "keywords"
      keywords.filter((k) => k !== keyword)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    );
  }
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
  const longDescription = watch("longDescription");
<<<<<<< HEAD
=======
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
  return ("
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
              )}
            />
            <FormField
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;"
          <div className="space-y-4">;
<<<<<<< HEAD

            <FormField;
              control={control}"
              name="appTitle"

=======
            <FormField;
              control={control}
              name="appTitle";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD

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
<<<<<<< HEAD
export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
  const keywords = watch($2);
  const platform = watch($2);
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault($2);
      const value = e.currentTarget.value.trim($2);
      if (value && !keywords.includes(value)) {
        }
        setValue("keywords", [...keywords, value]);"
        e.currentTarget.value = "";"
=======
      e.prevent_default ();
      const value = e.current_target.value.trim ();
;
      if () {) {}
  $2;
}"
        set_value ("keywords", [...keywords, value]);"
        e.current_target.value = "";
>>>>>>> origin/chore/fix-lint-and-merge
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

=======
                    <Input ;
                      placeholder="Enter app title";
                      maxLength={platform === "ios" ? 30 :50}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD

            <FormField;
              control={control}"
              name="shortDescription""
                    Max {platform === "ios" ? "30" :"50"} characters;
                  </FormDescription>;

=======
            />;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD

                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}

=======
                    <Input ;
                      placeholder="Brief description of your app";
                      maxLength={platform === "ios" ? 170 :80}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD

            />;
=======
            />;
            <FormField
              control={control}
              name="longDescription"
                    Max {platform === "ios" ? "170" :"80"} characters;
                  </FormDescription>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={control}
              name="longDescription";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea ;
                      placeholder="Detailed description of your app";
                      className="min-h-32";
                      maxLength={maxDescriptionLength}
                </FormItem>)}
            />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormField;
              control={control}"
              name="long_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;

                      max_length={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;
<<<<<<< HEAD
)}
            />
            <FormField
=======

              control={control}"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              control={control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              name="shortDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>

                      maxLength={platform === "ios" ? 170 : 80}
                      {...field}
                    />
                  </FormControl>

                  </FormDescription>
                </FormItem>
              )}
<<<<<<< HEAD
            />;
            <FormField;

/>
            <FormField

            />
            <FormField
            />;
            <FormField;
=======

/>
            <FormField

            />
            <FormField
            />;
            <FormField;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              control={control}

              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
<<<<<<< HEAD

                    <Textarea 

<Textarea

                    <Textarea
                    <Textarea 

=======
                  <FormControl>
<<<<<<< HEAD
                    <Textarea 

<Textarea

                    <Textarea
                    <Textarea 
=======

                    <Textarea 

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      placeholder="Detailed description of your app"

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

=======
            />
            

<<<<<<< HEAD
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
            
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
              <Input 
=======
            

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div>
              <FormLabel htmlFor="keywords">Keywords</FormLabel>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            />;

            <div>;"
              <FormLabel htmlFor="keywords">Keywords</FormLabel>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Input
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                id="keywords"
                placeholder="Add keywords (press Enter or comma to add)"
                onKeyDown={addKeyword}
                className="mb-2"

<<<<<<< HEAD
=======

              


<<<<<<< HEAD
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
              />;
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;
                  <Badge
                    key={index}
                    className="bg-zion-purple/60 hover:bg-zion-purple">;
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

                    <button 


                      type="button"
                    <button ;
                      type="button";
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (

              />;

              />;
"
              <div className="flex flex-wrap gap-2 mt-2">;
                {keywords && keywords.map((keyword, index) => (;

                      type="button"
<<<<<<< HEAD

                      onClick={() => removeKeyword(keyword)}"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      onClick={() => removeKeyword(keyword)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      className="ml-1 hover:text-red-300";
                    >;"

                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======
              </div>;
              <FormDescription className="mt-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;

<<<<<<< HEAD
=======
            
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormField

              control={control}

              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App Version</FormLabel>
                  <FormControl>
<<<<<<< HEAD
=======

<<<<<<< HEAD
                    <Input placeholder="e.g., 1.0.0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    <Input 

                      placeholder="e.g., 1.0.0"
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>;
              )}
<<<<<<< HEAD

                Add keywords to improve discoverability (max 100 characters;
                total);
              </FormDescription>;
            </div>;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            />;
          </div>;
        </Form>;
      </CardContent>;
<Input placeholder="e.g., 1.0.0" {...field} />
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
};
    </Card>);
}
;
<<<<<<< HEAD
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
=======



};
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) 
}/> </div> </Form> </CardContent> </Card>) 
};
  );
<<<<<<< HEAD

};

});

                    <Input 

=======
}

);
                    <Input 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
