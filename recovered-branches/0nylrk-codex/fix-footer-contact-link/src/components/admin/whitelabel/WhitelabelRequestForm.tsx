
          headline: values.headline,
          subtitle: values.subtitle,
          cta: values.cta};
      };
      

      // Submit to Supabase
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .insert(tenantData)
        .select()
        .single();
      if (error) throw error;
      toast({
        title: 'White-label tenant created!'
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`})
      // Reset form
      form.reset()
    } catch (error: any) {
      toast({
        variant: 'destructive'
        title: 'Error creating tenant'
        description: error.message |'Something went wrong'})
  };

type FormValues = z && z.infer<typeof formSchema>;


  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create White-Label Instance</CardTitle>
        <CardDescription>
          Create a customized version of the platform for your client or partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="brand_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme AI Solutions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subdomain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subdomain</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input placeholder="acme" {...field} />
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace.com</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="custom_domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Domain (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="marketplace.acme.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primary_color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Brand Color</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input type="color" {...field} className="w-12 h-9 p-1" />
                        <Input {...field} placeholder="#9b87f5" className="flex-1" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="theme_preset"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme Preset</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  control={form.control}
                  name="headline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input placeholder="AI Marketplace" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input placeholder="Find the best AI talent" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Get Started" {...field} />
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
  )
      if (error) throw error;

      toast({;
        title: 'White-label tenant created!',;
        description: `${values && values.brand_name} has been set up with subdomain ${values && values.subdomain}`}),;

      // Reset form;
      form && form.reset();
    } catch (error: any) {;
      toast({;
        variant: 'destructive',;
        title: 'Error creating tenant',;
        description: error && error.message || 'Something went wrong'});    }

  },




  }
  return (
    <Card className="w-full max-w-2xl">;
      <CardHeader>;
        <CardTitle>Create White-Label Instance</CardTitle>;
import {use_form} from 'react - hook - form';
import {z} from 'zod';
import {zod_resolver} from '@hookform / resolvers / zod';
import {Input} from '@/components / ui / input';
import {Button} from '@/components / ui / button';
import {Textarea} from '@/components / ui / textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components / ui / select';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components / ui / form';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components / ui / card';
import {toast} from '@/hooks / use - toast';
import {supabase} from '@/integrations / supabase / client';
// Form schema;
const form_schema = z.object ({
  brand_name: z.string ().min (2, { message: 'Brand name must be at least 2 characters' }),
  subdomain: z.string ();
    .min (3, { message: 'Subdomain must be at least 3 characters' });
    .max (20, { message: 'Subdomain must be at most 20 characters' });
    .regex (/^[a - z0 - 9-]+$/, { message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' });
  custom_domain: z.string ().optional (),
  primary_color: z.string ().regex (/^#([0 - 9A - F]{6})$/i, { message: 'Must be a valid hex color' }),
  theme_preset: z.enum (['lightdarkneoncorporatestartup']),
  headline: z.string ().min (5, { message: 'Headline must be at least 5 characters' }),
  subtitle: z.string ().min (5, { message: 'Subtitle must be at least 5 characters' }),
  cta: z.string ().min (2, { message: 'CTA text must be at least 2 characters' })}),
type FormValues = z.infer < typeof form_schema>;
;
export /**
 * WhitelabelRequestForm - Function description
 */
function WhitelabelRequestForm() {
  const form = use_form < FormValues>({
    resolver: zod_resolver (form_schema),
    default_values: {
      brand_name: '',
      subdomain: '',
      custom_domain: '',
      primary_color: '#9b87f5',
      theme_preset: 'light',
      headline: 'AI Marketplace',
      subtitle: 'Find the best AI talent',
      cta: 'Get Started'}}),
  const on_submit = async (values: FormValues) => {
    try {
      // Prepare the data;
      const tenant_data = {
        brand_name: values.brand_name,
        subdomain: values.subdomain,
        custom_domain: values.custom_domain || null,
        primary_color: values.primary_color,
        theme_preset: values.theme_preset,
        landing_page_copy: {
          headline: values.headline,
          subtitle: values.subtitle,
          cta: values.cta}
      }
;
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from ('whitelabel_tenants');
        .insert (tenant_data);
        .select ();
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: 'White - label tenant created!',
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`}),
      // Reset form;
      form.reset ();
    } catch (error: any) {
      toast ({
        variant: 'destructive',
        title: 'Error creating tenant',
        description: error.message || 'Something went wrong'});
    }
  }
;
  return (
    <Card className="w - full max - w-2xl">;
      <CardHeader>;
        <CardTitle > Create White - Label Instance</CardTitle>;
        .single(),;
      ;
      if (error) throw error,;
      ;
      toast({;
        title:'White-label tenant created!',;
        description:`${values.brand_name} has been set up with subdomain ${values.subdomain}`}),;
      ;
      // Reset form;
      form.reset(),;
    } catch (error:any) {;
      toast({;
        variant:'destructive',;
        title:'Error creating tenant',;
        description:error.message || 'Something went wrong'}),;
    }
  },;
;
  return (;
    <Card className="w-full max-w-2xl">;
      <CardHeader>;
        <CardTitle>Create White-Label Instance</CardTitle>;
        <CardDescription>;
          Create a customized version of the platform for your client or partner.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
                control={form.control}
                name="brand_name";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Brand Name</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Acme AI Solutions" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;                )}
              />;
              ;
              <FormField;
                control={form.control}
                name="subdomain";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Subdomain</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center">;
                        <Input placeholder="acme" {...field} />;
              />;
              <FormField
                control={form && form.control}
                name="custom_domain"
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace.com</span>;
                      </div>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;                )}
              />;
              ;
              <FormField;
                control={form.control}
                name="custom_domain";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Custom Domain (Optional)</FormLabel>;
                    <FormControl>;
              />;
              <FormField
                control={form && form.control}
                name="primary_color"
                      <Input placeholder="marketplace.acme.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;                )}
              />;
              ;
              <FormField;
                control={form.control}
                name="primary_color";
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
              />;
              <FormField
                control={form && form.control}
                name="theme_preset"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Theme Preset</FormLabel>;
                    <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="subdomain";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Subdomain</FormLabel>;
                    <FormControl>;
                      <div className="flex items - center">;
                        <Input placeholder="acme" {...field} />;
                        <span className="ml - 2 text - muted - foreground">.ziontechmarketplace.com</span>;
                      </div>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="custom_domain";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Custom Domain (Optional)</FormLabel>;
                    <FormControl>;
                      <Input placeholder="marketplace.acme.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="primary_color";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Primary Brand Color</FormLabel>;
                    <FormControl>;
                      <div className="flex items - center gap - 2">;
                        <Input type="color" {...field} className="w - 12 h - 9 p - 1" />;
                        <Input {...field} placeholder="#9b87f5" className="flex - 1" />;
                      </div>;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="theme_preset";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Theme Preset</FormLabel>;
                    <Select onValueChange={field.on_change} default_value={field.value}>;
                  </FormItem>;                )}
              />;
              ;
              <FormField;
                control={form.control}
                name="theme_preset";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Theme Preset</FormLabel>;
                    <Select onValueChange={field.onChange} defaultValue={field.value}>;
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
                <FormField
                  control={form && form.control}
                  name="headline"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Headline</FormLabel>;
                  </FormItem>)}
              />;
              <div className="border rounded - md p - 4 space - y-4">;
                <h3 className="text - sm font - medium">Landing Page Copy</h3>;
                <FormField;
                  control={form.control}
                  name="headline";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Headline</FormLabel>;
                      <FormControl>;
                        <Input placeholder="AI Marketplace" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                />;
                <FormField
                  control={form && form.control}
                  name="subtitle"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Subtitle</FormLabel>;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name="subtitle";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Subtitle</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Find the best AI talent" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                />;
                <FormField
                  control={form && form.control}
                  name="cta"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>CTA Button Text</FormLabel>;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name="cta";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > CTA Button Text</FormLabel>;
                  </FormItem>;
                )}
              />;
              ;
              <div className="border rounded-md p-4 space-y-4">;
                <h3 className="text-sm font-medium">Landing Page Copy</h3>;
                ;
                <FormField;
                  control={form.control}
                  name="headline";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Headline</FormLabel>;
                      <FormControl>;
                        <Input placeholder="AI Marketplace" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
                  name="subtitle";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Subtitle</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Find the best AI talent" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
                  name="cta";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>CTA Button Text</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Get Started" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
                />;
              </div>;
            </div>;
            ;
            <Button type="submit" className="w-full" size="lg">;
              Create White-Label Instance;
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
      <CardFooter className="bg-muted/50 text-xs text-muted-foreground">;
        <p>;
          After creating the tenant, you must upload a logo via the tenant management dashboard.;
          DNS verification for custom domains must be completed before they can be used.;
        </p>;
      </CardFooter>;
    </Card>;
  ),; //Form schema const formSchema = z.object ({
  brand name: z.string () .min (2, {
  message: 'Brand name must be at least 2 characters' 
});
subdomain: z.string () .min (3, {
  message: 'Subdomain must be at least 3 characters' 
}) .max (20, {
  message: 'Subdomain must be at most 20 characters' 
}) .regex (/^[a-z0-9-]+$/, {
  message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' 
});
custom domain: z.string () .optional ();
type FormValues = z.infer<typeof formSchema>;
const onSubmit = async (values: FormValues) => {
  try {
  //Prepare the data //Submit to Supabase const {
  data, error 
}= await supabase .from ('whitelabel tenants') .insert (tenantData) .select () .single ();
if (error) throw error;
}

}
;

};
return (<Card className="w-full max-w-2xl" > <CardHeader> <CardTitle>Create White-Label Instance</CardTitle> <CardDescription> Create a customized version of the platform for your client or partner. </CardDescription> </CardHeader> <CardContent> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </div> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </div> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Theme Preset</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a theme" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="light" >Light</SelectItem> <SelectItem value="dark" >Dark</SelectItem> <SelectItem value="neon" >Neon</SelectItem> <SelectItem value="corporate" >Corporate</SelectItem> <SelectItem value="startup" >Startup</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <div className="border rounded-md p-4 space-y-4" > <h3 className="text-sm font-medium" >Landing Page Copy</h3> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> </div> <Button type="submit" className="w-full" size="lg" > Create White-Label Instance </Button> </form> </Form> </CardContent> <CardFooter className="bg-muted/50 text-xs text-muted-foreground" > <p> After creating the tenant, you must upload a logo via the tenant management dashboard. DNS verification for custom domains must be completed before they can be used. </p> </CardFooter> </Card>) 
}
}
}
;
}
}
;
