
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;

                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;

                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;

                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;

                render={({ field }) => (;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;

                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;

                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;

            render={({ field }) => (;
              <FormItem>;
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;
                  <div className="flex gap-2">;

                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          <div className="flex justify-end gap-2">;
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;

            </Button>;
          </div>;
        </form>;
      </Form>;

