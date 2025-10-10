<<<<<<< HEAD
<<<<<<< HEAD
'use client'import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string
  }>
  onSubscribe?: (email: string) => void
=======
'use client';
<<<<<<< HEAD
import React from 'react';

const ContentNewsletterSignup: React.FC = () => {
  return null; // Content newsletter signup placeholder
=======
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  showIcon?: boolean;
  showDescription?: boolean;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
}

const ContentNewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
  backgroundColor = 'bg-slate-800',
  textColor = 'text-white',
  buttonColor = 'bg-cyan-500 hover:bg-cyan-600',
  showIcon = true,
  showDescription = true,
  showSuccessMessage = true,
  showErrorMessage = true
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
<<<<<<< HEAD
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (onSubscribe) {
        onSubscribe(email)
      }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
=======
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success/error
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
    } catch (err) {
      setError(errorMessage);
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }
=======
  };

>>>>>>> cursor/analyze-improve-and-deploy-application-e765
  if (isSubscribed) {
    return (
      <div className={`${backgroundColor} ${textColor} py-16 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors">
            Subscribe another email;
  </
=======
          <h3 className="text-2xl font-bold mb-4">{successMessage}</h3>
          <p className="text-lg">You'll receive our latest updates soon.</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-blue-100">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address;
  </
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center">
                {isLoading ? (
                  <React.Fragment>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                    Subscribing...
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </React.Fragment>
                )}
              </button>
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
=======
    <div className={`${backgroundColor} ${textColor} py-16 px-4`}>
      <div className="max-w-2xl mx-auto text-center">
        {showIcon && (
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
        )}
        
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        
        {showDescription && (
          <p className="text-lg mb-8">{description}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 ${buttonColor} text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {buttonText}
                </>
              )}
            </button>
          </div>

          {error && showErrorMessage && (
            <div className="flex items-center justify-center text-red-400">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}
        </form>
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
      </div>
    </div>
  );
>>>>>>> main
};

export default ContentNewsletterSignup;
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
>>>>>>> main
