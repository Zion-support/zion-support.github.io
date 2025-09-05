<<<<<<< HEAD
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
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from &quot;@/components/ui/card&quot;;
import { Loader, Sparkles } from 'lucide-react'
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import z from &quot;zod&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const formSchema = z.object({
  title: z.string().min(3, &quot;Title must be at least 3 characters&quot;),
  keyFeatures: z.string(),
  targetAudience: z.string()}),

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
<<<<<<< HEAD
      title: "",
      keyFeatures: "",
      targetAudience: ""}}),
=======
      title: "&quot;,
      keyFeatures: "&quot;,
      targetAudience: "&quot;}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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

<<<<<<< HEAD
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",
=======
      const description = response ? (response as any).description : &quot;Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      onDescriptionGenerated(description),
      
      toast({
<<<<<<< HEAD
        title: "Description Generated",
        description: "Your professional service description has been created."
      })
=======
        title: &quot;Description Generated&quot;,
        description: &quot;Your professional service description has been created.&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error) {
      logErrorToProduction('Error generating description:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again.",
        variant: "destructive"
      })
=======
        title: &quot;Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Failed to generate description. Please try again.&quot;,
        variant: &quot;destructive"
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4&quot;>
            <FormField
              control={form.control}
              name=&quot;title"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Service Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=&quot;e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white&quot;
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;keyFeatures"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Key Features</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder=&quot;Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name=&quot;targetAudience"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light&quot;>Target Audience</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=&quot;e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white&quot;
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type=&quot;submit"
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
