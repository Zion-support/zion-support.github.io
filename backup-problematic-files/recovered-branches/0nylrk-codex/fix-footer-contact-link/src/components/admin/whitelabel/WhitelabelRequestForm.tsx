
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert(tenantData);
        .select();

        <CardDescription>;
          Create a customized version of the platform for your client or partner.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;

                    <FormControl>;
                      <Input placeholder="Acme AI Solutions" {...field} />;
                    </FormControl>;
                    <FormMessage />;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Subdomain</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center">;
                        <Input placeholder="acme" {...field} />;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Custom Domain (Optional)</FormLabel>;
                    <FormControl>;

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Primary Brand Color</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center gap-2">;
                        <Input type="color" {...field} className="w-12 h-9 p-1" />;
                        <Input {...field} placeholder="#9b87f5" className="flex-1" />;
                      </div>;
                    </FormControl>;
                    <FormMessage />;

                      <FormControl>;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select a theme" />;
                        </SelectTrigger>;
                      </FormControl>;
                      <SelectContent>;
                        <SelectItem value="light">Light</SelectItem>;
                        <SelectItem value="dark">Dark</SelectItem>;
                        <SelectItem value="neon">Neon</SelectItem>;
                        <SelectItem value="corporate">Corporate</SelectItem>;
                        <SelectItem value="startup">Startup</SelectItem>;
                      </SelectContent>;
                    </Select>;
                    <FormMessage />;

                      <FormControl>;
                        <Input placeholder="Get Started" {...field} />;
                      </FormControl>;
                      <FormMessage />;

            </Button>;
          </form>;
        </Form>;
      </CardContent>;

        <p>;
          After creating the tenant, you must upload a logo via the tenant management dashboard.;
          DNS verification for custom domains must be completed before they can be used.;
        </p>;
      </CardFooter>;

}