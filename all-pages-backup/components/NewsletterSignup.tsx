<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/NewsletterSignup.tsx
      if (variant === 'modal' && onClose) {
        setTimeout(() => {
          onClose()}, 2000)}
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.')}
  };

  const content = (;
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" />
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90">
<<<<<<< HEAD:all-pages-backup/components/NewsletterSignup.tsx
      </div>
    )}

  return content
};

export default NewsletterSignup
=======
'use client'
import { useState } from 'react'
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react'
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
>>>>>>> origin/main
