

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {

  const [email, setEmail] = useState(''),
  const [honeypot, setHoneypot] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [emailError, setEmailError] = useState(''),
  const { toast } = useToast(),
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: trimmedEmail })
      }), const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error,
  if (res.ok) {

        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })
        } else {
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })
        }
        setEmail('');
        // setEmailError(''), // Already cleared if regex passed
      } else {

        logErrorToProduction($2);
        // Use a more specific error message if available from API, otherwise generic,
  const errorMessage = data.error || 'Subscription failed. Please try again.',
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });

      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` })
    } finally {
      setIsSubmitting(false)
    }

  },

  return (
    <form,
  id="footer-newsletter-form"
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter subscription
      </label>
      <Input,
  type="email"
        id="newsletter-email"
        name="newsletterEmail"
        placeholder="Enter your email"
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
      />

        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />

            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>

    </form>

