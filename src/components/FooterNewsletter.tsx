<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
{/* Honeypot field */}
      <input

=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
=======
import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export function FooterNewsletter(): React.ReactElement {
<<<<<<< HEAD

  const [email, setEmail] = useState('')
=======
import React, { useState, useRef } from 'react';'
import { Input  } from '@/components/ui/input';'
import { Button  } from '@/components/ui/button';'
import { useToast  } from '@/hooks/use-toast';'
import React, { useState, useRef } from 'react''
import { Input } from '@/components/ui/input''
import { Button } from '@/components/ui/button''
import { useToast } from '@/hooks/use-toast''
import { Loader2 } from 'lucide-react'';
import {logErrorToProduction} from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {}
'
  const [email, setEmail] = useState('')'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const [emailError, setEmailError] = useState('')
  const { toast } = useToast()'
      // // // // // // // console.error('Newsletter subscription failed:', error)
} finally {}
      setIsSubmitting(false)'
      // console.error('Newsletter subscription failed:', error)} finally {};
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (honeypot) return; // ignore bots;
    const now = Date.now()
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;
    const trimmedEmail = email.trim()
    if (!EMAIL_REGEX.test(trimmedEmail)) {'
      setEmailError('Please enter a valid email address.')
      return;
    } else {'
      setEmailError('')
    }
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID;
    try {'
      const res = await fetch('/api/newsletter', {'
        method: 'POST''
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email: trimmedEmail })
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error;
      if (res.ok) {'
        if (data.status === 'already_subscribed') {'
          toast.success(data.message |"You're already subscribed!", {}`
            id: `${uniqueToastIdBase}-already-subscribed`
          })
        } else {}
          toast.success('
            data.message |'Successfully subscribed to newsletter!'`
            { id: `${uniqueToastIdBase}-success` }
          )
        }'
        setEmail('')'
        // setEmailError(''); // Already cleared if regex passed;
      } else {'
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage ='
          data.error |'Subscription failed. Please try again.'`
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
      }
    } catch (err: any) {'
      logErrorToProduction('Newsletter subscription error:', { data: err })'
      toast.error('Unable to subscribe right now. Please try again later.', {}`
        id: `${uniqueToastIdBase}-catch-error`
      })
    } finally {}
      setIsSubmitting(false)
    }
  }
      >'
      <label htmlFor='newsletter-email' className='sr-only'>

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        Email address for newsletter subscription
=======
        Email address for newsletter subscription;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </label>
      <Input'
        type='email''
        id='newsletter-email''
        name='newsletterEmail''
        placeholder='Enter your email''
        className='flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center'
        value={email}
        onChange={e => setEmail(e.target.value)}'
        autoComplete='email'        required'
import React, { useState, useRef } from 'react','
import { Input } from '@/components/ui/input','
import { Button } from '@/components/ui/button','
import { useToast } from '@/hooks/use-toast','
import { Loader2 } from 'lucide-react''
import {logErrorToProduction} from '@/utils/productionLogger',
export function FooterNewsletter(): React.ReactElement {'
  const [email, setEmail] = useState(''),'
  const [honeypot, setHoneypot] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),'
  const [emailError, setEmailError] = useState(''),
  const { toast } = useToast(),

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  const lastSubmit = useRef(0),
=======
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // toast({
      //   title: "Success!",
      //   description: "You've been subscribed to our newsletter.",
      // });
      alert("Success! You've been subscribed to our newsletter.");
      setEmail('');
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to subscribe. Please try again.",
      //   variant: "destructive",
      // });
      alert("Error: Failed to subscribe. Please try again.");
    } finally {
=======
  const handleSubmit = async (e: React.FormEvent) => {};
    e.preventDefault(),;
    if (honeypot) return, // ignore bots;
    const now = Date.now(),
    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmedEmail = email.trim(),
    if (!EMAIL_REGEX.test(trimmedEmail)) {"
      setEmailError("Please enter a valid email address."),
      return;
    } else {"
      setEmailError("")
    }

    setIsSubmitting(true),`
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
    try {'
      const res = await fetch('/api/newsletter', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail })
      }),

      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
      if (res.ok) {'
        if (data.status === 'already_subscribed') {'"`
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })
        } else {'`
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })'
import React, { useState, useRef } from 'react',;'
import { Input } from '@/components/ui/input',;'
import { Button } from '@/components/ui/button',;'
import { useToast } from '@/hooks/use-toast',;'
import { Loader2 } from 'lucide-react';'
import {logErrorToProduction} from '@/utils/productionLogger',;
export function FooterNewsletter(): React.ReactElement {;'
  const [email, setEmail] = useState(''),;'
  const [honeypot, setHoneypot] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;'
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
    if (!EMAIL_REGEX.test(trimmedEmail)) {;"
      setEmailError("Please enter a valid email address."),;
      return;
    } else {;"
      setEmailError("");
    }
;
    setIsSubmitting(true),;`
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
    try {;'
      const res = await fetch('/api/newsletter', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ email: trimmedEmail });
      }),;
      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
      if (res.ok) {;'
        if (data.status === 'already_subscribed') {;'"`
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` });
        } else {;'`
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` });
        }'
        setEmail(''),;'
        // setEmailError(''), // Already cleared if regex passed;
      } else {;'
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        // Use a more specific error message if available from API, otherwise generic;'
        const errorMessage = data.error || 'Subscription failed. Please try again.',;`
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
      }
    } catch (err: any) {;'
      logErrorToProduction('Newsletter subscription error:', { data: err });'`
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` });
    } finally {;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
<<<<<<< HEAD
=======
    <form"
      id="footer-newsletter-form""
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit}"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >"
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter subscription;
      </label>
      <Input"
        type="email""
        id="newsletter-email""
        name="newsletterEmail""
        placeholder="Enter your email""
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center"
        value={email}
        onChange={(e) => setEmail(e.target.value)}"
        autoComplete="email"
        required;
      />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input;
{/* Honeypot field */}
      <input;
        onChange={e => setHoneypot(e && e.target.value)}
        tabIndex={-1}'
        autoComplete='off';'
        style={{ display: 'none' }}
      />;

      <Button"
        type="submit"
        disabled={isSubmitting}

      <Button"
        type="submit"
        disabled={isSubmitting}'
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;
"
        type="text"


        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}

'
        type='text'"
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}'
        autoComplete='off''
        style={{ display: 'none' }}
      />
      <Button'
        type='submit''
        aria-label='Subscribe to newsletter'
        disabled={isSubmitting}'
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >
=======
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
>>>>>>> pr-12243
        {isSubmitting ? (
<<<<<<< HEAD
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======
          <>'
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            Subscribing...
          </>
        ) : ('
          'Subscribe'
        )}
      </Button>
    </form>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
}
}
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
<<<<<<< HEAD
        tabIndex={-1}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
        autoComplete="off"
=======
        tabIndex={-1}"
        autoComplete="off"'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        style={{ display: 'none' }}
      />
      <Button"
        type="submit""
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      >;
        {isSubmitting ? (;
          <>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
=======
<<<<<<< HEAD
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
            Subscribing...;
          </>;
        ) : (;'
import React, { useState, useRef } from 'react',;'
import { Input } from '@/components/ui/input',;'
import { Button } from '@/components/ui/button',;'
import { useToast } from '@/hooks/use-toast',;'
import { Loader2 } from 'lucide-react';'
import {logErrorToProduction} from '@/utils/productionLogger',;
;
export function FooterNewsletter():React.ReactElement {;'
  const [email, setEmail] = useState(''),;'
  const [honeypot, setHoneypot] = useState(''),;
  const [isSubmitting, setIsSubmitting] = useState(false),;'
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
    if (!EMAIL_REGEX.test(trimmedEmail)) {;"
      setEmailError("Please enter a valid email address."),;
      return;
    } else {;"
      setEmailError(""),;
    }
;
    setIsSubmitting(true),;`
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
;
    try {;'
      const res = await fetch('/api/newsletter', {;'
        method:'POST',;'
        headers:{ 'Content-Type':'application/json' },;
        body:JSON.stringify({ email:trimmedEmail });
      }),;
;
      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
;
      if (res.ok) {;'
        if (data.status === 'already_subscribed') {;'"`
          toast.success(data.message || "You're already subscribed!", { id:`${uniqueToastIdBase}-already-subscribed` }),;
        } else {;'`
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id:`${uniqueToastIdBase}-success` }),;
        }'
        setEmail(''),;'
        // setEmailError(''), // Already cleared if regex passed;
      } else {;'
        logErrorToProduction('Newsletter subscription failed:', { data:data }),;
        // Use a more specific error message if available from API, otherwise generic;'
        const errorMessage = data.error || 'Subscription failed. Please try again.',;`
        toast.error(errorMessage, { id:`${uniqueToastIdBase}-api-error` }),;
      }
    } catch (err:any) {;'
      logErrorToProduction('Newsletter subscription error:', { data:err }),;'`
      toast.error('Unable to subscribe right now. Please try again later.', { id:`${uniqueToastIdBase}-catch-error` }),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <form;"
      id="footer-newsletter-form";"
      aria-label="Newsletter sign-up";
      onSubmit={handleSubmit}"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2";
    >;"
      <label htmlFor="newsletter-email" className="sr-only">;
        Email address for newsletter subscription;
      </label>;
      <Input;"
        type="email";"
        id="newsletter-email";"
        name="newsletterEmail";"
        placeholder="Enter your email";"
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center";
        value={email}
        onChange={(e) => setEmail(e.target.value)}"
        autoComplete="email";
        required;
      />;"
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input;"
        type="text";
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}"
        autoComplete="off";'
        style={{ display:'none' }}
      />;
      <Button;"
        type="submit";"
        aria-label="Subscribe to newsletter";
        disabled={isSubmitting}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      >;
        {isSubmitting ? (;
          <>;"
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
            Subscribing...;
          </>;
        ) : (;'
          'Subscribe';
        )}
      </Button>;
    </form>;
  );
} ;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  );
} ;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  );
} ;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
} ;
'
import React, { useState, useRef } from 'react';'
import { Input } from '@/components / ui / input';'
import { Button } from '@/components / ui / button';'
import { use_toast } from '@/hooks / use - toast';'
import { Loader2 } from 'lucide-react';'
import { logErrorToProduction } from '@/utils / production_logger';
export function FooterNewsletter (): React.ReactElement {';
  const [email, set_email] = useState ('');'
  const [honeypot, set_honeypot] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);'
  const [email_error, setEmailError] = useState ('');
  const { toast } = use_toast ();'
      // // // // // // // console.error ('Newsletter subscription failed:', error);
} finally {}
      setIsSubmitting (false);'
      // console.error ('Newsletter subscription failed:', error)} finally {}
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const last_submit = useRef (0);
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default ();
    // Check condition;
if (return) {}
  $2;
} // ignore bots;
    const now = Date.now ();
    // Check condition;
if (return) {}
  $2;
}
    last_submit.current = now;
    const trimmed_email = email.trim ();
    if () {) {}
  $2;
}'
      setEmailError ('Please enter a valid email address.');
      return;
    } else {'
      setEmailError ('');
    }
    setIsSubmitting (true);`
    const uniqueToastIdBase = `newsletter - toast-${Date.now ()}`; // Generate a base for unique ID;
    try {'
      const res = await fetch ('/api / newsletter', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email: trimmed_email }),
      });
      const data = await res.json ().catch (() => ({})); // Ensure data is an object even on parse error;
      // Check condition;
if ( {) {}
  $2;
}
        // Check condition;
if ( {) {}
  $2;
}'"
          toast.success (data.message || "You're already subscribed!", {}`
            id: `${uniqueToastIdBase}-already - subscribed`,
          });
        } else {}
          toast.success ('
            data.message || 'Successfully subscribed to newsletter!',`
            { id: `${uniqueToastIdBase}-success` }
          );
        }'
        set_email ('');'
        // setEmailError (''); // Already cleared if regex passed;
      } else {'
        logErrorToProduction ('Newsletter subscription failed:', { data: data });
        // Use a more specific error message if available from API, otherwise generic;
        const error_message =;'
          data.error || 'Subscription failed. Please try again.';`
        toast.error (error_message, { id: `${uniqueToastIdBase}-api - error` });
      }
    } catch (err: any) {'
      logErrorToProduction ('Newsletter subscription error:', { data: err });'
      toast.error ('Unable to subscribe right now. Please try again later.', {}`
        id: `${uniqueToastIdBase}-catch - error`,
      });
    } finally {}
      setIsSubmitting (false);
    }
  }
      >;'
      <label html_for='newsletter - email' className='sr - only'>;
        Email address for newsletter subscription;
      </label>;
      <Input;'
        type='email';'
        id='newsletter - email';'
        name='newsletter_email';'
        placeholder='Enter your email';'
        className='flex - grow bg - zion - blue - light dark:bg - zion - blue - dark text - black dark:text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple placeholder - opacity - 50 placeholder:text - center';
        value={email}
        on_change={e => set_email (e.target.value)}'
        auto_complete='email'        required;
      />;'
      {email_error && <p className='text - red - 500 text - sm mt - 1'>{email_error}</p>}
      {/* Honeypot field */}
      <input;'
        type='text';
        value={honeypot}
        on_change={e => set_honeypot (e.target.value)}
        tab_index={-1}'
        auto_complete='off';'
        style={{ display: 'none' }}
      />;
      <Button;'
        type='submit';'
        aria - label='Subscribe to newsletter';
        disabled={is_submitting}'
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'      >;
        {is_submitting ? (
          <>;'
            <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
            Subscribing...;
          </>) : ('
          'Subscribe')}
      </Button>;
    </form>);
}
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
<<<<<<< HEAD
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243


};"
return (<form id="footer-newsletter-form" aria-label="Newsletter sign-up" onSubmit= {;"
  handleSubmit ";'"
}className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2" newsletter-email"className="sr-only"> Email address for newsletter subscription </label> <Input className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"> {'";'"
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;
}</Button> </form>) ;'"
}'"
  );
} ;
}
}
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
  );
}
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> pr-12243
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
