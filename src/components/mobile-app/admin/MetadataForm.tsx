
};

                    {long_description.length}/{maxDescriptionLength} characters;
                  </FormDescription>;
                </FormItem>)}
            />;
            <div>;
              <FormLabel html_for="keywords">Keywords</FormLabel>;
              <Input;
                id="keywords";
                placeholder="Add keywords (press Enter or comma to add)";
                onKeyDown = {add_keyword, }
                className="mb - 2";
              />;
              <div className="flex flex - wrap gap - 2 mt - 2">;
                {keywords.map ((keyword, index, ) => (
                  <Badge key={index} className="bg - zion - purple / 60 hover:bg - zion - purple">;
                    {keyword}
                    <button;
                      type="button";
                      on_click = {(, ) => remove_keyword (keyword), }
                      className="ml - 1 hover:text - red - 300 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 rounded";
                      aria - label="Remove keyword";
                    >;
                      <X className="h - 3 w - 3" />;
                    </button>;
                  </Badge>))}
              </div>;
              <FormDescription className="mt - 2">;
                Add keywords to improve discoverability (max 100 characters total);
              </FormDescription>;
            </div>;
            <FormField;
              control = {control, }
              name="version";
              render={({ field }: { field: any }, ) => (
                <FormItem>;
                  <FormLabel > App Version</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="e.g., 1.0.0";
                      {...field}
                    />;
                  </FormControl>;
                </FormItem>)}

            />;
          </div>;
        </Form>;
      </CardContent>;
    </Card>;
  );
},;


