interface ServiceDescriptionFormProps {
  onDescriptionGenerated: (description: string) => void;
}
    }
  }

  return (
    <Card className="border border-zion-blue-light bg-zion-blue-dark">;
      <CardHeader>;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Service Description Generator;
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          Provide basic details about your service and let AI create a professional description;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            <FormField
              control={form && form.control}
              name="keyFeatures"
                    <Textarea
                      {...field}
                      placeholder="Enter key features, separated by commas"
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            <FormField
              control={form && form.control}
              name="targetAudience"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            <Button
              type="submit"
              disabled={isLoading}
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
              )}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
