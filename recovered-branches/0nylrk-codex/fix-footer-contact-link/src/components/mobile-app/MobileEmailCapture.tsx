
import {Input} from "@/components/ui/input";
import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
=======
import React, { useState } from "react";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
pr-12325
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Input } from '@/components / ui / input';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const MobileEmailCapture: React.FC = () => {
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
set_timeout (() => {}
        setIsSuccess (false);
      }, 5000);

} catch (error) {
      console.error ("Error subscribing:", error);
    } finally {

<<<<<<< HEAD
=======
} catch (error) {
      console.error ("Error subscribing:", error);
    } finally {
    } catch (error) {"
      console.error ("Error subscribing:", error);"
    } finally {
  // TODO: Implement
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true),;

<<<<<<< HEAD
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

<<<<<<< HEAD
    }
  }
import {Input} from "@/components/ui/input";
export const MobileEmailCapture: React.FC = () => {;"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

      setTimeout(() => {;
=======
setTimeout(() => {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
export const MobileEmailCapture: React.FC = () => {"
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const handleSubmit = async (e: React.FormEvent) => {}
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),

  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setTimeout(() => {
=======
    try {};
      // In a real implementation, this would connect to a backend service';
      // For now, we'll simulate a successful submission;
      setTimeout(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsSuccess(false)
      }, 5000)
    } catch (error) {"
      console.error("Error subscribing:", error)
    } finally {}
      setIsSubmitting(false)
    }
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

=======
  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
<<<<<<< HEAD
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
    }
  };
  return (;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSubmitting (false);
    }
  }
;
return (
    <section className="py - 16 bg - gradient - to - r from - zion - blue - dark to - zion-purple / 30">;
      <div className="container mx - auto px-4">;
        <div className="max - w-3xl mx - auto text-center">;
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb-4">;
            Get Early Access to New Features;
          </h2>;
          <p className="text - lg text - gray - 300 mb - 8 max - w-2xl mx-auto">;
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.;
          </p>;
          <form on_submit={handle_submit} className="flex flex - col sm:flex - row gap - 4 max - w-md mx-auto">;
            <Input;
              type="email";
              placeholder="Enter your email address";
              value={email}
              on_change={(e) => set_email (e.target.value)}
<<<<<<< HEAD
              className="flex - grow bg - zion - blue - dark / 70 text - white border - zion - purple / 30 placeholder:text - gray-400";
=======
              className="flex - grow bg - zion - blue - dark / 70 text - white border - zion - purple / 30 placeholder:text - gray-400";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              required;
            />;
            <Button;"
              type="submit";
disabled={is_submitting || is_success}
              className="bg - zion - cyan hover:bg - zion - cyan / 80 text - zion - blue - dark font-medium";
            >;
              {is_submitting ? "Subscribing..." : is_success ? "Subscribed!" : "Subscribe"}
            </Button>;
          </form>;
<p className="text - sm text - gray - 400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
<<<<<<< HEAD
      </div>;
<<<<<<< HEAD
    </section>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

          <p className="text - sm text - gray - 400 mt-4">;
            We respect your privacy and will never share your information.;
          </p>;
        </div>;
      </div>
};
    </section>);
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
    </section>);
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
};
    </section>);
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
    </section>);
}
;
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
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    try {;
      // In a real implementation, this would connect to a backend service;"
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");"
      setTimeout(() => {;
        setIsSuccess(false);
    } catch (error) {;"
      console && console.error("Error subscribing:", error);"
    } finally {;
      setIsSubmitting(false);

  }"
import {Input} from "@/components/ui/input";"
export const MobileEmailCapture: React.FC = () => {;"
  const [email, setEmail] = useState("");"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

"
import React, { useState } from "react",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input","
export const MobileEmailCapture: React.FC = () => {"
  const [email, setEmail] = useState(""),"
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!email || isSubmitting) return,

    setIsSubmitting(true),

  // TODO: Implement
      // In a real implementation, this would connect to a backend service;"
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),"
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
      console.error("Error subscribing:", error)"
  // TODO: Implement
      setIsSubmitting(false)

},"
import React, { useState } from "react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;"
  const [email, setEmail] = useState(""),;"
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [isSuccess, setIsSuccess] = useState(false),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!email || isSubmitting) return,;
      // In a real implementation, this would connect to a backend service;"
      // For now, we'll simulate a successful submission;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setIsSuccess(true),;
      setEmail(""),;"
      console.error("Error subscribing:", error);"
  };
  return (;

  },

  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="max-w-3xl mx-auto text-center">;"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;"
</h2>
          </h2>;"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">;"
</p>
          </p>;"
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">;"
</form>
            <Input;"
              type="email"""
              placeholder="Enter your email address""
              value={email}
)
              onChange={(e) => setEmail(e && e.target.value)}

            <Button;"
              type="submit""
              disabled={isSubmitting || isSuccess}"
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium">;"

          </form>;"
          <p className="text-sm text-gray-400 mt-4">;"
</p>"
    <section className="py - 16 bg - gradient - to - r from - zion - blue - dark to - zion - purple / 30">;"
      <div className="container mx - auto px - 4">;"
        <div className="max - w-3xl mx - auto text - center">;"
          <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;"
          <p className="text - lg text - gray - 300 mb - 8 max - w-2xl mx - auto">;"
          <form on_submit={handle_submit} className="flex flex - col sm:flex - row gap - 4 max - w-md mx - auto">;"
              type="email";""
              placeholder="Enter your email address";"
              on_change={(e) => set_email (e.target.value)}

              type="submit";"
              disabled={is_submitting || is_success}"
              className="bg - zion - cyan hover:bg - zion - cyan / 80 text - zion - blue - dark font - medium";"
            >;

          <p className="text - sm text - gray - 400 mt - 4">;"
              onChange={(e) => setEmail(e.target.value)}

              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium";"

          </p>;
        </div>;
    </section>);
    </section>;"
return (<section className=" py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30"> <div className=" container mx-auto px-4"> <div className=" max-w-3xl mx-auto text-center"> <h2 className=" text-3xl md:text-4xl font-bold text-white mb-4"> text-lg text-gray-300 mb-8 max-w-2xl mx-auto" > Subscribe to our mobile app updates and be the first to try new features before they're released to the public. </p>  </form> <p className="text-sm text-gray-400 mt-4" > We respect your privacy and will never share your information. </p> </div> </div> </section>)"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
