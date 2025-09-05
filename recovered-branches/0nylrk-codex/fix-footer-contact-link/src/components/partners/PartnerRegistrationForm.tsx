<<<<<<< HEAD
import { useState } from "react",;
import { z } from "zod",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
;
const partnerFormSchema = z.object({;
  name:z.string().min(2, { message:"Name must be at least 2 characters." }),;
  website:z.string().url({ message:"Please enter a valid URL." }).optional().or(z.literal("")),;
  twitter:z.string().optional(),;
  instagram:z.string().optional(),;
  youtube:z.string().optional(),;
  linkedin:z.string().optional(),;
  niche:z.string().min(2, { message:"Please specify your niche." }),;
  audience_size:z.string(),;
  payout_method:z.string(),;
  bio:z.string().min(10, { message:"Bio must be at least 10 characters." }).max(500)}),;
;
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;
;
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { user } = useAuth(),;
;
  const form = useForm<PartnerFormValues>({;
    resolver:zodResolver(partnerFormSchema),;
    defaultValues:{;
      name:"",;
      website:"",;
      twitter:"",;
      instagram:"",;
      youtube:"",;
      linkedin:"",;
      niche:"",;
      audience_size:"",;
      payout_method:"paypal",;
      bio:""}}),;
;
  const checkExistingPartner = async () => {;
    const { data:existingPartner } = await supabase;
      .from('partner_profiles');
      .select('id');
      .eq('user_id', user.id);
      .single(),;
;
    if (existingPartner) {;
      toast({;
        title:"Already registered",;
        description:"You have already registered as a partner.",;
        variant:"destructive"}),;
      setIsSubmitting(false),;
      return true,;
    }
    return false,;
  },;
;
  async function onSubmit(data:PartnerFormValues) {;
    if (!user) {;
      toast({;
        title:"Authentication required",;
        description:"You must be logged in to register as a partner.",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsSubmitting(true),;
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner(),;
      if (hasExistingPartner) return,;
;
      // Insert new partner profile;
      const { data:newPartner, error } = await supabase;
        .from('partner_profiles');
        .insert([;
          {;
            user_id:user.id,;
            name:data.name,;
            website:data.website || null,;
            social_media:{;
              twitter:data.twitter || null,;
              instagram:data.instagram || null,;
              youtube:data.youtube || null,;
              linkedin:data.linkedin || null},;
            niche:data.niche,;
            audience_size:data.audience_size,;
            payout_method:data.payout_method,;
            bio:data.bio,;
            status:'pending', // Partners need approval;
          }
        ]);
        .select(),;
;
      if (error) throw error,;
;
      toast({;
        title:"Application submitted!",;
        description:"Your partner application has been submitted for review.",;
        variant:"default"}),;
;
      // Create a referral code if they don't have one already;
      const { data:existingCode } = await supabase;
        .from('referral_codes');
        .select('code');
        .eq('user_id', user.id);
        .single(),;
;
      if (!existingCode) {;
        await supabase.rpc('generate_referral_code', { user_id:user.id }),;
      }
;
    } catch (error:any) {;
      console.error('Error submitting partner application:', error),;
      toast({;
        title:"Submission failed",;
        description:error.message || "There was a problem submitting your application.",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
=======
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
import { supabase } from "@/integrations/supabase/client",const partnerFormSchema = z.object({
  name: z.string().min(2, { message: &quot;Name must be at least 2 characters.&quot; }),
  website: z.string().url({ message: &quot;Please enter a valid URL.&quot; }).optional().or(z.literal("&quot;)),

const _partnerFormSchema = z.object({_name: z.string().min(2, _{ message: "Name must be at least 2 characters."}),
  website: z.string().url({_message: "Please enter a valid window.URL."}).optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
  niche: z.string().min(2, { message: &quot;Please specify your niche.&quot; }),
  audience_size: z.string(),
  payout_method: z.string(),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),  niche: z.string().min(2, {_message: "Please specify your niche."}),
  audience_size: z.string(),
  payout_method: z.string(),
  bio: z.string().min(10, {_message: "Bio must be at least 10 characters."}).max(500)});

type PartnerFormValues = z.infer<typeof partnerFormSchema>,

export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: "",
      website: "",
      twitter: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      niche: "",
      audience_size: "",
      payout_method: "paypal",
      bio: ""}}),export function PartnerRegistrationForm() {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const { user} = useAuth();

  const _form = useForm<PartnerFormValues>({_resolver: zodResolver(partnerFormSchema), _defaultValues: {
      name: "", _website: "", _twitter: "", _instagram: "", _youtube: "", _linkedin: "", _niche: "", _audience_size: "", _payout_method: "paypal", _bio: ""}});

  const _checkExistingPartner = async () => {_const { data: existingPartner} = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single(),

    if (existingPartner) {
      toast({
        title: "Already registered",
        description: "You have already registered as a partner.",
        variant: "destructive"}),
      setIsSubmitting(false),
      return true      setIsSubmitting(false);
      return true;
    }
    return false
  },

  async function onSubmit(_data: PartnerFormValues) {_if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to register as a partner.",
        variant: "destructive"}),
      return      return;
    }

    setIsSubmitting(true),
    try {
      // Check if they already have a partner profile
      const hasExistingPartner = await checkExistingPartner(),
      if (hasExistingPartner) return,
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

      toast({
        title: "Application submitted!",
        description: "Your partner application has been submitted for review.",
        variant: "default"}),      toast({_title: "Application submitted!", _description: "Your partner application has been submitted for review.", _variant: "default"});

      // Create a referral code if they don't have one already
      const {_data: existingCode} = await supabase
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
        title: "Submission failed",
        description: error.message || "There was a problem submitting your application.",
        variant: "destructive"})    } finally {
      setIsSubmitting(false)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
      if (!existingCode) {_await supabase.rpc('generate_referral_code', _{ user_id: user.id});
      }

    } catch (error: unknown) {_toast({
        title: "Submission failed", _description: error.message || "There was a problem submitting your application.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  }
<<<<<<< HEAD
;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
                control={form.control}
                name="name";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Name / Brand</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
=======

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
                      <Input placeholder=&quot;Your name or brand name&quot; {...field} />                    </FormControl>
                    <FormMessage />
                  </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                )}
              />;
;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name="website";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;
                      <Input placeholder="https://yourwebsite.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="twitter";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
=======
                name=&quot;website&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />                    </FormControl>
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
                        <Input placeholder=&quot;@username&quot; {...field} />                      </FormControl>
                      <FormMessage />
                    </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  )}
                />;
                ;
                <FormField;
                  control={form.control}
<<<<<<< HEAD
                  name="instagram";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
                />;
              </div>;
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="youtube";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Channel name or URL" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
=======
                  name=&quot;instagram&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;@username&quot; {...field} />                      </FormControl>
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
                        <Input placeholder=&quot;Channel name or URL&quot; {...field} />                      </FormControl>
                      <FormMessage />
                    </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  )}
                />;
                ;
                <FormField;
                  control={form.control}
<<<<<<< HEAD
                  name="linkedin";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
=======
                  name=&quot;linkedin&quot;
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder=&quot;Profile URL or username&quot; {...field} />                      </FormControl>
                      <FormMessage />
                    </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  )}
                />;
              </div>;
;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name="niche";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Your Niche</FormLabel>;
                    <FormControl>;
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      What topics do you focus on in your content?;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="audience_size";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select onValueChange={field.onChange} defaultValue={field.value}>;
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue placeholder="Select audience size" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
                          <SelectItem value="under1k">Under 1,000</SelectItem>;
                          <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>;
                          <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>;
                          <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>;
                          <SelectItem value="over100k">Over 100,000</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>;
=======
                name=&quot;niche&quot;
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder=&quot;AI development, machine learning, tech tutorials, etc.&quot; {...field} />                    </FormControl>
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
                  render={({ field }) => (                    <FormItem>
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  )}
                />;
                ;
                <FormField;
                  control={form.control}
<<<<<<< HEAD
                  name="payout_method";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
                      <Select onValueChange={field.onChange} defaultValue={field.value}>;
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue placeholder="Select payout method" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
                          <SelectItem value="paypal">PayPal</SelectItem>;
                          <SelectItem value="bank">Bank Transfer</SelectItem>;
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>;
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>;
=======
                  name=&quot;payout_method&quot;
                  render={({ field }) => (                    <FormItem>
                      <FormLabel>Preferred Payout Method</FormLabel>
                      <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder=&quot;Select payout method&quot; />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value=&quot;paypal&quot;>PayPal</SelectItem>
                          <SelectItem value=&quot;bank&quot;>Bank Transfer</SelectItem>
                          <SelectItem value=&quot;crypto&quot;>Cryptocurrency</SelectItem>
                          <SelectItem value=&quot;platform_credit&quot;>Platform Credit</SelectItem>                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  )}
                />;
              </div>;
;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name="bio";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;
                      <Textarea ;
                        placeholder="Tell us about yourself and how you plan to promote Zion AI";
                        rows={4} ;
                        {...field} ;
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit:500 characters;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;
;
            <Button ;
              type="submit" ;
              className="w-full bg-zion-purple hover:bg-zion-purple-dark";
              disabled={isSubmitting}
            >;
              {isSubmitting ? "Submitting..." :"Submit Application"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  ),;
=======
                name=&quot;bio&quot;
                render={({ field }) => (                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder=&quot;Tell us about yourself and how you plan to promote Zion AI&quot;
                        rows={4} 
                        {...field}                       />
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
              {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Application&quot;}            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}