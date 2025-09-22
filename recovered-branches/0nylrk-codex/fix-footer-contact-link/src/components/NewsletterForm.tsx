<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export function NewsletterForm() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const [email, setEmail] = useState("");
=======
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;  const [email, setEmail] = useState("");
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const [email, setEmail] = useState("");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Input } from "@/components/ui/input",
import { useState } from "react",

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function NewsletterForm() {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),

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

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
    e.preventDefault(),
    setIsSubmitting(true),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Simulate API call
    setTimeout(() => {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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

    // Simulate API call;
    setTimeout(() => {;
      setIsSubmitting(false);
      setIsSubmitted(true),;
      setEmail("");
    }, 1000);
  };

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="w-full max-w-md mx-auto">;
      {isSubmitted ? (;"
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;"
          <p className="text-white font-medium">Thank you for subscribing!</p>;"
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Input
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}

            onChange={(e: React && React.ChangeEvent<HTMLInputElement>) => setEmail(e && e.target.value)}
            required;
          />;
<Button"
            type="submit" 

            disabled={isSubmitting}"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple">;"
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}

}

            disabled={isSubmitting}"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple">;"
            {isSubmitting ? "Subscribing..." : "Subscribe"}
      ) :(;"
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input;"
            type="email";"
            placeholder="Enter your email";"
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
    </div>;"
            type="email";""
            placeholder="Enter your email";""
            className="flex-grow bg-zion-blue-light text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
required;
          />;
<Button ;"
            type="submit" ;
            disabled={isSubmitting}"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;"
            {isSubmitting ? "Subscribing..." :"Subscribe"}
          </Button>;
        </form>;
    </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
