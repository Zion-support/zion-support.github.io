<<<<<<< HEAD:app/components/NewsletterSignup.tsx
'use client';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
interface NewsletterSignupProps {
=======
import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
'use client'
>>>>>>> origin/main:app-backup/components/NewsletterSignup.tsx
  variant?: 'inline' | 'modal'
const "NewsletterSignup": React.FC<NewsletterSignupProps> = ({ variant = 'inline',;
  const [email, setEmail] = useState(';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'};
  const [message, setMessage] = useState(';
      setStatus('error'
      setMessage('Please enter your email address'
  setStatus('error'
      setMessage('Please enter a valid email address'
    setStatus('loading'
      setStatus('success'
      setMessage('Thank you for subscribing! Check your email for confirmation.'
      setEmail(''
      // Close modal after success if it''
      if (variant === 'modal'
      setStatus('error';
      setMessage('Something went wrong. Please try again.'