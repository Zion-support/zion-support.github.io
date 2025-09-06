
import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/hooks/use-toast";
import {useAuth} from "@/hooks/useAuth";
import {supabase} from "@/integrations/supabase/client";
<<<<<<< HEAD
const partnerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." })
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal(""))
  twitter: z.string().optional()
  instagram: z.string().optional()
  youtube: z.string().optional()
  linkedin: z.string().optional()
  niche: z.string().min(2, { message: "Please specify your niche." })
  audience_size: z.string()
  payout_method: z.string()
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)})
type PartnerFormValues = z.infer<typeof partnerFormSchema>;
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema)
    defaultValues: {
      name: ""
      website: ""
      twitter: ""
      instagram: ""
      youtube: ""
      linkedin: ""
      niche: ""
      audience_size: ""
      payout_method: "paypal"
      bio: ""}})
  const checkExistingPartner = async () => {
    const { data: existingPartner } = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single();
    if (existingPartner) {
      toast({
        title: "Already registered"
        description: "You have already registered as a partner."
        variant: "destructive"})
=======
const partnerFormSchema = z && z.object({;
  name: z && z.string().min(2, { message: "Name must be at least 2 characters." }),;
  website: z && z.string().url({ message: "Please enter a valid URL." }).optional().or(z && z.literal("")),;
  twitter: z && z.string().optional(),;
  instagram: z && z.string().optional(),;
  youtube: z && z.string().optional(),;
  linkedin: z && z.string().optional(),;
  niche: z && z.string().min(2, { message: "Please specify your niche." }),;
  audience_size: z && z.string(),;
  payout_method: z && z.string(),;
  bio: z && z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),;

type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;

export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const form = useForm<PartnerFormValues>({;
    resolver: zodResolver(partnerFormSchema),;
    defaultValues: {;
      name: "",;
      website: "",;
      twitter: "",;
      instagram: "",;
      youtube: "",;
      linkedin: "",;
      niche: "",;
      audience_size: "",;
      payout_method: "paypal",;
      bio: ""}}),;

  const checkExistingPartner = async () => {;
    const { data: existingPartner } = await supabase;
      .from('partner_profiles');
      .select('id');
      .eq('user_id', user && user.id);
      .single();

    if (existingPartner) {;
      toast({;
        title: "Already registered",;
        description: "You have already registered as a partner.",;
        variant: "destructive"}),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsSubmitting(false);
      return true;
    }
<<<<<<< HEAD
    return false
  }
  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast({
        title: "Authentication required"
        description: "You must be logged in to register as a partner."
        variant: "destructive"})
      return
=======
    return false;
  };

  async function onSubmit(): any (data: PartnerFormValues) {;
    if (!user) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to register as a partner.",;
        variant: "destructive"}),;
      return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    setIsSubmitting(true);
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
<<<<<<< HEAD
      // Insert new partner profile
      const { data: newPartner, error } = await supabase
        .from('partner_profiles')
        .insert([
          {
            user_id: user.id
            name: data.name
            website: data.website |null
            social_media: {
              twitter: data.twitter |null
              instagram: data.instagram |null
              youtube: data.youtube |null
              linkedin: data.linkedin |null}
            niche: data.niche
            audience_size: data.audience_size
            payout_method: data.payout_method
            bio: data.bio
            status: 'pending', // Partners need approval
=======

      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;
        .from('partner_profiles');
        .insert([;
          {;
            user_id: user && user.id,;
            name: data && data.name,;
            website: data && data.website || null,;
            social_media: {;
              twitter: data && data.twitter || null,;
              instagram: data && data.instagram || null,;
              youtube: data && data.youtube || null,;
              linkedin: data && data.linkedin || null},;
            niche: data && data.niche,;
            audience_size: data && data.audience_size,;
            payout_method: data && data.payout_method,;
            bio: data && data.bio,;
            status: 'pending', // Partners need approval;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
        ]);
        .select();
      if (error) throw error;
<<<<<<< HEAD
      toast({
        title: "Application submitted!"
        description: "Your partner application has been submitted for review."
        variant: "default"})
      // Create a referral code if they don't have one already
      const { data: existingCode } = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
        .single();
      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }
    } catch (error: any) {
      console.error('Error submitting partner application:', error);
      toast({
        title: "Submission failed"
        description: error.message |"There was a problem submitting your application."

        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
=======

      toast({;
        title: "Application submitted!",;
        description: "Your partner application has been submitted for review.",;
        variant: "default"}),;

      // Create a referral code if they don't have one already;
      const { data: existingCode } = await supabase;
        .from('referral_codes');
        .select('code');
        .eq('user_id', user && user.id);
        .single();

      if (!existingCode) {;
        await supabase && supabase.rpc('generate_referral_code', { user_id: user && user.id });
      }

    } catch (error: any) {;
      console && console.error('Error submitting partner application:', error);
      toast({;
        title: "Submission failed",;
        description: error && error.message || "There was a problem submitting your application.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField
                control={form && form.control}
                name="name"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Name / Brand</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
<<<<<<< HEAD
              />
=======
              />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <FormField
                control={form && form.control}
                name="website"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
<<<<<<< HEAD
              />
              <div className="grid sm:grid-cols-2 gap-4">
=======
              />;

              <div className="grid sm:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="twitter"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
<<<<<<< HEAD
                />
=======
                />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="instagram"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
<<<<<<< HEAD
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
=======
                />;
              </div>;

              <div className="grid sm:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="youtube"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Channel name or URL" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
<<<<<<< HEAD
                />
=======
                />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="linkedin"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
<<<<<<< HEAD
                />
              </div>
=======
                />;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <FormField
                control={form && form.control}
                name="niche"
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
<<<<<<< HEAD
              />
              <div className="grid sm:grid-cols-2 gap-4">
=======
              />;

              <div className="grid sm:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="audience_size"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
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
                  )}
<<<<<<< HEAD
                />
=======
                />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <FormField
                  control={form && form.control}
                  name="payout_method"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
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
                  )}
<<<<<<< HEAD
                />
              </div>
=======
                />;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <FormField
                control={form && form.control}
                name="bio"
<<<<<<< HEAD
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
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
              type="submit"
=======
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={4} 
                        {...field} 
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit: 500 characters;
                    </FormDescription>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            </div>;

            <Button
              type="submit" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>;
  );
}