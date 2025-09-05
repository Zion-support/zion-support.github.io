<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState, useRef } from "react",
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast",
import {logErrorToProduction} from '@/utils/productionLogger',
export function EnhancedNewsletterForm() {

  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const { toast } = useToast(),
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { useState, useRef } from &quot;react&quot;;
import { Mail } from 'lucide-react'
import { useToast } from &quot;@/hooks/use-toast&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

export function EnhancedNewsletterForm() {

  const [email, setEmail] = useState("&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const lastSubmit = useRef(0),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    const now = Date.now(),
    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmed = email.trim(),
    if (!EMAIL_REGEX.test(trimmed)) {
<<<<<<< HEAD
      toast.error("Invalid email"),
      return
=======
      toast.error(&quot;Invalid email&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),
    try {
<<<<<<< HEAD
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed })}),
=======
      const res = await fetch(&quot;/api/newsletter&quot;, {
        method: &quot;POST&quot;,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
        body: JSON.stringify({ email: trimmed })});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      const data = await res.json().catch(() => ({})),

      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
<<<<<<< HEAD
          toast.success(data.message || "You're already subscribed!")
        } else {
          toast.success(data.message || "Thanks for subscribing!")
        }
        setIsSubmitted(true),
        setEmail("")
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data }),
        toast.error(data.error || "Subscription failed. Please try again.")
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error("Unable to subscribe right now. Please try again later.")
=======
          toast.success(data.message || &quot;You're already subscribed!&quot;);
        } else {
          toast.success(data.message || &quot;Thanks for subscribing!&quot;);
        }
        setIsSubmitted(true);
        setEmail("&quot;);
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data });
        toast.error(data.error || &quot;Subscription failed. Please try again.&quot;);
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast.error(&quot;Unable to subscribe right now. Please try again later.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <div className=&quot;w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6&quot;>
      <div className=&quot;flex items-center mb-4&quot;>
        <div className=&quot;p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3&quot;>
          <Mail className=&quot;h-6 w-6&quot; />
        </div>
        <div>
          <h3 className=&quot;text-lg font-bold text-white&quot;>Stay Updated</h3>
          <p className=&quot;text-zion-slate-light text-sm&quot;>Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
      
      {isSubmitted ? (
<<<<<<< HEAD
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>
=======
        <div className=&quot;text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40&quot;>
          <p className=&quot;text-white font-medium&quot;>Thank you for subscribing!</p>
          <p className=&quot;text-zion-slate-light mt-1&quot;>We'll keep you updated with the latest from Zion.</p>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
      ) : (
        <form onSubmit={handleSubmit} className=&quot;flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2&quot;>
          <label htmlFor=&quot;enhanced-newsletter-email&quot; className=&quot;sr-only&quot;>
            Email address for newsletter subscription
          </label>
          <Input
            type=&quot;email&quot;
            id=&quot;enhanced-newsletter-email&quot;
            name=&quot;email&quot;
            placeholder=&quot;Enter your email&quot;
            className=&quot;flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple&quot;
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete=&quot;email&quot;
            required
          />
          <Button 
            type=&quot;submit&quot; 
            disabled={isSubmitting}
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple&quot;
          >
            {isSubmitting ? &quot;Subscribing...&quot; : &quot;Subscribe&quot;}
          </Button>
        </form>
      )}
      
      <div className=&quot;mt-4 flex items-center text-xs text-zion-slate-light&quot;>
        <div className=&quot;flex -space-x-1 mr-2&quot;>
          {[...Array(3)].map((_, i) => (
            <div key={i} className=&quot;h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan&quot;>
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  )
}