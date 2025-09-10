
          headline: values.headline
          subtitle: values.subtitle
          cta: values.cta}
      }      // Submit to Supabase
      const { data, error } = await supabase

        .from('whitelabel_tenants')
        .insert(tenantData)
        .select()
        .single();
      if (error) throw error;
      toast({'
        title: 'White-label tenant created!'
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`})
      // Reset form;
      form.reset()
    } catch (error: any) {}
      toast({'
        variant: 'destructive''
        title: 'Error creating tenant''
        description: error.message |'Something went wrong'})
  };
    }

  };

        <CardDescription>;
          Create a customized version of the platform for your client or partner.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;

          <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
                control={form.control}
                name="brand_name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Brand Name</FormLabel>;                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Custom Domain (Optional)</FormLabel>;
                    <FormControl>;
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Primary Brand Color</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Get Started" {...field} />;
                      </FormControl>;
                      <FormMessage />;        <p>;
          After creating the tenant, you must upload a logo via the tenant management dashboard.;
          DNS verification for custom domains must be completed before they can be used.;
        </p>;
      </CardFooter>;

    </Card>);
}
