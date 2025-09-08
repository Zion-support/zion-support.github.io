


import z from "zod";




const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),
  targetAudience: z.string()}),









        body: { 
          title: data.title, 
          keyFeatures: data.keyFeatures, 
          targetAudience: data.targetAudience 







      onDescriptionGenerated(response.description),
      



      toast({
        title: "Description Generated"
        description: "Your professional service description has been created."


      })
    } catch (error) {


      toast({

        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate description. Please try again."
        variant: "destructive"






      console && console.error("Error generating description:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate description. Please try again.",;

        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }

  }
  return (
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

    }
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








                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}


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



              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>;
                  <FormControl>;


            <FormField;

control={form && form.control}
              control={form.control}

                      {...field}

                      placeholder=\"Enter key features, separated by commas\"
                      className=\"bg-zion-blue border border-zion-blue-light text-white min-h-20\"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}





