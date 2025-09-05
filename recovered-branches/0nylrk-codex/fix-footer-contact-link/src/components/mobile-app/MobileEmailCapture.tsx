
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSuccess, setIsSuccess] = useState(false),
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;

export const MobileEmailCapture: React.FC = () => {
  const [email, setEmail] = useState("&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (!email || isSubmitting) return,
=======
import React, {_useState} from "react";

export const MobileEmailCapture: React.FC = () => {_const [email, _setEmail] = useState("");
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [isSuccess, _setIsSuccess] = useState(false);

  const _handleSubmit = async (_e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setIsSubmitting(true),

    try {
<<<<<<< HEAD
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
=======
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
      // In a real implementation, _this would connect to a backend service
      // For now, _we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, _1000));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      setIsSuccess(true);
      setEmail("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
<<<<<<< HEAD
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error subscribing:", error)
=======
      console.error(&quot;Error subscribing:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <section className=&quot;py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-3xl mx-auto text-center&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
=======
      setTimeout__(() => {
        setIsSuccess(false);}, 5000);
    } catch (error) {} finally {_setIsSubmitting(false);}
  };

  return (_<section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Get Early Access to New Features
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
<<<<<<< HEAD
          <form onSubmit={handleSubmit} className=&quot;flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
            <Input
              type=&quot;email&quot;
              placeholder=&quot;Enter your email address&quot;
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=&quot;flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400&quot;
              required
            />
            <Button 
              type=&quot;submit&quot; 
              disabled={isSubmitting || isSuccess}
              className=&quot;bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium&quot;
            >
              {isSubmitting ? &quot;Subscribing...&quot; : isSuccess ? &quot;Subscribed!&quot; : &quot;Subscribe&quot;}
=======
          <form onSubmit={_handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={_email}
              onChange={_(e) => setEmail(e.target.value)}
              className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400"
              required
            />
            <Button 
              type="submit" 
              disabled={_isSubmitting || isSuccess}
              className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium"
            >
              {_isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Button>
          </form>
          
          <p className=&quot;text-sm text-gray-400 mt-4&quot;>
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
},
