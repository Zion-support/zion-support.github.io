
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
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

>>>>>>> main
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
=======
<<<<<<< HEAD
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
=======


>>>>>>> main
export function WaitlistSection() {
  const [email, setEmail] = useState(""),
  const [name, setName] = useState(""),
  const [role, setRole] = useState(""),
  const [agreeTerms, setAgreeTerms] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { toast } = useToast(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
<<<<<<< HEAD

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
    setIsSubmitting(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



>>>>>>> main
    
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
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
>>>>>>> main
      setAgreeTerms(false)
    } catch (error) {
      toast({
        variant: "destructive"
        title: "Something went wrong"
        description: "Please try again later."})
<<<<<<< HEAD
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
=======

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

    } finally {
      setIsSubmitting (false);
    }
  }

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

=======
    } finally {
      setIsSubmitting(false)
    }

  },
  
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
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
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;

          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;

>>>>>>> main
              <Input
                id="name"
                placeholder="John Smith"
                value={name}
<<<<<<< HEAD
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

                onChange={(e) => setName(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;

            <div className="space-y-2">;
              <Label htmlFor="email">Email Address</Label>;

              <Input
                id="email"
                type="email"
                placeholder="you@company && company.com"
                value={email}

                onChange={(e) => setEmail(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;

            <div className="space-y-2">;
              <Label htmlFor="role">Your Role</Label>;

>>>>>>> main
              <Input
                id="role"
                placeholder="IT Manager, Developer, Business Owner, etc."
                value={role}
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
<<<<<<< HEAD
            <Button
              type="submit"
              disabled={isSubmitting}
=======
            <Button 
              type="submit" 
              disabled={isSubmitting} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

                onChange={(e) => setRole(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;

            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 

                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />;
              <Label
                htmlFor="terms"


            <Button 
              type="submit" 
              disabled={isSubmitting} 


>>>>>>> main
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
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

                className="text-sm text-zion-slate font-normal">;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;

            <Button
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
              {isSubmitting ? "Processing..." : "Complete Registration"}
=======



=======
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
>>>>>>> main
              Join our growing community of AI and tech professionals.;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
<<<<<<< HEAD
          <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-light p-8 rounded-lg border border-zion-purple/20">;
            <div className="space-y-2">;
              <Label htmlFor="name">Full Name</Label>;
=======
          <form on_submit={handle_submit} className="space - y-6 bg - zion - blue - light p - 8 rounded - lg border border - zion - purple / 20">;
            <div className="space - y-2">;
              <Label html_for="name">Full Name</Label>;
>>>>>>> main
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
>>>>>>> main
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
>>>>>>> main
              <Input;
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
>>>>>>> main
              >;
                I agree to receive updates about Zion and understand I can unsubscribe anytime.;
              </Label>;
            </div>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
            </Button>;
          </form>;
        </div>;
      </div>;
<<<<<<< HEAD
    </section>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </section>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
