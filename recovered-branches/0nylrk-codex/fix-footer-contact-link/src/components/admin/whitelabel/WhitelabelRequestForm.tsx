
      













  }

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


      const { data, error } = await supabase;'
        .from ('whitelabel_tenants');
        .insert (tenant_data);
        .select ();
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({'
        title: 'White - label tenant created!',`
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`}),
      // Reset form;
      form.reset ();
    } catch (error: any) {}
      toast ({'
        variant: 'destructive','
        title: 'Error creating tenant','
        description: error.message || 'Something went wrong'});
    }
  }
;

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

            <div className="space-y-4">;

              <FormField;
                control={form.control}
                name="brand_name";


                    </FormControl>;
                    <FormMessage />;

                    <FormControl>;"
                      <div className="flex items-center gap-2">;"
                        <Input type="color" {...field} className="w-12 h-9 p-1" />;"
                        <Input {...field} placeholder="#9b87f5" className="flex-1" />;
                      </div>;
                    </FormControl>;
                    <FormMessage />;

                  name="headline"
                      <FormControl>;"
                        <Input placeholder="AI Marketplace" {...field} />;
                      </FormControl>;

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
                ;
                <FormField;
                  control={form.control}
                  name="cta";
                  render={({ field }) => (;
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
                      <FormMessage />;
                    </FormItem>;
                  )}
                />;
              </div>;
            </div>;
            ;
            <Button type="submit" className="w-full" size="lg">;
              Create White-Label Instance;
      <CardFooter className="bg-muted/50 text-xs text-muted-foreground">;
        <p>;



}




