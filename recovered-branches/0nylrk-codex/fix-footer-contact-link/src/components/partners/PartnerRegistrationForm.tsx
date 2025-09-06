<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
import {useState} from "react";"
import {z} from "zod";"
import {useForm} from "react-hook-form";"
import {zodResolver} from "@hookform/resolvers/zod";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {Textarea} from "@/components/ui/textarea";"
import {toast} from "@/hooks/use-toast";"
import {useAuth} from "@/hooks/useAuth";"
import {supabase} from "@/integrations/supabase/client";


"
import { useState } from "react","
import { z } from "zod","
import { useForm } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Textarea } from "@/components/ui/textarea","
import { toast } from "@/hooks/use-toast","
import { useAuth } from "@/hooks/useAuth","
import { supabase } from "@/integrations/supabase/client",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const partnerFormSchema = z.object({
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



const partnerFormSchema = z.object({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
=======
const partnerFormSchema = z.object({"
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export function PartnerRegistrationForm() {}
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),




<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const form = useForm<PartnerFormValues>({
=======
  const form = useForm<PartnerFormValues>({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

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
=======

      .single(),


type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;


=======


      .single(),


type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




  async function onSubmit(data: PartnerFormValues) {}
    if (!user) {}
      toast({"
        title: "Authentication required""
        description: "You must be logged in to register as a partner.""
        variant: "destructive"})
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),


export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
export function PartnerRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { user } = useAuth(),


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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }
        ])
        .select();
      if (error) throw error;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
"
import { useState } from "react",;"
import { z } from "zod",;"
import { useForm } from "react-hook-form",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Textarea } from "@/components/ui/textarea",;"
import { toast } from "@/hooks/use-toast",;"
import { useAuth } from "@/hooks/useAuth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;    resolver: zodResolver(partnerFormSchema),;
=======
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;

export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
export function PartnerRegistrationForm() {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { user } = useAuth(),;
  const form = useForm<PartnerFormValues>({;
    resolver: zodResolver(partnerFormSchema),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      .select('id');    }
=======
type PartnerFormValues = z.infer<typeof partnerFormSchema>,;

type PartnerFormValues = z && z.infer<typeof partnerFormSchema>;
export function PartnerRegistrationForm() { return null; }
  const { user } = useAuth();

  const form = useForm<PartnerFormValues>({;
    resolver: zodResolver(partnerFormSchema),;
    defaultValues: {;"
      name: "",;"
      website: "",;"
      twitter: "",;"
      instagram: "",;"
      youtube: "",;"
      linkedin: "",;"
      niche: "",;"
      audience_size: "",;"
      payout_method: "paypal",;"
      bio: ""}}),;
  const checkExistingPartner = async () => {;
    const { data: existingPartner } = await supabase;'
      .from('partner_profiles');'
      .select('id');



    if (existingPartner) {;
      toast({;"
        title: "Already registered",;"
        description: "You have already registered as a partner.",;"
        variant: "destructive"}),;

    if (!user) {;
      toast({;"
        title: "Authentication required",;"
        description: "You must be logged in to register as a partner.",;"
        variant: "destructive"}),;
      return;


=======
      .select('id');
      .eq('user_id', user && user.id);
      .single();

    if (existingPartner) {;
      toast({;
        title: "Already registered",;
        description: "You have already registered as a partner.",;
        variant: "destructive"}),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSubmitting(false);
      return true;
    }

<<<<<<< HEAD
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return false;
  };

  async function onSubmit(): any (data: PartnerFormValues) {;
    return false;
  };
  async function onSubmit(): any (data: PartnerFormValues) {;
      setIsSubmitting(false),;
      return true;
    }
    return false;
  },;
  async function onSubmit(data: PartnerFormValues) {;
    if (!user) {;
      toast({;
        title: "Authentication required",;
        description: "You must be logged in to register as a partner.",;
        variant: "destructive"}),;
      return;

      setIsSubmitting(false);
      return true;
    }
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsSubmitting(true);
    try {;
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner();
      if (hasExistingPartner) return;
<<<<<<< HEAD
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {
            user_id: user.id
            name: data.name
            website: data.website |null
            social_media: {


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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
import { useState } from './react';'
import { z } from './zod';'
import { use_form } from './react - hook - form';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components / ui / form';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Textarea } from '@/components / ui / textarea';'
import { toast } from '@/hooks / use - toast';'
import { use_auth } from '@/hooks / use_auth';'
import { supabase } from '@/integrations / supabase / client';
const partnerFormSchema = z.object ({"
  name: z.string ().min (2, { message: "Name must be at least 2 characters." }),"
  website: z.string ().url ({ message: "Please enter a valid URL." }).optional ().or (z.literal ("")),
  twitter: z.string ().optional (),
  instagram: z.string ().optional (),
  youtube: z.string ().optional (),
  linkedin: z.string ().optional (),"
  niche: z.string ().min (2, { message: "Please specify your niche." }),
  audience_size: z.string (),
  payout_method: z.string (),"
  bio: z.string ().min (10, { message: "Bio must be at least 10 characters." }).max (500)}),
type PartnerFormValues = z.infer < typeof partnerFormSchema>;
;
export /**;
 * PartnerRegistrationForm - Function description;
 */
function PartnerRegistrationForm() {}
  const [is_submitting, setIsSubmitting] = useState (false);
  const { user } = use_auth ();
;
  const form = use_form < PartnerFormValues>({}
    resolver: zod_resolver (partnerFormSchema),
    default_values: {"
      name: "","
      website: "","
      twitter: "","
      instagram: "","
      youtube: "","
      linkedin: "","
      niche: "","
      audience_size: "","
      payout_method: "paypal","
      bio: ""}}),
  const checkExistingPartner = async () => {}
    const { data: existing_partner } = await supabase;'
      .from ('partner_profiles');'
      .select ('id');'
      .eq ('user_id', user.id);
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Already registered","
        description: "You have already registered as a partner.","
        variant: "destructive"}),
      setIsSubmitting (false);
      return true;
    }
    return false;
  }
;
  async /**
 * on_submit - Function description;
 */
function on_submit() {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "You must be logged in to register as a partner.","
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
    try {}
      // Check if they already have a partner profile;
      const hasExistingPartner = await checkExistingPartner ();
      // Check condition;
if (return) {}
  $2;
}
      // Insert new partner profile;
      const { data: new_partner, error } = await supabase;'
        .from ('partner_profiles');
        .insert ([;



          {}
            user_id: user.id;
            name: data.name;
            website: data.website |null;
            social_media: {}
      // Insert new partner profile;
      const { data: newPartner, error } = await supabase;'
        .from('partner_profiles');
        .insert([;
          {;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }
        ]);
        .select();
      if (error) throw error;

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        .single(),



<<<<<<< HEAD
<<<<<<< HEAD
=======
        .single();
        .single(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



      if (!existingCode) {'
        await supabase.rpc('generate_referral_code', { user_id: user.id })
=======
          }
        ]);
        .select();
<<<<<<< HEAD
      if (error) throw error;        await supabase.rpc('generate_referral_code', { user_id: user.id })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          }
        ]);
        .select();
      if (error) throw error;        await supabase.rpc('generate_referral_code', { user_id: user.id })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
<<<<<<< HEAD
    } catch (error: any) {      toast({
=======
      if (error) throw error;


        .single(),



      if (!existingCode) {
        await supabase.rpc('generate_referral_code', { user_id: user.id })
      }
    } catch (error: any) {
      console.error('Error submitting partner application:', error);
      toast({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Submission failed"
=======
    } catch (error: any) {}
      toast({"
        title: "Submission failed""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: error.message |"There was a problem submitting your application."
"
        variant: "destructive"})
<<<<<<< HEAD
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(false)


<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
=======
      setIsSubmitting(false)    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      setIsSubmitting(false)    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      setIsSubmitting(false)


    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  return ("
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Form {...form}>;"
          <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
            <div className="space-y-4">;
              <FormField;
                control={form && form.control}"
                name="name"
<<<<<<< HEAD
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name / Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name or brand name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ]);
        .select(),;
      if (error) throw error,;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                )}
              />
              <FormField
        ]);
        .select(),;
      if (error) throw error,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast({;
        title: "Application submitted!",;
        description: "Your partner application has been submitted for review.",;
=======

      toast({;"
        title: "Application submitted!",;"
        description: "Your partner application has been submitted for review.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <Card className="bg - zion - blue - dark border - zion - blue-light">;
=======
  return ("
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <Card className="bg - zion - blue - dark border - zion - blue - light">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <CardHeader>;
        <CardTitle > Partner Registration</CardTitle>;
        <CardDescription > Register to become a Zion AI partner and start earning rewards</CardDescription>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
        <Form {...form}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
            <div className="space - y-4">;
              <FormField;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                control={form.control}
=======
        <Form {...form}>;"
          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
            <div className="space - y-4">;
              <FormField;





                control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                name="name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Name / Brand</FormLabel>;
                    <FormControl>;"
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;

"
                name="website"

                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;

"
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;

                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}



                <FormField;
                  control={form && form.control}"
                  name="twitter"
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
                  </FormItem>)}
              />;
              <FormField;
                control={form.control}"
                name="website";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Website (Optional)</FormLabel>;
                    <FormControl>;"
                      <Input placeholder="https://yourwebsite.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;"
              <div className="grid sm:grid - cols - 2 gap - 4">;
                <FormField;
                  control={form.control}"
                  name="twitter";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Twitter (Optional)</FormLabel>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="twitter";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
          <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          <form on_submit={form.handle_submit (on_submit)} className="space-y-6">;
            <div className="space-y-4">;
              <FormField;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
            <div className="space - y-4">;
              <FormField;


                control={form.control}
                name="name";
                render={({ field }) => (
                  <FormItem>;
                    <FormLabel > Name / Brand</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Your name or brand name" {...field} />;
                    </FormControl>;
                    <FormMessage />;

              />;


              <FormField
                control={form && form.control}
                name="website"
                name="website"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;
                    <FormControl>;
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
                      <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )}

              />;

              <div className="grid sm:grid-cols-2 gap-4">;

                <FormField
                  control={form && form.control}
                  name="twitter"
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
;
              <div className="grid sm:grid-cols-2 gap-4">;
                <FormField;
                  control={form.control}
                  name="twitter";
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  control={form.control}
=======



                      <FormControl>;"
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;


<<<<<<< HEAD


                />;
                <FormField;

                  control={form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  name="instagram";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > Instagram (Optional)</FormLabel>;
                      <FormControl>;"
                        <Input placeholder="@username" {...field} />;
                      </FormControl>;
                      <FormMessage />;


<<<<<<< HEAD
              <div className="grid sm:grid-cols-2 gap-4">;                      <FormControl>;
=======
              <div className="grid sm:grid-cols-2 gap-4">;

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

                />;


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
                      <FormControl>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;

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

                <FormField
                  control={form && form.control}
=======

                <FormField;
                  control={form && form.control}"
                  name="youtube"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;
                    </FormItem>)}
                />;
              </div>;"
              <div className="grid sm:grid - cols - 2 gap - 4">;
                <FormField;
                  control={form.control}"
                  name="youtube";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > YouTube (Optional)</FormLabel>;
                      <FormControl>;"
                        <Input placeholder="Channel name or URL" {...field} />;
                      </FormControl>;
                      <FormMessage />;



                <FormField;
                  control={form && form.control}"
                  name="linkedin"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                    </FormItem>)}
                />;
                <FormField;
                  control={form.control}"
                  name="linkedin";
                  render={({ field }) => (
                    <FormItem>;
                      <FormLabel > LinkedIn (Optional)</FormLabel>;



                      <FormControl>;"
                        <Input placeholder="Profile URL or username" {...field} />;
                      </FormControl>;
                      <FormMessage />;
"
                name="niche"
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Your Niche</FormLabel>;
                    </FormItem>)}
                />;
              </div>;
              <FormField;
                control={form.control}"
                name="niche";
                render={({ field }) => (
                    <FormControl>;"
                      <Input placeholder="AI development, machine learning, tech tutorials, etc." {...field} />;
                    </FormControl>;
                    <FormDescription>;
                      What topics do you focus on in your content?;
                    </FormDescription>;
                    <FormMessage />;



                <FormField;
                  control={form && form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  name="audience_size"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                  </FormItem>)}
<<<<<<< HEAD
              />;
<<<<<<< HEAD
              <div className="grid sm:grid - cols - 2 gap-4">;
=======
              />;"
              <div className="grid sm:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <div className="grid sm:grid - cols - 2 gap - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <FormField;
                  control={form.control}"
                  name="audience_size";
                  render={({ field }) => (
                        <FormControl>;
                          <SelectTrigger>;"
                            <SelectValue placeholder="Select audience size" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
<<<<<<< HEAD

                />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



                <FormField;
                  control={form && form.control}"
=======


                <FormField
                  control={form && form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  name="payout_method"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
<<<<<<< HEAD
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;"
                          <SelectItem value="under1k">Under 1, 000</SelectItem>;"
                          <SelectItem value="1k - 10k">1, 000 - 10, 000</SelectItem>;"
                          <SelectItem value="10k - 50k">10, 000 - 50, 000</SelectItem>;"
                          <SelectItem value="50k - 100k">50, 000 - 100, 000</SelectItem>;"
=======
                      <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
                          <SelectItem value="under1k">Under 1, 000</SelectItem>;
                          <SelectItem value="1k - 10k">1, 000 - 10, 000</SelectItem>;
                          <SelectItem value="10k - 50k">10, 000 - 50, 000</SelectItem>;
                          <SelectItem value="50k - 100k">50, 000 - 100, 000</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <SelectItem value="over100k">Over 100, 000</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>)}
                />;
                <FormField;
<<<<<<< HEAD
                  control={form.control}"
                  name="payout_method";
                  render={({ field }) => (
                        <FormControl>;
                          <SelectTrigger>;"
                            <SelectValue placeholder="Select payout method" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;"
                          <SelectItem value="paypal">PayPal</SelectItem>;"
                          <SelectItem value="bank">Bank Transfer</SelectItem>;"
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>;"
=======
                  control={form.control}
                  name="payout_method";
                  render={({ field }) => (
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue placeholder="Select payout method" />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
                          <SelectItem value="paypal">PayPal</SelectItem>;
                          <SelectItem value="bank">Bank Transfer</SelectItem>;
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          <SelectItem value="platform_credit">Platform Credit</SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;

<<<<<<< HEAD
=======
                />;
              </div>;


              <FormField
                control={form && form.control}
                name="bio"

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Textarea
                        placeholder="Tell us about yourself and how you plan to promote Zion AI"
                        rows={4} 
                        {...field} 
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



              <FormField;
                control={form && form.control}"
                name="bio"
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

              <FormField
                control={form && form.control}
                name="bio"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      />;
                    </FormControl>;
                    <FormDescription>;
                      Limit: 500 characters;
                    </FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD


            <Button 
              type="submit" 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." : "Submit Application"}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}>;"
              {isSubmitting ? "Submitting..." : "Submit Application"}
<<<<<<< HEAD
                  </FormItem>)}
              />;
            </div>;
            <Button;
              type="submit";
<<<<<<< HEAD
              className="w - full bg - zion - purple hover:bg - zion - purple-dark";
=======

                  </FormItem>)}
              />;
            </div>;
            <Button;"
              type="submit";"
              className="w - full bg - zion - purple hover:bg - zion - purple - dark";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              className="w - full bg - zion - purple hover:bg - zion - purple - dark";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              disabled={is_submitting}
            >;"
              {is_submitting ? "Submitting..." : "Submit Application"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            </Button>;
          </form>;
        </Form>;
      </CardContent>;

<<<<<<< HEAD
<<<<<<< HEAD
    </Card>);

}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    </Card>);

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Button
              type="submit"
            <Button 
              type="submit" 
              className="w-full bg-zion-purple hover:bg-zion-purple-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
}


}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
