<<<<<<< HEAD
'use client'
import React from 'react';

const ContentNewsletterSignup: React.FC = React.memo((props) => {
=======
<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentNewsletterSignupPage: React.FC = () => {
  const features = [
=======
import React, {useState}from 'react';
import {Mail, CheckCircle, AlertCircle}}from 'lucide-react';

<<<<<<< HEAD
interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
  onSubscribe?: (email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  features = [
>>>>>>> origin/main
    {
      icon: CheckCircle,
      text: "Weekly industry insights"
    },
    {
      icon: Star,
      text: "Exclusive content and tips"
    },
    {
      icon: Users,
      text: "Join 10,000+ subscribers"
    },
    {
      icon: Globe,
      text: "Global community access"
    }
<<<<<<< HEAD
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentNewsletterSignup | Zion Tech Group</title>
        <meta name="description" content="Professional ContentNewsletterSignup services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentNewsletterSignup, AI solutions, IT services, Zion Tech Group, contentnewslettersignup" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentNewsletterSignup
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentnewslettersignup solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentNewsletterSignup?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentnewslettersignup solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our contentnewslettersignup solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentnewslettersignup needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
=======
  ],
  onSubscribe
}) => {
=======
const ContentNewsletterSignup: React.FC = () => {,
>>>>>>> origin/main
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {,
=======
  const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);
<<<<<<< HEAD
    
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
      setIsLoading(false);
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
            onClick={() => setIsSubscribed(false</div>
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          </button>
=======

    try {// Simulate API call;}
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');}catch (error) {console.error('Newsletter signup error:', error);}finally {setIsSubmitting(false);}
      setIsLoading(false);}}

  if (isSubscribed) {return(<div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-center">)</div>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
=======
'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter signup error:', error)
    } finally {
      setIsSubmitting(false)
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-center">
        </div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          </div><CheckCircle className="w-8 h-8 text-white" />
>>>>>>> origin/main
>>>>>>> origin/main
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/90 mb-4">You've successfully subscribed to our newsletter. Check your email for confirmation.</p>
        </p>
<<<<<<< HEAD
        <button;
          onClick={() =>setIsSubscribed(false)</button>}className="text-white/80 hover: text-white underline",
=======
        <$2 />
          onClick={() => setIsSubscribed(false)}
          className="text-white/80 hover:text-white underline"
>>>>>>> origin/main
        >
          Subscribe another email;
        </button>
      </div>
<<<<<<< HEAD
    );
=======
    )
'use client'
import React, { useState } from 'react'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
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
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  if (isSubscribed) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            <p className="text-xl text-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            <$2 />
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          <$2 />
            onClick={() =>setIsSubscribed(false)}
            className="text-white underline hover:text-blue-200 transition-colors">
            Subscribe another email
    )
>>>>>>> origin/main
  }

<<<<<<< HEAD
  return(<div className="bg-slate-800/50 rounded-lg p-8">)</div>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
=======
  return (
<<<<<<< HEAD
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
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value</div>
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                    Subscribing...

                ) : (
                  <>
  </>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />

                </div>
              </button>
              
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ))
        </div>
      </div>
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default ContentNewsletterSignupPage;
=======
export default ContentNewsletterSignup;
=======
    <div className="bg-slate-800/50 rounded-lg p-8">
      </div><div className="text-center mb-6">
        </div><div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          </div><Mail className="w-8 h-8 text-white" />
>>>>>>> origin/main
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">Get the latest insights on AI, IT, and technology trends delivered to your inbox.</p>
        </p>
      </div>

<<<<<<< HEAD
      <form onSubmit={handleSubmit}className="max-w-md mx-auto">
        <div className="flex flex-col sm: flex-row gap-3">,</div>
          <input;
=======
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        </form><div className="flex flex-col sm:flex-row gap-3">
          </div><input
>>>>>>> origin/main
            type="email"
            value={email}onChange={(e) => setEmail(e.target.value)}placeholder="Enter your email address"
            required;
            className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          />
<<<<<<< HEAD
          <button;
            type="submit"
            disabled={isSubmitting || !email}className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center",
          >{isLoading ? (</button>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
=======
          < type="submit"$2 />
            disabled={isSubmitting || !email}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="</div>
>>>>>>> origin/main
            ) : (
              'Subscribe'
            )} </button>
        </div>
        
<<<<<<< HEAD
        <p className="text-xs text-gray-400 text-center mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </p>
      </form>

      <div className="mt-6 grid grid-cols-1 sm: grid-cols-3 gap-4 text-center">,</div>
        <div className="text-sm">
          <div className="text-2xl font-bold text-blue-400">10K+</div>
=======
        <p className="text-xs text-gray-400 text-center mt-3" /></p>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        </div><div className="text-sm">
          </div><div className="text-2xl font-bold text-blue-400">10K+</div>
>>>>>>> origin/main
          <div className="text-gray-400">Subscribers</div>
        </div>
        <div className="text-sm">
          </div><div className="text-2xl font-bold text-purple-400">Weekly</div>
          <div className="text-gray-400">Updates</div>
        </div>
        <div className="text-sm">
          </div><div className="text-2xl font-bold text-green-400">Free</div>
          <div className="text-gray-400">Forever</div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
});

export default ContentNewsletterSignup;
=======
  )
}
export default ContentNewsletterSignup
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-blue-100">{feature.text}
              ))}
          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              <$2 />
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center">
                {isLoading ? (
                  <React.Fragment>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2">
                    Subscribing...
                ) : (
                  <React.Fragment>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                )}
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
  )
}
export default ContentNewsletterSignup</div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></p></p></p></p></h2></h2></h2>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
