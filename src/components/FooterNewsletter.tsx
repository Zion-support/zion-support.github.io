import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent rapid submissions
    const now = Date.now();
    if (now - lastSubmit.current < 2000) {
      return;
    }
    lastSubmit.current = now;

    // Check honeypot
    if (honeypot) {
      return;
    }

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    setIsSubmitting(true);
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`;

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", {
            id: `${uniqueToastIdBase}-already-subscribed`,
          });
        } else {
          toast.success(
            data.message || 'Successfully subscribed to newsletter!',
            { id: `${uniqueToastIdBase}-success` }
          );
        }
        setEmail('');
      } else {
        const errorMessage = data.error || 'Subscription failed. Please try again.';
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
      }
    } catch (err: any) {
      toast.error('Unable to subscribe right now. Please try again later.', {
        id: `${uniqueToastIdBase}-catch-error`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <label htmlFor='newsletter-email' className='sr-only'>
        Email address for newsletter subscription
      </label>
      <Input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
      {/* Honeypot field */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
}