'use client';
import React from "react";
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
interface NewsletterSignupProps {
  variant?: 'inline' | 'modal'
  onClose?: () => void}
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {</NewsletterSignupProps>
  const [email, setEmail] = useState('')</NewsletterSignupProps>
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return
    if (!/\S+@\S+\.\S+/.test(email)) {
  setStatus('error');
      setMessage('Please enter a valid email address');
      return
    setStatus('loading');
    try {,
      // Simulate API call, await new Promise(resolve = () => setTimeout(resolve, 1000);
      // In a real app, you would make an API call here
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
      // Close modal after success if it's a modal variant
      if (variant === 'modal' && onClose) {
        setTimeout(() => {
          onClose();
        }, 2000)
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.')}
  const content = (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" /></Mail>
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/90"></p>
          Get the latest updates on AI technology, IT solutions, and industry insights.</p>
        </p>
      
      <form onSubmit={handleSubmit} className="space-y-4"></form>
        <div className="flex flex-col sm: flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus: outline-none focus:ring-2 focus:ring-white/50 focu, s:border-transparent"
            disabled={status === 'loading'}</input>
          /></input>
          <button type="submit"
            disabled={status === 'loading'}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover: bg-white/90 transition-colors disabled:opacity-50 disable, d:cursor-not-allowed flex items-center justify-center"
          ></button>
            {status === 'loading' ? (</button>
              <>
    
  
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2">
                Subscribing...

            ) : (
              <>
    
  
                <Send className="w-4 h-4 mr-2" /></Send>
                Subscribe</Send>

            )}
          </button>
        
        {
  message && (
          <div className={`flex items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-200' : 'text-red-200'
}`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" /></CheckCircle>
            ) : (</CheckCircle>
              <AlertCircle className="w-4 h-4" /></AlertCircle>
            )}</AlertCircle>
            <span>{message}</span>
          
        )}
      </form>
      <div className="mt-6 text-center text-sm text-white/80">
        <p></p>
          ✓ No spam, unsubscribe anytime<br /></br>
          ✓ Weekly updates on latest tech trends<br /></br>
          ✓ Exclusive content and early access</br>
        </p>
      
    </div>
  if (variant === 'modal') {
    return (
    
      <div className="fixed inset-0 z-50 overflow-y-auto"></div>
        <div className="flex min-h-screen items-center justify-center px-4 py-6"></div>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} /></div>
          <div className="relative w-full max-w-md"></div>
            {content}</div>
          </div>
        </div>
      </div>
  return content
}
    </div>
  );
export default NewsletterSignup