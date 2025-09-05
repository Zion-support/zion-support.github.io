
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

    setIsSubmitting(true),

    try {
      // In a real implementation, this would connect to a backend service
      // For now, we'll simulate a successful submission
<<<<<<< HEAD
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setIsSuccess(true),
      setEmail(""),
=======
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
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
            Get Early Access to New Features
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
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
