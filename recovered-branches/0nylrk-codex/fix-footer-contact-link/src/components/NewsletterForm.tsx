
import React from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export function NewsletterForm() {
  const [email, setEmail] = useState("");
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
export function NewsletterForm() {;  const [email, setEmail] = useState("");
  const [email, setEmail] = useState("");
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

import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Input } from "@/components/ui/input",
import { useState } from "react",

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


    e.preventDefault(),
    setIsSubmitting(true),

    // Simulate API call
    setTimeout(() => {

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
    <div className="w-full max-w-md mx-auto">;
      {isSubmitted ? (;"
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;"
          <p className="text-white font-medium">Thank you for subscribing!</p>;"
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <Input
          <Input
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
      )}
    </div>
  );
}
    </div>"

