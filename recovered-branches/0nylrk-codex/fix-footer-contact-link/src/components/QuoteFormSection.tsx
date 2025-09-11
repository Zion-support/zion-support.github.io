<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
export function QuoteFormSection() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";


  const handleSubmit = (e: React.FormEvent) => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  }
<<<<<<< HEAD
=======

  const handleSubmit = (e: React.FormEvent) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false),
      setIsSubmitted(true)
    }, 1000)
  },

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
    setIsSubmitting(true);
// Simulate form submission
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Get a Quote Now</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Request your instant commercial proposal and discover how Zion can
            revolutionize your IT operations
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-zion-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Quote Request Sent!
              </h3>
              <p className="text-zion-slate-light mb-6">
                Thank you for your interest in Zion's services. Our team will
                prepare your personalized commercial proposal and contact you
                shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Name
                  </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { Button } from "./ui/button",;
import { Input } from "./ui/input",;
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
;
export function QuoteFormSection() {;
  const [isSubmitted, setIsSubmitted] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    ;
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true);
<<<<<<< HEAD
    }, 1000),;
  },;
;
  return (;
=======
    }, 1000);
  };

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Get a Quote Now</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations;
          </p>;
        </div>;
<<<<<<< HEAD
;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;
          {isSubmitted ? (;
            <div className="text-center py-8">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;
<<<<<<< HEAD
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
=======
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www && www.w3.org/2000/svg">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;
                </svg>;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;
              <p className="text-zion-slate-light mb-6">;
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.;
              </p>;
<<<<<<< HEAD
              <Button ;
=======
              <Button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={() => setIsSubmitted(false)}
                variant="outline" ;
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
              >;
                Submit Another Request;
              </Button>;
            </div>;
<<<<<<< HEAD
          ) :(;
=======
          ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Input
                    id="name"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input;
                    id="name";
                    type="text";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    required;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </div>;
                <div>;
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Company;
                  </label>;
<<<<<<< HEAD
<<<<<<< HEAD
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Company
                  </label>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input;
                    id="company";
                    type="text";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </div>;
                <div>;
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Email;
                  </label>;
<<<<<<< HEAD
<<<<<<< HEAD
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Email
                  </label>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Input
                    id="email"
                    type="email"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input;
                    id="email";
                    type="email";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    required;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />;
                </div>;
                <div>;
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Phone;
                  </label>;
<<<<<<< HEAD
<<<<<<< HEAD
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Phone
                  </label>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
<<<<<<< HEAD
<<<<<<< HEAD
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >
                  I'm interested in (select all that apply)
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                  {[
"AI Products/Services"
                    "IT Equipment"
                    "Server Solutions"
                    "Storage Solutions"
                    "Networking"
                    "24/7 Support"
                    "Recycling Services"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <input
                        id={`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
                      />

<<<<<<< HEAD
<<<<<<< HEAD
                      <label
                        htmlFor={`interest-${index}`}
                        className="ml-2 text-sm text-zion-slate-light"
                      >
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
import { Button } from "./ui/button",;
import { Input } from "./ui/input",;
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
export function QuoteFormSection() {;
  const [isSubmitted, setIsSubmitted] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };
  return (;
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading>Get a Quote Now</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations;
          </p>;
        </div>;
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;
          {isSubmitted ? (;
            <div className="text-center py-8">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;
                </svg>;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;
              <p className="text-zion-slate-light mb-6">;
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.;
              </p>;
              <Button;
                onClick={() => setIsSubmitted(false)}
                variant="outline";
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
              >;
                Submit Another Request;
              </Button>;
            </div>;
          ) : (;
            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;
                  <Input;
                    id="name";
                    type="text";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    required;
                  />;
                </div>;
                <div>;
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Company;
                  </label>;
                  <Input;
                    id="company";
                    type="text";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                  />;
                </div>;
                <div>;
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Email;
                  </label>;
                  <Input;
                    id="email";
                    type="email";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                    required;
                  />;
                </div>;
                <div>;
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Phone;
                  </label>;
                  <Input;
                    id="phone";
                    type="tel";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";

                  />;
                </div>;
              </div>;
<<<<<<< HEAD
                  <Input;
                    id="phone";
                    type="tel";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                  />;
                </div>;
              </div>;
              ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mt-6">;
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">;
                  {["AI Products/Services", "IT Equipment", "Server Solutions", "Storage Solutions", "Networking", "24/7 Support", "Recycling Services"].map((item, index) => (;
                    <div key={index} className="flex items-center">;
<<<<<<< HEAD

                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      <input
                        id={`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />


                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
<<<<<<< HEAD
                      <input;
                        id={`interest-${index}`}
                        type="checkbox";
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50";
                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {item}
                      </label>;
                    </div>;
                  ))}
<<<<<<< HEAD
                </div>;
              </div>;
              ;
=======

                </div>;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mt-6">;
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  Additional Details;
                </label>;
<<<<<<< HEAD
                <textarea;
                  id="message";
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                ></textarea>;
              </div>;
              ;
              <div className="mt-6">;
                <Button ;
                  type="submit" ;
                  disabled={isSubmitting} ;
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3";
                >;
                  {isSubmitting ? "Sending..." :"Get Your Free Commercial Proposal"}
=======
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"></textarea>;
              </div>;

              <div className="mt-6">;
                <Button
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3">;
                  {isSubmitting ? "Sending..." : "Get Your Free Commercial Proposal"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Button>;
              </div>;
            </form>;
          )}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button  } from './ui / button';
import { Input  } from './ui / input';
import { GradientHeading  } from './GradientHeading';
import { useState  } from './react';
export /**
 * QuoteFormSection - Function description
 */
function QuoteFormSection() {
  const [is_submitted, setIsSubmitted] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();
    setIsSubmitting (true);
;
    // Simulate form submission;
    set_timeout (() => {
      (setIsSubmitting (false), setIsSubmitted (true));
    }, 1000);
  }
;
  return (
    <section className="py - 20 bg - zion - blue">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 12">;
          <GradientHeading > Get a Quote Now</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;
            Request your instant commercial proposal and discover how Zion can;
            revolutionize your IT operations;
          </p>;
        </div>;
        <div className="max - w-2xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 8">;
          {is_submitted ? (
            <div className="text - center py - 8">;
              <div className="inline - flex items - center justify - center w - 16 h - 16 bg - zion - purple / 20 rounded - full mb - 6">;
                <svg;
                  className="w - 8 h - 8 text - zion - cyan";
                  fill="none";
                  stroke="current_color";
                  view_box="0 0 24 24";
                  xmlns="http://www.w3.org / 2000 / svg";
                >;
                  <path;
                    stroke_linecap="round";
                    stroke_linejoin="round";
                    stroke_width={2}
                    d="M5 13l4 4L19 7";
                  ></path>;
                </svg>;
              </div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">;
                Quote Request Sent!;
              </h3>;
              <p className="text - zion - slate - light mb - 6">;
                Thank you for your interest in Zion's services. Our team will;
                prepare your personalized commercial proposal and contact you;
                shortly.;
              </p>;
              <Button;
                on_click={() => setIsSubmitted (false)}
                variant="outline";
                className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
              >;
                Submit Another Request;
              </Button>;
            </div>) : (
            <form on_submit={handle_submit}>;
              <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;
                <div>;
                  <label;
                    html_for="name";
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Name;
                  </label>;
                  <Input;
                    id="name";
                    type="text";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                    required;
                  />;
                </div>;
                <div>;
                  <label;
                    html_for="company";
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Company;
                  </label>;
                  <Input;
                    id="company";
                    type="text";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                  />;
                </div>;
                <div>;
                  <label;
                    html_for="email";
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Email;
                  </label>;
                  <Input;
                    id="email";
                    type="email";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                    required;
                  />;
                </div>;
                <div>;
                  <label;
                    html_for="phone";
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Phone;
                  </label>;
                  <Input;
                    id="phone";
                    type="tel";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                  />;
                </div>;
              </div>;
              <div className="mt - 6">;
                <label;
                  html_for="interest";
                  className="block text - sm font - medium text - zion - slate - light mb - 1";
                >;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid - cols - 1 gap - 3 sm:grid - cols - 2 mt - 2">;
                  {[;
                    "AI Products / Services",
                    "IT Equipment",
                    "Server Solutions",
                    "Storage Solutions",
                    "Networking",
                    "24 / 7 Support",
                    "Recycling Services",
                  ].map ((item, index) => (
                    <div key={index} className="flex items - center">;
                      <input;
                        id={`interest-${index}`}
                        type="checkbox";
                        className="h - 4 w - 4 bg - zion - blue - dark border - zion - purple text - zion - purple focus:ring - zion - purple / 50";
                      />;
                      <label;
                        html_for={`interest-${index}`}
                        className="ml - 2 text - sm text - zion - slate - light";
                      >;
                        {item}
                      </label>;
                    </div>))}
                </div>;
              </div>;
              <div className="mt - 6">;
                <label;
                  html_for="message";
                  className="block text - sm font - medium text - zion - slate - light mb - 1";
                >;
                  Additional Details;
                </label>;
                <textarea;
                  id="message";
                  rows={4}
                  className="w - full rounded - md bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                ></textarea>;
              </div>;
              <div className="mt - 6">;
                <Button;
                  type="submit";
                  disabled={is_submitting}
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 3";
                >;
                  {is_submitting;
                    ? "Sending...";
                    : "Get Your Free Commercial Proposal"}
                </Button>;
              </div>;
            </form>)}
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 export function QuoteFormSection () {
  const [isSubmitted, setIsSubmitted] = useState (false);
const [isSubmitting, setIsSubmitting] = useState (false);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
//Simulate form submission setTimeout ( () => {
  setIsSubmitting (false);
setIsSubmitted (true) 
}, 1000) 
};
return (<section className="py-20 bg-zion-blue" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto"> Request your instant commercial proposal and discover how Zion can revolutionize your IT operations </p> </div> </svg> </div> <h3 className=" text-2xl font-bold text-white mb-4">Quote Request Sent!</h3> <p className=" text-zion-slate-light mb-6"> Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly. </p> <Button > Submit Another Request </Button> </div>) : (<div> <label htmlFor=" name"className=" block text-sm font-medium text-zion-slate-light mb-1"> Name </label> <Input id=" name"type=" text"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"required /> </div> <div> <label htmlFor=" company"className=" block text-sm font-medium text-zion-slate-light mb-1"> Company </label> <Input id=" company"type=" text"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"/> </div> <div> <label htmlFor=" email"className=" block text-sm font-medium text-zion-slate-light mb-1"> Email </label> <Input id=" email"type=" email"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"required /> </div> <div> <label htmlFor=" phone"className=" block text-sm font-medium text-zion-slate-light mb-1"> Phone </label> <Input id=" phone"type=" tel"className=" w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"/> </div> </div> <div className=" mt-6"> <label htmlFor=" interest"className=" block text-sm font-medium text-zion-slate-light mb-1"> I'm interested in (select all that apply) </label> </label> </div>) ) 
}</div> </div> <div className=" mt-6"> <label htmlFor=" message"className=" block text-sm font-medium text-zion-slate-light mb-1"> Additional Details </label> <textarea ></textarea> </div> <div className=" mt-6" > <Button </Button> </div> </form>) 
}</div> </div> </section>) 
}
                      <label
                        htmlFor={`interest-${index}`}
                        className="ml-2 text-sm text-zion-slate-light"
                      >
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">

                      />
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Get Your Free Commercial Proposal"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
