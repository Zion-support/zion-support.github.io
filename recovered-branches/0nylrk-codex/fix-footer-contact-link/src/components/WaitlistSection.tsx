
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GradientHeading} from "@/components/GradientHeading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
<<<<<<< HEAD
<<<<<<< HEAD


import { useState } from "react",
import { Button } from "@/components/ui/button",
import { GradientHeading } from "@/components/GradientHeading",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast",
import { Checkbox } from "@/components/ui/checkbox",
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsSubmitting(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Success!"
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form
<<<<<<< HEAD
<<<<<<< HEAD
      setEmail(""),
      setName(""),
      setRole(""),
=======
      setEmail("");
      setName("");
      setRole("");
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setEmail("");
      setName("");
      setRole("");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive"
        title: "Something went wrong"
        description: "Please try again later."})
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<< HEAD
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
=======

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!email || !name || !role || !agreeTerms) {;
      toast({;
        variant: "destructive",;
        title: "Missing information",;
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
<<<<<<< HEAD
    setIsSubmitting(true);
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
        title: "Success!",;
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;
=======

    setIsSubmitting(true);

    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({;
        title: "Success!",;
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    } finally {
      setIsSubmitting(false)
    }

  },
  

  return (

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
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}
=======

=======
    } finally {
      setIsSubmitting(false)
    }
  }

  },
  
  return (
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;
      {/* Background elements */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    } finally {
      setIsSubmitting(false)
    }
  }

<<<<<<< HEAD
  },
  
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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setName(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setEmail(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setRole(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label
                htmlFor="terms"
<<<<<<< HEAD
<<<<<<< HEAD
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
                className="text-sm text-zion-slate font-normal"
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <Button 
              type="submit" 
              disabled={isSubmitting} 


<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              type="submit"
              disabled={isSubmitting}
            <Button 
              type="submit" 
              disabled={isSubmitting} 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="text-sm text-zion-slate font-normal">;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
              {isSubmitting ? "Processing..." : "Complete Registration"}
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
=======
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input;
                id="name";
                placeholder="John Smith";
                value={name}
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                on_change={(e) => set_name (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="email">Email Address</Label>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input;
                id="email";
                type="email";
                placeholder="you@company.com";
                value={email}
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                on_change={(e) => set_email (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="role">Your Role</Label>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Input;
                id="role";
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}
<<<<<<< HEAD
<<<<<<< HEAD
                onChange={(e) => setRole(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="flex items-center space-x-2">;
              <Checkbox;
                id="terms";
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label;
                htmlFor="terms";
                className="text-sm text-zion-slate font-normal";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
<<<<<<< HEAD
            ;
            <Button ;
              type="submit" ;
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." :"Complete Registration"}
            <Button;
              type="submit";
<<<<<<< HEAD
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." : "Complete Registration"}
=======
=======
            <Button;
              type="submit";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              disabled={is_submitting}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
            >;
              {is_submitting ? "Processing..." : "Complete Registration"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </form>;
        </div>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </section>);
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
};
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {
  /* Background elements */ 
}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now</GradientHeading> <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address</Label> <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime. </Label> </div> <Button </Button> </form> </div> </div> </section>) 
}
    </section>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
