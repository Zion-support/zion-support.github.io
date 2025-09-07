{/* Honeypot field */}
      <input;
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {
  // TODO: Implement
}
  const [email, setEmail] = useState()
  const [honeypot, setHoneypot] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState()
  const { toast } = useToast()
      // // // // // // // console.error('Newsletter subscription failed:', error)
} finally {
  // TODO: Implement
      setIsSubmitting(false)
      // console.error('Newsletter subscription failed:', error)} finally {
  // TODO: Implement
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React.FormEvent) => {;
</input>
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;
    const trimmedEmail = email.trim()
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.')
      return;
    } else {
  // TODO: Implement
      setEmailError()
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID;
    try {
  // TODO: Implement
      const res = await fetch('/api/newsletter', {
        method: 'POST,
  headers: { 'Content-Type': 'application/json' }')
        body: JSON.stringify({ email: trimmedEmail })
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error;
      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message |"You're already subscribed!", {"`;
            id: `${uniqueToastIdBase}-already-subscribed`)
  // TODO: Implement
          toast.success("
            data.message |'Successfully subscribed to newsletter!`;
            { id: `${uniqueToastIdBase}-success` })
          )
        setEmail()
        // setEmailError(); // Already cleared if regex passed;
  // TODO: Implement
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage =
          data.error |'Subscription failed. Please try again.`;
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.', {`;
        id: `${uniqueToastIdBase}-catch-error`)
  // TODO: Implement
      >
      <label htmlFor='newsletter-email' className='sr-only'>
</label>
      <Input;
        type='email
        id='newsletter-email
        name='newsletterEmail
        placeholder='Enter your email
        className='flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center
        value={email}
        onChange={e => setEmail(e.target.value)}

    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmedEmail = email.trim(),
      setEmailError("Please enter a valid email address."),"
  // TODO: Implement
}"
      setEmailError("")"

    setIsSubmitting(true),`;
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
  // TODO: Implement
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },')
      }),

      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
        if (data.status === 'already_subscribed') {`;
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })"
  // TODO: Implement
}"`;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })
import React, { useState, useRef } from 'react',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { useToast } from '@/hooks/use-toast',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function FooterNewsletter(): React.ReactElement {;
  const [email, setEmail] = useState(),;
  const [honeypot, setHoneypot] = useState(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [emailError, setEmailError] = useState(),;
  const { toast } = useToast(),;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
  const lastSubmit = useRef(0),;
    e.preventDefault(),;
    if (honeypot) return, // ignore bots;
    const now = Date.now(),;
    if (now - lastSubmit.current < 1000) return,;
    lastSubmit.current = now,;
    const trimmedEmail = email.trim(),;
    if (!EMAIL_REGEX.test(trimmedEmail)) {;
      setEmailError("Please enter a valid email address."),;"
    } else {;"
      setEmailError("");"
;
    setIsSubmitting(true),;`;
    try {;"
      const res = await fetch('/api/newsletter', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;')
        body: JSON.stringify({ email: trimmedEmail });
      }),;
      if (res.ok) {;
        if (data.status === 'already_subscribed') {;`;
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` });"
        } else {;"`;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` });
        setEmail(),;
        // setEmailError(), // Already cleared if regex passed;
      } else {;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage = data.error || 'Subscription failed. Please try again.',;`;
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
    } catch (err: any) {;
      logErrorToProduction('Newsletter subscription error:', { data: err });`;
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` });
    } finally {;
      setIsSubmitting(false);
  },

  return (
    <form;
      id="footer-newsletter-form"""
      aria-label="Newsletter sign-up""
      onSubmit={handleSubmit}"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2""
</form>"
      <label htmlFor="newsletter-email" className="sr-only">"
      <Input;"
        type="email"""
        id="newsletter-email"""
        name="newsletterEmail"""
        placeholder="Enter your email"""
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center""
        value={email})
        onChange={(e) => setEmail(e.target.value)}
"
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}"
      <input;"
        type="text"""
        name="honeypot""
        value={honeypot}
        onChange={e => setHoneypot(e && e.target.value)}
      <Button;"
        type="submit""
        disabled={isSubmitting}

        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

      <Button;
        type='submit
        aria-label='Subscribe to newsletter
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >

          <>
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />
</Loader2>
          </>
        ) : (
          'Subscribe)
        )}
      
    </form>
        type="submit"""
        aria-label="Subscribe to newsletter""
        disabled={isSubmitting}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";"
      >;

          <>;"
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
          </>;
        ) : (;
;)
export function FooterNewsletter():React.ReactElement {;
  const handleSubmit = async (e:React.FormEvent) => {;
      setEmailError(""),;"
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;')
        body:JSON.stringify({ email:trimmedEmail });
          toast.success(data.message || "You're already subscribed!", { id:`${uniqueToastIdBase}-already-subscribed` }),;"
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id:`${uniqueToastIdBase}-success` }),;
        // setEmailError(), // Already cleared if regex passed;
        logErrorToProduction('Newsletter subscription failed:', { data:data }),;
        // Use a more specific error message if available from API, otherwise generic;
        toast.error(errorMessage, { id:`${uniqueToastIdBase}-api-error` }),;
    } catch (err:any) {;
      logErrorToProduction('Newsletter subscription error:', { data:err }),;`;
      toast.error('Unable to subscribe right now. Please try again later.', { id:`${uniqueToastIdBase}-catch-error` }),;
      setIsSubmitting(false),;
  },;
  return (;
      id="footer-newsletter-form";""
      aria-label="Newsletter sign-up";"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2";"
      <label htmlFor="newsletter-email" className="sr-only">;"
      </label>;
        type="email";""
        id="newsletter-email";""
        name="newsletterEmail";""
        placeholder="Enter your email";""
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center";"
        type="text";"
        onChange={(e) => setHoneypot(e.target.value)}
        type="submit";""
        aria-label="Subscribe to newsletter";"

            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>"
        ) : (;"
          'Subscribe';')
    </form>;
      <label html_for='newsletter - email' className='sr - only'>;
        type='email';
        id='newsletter - email';
        name='newsletter_email';
        placeholder='Enter your email';
        className='flex - grow bg - zion - blue - light dark:bg - zion - blue - dark text - black dark:text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple placeholder - opacity - 50 placeholder:text - center';
        on_change={e => set_email (e.target.value)}

      {email_error && <p className='text - red - 500 text - sm mt - 1'>{email_error}</p>}
        type='text';
        on_change={e => set_honeypot (e.target.value)}
        type='submit';
        aria - label='Subscribe to newsletter';
        disabled={is_submitting}
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'      >;

          <>;
            <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
          </>) : ()
          'Subscribe')}
    </form>);
return (<form id="footer-newsletter-form" aria-label="Newsletter sign-up" onSubmit= {;""
  handleSubmit ";""
}className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2" newsletter-email"className="sr-only"> Email address for newsletter subscription </label> <Input className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"> {'";"
</form>)"
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;
} </form>) ;`;