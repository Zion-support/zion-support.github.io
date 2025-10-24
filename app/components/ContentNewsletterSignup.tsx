'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'

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
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    { icon: Star, text: "Exclusive content" },
    { icon: Users, text: "Industry insights" },
    { icon: Globe, text: "Global updates" },
    { icon: Zap, text: "Early access" }
  ],
  onSubscribe
}) => {
  const [email, setEmail] = useState('')
  const [isSubmittingsetIsSubmitting] = useState(false)
  const [isSubscribedsetIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (onSubscribe) {
        onSubscribe(email)
     }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      // // console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>ContentNewsletterSignup</title>
        <meta name="description" content="Advanced ContentNewsletterSignup solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentNewsletterSignup, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentNewsletterSignup
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentNewsletterSignup solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
    );
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
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
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
                  type=&quot;email&quot;
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder={placeholder}
                 requiredclassName=&quot;w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent&quot;
                />
              </div>
              <button
                type=&quot;submit&quot;
                disabled={isLoading || !email}
                className=&quot;w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center&quot;></button>
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
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
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
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
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

export default ContentNewsletterSignupPage;
