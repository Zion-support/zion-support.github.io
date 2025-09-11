
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GradientHeading} from "@/components/GradientHeading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useToast} from "@/hooks/use-toast";
import {Checkbox} from "@/components/ui/checkbox";
export function WaitlistSection() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email |!name |!role |!agreeTerms) {
      toast({
        variant: "destructive"
        title: "Missing information"
        description: "Please fill all fields and agree to the terms."})
      return
    }

=======    setIsSubmitting(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

=======    
    setIsSubmitting(true),
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Success!"
        description: "Thank you for registering with Zion. We'll be in touch soon."})
      // Reset form
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">;
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-zion-purple rounded-full filter blur-[100px]"></div>;
        <div className="absolute top-40 right-20 w-60 h-60 bg-zion-cyan rounded-full filter blur-[100px]"></div>;
      </div>;      <div className="container mx-auto px-4 relative z-10">;
        <div className="max-w-3xl mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>Register Now</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4">;
              Join our growing community of AI and tech professionals. ;
              Complete your registration to access exclusive features and personalized services.;
            </p>;
          </div>;
=======
                onChange={(e) => setRole(e && e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light";
              />;
            </div>;
            <div className="flex items-center space-x-2">;
              <Checkbox
                id="terms" 

            <Button 
              type="submit" 
              disabled={isSubmitting} 


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
