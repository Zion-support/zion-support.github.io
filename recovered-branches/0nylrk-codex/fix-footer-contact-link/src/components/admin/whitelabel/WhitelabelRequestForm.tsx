
<<<<<<< HEAD
import React from 'react',
import { useForm } from 'react-hook-form',
import { z } from 'zod',
import { zodResolver } from '@hookform/resolvers/zod',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { Textarea } from '@/components/ui/textarea',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { toast } from '@/hooks/use-toast',
import { supabase } from '@/integrations/supabase/client',
=======
import React from 'react';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Form schema
const _formSchema = z.object({_brand_name: z.string().min(2, _{ message: 'Brand name must be at least 2 characters'}),
  subdomain: z.string()
    .min(3, {_message: 'Subdomain must be at least 3 characters'})
    .max(20, {_message: 'Subdomain must be at most 20 characters'})
    .regex(/^[a-z0-9-]+$/, {_message: 'Subdomain can only contain lowercase letters, _numbers, _and hyphens'}),
  custom_domain: z.string().optional(),
<<<<<<< HEAD
  primary_color: z.string().regex(/^#([0-9A-F]{6})$/i, { message: 'Must be a valid hex color' }),
  theme_preset: z.enum(['lightdarkneoncorporatestartup']),
  headline: z.string().min(5, { message: 'Headline must be at least 5 characters' }),
  subtitle: z.string().min(5, { message: 'Subtitle must be at least 5 characters' }),
  cta: z.string().min(2, { message: 'CTA text must be at least 2 characters' })}),
=======
  primary_color: z.string().regex(/^#([0-9A-F]{_6})$/i, {_message: 'Must be a valid hex color'}),
  theme_preset: z.enum(['light', 'dark', 'neon', 'corporate', 'startup']),
  headline: z.string().min(5, {_message: 'Headline must be at least 5 characters'}),
  subtitle: z.string().min(5, {_message: 'Subtitle must be at least 5 characters'}),
  cta: z.string().min(2, {_message: 'CTA text must be at least 2 characters'})});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type FormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
export function WhitelabelRequestForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand_name: '',
      subdomain: '',
      custom_domain: '',
      primary_color: '#9b87f5',
      theme_preset: 'light',
      headline: 'AI Marketplace',
      subtitle: 'Find the best AI talent',
      cta: 'Get Started'}}),
=======
export function WhitelabelRequestForm() {_const _form = useForm<FormValues>({
    resolver: zodResolver(formSchema), _defaultValues: {
      brand_name: '', _subdomain: '', _custom_domain: '', _primary_color: '#9b87f5', _theme_preset: 'light', _headline: 'AI Marketplace', _subtitle: 'Find the best AI talent', _cta: 'Get Started'}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _onSubmit = async (_values: FormValues) => {_try {
      // Prepare the data
<<<<<<< HEAD
      const tenantData = {
        brand_name: values.brand_name,
        subdomain: values.subdomain,
        custom_domain: values.custom_domain || null,
        primary_color: values.primary_color,
        theme_preset: values.theme_preset,
        landing_page_copy: {
          headline: values.headline,
          subtitle: values.subtitle,
          cta: values.cta}
      },
=======
      const _tenantData = {
        brand_name: values.brand_name, _subdomain: values.subdomain, _custom_domain: values.custom_domain || null, _primary_color: values.primary_color, _theme_preset: values.theme_preset, _landing_page_copy: {
          headline: values.headline, _subtitle: values.subtitle, _cta: values.cta}
      };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Submit to Supabase
      const {_data, _error} = await supabase
        .from('whitelabel_tenants')
        .insert(tenantData)
        .select()
        .single(),
      
      if (error) throw error,
      
<<<<<<< HEAD
      toast({
        title: 'White-label tenant created!',
        description: `${values.brand_name} has been set up with subdomain ${values.subdomain}`}),
      
      // Reset form
      form.reset()
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error creating tenant',
        description: error.message || 'Something went wrong'})
=======
      toast({_title: 'White-label tenant created!', _description: `${values.brand_name} has been set up with subdomain ${_values.subdomain}`});
      
      // Reset form
      form.reset();
    } catch (error: unknown) {_toast({
        variant: 'destructive', _title: 'Error creating tenant', _description: error.message || 'Something went wrong'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <Card className=&quot;w-full max-w-2xl&quot;>
      <CardHeader>
        <CardTitle>Create White-Label Instance</CardTitle>
        <CardDescription>
          Create a customized version of the platform for your client or partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
            <div className=&quot;space-y-4&quot;>
              <FormField
                control={form.control}
                name=&quot;brand_name&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Acme AI Solutions&quot; {...field} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;subdomain&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subdomain</FormLabel>
                    <FormControl>
                      <div className=&quot;flex items-center&quot;>
                        <Input placeholder=&quot;acme&quot; {...field} />
                        <span className=&quot;ml-2 text-muted-foreground&quot;>.ziontechmarketplace.com</span>
=======
                control={_form.control}
                name="subdomain"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Subdomain</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input placeholder="acme" {_...field} />
                        <span className="ml-2 text-muted-foreground">.ziontechmarketplace.com</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;custom_domain&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Domain (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;marketplace.acme.com&quot; {...field} />
=======
                control={_form.control}
                name="custom_domain"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Custom Domain (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="marketplace.acme.com" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;primary_color&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Brand Color</FormLabel>
                    <FormControl>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Input type=&quot;color&quot; {...field} className=&quot;w-12 h-9 p-1&quot; />
                        <Input {...field} placeholder=&quot;#9b87f5&quot; className=&quot;flex-1&quot; />
=======
                control={_form.control}
                name="primary_color"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Primary Brand Color</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input type="color" {_...field} className="w-12 h-9 p-1" />
                        <Input {_...field} placeholder="#9b87f5" className="flex-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;theme_preset&quot;
                render={({ field }) => (
=======
                control={_form.control}
                name="theme_preset"
                render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormItem>
                    <FormLabel>Theme Preset</FormLabel>
                    <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder=&quot;Select a theme&quot; />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value=&quot;light&quot;>Light</SelectItem>
                        <SelectItem value=&quot;dark&quot;>Dark</SelectItem>
                        <SelectItem value=&quot;neon&quot;>Neon</SelectItem>
                        <SelectItem value=&quot;corporate&quot;>Corporate</SelectItem>
                        <SelectItem value=&quot;startup&quot;>Startup</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className=&quot;border rounded-md p-4 space-y-4&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>Landing Page Copy</h3>
                
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;headline&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;AI Marketplace&quot; {...field} />
=======
                  control={_form.control}
                  name="headline"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Headline</FormLabel>
                      <FormControl>
                        <Input placeholder="AI Marketplace" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;subtitle&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Find the best AI talent&quot; {...field} />
=======
                  control={_form.control}
                  name="subtitle"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input placeholder="Find the best AI talent" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;cta&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Get Started&quot; {...field} />
=======
                  control={_form.control}
                  name="cta"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>CTA Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Get Started" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <Button type=&quot;submit&quot; className=&quot;w-full&quot; size=&quot;lg&quot;>
              Create White-Label Instance
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className=&quot;bg-muted/50 text-xs text-muted-foreground&quot;>
        <p>
          After creating the tenant, you must upload a logo via the tenant management dashboard.
          DNS verification for custom domains must be completed before they can be used.
        </p>
      </CardFooter>
    </Card>
  )
}
