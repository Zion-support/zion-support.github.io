

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  keyFeatures: z.string(),

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
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Service Title</FormLabel>
                  <FormControl>
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form && form.control}




              control={form.control}
              name="keyFeatures"

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="text-zion-slate-light">Key Features</FormLabel>;
                  <FormControl>;

                    <Textarea
=======
            
            <FormField
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
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zion-slate-light">Target Audience</FormLabel>
                  <FormControl>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
