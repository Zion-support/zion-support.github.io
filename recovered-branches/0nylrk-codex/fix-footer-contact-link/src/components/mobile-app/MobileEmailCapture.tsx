<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Input} from "@/components/ui/input";
import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'

import { Input } from '@/components / ui / input';

  const [email, set_email] = useState ("");
  const [email, set_email] = useState ("");"
pr-12325
  const [is_submitting, setIsSubmitting] = useState (false);
  const [is_success, setIsSuccess] = useState (false);
;
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default ();
    // Check condition;
if (return) {}
  $2;
}
    setIsSubmitting (true),
    try {}
      // In a real implementation, this would connect to a backend service;'
      // For now, we'll simulate a successful submission;
      await new Promise (resolve => set_timeout (resolve, 1000));
      setIsSuccess (true);"
      set_email ("");
;

        setIsSuccess (false);
      }, 5000);

<<<<<<< HEAD
=======

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true),;
    try {;
      // In a real implementation, this would connect to a backend service;'
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);"
      setEmail("");
      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console && console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);



import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email |isSubmitting) return;
    setIsSubmitting(true)
    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    setIsSubmitting(true),

<<<<<<< HEAD

    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
      

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setTimeout(() => {

        setIsSuccess(false)
      }, 5000)
    } catch (error) {"
      console.error("Error subscribing:", error)
    } finally {}
      setIsSubmitting(false)
    }

<<<<<<< HEAD
=======
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access to New Features
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
    }
  }
  return (

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

            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}


>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access to New Features
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
    }
  }
  return (

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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">;
      <div className="container mx-auto px-4">;
        <div className="max-w-3xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Get Early Access to New Features;
          </h2>;
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">;
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;
<<<<<<< HEAD
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting |isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium"
            >
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}

},
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
export const MobileEmailCapture: React.FC = () => {;
=======
}

},"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;
export const MobileEmailCapture: React.FC = () => {;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSuccess, setIsSuccess] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || isSubmitting) return,;
    setIsSubmitting(true),;
    try {;
<<<<<<< HEAD
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;
=======
      // In a real implementation, this would connect to a backend service;'
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setEmail(""),;
      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
<<<<<<< HEAD
    } catch (error) {;
      console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
=======
    } catch (error) {;"
      console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);
              onChange={(e) => setEmail(e && e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400";
              required;
            />;
            <Button"
              type="submit" 
              disabled={isSubmitting || isSuccess}"
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium">;"
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;

"
          <p className="text-sm text-gray-400 mt-4">;

              required;
            />;
            <Button;"
              type="submit";

>>>>>>> origin/cursor/delete-old-data-records-6bba

            We respect your privacy and will never share your information.;
          </p>;
        </div>;


<<<<<<< HEAD




};
    </section>);
}

;
=======
          <p className="text - sm text - gray - 400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>
};
    </section>);
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
};
    </section>);
}
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
