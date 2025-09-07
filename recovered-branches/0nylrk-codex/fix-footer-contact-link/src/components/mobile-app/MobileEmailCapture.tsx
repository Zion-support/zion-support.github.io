<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
    } catch (error) {
      console.error ("Error subscribing:", error);
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
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

import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {;"
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

      setTimeout(() => {;

        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console && console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);

    }
  }

import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {"
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),

  const handleSubmit = async (e: React.FormEvent) => {}

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

=======
<<<<<<< HEAD
import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {;"
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

>>>>>>> merged-prs-20250907-203621
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

      setTimeout(() => {;

        setIsSuccess(false);
      }, 5000);
    } catch (error) {;
      console && console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);

    }
  }

import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {"
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),

  const handleSubmit = async (e: React.FormEvent) => {}

=======

<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  }
  },
<<<<<<< HEAD

  return (
    <section className = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
<<<<<<< HEAD

=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======
  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

},"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;
export const MobileEmailCapture: React.FC = () => {;"
  const [email, setEmail] = useState(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSuccess, setIsSuccess] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || isSubmitting) return,;
    setIsSubmitting(true),;
    try {;
      // In a real implementation, this would connect to a backend service;'
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;"
      setEmail(""),;
      setTimeout(() => {;
        setIsSuccess(false);
      }, 5000);
    } catch (error) {;"
      console.error("Error subscribing:", error);
    } finally {;
      setIsSubmitting(false);
<<<<<<< HEAD
=======
    }
  };
  return (;

  return (
"
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">;"
      <div className="container mx-auto px-4">;"
        <div className="max-w-3xl mx-auto text-center">;"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Get Early Access to New Features;
          </h2>;"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">;'
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;

            <Input"
              type="email""
              placeholder="Enter your email address"
              value={email}

              onChange={(e) => setEmail(e && e.target.value)}"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onChange={(e) => setEmail(e && e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
"
          <p className="text-sm text-gray-400 mt-4">;

=======
          <p className="text-sm text-gray-400 mt-4">;



      setIsSubmitting (false);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  };
  return (;

  return (
<<<<<<< HEAD
"
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">;"
      <div className="container mx-auto px-4">;"
        <div className="max-w-3xl mx-auto text-center">;"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Get Early Access to New Features;
          </h2>;"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">;'
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;

            <Input"
              type="email""
              placeholder="Enter your email address"
              value={email}

              onChange={(e) => setEmail(e && e.target.value)}"
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              required;
            />;
            <Button;"
              type="submit";
<<<<<<< HEAD

=======
              disabled={is_submitting || is_success}
              className="bg - zion - cyan hover:bg - zion - cyan / 80 text - zion - blue - dark font - medium";
            >;
              {is_submitting ? "Subscribing..." : is_success ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;
          <p className="text - sm text - gray - 400 mt - 4">;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            We respect your privacy and will never share your information.;
          </p>;
        </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <p className="text - sm text - gray - 400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>
=======



<<<<<<< HEAD
};
    </section>);
}

};
    </section>);
}
<<<<<<< HEAD
;
=======
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};
    </section>);
}
<<<<<<< HEAD

};
    </section>);
}

};
    </section>);
}
;
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
