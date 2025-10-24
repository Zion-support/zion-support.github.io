<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (_email: string) => Promise<void>;
=======
'use client'
import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
=======
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)

interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
<<<<<<< HEAD
  onSubscribe?: (_email: string) => Promise<void>
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated",
  subtitle = "Get the latest insights and updates delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  onSubscribe
}) => {
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {subtitle}
            </p>
          </div>

=======
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    try {
      if (onSubscribe) {
        await onSubscribe(email)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {subtitle}
            </p>
          </div>

>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
=======
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string}>
  onSubscribe?: (email: string) => void}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({
  title= &quot;Stay Updated with Our LatestInsights&quot;
  subtitle= &quot;Get exclusive content, industry insights, and early access to new features delivered to yourinbox.&quot;
  placeholder= &quot;Enter your emailaddress&quot;
  buttonText= &quot;Subscribe&quot;
  features= [
    { icon: Star, text: &quot;Exclusive content&quot
  },
    {
  icon: Users, text: &quot;Industry insights&quot
  },
    {
  icon: Globe, text: &quot;Global updates&quot
  },
    {
  icon: Zap, text: &quot;Early access&quot,
    }
  ]
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
    try {
      // Simulate API call
      await new Promise(resolve=> setTimeout(resolve100 0))
      if (onSubscrib e) {
        onSubscribe(email)
      }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      // console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false),
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? 'Subscribing...' : buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
        
        {isSubscribed && (
          <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg">
            <p className="text-emerald-400 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Thank you for subscribing!
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-300">
              <feature.icon className="h-5 w-5 text-emerald-400" />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default ContentNewsletterSignup;
=======
export default ContentNewsletterSignup
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
=======
export default ContentNewsletterSignup
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
