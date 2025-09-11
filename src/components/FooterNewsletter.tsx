
        onChange={e => setHoneypot(e && e.target.value)}
        tabIndex={-1}
        autoComplete='off';
        style={{ display: 'none' }}
      />;

      <Button
        type="submit"
        disabled={isSubmitting}

        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

        type="text"

        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}

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

            Subscribing...;
          </>;
        ) : (;
          'Subscribe';
        )}
      </Button>;
    </form>;

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

