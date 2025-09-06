
<<<<<<< HEAD
=======

import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const MobileEmailCapture: React.FC = () => {
  const [email, set_email] = useState ("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [is_success, setIsSuccess] = useState (false);
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if (return) {
  $2
}
    setIsSubmitting (true),
    try {
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise (resolve => set_timeout (resolve, 1000));
      setIsSuccess (true);
      set_email ("");
;
      set_timeout (() => {
        setIsSuccess (false);
      }, 5000);
<<<<<<< HEAD
<<<<<<< HEAD

    } catch (error) {
      console.error ("Error subscribing:", error);
    } finally {


=======
    } catch (error) {
      console.error ("Error subscribing:", error);
    } finally {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true),;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {;
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
<<<<<<< HEAD
=======
<<<<<<< HEAD

      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console && console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);

<<<<<<< HEAD
    }
  }
=======

=======
=======

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console && console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);

    }
  }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!email || isSubmitting) return,

    setIsSubmitting(true),

    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error subscribing:", error)
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD

};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

},
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
export const MobileEmailCapture: React.FC = () => {;
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSuccess, setIsSuccess] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || isSubmitting) return,;
    setIsSubmitting(true),;
    try {;
      // In a real implementation, this would connect to a backend service;
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;
      setEmail(""),;
      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (

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
<<<<<<< HEAD

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onChange={(e) => setEmail(e && e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400";
              required;
            />;
            <Button
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium">;
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;

          <p className="text-sm text-gray-400 mt-4">;
<<<<<<< HEAD
=======



=======
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setIsSubmitting (false);
    }
  }
;
  return (
    <section className="py - 16 bg - gradient - to - r from - zion - blue - dark to - zion - purple / 30">;
      <div className="container mx - auto px - 4">;
        <div className="max - w-3xl mx - auto text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;
            Get Early Access to New Features;
          </h2>;
          <p className="text - lg text - gray - 300 mb - 8 max - w-2xl mx - auto">;
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;
          <form on_submit={handle_submit} className="flex flex - col sm:flex - row gap - 4 max - w-md mx - auto">;
            <Input;
              type="email";
              placeholder="Enter your email address";
              value={email}
              on_change={(e) => set_email (e.target.value)}
              className="flex - grow bg - zion - blue - dark / 70 text - white border - zion - purple / 30 placeholder:text - gray - 400";
              required;
            />;
            <Button;
              type="submit";
              disabled={is_submitting || is_success}
              className="bg - zion - cyan hover:bg - zion - cyan / 80 text - zion - blue - dark font - medium";
            >;
              {is_submitting ? "Subscribing..." : is_success ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;
          <p className="text - sm text - gray - 400 mt - 4">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
            <Button;
              type="submit";
              disabled={isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium";
            >;
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;
          <p className="text-sm text-gray-400 mt-4">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>;
<<<<<<< HEAD
    </section>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </section>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
    </section>);
}
;
<<<<<<< HEAD
    </section>);
}
;
    </section>;
  ),;
},; const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
if (!email || isSubmitting) return;
try {
  setIsSuccess (true);
setEmail ("");
}finally {
  setIsSubmitting (false) 
}
};
return (<section className=" py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30"> <div className=" container mx-auto px-4"> <div className=" max-w-3xl mx-auto text-center"> <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4"> text-lg text-gray-300 mb-8 max-w-2xl mx-auto" > Subscribe to our mobile app updates and be the first to try new features before they're released to the public. </p> </Button> </form> <p className="text-sm text-gray-400 mt-4" > We respect your privacy and will never share your information. </p> </div> </div> </section>) 
};
    </section>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
