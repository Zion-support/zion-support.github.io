<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const partnerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  linkedin: z.string().optional(),
  niche: z.string().min(2, { message: "Please specify your niche." }),
  audience_size: z.string(),
  payout_method: z.string(),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),

type PartnerFormValues = z.infer<typeof partnerFormSchema>,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
=======

      .single(),


type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      .single();
    if (existingPartner) {
      toast({
        title: "Already registered"
        description: "You have already registered as a partner."
        variant: "destructive"})
      setIsSubmitting(false);
      return true
    }
    return false
  }
      .single(),

    if (existingPartner) {
      toast({
        title: "Already registered",
        description: "You have already registered as a partner.",
        variant: "destructive"}),
      setIsSubmitting(false),
      return true
    }
    return false
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast({
        title: "Authentication required"
        description: "You must be logged in to register as a partner."
        variant: "destructive"})
      return
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    setIsSubmitting(true);
    try {
      // Check if they already have a partner profile
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
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
          }
        ])
        .select();
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
const partnerFormSchema = z.object({;
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),;
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),;
  twitter: z.string().optional(),;
  instagram: z.string().optional(),;
  youtube: z.string().optional(),;
  linkedin: z.string().optional(),;
  niche: z.string().min(2, { message: "Please specify your niche." }),;
  audience_size: z.string(),;
  payout_method: z.string(),;
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),;
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;
<<<<<<< HEAD

========
type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
=======
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { user } = useAuth(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      .eq('user_id', user && user.id);
      .single();
=======
      .eq('user_id', user.id);
      .single(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (existingPartner) {;
      toast({;
        title: "Already registered",;
        description: "You have already registered as a partner.",;
        variant: "destructive"}),;
<<<<<<< HEAD
      setIsSubmitting(false);
      return true;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
    return false;
  };
  async function onSubmit(): any (data: PartnerFormValues) {;
=======
      setIsSubmitting(false),;
      return true;
    }
    return false;
  },;
  async function onSubmit(data: PartnerFormValues) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!user) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to register as a partner.",;
        variant: "destructive"}),;
      return;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
    }
    setIsSubmitting(true);
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
import { useState } from './react';
import { z } from './zod';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Textarea } from '@/components / ui / textarea';
import { toast } from '@/hooks / use - toast';
import { use_auth } from '@/hooks / use_auth';
import { supabase } from '@/integrations / supabase / client';
const partnerFormSchema = z.object ({
  name: z.string ().min (2, { message: "Name must be at least 2 characters." }),
  website: z.string ().url ({ message: "Please enter a valid URL." }).optional ().or (z.literal ("")),
  twitter: z.string ().optional (),
  instagram: z.string ().optional (),
  youtube: z.string ().optional (),
  linkedin: z.string ().optional (),
  niche: z.string ().min (2, { message: "Please specify your niche." }),
  audience_size: z.string (),
  payout_method: z.string (),
  bio: z.string ().min (10, { message: "Bio must be at least 10 characters." }).max (500)}),
type PartnerFormValues = z.infer < typeof partnerFormSchema>;
;
export /**
 * PartnerRegistrationForm - Function description
 */
function PartnerRegistrationForm() {
  const [is_submitting, setIsSubmitting] = useState (false);
  const { user } = use_auth ();
;
  const form = use_form < PartnerFormValues>({
    resolver: zod_resolver (partnerFormSchema),
    default_values: {
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
  const checkExistingPartner = async () => {
    const { data: existing_partner } = await supabase;
      .from ('partner_profiles');
      .select ('id');
      .eq ('user_id', user.id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Already registered",
        description: "You have already registered as a partner.",
        variant: "destructive"}),
      setIsSubmitting (false);
      return true;
    }
    return false;
  }
;
  async /**
 * on_submit - Function description
 */
function on_submit() {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "You must be logged in to register as a partner.",
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
    try {
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner ();
      // Check condition
if (return) {
  $2
}
      // Insert new partner profile;
      const { data: new_partner, error } = await supabase;
        .from ('partner_profiles');
        .insert ([;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
          {
            user_id: user.id
            name: data.name
            website: data.website |null
            social_media: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
=======
    }
;
    setIsSubmitting(true),;
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner(),;
      if (hasExistingPartner) return,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;
        .from('partner_profiles');
        .insert([;
          {;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
          }
        ]);
        .select();
      if (error) throw error;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx


<<<<<<< HEAD
=======
            user_id: user.id,;
            name: data.name,;
            website: data.website || null,;
            social_media: {;
              twitter: data.twitter || null,;
              instagram: data.instagram || null,;
              youtube: data.youtube || null,;
              linkedin: data.linkedin || null},;
            niche: data.niche,;
            audience_size: data.audience_size,;
            payout_method: data.payout_method,;
            bio: data.bio,;
            status: 'pending', // Partners need approval;
          }
        ])
        .select(),

      if (error) throw error,

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Application submitted!"
        description: "Your partner application has been submitted for review."
        variant: "default"})
      // Create a referral code if they don't have one already
      const { data: existingCode } = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
<<<<<<< HEAD
<<<<<<< HEAD

=======
        .single(),



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .single();
        .single(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error('Error submitting partner application:', error);
=======
      console.error('Error submitting partner application:', error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Submission failed"
        description: error.message |"There was a problem submitting your application."

        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
                )}
              />
              <FormField
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
                )}
              />
              <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        ]);
        .select(),;
      if (error) throw error,;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({;
        title: "Application submitted!",;
        description: "Your partner application has been submitted for review.",;
        variant: "default"}),;
      // Create a referral code if they don't have one already;
      const { data: existingCode } = await supabase;
        .from('referral_codes');
        .select('code');
<<<<<<< HEAD
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
=======
        .eq('user_id', user.id);
        .single(),;
      if (!existingCode) {;
        await supabase.rpc('generate_referral_code', { user_id: user.id });
      }
;
    } catch (error: any) {;
      console.error('Error submitting partner application:', error),;
      toast({;
        title: "Submission failed";
        description: error.message || "There was a problem submitting your application.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
  }
  return (
=======
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
      setIsSubmitting(false),;    }
      if (!existingCode) {_await supabase.rpc('generate_referral_code', _{ user_id: user.id});
      }

    } catch (error: unknown) {_toast({
        title: "Submission failed", _description: error.message || "There was a problem submitting your application.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
<<<<<<< HEAD
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField
                control={form && form.control}
                name="name"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Name / Brand</FormLabel>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
              twitter: data.twitter || null,
              instagram: data.instagram || null,
              youtube: data.youtube || null,
              linkedin: data.linkedin || null},
            niche: data.niche,
            audience_size: data.audience_size,
            payout_method: data.payout_method,
            bio: data.bio,
            status: 'pending', // Partners need approval;
          }
        ]);
        .select ();
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Application submitted!",
        description: "Your partner application has been submitted for review.",
        variant: "default"}),
      // Create a referral code if they don't have one already;
      const { data: existing_code } = await supabase;
        .from ('referral_codes');
        .select ('code');
        .eq ('user_id', user.id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        await supabase.rpc ('generate_referral_code', { user_id: user.id });
      }
    } catch (error: any) {
      console.error ('Error submitting partner application:', error);
      toast ({
        title: "Submission failed",
        description: error.message || "There was a problem submitting your application.",
        variant: "destructive"});
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
      <CardHeader>;
        <CardTitle > Partner Registration</CardTitle>;
        <CardDescription > Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
            <div className="space - y-4">;
              <FormField;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                control={form.control}
                name="name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Name / Brand</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

              />;


========
              />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
              <FormField
                control={form && form.control}
                name="website"
=======
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
                  </FormItem>;                )}
              />;
;
              <FormField;
                control={form.control}
                name="website";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
=======
                      <Input placeholder="https://yourwebsite.com" {...field} />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
              />;
<<<<<<< HEAD
              <div className="grid sm:grid-cols-2 gap-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="twitter"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourwebsite.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="twitter"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="@username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="youtube"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Channel name or URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}
                name="website";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Website (Optional)</FormLabel>;
                    <FormControl>;
                      <Input placeholder="https://yourwebsite.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;
              <div className="grid sm:grid - cols - 2 gap - 4">;
                <FormField;
                  control={form.control}
                  name="twitter";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Twitter (Optional)</FormLabel>;
=======
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
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
                  name="instagram";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

                />;


========
<<<<<<< HEAD
                />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="instagram"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
                    </FormItem>)}
                />;
                <FormField;
=======

                />;
                <FormField;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  control={form.control}
                  name="instagram";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Instagram (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                />;
              </div>;
              <div className="grid sm:grid-cols-2 gap-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="youtube"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;
                    </FormItem>)}
                />;
              </div>;
              <div className="grid sm:grid - cols - 2 gap - 4">;
                <FormField;
                  control={form.control}
                  name="youtube";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > YouTube (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="Channel name or URL" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

                />;


========
                />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="linkedin"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name="linkedin";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > LinkedIn (Optional)</FormLabel>;
=======
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
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
                  name="linkedin";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <FormControl>;
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

                />;
              </div>;


========
<<<<<<< HEAD
                />;
              </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
              <FormField
                control={form && form.control}
                name="niche"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Your Niche</FormLabel>;
                    </FormItem>)}
                />;
              </div>;
              <FormField;
                control={form.control}
                name="niche";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Your Niche</FormLabel>;
                    <FormControl>;
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      What topics do you focus on in your content?;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
              />;
              <div className="grid sm:grid-cols-2 gap-4">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="audience_size"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                  </FormItem>)}
              />;
              <div className="grid sm:grid - cols - 2 gap - 4">;
                <FormField;
                  control={form.control}
                  name="audience_size";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Audience Size</FormLabel>;
                      <Select onValueChange={field.on_change} default_value={field.value}>;
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue placeholder="Select audience size" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

                />;


========
                />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                <FormField
                  control={form && form.control}
                  name="payout_method"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                          <SelectItem value="under1k">Under 1, 000</SelectItem>;
                          <SelectItem value="1k - 10k">1, 000 - 10, 000</SelectItem>;
                          <SelectItem value="10k - 50k">10, 000 - 50, 000</SelectItem>;
                          <SelectItem value="50k - 100k">50, 000 - 100, 000</SelectItem>;
                          <SelectItem value="over100k">Over 100, 000</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name="payout_method";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Preferred Payout Method</FormLabel>;
                      <Select onValueChange={field.on_change} default_value={field.value}>;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

                />;
              </div>;


              <FormField
                control={form && form.control}
                name="bio"

========
                />;
              </div>;
              <FormField
                control={form && form.control}
                name="bio"
=======
                    </FormItem>;                  )}
                />;
              </div>;
;
              <FormField;
                control={form.control}
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
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
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
                    </FormItem>;                  )}
                />;
              </div>;
;
              <FormField;
                control={form.control}
                name="bio";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={4} 
                        {...field} 
                    </FormItem>)}
                />;
              </div>;
              <FormField;
                control={form.control}
                name="bio";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Bio</FormLabel>;
                    <FormControl>;
                      <Textarea;
                        placeholder="Tell us about yourself and how you plan to promote Zion AI";
                        rows={4}
                        {...field}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                />
                <FormField
                />;
                <FormField;
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Profile URL or username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="niche"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Niche</FormLabel>
                    <FormControl>
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />
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
                  control={form.control}
                  name="audience_size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audience Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  control={form.control}
                  name="payout_method"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Payout Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payout method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={4}
                        {...field}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit: 500 characters;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx


            <Button 
              type="submit" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Application"}

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
                  </FormItem>)}
              />;
            </div>;
            <Button;
              type="submit";
              className="w - full bg - zion - purple hover:bg - zion - purple - dark";
              disabled={is_submitting}
            >;
              {is_submitting ? "Submitting..." : "Submit Application"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx

    </Card>);

}
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button
              type="submit"
            <Button 
              type="submit" 
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </Card>);
=======
    </Card>;
  ),; const partnerFormSchema = z.object ({
  name: z.string () .min (2, {
  message: "Name must be at least 2 characters." 
});
website: z.string () .url ({
  message: "Please enter a valid URL." 
}) .optional () .or (z.literal ("") );
instagram: z.string () .optional ();
youtube: z.string () .optional ();
linkedin: z.string () .optional ();
const {
  data: existingPartner 
}= await supabase .from ('partner profiles') .select ('id') .eq ('user id', user.id) .single ();
setIsSubmitting (false);
return true;
}return false;
};
async function onSubmit (data: PartnerFormValues) {
  if (!user) {
  toast ({
  return;
}//Insert new partner profile const {
  data: newPartner, error 
}= await supabase .from ('partner profiles') .insert ([ {
  user id: user.id, name: data.name, website: data.website || null, social media: {
  twitter: data.twitter || null, instagram: data.instagram || null, youtube: data.youtube || null, linkedin: data.linkedin || null 
};
niche: data.niche;
audience size: data.audience size;
payout method: data.payout method;
bio: data.bio;
status: 'pending', //Partners need approval 
}]) .select ();
if (error) throw error;
data: existingCode 
}= await supabase .from ('referral codes') .select ('code') .eq ('user id', user.id) .single ();
}finally {
  setIsSubmitting (false) 
}
}return (<Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle>Partner Registration</CardTitle> <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription> </CardHeader> <CardContent> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <div className=" grid sm:grid-cols-2 gap-4"> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className=" grid sm:grid-cols-2 gap-4"> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <FormField </FormControl> <FormDescription> What topics do you focus on in your content? </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className=" grid sm:grid-cols-2 gap-4"> <FormField <FormItem> <FormLabel>Audience Size</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select audience size"/> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value=" under1k">Under 1, 000</SelectItem> <SelectItem value=" 1k-10k">1, 000 - 10, 000</SelectItem> <SelectItem value=" 10k-50k">10, 000 - 50, 000</SelectItem> <SelectItem value=" 50k-100k">50, 000 - 100, 000</SelectItem> <SelectItem value=" over100k">Over 100, 000</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Preferred Payout Method</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select payout method" /> </SelectTrigger> </FormControl> <SelectContent> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> </div> <FormField <FormItem> <FormLabel>Bio</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Limit: 500 characters </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> <Button </Button> </form> </Form> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerRegistrationForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
};
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
