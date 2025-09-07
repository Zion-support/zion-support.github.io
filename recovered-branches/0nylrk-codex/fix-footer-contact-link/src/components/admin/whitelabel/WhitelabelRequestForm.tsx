


          headline: values.headline;,
  subtitle: values.subtitle;
          cta: values.cta}
      }
          headline: values.headline,
          subtitle: values.subtitle,
          cta: values.cta};
      };
      


      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants')
        .insert(tenantData)
        .select()
        .single();
      if (error) throw error;
      toast({
        title: 'White-label tenant created!,)
  description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`})
      // Reset form;
      form.reset()
    } catch (error: any) {
        variant: 'destructive,
  title: 'Error creating tenant)
        description: error.message |'Something went wrong'})
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {toast} from '@/hooks/use-toast';
import {supabase} from '@/integrations/supabase/client';



import React from 'react',;
import { useForm } from 'react-hook-form',;
import { z } from 'zod',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { Textarea } from '@/components/ui/textarea',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form',;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
// Form schema;
const formSchema = z && z.object({;)
  brand_name: z && z.string().min(2, { message: 'Brand name must be at least 2 characters' }),;
  subdomain: z && z.string();
    .min(3, { message: 'Subdomain must be at least 3 characters' });
    .max(20, { message: 'Subdomain must be at most 20 characters' });
    .regex(/^[a-z0-9-]+$/, { message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' });
  custom_domain: z && z.string().optional(),;
  primary_color: z && z.string().regex(/^#([0-9A-F]{6})$/i, { message: 'Must be a valid hex color' }),;
  theme_preset: z && z.enum(['lightdarkneoncorporatestartup']),;
  headline: z && z.string().min(5, { message: 'Headline must be at least 5 characters' }),;
  subtitle: z && z.string().min(5, { message: 'Subtitle must be at least 5 characters' }),;
  cta: z && z.string().min(2, { message: 'CTA text must be at least 2 characters' })}),;
type FormValues = z && z.infer<typeof formSchema>;
</typeof>
  const form = useForm<FormValues>({;

    <Card className="w-full max-w-2xl">"

      <CardHeader>

        <CardTitle>Create White-Label Instance
        <CardDescription>

        
      
      <CardContent>

        <Form {...form}>
)"
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">"
</form>"
            <div className="space-y-4">"
</div>"
    <Card className="w-full max-w-2xl">;"

      <CardHeader>;

        <CardTitle>Create White-Label Instance;
type FormValues = z.infer < typeof form_schema>;
;
export /**
 * WhitelabelRequestForm - Function description;
 */
function WhitelabelRequestForm() {
  const form = use_form < FormValues>({)
    resolver: zod_resolver (form_schema),
    default_values: {,"
  brand_name: ,
      subdomain: ,
      custom_domain: ,
      primary_color: '#9b87f5',
      theme_preset: 'light',
      headline: 'AI Marketplace',
      subtitle: 'Find the best AI talent',
      cta: 'Get Started'}}),
  const on_submit = async (values: FormValues) => {
    try {
  // TODO: Implement
      // Prepare the data;
      const tenant_data = {
        brand_name: values.brand_name,
        subdomain: values.subdomain,
        custom_domain: values.custom_domain || null,
        primary_color: values.primary_color,
        theme_preset: values.theme_preset,
        landing_page_copy: {,
      // Submit to Supabase;
        .from ('whitelabel_tenants');
        .insert (tenant_data);
        .select ();
        .single ();
      // Check condition;
if (throw error) {
  $2;
      toast ({
        title: 'White - label tenant created!',')`;
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`}),
      // Reset form;
      form.reset ();
        variant: 'destructive',
        title: 'Error creating tenant',')
        description: error.message || 'Something went wrong'});
  return (
    <Card className="w - full max - w-2xl">;"


        <CardTitle > Create White - Label Instance;"


        <CardDescription>;

      <CardContent>;

        <Form {...form}>;

          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
            <div className="space - y-4">;"
</div>
              <FormField;
                control={form.control}"
                name="brand_name";"
                render={({ field }) => (

                  <FormItem>;

                    <FormLabel > Brand Name;
                    <FormControl>;
"
                      <Input placeholder="Acme AI Solutions" {...field} />;"

                    <FormMessage />;

                control={form && form.control}"
                name="subdomain"")
                render={({ field }) => (;


                    <FormLabel>Subdomain;
                      <div className="flex items-center">;"
                        <Input placeholder="acme" {...field} />;"
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace && ziontechmarketplace.com</span>;"
                      </div>;

                name="custom_domain""

                  <FormItem>

                    <FormLabel>Subdomain
                    <FormControl>
                      <div className="flex items-center">"
                        <Input placeholder="acme" {...field} />"
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace.com</span>"
                    
                    <FormMessage />

                  
                name="custom_domain"")

)
                    <FormLabel>Custom Domain (Optional);
                      <Input placeholder="marketplace && marketplace.acme.com" {...field} />;"


                name="primary_color""


                    <FormLabel>Primary Brand Color;
                      <div className="flex items-center gap-2">;"
                        <Input type="color" {...field} className="w-12 h-9 p-1" />;"
                        <Input {...field} placeholder="#9b87f5" className="flex-1" />;"


                name="theme_preset"")


                    <FormLabel > Subdomain;
                      <div className="flex items - center">;"
                        <span className="ml - 2 text - muted - foreground">.ziontechmarketplace.com</span>;"
                  )}
                name="custom_domain";"

                    <FormLabel > Custom Domain (Optional);
                      <Input placeholder="marketplace.acme.com" {...field} />;"


                name="primary_color";"


                    <FormLabel > Primary Brand Color;
                      <div className="flex items - center gap - 2">;"
                        <Input type="color" {...field} className="w - 12 h - 9 p - 1" />;"
                        <Input {...field} placeholder="#9b87f5" className="flex - 1" />;"

                name="theme_preset";"


                    <FormLabel > Theme Preset;
                    <Select onValueChange={field.on_change} default_value={field.value}>;
                  ;                )}


                    <FormLabel>Theme Preset;
                    <Select onValueChange={field.onChange} defaultValue={field.value}>;


                        <SelectTrigger>;
                          <SelectValue placeholder="Select a theme" />;"

                      <SelectContent>;
                        <SelectItem value="light">Light;""
                        <SelectItem value="dark">Dark;""
                        <SelectItem value="neon">Neon;""
                        <SelectItem value="corporate">Corporate;""
                        <SelectItem value="startup">Startup;"
              <div className="border rounded-md p-4 space-y-4">;"
                <h3 className="text-sm font-medium">Landing Page Copy</h3>;"
                  name="headline""
                        <Input placeholder="AI Marketplace" {...field} />;"


                  name="subtitle""
                        <Input placeholder="Find the best AI talent" {...field} />;"


                  name="cta";")


                      <FormLabel > CTA Button Text;
                  ;"
                  name="headline";")


                      <FormLabel>Headline;

                    ;                  )}
                  name="subtitle";"


                      <FormLabel>Subtitle;

                  name="cta";"


                      <FormLabel>CTA Button Text;
                        <Input placeholder="Get Started" {...field} />;"


            </div>;"
            <Button type="submit" className="w-full" size="lg">;"

          </form>;
      <CardFooter className="bg - muted / 50 text - xs text - muted - foreground">;"

        <p>;
</p>
        </p>;
      ;)
    );
type FormValues = z.infer<typeof formSchema>;
</typeof>"
return (<Card className="w-full max-w-2xl" > <CardHeader> <CardTitle>Create White-Label Instance <CardDescription> Create a customized version of the platform for your client or partner.   <CardContent>  <FormMessage /> )"

}/> <FormField </div>  <FormMessage /> ) 

}/> <FormField  <FormMessage /> ) 


}/> <FormField <FormItem> <FormLabel>Theme Preset <Select onValueChange= {
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a theme" />   <SelectContent> <SelectItem value="light" >Light <SelectItem value="dark" >Dark <SelectItem value="neon" >Neon <SelectItem value="corporate" >Corporate <SelectItem value="startup" >Startup   <FormMessage /> )""
}/> <div className="border rounded-md p-4 space-y-4" > <h3 className="text-sm font-medium" >Landing Page Copy</h3> <FormField  <FormMessage /> )"

}/> </div> </div> <Button type="submit" className="w-full" size="lg" > Create White-Label Instance  </form>   <CardFooter className="bg-muted/50 text-xs text-muted-foreground" > <p> After creating the tenant, you must upload a logo via the tenant management dashboard. DNS verification for custom domains must be completed before they can be used. </p>  )""`;