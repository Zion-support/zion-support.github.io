<<<<<<< HEAD
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
const partnerFormSchema = z.object({
  name: z.string().min($2);
  website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  twitter: z.string().optional($2);
  instagram: z.string().optional($2);
  youtube: z.string().optional($2);
  linkedin: z.string().optional($2);
  niche: z.string().min($2);
  audience_size: z.string($2);
  payout_method: z.string($2);
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(500)}),

type PartnerFormValues = $2;
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { user } = useAuth($2);
  const form = useForm<PartnerFormValues>({
    resolver: zodResolver($2);
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
      bio: ""}}),

  const checkExistingPartner = async () => {
    const { data: existingPartner} = await supabase
      .from('partner_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single($2);
    if (existingPartner) {
      toast($2);
      setIsSubmitting($2);
      return true
    }
    return false
  },

  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast($2);
      return
    }

    setIsSubmitting($2);
=======
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const partnerFormSchema = z.object({

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

  const form = useForm<PartnerFormValues>({

    resolver: zodResolver(partnerFormSchema)
    defaultValues: {"
      name: """
      website: """
      twitter: """
      instagram: """
      youtube: """
      linkedin: """
      niche: """
      audience_size: """
      payout_method: "paypal""
      bio: ""}});
  const checkExistingPartner = async () => {};
    const { data: existingPartner } = await supabase;
      .from('partner_profiles')'
      .select('id')'
      .eq('user_id', user.id)

  async function onSubmit(data: PartnerFormValues) {}
    if (!user) {}
      toast({"
        title: "Authentication required""
        description: "You must be logged in to register as a partner.""
        variant: "destructive"})

<<<<<<< HEAD
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

<<<<<<< HEAD
=======
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),

<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      .single(),


type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async function onSubmit(data: PartnerFormValues) {
    if (!user) {
      toast({
        title: "Authentication required"
        description: "You must be logged in to register as a partner."
        variant: "destructive"})
      return

<<<<<<< HEAD
    }

=======
<<<<<<< HEAD
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsSubmitting(true);
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
          }
        ])
        .select($2);
      if (error) throw error,

      toast($2);
      // Create a referral code if they don't have one already
      const { data: existingCode} = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
        .single($2);
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        ])
        .select();
      if (error) throw error;
<<<<<<< HEAD

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;
<<<<<<< HEAD
type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { user } = useAuth(),;
=======

export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const form = useForm<PartnerFormValues>({;
    resolver: zodResolver(partnerFormSchema),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  const checkExistingPartner = async () => {;
    const { data: existingPartner } = await supabase;
      .from('partner_profiles');

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const checkExistingPartner = async () => {;
    const { data: existingPartner } = await supabase;
      .from('partner_profiles');
      .select('id');
<<<<<<< HEAD
      .eq('user_id', user.id);
      .single(),;
=======
      .eq('user_id', user && user.id);
      .single();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (existingPartner) {;
      toast({;
        title: "Already registered",;
        description: "You have already registered as a partner.",;
        variant: "destructive"}),;
<<<<<<< HEAD
    return false;
  };
  async function onSubmit(): any (data: PartnerFormValues) {;
      setIsSubmitting(false),;
      return true;
    }
    return false;
  },;
  async function onSubmit(data: PartnerFormValues) {;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsSubmitting(false);
      return true;
    }

<<<<<<< HEAD
=======
    return false;
  };

  async function onSubmit(): any (data: PartnerFormValues) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!user) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to register as a partner.",;
        variant: "destructive"}),;
      return;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsSubmitting(true);
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {
            user_id: user.id
            name: data.name
            website: data.website |null
            social_media: {
<<<<<<< HEAD
    }
;
    setIsSubmitting(true),;
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner(),;
      if (hasExistingPartner) return,;
=======

}
;
    setIsSubmitting(true),;
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner(),;
      if (hasExistingPartner) return,;
      // Insert new partner profile;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;)
pr-12325
        .from('partner_profiles');
      const { data: newPartner, error } = await supabase;)'
        .from('partner_profiles');'

        .insert([;
          {;
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        ]);
        .select();
      if (error) throw error;
<<<<<<< HEAD
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

      toast({
        title: "Application submitted!"
        description: "Your partner application has been submitted for review."
        variant: "default"})
      // Create a referral code if they don't have one already
      const { data: existingCode } = await supabase
        .from('referral_codes')
        .select('code')
        .eq('user_id', user.id)
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .single(),

<<<<<<< HEAD
      if (!existingCode) {'
        await supabase.rpc('generate_referral_code', { user_id: user.id })

=======


<<<<<<< HEAD
        .single();
        .single(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error($2);
      toast({
        title: "Submission failed",
        description: error.message || "There was a problem submitting your application.",
        variant: "destructive"})
    } finally {
=======
<<<<<<< HEAD
      console.error('Error submitting partner application:', error),
=======
      console.error('Error submitting partner application:', error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Submission failed"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description: error.message |"There was a problem submitting your application."

        variant: "destructive"})

>>>>>>> merged-prs-20250907-203621
      setIsSubmitting(false)
<<<<<<< HEAD
=======

<<<<<<< HEAD
    }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                )}
              />
=======
<<<<<<< HEAD
                )}
              />
              <FormField
        ]);
        .select(),;
      if (error) throw error,;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        ]);
        .select(),;
      if (error) throw error,;

<<<<<<< HEAD
              />
              <FormField
        ]);
        .select(),;
      if (error) throw error,;

        variant: "default"}),;
'
      // Create a referral code if they don't have one already;
      const { data: existingCode } = await supabase;'
        .from('referral_codes');'
        .select('code');
"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);

    }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      toast({;
        title: "Application submitted!",
        description: "Your partner application has been submitted for review.",;
        variant: "default"}),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Create a referral code if they don't have one already;
      const { data: existingCode } = await supabase;
        .from('referral_codes');
        .select('code');
<<<<<<< HEAD
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
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
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
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;


=======
        .eq('user_id', user && user.id);
        .single();

      if (!existingCode) {;
        await supabase && supabase.rpc('generate_referral_code', { user_id: user && user.id });
      }

    } catch (error: any) {;
      console && console.error('Error submitting partner application:', error);
      toast({;
        title: "Submission failed",
        description: error && error.message || "There was a problem submitting your application.",;
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
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
}

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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                control={form.control}

                name="name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Name / Brand</FormLabel>;
<<<<<<< HEAD
                    <FormControl>;"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;
<<<<<<< HEAD
              />;
>>>>>>> merged-prs-20250907-203621
              <FormField
                control={form && form.control}
                name="website"
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
=======

"
                name="website"
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD

"
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;

=======
<<<<<<< HEAD
                      <Input placeholder="https://yourwebsite.com" {...field} />;
=======
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}
<<<<<<< HEAD
              />;
                <FormField
                  control={form && form.control}
                  name="twitter"
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
                />
                <FormField
=======
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
=======

<<<<<<< HEAD
                <FormField;
                  control={form && form.control}"
                  name="twitter"
=======
              />;

              <div className="grid sm:grid-cols-2 gap-4">;

                <FormField
                  control={form && form.control}
                  name="twitter"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="twitter";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<< HEAD
                    </FormItem>;                  )}
                />;
                ;
                <FormField;
                  control={form.control}
                  name="instagram";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
=======

                />;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                <FormField
                  control={form && form.control}
                  name="instagram"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;
</FormItem>)}
                />;
                <FormField;
<<<<<<< HEAD
                    </FormItem>;                  )}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                />;
                ;
                <FormField;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  control={form.control}
                  name="instagram";
                  render={({ field }) => (;
                    <FormItem>;
<<<<<<< HEAD
                      <FormLabel>Instagram (Optional)</FormLabel>;
=======
                      <FormLabel > Instagram (Optional)</FormLabel>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <FormControl>;
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<< HEAD
                />;
              </div>;
              <div className="grid sm:grid-cols-2 gap-4">;
=======

                />;
<<<<<<< HEAD
=======
              </div>;

              <div className="grid sm:grid-cols-2 gap-4">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormField
                  control={form && form.control}
                  name="youtube"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </FormItem>)}
                />;
              </div>;
              <div className="grid sm:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <FormField;

                  control={form.control}
<<<<<<< HEAD

=======
                  name="youtube";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > YouTube (Optional)</FormLabel>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <FormControl>;
                        <Input placeholder="Channel name or URL" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<< HEAD
                />;
=======

                />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormField
                  control={form && form.control}
                  name="linkedin"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}
                  name="linkedin";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > LinkedIn (Optional)</FormLabel>;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
<<<<<<< HEAD
              />;
              <div className="grid sm:grid-cols-2 gap-4">;
=======

                />;
              </div>;

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
                    <FormControl>;
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      What topics do you focus on in your content?;
                    </FormDescription>;
                    <FormMessage />;

              />;

              <div className="grid sm:grid-cols-2 gap-4">;

<<<<<<< HEAD
/>;
              <div className="grid sm:grid-cols-2 gap-4">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </FormItem>)}

                <FormField;
                  control={form.control}"
                  name="audience_size";
                  render={({ field }) => (
<<<<<<< HEAD
=======
                    <FormItem>;
                      <FormLabel > Audience Size</FormLabel>;
                      <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        <FormControl>;
                          <SelectTrigger>;"
                            <SelectValue placeholder="Select audience size" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
<<<<<<< HEAD
                />;
=======

                <FormField;
                  control={form && form.control}"

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormField
                  control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  name="payout_method"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
<<<<<<< HEAD

=======
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          <SelectItem value="under1k">Under 1, 000</SelectItem>;
                          <SelectItem value="1k - 10k">1, 000 - 10, 000</SelectItem>;
                          <SelectItem value="10k - 50k">10, 000 - 50, 000</SelectItem>;
                          <SelectItem value="50k - 100k">50, 000 - 100, 000</SelectItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          <SelectItem value="over100k">Over 100, 000</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>)}
                />;
                <FormField;
<<<<<<< HEAD

=======
                  control={form.control}
                  name="payout_method";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Preferred Payout Method</FormLabel>;
                      <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue placeholder="Select payout method" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
                          <SelectItem value="paypal">PayPal</SelectItem>;
                          <SelectItem value="bank">Bank Transfer</SelectItem>;
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
<<<<<<< HEAD
                />;
              </div>;
              <FormField
                control={form && form.control}
                name="bio"
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
=======

<<<<<<< HEAD
=======
                />;
              </div>;


              <FormField
                control={form && form.control}
                name="bio"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                />
                <FormField
                />;
                <FormField;
>>>>>>> merged-prs-20250907-203621
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
            <Button
              type="submit"
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={4} 
                        {...field} 

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

              <FormField;
                control={form && form.control}"
                name="bio"

              <FormField
                control={form && form.control}
                name="bio"

                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit: 500 characters;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD

            <Button 
              type="submit" 

              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Application"}

              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;"
              {isSubmitting ? "Submitting..." : "Submit Application"}

=======
                  </FormItem>)}
              />;
            </div>;
            <Button;
              type="submit";
              className="w - full bg - zion - purple hover:bg - zion - purple - dark";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              disabled={is_submitting}
            >;"
              {is_submitting ? "Submitting..." : "Submit Application"}
<<<<<<< HEAD

<Textarea ;
=======
                      <Textarea ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        placeholder="Tell us about yourself and how you plan to promote Zion AI";
                        rows={4} ;
                        {...field} ;
                      />;
                    </FormControl>;
<<<<<<< HEAD
};
}

}
          })]
        ]);
        .select();
      if (error) throw error;

        .single(),

      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
    } catch (error: any) {
      console.error('Error submitting partner application:', error);
      toast({
        title: "Submission failed"","
  description: error.message |"There was a problem submitting your application."")"
        variant: "destructive"})"
    } finally {
  // TODO: Implement
      setIsSubmitting(false)

  return ("
    <Card className="bg-zion-blue-dark border-zion-blue-light">;"

      <CardHeader>;

        <CardTitle>Partner Registration;
        <CardDescription>Register to become a Zion AI partner and start earning rewards;
      <CardContent>;

</CardContent>
        <Form {...form}>;
)"
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>"
            <div className="space-y-4">;"
</div>
              <FormField;
                control={form && form.control}"
                name="name""
                render={({ field }) => (

                  <FormItem>

                    <FormLabel>Name / Brand
                    <FormControl>
"
                      <Input placeholder="Your name or brand name" {...field} />"

                    <FormMessage />

    <Card className="bg - zion - blue - dark border - zion - blue - light">;"

        <CardTitle > Partner Registration;
        <CardDescription > Register to become a Zion AI partner and start earning rewards;

          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
            <div className="space - y-4">;"

                control={form.control}"
                name="name";"

                  <FormItem>;

                    <FormLabel > Name / Brand;
                    <FormControl>;
                      <Input placeholder="Your name or brand name" {...field} />;"

                    <FormMessage />;

                name="website"""
                name="website"")
                render={({ field }) => (;

)
                    <FormLabel>Website (Optional);
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;"

                  ;"
              <div className="grid sm:grid-cols-2 gap-4">;"
                  name="twitter""

                      <FormLabel>Twitter (Optional);
                  )}
                name="website";"

                    <FormLabel > Website (Optional);
                      <Input placeholder="https://yourwebsite.com" {...field} />;"

                  )}"
              <div className="grid sm:grid - cols - 2 gap - 4">;"
                  name="twitter";"

                      <FormLabel > Twitter (Optional);"

                        <Input placeholder="@username" {...field} />;"

                  name="instagram""

                      <FormLabel>Instagram (Optional);

                  name="instagram";"

                      <FormLabel > Instagram (Optional);

              </div>;"
                  name="youtube""

                      <FormLabel>YouTube (Optional);
                  name="youtube";"

                      <FormLabel > YouTube (Optional);
                        <Input placeholder="Channel name or URL" {...field} />;"

                  name="linkedin""

                      <FormLabel>LinkedIn (Optional);
                  name="linkedin";"

                      <FormLabel > LinkedIn (Optional);

                    ;                  )}

                        <Input placeholder="Profile URL or username" {...field} />;"

              </div>;
                name="niche""

                    <FormLabel>Your Niche;)
                name="niche";"

                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />;"

                    <FormDescription>;

                  name="audience_size"")

                      <FormLabel>Audience Size;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                  name="audience_size";"

                          <SelectTrigger>;
                            <SelectValue placeholder="Select audience size" />;"

                        <SelectContent>;

                  name="payout_method"")

                      <FormLabel>Preferred Payout Method;
                          <SelectItem value="under1k">Under 1, 000;""
                          <SelectItem value="1k - 10k">1, 000 - 10, 000;""
                          <SelectItem value="10k - 50k">10, 000 - 50, 000;""
                          <SelectItem value="50k - 100k">50, 000 - 100, 000;""
                          <SelectItem value="over100k">Over 100, 000;"
                  name="payout_method";"

                            <SelectValue placeholder="Select payout method" />;"

                          <SelectItem value="paypal">PayPal;""
                          <SelectItem value="bank">Bank Transfer;""
                          <SelectItem value="crypto">Cryptocurrency;""
                          <SelectItem value="platform_credit">Platform Credit;"

                name="bio"")

                    <FormLabel>Bio;

                      <Textarea;"
                        placeholder="Tell us about yourself and how you plan to promote Zion AI""
                        rows={4} 
                        {...field} 

                name="bio""

                      />;

</Textarea>
                    </FormControl>;

                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                    <FormMessage />;
</FormMessage>

            <Button;"
              type="submit"""
              className="w-full bg-zion-purple hover:bg-zion-purple-dark""
              disabled={isSubmitting}>;
</Button>)

                  </FormItem>)}
            </div>;

            <Button;"
              type="submit";""
              className="w - full bg - zion - purple hover:bg - zion - purple - dark";"
              disabled={is_submitting}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            >;
              {isSubmitting ? "Submitting..." :"Submit Application"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
<<<<<<< HEAD
            <Button
              type="submit"
            <Button 
              type="submit" 
>>>>>>> merged-prs-20250907-203621
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
<<<<<<< HEAD
=======
=======

            </Button>

          </form>
        </Form>
      </CardContent>
    </Card>
  )

            <Button
              type="submit"
            <Button 
              type="submit" 
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"

          </form>;
    );
          </form>
              type="submit""
              disabled={isSubmitting}
            >

<<<<<<< HEAD
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
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
}return (<Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle>Partner Registration <CardDescription>Register to become a Zion AI partner and start earning rewards  <CardContent>  <FormMessage /> )"

}/> <FormField  <FormMessage /> ) 
}/> <div className=" grid sm:grid-cols-2 gap-4"> <FormField  <FormMessage /> )"
}/> </div> <div className=" grid sm:grid-cols-2 gap-4"> <FormField  <FormMessage /> )"

}/> </div> <FormField  <FormDescription> What topics do you focus on in your content?  <FormMessage /> ) 
}/> <div className=" grid sm:grid-cols-2 gap-4"> <FormField <FormItem> <FormLabel>Audience Size <Select onValueChange= {"
</div>"
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select audience size"/>   <SelectContent> <SelectItem value=" under1k">Under 1, 000 <SelectItem value=" 1k-10k">1, 000 - 10, 000 <SelectItem value=" 10k-50k">10, 000 - 50, 000 <SelectItem value=" 50k-100k">50, 000 - 100, 000 <SelectItem value=" over100k">Over 100, 000   <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel>Preferred Payout Method <Select onValueChange= {
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select payout method" />   <SelectContent>   <FormMessage /> )"
}/> </div> <FormField <FormItem> <FormLabel>Bio <FormControl> <Textarea />  <FormDescription> Limit: 500 characters  <FormMessage /> ) 

}/> </div> <Button  </form>   ) "
pr-12325
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select audience size"/> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value=" under1k">Under 1, 000</SelectItem> <SelectItem value=" 1k-10k">1, 000 - 10, 000</SelectItem> <SelectItem value=" 10k-50k">10, 000 - 50, 000</SelectItem> <SelectItem value=" 50k-100k">50, 000 - 100, 000</SelectItem> <SelectItem value=" over100k">Over 100, 000</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)"
}/> <FormField <FormItem> <FormLabel>Preferred Payout Method</FormLabel> <Select onValueChange= {
</FormField>"
}> <FormControl> <SelectTrigger> <SelectValue placeholder=" Select payout method" /> </SelectTrigger> </FormControl> <SelectContent> </SelectContent> </Select> <FormMessage /> </FormItem>)"
}/> </div> <FormField <FormItem> <FormLabel>Bio</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Limit: 500 characters </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> <Button </Button> </form> </Form> </CardContent> </Card>) 
}
}
};
}

};
}

}
=======
<<<<<<< HEAD
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
}
}
};
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
