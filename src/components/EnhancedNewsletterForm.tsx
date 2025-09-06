=======
export function EnhancedNewsletterForm() {;
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    const now = Date && Date.now();
    if (now - lastSubmit && lastSubmit.current < 1000) return;
    lastSubmit && lastSubmit.current = now;
    const trimmed = email && email.trim();
    if (!EMAIL_REGEX && EMAIL_REGEX.test(trimmed)) {;
      toast && toast.error('Invalid email');
      return;
    }
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email: trimmed })
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast.success(data.message |"You're already subscribed!")
        } else {
          toast.success(data.message |'Thanks for subscribing!')
        }
        setIsSubmitted(true)
        setEmail('')
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        toast.error(data.error |'Subscription failed. Please try again.')
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { useState, useRef } from "react",
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast",
import {logErrorToProduction} from '@/utils/productionLogger',
export function EnhancedNewsletterForm() {
      const data = await res.json().catch(() => ({})),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!")
        } else {
          toast.success(data.message || 'Thanks for subscribing!')
        }
        setIsSubmitted(true)
        setEmail('')
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        toast.error(data.error || 'Subscription failed. Please try again.')
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }
          toast.success(data.message || "Thanks for subscribing!")
        }
        setIsSubmitted(true),;
        setEmail("");
      } else {;
        // Handle error responses;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error("Unable to subscribe right now. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  },
          toast.success(data.message || "Thanks for subscribing!")
        }
        setIsSubmitted(true),;
        setEmail("");
      } else {;
        // Handle error responses;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error("Unable to subscribe right now. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  return (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>
<<<<<<< HEAD

