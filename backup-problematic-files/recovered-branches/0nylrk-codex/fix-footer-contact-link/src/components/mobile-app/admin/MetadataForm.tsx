
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>App Metadata</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <div className="space-y-4">;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>App Title</FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Short Description</FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Long Description</FormLabel>;
                  <FormControl>;

                      maxLength={maxDescriptionLength}
                </FormItem>)}
            />;
            <FormField;
              control={control}
              name="long_description";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Long Description</FormLabel>;
                  <FormControl>;
                    <Textarea;
                      placeholder="Detailed description of your app";
                      className="min - h-32";
                      max_length={maxDescriptionLength}
                      {...field}
                    />;
                  </FormControl>;
                  <FormDescription>;

                    {keyword}
                    <button ;
                      type="button";
                      onClick={() => removeKeyword(keyword)}
                      className="ml-1 hover:text-red-300";
                    >;
                      <X className="h-3 w-3" />;
                    </button>;
                  </Badge>;
                ))}
              </div>;
              <FormDescription className="mt-2">;

            />;
          </div>;
        </Form>;
      </CardContent>;

