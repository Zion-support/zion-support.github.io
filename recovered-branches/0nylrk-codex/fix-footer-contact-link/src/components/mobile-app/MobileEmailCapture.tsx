
<<<<<<< HEAD
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
;
export const MobileEmailCapture:React.FC = () => {;
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSuccess, setIsSuccess] = useState(false),;
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || isSubmitting) return,;
;
    setIsSubmitting(true),;
;
    try {;
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;
      setEmail(""),;
      ;
      setTimeout(() => {;
        setIsSuccess(false),;
      }, 5000),;
    } catch (error) {;
      console.error("Error subscribing:", error),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">;
      <div className="container mx-auto px-4">;
        <div className="max-w-3xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Get Early Access to New Features;
          </h2>;
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">;
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;
          ;
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;
            <Input;
              type="email";
              placeholder="Enter your email address";
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400";
              required;
            />;
            <Button ;
              type="submit" ;
              disabled={isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium";
            >;
              {isSubmitting ? "Subscribing..." :isSuccess ? "Subscribed!" :"Subscribe"}
            </Button>;
          </form>;
          ;
          <p className="text-sm text-gray-400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>;
    </section>;
  ),;
},;
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!email || isSubmitting) return,
import React, {useState} from "react";

export const MobileEmailCapture: React.FC = () => {const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true),

    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission,
await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),      setIsSuccess(true);
      setEmail("&quot;);
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error subscribing:", error)    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <section className=&quot;py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-3xl mx-auto text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
      setTimeout_(() => {
        setIsSuccess(false)}, 5000)
    } catch (error) {} finally {setIsSubmitting(false)}
  };

  return (_<section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access to New Features
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
          <form onSubmit={handleSubmit} className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
            <Input,
type=&quot;email&quot;
              placeholder=&quot;Enter your email address&quot;
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=&quot;flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400&quot;
              required
            />
            <Button,
type=&quot;submit&quot; 
              disabled={isSubmitting || isSuccess}
              className=&quot;bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium&quot;
            >
              {isSubmitting ? &quot;Subscribing...&quot; : isSuccess ? &quot;Subscribed!&quot; : &quot;Subscribe&quot}            </Button>
          </form>
          
          <p className=&quot;text-sm text-gray-400 mt-4&quot;>
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
