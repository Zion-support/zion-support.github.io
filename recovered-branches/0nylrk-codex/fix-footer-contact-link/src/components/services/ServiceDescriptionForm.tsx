<<<<<<< HEAD

export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  
  const form = useForm<FormData>({

        throw new Error(error.message);
      }
      if (response && (response as any).error) {
        throw new Error((response as any).error);
      }

      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.,
      
      onDescriptionGenerated(description),
      
      toast({
        title: Description Generated",
        description: "Your professional service description has been created.
      })
    } catch (error) {
      logErrorToProduction('Error generating description:, { data: error }),
      toast({
        title: Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.,
        variant: destructive"
      })
    } finally {
      setIsLoading(false)
    }
  },

=======
>>>>>>> origin/chore/fix-lint-and-merge
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
<<<<<<< HEAD
import { Loader, Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod";
import {logErrorToProduction} from '@/utils/productionLogger';
const formSchema = null;
origin/cursor/automate-test-improve-and-merge-code-2533
const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;

=======
import { Loader, Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod";

import {zodResolver} from "@hookform/resolvers/zod";
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z.string()
  targetAudience: z.string()})
type FormData = z.infer<typeof formSchema>;
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod",

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

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

import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Loader, Sparkles } from "lucide-react",;
import { supabase } from "@/integrations/supabase/client",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { useForm } from "react-hook-form",;
import z from "zod",;
import { zodResolver } from "@hookform/resolvers/zod",;
const formSchema = z.object({;
  title: z.string().min(3, "Title must be at least 3 characters"),;
  keyFeatures: z.string(),;
  targetAudience: z.string()}),;
type FormData = z.infer<typeof formSchema>,;
interface ServiceDescriptionFormProps {;
  onDescriptionGenerated: (description: string) => void;
}
;
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const form = useForm<FormData>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: "",
      keyFeatures: "",;
      targetAudience: ""}}),;
  const handleSubmit = async (data: FormData) => {;
    setIsLoading(true),;
    try {;
      const { data: response, error } = await supabase.functions.invoke('generate-service-description', {;
        body: {;
          title: data.title,;
          keyFeatures: data.keyFeatures,;
          targetAudience: data.targetAudience;
        }
      }),;
      if (error) {;
        throw new Error(error.message);

      }
      if (response.error) {
        throw new Error(response.error)
      }

      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
>>>>>>> origin/chore/fix-lint-and-merge
      })
    } catch (error) {

      toast({
<<<<<<< HEAD

=======
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"
>>>>>>> origin/chore/fix-lint-and-merge
      })
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  },

const form_schema = z.object ({
  title: z.string ().min (3, "Title must be at least 3 characters");
  key_features: z.string (),
  target_audience: z.string ()}),
type FormData = z.infer < typeof form_schema>;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high - quality solutions tailored to your specific needs.";
}
=======

>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
<<<<<<< HEAD
;
      onDescriptionGenerated(response.description),;
      toast({;
        title: "Description Generated",;
=======
                    <Input 
                      {...field} 
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
;
      onDescriptionGenerated(response.description),;
      toast({;
        title: "Description Generated",
>>>>>>> origin/chore/fix-lint-and-merge
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
      console.error("Error generating description:", error),;
      toast({;
<<<<<<< HEAD
        title: "Generation Failed",;
=======
        title: "Generation Failed",
>>>>>>> origin/chore/fix-lint-and-merge
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.";
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
  };
  return (;
<<<<<<< HEAD
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
const formSchema = z && z.object({title: z && z.string().min(3, "Title must be at least 3 characters")keyFeatures: z && z.string(),targetAudience: z && z.string()}),type FormData = z && z.infer<typeof formSchema>;const description  = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";}
  )})}const form_schema = z.object ({title: z.string ().min (3, "Title must be at least 3 characters")key_features: z.string (),target_audience: z.string ()}),type FormData = z.infer < typeof form_schema>;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high - quality solutions tailored to your specific needs.";
}export function ServiceDescriptionForm() {const { toast } = useToast(),const [isLoading, setIsLoading] = useState(false),const form = useForm<FormData>({resolver: zodResolver(formSchema),defaultValues: {title: "",keyFeatures: "",targetAudience: ""}}),const handleSubmit = async (data: FormData) => {setIsLoading(true),try {const { data: response, error } = await supabase.functions.invoke('generate-service-description', {body: {title: data.title,keyFeatures: data.keyFeatures,targetAudience: data.targetAudience;
import React, { useState } from "react",import { useToast } from "@/hooks/use-toast",import { Button } from "@/components/ui/button",import { Input } from "@/components/ui/input",import { Textarea } from "@/components/ui/textarea",import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",import { Loader, Sparkles  } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",import { useForm } from "react-hook-form",import z from "zod",import { zodResolver } from "@hookform/resolvers/zod",import {logErrorToProduction} from '@/utils/productionLogger',const formSchema = z.object({title: z.string().min(3, "Title must be at least 3 characters"),keyFeatures: z.string(),targetAudience: z.string()}),type FormData = z.infer<typeof formSchema>,interface ServiceDescriptionFormProps  {onDescriptionGenerated: (description: string) => void;
}export function ServiceDescriptionForm() {const { toast } = useToast(),const [isLoading, setIsLoading] = useState(false),const form = useForm<FormData>({resolver: zodResolver(formSchema),defaultValues: {title: "",keyFeatures: "",targetAudience: ""}}),const handleSubmit = async (data: FormData) => {setIsLoading(true),try {const { data: response, error } = await supabase.functions.invoke('generate-service-description', {body: {title: data.title,keyFeatures: data.keyFeatures,targetAudience: data.targetAudience;
        }
      }),if (error) {throw new Error(error.message)}if (response && (response as any).error) {throw new Error((response as any).error)}const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",onDescriptionGenerated(description),toast({title: "Description Generated",description: "Your professional service description has been created.";
      })} catch (error) {logErrorToProduction('Error generating description:', { data: error }),toast({title: "Generation Failed",description: error instanceof Error ? error.message : "Failed to generate description. Please try again.",variant: "destructive";
      })} finally {setIsLoading(false)}
  },import { zodResolver  } from '@hookform/resolvers/zod';
import { logErrorToProduction } from '@/utils/productionLogger';
const formSchema  = null;return (<Card className="border border-zion-blue-light bg-zion-blue-dark">;
=======

    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
>>>>>>> origin/chore/fix-lint-and-merge
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
<<<<<<< HEAD
              render={({ field }: { field: any }) => (<FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      {...field}
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",onDescriptionGenerated(description),toast({title: "Description Generated",description: "Your professional service description has been created.";
      })} catch (error) {logErrorToProduction('Error generating description:', { data: error }),toast({title: "Generation Failed",description: error instanceof Error ? error.message : "Failed to generate description. Please try again.";
        variant: "destructive";
      })} finally {setIsLoading(false)}
  }return (<Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }: { field: any }) => (<FormItem>;
=======

>>>>>>> origin/chore/fix-lint-and-merge
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;

                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <FormField;
control={form && form.control}
              control={form.control}
<<<<<<< HEAD
              name="keyFeatures";
              render={({ field }: { field: any }) => (<FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;
                    <Textarea;
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
                    <Textarea
=======

>>>>>>> origin/chore/fix-lint-and-merge
                      {...field}
                      placeholder=\"Enter key features, separated by commas\"
                      className=\"bg-zion-blue border border-zion-blue-light text-white min-h-20\"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />
            <FormField
              control={form.control}
              name="targetAudience";
              render={({ field }: { field: any }) => (<FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;
                      className="bg-zion-blue border border-zion-blue-light text-white""
=======

                      className="bg-zion-blue border border-zion-blue-light text-white"

>>>>>>> origin/chore/fix-lint-and-merge
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
            />;
            <Button;
              type="submit";
=======

              type="submit"

>>>>>>> origin/chore/fix-lint-and-merge
              disabled={isLoading}
              className=\"w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white\">;
              {isLoading ? (;
                <>;
                  <Loader className=\"mr-2 h-4 w-4 animate-spin\" />;
                  Generating Description...;
                </>;
              ) : (;
                <>;
                  <Sparkles className=\"h-4 w-4 mr-2\" />;
                  Generate Description;
<<<<<<< HEAD
                </>;
              )}
            />
            <Button
              type=submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white
            >
              {isLoading ? (
                <>
                  <Loader className=mr-2 h-4 w-4 animate-spin" />
                  Generating Description...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2 />
                  Generate Description
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );

}catch (error) {;
  logErrorToProduction ('Error generating description:', {
  data: error ;
});
toast ({}finally {
  setIsLoading (false) ;

}
>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <Button className=w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white > {";
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin /> Generating Description... </>) : (<> <Sparkles className=h-4 w-4 mr-2" /> Generate Description </>) ;
}</Button> </form> </Form> </CardContent> </Card>) ;
}"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
              )}</Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;)}</Button>;
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  )}catch (error) {';
  )}catch (error) {;
  logErrorToProduction ('Error generating description:', {data: error ;
})toast ({}finally {setIsLoading (false)}>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className=text-zion-slate-light >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white > {;
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className=h-4 w-4 mr-2 /> Generate Description </>)}</Button> </form> </Form> </CardContent> </Card>)}'";
  )}
  );
}
  )
}
=======

            </Button>;
          </form>;
>>>>>>> origin/chore/fix-lint-and-merge
