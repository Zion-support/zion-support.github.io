<<<<<<< HEAD

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
<<<<<<< HEAD

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;

                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;

                      {...field}
                      placeholder="Enter key features, separated by commas";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>;
                  <FormControl>;

                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              {isLoading ? (;
                <>;
                  <Loader className="mr-2 h-4 w-4 animate-spin" />;
                  Generating Description...;
                </>;

                <>;
                  <Sparkles className="h-4 w-4 mr-2" />;
                  Generate Description;
                </>;
              )}

}
=======
 const formSchema = z.object ({;
  title: z.string () .min (3, "Title must be at least 3 characters");
keyFeatures: z.string ();
targetAudience: z.string () ;
});
const handleSubmit = async (data: FormData) => {;
  setIsLoading (true);
try {;
  const { ;
  data: response, error ;
 } = await supabase.functions.invoke ('generate-service-description', {;
  body: {;
  title: data.title;
keyFeatures: data.keyFeatures;
targetAudience: data.targetAudience ;
}
});
if (error) {;
  throw new Error (error.message) ;
}if (response && (response as any) .error) {;
  throw new Error ( (response as any) .error) ;
}
}catch (error) {';
  logErrorToProduction ('Error generating description:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsLoading (false) ;
}
};">Service Title</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";"}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Key Features</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";"}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Target Audience</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) ";"}/> <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" >{";"  isLoading ? (<> <Loader className="mr-2 h-4 w-4 animate-spin" /> Generating Description... </>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Description </>) ;
}</Button> </form> </Form> </CardContent> </Card>) ;"}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
