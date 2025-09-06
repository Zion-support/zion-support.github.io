
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import z from "zod";

import {zodResolver} from "@hookform/resolvers/zod";
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z.string()
  targetAudience: z.string()})
type FormData = z.infer<typeof formSchema>;
import z from "zod",
import { zodResolver } from "@hookform/resolvers/zod",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}

<<<<<<< HEAD
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        body: {
          title: data.title
          keyFeatures: data.keyFeatures
          targetAudience: data.targetAudience
        }
      });
      if (error) {
        throw new Error(error.message)
        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 
        }
      });

      if (error) {
        throw new Error(error.message)
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
      if (response.error) {
        throw new Error(response.error)
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======



      onDescriptionGenerated(response.description),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      onDescriptionGenerated(response.description);

      onDescriptionGenerated(response.description),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
      })
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating description:", error);
=======
      console.error("Error generating description:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
<<<<<<< HEAD

========
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
    }
<<<<<<< HEAD
=======
  }
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
<<<<<<< HEAD
export /**
 * ServiceDescriptionForm - Function description
 */
function ServiceDescriptionForm() {
  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
;
  const form = use_form < FormData>({
    resolver: zod_resolver (form_schema),
    default_values: {
      title: "",
      key_features: "",
      target_audience: ""}}),
  const handle_submit = async (data: FormData) => {
    setIsLoading (true),
    try {
      const { data: response, error } = await supabase.functions.invoke ('generate - service - description', {
        body: {
          title: data.title,
          key_features: data.key_features,
          target_audience: data.target_audience;
        }
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      // Check condition
if ( {) {
  $2
}
        throw new Error (response.error);
      }
      onDescriptionGenerated (response.description);
;
      toast ({
        title: "Description Generated",
        description: "Your professional service description has been created.";
      });
    } catch (error) {
      console.error ("Error generating description:", error);
      toast ({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
    <Card className="border border - zion - blue - light bg - zion - blue - dark">;
      <CardHeader>;
        <CardTitle className="flex items - center text - white">;
          <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text - zion - slate - light">;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

    }

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    }
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <Input
                      {...field}
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <Input 
                      {...field} 
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
=======
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Input
                      {...field} 
                      placeholder="e && e.g. Professional Web Design Services"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
                      className="bg-zion-blue border border-zion-blue-light text-white"
=======
                    <Input ;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    <Input;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
<<<<<<< HEAD
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

            />;
<<<<<<< HEAD
            <FormField;
=======


            <FormField
              control={form && form.control}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="keyFeatures"

========
            />;
            <FormField
              control={form && form.control}
              name="keyFeatures"
=======
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="keyFeatures";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
                    <Textarea
=======
                    <Textarea ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {...field}
                      placeholder="Enter key features, separated by commas";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
<<<<<<< HEAD
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

            />;


            <FormField
              control={form && form.control}
              name="targetAudience"
<<<<<<< HEAD
=======
                </FormItem>;
              )}
            />;
            <FormField;
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAudience"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
=======


                    <Input 
                      {...field} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
========
            />;
            <FormField
              control={form && form.control}
              name="targetAudience"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
=======
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="targetAudience";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
                    <Input
                      {...field} 
                      placeholder="e && e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white"
=======
                    <Input ;
                      {...field} ;
                      placeholder="e.g. Small businesses, Startups, E-commerce brands";
                      className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
<<<<<<< HEAD
            />

=======

            />;


========
            />;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
            <Button
=======
            />

            
            <Button 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
=======
            ;
            <Button ;
              type="submit";
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {isLoading ? (;
                <>;
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;
                  Generating Description...;
                </>;
<<<<<<< HEAD
              ) : (;
=======
              ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <>;
                  <Sparkles className="h-4 w-4 mr-2" />;
                  Generate Description;
                </>;
              )}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <Input
                      {...field}
                    <Input 
                      {...field} 
                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
            
            <Button 
              type="submit"
              disabled={isLoading}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
    </Card>);
=======
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/ServiceDescriptionForm.tsx
=======
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
