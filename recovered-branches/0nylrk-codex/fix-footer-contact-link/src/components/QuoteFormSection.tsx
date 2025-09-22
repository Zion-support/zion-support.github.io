<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
export function QuoteFormSection() {;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
export function QuoteFormSection() {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const [isSubmitted, setIsSubmitted] = useState(false);
=======
export function QuoteFormSection() {;  const [isSubmitted, setIsSubmitted] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function QuoteFormSection() {;  const [isSubmitted, setIsSubmitted] = useState(false);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const [isSubmitted, setIsSubmitted] = useState(false);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
<<<<<<< HEAD
=======

=======
import { Button } from "./ui/button";"
import { Input } from "./ui/input";"
import { GradientHeading } from "./GradientHeading";"
import { useState } from "react";
export function QuoteFormSection() {};
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);"
import { Button } from "./ui/button","
import { Input } from "./ui/input",";
import { GradientHeading } from "./GradientHeading";"
import { useState } from "react";"
import { GradientHeading } from "./GradientHeading","
import { useState } from "react",
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
export function QuoteFormSection() {
>>>>>>> main
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const handleSubmit = (e: React.FormEvent) => {

=======
  const handleSubmit = (e: React.FormEvent) => {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const handleSubmit = (e: React.FormEvent) => {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission
    setTimeout(() => {
<<<<<<< HEAD
      setIsSubmitting(false),
      setIsSubmitted(true)
    }, 1000)
  },
<<<<<<< HEAD
=======
=======
    e.preventDefault();
    setIsSubmitting(true);
=======
    // Simulate form submission
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Simulate form submission
    setTimeout(() => {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
=======
    // Simulate form submission;
    setTimeout(() => {}
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  };

  return ("
    <section className="py-20 bg-zion-blue">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-center mb-12">
          <GradientHeading>Get a Quote Now</GradientHeading>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Request your instant commercial proposal and discover how Zion can;
            revolutionize your IT operations;
          </p>
        </div>"
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">
          {isSubmitted ? ("
            <div className="text-center py-8">"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
                <svg"
                  className="w-8 h-8 text-zion-cyan""
                  fill="none""
                  stroke="currentColor""
                  viewBox="0 0 24 24""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path"
                    strokeLinecap="round""
                    strokeLinejoin="round"
                    strokeWidth={2}"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>"
              <h3 className="text-2xl font-bold text-white mb-4">
                Quote Request Sent!
              </h3>"
              <p className="text-zion-slate-light mb-6">
                Thank you for your interest in Zion's services. Our team will;
                prepare your personalized commercial proposal and contact you;
                shortly.
              </p>
              <Button;
                onClick={() => setIsSubmitted(false)}"
                variant="outline""
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              >
                Submit Another Request;
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>"
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label"
                    htmlFor="name""
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Name;
                  </label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true);
<<<<<<< HEAD
<<<<<<< HEAD
    }, 1000)
};
=======
    }, 1000);
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  return (
}, 1000),;
  },;
;
  return (;
    <section className="py-20 bg-zion-blue">;
    }, 1000)
};

  return (    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
=======


"
    <section className="py-20 bg-zion-blue">;"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-center mb-12">;
          <GradientHeading>Get a Quote Now</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;
          {isSubmitted ? (;"
            <div className="text-center py-8">;"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;


"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;
                </svg>;
              </div>;"
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;"
              <p className="text-zion-slate-light mb-6">;'
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.;
              </p>;



                onClick={() => setIsSubmitted(false)}"
                variant="outline" ;"
=======

;
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;
          {isSubmitted ? (;
            <div className="text-center py-8">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www && www.w3.org/2000/svg">;
<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">;
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;
                </svg>;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;
              <p className="text-zion-slate-light mb-6">;
                Thank you for your interest in Zion's services. Our team will prepare your personalized commercial proposal and contact you shortly.;
              </p>;
              <Button
<Button ;
                onClick={() => setIsSubmitted(false)}
                variant="outline" ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
              >;
                Submit Another Request;
              </Button>;
            </div>;
<<<<<<< HEAD



            <form onSubmit={handleSubmit}>;"
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;"
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Input
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          ) : (;
) :(;
            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
                    Name;
                  </label>;
                  <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    id="name"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    id="email"
                    type="email"
=======



                  <Input"
                    id="name""
                    type="text""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required;
                  />
                </div>
                <div>
                  <label"
                    htmlFor="company""
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Company;
                  </label>
                  <Input"
                    id="company""
                    type="text""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
<<<<<<< HEAD
                  />
                </div>
<<<<<<< HEAD
                <div>
                  <label"
                    htmlFor="email""
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Email;
                  </label>
                  <Input"
                    id="email""
                    type="email""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required;
                  />
                </div>
                <div>
                  <label"
                    htmlFor="phone""
                    className="block text-sm font-medium text-zion-slate-light mb-1"
                  >
                    Phone;
                  </label>
                  <Input"
                    id="phone""
                    type="tel""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
<<<<<<< HEAD
=======
              </div>

              <div className="mt-6">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <label
                  htmlFor="interest"
=======
                  />
                </div>
              </div>
"
              <div className="mt-6">
                <label"
                  htmlFor="interest""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >'
                  I'm interested in (select all that apply)
                </label>"
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                  {["
                    "AI Products/Services","
                    "IT Equipment","
                    "Server Solutions","
                    "Storage Solutions","
                    "Networking","
                    "24/7 Support","
                    "Recycling Services",
                  ].map((item, index) => ("
                    <div key={index} className="flex items-center">
                      <input;
                        id={`interest-${index}`}"
                        type="checkbox""
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      />
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <label
                        htmlFor={`interest-${index}`}
                        className="ml-2 text-sm text-zion-slate-light"
                      >
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
    }, 1000);
  };
=======
    }, 1000)
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }, 1000)
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  <Input;
                    id="phone";
                    type="tel";
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white";
                  />;
                </div>;
              </div>;
              ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="mt-6">;
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">;
                  {["AI Products/Services", "IT Equipment", "Server Solutions", "Storage Solutions", "Networking", "24/7 Support", "Recycling Services"].map((item, index) => (;
<<<<<<< HEAD
<<<<<<< HEAD
                    <div key={index} className="flex items-center">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      <input
                        id={`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
<<<<<<< HEAD
                      />
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;

                      />


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                      <label
                        htmlFor={`interest-${index}`}
=======

                      />
                      <label;`
                        htmlFor={`interest-${index}`}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        className="ml-2 text-sm text-zion-slate-light"
                      >
                        {item}
<<<<<<< HEAD
=======
                    <div key={index} className="flex items-center">;                        {item}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    <div key={index} className="flex items-center">;                        {item}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                        {item}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
    }, 1000)
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
              <div className="mt-6">;
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">;
                  {["AI Products/Services", "IT Equipment", "Server Solutions", "Storage Solutions", "Networking", "24/7 Support", "Recycling Services"].map((item, index) => (;
                    <div key={index} className="flex items-center">;                        {item}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      </label>;
                    </div>;
                  ))}
                </div>
              </div>
"
              <div className="mt-6">
                <label"
                  htmlFor="message""
                  className="block text-sm font-medium text-zion-slate-light mb-1"
                >
                  Additional Details;
                </label>
                <textarea"
                  id="message"
                  rows={4}"
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>
"
              <div className="mt-6">
                <Button"
                  type="submit"
                  disabled={isSubmitting}"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {isSubmitting"
                    ? "Sending...""
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { Button  } from './ui / button';
import { Input  } from './ui / input';
import { GradientHeading  } from './GradientHeading';
=======
'
import { Button  } from './ui / button';'
import { Input  } from './ui / input';'
import { GradientHeading  } from './GradientHeading';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useState  } from './react';
export /**;
 * QuoteFormSection - Function description;
 */
function QuoteFormSection() {}
  const [is_submitted, setIsSubmitted] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handle_submit = (e: React.FormEvent) =>: any {}
    e.prevent_default ();
    setIsSubmitting (true);
;
    // Simulate form submission;
    set_timeout (() => {}
      (setIsSubmitting (false), setIsSubmitted (true));
    }, 1000);
  }
;
<<<<<<< HEAD
  return (
    <section className="py - 20 bg - zion-blue">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="text - center mb-12">;
          <GradientHeading > Get a Quote Now</GradientHeading>;
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can;
            revolutionize your IT operations;
          </p>;
        </div>;
        <div className="max - w-2xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p-8">;
          {is_submitted ? (
            <div className="text - center py-8">;
              <div className="inline - flex items - center justify - center w - 16 h - 16 bg - zion - purple / 20 rounded - full mb-6">;
                <svg;
                  className="w - 8 h - 8 text - zion-cyan";
                  fill="none";
                  stroke="current_color";
                  viewBox="0 0 24 24";
                  xmlns="http://www.w3.org / 2000 / svg";
                >;
                  <path;
                    strokeLinecap="round";
                    strokeLinejoin="round";
                    strokeWidth={2}
                    d="M5 13l4 4L19 7";
                  ></path>;
                </svg>;
              </div>;
              <h3 className="text - 2xl font - bold text - white mb-4">;
                Quote Request Sent!;
              </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text - zion - slate - light mb-6">;
=======
  return ("
    <section className="py - 20 bg - zion - blue">;"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
        <div className="text - center mb - 12">;
          <GradientHeading > Get a Quote Now</GradientHeading>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;
            Request your instant commercial proposal and discover how Zion can;
            revolutionize your IT operations;
          </p>;
        </div>;"
        <div className="max - w-2xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 8">;
          {is_submitted ? ("
            <div className="text - center py - 8">;"
              <div className="inline - flex items - center justify - center w - 16 h - 16 bg - zion - purple / 20 rounded - full mb - 6">;
                <svg;"
                  className="w - 8 h - 8 text - zion - cyan";"
                  fill="none";"
                  stroke="current_color";"
                  view_box="0 0 24 24";"
                  xmlns="http://www.w3.org / 2000 / svg";
                >;
                  <path;"
                    stroke_linecap="round";"
                    stroke_linejoin="round";
                    stroke_width={2}"
                    d="M5 13l4 4L19 7";
                  ></path>;
                </svg>;
              </div>;"
              <h3 className="text - 2xl font - bold text - white mb - 4">;
                Quote Request Sent!;
              </h3>;"
              <p className="text - zion - slate - light mb - 6">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <p className="text - zion - slate - light mb - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <p className="text - zion - slate - light mb-6">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Thank you for your interest in Zion's services. Our team will;
                prepare your personalized commercial proposal and contact you;
                shortly.;
              </p>;
              <Button;
<<<<<<< HEAD
                on_click={() => setIsSubmitted (false)}
                variant="outline";
<<<<<<< HEAD
<<<<<<< HEAD
                className="border - zion - purple text - zion - cyan hover:bg - zion-purple / 10";
=======
                on_click={() => setIsSubmitted (false)}"
                variant="outline";"
                className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                className="border - zion - purple text - zion - cyan hover:bg - zion-purple / 10";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              >;
                Submit Another Request;
              </Button>;
            </div>) : (
<<<<<<< HEAD
            <form on_submit={handle_submit}>;
              <div className="grid grid - cols - 1 gap - 6 sm:grid - cols-2">;
                <div>;
                  <label;
                    html_for="name";
                    className="block text - sm font - medium text - zion - slate - light mb-1";
                  >;
                    Name;
                  </label>;
                  <Input;
                    id="name";
                    type="text";
<<<<<<< HEAD
<<<<<<< HEAD
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
=======
            <form on_submit={handle_submit}>;"
              <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;
                <div>;
                  <label;"
                    html_for="name";"
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Name;
                  </label>;
                  <Input;"
                    id="name";"
                    type="text";"
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    required;
                  />;
                </div>;
                <div>;
<<<<<<< HEAD
                  <label;
                    html_for="company";
                    className="block text - sm font - medium text - zion - slate - light mb-1";
                  >;
                    Company;
                  </label>;
                  <Input;
                    id="company";
                    type="text";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
                  />;
                </div>;
                <div>;
                  <label;
                    html_for="email";
                    className="block text - sm font - medium text - zion - slate - light mb-1";
                  >;
                    Email;
                  </label>;
                  <Input;
                    id="email";
                    type="email";
<<<<<<< HEAD
<<<<<<< HEAD
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
=======
                  <label;"
                    html_for="company";"
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Company;
                  </label>;
                  <Input;"
                    id="company";"
                    type="text";"
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                  />;
                </div>;
                <div>;
                  <label;"
                    html_for="email";"
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Email;
                  </label>;
                  <Input;"
                    id="email";"
                    type="email";"
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    required;
                  />;
                </div>;
                <div>;
<<<<<<< HEAD
                  <label;
                    html_for="phone";
                    className="block text - sm font - medium text - zion - slate - light mb-1";
                  >;
                    Phone;
                  </label>;
                  <Input;
                    id="phone";
                    type="tel";
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
                  />;
                </div>;
              </div>;
              <div className="mt-6">;
                <label;
                  html_for="interest";
                  className="block text - sm font - medium text - zion - slate - light mb-1";
                >;
                  I'm interested in (select all that apply);
                </label>;
                <div className="grid grid - cols - 1 gap - 3 sm:grid - cols - 2 mt-2">;
                  {[;
                    "AI Products / Services",
                    "IT Equipment",
                    "Server Solutions",
                    "Storage Solutions",
                    "Networking",
                    "24 / 7 Support",
                    "Recycling Services",
                  ].map ((item, index) => (
                    <div key={index} className="flex items-center">;
                      <input;
                        id={`interest-${index}`}
                        type="checkbox";
                        className="h - 4 w - 4 bg - zion - blue - dark border - zion - purple text - zion - purple focus:ring - zion-purple / 50";
                      />;
                      <label;
                        html_for={`interest-${index}`}
<<<<<<< HEAD
<<<<<<< HEAD
                        className="ml - 2 text - sm text - zion - slate-light";
=======
                  <label;"
                    html_for="phone";"
                    className="block text - sm font - medium text - zion - slate - light mb - 1";
                  >;
                    Phone;
                  </label>;
                  <Input;"
                    id="phone";"
                    type="tel";"
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                  />;
                </div>;
              </div>;"
              <div className="mt - 6">;
                <label;"
                  html_for="interest";"
                  className="block text - sm font - medium text - zion - slate - light mb - 1";
                >;'
                  I'm interested in (select all that apply);
                </label>;"
                <div className="grid grid - cols - 1 gap - 3 sm:grid - cols - 2 mt - 2">;
                  {[;"
                    "AI Products / Services","
                    "IT Equipment","
                    "Server Solutions","
                    "Storage Solutions","
                    "Networking","
                    "24 / 7 Support","
                    "Recycling Services",
                  ].map ((item, index) => ("
                    <div key={index} className="flex items - center">;
                      <input;`
                        id={`interest-${index}`}"
                        type="checkbox";"
                        className="h - 4 w - 4 bg - zion - blue - dark border - zion - purple text - zion - purple focus:ring - zion - purple / 50";
                      />;
                      <label;`
                        html_for={`interest-${index}`}"
                        className="ml - 2 text - sm text - zion - slate - light";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        className="ml - 2 text - sm text - zion - slate - light";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                        className="ml - 2 text - sm text - zion - slate-light";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      >;
                        {item}
                      </label>;
                    </div>))}
                </div>;
<<<<<<< HEAD
              </div>;
              <div className="mt-6">;
                <label;
                  html_for="message";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="block text - sm font - medium text - zion - slate - light mb-1";
=======
              </div>;"
              <div className="mt - 6">;
                <label;"
                  html_for="message";"
                  className="block text - sm font - medium text - zion - slate - light mb - 1";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  className="block text - sm font - medium text - zion - slate - light mb - 1";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  className="block text - sm font - medium text - zion - slate - light mb-1";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                >;
                  Additional Details;
                </label>;
                <textarea;"
                  id="message";
<<<<<<< HEAD
                  rows={4}
                  className="w - full rounded - md bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text-white";
                ></textarea>;
              </div>;
              <div className="mt-6">;
                <Button;
                  type="submit";
                  disabled={is_submitting}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py-3";
=======
                  rows={4}"
                  className="w - full rounded - md bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";
                ></textarea>;
              </div>;"
              <div className="mt - 6">;
                <Button;"
                  type="submit";
                  disabled={is_submitting}"
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 3";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 3";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py-3";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                >;
                  {is_submitting;"
                    ? "Sending...";"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
    // Simulate form submission;
    setTimeout(() => {
      (setIsSubmitting(false), setIsSubmitted(true));
    }, 1000);
  };

  return ("
    <section className="py-20 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="text-center mb-12">"
</div>
          <GradientHeading>Get a Quote Now"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">"
</p>
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">"
            <div className="text-center py-8">"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">"
                <svg;"
                  className="w-8 h-8 text-zion-cyan"""
                  fill="none"""
                  stroke="currentColor"""
                  viewBox="0 0 24 24"""
                  xmlns="http://www.w3.org/2000/svg""
                >
</svg>
                  <path;"
                    strokeLinecap="round"""
                    strokeLinejoin="round""
                    strokeWidth={2}"
                    d="M5 13l4 4L19 7""
                  ></path>
              <h3 className="text-2xl font-bold text-white mb-4">"
</h3>
              </h3>"
              <p className="text-zion-slate-light mb-6">"
              <Button;)
                onClick={() => setIsSubmitted(false)}

            <form onSubmit={handleSubmit}>
</form>"
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">"
                <div>
                  <label;"
                    htmlFor="name"""
                    className="block text-sm font-medium text-zion-slate-light mb-1""
</label>
                  </label>"
    <section className="py-20 bg-zion-blue">;"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="text-center mb-12">;"
          <GradientHeading>Get a Quote Now;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;"
          </p>;
        </div>;"
        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">;"
            <div className="text-center py-8">;"
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">;"
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www && www.w3.org/2000/svg">;"
</svg>"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>;"
                </svg>;
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>;""
              <p className="text-zion-slate-light mb-6">;"
              <Button;

              ;
            </div>;
            <form onSubmit={handleSubmit}>;
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;"
                <div>;
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;"
                  </label>;
                  <Input;"
                    id="name"""
                    type="text"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""

                    required;
                  />

</Input>
                </div>

                <div>
</div>
                  <label;"
                    htmlFor="company"""
                    id="company"""

                    type="text"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""

                  />
</Input>
                </div>

                <div>
</div>
                  <label;"
                    htmlFor="email"""
                    id="email"""
                    type="email"""

                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""

                    required;
                  />
</Input>
                </div>

                <div>
</div>
                  <label;"
                    htmlFor="phone"""
                    id="phone"""
                    type="tel"""
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""

                  />
</Input>
                </div>
              </div>

"
              <div className="mt-6">"
                  htmlFor="interest"""
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">"
                    <div key={index} className="flex items-center">"
                      <input;
                        id={`interest-${index}`}"
                        type="checkbox"""
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50""
</input>
                      <label;`;
                        htmlFor={`interest-${index}`}"
                        className="ml-2 text-sm text-zion-slate-light""
                  htmlFor="message"""
                <textarea;"
                  id="message""
                  rows={4}"
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white""
                ></textarea>
                <Button;"
                  type="submit""
                  disabled={isSubmitting}"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3""

            </form>
                >
</Button>

                </Button>
              </div>
            </form>
        </div>
      </div>

    </section>"
    <section className="py - 20 bg - zion - blue">;"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
        <div className="text - center mb - 12">;"
          <GradientHeading > Get a Quote Now;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto">;"
        <div className="max - w-2xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 8">;"
            <div className="text - center py - 8">;"
              <div className="inline - flex items - center justify - center w - 16 h - 16 bg - zion - purple / 20 rounded - full mb - 6">;"
                  className="w - 8 h - 8 text - zion - cyan";""
                  fill="none";""
                  stroke="current_color";""
                  view_box="0 0 24 24";""
                  xmlns="http://www.w3.org / 2000 / svg";"
                >;
                    stroke_linecap="round";""
                    stroke_linejoin="round";"
                    stroke_width={2}"
                    d="M5 13l4 4L19 7";"
                  ></path>;
              <h3 className="text - 2xl font - bold text - white mb - 4">;"
              </h3>;"
              <p className="text - zion - slate - light mb - 6">;"
                on_click={() => setIsSubmitted (false)}

            </div>) : (
            <form on_submit={handle_submit}>;
              <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;"
                    html_for="name";""
                    className="block text - sm font - medium text - zion - slate - light mb - 1";"
                    id="name";""
                    type="text";""
                    className="w - full bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                  />;

                    html_for="company";""
                    id="company";""

                    html_for="email";""
                    id="email";""
                    type="email";""

                    html_for="phone";""
                    id="phone";""
                    type="tel";""

              <div className="mt - 6">;"
                  html_for="interest";""
                </label>;"
                <div className="grid grid - cols - 1 gap - 3 sm:grid - cols - 2 mt - 2">;"
                    <div key={index} className="flex items - center">;"
                      <input;`;
                        type="checkbox";""
                        className="h - 4 w - 4 bg - zion - blue - dark border - zion - purple text - zion - purple focus:ring - zion - purple / 50";"
                        html_for={`interest-${index}`}"
                        className="ml - 2 text - sm text - zion - slate - light";"
                      </label>;)
                    </div>))}
                  html_for="message";""
                  id="message";"
                  className="w - full rounded - md bg - zion - blue - dark border border - zion - blue - light focus:border - zion - purple focus:ring - 1 focus:ring - zion - purple text - white";"
                ></textarea>;
                  type="submit";"
                  disabled={is_submitting}"
                  className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 3";"

            </form>)}
    </section>);"`;
pr-12325
                >;
</Button>
                </Button>;
              </div>;
            </form>)}
        </div>;
      </div>;
    </section>);"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
