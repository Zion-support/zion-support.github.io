'use client'
import { useState } from 'react'
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react'
  variant?: 'inline' | 'modal'
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline',</NewsletterSignupProps>
<<<<<<< HEAD
  const [email, setEmail] = useState('''
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'}
  const [message, setMessage] = useState('''
=======
  const [email, setEmail] = useState(''
  const [status, setStatus] = useState<idle | 'loading' | 'success' | 'error'>('idle'}
  const [message, setMessage] = useState(''
>>>>>>> cursor/fix-errors-and-merge-to-main-d1ed
      setStatus('error'
      setMessage('Please enter your email address'
      setStatus('error'
      setMessage('Please enter a valid email address'
    setStatus('loading'
      setStatus('success'</idle>
      setMessage('Thank you for subscribing! Check your email for confirmation.'</idle>
<<<<<<< HEAD
      setEmail('''
      // Close modal after success if it'
=======
      setEmail(''
      // Close modal after success if it''
>>>>>>> cursor/fix-errors-and-merge-to-main-d1ed
      if (variant === 'modal'
      setStatus('error';
      setMessage('Something went wrong. Please try again.')

export default NewsletterSignup;