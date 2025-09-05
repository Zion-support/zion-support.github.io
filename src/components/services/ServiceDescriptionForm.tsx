<<<<<<< HEAD
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;
import { Loader, Sparkles } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { useForm } from "react-hook-form",;
import z from "zod",;
import { zodResolver } from "@hookform/resolvers/zod",;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
;
const formSchema = z.object({;
  title:z.string().min(3, "Title must be at least 3 characters"),;
  keyFeatures:z.string(),;
  targetAudience:z.string()}),;
;
type FormData = z.infer<typeof formSchema>,;
;
interface ServiceDescriptionFormProps {;
  onDescriptionGenerated:(description:string) => void;
}
;
export function ServiceDescriptionForm({ onDescriptionGenerated } ServiceDescriptionFormProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  ;
  const form = useForm<FormData>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      title:"",;
      keyFeatures:"",;
      targetAudience:""}}),;
;
  const handleSubmit = async (data:FormData) => {;
    setIsLoading(true),;
    ;
    try {;
      const { data:response, error } = await supabase.functions.invoke('generate-service-description', {;
        body:{ ;
          title:data.title, ;
          keyFeatures:data.keyFeatures, ;
          targetAudience:data.targetAudience ;
        }
      }),;
;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      if (response && (response as any).error) {;
        throw new Error((response as any).error),;
      }
;
      const description = response ? (response as any).description :"Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",;
      ;
      onDescriptionGenerated(description),;
      ;
      toast({;
        title:"Description Generated",;
        description:"Your professional service description has been created.";
      }),;
    } catch (error) {;
      logErrorToProduction('Error generating description:', { data:error }),;
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
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      {...field}
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
=======
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",
import { Loader, Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod",
import {logErrorToProduction} from '@/utils/productionLogger',const formSchema = z.object({
  title: z.string().min(3, &quot;Title must be at least 3 characters&quot;),
  keyFeatures: z.string(),
  targetAudience: z.string()}),
import React, {_useState} from "react";
import z from "zod";

const _formSchema = z.object({_title: z.string().min(3, _"Title must be at least 3 characters"), _keyFeatures: z.string(), _targetAudience: z.string()});

type FormData = z.infer<typeof formSchema>,

interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void
}

export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      keyFeatures: "",
      targetAudience: ""}}),
  const handleSubmit = async (data: FormData) => {
    setIsLoading(true),
    
    try {
      const { data: response, error } = await supabase.functions.invoke('generate-service-description', {
        body: { 
          title: data.title,
          keyFeatures: data.keyFeatures,
          targetAudience: data.targetAudience 
        }
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      if (response && (response as any).error) {
        throw new Error((response as any).error)
      }

      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",interface ServiceDescriptionFormProps {_onDescriptionGenerated: (_description: string) => void;}

export function ServiceDescriptionForm(_{_onDescriptionGenerated}: ServiceDescriptionFormProps) {_const { toast} = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const _form = useForm<FormData>({_resolver: zodResolver(formSchema), _defaultValues: {
      title: "", _keyFeatures: "", _targetAudience: ""}});

  const _handleSubmit = async (_data: FormData) => {_setIsLoading(true);
    
    try {
      const { data: response, _error} = await supabase.functions.invoke('generate-service-description', {_body: { 
          title: data.title, _keyFeatures: data.keyFeatures, _targetAudience: data.targetAudience}
      });

      if (error) {_throw new Error(error.message);}
      
      if (response && (response as any).error) {_throw new Error((response as any).error);}

      const _description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";
      
      onDescriptionGenerated(description),
      
      toast({
        title: "Description Generated",
        description: "Your professional service description has been created."
      })    } catch (error) {
      logErrorToProduction('Error generating description:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.",
        variant: "destructive"
      })    } finally {
      setIsLoading(false)
    }
  },
      toast({_title: "Description Generated", _description: "Your professional service description has been created."});
    } catch (error) {_logErrorToProduction('Error generating description:', _{ data: error});
      toast({_title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate description. Please try again.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4&quot;>
            <FormField
              control={form.control}
              name=&quot;title"
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Service Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=&quot;e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white&quot;
                      disabled={isLoading}                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            ;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name="keyFeatures";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      {...field}
                      placeholder="Enter key features, separated by commas";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
=======
              name=&quot;keyFeatures"
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Key Features</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder=&quot;Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
                      disabled={isLoading}                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            />;
            ;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name="targetAudience";
              render={({ field } { field:any }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;
                    <Input;
                      {...field}
                      placeholder="e.g. Small businesses, Startups, E-commerce brands";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            ;
            <Button ;
              type="submit";
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
              {isLoading ? (;
                <>;
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;
                  Generating Description...;
                </>;
              ) :(;
                <>;
                  <Sparkles className="h-4 w-4 mr-2" />;
                  Generate Description;
                </>;
              )}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  ),;
=======
              name=&quot;targetAudience"
              render={({ field }: { field: any }) => (                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Target Audience</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=&quot;e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white&quot;
                      disabled={isLoading}                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type=&quot;submit"
              disabled={isLoading}              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              {_isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating Description...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Description
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
