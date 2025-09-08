
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

  name: z.string().min(2, { message: "Name must be at least 2 characters." }),

  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),"
  niche: z.string().min(2, { message: "Please specify your niche." }),
  audience_size: z.string(),
  payout_method: z.string(),"
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),

type PartnerFormValues = z.infer<typeof partnerFormSchema>,

export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),
  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast({
        title: "Authentication required"
        description: "You must be logged in to register as a partner."
        variant: "destructive"})
      return

          }
        ])
        .select();
      if (error) throw error;
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
const partnerFormSchema = z.object({;"
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),;"
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),;
  twitter: z.string().optional(),;
  instagram: z.string().optional(),;
  youtube: z.string().optional(),;
  linkedin: z.string().optional(),;"
  niche: z.string().min(2, { message: "Please specify your niche." }),;
  audience_size: z.string(),;
  payout_method: z.string(),;"
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),;
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;    resolver: zodResolver(partnerFormSchema),;
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
<<<<<<< HEAD
=======

  const checkExistingPartner = async () => {;
    const { data: existingPartner } = await supabase;
      .from('partner_profiles');
      .select('id');    }
    setIsSubmitting(true);
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
          {
            user_id: user.id
            name: data.name
            website: data.website |null
            social_media: {      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;

import {useState} from "react";""
import {z} from "zod";""
import {useForm} from "react-hook-form";""
import {zodResolver} from "@hookform/resolvers/zod";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Textarea} from "@/components/ui/textarea";""
import {toast} from "@/hooks/use-toast";""
import {useAuth} from "@/hooks/useAuth";""
import {supabase} from "@/integrations/supabase/client";""
import { useState } from "react",""
import { z } from "zod",""
import { useForm } from "react-hook-form",""
import { zodResolver } from "@hookform/resolvers/zod",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { Textarea } from "@/components/ui/textarea",""
import { toast } from "@/hooks/use-toast",""
import { useAuth } from "@/hooks/useAuth",""
import { supabase } from "@/integrations/supabase/client","
const partnerFormSchema = z.object({)"
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),""
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),"
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),"
  niche: z.string().min(2, { message: "Please specify your niche." }),"
  audience_size: z.string(),
  payout_method: z.string(),"
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),"
type PartnerFormValues = z.infer<typeof partnerFormSchema>,
</typeof>
  const form = useForm<PartnerFormValues>({

type PartnerFormValues = z.infer<typeof partnerFormSchema>,;
type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
  const form = useForm<PartnerFormValues>({;

type PartnerFormValues = z.infer < typeof partnerFormSchema>;
;
export /**
 * PartnerRegistrationForm - Function description;
 */)
function PartnerRegistrationForm() {
  const [is_submitting, setIsSubmitting] = useState (false);
  const { user } = use_auth ();
  const form = use_form < PartnerFormValues>({)
    resolver: zod_resolver (partnerFormSchema),
    default_values: {,"
  name: "",""
      website: "",""
      twitter: "",""
      instagram: "",""
      youtube: "",""
      linkedin: "",""
      niche: "",""
      audience_size: "",""
      payout_method: "paypal",""
      bio: ""}}),"
  const checkExistingPartner = async () => {
    const { data: existing_partner } = await supabase;"
      .from ('partner_profiles');
      .select ('id');
      .eq ('user_id', user.id);
      .single ();
    // Check condition;
if ( {) {
  $2;
}
      toast ({
        title: "Already registered",""
        description: "You have already registered as a partner.",")"
        variant: "destructive"}),"
      setIsSubmitting (false);
      return true;
    return false;
  async /**
 * on_submit - Function description;
 */
function on_submit() {
    // Check condition;
      toast ({"
        title: "Authentication required",""
        description: "You must be logged in to register as a partner.",")"
      return;
    setIsSubmitting (true);
    try {
  // TODO: Implement
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner ();
      // Check condition;
if (return) {
      // Insert new partner profile;
      const { data: new_partner, error } = await supabase;"
        .insert ([;

          {
            user_id: user.id;,
  name: data.name;
            website: data.website |null;,
  social_media: {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;)
pr-12325
        .from('partner_profiles');
      const { data: newPartner, error } = await supabase;)'
        .from('partner_profiles');'

        .insert([;
          {;
            user_id: user && user.id,;
            name: data && data.name,;
            website: data && data.website || null,;
            social_media: {;
              twitter: data && data.twitter || null,;
            social_media: {;,
  twitter: data && data.twitter || null,;
pr-12325

            social_media: {;,
  twitter: data && data.twitter || null,;
              instagram: data && data.instagram || null,;
              youtube: data && data.youtube || null,;

              linkedin: data && data.linkedin || null},;
            niche: data && data.niche,;
            audience_size: data && data.audience_size,;
            payout_method: data && data.payout_method,;
            bio: data && data.bio,;
            status: 'pending', // Partners need approval;

          }
        ]);
        .select();
      if (error) throw error;        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }
    } catch (error: any) {      toast({
        title: "Submission failed"
        description: error.message |"There was a problem submitting your application."

        variant: "destructive"})
    } finally {
      setIsSubmitting(false)    }
  }
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle>Partner Registration</CardTitle>
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name / Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name or brand name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
        ]);
        .select(),;
      if (error) throw error,;

              twitter: data.twitter || null,
              instagram: data.instagram || null,
              youtube: data.youtube || null,
              linkedin: data.linkedin || null},
            niche: data.niche,
            audience_size: data.audience_size,
            payout_method: data.payout_method,
            bio: data.bio,'
            status: 'pending', // Partners need approval;
          }
        ]);
        .select ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Application submitted!","
        description: "Your partner application has been submitted for review.","
        variant: "default"}),'
      // Create a referral code if they don't have one already;
      const { data: existing_code } = await supabase;'
        .from ('referral_codes');'
        .select ('code');'
        .eq ('user_id', user.id);
        .single ();
;
      // Check condition;
if ( {) {}
  $2;
}'
        await supabase.rpc ('generate_referral_code', { user_id: user.id });
      }
    } catch (error: any) {'
      console.error ('Error submitting partner application:', error);
      toast ({"
        title: "Submission failed","
        description: error.message || "There was a problem submitting your application.","
        variant: "destructive"});
    } finally {}
      setIsSubmitting (false);
    }
  }
  return (
    <Card className="bg - zion - blue - dark border - zion - blue-light">;
      <CardHeader>;
</CardContent>
        <Form {...form}>;
</Form>)"
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>"
            <div className="space-y-4">;"
</div>
              <FormField;
                control={form && form.control}"
                name="name""
                render={({ field }) => (
</FormField>
                  <FormItem>
</FormItem>
                    <FormLabel>Name / Brand</FormLabel>
                    <FormControl>
</FormControl>"
                      <Input placeholder="Your name or brand name" {...field} />"
</Input>
                    </FormControl>
                    <FormMessage />
</FormMessage>
                  </FormItem>"
    <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle > Partner Registration</CardTitle>;
        <CardDescription > Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;

                />;

                <FormField
                  control={form && form.control}
                  name="instagram"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
                />;
                <FormField;

                  control={form.control}
                  name="instagram";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Instagram (Optional)</FormLabel>;


=======
                      <FormLabel>Instagram (Optional)</FormLabel>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;

                />;
              </div>;

              <div className="grid sm:grid-cols-2 gap-4">;                      <FormControl>;
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;

                />;
              </div>;

              <FormField
                control={form && form.control}                <FormField
                  control={form && form.control}

                  name="audience_size"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </FormItem>)}
              />;
              <div className="grid sm:grid - cols - 2 gap-4">;
                <FormField;
                  control={form.control}"
                  name="audience_size";
                  render={({ field }) => (

<<<<<<< HEAD
                    <FormItem>;
                      <FormLabel > Audience Size</FormLabel>;
                      <Select onValueChange={field.on_change} default_value={field.value}>;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <FormControl>;
                          <SelectTrigger>;"
                            <SelectValue placeholder="Select audience size" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;

                />;
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit: 500 characters;
                    </FormDescription>;
                    <FormMessage />;

            <Button 
              type="submit" 

              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Application"}
                  </FormItem>)}
              />;
            </div>;
            <Button;
              type="submit";
              className="w - full bg - zion - purple hover:bg - zion - purple-dark";
              disabled={is_submitting}
            >;"
              {is_submitting ? "Submitting..." : "Submit Application"}
};
}

}
<<<<<<< HEAD