<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
interface NewsletterSignupProps {
  variant?: 'inline' | 'modal'
  onClose?: () => void}
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {</NewsletterSignupProps>
  const [email, setEmail] = useState('')</NewsletterSignupProps>
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
=======

import {useState} from 'react';
import {AlertCircle} from 'lucide-react';

interface NewsletterSignupProps {variant?: 'inline' | 'modal';
  onClose?: () => void;}

const NewsletterSignup: React.FC<NewsletterSignupProps   /> = ({const variant = 'inline', onClose}) => {const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
<<<<<<< HEAD
      return
    if (!/\S+@\S+\.\S+/.test(email)) {
  setStatus('error');
      setMessage('Please enter a valid email address');
      return
    setStatus('loading');
    try {,
      // Simulate API call,
      await new Promise(resolve => setTimeout(resolve, 1000);
      // In a real app, you would make an API call here
=======
      return;}

    if (!/\S+@\S+\.\S+/.test(email)) {setStatus('error');
      setMessage('Please enter a valid email address');
      return;}

    setStatus('loading');

    try {// Simulate API call;
      await new Promise(const resolve = > setTimeout(resolve, 1000));
      // In a real app, you would make an API call here;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
      // Close modal after success if it's a modal variant
      if (variant === 'modal' && onClose) {
        setTimeout(() => {
<<<<<<< HEAD
          onClose();
        }, 2000)
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.')}
  const content = (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"></div>
      <div className="text-center mb-6"></div>
        <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" /></Mail>
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90"></p>
          Get the latest updates on AI technology, IT solutions, and industry insights.</p>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4"></form>
        <div className="flex flex-col sm: flex-row gap-3"></div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
=======
          onClose();}, 2000);
      }
    } catch (error) {setStatus('error');
      setMessage('Something went wrong. Please try again.');}
  };

  const content = (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <Mail className="w-5h-5ml-2"   /></Mail>
        <h3 className="text-2 xl font-boldmb-2"  >Stay Updated</h3>
        <p className="w-5h-5ml-2">Get the latest updates on AI technology, IT solutions, and industry insights.
        </p>
      </div>
      <form onSubmit="{handleSubmit}" className="space-y-4"   /></form>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <input;
            type="email"
            value="{email}"
            onChange="{(e)" =   /> setEmail(e.target.value)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus: outline-none focus:ring-2 focus:ring-white/50 focu,
  s:border-transparent"
            disabled={status === 'loading'}</input>
          /></input>
          <button
            type="submit"
<<<<<<< HEAD
            disabled={status === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover: bg-white/90 transition-colors disabled:opacity-50 disable,
  d:cursor-not-allowed flex items-center justify-center"
          ></button>
            {status === 'loading' ? (</button>
              <>
    
  </>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                Subscribing...
</div>
            ) : (
              <>
    
  </>
                <Send className="w-4 h-4 mr-2" /></Send>
                Subscribe</Send>
</>
            )}
          </button>
        </div>
        {
  message && (
          <div className={`flex items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
}`}></div>
            {status === 'success' ? (</div>
              <CheckCircle className="w-4 h-4" /></CheckCircle>
            ) : (</CheckCircle>
              <AlertCircle className="w-4 h-4" /></AlertCircle>
            )}</AlertCircle>
            <span>{message}</span>
=======
            disabled="{status" === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"   /></button>
            {status === 'loading' ? (
              <><  />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                Subscribing...
              <  />
            ) : (
              <><  />
                <Send className="w-5h-5ml-2"   /></Send>
                Subscribe;
              <  />
            )}
          </button>
        </div>
        {message && (
          <div className="{`flex" items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'}`}   /></div>
            {status === 'success' ? (
              <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
  ) : (
              <AlertCircle className="w-5h-5ml-2"   /></AlertCircle>
  )}
            <span  >{message}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          </div>
  )}
      </form>
<<<<<<< HEAD
      <div className="mt-6 text-center text-sm text-white/80"></div>
        <p></p>
          ✓ No spam, unsubscribe anytime<br /></br>
          ✓ Weekly updates on latest tech trends<br /></br>
          ✓ Exclusive content and early access</br>
        </p>
      </div>
  if (variant === 'modal') {
    return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto"></div>
        <div className="flex min-h-screen items-center justify-center px-4 py-6"></div>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} /></div>
          <div className="relative w-full max-w-md"></div>
            {content}</div>
          </div>
        </div>
      </div>
  return content;
}
    </>
  );
export default NewsletterSignup
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <p   /></p>
          ✓ No spam, unsubscribe anytime<br   /></br>
          ✓ Weekly updates on latest tech trends<br   /></br>
          ✓ Exclusive content and early access;
        </p>
      </div>
  );
  if (const variant = == 'modal') {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="fixed inset-0 bg-black/50backdrop-blur-sm" onClick="{onClose}"    /></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{content}
          </div>
      </div>
  );
  }

  return content;
};

export default NewsletterSignup;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const NewsletterSignup: React.FC<NewsletterSignupProps> = () => {
  return (
    <div className="newslettersignup">
      <h2>NewsletterSignup</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default NewsletterSignup;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
