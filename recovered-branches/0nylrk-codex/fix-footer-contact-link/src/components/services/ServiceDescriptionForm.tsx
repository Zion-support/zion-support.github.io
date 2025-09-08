
<<<<<<< HEAD



import z from "zod";




const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

=======
import React, { useState } from "react","
import { useToast } from "@/hooks/use-toast","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card","
import { Loader, Sparkles } from "lucide-react","
import { supabase } from "@/integrations/supabase/client","
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form","
import { useForm } from "react-hook-form","
import z from "zod";"
import {zodResolver} from "@hookform/resolvers/zod";"
const formSchema = z.object({
  }
  "title": z.string().min(3, "Title must be at least 3 characters");"
  "keyFeatures": z.string()
  "targetAudience": z.string()})
type FormData = z.infer<typeof formSchema>;
import z from "zod","
import { zodResolver } from "@hookform/resolvers/zod","
import React, { useState } from './react';'
import { use_toast } from '@/hooks / use - toast';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';'
import { Loader, Sparkles } from './lucide-react';'
import { supabase } from '@/integrations / supabase / client';'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';'
import { use_form } from './react - hook - form';'
import z from './zod';'
import { zod_resolver } from '@hookform / resolvers / zod';'
const form_schema = z.object ({
  }
  "title": z.string ().min (3, "Title must be at least 3 characters");"
  "key_features": z.string (),
  "target_audience": z.string ()}),
type FormData = z.infer < typeof form_schema>;
;
const formSchema = z.object({
  }
  "title": z.string().min(3, "Title must be at least 3 characters"),"
  "keyFeatures": z.string(),
  "targetAudience": z.string()}),
>>>>>>> origin/cursor/delete-old-data-records-6bba
type FormData = z.infer<typeof formSchema>,
interface ServiceDescriptionFormProps {
  }
  "onDescriptionGenerated": ("description": string) => void;
}
export function ServiceDescriptionForm() {
  }
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
const { toast } = useToast(),;
const [isLoading, setIsLoading] = useState(false),;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}






<<<<<<< HEAD


=======
export function ServiceDescriptionForm() {
  }
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: ""
      keyFeatures: ""
      targetAudience: ""}})
  const handleSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const { data: response, error } = await supabase.functions.invoke('generate-service-description', {

<<<<<<< HEAD



        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      if (response.error) {
        throw new Error(response.error)
      }

<<<<<<< HEAD



      onDescriptionGenerated(response.description),
      



      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."


      })
    } catch (error) {


      toast({

        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"

=======
      onDescriptionGenerated(description),
      
      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
      })
    } catch (error) {

      logErrorToProduction('Error generating description:', { data: error }),
      toast({

>>>>>>> origin/cursor/delete-old-data-records-6bba
      })
    } finally {
      setIsLoading(false)

<<<<<<< HEAD



=======
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}

    }
  },

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
:src_backup/components/services/ServiceDescriptionForm.tsx
import { Loader, Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod";
import {logErrorToProduction} from '@/utils/productionLogger';
const formSchema = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;
type FormData = z && z.infer<typeof formSchema>;
interface ServiceDescriptionFormProps {;
  onDescriptionGenerated: (description: string) => void;
}
export function ServiceDescriptionForm(): any ({ onDescriptionGenerated }: ServiceDescriptionFormProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormData>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: "",;
      keyFeatures: "",;
      targetAudience: ""}}),;
  const handleSubmit = async (data: FormData) => {;
    setIsLoading(true),;
    try {;
      const { data: response, error } = await supabase && supabase.functions.invoke('generate-service-description', {;
        body: { ;
          title: data && data.title, ;
          keyFeatures: data && data.keyFeatures, ;
          targetAudience: data && data.targetAudience ;
        }
      });
      if (error) {;
        throw new Error(error && error.message);
      }
      if (response && response.error) {;
        throw new Error(response && response.error);
      }
      onDescriptionGenerated(response && response.description);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({;
        title: "Description Generated",;
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
<<<<<<< HEAD

      console && console.error("Error generating description:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate description. Please try again.",;

        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }

  }
  return (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";
import { Loader, Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  title: z.string().min($2);
  keyFeatures: z.string($2);
  targetAudience: z.string()}),

type FormData = $2;
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void
}
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast($2);
  const [isLoading, setIsLoading] = useState($2);
  const form = useForm<FormData>({
    resolver: zodResolver($2);
    defaultValues: {
      title: "",
      keyFeatures: "",
      targetAudience: ""}}),

  const handleSubmit = async (data: FormData) => {
    setIsLoading($2);
    try {
      const { data: response, error } = await supabase.functions.invoke($2);
      if (error) {
        throw new Error(error.message)
      }
      if (response.error) {
}
throw new Error(response.error);
      }

      onDescriptionGenerated($2);
      toast({
        }
        "title": "Description Generated""
        "description": "Your professional service description has been created.""
      })
    } catch (error) {
      }
      console.error("Error generating "description":", error),"
      toast({
        }
        "title": "Generation Failed""
        "description": error instanceof Error ? error.message : "Failed to generate description. Please try again.""
"variant": "destructive";"
      })
    } finally {
      }
<<<<<<< HEAD
;
      onDescriptionGenerated(response.description),;
      ;
      toast({;
        title:"Description Generated",;
        description:"Your professional service description has been created.";
      }),;
    } catch (error) {;
      console.error("Error generating description:", error),;
      toast({;
        title:"Generation Failed",;
        description:error instanceof Error ? error.message :"Failed to generate description. Please try again.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;

  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
=======
      setIsLoading(false)
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;"
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;"
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
<<<<<<< HEAD

    }
  }
  },


  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Service Description Generator
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Provide basic details about your service and let AI create a professional description
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"




=======

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;"
            <FormField;
              control={form.control}
              name="title";"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;"
                  <FormControl>;
                      className="bg-zion-blue border border-zion-blue-light text-white""

>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
<<<<<<< HEAD


=======
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
>>>>>>> origin/cursor/delete-old-data-records-6bba
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;

<<<<<<< HEAD

=======
                      className="bg-zion-blue border border-zion-blue-light text-white""
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}


<<<<<<< HEAD
=======

              control={form.control}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              name="keyFeatures"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}

<<<<<<< HEAD
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}


            />;
            <FormField
              control={form && form.control}
              name="targetAudience"
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="targetAudience";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;
                    <Input ;
                      {...field} ;
                      placeholder="e.g. Small businesses, Startups, E-commerce brands";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            />;
            />

            
            <Button 

              type="submit"
=======

                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              type="submit""
>>>>>>> origin/cursor/delete-old-data-records-6bba
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white">;"
              {isLoading ? (;
                <>;
<<<<<<< HEAD
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;
                  Generating Description...;
                </>;
              ) :(;
                <>;
                  <Sparkles className="h-4 w-4 mr-2" />;
                  Generate Description;
                </>;
              )}

          <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;

            <FormField;
              control={form.control}
              name="title";



              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;


=======
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;"
                  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
<<<<<<< HEAD
            <FormField;

            <FormField
              control={form && form.control}

              control={form.control}

                      {...field}

                      placeholder=\"Enter key features, separated by commas\"
                      className=\"bg-zion-blue border border-zion-blue-light text-white min-h-20\"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}


=======
            <Button;
              type="submit";

}catch (error) {';
  logErrorToProduction ('Error generating description:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsLoading (false) ;

};
>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > {";
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>) ;
}</Button> </form> </Form> </CardContent> </Card>) ;
}'"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
              )}</Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;)}</Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD



=======
    </Card>;

  )}catch (error) {';
  )}catch (error) {;
  logErrorToProduction ('Error generating description:', {data: error ;
})toast ({}finally {setIsLoading (false)}>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > {";
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>)}</Button> </form> </Form> </CardContent> </Card>)}'";
  )}
  );
}

;

  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
