
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;

    <div className="space-y-6">;
      <div className="flex items-center space-x-2">;
        <FileText className="h-5 w-5 text-primary" />;
        <h2 className="text-xl font-semibold">Report an Issue</h2>;
      </div>;

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          <FormItem>;
            <FormLabel>Attachments (optional)</FormLabel>;
            <FormControl>;
              <div className="space-y-4">;

                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;

              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;

            </Button>;
          </div>;
        </form>;
      </Form>;

}