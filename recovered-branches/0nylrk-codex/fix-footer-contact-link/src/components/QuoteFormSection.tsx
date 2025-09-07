

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
export function QuoteFormSection() {

  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",

  const handleSubmit = (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
import { Button } from "./ui/button",
import { Input } from "./ui/input",
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";


import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),


    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission
    setTimeout(() => {


    // Simulate form submission
    setTimeout(() => {

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

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
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false),;
      setIsSubmitted(true);


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

        <div className="text-center mb-12">;
          <GradientHeading>Get a Quote Now</GradientHeading>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">;
            Request your instant commercial proposal and discover how Zion can revolutionize your IT operations;
          </p>;
        </div>;


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


                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
              >;
                Submit Another Request;
              </Button>;
            </div>;


                  <Input

                    id="name"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"

                    required                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    id="email"
                    type="email"

                <label
                  htmlFor="interest"

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

                      <label
                        htmlFor={`interest-${index}`}
                        className="ml-2 text-sm text-zion-slate-light"
                      >

                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
import { Button } from "./ui/button",;
import { Input } from "./ui/input",;
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
export function QuoteFormSection() {;
  }
  const handleSubmit = ("e": React.FormEvent) => {;
    }
    e.preventDefault(),;
    setIsSubmitting(true),;
    // Simulate form submission;
    setTimeout(() => {;
      setIsSubmitting(false);
      setIsSubmitted(true);

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


                      />;
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">;

                      />

                      <label
                        htmlFor={`interest-${index}`}


                        className="ml-2 text-sm text-zion-slate-light"
                      >
                        {item}

                      </label>;
                    </div>;
                  ))}

  );
}

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

                Thank you for your interest in Zion's services. Our team will;
                prepare your personalized commercial proposal and contact you;
                shortly.;
              </p>;
              <Button;

              >;
                Submit Another Request;
              </Button>;
            </div>) : (

                    required;
                  />;
                </div>;
                <div>;

                    required;
                  />;
                </div>;
                <div>;

                      >;
                        {item}
                      </label>;
                    </div>))}
                </div>;

                >;
                  Additional Details;
                </label>;
                <textarea;"
                  id="message";

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
