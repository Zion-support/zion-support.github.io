import React, {_useState, _useRef} from 'react';

export function FooterNewsletter(): React.ReactElement {_const [email, _setEmail] = useState('');
  const [honeypot, _setHoneypot] = useState('');
  const [isSubmitting, _setIsSubmitting] = useState(false);
  const [emailError, _setEmailError] = useState('');
  const { toast} = useToast();

  const _EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const _lastSubmit = useRef(0);

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    if (honeypot) return; // ignore bots
    const _now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;

    const _trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;} else {_setEmailError("");}

    setIsSubmitting(true);
    const _uniqueToastIdBase = `newsletter-toast-${_Date.now()}`; // Generate a base for unique ID

    try {_const _res = await fetch('/api/newsletter', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_email: trimmedEmail})
      });

      const _data = await res.json().catch__(() => ({})); // Ensure data is an object even on parse error

      if (res.ok) {_if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!", _{ id: `${uniqueToastIdBase}-already-subscribed` });
        } else {_toast.success(data.message || 'Successfully subscribed to newsletter!', _{ id: `${uniqueToastIdBase}-success` });
        }
        setEmail('');
        // setEmailError(''); // Already cleared if regex passed
      } else {_logErrorToProduction('Newsletter subscription failed:', _{ data: data});
        // Use a more specific error message if available from API, otherwise generic
        const _errorMessage = data.error || 'Subscription failed. Please try again.';
        toast.error(errorMessage, {_id: `${uniqueToastIdBase}-api-error` });
      }
    } catch (err: unknown) {_logErrorToProduction('Newsletter subscription error:', _{ data: err});
      toast.error('Unable to subscribe right now. Please try again later.', {_id: `${uniqueToastIdBase}-catch-error` });
    } finally {_setIsSubmitting(false);}
  };

  return (_<form
      id="footer-newsletter-form"
      aria-label="Newsletter sign-up"
      onSubmit={_handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter subscription
      </label>
      <Input
        type="email"
        id="newsletter-email"
        name="newsletterEmail"
        placeholder="Enter your email"
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center"
        value={_email}
        onChange={_(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
      />
      {_emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {_/* Honeypot field */}
      <input
        type="text"
        value={_honeypot}
        onChange={_(_e) => setHoneypot(e.target.value)}
        tabIndex={_-1}
        autoComplete="off"
        style={_{ display: 'none'}}
      />
      <Button
        type="submit"
        aria-label="Subscribe to newsletter"
        disabled={_isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
      >
        {_isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
} 