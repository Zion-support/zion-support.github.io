<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useToast  } from '@/hooks/use-toast';
import React, { useState, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {

  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const { toast } = useToast()
      // // // // // // // console.error('Newsletter subscription failed:', error)
} finally {
      setIsSubmitting(false)
      // console.error('Newsletter subscription failed:', error)} finally {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (honeypot) return; // ignore bots
    const now = Date.now()
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now
    const trimmedEmail = email.trim()
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.')
      return;
    } else {
      setEmailError('')
    }
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email: trimmedEmail })
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error
      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message |"You're already subscribed!", {
            id: `${uniqueToastIdBase}-already-subscribed`
          })
        } else {
          toast.success(
            data.message |'Successfully subscribed to newsletter!'
            { id: `${uniqueToastIdBase}-success` }
          )
        }
        setEmail('')
        // setEmailError(''); // Already cleared if regex passed
      } else {
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic
        const errorMessage =
          data.error |'Subscription failed. Please try again.'
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.', {
        id: `${uniqueToastIdBase}-catch-error`
      })
    } finally {
      setIsSubmitting(false)
    }
  }
      >
      <label htmlFor='newsletter-email' className='sr-only'>

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
import React, { useState, useRef } from 'react',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { useToast } from '@/hooks/use-toast',
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState(''),
  const [honeypot, setHoneypot] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [emailError, setEmailError] = useState(''),
  const { toast } = useToast(),

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  const lastSubmit = useRef(0),

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    if (honeypot) return, // ignore bots
    const now = Date.now(),
    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmedEmail = email.trim(),
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address."),
      return
    } else {
      setEmailError("")
    }

    setIsSubmitting(true),
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error
      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", {
            id: `${uniqueToastIdBase}-already-subscribed`,
          })
        } else {
          toast.success(
            data.message || 'Successfully subscribed to newsletter!',
            { id: `${uniqueToastIdBase}-success` }
          )
        }
        setEmail('')
        // setEmailError(''); // Already cleared if regex passed
      } else {
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic
        const errorMessage = null;
          data.error || 'Subscription failed. Please try again.'
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.', {
        id: `${uniqueToastIdBase}-catch-error`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }
      >
      <label htmlFor='newsletter-email' className='sr-only'>
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
        body: JSON.stringify({ email: trimmedEmail })
      }),

      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error

      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })
        } else {
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })
import React, { useState, useRef } from 'react',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { useToast } from '@/hooks/use-toast',;
import { Loader2 } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
export function FooterNewsletter(): React.ReactElement {;
  const [email, setEmail] = useState(''),;
  const [honeypot, setHoneypot] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [emailError, setEmailError] = useState(''),;
  const { toast } = useToast(),;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
  const lastSubmit = useRef(0),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (honeypot) return, // ignore bots;
    const now = Date.now(),;
    if (now - lastSubmit.current < 1000) return,;
    lastSubmit.current = now,;
    const trimmedEmail = email.trim(),;
    if (!EMAIL_REGEX.test(trimmedEmail)) {;
      setEmailError("Please enter a valid email address."),;
// // // // // // // console && console.error('Newsletter subscription failed:', error) ;
} finally {;
      setIsSubmitting(false) ;
      // console && console.error('Newsletter subscription failed:', error)} finally {;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (honeypot) return; // ignore bots;
    const now = Date && Date.now();
    if (now - lastSubmit && lastSubmit.current < 1000) return;
    lastSubmit && lastSubmit.current = now;
    const trimmedEmail = email && email.trim();
    if (!EMAIL_REGEX && EMAIL_REGEX.test(trimmedEmail)) {;
      setEmailError('Please enter a valid email address.');
      return;
    } else {;
      setEmailError("");
    }
    setIsSubmitting(true);
    const uniqueToastIdBase = `newsletter-toast-${Date && Date.now()}`; // Generate a base for unique ID;
;
    setIsSubmitting(true),;
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
    try {;
      const res = await fetch('/api/newsletter', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email: trimmedEmail });
      }),;
      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
      if (res.ok) {;
        if (data.status === 'already_subscribed') {;
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` });
        body: JSON && JSON.stringify({ email: trimmedEmail }),;
      });
      const data = await res && res.json().catch(() => ({})); // Ensure data is an object even on parse error;
      if (res && res.ok) {;
        if (data && data.status === 'already_subscribed') {;
          toast && toast.success(data && data.message || "You're already subscribed!", {;
            id: `${uniqueToastIdBase}-already-subscribed`,;
          });
        } else {;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` });
        }
        setEmail(''),;
        // setEmailError(''), // Already cleared if regex passed;
      } else {;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage = data.error || 'Subscription failed. Please try again.',;
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
      }
    } catch (err: any) {;
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast && toast.error('Unable to subscribe right now. Please try again later.', {;
        id: `${uniqueToastIdBase}-catch-error`,;
      });
    } finally {;
      setIsSubmitting(false);
    }
  };
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` });
    } finally {;
      setIsSubmitting(false);
    }
  },

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
      >;
      <label htmlFor='newsletter-email' className='sr-only'>;
        Email address for newsletter subscription;
      </label>;
      <Input
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
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input


      {/* Honeypot field */}
{/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        value={honeypot}
=======
{/* Honeypot field */}
      <input

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
{/* Honeypot field */}
      <input

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onChange={e => setHoneypot(e && e.target.value)}
        tabIndex={-1}
        autoComplete='off';
        style={{ display: 'none' }}
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <Button
        type="submit"
        disabled={isSubmitting}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <Button
        type="submit"
        disabled={isSubmitting}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

        type="text"


        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}


<<<<<<< HEAD
<<<<<<< HEAD
        type='text'
        type="text"
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
  )
}
}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <Button
        type="submit"
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
<<<<<<< HEAD
<<<<<<< HEAD
            Subscribing...;
          </>;
        ) : (;
import React, { useState, useRef } from 'react',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { useToast } from '@/hooks/use-toast',;
import { Loader2 } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
;
export function FooterNewsletter():React.ReactElement {;
  const [email, setEmail] = useState(''),;
  const [honeypot, setHoneypot] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [emailError, setEmailError] = useState(''),;
  const { toast } = useToast(),;
;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
;
  const lastSubmit = useRef(0),;
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (honeypot) return, // ignore bots;
    const now = Date.now(),;
    if (now - lastSubmit.current < 1000) return,;
    lastSubmit.current = now,;
;
    const trimmedEmail = email.trim(),;
    if (!EMAIL_REGEX.test(trimmedEmail)) {;
      setEmailError("Please enter a valid email address."),;
      return;
    } else {;
      setEmailError(""),;
    }
;
    setIsSubmitting(true),;
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
;
    try {;
      const res = await fetch('/api/newsletter', {;
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;
        body:JSON.stringify({ email:trimmedEmail });
      }),;
;
      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
;
      if (res.ok) {;
        if (data.status === 'already_subscribed') {;
          toast.success(data.message || "You're already subscribed!", { id:`${uniqueToastIdBase}-already-subscribed` }),;
        } else {;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id:`${uniqueToastIdBase}-success` }),;
        }
        setEmail(''),;
        // setEmailError(''), // Already cleared if regex passed;
      } else {;
        logErrorToProduction('Newsletter subscription failed:', { data:data }),;
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage = data.error || 'Subscription failed. Please try again.',;
        toast.error(errorMessage, { id:`${uniqueToastIdBase}-api-error` }),;
      }
    } catch (err:any) {;
      logErrorToProduction('Newsletter subscription error:', { data:err }),;
      toast.error('Unable to subscribe right now. Please try again later.', { id:`${uniqueToastIdBase}-catch-error` }),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <form;
      id="footer-newsletter-form";
      aria-label="Newsletter sign-up";
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2";
    >;
      <label htmlFor="newsletter-email" className="sr-only">;
        Email address for newsletter subscription;
      </label>;
      <Input;
        type="email";
        id="newsletter-email";
        name="newsletterEmail";
        placeholder="Enter your email";
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center";
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email";
        required;
      />;
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input;
        type="text";
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off";
        style={{ display:'none' }}
      />;
      <Button;
        type="submit";
        aria-label="Subscribe to newsletter";
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Subscribing...;
          </>;
        ) : (;
          'Subscribe';
        )}
      </Button>;
    </form>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );

} ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

} ;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} ;

import React, { useState, useRef } from 'react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { use_toast } from '@/hooks / use - toast';
import { Loader2 } from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
export function FooterNewsletter (): React.ReactElement {
  const [email, set_email] = useState ('');
  const [honeypot, set_honeypot] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);
  const [email_error, setEmailError] = useState ('');
  const { toast } = use_toast ();
      // // // // // // // console.error ('Newsletter subscription failed:', error);
} finally {
      setIsSubmitting (false);
      // console.error ('Newsletter subscription failed:', error)} finally {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const last_submit = useRef (0);
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if (return) {
  $2
} // ignore bots;
    const now = Date.now ();
    // Check condition
if (return) {
  $2
}
    last_submit.current = now;
    const trimmed_email = email.trim ();
    if () {) {
  $2
}
      setEmailError ('Please enter a valid email address.');
      return;
    } else {
      setEmailError ('');
    }
    setIsSubmitting (true);
    const uniqueToastIdBase = `newsletter - toast-${Date.now ()}`; // Generate a base for unique ID;
    try {
      const res = await fetch ('/api / newsletter', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email: trimmed_email }),
      });
      const data = await res.json ().catch (() => ({})); // Ensure data is an object even on parse error;
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          toast.success (data.message || "You're already subscribed!", {
            id: `${uniqueToastIdBase}-already - subscribed`,
          });
        } else {
          toast.success (
            data.message || 'Successfully subscribed to newsletter!',
            { id: `${uniqueToastIdBase}-success` }
          );
        }
        set_email ('');
        // setEmailError (''); // Already cleared if regex passed;
      } else {
        logErrorToProduction ('Newsletter subscription failed:', { data: data });
        // Use a more specific error message if available from API, otherwise generic;
        const error_message =;
          data.error || 'Subscription failed. Please try again.';
        toast.error (error_message, { id: `${uniqueToastIdBase}-api - error` });
      }
    } catch (err: any) {
      logErrorToProduction ('Newsletter subscription error:', { data: err });
      toast.error ('Unable to subscribe right now. Please try again later.', {
        id: `${uniqueToastIdBase}-catch - error`,
      });
    } finally {
      setIsSubmitting (false);
    }
  }
      >;
      <label html_for='newsletter - email' className='sr - only'>;
        Email address for newsletter subscription;
      </label>;
      <Input;
        type='email';
        id='newsletter - email';
        name='newsletter_email';
        placeholder='Enter your email';
        className='flex - grow bg - zion - blue - light dark:bg - zion - blue - dark text - black dark:text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple placeholder - opacity - 50 placeholder:text - center';
        value={email}
        on_change={e => set_email (e.target.value)}
        auto_complete='email'        required;
      />;
      {email_error && <p className='text - red - 500 text - sm mt - 1'>{email_error}</p>}
      {/* Honeypot field */}
      <input;
        type='text';
        value={honeypot}
        on_change={e => set_honeypot (e.target.value)}
        tab_index={-1}
        auto_complete='off';
        style={{ display: 'none' }}
      />;
      <Button;
        type='submit';
        aria - label='Subscribe to newsletter';
        disabled={is_submitting}
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'      >;
        {is_submitting ? (
          <>;
            <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
            Subscribing...;
          </>) : (
          'Subscribe')}
      </Button>;
    </form>);
<<<<<<< HEAD
  ),;} 
 ;
}setIsSubmitting (true);
const uniqueToastIdBase = `newsletter-toast-$ {;
  Date.now () ;
}`, //Generate a base for unique ID try {;
  const res = await fetch ('/api/newsletter', {';
  method: 'POST';
headers: {';
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  email: trimmedEmail ;
}) ;
});
const data = await res.json () .catch ( () => ({;
  ;
}) ), //Ensure data is an object even on parse error if (res.ok) {';
  if (data.status === 'already subscribed') {;
  ;
}else {';
  toast.success (data.message || 'Successfully subscribed to newsletter!', {;
  id: `$ {;
  uniqueToastIdBase ;
}-success` ;
}) ';
}setEmail ('');';
//setEmailError (''), //Already cleared if regex passed ;
}else {';
  logErrorToProduction ('Newsletter subscription failed:', {;
  data: data ;
});';
//Use a more specific error message if available from API, otherwise generic const errorMessage = data.error || 'Subscription failed. Please try again.';
toast.error (errorMessage, {;
  id: `$ {;
  uniqueToastIdBase ;
}-api-error` ;
}) ;
}
}catch (err: any) {';
  logErrorToProduction ('Newsletter subscription error:', {;
  data: err ;
});';
toast.error ('Unable to subscribe right now. Please try again later.', {;
  id: `$ {;
  uniqueToastIdBase ;
}-catch-error` ;
}) ;
}finally {;
  setIsSubmitting (false) ;
}
<<<<<<< HEAD


};
return (<form id="footer-newsletter-form" aria-label="Newsletter sign-up" onSubmit= {;
  handleSubmit ";
}className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2" newsletter-email"className="sr-only"> Email address for newsletter subscription </label> <Input className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"> {'";
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;
}</Button> </form>) ;
}'"
  );
} ;
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
}
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
