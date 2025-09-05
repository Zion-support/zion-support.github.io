
const _partnerFormSchema = z.object({_name: z.string().min(2, _{ message: "Name must be at least 2 characters."}),
  website: z.string().url({_message: "Please enter a valid window.URL."}).optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
  niche: z.string().min(2, {_message: "Please specify your niche."}),
  audience_size: z.string(),
  payout_method: z.string(),
  bio: z.string().min(10, {_message: "Bio must be at least 10 characters."}).max(500)});

type PartnerFormValues = z.infer<typeof partnerFormSchema>;

export function PartnerRegistrationForm() {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const { user} = useAuth();

  const _form = useForm<PartnerFormValues>({_resolver: zodResolver(partnerFormSchema), _defaultValues: {
      name: "", _website: "", _twitter: "", _instagram: "", _youtube: "", _linkedin: "", _niche: "", _audience_size: "", _payout_method: "paypal", _bio: ""}});

  const _checkExistingPartner = async () => {_const { data: existingPartner} = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (existingPartner) {_toast({
        title: "Already registered", _description: "You have already registered as a partner.", _variant: "destructive"});
      setIsSubmitting(false);
      return true;
    }
    return false;
  };

  async function onSubmit(_data: PartnerFormValues) {_if (!user) {
      toast({
        title: "Authentication required", _description: "You must be logged in to register as a partner.", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);
    try {_// Check if they already have a partner profile
      const _hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;

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
        .select();

      if (error) throw error;

      toast({_title: "Application submitted!", _description: "Your partner application has been submitted for review.", _variant: "default"});

      // Create a referral code if they don't have one already
      const {_data: existingCode} = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
        .single();

      if (!existingCode) {_await supabase.rpc('generate_referral_code', _{ user_id: user.id});
      }

    } catch (error: unknown) {_toast({
        title: "Submission failed", _description: error.message || "There was a problem submitting your application.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  }

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle>Partner Registration</CardTitle>
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>
      </CardHeader>
      <CardContent>
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={_form.control}
                name="website"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourwebsite.com" {_...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={_form.control}
                  name="twitter"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Twitter (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={_form.control}
                  name="instagram"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={_form.control}
                  name="youtube"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>YouTube (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Channel name or window.URL" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={_form.control}
                  name="linkedin"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Profile window.URL or username" {_...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={_form.control}
                name="niche"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {_...field} />
                    </FormControl>
                    <FormDescription>
                      What topics do you focus on in your content?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={_form.control}
                  name="audience_size"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Audience Size</FormLabel>
                      <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select audience size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under1k">Under 1,000</SelectItem>
                          <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>
                          <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>
                          <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                          <SelectItem value="over100k">Over 100,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={_form.control}
                  name="payout_method"
                  render={_(_{ field}) => (
                    <FormItem>
                      <FormLabel>Preferred Payout Method</FormLabel>
                      <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payout method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="window.crypto">Cryptocurrency</SelectItem>
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={_form.control}
                name="bio"
                render={_(_{ field}) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={_4} 
                        {_...field} 
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
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={_isSubmitting}
            >
              {_isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}