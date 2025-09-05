
import React, {_useState} from "react";
import z from "zod";

const _formSchema = z.object({_title: z.string().min(3, _"Title must be at least 3 characters"), _keyFeatures: z.string(), _targetAudience: z.string()});

type FormData = z.infer<typeof formSchema>;

interface ServiceDescriptionFormProps {_onDescriptionGenerated: (_description: string) => void;}

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
      
      if (response.error) {_throw new Error(response.error);}

      onDescriptionGenerated(response.description);
      
      toast({_title: "Description Generated", _description: "Your professional service description has been created."});
    } catch (error) {_toast({
        title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate description. Please try again.", _variant: "destructive"});
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
        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={_form.control}
              name="title"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
                    <Input 
                      {_...field} 
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={_isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="keyFeatures"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
                    <Textarea 
                      {_...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={_isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={_form.control}
              name="targetAudience"
              render={_(_{ field}) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>
                    <Input 
                      {_...field} 
                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={_isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              disabled={_isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
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
  );
}
