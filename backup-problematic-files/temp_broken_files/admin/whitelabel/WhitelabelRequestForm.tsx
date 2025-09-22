
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
;
// Form schema;
const formSchema = z.object({;
  brand_name:z.string().min(2, { message:'Brand name must be at least 2 characters' }),;
  subdomain:z.string();
    .min(3, { message:'Subdomain must be at least 3 characters' });
    .max(20, { message:'Subdomain must be at most 20 characters' });
    .regex(/^[a-z0-9-]+$/, { message:'Subdomain can only contain lowercase letters, numbers, and hyphens' }),;
  custom_domain:z.string().optional(),;
  primary_color:z.string().regex(/^#([0-9A-F]{6})$/i, { message:'Must be a valid hex color' }),;
  theme_preset:z.enum(['lightdark', 'neoncorporate', 'startup']),;
  headline:z.string().min(5, { message:'Headline must be at least 5 characters' }),;
  subtitle:z.string().min(5, { message:'Subtitle must be at least 5 characters' }),;
  cta:z.string().min(2, { message:'CTA text must be at least 2 characters' })}),;
;
type FormValues = z.infer<typeof formSchema>,;
;
export function WhitelabelRequestForm() {;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      brand_name:'',;
      subdomain:'',;
      custom_domain:'',;
      primary_color:'#9b87f5',;
      theme_preset:'light',;
      headline:'AI Marketplace',;
      subtitle:'Find the best AI talent',;
      cta:'Get Started'}}),;
  ;
  const onSubmit = async (values:FormValues) => {;
    try {;
      // Prepare the data;
      const tenantData = {;
        brand_name:values.brand_name,;
        subdomain:values.subdomain,;
        custom_domain:values.custom_domain || null,;
        primary_color:values.primary_color,;
        theme_preset:values.theme_preset,;
        landing_page_copy:{;
          headline:values.headline,;
          subtitle:values.subtitle,;
          cta:values.cta}
      },;
      ;
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