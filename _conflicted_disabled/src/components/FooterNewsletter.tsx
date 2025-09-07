<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return, // ignore bots
    const now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return
    } else {
      setEmailError("")
    }

    setIsSubmitting(true);
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail })
      });

      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error

      if (res.ok) {
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })
        } else {
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })
        }
        setEmail('');
        // setEmailError(''), // Already cleared if regex passed
      } else {
<<<<<<< HEAD
        logErrorToProduction('Newsletter subscription failed:', { data: data }),
        // Use a more specific error message if available from API, otherwise generic
        const errorMessage = data.error || 'Subscription failed. Please try again.';
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
=======
        logErrorToProduction($2);
        // Use a more specific error message if available from API, otherwise generic,
  const errorMessage = data.error || 'Subscription failed. Please try again.',
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` })
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  };

=======
  },
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
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
<<<<<<< HEAD
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <Button
        type="submit"
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
=======
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
<<<<<<< HEAD
    </form>
  )
} 
=======
    </form>
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
