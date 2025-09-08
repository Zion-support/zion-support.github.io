

                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Max {platform === "ios" ? "30" : "50"} characters
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control = {control,}
              name="shortDescription"
              render={({ field }: { field: any },) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief description of your app"
                      maxLength = {platform === "ios" ? 170 : 80,}
                </FormItem>)}
            />;
            <FormField;
              control = {control, }
              name="short_description";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > Short Description</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="Brief description of your app";
                      max_length = {platform === "ios" ? 170 : 80, }
                      {...field}

                      className="ml-1 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      aria-label="Remove keyword"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}


                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}


