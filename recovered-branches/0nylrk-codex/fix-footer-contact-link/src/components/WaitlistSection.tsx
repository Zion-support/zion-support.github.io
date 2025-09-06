<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

<<<<<<< HEAD

import { useState } from "react",
import { Button } from "@/components/ui/button",
import { GradientHeading } from "@/components/GradientHeading",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GradientHeading} from "@/components/GradientHeading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { GradientHeading } from "@/components/GradientHeading",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
=======
import { useToast } from "@/hooks/use-toast",
import { Checkbox } from "@/components/ui/checkbox",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function WaitlistSection() {
  const [email, setEmail] = useState(""),
  const [name, setName] = useState(""),
  const [role, setRole] = useState(""),
  const [agreeTerms, setAgreeTerms] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { toast } = useToast(),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({
        variant: "destructive"
        title: "Missing information"
        description: "Please fill all fields and agree to the terms."})
      return
    }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
<<<<<<< HEAD
    setIsSubmitting(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Success!"
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form
<<<<<<< HEAD
      setEmail("");
      setName("");
      setRole("");
=======
      setEmail(""),
      setName(""),
      setRole(""),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive"
        title: "Something went wrong"
        description: "Please try again later."})
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
import { useState } from './react';
import { Button } from '@/components / ui / button';
import { GradientHeading } from '@/components / GradientHeading';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { use_toast } from '@/hooks / use - toast';
import { Checkbox } from '@/components / ui / checkbox';
export /**
 * WaitlistSection - Function description
 */
function WaitlistSection() {
  const [email, set_email] = useState ("");
  const [name, set_name] = useState ("");
  const [role, set_role] = useState ("");
  const [agree_terms, setAgreeTerms] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
  const { toast } = use_toast ();
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default (),
    // Check condition
if ( {) {
  $2
}
      toast ({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill all fields and agree to the terms."}),
      return;
    }
    setIsSubmitting (true);
;
    try {
      // Simulating an API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
;
      toast ({
        title: "Success!",
        description: "Thank you for registering with Zion. We'll be in touch soon."}),
      // Reset form;
      set_email ("");
      set_name ("");
      set_role ("");
      setAgreeTerms (false);
    } catch (error) {
      toast ({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later."});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (!email || !name || !role || !agreeTerms) {;
      toast({;
        variant: "destructive",;
        title: "Missing information",;
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
    setIsSubmitting(true);
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
        title: "Success!",;
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;
      // Reset form;
      setEmail("");
      setName("");
      setRole("");
      setAgreeTerms(false);
    } catch (error) {;
      toast({;
        variant: "destructive",;
        title: "Something went wrong",;
        description: "Please try again later."});
    } finally {;
      setIsSubmitting(false);
    }
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

=======
    } finally {
      setIsSubmitting(false)
    }

<<<<<<< HEAD
=======
  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
  return (
=======

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { useToast } from "@/hooks/use-toast",;
import { Checkbox } from "@/components/ui/checkbox",;
;
export function WaitlistSection() {;
  const [email, setEmail] = useState(""),;
  const [name, setName] = useState(""),;
  const [role, setRole] = useState(""),;
  const [agreeTerms, setAgreeTerms] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { toast } = useToast(),;
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!email || !name || !role || !agreeTerms) {;
      toast({;
        variant:"destructive",;
        title:"Missing information",;
        description:"Please fill all fields and agree to the terms."}),;
      return,;
    }
    ;
    setIsSubmitting(true),;
    ;
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      ;
      toast({;
        title:"Success!",;
        description:"Thank you for registering with Zion. We'll be in touch soon."}),;
      ;
      // Reset form;
      setEmail(""),;
      setName(""),;
      setRole(""),;
      setAgreeTerms(false),;
    } catch (error) {;
      toast({;
        variant:"destructive",;
        title:"Something went wrong",;
        description:"Please try again later."}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4">;
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
<<<<<<< HEAD
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>Register Now</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4">
              Join our growing community of AI and tech professionals.
              Complete your registration to access exclusive features and personalized services.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
                onChange={(e) => setName(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
                onChange={(e) => setEmail(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Your Role</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
                onChange={(e) => setRole(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label
                htmlFor="terms"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
<<<<<<< HEAD
=======
                onChange={(e) => setRole(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />
              <Label
                htmlFor="terms"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="text-sm text-zion-slate font-normal"
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>
<<<<<<< HEAD
=======


            <Button 
              type="submit" 
              disabled={isSubmitting} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
            <Button
              type="submit"
              disabled={isSubmitting}
=======
            <Button 
              type="submit" 
              disabled={isSubmitting} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              {isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { useToast } from "@/hooks/use-toast",;
import { Checkbox } from "@/components/ui/checkbox",;
export function WaitlistSection() {;
  const [email, setEmail] = useState(""),;
  const [name, setName] = useState(""),;
  const [role, setRole] = useState(""),;
  const [agreeTerms, setAgreeTerms] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { toast } = useToast(),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || !name || !role || !agreeTerms) {;
      toast({;
        variant: "destructive",;
        title: "Missing information",;
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
                className="text-sm text-zion-slate font-normal">;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
            <Button
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
              {isSubmitting ? "Processing..." : "Complete Registration"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
;
  return (
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;
      {/* Background elements */}
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity - 10">;
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded - full filter blur-[100px]"></div>;
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded - full filter blur-[100px]"></div>;
      </div>;
      <div className="container mx - auto px - 4 relative z - 10">;
        <div className="max - w-3xl mx - auto">;
          <div className="text - center mb - 12">;
            <GradientHeading > Register Now</GradientHeading>;
            <p className="text - zion - slate - light text - lg mt - 4">;
=======
;
    setIsSubmitting(true),;
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      toast({;
        title: "Success!",;
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;
      // Reset form;
      setEmail(""),;
      setName(""),;
      setRole(""),;
      setAgreeTerms(false);
    } catch (error) {;
      toast({;
        variant: "destructive",;
        title: "Something went wrong";
        description: "Please try again later."});
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
<<<<<<< HEAD
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;
              <Input;
                id="name";
                placeholder="John Smith";
                value={name}
                on_change={(e) => set_name (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="email">Email Address</Label>;
              <Input;
                id="email";
                type="email";
                placeholder="you@company.com";
                value={email}
                on_change={(e) => set_email (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="role">Your Role</Label>;
              <Input;
                id="role";
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}
                on_change={(e) => set_role (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="flex items - center space - x-2">;
              <Checkbox;
                id="terms";
                checked={agree_terms}
                onCheckedChange={(checked) => setAgreeTerms (checked as boolean)}
              />;
              <Label;
                html_for="terms";
                className="text - sm text - zion - slate font - normal";
=======
          ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
              <Input;
                id="name";
                placeholder="John Smith";
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
              <Input;
                id="email";
                type="email";
                placeholder="you@company.com";
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
              <Input;
                id="role";
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
            ;
            <div className="flex items-center space-x-2">;
              <Checkbox ;
                id="terms" ;
=======
            <div className="flex items-center space-x-2">;
              <Checkbox;
                id="terms";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label;
                htmlFor="terms";
                className="text-sm text-zion-slate font-normal";
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button;
              type="submit";
              disabled={is_submitting}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
            >;
              {is_submitting ? "Processing..." : "Complete Registration"}
=======
            ;
            <Button ;
              type="submit" ;
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." :"Complete Registration"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Button;
              type="submit";
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." : "Complete Registration"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>;
          </form>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
    </section>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
    </section>);
=======
    </section>;
  ),; const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
if (!email || !name || !role || !agreeTerms) {
  toast ({
  return;
}setIsSubmitting (true);
}finally {
  setIsSubmitting (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {
  /* Background elements */ 
}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now</GradientHeading> <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address</Label> <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime. </Label> </div> <Button </Button> </form> </div> </div> </section>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/WaitlistSection.tsx
=======
    </section>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
