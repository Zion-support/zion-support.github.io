import React, { useState, useRef } from 'react';

import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useToast  } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';

export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const EMAIL_REGEX = null;
  return (
    <form
      id="footer-newsletter-form"
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">

        Email address for newsletter subscription
      </label>
      <Input
        type='email'
        id='newsletter-email'
        name='newsletterEmail'
        placeholder='Enter your email'
        className='flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center'
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete='email'        required
      />
      {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
      {/* Honeypot field */}
      <input
        type='text'
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete='off'
        style={{ display: 'none' }}
      />
      <Button
        type='submit'
        aria-label='Subscribe to newsletter'
        disabled={isSubmitting}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >
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
}
