<<<<<<< HEAD
=======
<<<<<<< HEAD
const [email, setEmail] = useState("");
=======

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GradientHeading} from "@/components/GradientHeading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [email, setEmail] = useState("");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
=======
  const { toast } = useToast();
<<<<<<< HEAD


>>>>>>> merged-prs-20250907-203621
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { GradientHeading } from "@/components/GradientHeading",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
<<<<<<< HEAD
export function WaitlistSection() {
  const [email, setEmail] = useState($2);
  const [name, setName] = useState($2);
  const [role, setRole] = useState($2);
  const [agreeTerms, setAgreeTerms] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { toast } = useToast($2);
=======
import { useToast } from "@/hooks/use-toast",
import { Checkbox } from "@/components/ui/checkbox",
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const { toast } = useToast();
"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { GradientHeading } from "@/components/GradientHeading","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label",";
import { useToast } from "@/hooks/use-toast";"
import { Checkbox } from "@/components/ui/checkbox";"
import { useToast } from "@/hooks/use-toast","
import { Checkbox } from "@/components/ui/checkbox",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function WaitlistSection() {
  const [email, setEmail] = useState(""),

  const [name, setName] = useState(""),
  const [role, setRole] = useState(""),

import {useState} from "react";""
import {Button} from "@/components/ui/button";""
import {GradientHeading} from "@/components/GradientHeading";""
import {Input} from "@/components/ui/input";""
import {Label} from "@/components/ui/label";""
import {useToast} from "@/hooks/use-toast";""
import {Checkbox} from "@/components/ui/checkbox";"
export function WaitlistSection() {;
"
  const [email, setEmail] = useState("");""
  const [name, setName] = useState("");""
  const [role, setRole] = useState("");"
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();"
import { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { GradientHeading } from "@/components/GradientHeading",""
import { Input } from "@/components/ui/input",""
import { Label } from "@/components/ui/label",""
import { useToast } from "@/hooks/use-toast";""
import { Checkbox } from "@/components/ui/checkbox";""
import { useToast } from "@/hooks/use-toast",""
import { Checkbox } from "@/components/ui/checkbox","
export function WaitlistSection() {"
  const [email, setEmail] = useState(""),""
  const [name, setName] = useState(""),""
  const [role, setRole] = useState(""),"
pr-12325
  const [agreeTerms, setAgreeTerms] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const { toast } = useToast(),
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({
        variant: "destructive"
        title: "Missing information"
        description: "Please fill all fields and agree to the terms."})
      return
    }



    setIsSubmitting(true);
    try {
      // Simulating an API call
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
      toast($2);
      // Reset form
      setEmail($2);
      setName($2);
      setRole($2);
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later."})
    } finally {
      setIsSubmitting(false)
    }
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
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
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
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}
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
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              {isSubmitting ? "Processing..." : "Complete Registration"}
            </Button>
          </form>
        </div>
=======
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({"
        variant: "destructive"","
  title: "Missing information"")"
        description: "Please fill all fields and agree to the terms."})"
      return;
    }

    setIsSubmitting(true);
    try {
  // TODO: Implement
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(true),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({"
        variant: "destructive"","
  title: "Missing information"")"
        description: "Please fill all fields and agree to the terms."})"
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulating an API call

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
<<<<<<< HEAD
=======
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      await new Promise(resolve => setTimeout(resolve, 1000)),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Success!"
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form
<<<<<<< HEAD
      setEmail(""),
      setName(""),
      setRole(""),
=======
      setEmail("");
      setName("");
      setRole("");
<<<<<<< HEAD
      setEmail(""),
      setName(""),
      setRole(""),
setEmail(""),
      setName(""),
      setRole(""),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive"
        title: "Something went wrong"
        description: "Please try again later."})
<<<<<<< HEAD
=======

<<<<<<< HEAD
  // TODO: Implement
}
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(true),
    try {

  // TODO: Implement
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),

        title: "Success!"",)"
  description: "Thank you for registering with Zion. We'll be in touch soon."})"
      // Reset form;"
      setEmail("");""
      setName("");""
      setRole("");""
      setEmail(""),""
      setName(""),""
      setRole(""),"
      setAgreeTerms(false)
    } catch (error) {
  title: "Something went wrong"")"
        description: "Please try again later."})""
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from './react';
import { Button } from '@/components / ui / button';
import { GradientHeading } from '@/components / GradientHeading';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { use_toast } from '@/hooks / use - toast';
import { Checkbox } from '@/components / ui / checkbox';
export /**
 * WaitlistSection - Function description;
 */
function WaitlistSection() {
  const [email, set_email] = useState ("");""
  const [name, set_name] = useState ("");""
  const [role, set_role] = useState ("");"
  const [agree_terms, setAgreeTerms] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
  const { toast } = use_toast ();
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default (),
    // Check condition;
if ( {) {
  $2;
      toast ({"
        variant: "destructive",""
        title: "Missing information",")"
        description: "Please fill all fields and agree to the terms."}),"
    setIsSubmitting (true);
  // TODO: Implement
      // Simulating an API call;
      await new Promise (resolve => set_timeout (resolve, 1000));
        title: "Success!",")"
        description: "Thank you for registering with Zion. We'll be in touch soon."}),"
      // Reset form;"
      set_email ("");""
      set_name ("");""
      set_role ("");"
      setAgreeTerms (false);
    } catch (error) {
      toast ({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later."});
<<<<<<< HEAD

        title: "Something went wrong",")"
        description: "Please try again later."});"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {
  // TODO: Implement
      setIsSubmitting (false);
    }
  }
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault(),;
    if (!email || !name || !role || !agreeTerms) {;
<<<<<<< HEAD
      toast({;"
        variant: "destructive",;""
        title: "Missing information",")"
        description: "Please fill all fields and agree to the terms."}),;"

    try {;
      // Simulating an API call;

        title: "Success!",")"
        description: "Thank you for registering with Zion. We'll be in touch soon."}),;"
      // Reset form;"
      setRole("");"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setAgreeTerms(false);
    } catch (error) {;
        title: "Something went wrong",")"
    } finally {;
      setIsSubmitting(false);
  };
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {

      setIsSubmitting(false)
pr-12325

  },
<<<<<<< HEAD

  return (

=======
  

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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      ;
      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;"
            <p className="text-zion-slate-light text-lg mt-4">;
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
    } finally {
      setIsSubmitting(false)
    }
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  },
  
  return (
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>
>>>>>>> merged-prs-20250907-203621
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
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={(e) => setName(e && e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
=======

<<<<<<< HEAD
=======
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={(e) => setEmail(e && e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
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

<<<<<<< HEAD
<div className="flex items-center space-x-2">;
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
=======
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={(e) => setRole(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
<<<<<<< HEAD
            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 
=======

            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label
                htmlFor="terms"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                className="text-sm text-zion-slate font-normal"
              >
                I agree to receive updates about Zion and understand I can unsubscribe anytime.
              </Label>
            </div>

            <Button "
              type="submit" 
              disabled={isSubmitting} 

}
<<<<<<< HEAD
}
;
=======
<<<<<<< HEAD
import { useState } from "react";"
import { Button } from "@/components/ui/button";"
import { GradientHeading } from "@/components/GradientHeading",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { useToast } from "@/hooks/use-toast",;"
import { Checkbox } from "@/components/ui/checkbox",;"
export function WaitlistSection() {;
  }
  const [email, setEmail] = useState(""),;"
  const handleSubmit = async ("e": React.FormEvent) => {;
    }
=======
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { useToast } from "@/hooks/use-toast",;

<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox",;
export function WaitlistSection() { return null; }
  const { toast } = useToast(),;
  const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/chore/fix-lint-and-merge
    e.preventDefault(),;
    if (!email || !name || !role || !agreeTerms) {;

        title: "Missing information",
        description: "Please fill all fields and agree to the terms."}),;
      return;
    }
=======
<<<<<<< HEAD
            <Button
              type="submit"
              disabled={isSubmitting}
            <Button 
              type="submit" 
              disabled={isSubmitting} 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className="text-sm text-zion-slate font-normal">;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;

              {isSubmitting ? "Processing..." : "Complete Registration"}
<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        title: "Missing information",,
  description: "Please fill all fields and agree to the terms."}),;
      return
};

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow-hidden">;
      {/* Background elements */}
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity-10">;
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded-full filter blur-[100px]"></div>;
      </div>;
      <div className="container mx - auto px - 4 relative z-10">;
        <div className="max - w-3xl mx-auto">;
          <div className="text - center mb-12">;
            <GradientHeading > Register Now</GradientHeading>;
            <p className="text - zion - slate - light text - lg mt - 4">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
    setIsSubmitting(true),;
    try {;
      // Simulating an API call;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      toast({;
<<<<<<< HEAD
        title: "Success!",
=======
        title: "Success!",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
<<<<<<< HEAD
          ;
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
=======
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;
<<<<<<< HEAD
;
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Input;
                id="name";
                placeholder="John Smith";
                value={name}
<<<<<<< HEAD
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
=======
                on_change={(e) => set_name (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="email">Email Address</Label>;
<<<<<<< HEAD
onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Input;
                id="email";
                type="email";
                placeholder="you@company.com";
                value={email}
<<<<<<< HEAD
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
=======
                on_change={(e) => set_email (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue - light";
              />;
            </div>;
            <div className="space - y-2">;
              <Label html_for="role">Your Role</Label>;
<<<<<<< HEAD
onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Input;
            <p className="text - zion - slate - light text - lg mt-4">;
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;              <Input;
                id="name";
                placeholder="John Smith";
                value={name}              <Input;
                id="role";
                placeholder="IT Manager, Developer, Business Owner, etc.";
                value={role}
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
                on_change={(e) => set_role (e.target.value)}
                className="bg - zion - blue - dark border - zion - blue-light";
              />;
            </div>;
            <div className="flex items - center space-x-2">;
              <Checkbox;
                id="terms";
                checked={agree_terms}
                onCheckedChange={(checked) => setAgreeTerms (checked as boolean)}
              />;
              <Label;
                html_for="terms";
<<<<<<< HEAD

                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;

=======
                className="text - sm text - zion - slate font - normal";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
            ;
            <Button ;
              type="submit" ;
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." :"Complete Registration"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Button;
              type="submit";
<<<<<<< HEAD
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." : "Complete Registration"}
=======
              disabled={is_submitting}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
            >;
              {is_submitting ? "Processing..." : "Complete Registration"}
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
              disabled={isSubmitting} ;
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
            >;
              {isSubmitting ? "Processing..." : "Complete Registration"}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </Button>;
          </form>;
        </div>;
      </div>;

<<<<<<< HEAD
=======



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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
</section>);
}
}
                className="text - sm text - zion - slate font-normal";              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
  return ("
    <section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden">;"

              </Label>;
            </div>;
            <Button;"
              type="submit""
              disabled={isSubmitting} "
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
</Button>"
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;"
</section>"
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;"
</div>"
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;""
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;"
      </div>;"
      <div className="container mx-auto px-4 relative z-10">;"
        <div className="max-w-3xl mx-auto">;"
          <div className="text-center mb-12">;"
</div>
            <GradientHeading>Register Now;"
            <p className="text-zion-slate-light text-lg mt-4">;"
</p>
            </p>;
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;"
</form>"
            <div className="space-y-2">;"
              <Label htmlFor="name">Full Name;""
</section>
              <Input;"
                id="name"""
                placeholder="John Smith""
                value={name}
)
                onChange={(e) => setName(e && e.target.value)}

              <Label htmlFor="email">Email Address;"
                id="email"""
                type="email"""
                placeholder="you@company && company.com""
                value={email}

                onChange={(e) => setEmail(e && e.target.value)}

              <Label htmlFor="role">Your Role;"
                id="role"""
                placeholder="IT Manager, Developer, Business Owner, etc.""
                value={role}

                onChange={(e) => setRole(e && e.target.value)}

            <div className="flex items-center space-x-2">;"
              <Checkbox;"
                id="terms""
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}

              <Label;"
                htmlFor="terms""
            <Button;"
              type="submit""
              disabled={isSubmitting} 

              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
            >

          </form>
            </div>;
              disabled={isSubmitting} "
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"
    <section id="waitlist" className="py - 20 bg - zion - blue - dark relative overflow - hidden">;"
      <div className="absolute top - 0 left - 0 w - full h - full overflow - hidden opacity - 10">;"
        <div className="absolute -top - 40 -left - 40 w - 80 h - 80 bg - zion - purple rounded - full filter blur-[100px]"></div>;""
        <div className="absolute top - 40 right - 20 w - 60 h - 60 bg - zion - cyan rounded - full filter blur-[100px]"></div>;"
      <div className="container mx - auto px - 4 relative z - 10">;"
        <div className="max - w-3xl mx - auto">;"
          <div className="text - center mb - 12">;"
            <GradientHeading > Register Now;"
            <p className="text - zion - slate - light text - lg mt - 4">;"
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;"
            <div className="space - y-2">;"
              <Label html_for="name">Full Name;"
                id="name";""
                placeholder="John Smith";"
                on_change={(e) => set_name (e.target.value)}

              <Label html_for="email">Email Address;"
                id="email";""
                type="email";""
                placeholder="you@company.com";"
                on_change={(e) => set_email (e.target.value)}

              <Label html_for="role">Your Role;"
                id="role";""
                placeholder="IT Manager, Developer, Business Owner, etc.";"
                on_change={(e) => set_role (e.target.value)}

            <div className="flex items - center space - x-2">;"
                id="terms";"
                checked={agree_terms}
                onCheckedChange={(checked) => setAgreeTerms (checked as boolean)}

                html_for="terms";""
                className="text - sm text - zion - slate font - normal";"
              >;

              type="submit";"
              disabled={is_submitting}"
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"

            <Button ;"
              type="submit" ;"
              disabled={isSubmitting} ;"
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"

          </form>;
    </section>);
    </section>;"
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {"
</section>)"
}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime.  </div> <Button  </form> </div> </div> </section>)"
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
<<<<<<< HEAD
};
return (<section id="waitlist" className="py-20 bg-zion-blue-dark relative overflow-hidden" > {
  /* Background elements */ 

}<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10" > <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]" ></div> <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]" ></div> container mx-auto px-4 relative z-10"> <div className=" max-w-3xl mx-auto"> <div className=" text-center mb-12"> <GradientHeading>Register Now</GradientHeading> <p className=" text-zion-slate-light text-lg mt-4"> Join our growing community of AI and tech professionals. Complete your registration to access exclusive features and personalized services. </p> </div> /> </div> <div className=" space-y-2"> <Label htmlFor=" email">Email Address</Label> <Input /> </div> <div className=" space-y-2"> <Label htmlFor=" role">Your Role</Label> <Input /> </div> <div className=" flex items-center space-x-2"> <Checkbox /> <Label htmlFor=" terms"className=" text-sm text-zion-slate font-normal" > I agree to receive updates about Zion and understand I can unsubscribe anytime. </Label> </div> <Button </Button> </form> </div> </div> </section>) 
}
    </section>;
  );
}
;

}
;
    </section>);
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
