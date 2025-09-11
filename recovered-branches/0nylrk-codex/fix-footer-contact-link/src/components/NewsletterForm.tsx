<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Input } from "@/components/ui/input",
import { useState } from "react",
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function NewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),

<<<<<<< HEAD

  const handleSubmit = (e: React.FormEvent) => {

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
    setIsSubmitting(true);
// Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      (setIsSubmitted(true), setEmail(""));
    }, 1000);
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false);
      setIsSubmitted(true),;
      setEmail("");
    }, 1000);
  };
<<<<<<< HEAD
  return (
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
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="w-full max-w-md mx-auto">;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
<<<<<<< HEAD
=======
      ) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => setEmail(e && e.target.value)}
            required;
          />;
          <Button
            type="submit" 
<<<<<<< HEAD
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple">;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
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
          </Button>;
        </form>;
      )}
    </div>;
      )}
    </div>
  );
        </form>)}
    </div>);
  ),; const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate API call setTimeout ( () => {
  
};
}</div>) 
}
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple">;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}

    </div>;

  );
=======
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

        </form>;


      )}
    </div>
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
