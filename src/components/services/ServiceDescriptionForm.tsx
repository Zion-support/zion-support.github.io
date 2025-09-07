const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;

type FormData = z && z.infer<typeof formSchema>;


      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";

}
  );
}


  )
}

const form_schema = z.object ({
  title: z.string ().min (3, "Title must be at least 3 characters");
  key_features: z.string (),
  target_audience: z.string ()}),
type FormData = z.infer < typeof form_schema>;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high - quality solutions tailored to your specific needs.";
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
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Professional Web Design Services"
                      className="bg-zion-blue border border-zion-blue-light text-white"
;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.",;
      onDescriptionGenerated(description),;
      toast({;
        title: "Description Generated",;
        description: "Your professional service description has been created.";
      });
    } catch (error) {;
      logErrorToProduction('Error generating description:', { data: error }),;
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
              render={({ field }: { field: any }) => (;
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
              )}
            />;
            <FormField;
              control={form.control}
              name="keyFeatures"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>
                  <FormControl>
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
            />;
            <FormField;
              control={form.control}
              name="targetAudience"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Small businesses, Startups, E-commerce brands"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      disabled={isLoading}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />
            
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
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
    </Card>;
  );
}

;
