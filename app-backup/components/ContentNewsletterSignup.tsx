'use client'
import { Metadata } from 'next';
import Footer from './Footer'
import Navigation from './Navigation'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
<<<<<<< HEAD:app-backup/components/ContentNewsletterSignup.tsx
import { CheckCircle, ArrowRight } from 'lucide-react'
'use client'
=======

interface ContentNewsletterSignupProps {title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
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
  }
    {
  icon: Users, text: &quot;Industry insights&quot
  }
    {
  icon: Globe, text: &quot;Global updates&quot
  }
    {
  icon: Zap, text: &quot;Early access&quot,
    }
  ]
  onSubscribe
<<<<<<< HEAD:app-backup/components/ContentNewsletterSignup.tsx
}) => {const [emailsetEmail] = useState('')
  const [isSubmittingsetIsSubmitting] = useState(false)
  const [isSubscribedsetIsSubscribed] = useState(false)
  const [isLoadingsetIsLoading] = useState(false)
  consthandleSubmit= async (e: React.FormEvent) => {
=======
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-4eef:app/components/ContentNewsletterSignup.tsx
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
<<<<<<< HEAD:app-backup/components/ContentNewsletterSignup.tsx
      // // // eslint-disable-next-line no-console
    console.error('Subscription error:', error)
=======
      // console.error('Subscription error:', error)
>>>>>>> cursor/fix-errors-and-merge-to-main-4eef:app/components/ContentNewsletterSignup.tsx
    } finally {
      setIsSubmitting(false),
    }
<<<<<<< HEAD:app-backup/components/ContentNewsletterSignup.tsx
  ]
  const benefits = [
  'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>ContentNewsletterSignup</title>
        <meta name=&quot;description&quot; content=&quot;Advanced ContentNewsletterSignup solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ContentNewsletterSignup, AI solutions, intelligent automation&quot; />
      </Helmet>
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              ContentNewsletterSignup
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced ContentNewsletterSignup solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
        </div>
      </div>
    )
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Form */}
          <div className=&quot;bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8&quot;></div>
            <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
              <div></div>
                <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-white mb-2&quot;>
                  Email Address
                <input
                  type=&quot;email&quot
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder={placeholder}
                 requiredclassName=&quot;w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus: outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent&quot;
                />
              </div>
              <button
                type=&quot;submit&quot
                disabled={isLoading || !email}
                className=&quot;w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover: bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center&quot;></button>
                {isLoading ? (
                  <>
                    <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2&quot;></div>
                    Subscribing...
</>
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
</>
                )}
              </button>
              <p className=&quot;text-sm text-blue-200 text-center&quot;>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
    icon: React.ComponentType<{ className?: string } />text: string;
  , }>
  onSubscribe?: (email: string) =</ void;
, }constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({title= "Stay Updated with Our LatestInsights",
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox.",
  placeholder= "Enter your emailaddress",
  buttonText= "Subscribe",
  features= [

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
        </div>
      </div>
    </div>
  )
}

export default ContentNewsletterSignup
>>>>>>> cursor/fix-errors-and-merge-to-main-4eef:app/components/ContentNewsletterSignup.tsx
