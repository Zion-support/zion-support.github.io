
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import {Loader, Sparkles} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Loader, Sparkles } from './lucide-react';
import { supabase } from '@/integrations / supabase / client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { use_form } from './react - hook - form';
import z from './zod';
import { zod_resolver } from '@hookform / resolvers / zod';
const form_schema = z.object ({
  title: z.string ().min (3, "Title must be at least 3 characters");
  key_features: z.string (),
  target_audience: z.string ()}),
type FormData = z.infer < typeof form_schema>;
;

<<<<<<< HEAD

import z from "zod";

<<<<<<< HEAD
import {zodResolver} from "@hookform/resolvers/zod";
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z.string()
  targetAudience: z.string()})
type FormData = z.infer<typeof formSchema>;
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}





<<<<<<< HEAD
<<<<<<< HEAD
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void
}

export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        body: {
          title: data.title
          keyFeatures: data.keyFeatures
          targetAudience: data.targetAudience
        }
      });
      if (error) {
        throw new Error(error.message)
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 
<<<<<<< HEAD
        }
      });

      if (error) {
        throw new Error(error.message)
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 


<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (response.error) {
        throw new Error(response.error)
      }
<<<<<<< HEAD



      onDescriptionGenerated(response.description),
      


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      onDescriptionGenerated(response.description);

      onDescriptionGenerated(response.description),
      
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
      })
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error generating description:", error),
=======
      console.error("Error generating description:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Error generating description:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;
<<<<<<< HEAD
type FormData = z && z.infer<typeof formSchema>;
interface ServiceDescriptionFormProps {;
  onDescriptionGenerated: (description: string) => void;
}
export function ServiceDescriptionForm(): any ({ onDescriptionGenerated }: ServiceDescriptionFormProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
=======

type FormData = z && z.infer<typeof formSchema>;

interface ServiceDescriptionFormProps {;
  onDescriptionGenerated: (description: string) => void;
}

export function ServiceDescriptionForm(): any ({ onDescriptionGenerated }: ServiceDescriptionFormProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const form = useForm<FormData>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: "",;
      keyFeatures: "",;
      targetAudience: ""}}),;
<<<<<<< HEAD
  const handleSubmit = async (data: FormData) => {;
    setIsLoading(true),;
=======

  const handleSubmit = async (data: FormData) => {;
    setIsLoading(true),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      const { data: response, error } = await supabase && supabase.functions.invoke('generate-service-description', {;
        body: { ;
          title: data && data.title, ;
          keyFeatures: data && data.keyFeatures, ;
          targetAudience: data && data.targetAudience ;
        }
      });
<<<<<<< HEAD
      if (error) {;
        throw new Error(error && error.message);
      }
      if (response && response.error) {;
        throw new Error(response && response.error);
      }
      onDescriptionGenerated(response && response.description);
=======

      if (error) {;
        throw new Error(error && error.message);
      }

      if (response && response.error) {;
        throw new Error(response && response.error);
      }

      onDescriptionGenerated(response && response.description);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }
  }
  return (

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
      if (response.error) {;
        throw new Error(response.error),;
      }
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                      className="bg-zion-blue border border-zion-blue-light text-white"
                    <Input ;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                    <Input;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;


            <FormField
              control={form && form.control}


              control={form.control}
              name="keyFeatures"

            />;
            <FormField
              control={form && form.control}
              name="keyFeatures"
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="keyFeatures";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;
                    <Textarea ;
                      {...field}
                      placeholder="Enter key features, separated by commas";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input
                      {...field} 
                      placeholder="e && e.g. Professional Web Design Services"

                      className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
            />;
            <FormField;
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;


            <FormField
              control={form && form.control}
=======


              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="keyFeatures"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
=======
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            <FormField
              control={form && form.control}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>
<<<<<<< HEAD


                    <Input 
                      {...field} 


                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
=======
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
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

          <form on_submit={form.handle_submit (handle_submit)} className="space - y-4">;
            <FormField;
              control={form.control}
              name="title";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel className="text - zion - slate - light">Service Title</FormLabel>;
                  <FormControl>;
                    <Input;
                      {...field}
                      placeholder="e.g. Professional Web Design Services";
                      className="bg - zion - blue border border - zion - blue - light text - white";
                      disabled={is_loading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="key_features";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel className="text - zion - slate - light">Key Features</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      {...field}
                      placeholder="Enter key features, separated by commas";
                      className="bg - zion - blue border border - zion - blue - light text - white min - h-20";
                      disabled={is_loading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="target_audience";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel className="text - zion - slate - light">Target Audience</FormLabel>;
                  <FormControl>;
                    <Input;
                      {...field}
                      placeholder="e.g. Small businesses, Startups, E - commerce brands";
                      className="bg - zion - blue border border - zion - blue - light text - white";
                      disabled={is_loading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <Button;
              type="submit";
              disabled={is_loading}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
            >;
              {is_loading ? (
                <>;
                  <Loader className="mr - 2 h - 4 w - 4 animate - spin" />;
                  Generating Description...;
                </>) : (
                <>;
                  <Sparkles className="h - 4 w - 4 mr - 2" />;
                  Generate Description;
                </>)}

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input
                      {...field}
                    <Input 
                      {...field} 
                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
<<<<<<< HEAD
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======
=======
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;
                    <Input
                      {...field} 
                      placeholder="e && e.g. Small businesses, Startups, E-commerce brands"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            />
            <Button
            
            <Button 
              type="submit"
              disabled={isLoading}
<<<<<<< HEAD
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating Description...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Description
                </>
=======
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
              {isLoading ? (;
                <>;
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;
                  Generating Description...;
                </>;
              ) : (;
                <>;
                  <Sparkles className="h-4 w-4 mr-2" />;
                  Generate Description;
                </>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  ),; const formSchema = z.object ({
  title: z.string () .min (3, "Title must be at least 3 characters");
keyFeatures: z.string ();
targetAudience: z.string () 
});
const handleSubmit = async (data: FormData) => {
  setIsLoading (true);
try {
  const {
  data: response, error 
}= await supabase.functions.invoke ('generate-service-description', {
  body: {
  title: data.title;
keyFeatures: data.keyFeatures;
targetAudience: data.targetAudience 
}
;

});
if (error) {
  throw new Error (error.message) 
}if (response.error) {
  throw new Error (response.error) 
}
}finally {
  setIsLoading (false) 
}
};
>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > {
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>) 
}</Button> </form> </Form> </CardContent> </Card>) 
}
    </Card>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </Card>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
