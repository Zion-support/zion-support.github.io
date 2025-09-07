
      <CardHeader>
        <CardTitle>Create White-Label Instance</CardTitle>
        <CardDescription>
          Create a customized version of the platform for your client or partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>

type FormValues = z.infer < typeof form_schema>;
export /**
 * WhitelabelRequestForm - Function description
 */
function WhitelabelRequestForm() {
  }
  const form = use_form < FormValues>({

    try {
      // Prepare the data;
      }
      const tenant_data = {
        }
        "brand_name": values.brand_name,
        "subdomain": values.subdomain,
        "custom_domain": values.custom_domain || null,
        "primary_color": values.primary_color,
        "theme_preset": values.theme_preset,
        "landing_page_copy": {
          }
          "headline": values.headline,
          "subtitle": values.subtitle,
          "cta": values.cta}
      }
      // Submit to Supabase;
      const { data, error } = await supabase;

if (throw error) {
  $2
}
      toast ({

      // Reset form;
      form.reset ();
    } catch ("error": any) {
      }
      toast ({

      <CardHeader>;
        <CardTitle > Create White - Label Instance</CardTitle>;
        <CardDescription>;
          Create a customized version of the platform for your client or partner.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;

                render={({ field }) => (
                  <FormItem>;
              <FormField
                control={form.control}
                name="brand_name
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder=Acme AI Solutions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subdomain
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subdomain</FormLabel>
                    <FormControl>
                      <div className=flex items-center">
                        <Input placeholder="acme {...field} />
                        <span className=ml-2 text-muted-foreground">.ziontechmarketplace.com</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                    <FormLabel > Brand Name</FormLabel>;                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Custom Domain (Optional)</FormLabel>;
                    <FormControl>;
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Primary Brand Color</FormLabel>;
                    <FormControl>;

                      </div>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
                  </FormItem>;
                )}

                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > CTA Button Text</FormLabel>;
                      <FormControl>;

                      </FormControl>;
                      <FormMessage />;        <p>;
          After creating the tenant, you must upload a logo via the tenant management dashboard.;
          DNS verification for custom domains must be completed before they can be used.;
        </p>;
      </CardFooter>;

    </Card>);
}
              />
              <FormField
                control={form.control}
                name="custom_domain
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Domain (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder=marketplace.acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primary_color
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Brand Color</FormLabel>
                    <FormControl>
                      <div className=flex items-center gap-2">
                        <Input type="color {...field} className=w-12 h-9 p-1" />
                        <Input {...field} placeholder="#9b87f5 className=flex-1" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theme_preset
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme Preset</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder=Select a theme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light>Light</SelectItem>
                        <SelectItem value=dark">Dark</SelectItem>
                        <SelectItem value="neon>Neon</SelectItem>
                        <SelectItem value=corporate">Corporate</SelectItem>
                        <SelectItem value="startup>Startup</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=border rounded-md p-4 space-y-4">
                <h3 className="text-sm font-medium>Landing Page Copy</h3>
                <FormField
                  control={form.control}
                  name=headline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input placeholder="AI Marketplace {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name=subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input placeholder="Find the best AI talent {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name=cta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Get Started {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type=submit" className="w-full size=lg">
              Create White-Label Instance
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-muted/50 text-xs text-muted-foreground">
        <p>
          After creating the tenant, you must upload a logo via the tenant management dashboard.
          DNS verification for custom domains must be completed before they can be used.
        </p>
      </CardFooter>
    </Card>
  )
}
