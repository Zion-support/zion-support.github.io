'use client';

import React, { useState } from 'react';
import { AlertCircle, Mail, Send, CheckCircle, Check } from 'lucide-react';;

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      if (onClose) {
        setTimeout(() => {

          onClose()}, 2000)}
    } catch (_error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.')}
  const content = (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"></div>
        <div className="text-center mb-6"> </div><Mail className="w-12 h-12 mx-auto mb-4 text-white/90" /> </Mail><h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p>Get the latest updates on AI technology, IT solutions, and industry insights.</p>
      </div>
    )}

  return (
    
    <div className="bg-gray-50 rounded-lg p-6"></div>
      <div className="flex items-center mb-4"></div>
        <Mail className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Stay Updated</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div></div>
          <input;
            type="email";
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";
            placeholder="Enter your email"
            required
          />
        </div>
        <button;
          type="submit";
          disabled={status === 'loading'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",
        >
          {status === 'loading' ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </>
          )}
        </button>
        {message && (
          <div className={`flex items-center text-sm ${;
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}></div>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <>
      
    </>
      <Send className="w-4 h-4 mr-2" />Subscribe
</Send></>
            )}
          </button>
        
        {
  message && (
          <div className={`flex items-center space-x-2 text-sm ${;
            status === 'success' ? 'text-green-200' : 'text-red-200'
}`}>{status === 'success' ? (
              </div><CheckCircle className="w-4 h-4" />) : (
              </CheckCircle><AlertCircle className="w-4 h-4" />)}
            </AlertCircle><span>{message}</span>
          </div>
        )}
      </form>
      <div className="mt-6 text-center text-sm text-white/80"> </div><p>✓ No spam, unsubscribe anytime</p><br />✓ Weekly updates on latest tech trends</br><br />✓ Exclusive content and early access
        </br></p>
      </div>
    </div>
  if (variant === 'modal') {
    return (
    
      <div className="fixed inset-0 z-50 overflow-y-auto"></div>
        <div className="flex min-h-screen items-center justify-center px-4 py-6"> </div><div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} /></div>
        <div className="relative w-full max-w-md">{content}
          </div></div>
        </div>
      </div>
  return content

}


export default NewsletterSignup
;