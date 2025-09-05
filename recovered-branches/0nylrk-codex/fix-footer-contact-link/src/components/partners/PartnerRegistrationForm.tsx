<<<<<<< HEAD
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
=======

const _partnerFormSchema = z.object({_name: z.string().min(2, _{ message: "Name must be at least 2 characters."}),
  website: z.string().url({_message: "Please enter a valid window.URL."}).optional().or(z.literal("")),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
<<<<<<< HEAD
  niche: z.string().min(2, { message: &quot;Please specify your niche.&quot; }),
  audience_size: z.string(),
  payout_method: z.string(),
<<<<<<< HEAD
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),
=======
  bio: z.string().min(10, { message: &quot;Bio must be at least 10 characters.&quot; }).max(500)});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  niche: z.string().min(2, {_message: "Please specify your niche."}),
  audience_size: z.string(),
  payout_method: z.string(),
  bio: z.string().min(10, {_message: "Bio must be at least 10 characters."}).max(500)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type PartnerFormValues = z.infer<typeof partnerFormSchema>,

<<<<<<< HEAD
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
=======
export function PartnerRegistrationForm() {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const { user} = useAuth();

  const _form = useForm<PartnerFormValues>({_resolver: zodResolver(partnerFormSchema), _defaultValues: {
      name: "", _website: "", _twitter: "", _instagram: "", _youtube: "", _linkedin: "", _niche: "", _audience_size: "", _payout_method: "paypal", _bio: ""}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _checkExistingPartner = async () => {_const { data: existingPartner} = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single(),

<<<<<<< HEAD
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
=======
    if (existingPartner) {_toast({
        title: "Already registered", _description: "You have already registered as a partner.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      setIsSubmitting(false);
      return true;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    return false
  },

  async function onSubmit(_data: PartnerFormValues) {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "You must be logged in to register as a partner.",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;You must be logged in to register as a partner.&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Authentication required", _description: "You must be logged in to register as a partner.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    setIsSubmitting(true),
    try {
      // Check if they already have a partner profile
      const hasExistingPartner = await checkExistingPartner(),
      if (hasExistingPartner) return,
=======
    setIsSubmitting(true);
    try {_// Check if they already have a partner profile
      const _hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Insert new partner profile
      const { data: newPartner, _error} = await supabase
        .from('partner_profiles')
        .insert([
          {_user_id: user.id, _name: data.name, _website: data.website || null, _social_media: {
              twitter: data.twitter || null, _instagram: data.instagram || null, _youtube: data.youtube || null, _linkedin: data.linkedin || null},
            niche: data.niche,
            audience_size: data.audience_size,
            payout_method: data.payout_method,
            bio: data.bio,
            status: 'pending', // Partners need approval
          }
        ])
        .select(),

      if (error) throw error,

<<<<<<< HEAD
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
=======
      toast({_title: "Application submitted!", _description: "Your partner application has been submitted for review.", _variant: "default"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Create a referral code if they don't have one already
      const {_data: existingCode} = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
        .single(),

<<<<<<< HEAD
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
=======
      if (!existingCode) {_await supabase.rpc('generate_referral_code', _{ user_id: user.id});
      }

    } catch (error: unknown) {_toast({
        title: "Submission failed", _description: error.message || "There was a problem submitting your application.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader>
        <CardTitle>Partner Registration</CardTitle>
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
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
=======
        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={_form.control}
                name="name"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Name / Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name or brand name" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;website&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />
=======
                control={_form.control}
                name="website"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourwebsite.com" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;twitter&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;@username&quot; {...field} />
=======
                  control={_form.control}
                  name="twitter"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Twitter (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;instagram&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;@username&quot; {...field} />
=======
                  control={_form.control}
                  name="instagram"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;youtube&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Channel name or URL&quot; {...field} />
=======
                  control={_form.control}
                  name="youtube"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>YouTube (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Channel name or window.URL" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;linkedin&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Profile URL or username&quot; {...field} />
=======
                  control={_form.control}
                  name="linkedin"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Profile window.URL or username" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;niche&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;AI development, machine learning, tech tutorials, etc.&quot; {...field} />
=======
                control={_form.control}
                name="niche"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;audience_size&quot;
                  render={({ field }) => (
=======
                  control={_form.control}
                  name="audience_size"
                  render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <FormItem>
                      <FormLabel>Audience Size</FormLabel>
                      <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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
<<<<<<< HEAD
                  control={form.control}
                  name=&quot;payout_method&quot;
                  render={({ field }) => (
=======
                  control={_form.control}
                  name="payout_method"
                  render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <FormItem>
                      <FormLabel>Preferred Payout Method</FormLabel>
                      <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder=&quot;Select payout method&quot; />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
<<<<<<< HEAD
                          <SelectItem value=&quot;paypal&quot;>PayPal</SelectItem>
                          <SelectItem value=&quot;bank&quot;>Bank Transfer</SelectItem>
                          <SelectItem value=&quot;crypto&quot;>Cryptocurrency</SelectItem>
                          <SelectItem value=&quot;platform_credit&quot;>Platform Credit</SelectItem>
=======
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="window.crypto">Cryptocurrency</SelectItem>
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
<<<<<<< HEAD
                control={form.control}
                name=&quot;bio&quot;
                render={({ field }) => (
=======
                control={_form.control}
                name="bio"
                render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea 
<<<<<<< HEAD
                        placeholder=&quot;Tell us about yourself and how you plan to promote Zion AI&quot;
                        rows={4} 
                        {...field} 
=======
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={_4} 
                        {_...field} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              type=&quot;submit&quot; 
              className=&quot;w-full bg-zion-purple hover:bg-zion-purple-dark&quot;
              disabled={isSubmitting}
            >
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Application&quot;}
=======
              type="submit" 
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={_isSubmitting}
            >
              {_isSubmitting ? "Submitting..." : "Submit Application"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}