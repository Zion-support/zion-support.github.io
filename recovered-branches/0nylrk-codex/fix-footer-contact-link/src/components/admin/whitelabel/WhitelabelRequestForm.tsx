
import React from 'react';

// Form schema
const _formSchema = z.object({_brand_name: z.string().min(2, _{ message: 'Brand name must be at least 2 characters'}),
  subdomain: z.string()
    .min(3, {_message: 'Subdomain must be at least 3 characters'})
    .max(20, {_message: 'Subdomain must be at most 20 characters'})
    .regex(/^[a-z0-9-]+$/, {_message: 'Subdomain can only contain lowercase letters, _numbers, _and hyphens'}),
  custom_domain: z.string().optional(),
  primary_color: z.string().regex(/^#([0-9A-F]{_6})$/i, {_message: 'Must be a valid hex color'}),
  theme_preset: z.enum(['light', 'dark', 'neon', 'corporate', 'startup']),
  headline: z.string().min(5, {_message: 'Headline must be at least 5 characters'}),
  subtitle: z.string().min(5, {_message: 'Subtitle must be at least 5 characters'}),
  cta: z.string().min(2, {_message: 'CTA text must be at least 2 characters'})});

type FormValues = z.infer<typeof formSchema>;

export function WhitelabelRequestForm() {_const _form = useForm<FormValues>({
    resolver: zodResolver(formSchema), _defaultValues: {
      brand_name: '', _subdomain: '', _custom_domain: '', _primary_color: '#9b87f5', _theme_preset: 'light', _headline: 'AI Marketplace', _subtitle: 'Find the best AI talent', _cta: 'Get Started'}});
  
  const _onSubmit = async (_values: FormValues) => {_try {
      // Prepare the data
      const _tenantData = {
        brand_name: values.brand_name, _subdomain: values.subdomain, _custom_domain: values.custom_domain || null, _primary_color: values.primary_color, _theme_preset: values.theme_preset, _landing_page_copy: {
          headline: values.headline, _subtitle: values.subtitle, _cta: values.cta}
      };
      
      // Submit to Supabase
      const {_data, _error} = await supabase
        .from('whitelabel_tenants')
        .insert(tenantData)
        .select()
        .single();
      
      if (error) throw error;
      
      toast({_title: 'White-label tenant created!', _description: `${values.brand_name} has been set up with subdomain ${_values.subdomain}`});
      
      // Reset form
      form.reset();
    } catch (error: unknown) {_toast({
        variant: 'destructive', _title: 'Error creating tenant', _description: error.message || 'Something went wrong'});
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create White-Label Instance</CardTitle>
        <CardDescription>
          Create a customized version of the platform for your client or partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={_form.control}
                name="brand_name"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme AI Solutions" {_...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={_form.control}
                name="subdomain"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Subdomain</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input placeholder="acme" {_...field} />
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace.com</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={_form.control}
                name="custom_domain"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Custom Domain (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="marketplace.acme.com" {_...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={_form.control}
                name="primary_color"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Primary Brand Color</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input type="color" {_...field} className="w-12 h-9 p-1" />
                        <Input {_...field} placeholder="#9b87f5" className="flex-1" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={_form.control}
                name="theme_preset"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Theme Preset</FormLabel>
                    <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="neon">Neon</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="border rounded-md p-4 space-y-4">
                <h3 className="text-sm font-medium">Landing Page Copy</h3>
                
                <FormField
                  control={_form.control}
                  name="headline"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input placeholder="AI Marketplace" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={_form.control}
                  name="subtitle"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input placeholder="Find the best AI talent" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={_form.control}
                  name="cta"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Get Started" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
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
  );
}
