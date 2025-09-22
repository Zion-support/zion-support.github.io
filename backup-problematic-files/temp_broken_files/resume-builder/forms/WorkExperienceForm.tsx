</Button>;
                    <Button;
                      variant="ghost";
                      size="icon";

                    <FormControl>;
                      <Input placeholder="Google, Microsoft, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Start Date</FormLabel>;
                    <FormControl>;

                      />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;

                        />;
                      </FormControl>;
                      <div className="space-y-1 leading-none">;
                        <FormLabel>I currently work here</FormLabel>;
                      </div>;
                    </FormItem>;
                  )}
                />;

                    render={({ field }) => (;
                      <FormItem>;
                        <FormLabel>End Date</FormLabel>;
                        <FormControl>;

                  />;
                )}
              </div>;
            </div>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel className="flex justify-between">;
                    <span>Job Description</span>;

                      onEnhanced={handleEnhanceDescription}
                    />;
                  </FormLabel>;
                  <FormControl>;

                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;

                  <Button type="button" onClick={onComplete}>;
                    Next;
                  </Button>;
                )}

}
