<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
import React from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function NewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD

  const handleSubmit = (e: React.FormEvent) => {
=======


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true),
      setEmail("")
    }, 1000)
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
    setIsSubmitting(true);
// Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
        >
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { useState } from "react",;
export function NewsletterForm() {;
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSubmitted, setIsSubmitted] = useState(false),;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false);
      setIsSubmitted(true),;
      setEmail("");
    }, 1000);
  };
  return (
=======
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { useState } from "react",;
;
export function NewsletterForm() {;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="w-full max-w-md mx-auto">;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
<<<<<<< HEAD
      ) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
            onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => setEmail(e && e.target.value)}
            required;
          />;
          <Button
            type="submit" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple">;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
=======
      ) :(;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input;
            type="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </Button>;
        </form>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

    </div>;

========
    </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
  );
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { useState  } from './react';
export /**
 * NewsletterForm - Function description
 */
function NewsletterForm() {
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
    <div className="w - full max - w-md mx - auto">;
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
            className="flex - grow bg - zion - blue - light text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple";
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx

        </form>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
    </div>
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
        </form>)}
    </div>);
=======
  ),; const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate API call setTimeout ( () => {
  
};
}</div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/NewsletterForm.tsx
}
=======
      )}
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
