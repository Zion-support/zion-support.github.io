import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
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
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Loader, Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      title: "",;
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
      if (response.error) {
        throw new Error(response.error)
      }

      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
      })
    } catch (error) {
console.error("Error generating description:", error);
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
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

      toast({;
        title: "Description Generated",;
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
      console && console.error("Error generating description:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate description. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);

    }

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
                    <Input 
                      {...field} 
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
;
      onDescriptionGenerated(response.description),;
      toast({;
        title: "Description Generated",;
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
      console.error("Error generating description:", error),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.";
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
  };
  return (;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
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

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
<Input
                      {...field} 
                      placeholder="e && e.g. Professional Web Design Services"

                      className="bg-zion-blue border border-zion-blue-light text-white"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="keyFeatures"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
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
<FormField
              control={form && form.control}
              name="keyFeatures"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <Textarea
                      {...field}
                      placeholder=\"Enter key features, separated by commas\"
                      className=\"bg-zion-blue border border-zion-blue-light text-white min-h-20\"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
/>;

            <FormField
              control={form && form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>

                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white"
=======
                <FormItem />;
                  <FormLabel className=\"text-zion-slate-light\" />Target Audience</FormLabel>;
                  <FormControl />;
                      className=\"bg-zion-blue border border-zion-blue-light text-white\"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
/>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              type="submit"
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
</>;
              )}
            </Button>;
          </form>;
</Form>;
      </CardContent>;
</Card>);
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </Form>;}
      </CardContent>;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
