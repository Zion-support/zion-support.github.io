<<<<<<< HEAD
import { useState } from "react",
import { z } from "zod",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
=======
import { useState } from &quot;react&quot;;
import { z } from &quot;zod&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const partnerFormSchema = z.object({
  name: z.string().min(2, { message: &quot;Name must be at least 2 characters.&quot; }),
  website: z.string().url({ message: &quot;Please enter a valid URL.&quot; }).optional().or(z.literal("&quot;)),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
  niche: z.string().min(2, { message: &quot;Please specify your niche.&quot; }),
  audience_size: z.string(),
  payout_method: z.string(),
<<<<<<< HEAD
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),
=======
  bio: z.string().min(10, { message: &quot;Bio must be at least 10 characters.&quot; }).max(500)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

type PartnerFormValues = z.infer<typeof partnerFormSchema>,

export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
<<<<<<< HEAD
      name: "",
      website: "",
      twitter: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      niche: "",
      audience_size: "",
      payout_method: "paypal",
      bio: ""}}),
=======
      name: "&quot;,
      website: "&quot;,
      twitter: "&quot;,
      instagram: "&quot;,
      youtube: "&quot;,
      linkedin: "&quot;,
      niche: "&quot;,
      audience_size: "&quot;,
      payout_method: &quot;paypal&quot;,
      bio: "&quot;}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const checkExistingPartner = async () => {
    const { data: existingPartner } = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single(),

    if (existingPartner) {
      toast({
<<<<<<< HEAD
        title: "Already registered",
        description: "You have already registered as a partner.",
        variant: "destructive"}),
      setIsSubmitting(false),
      return true
=======
        title: &quot;Already registered&quot;,
        description: &quot;You have already registered as a partner.&quot;,
        variant: &quot;destructive&quot;});
      setIsSubmitting(false);
      return true;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    return false
  },

  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "You must be logged in to register as a partner.",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;You must be logged in to register as a partner.&quot;,
        variant: &quot;destructive&quot;});
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),
    try {
      // Check if they already have a partner profile
      const hasExistingPartner = await checkExistingPartner(),
      if (hasExistingPartner) return,

      // Insert new partner profile
      const { data: newPartner, error } = await supabase
        .from('partner_profiles')
        .insert([
          {
            user_id: user.id,
            name: data.name,
            website: data.website || null,
            social_media: {
              twitter: data.twitter || null,
              instagram: data.instagram || null,
              youtube: data.youtube || null,
              linkedin: data.linkedin || null},
            niche: data.niche,
            audience_size: data.audience_size,
            payout_method: data.payout_method,
            bio: data.bio,
            status: 'pending', // Partners need approval
          }
        ])
        .select(),

      if (error) throw error,

      toast({
<<<<<<< HEAD
        title: "Application submitted!",
        description: "Your partner application has been submitted for review.",
        variant: "default"}),
=======
        title: &quot;Application submitted!&quot;,
        description: &quot;Your partner application has been submitted for review.&quot;,
        variant: &quot;default&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      // Create a referral code if they don't have one already
      const { data: existingCode } = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
        .single(),

      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }

    } catch (error: any) {
      console.error('Error submitting partner application:', error),
      toast({
<<<<<<< HEAD
        title: "Submission failed",
        description: error.message || "There was a problem submitting your application.",
        variant: "destructive"})
=======
        title: &quot;Submission failed&quot;,
        description: error.message || &quot;There was a problem submitting your application.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader>
        <CardTitle>Partner Registration</CardTitle>
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
            <div className=&quot;space-y-4&quot;>
              <FormField
                control={form.control}
                name=&quot;name&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name / Brand</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;Your name or brand name&quot; {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name=&quot;website&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
                <FormField
                  control={form.control}
                  name=&quot;twitter&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;@username&quot; {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name=&quot;instagram&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;@username&quot; {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
                <FormField
                  control={form.control}
                  name=&quot;youtube&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Channel name or URL&quot; {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name=&quot;linkedin&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Profile URL or username&quot; {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name=&quot;niche&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;AI development, machine learning, tech tutorials, etc.&quot; {...field} />
                    </FormControl>
                    <FormDescription>
                      What topics do you focus on in your content?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
                <FormField
                  control={form.control}
                  name=&quot;audience_size&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audience Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder=&quot;Select audience size&quot; />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value=&quot;under1k&quot;>Under 1,000</SelectItem>
                          <SelectItem value=&quot;1k-10k&quot;>1,000 - 10,000</SelectItem>
                          <SelectItem value=&quot;10k-50k&quot;>10,000 - 50,000</SelectItem>
                          <SelectItem value=&quot;50k-100k&quot;>50,000 - 100,000</SelectItem>
                          <SelectItem value=&quot;over100k&quot;>Over 100,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name=&quot;payout_method&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Payout Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder=&quot;Select payout method&quot; />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value=&quot;paypal&quot;>PayPal</SelectItem>
                          <SelectItem value=&quot;bank&quot;>Bank Transfer</SelectItem>
                          <SelectItem value=&quot;crypto&quot;>Cryptocurrency</SelectItem>
                          <SelectItem value=&quot;platform_credit&quot;>Platform Credit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name=&quot;bio&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder=&quot;Tell us about yourself and how you plan to promote Zion AI&quot;
                        rows={4} 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Limit: 500 characters
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type=&quot;submit&quot; 
              className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark&quot;
              disabled={isSubmitting}
            >
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Application&quot;}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}