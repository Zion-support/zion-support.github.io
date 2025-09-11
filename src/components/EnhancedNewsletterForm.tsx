<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useRef } from 'react'
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';
export function EnhancedNewsletterForm() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const _lastSubmit = useRef(0);
    const _handleSubmit = async (e) => {
        e.preventDefault();
        const _now = Date.now();
        if (now - lastSubmit.current < 1000)
            return;
        lastSubmit.current = now;
        const _trimmed = email.trim();
        if (!EMAIL_REGEX.test(trimmed)) {
            toast.error("Invalid email");
            return;
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

  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const { toast } = useToast(),
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  const lastSubmit = useRef(0),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    const now = Date.now(),
    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmed = email.trim(),
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error("Invalid email"),
      return
    }

    setIsSubmitting(true),
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed })}),

      const data = await res.json().catch(() => ({})),

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

  const [email, setEmail] = useState(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const { toast } = useToast(),
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  const lastSubmit = useRef(0),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    const now = Date.now(),
    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmed = email.trim(),
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error("Invalid email"),
      return
    }

      const data = await res.json().catch(() => ({})),



      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!")
        } else {





  return (

    <div className='w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6'>;
      <div className='flex items-center mb-4'>;
        <div className='p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3'>;
          <Mail className='h-6 w-6' />;
        </div>;
        <div>;
          <h3 className='text-lg font-bold text-white'>Stay Updated</h3>;
          <p className='text-zion-slate-light text-sm'>;
    <div className='w - full max - w-lg mx - auto bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6'>;
      <div className='flex items - center mb - 4'>;
        <div className='p - 2 bg - zion - purple / 20 rounded - full text - zion - cyan mr - 3'>;
          <Mail className='h - 6 w - 6' />;
        </div>;
        <div>;
          <h3 className='text - lg font - bold text - white'>Stay Updated</h3>;
          <p className='text - zion - slate - light text - sm'>;

            Get exclusive offers, trending AI news, and early access to best;
            deals;
          </p>;
        </div>;
      </div>;



          toast.success(data.message || "Thanks for subscribing!")
        }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  return (
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      {isSubmitted ? (;
        <div className='text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40'>;
          <p className='text-white font-medium'>Thank you for subscribing!</p>;
          <p className='text-zion-slate-light mt-1'>;


      <div className='mt-4 flex items-center text-xs text-zion-slate-light'>;
        <div className='flex -space-x-1 mr-2'>;
          {[...Array(3)].map((_, i) => (;

            <div
              key={i}
              className='h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan'>              {String && String.fromCharCode(65 + i)}
            </div>;
          ))}

            We&apos;ll keep you updated with the latest from Zion.
          </p>

      
<<<<<<< HEAD




  return (

    <div className='w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6'>;
      <div className='flex items-center mb-4'>;
        <div className='p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3'>;
          <Mail className='h-6 w-6' />;
        </div>;
        <div>;
          <h3 className='text-lg font-bold text-white'>Stay Updated</h3>;
          <p className='text-zion-slate-light text-sm'>;
    <div className='w - full max - w-lg mx - auto bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6'>;
      <div className='flex items - center mb - 4'>;
        <div className='p - 2 bg - zion - purple / 20 rounded - full text - zion - cyan mr - 3'>;
          <Mail className='h - 6 w - 6' />;
        </div>;
        <div>;
          <h3 className='text - lg font - bold text - white'>Stay Updated</h3>;
          <p className='text - zion - slate - light text - sm'>;

            Get exclusive offers, trending AI news, and early access to best;
            deals;
          </p>;
        </div>;
      </div>;



      {isSubmitted ? (;
        <div className='text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40'>;
          <p className='text-white font-medium'>Thank you for subscribing!</p>;
          <p className='text-zion-slate-light mt-1'>;
            We&apos;ll keep you updated with the latest from Zion.
          </p>
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
          <label htmlFor="enhanced-newsletter-email" className="sr-only">
            Email address for newsletter subscription
          </label>
          <Input
<<<<<<< HEAD
}
            type='email'
            id='enhanced-newsletter-email'
            name='email'
            placeholder='Enter your email'
            className='flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            autoComplete='email'
            required
          />
          <Button
            type='submit'
            disabled={isSubmitting}
            className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      )}
      <div className='mt-4 flex items-center text-xs text-zion-slate-light'>
        <div className='flex -space-x-1 mr-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan'
            >              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  )
}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            type="email"
            id="enhanced-newsletter-email"
            name="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">
    } catch (err: any) {;
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast.error("Unable to subscribe right now. Please try again later.");
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;
          <Mail className="h-6 w-6" />;
        </div>;
        <div>;
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>;
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>;
        </div>;
      </div>;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <label htmlFor="enhanced-newsletter-email" className="sr-only">;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type="email";
            id="enhanced-newsletter-email";
            name="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="email";
            required;
          />;
          <Button;
            type="submit";
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}
;
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
}
}

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {is_submitted ? (
        <div className='text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40'>;
          <p className='text - white font - medium'>Thank you for subscribing!</p>;
          <p className='text - zion - slate - light mt - 1'>;
            We & apos;ll keep you updated with the latest from Zion.;
          </p>;
        </div>) : (
        <form;
          on_submit={handle_submit}
          className='flex flex - col space - y-3 sm:flex - row sm:space - y-0 sm:space - x-2';
        >;
          <label html_for='enhanced - newsletter - email' className='sr - only'>;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type='email';
            id='enhanced - newsletter - email';
            name='email';
            placeholder='Enter your email';
            className='flex - grow bg - zion - blue - dark text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple';
            value={email}
            on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
              set_email (e.target.value);
            }
            auto_complete='email';
            required;
          />;
          <Button;
            type='submit';
            disabled={is_submitting}
            className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'          >;
            {is_submitting ? 'Subscribing...' : 'Subscribe'}
          </Button>;
        </form>)}
      <div className='mt - 4 flex items - center text - xs text - zion - slate - light'>;
        <div className='flex -space - x-1 mr - 2'>;
          {[...Array (3)].map ((_, i) => (
            <div;
              key={i}
              className='h - 5 w - 5 rounded - full border border - zion - blue - dark bg - zion - blue flex items - center justify - center text - zion - cyan';
            >              {String.fromCharCode (65 + i)}
            </div>))}
        </div>;
        <span > Join 10, 000+ tech professionals who already subscribe</span>;
      </div>;
    </div>);


<<<<<<< HEAD
}
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
