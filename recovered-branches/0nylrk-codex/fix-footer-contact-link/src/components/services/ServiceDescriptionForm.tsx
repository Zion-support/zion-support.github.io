<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
export function ServiceDescriptionForm({ onDescriptionGenerated }: ServiceDescriptionFormProps) {
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const form = useForm<FormData>({
    }
    "resolver": zodResolver(formSchema)
    "defaultValues": {
      }
      "title": "title","
    "keyFeatures": """
      "targetAudience": ""})"
  const handleSubmit = async ("data": FormData) => {
    }
    setIsLoading(true)
    try {
      }
      const { "data": response, error } = await supabase.functions.invoke('generate-service-description', {'
}
import React, { useState } from "react";"
import { useToast } from "@/hooks/use-toast";"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card",;"
import { Loader, Sparkles } from "lucide-react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;"
import { useForm } from "react-hook-form",;"
import z from "z";"
import { zodResolver } from "@hookform/resolvers/zod",;"
const formSchema = z.object({;
  }
  "title": z.string().min(3, "Title must be at least 3 characters"),;"
  "keyFeatures": z.string(),;
  "targetAudience": z.string()}),;
type FormData = z.infer<typeof formSchema>,;
interface ServiceDescriptionFormProps {;
  }
  "onDescriptionGenerated": ("description": string) => void;
}
;
export function ServiceDescriptionForm() {;
  }
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const form = useForm<FormData>({;
    }
    "resolver": zodResolver(formSchema),;
    "defaultValues": {;
      }
      "title": "",;"
      "keyFeatures": "",;"
      "targetAudience": ""}),;"
  const handleSubmit = async ("data": FormData) => {;
    }
    setIsLoading(true),;
    try {;
      }
      const { "data": response, error } = await supabase.functions.invoke('generate-service-description', {;'
        }
        "body": {;
          }
          "title": data.title,;
          "keyFeatures": data.keyFeatures,;
          "targetAudience": data.targetAudience;
        }
      }),;
      if (error) {;
        }
        throw new Error(error.message);
      }
;
      if (response && (response as any).error) {;
        throw new Error((response as any).error);
      }

      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",
      
      onDescriptionGenerated(description),
      
      toast({
        title: "Description Generated",
        description: "Your professional service description has been created."
      })
    } catch (error) {
      logErrorToProduction('Error generating description:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
import { zodResolver } from "@hookform/resolvers/zod";
import {logErrorToProduction} from '@/utils/productionLogger';
const formSchema = null;
origin/cursor/automate-test-improve-and-merge-code-2533
const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;

type FormData = z && z.infer<typeof formSchema>;


      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";
<<<<<<< HEAD
=======
=======

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
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { Loader, Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { useForm } from "react-hook-form",
import z from "zod";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
      targetAudience: ""}),

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
<<<<<<< HEAD
=======
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>,

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}





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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          title: data.title
          keyFeatures: data.keyFeatures
          targetAudience: data.targetAudience
        }
      });
      if (error) {
        throw new Error(error.message)
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

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      if (response.error) {
        throw new Error(response.error)
      }

<<<<<<< HEAD
=======


      onDescriptionGenerated(response.description),
      


<<<<<<< HEAD
      onDescriptionGenerated(response.description);

      onDescriptionGenerated(response.description),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      })
    } catch (error) {
      }
      console.error("Error generating "description":", error),"
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
        }
        "title": "Generation Failed""
        "description": error instanceof Error ? error.message : "Failed to generate description. Please try again.""
"variant": "destructive";"
<<<<<<< HEAD
=======
=======
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      })
    } finally {
      }
      setIsLoading(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;"
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;"
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;"
<<<<<<< HEAD
=======
=======
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
;
      onDescriptionGenerated(response.description),;
=======
>>>>>>> origin/chore/fix-lint-and-merge
      })
    } catch (error) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      console.error("Error generating description:", error),
=======
      console.error("Error generating description:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
      toast({;
        title: "Description Generated",;
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
<<<<<<< HEAD
      console.error("Error generating description:", error),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.";
=======
      console && console.error("Error generating description:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate description. Please try again.",;
>>>>>>> merged-prs-20250907-203621
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  };
=======
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
>>>>>>> merged-prs-20250907-203621
  return (;
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;"
            <FormField;
              control={form.control}
              name="title";"
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;"
                  <FormControl>;
                      className="bg-zion-blue border border-zion-blue-light text-white""
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
    }
  }
  },

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
<<<<<<< HEAD
=======
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">;
            <FormField;
              control={form.control}
              name="title";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      className="bg-zion-blue border border-zion-blue-light text-white"
                    <Input ;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> merged-prs-20250907-203621
                    <Input;
                      {...field} ;
                      placeholder="e.g. Professional Web Design Services";
                      className="bg-zion-blue border border-zion-blue-light text-white";
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Input
                      {...field}
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD
            />
=======
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

            />;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormField
<<<<<<< HEAD
;
      onDescriptionGenerated(response.description),;
      toast({;
        title: "Description Generated",;
=======
<<<<<<< HEAD
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
=======


              control={form.control}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              name="keyFeatures"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}
<<<<<<< HEAD
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            <FormField,
control={form && form.control}
              control={form.control}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            <FormField,
control={form && form.control}
              name="keyFeatures""
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas""
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20""
                      disabled={isLoading} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;"
                  <FormControl>;
                      className="bg-zion-blue border border-zion-blue-light text-white""
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              name="keyFeatures";
              render={({ field }: { field: any }) => (<FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;
                    <Textarea;
>>>>>>> merged-prs-20250907-203621
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
                    <Textarea
=======

>>>>>>> origin/chore/fix-lint-and-merge
                      {...field}
<<<<<<< HEAD
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
=======
                      placeholder=\"Enter key features, separated by commas\"
                      className=\"bg-zion-blue border border-zion-blue-light text-white min-h-20\"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              type="submit""
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white">;"
              {isLoading ? (;
                <>;
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;"
                  }
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
=======

              type="submit"

>>>>>>> origin/chore/fix-lint-and-merge
              disabled={isLoading}
              className=\"w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white\">;
              {isLoading ? (;
                <>;
                  <Loader className=\"mr-2 h-4 w-4 animate-spin\" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  Generating Description...;
                </>;
              ) : (;
                <>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                  <Sparkles className="h-4 w-4 mr-2" />;"
                  Generate Description;
                </>;
              )}
<<<<<<< HEAD
=======
:src_backup/components/services/ServiceDescriptionForm.tsx
=======
                  <Sparkles className=\"h-4 w-4 mr-2\" />;
                  Generate Description;
<<<<<<< HEAD
                </>;
              )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            />
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/services/ServiceDescriptionForm.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  );

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
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  )}catch (error) {';
=======
<<<<<<< HEAD
:src_backup/components/services/ServiceDescriptionForm.tsx
  )}catch (error) {';
=======
  )}catch (error) {';
  )}catch (error) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  logErrorToProduction ('Error generating description:', {data: error ;
})toast ({}finally {setIsLoading (false)}>Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > {";
  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>)}</Button> </form> </Form> </CardContent> </Card>)}'";
  )}
  );
}
<<<<<<< HEAD

;
=======
<<<<<<< HEAD

;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  )
}
