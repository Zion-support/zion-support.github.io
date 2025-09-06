
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
      <TabsList className="grid grid-cols-2 mb-6">;
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          Manual Creation;
        </TabsTrigger>;
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">;
          <Sparkles className="h-4 w-4 mr-2" />;
          AI-Powered Creation;
        </TabsTrigger>;
      </TabsList>;

              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Description</FormLabel>;
                  <FormControl>;

                    />;
                  </FormControl>;
                  <FormDescription>;
                    Provide a detailed description of what you're offering;
                  </FormDescription>;
                  <FormMessage />;

                    <FormControl>;
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      Set your price in USD;
                    </FormDescription>;
                    <FormMessage />;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Category</FormLabel>;
                    <FormControl>;

                        {...field}
                      >;
                        <option value="">Select a category</option>;
                        <option value="digital_product">Digital Product</option>;
                        <option value="service">Service</option>;
                        <option value="ai_tool">AI Tool</option>;
                        <option value="course">Course</option>;
                        <option value="template">Template</option>;
                        <option value="other">Other</option>;
                      </select>;
                    </FormControl>;
                    <FormMessage />;

              render={() => (;
                <FormItem>;
                  <FormLabel>Product Image</FormLabel>;
                  <FormControl>;

              </Button>;
            </div>;
          </form>;
        </Form>;
      </TabsContent>;

          }}
        />;
      </TabsContent>;
    </Tabs>;

}