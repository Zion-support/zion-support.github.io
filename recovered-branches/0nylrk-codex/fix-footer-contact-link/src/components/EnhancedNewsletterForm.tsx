<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Mail } from "lucide-react";
export function EnhancedNewsletterForm() {;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);


    // Simulate API call;
    setTimeout(() => {;

=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState } from "react";
import { Mail } from "lucide-react";
import { useState } from "react",
import { Mail } from "lucide-react",

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD
    // Simulate API call
    setTimeout(() => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),

  const handleSubmit = (e: React.FormEvent) => {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },

  return (
<<<<<<< HEAD
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (


      


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (

<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { useState } from "react",;
import { Mail } from "lucide-react",;
;
export function EnhancedNewsletterForm() {;
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSubmitted, setIsSubmitted] = useState(false),;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    ;
    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true),;
      setEmail("");
    }, 1000),;
  },;
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;
          <Mail className="h-6 w-6" />;
        </div>;
        <div>;
          <h4 className="text-lg font-bold text-white">Stay Updated</h4>;
<<<<<<< HEAD
          <p className="text-zion-slate-light text-sm">;
=======
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { useState  } from './react';
import { Mail  } from './lucide-react';
export /**
 * EnhancedNewsletterForm - Function description
 */
function EnhancedNewsletterForm() {
  const [email, set_email] = useState ("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [is_submitted, setIsSubmitted] = useState (false);
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    setIsSubmitting (true);
;
    // Simulate API call;
    set_timeout (() => {
      setIsSubmitting (false);
      (setIsSubmitted (true), set_email (""));
    }, 1000);
  }
;
  return (
    <div className="w - full max - w-lg mx - auto bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6">;
      <div className="flex items - center mb - 4">;
        <div className="p - 2 bg - zion - purple / 20 rounded - full text - zion - cyan mr - 3">;
          <Mail className="h - 6 w - 6" />;
        </div>;
        <div>;
          <h4 className="text - lg font - bold text - white">Stay Updated</h4>;
          <p className="text - zion - slate - light text - sm">;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Get exclusive offers, trending AI news, and early access to best;
            deals;
          </p>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">

=======
      
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
<<<<<<< HEAD
<<<<<<< HEAD


      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;

=======
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div
              key={i}
              className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String && String.fromCharCode(65 + i)}
<<<<<<< HEAD
=======
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>;
        </div>;
      </div>;
      ;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) :(;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input;
            type="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required;
          />;
          <Button ;
            type="submit" ;
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing..." :"Subscribe"}
          </Button>;
        </form>;
      )}
      ;
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String.fromCharCode(65 + i)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </div>;
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
=======
      {is_submitted ? (
        <div className="text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40">;
          <p className="text - white font - medium">Thank you for subscribing!</p>;
          <p className="text - zion - slate - light mt - 1">;
            We'll keep you updated with the latest from Zion.;
          </p>;
        </div>) : (
        <form;
          on_submit={handle_submit}
          className="flex flex - col space - y-3 sm:flex - row sm:space - y-0 sm:space - x-2";
        >;
          <Input;
            type="email";
            placeholder="Enter your email";
            className="flex - grow bg - zion - blue - dark text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple";
            value={email}
            on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
              set_email (e.target.value);
            }
            required;
          />;
          <Button;
            type="submit";
            disabled={is_submitting}
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple";
          >;
            {is_submitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>)}
      <div className="mt - 4 flex items - center text - xs text - zion - slate - light">;
        <div className="flex -space - x-1 mr - 2">;
          {[...Array (3)].map ((_, i) => (
            <div;
              key={i}
              className="h - 5 w - 5 rounded - full border border - zion - blue - dark bg - zion - blue flex items - center justify - center text - zion - cyan";
            >;
              {String.fromCharCode (65 + i)}
            </div>))}
        </div>;
        <span > Join 10, 000+ tech professionals who already subscribe</span>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
<<<<<<< HEAD
<<<<<<< HEAD


}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {[...Array(3)].map((_, i) => (
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div
              key={i}
              className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  );
}
  ),; const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate API call setTimeout ( () => {
  
};
}</div>) ) 
}</div> <span>Join 10, 000+ tech professionals who already subscribe</span> </div> </div>) 
}
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
