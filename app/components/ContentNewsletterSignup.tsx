import Footer from 'Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{}
    icon: React.ComponentType<{ className?: string }>
    text: string}>
  onSubscribe?: (email: string) => void}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({
  title= "Stay Updated with Our LatestInsights"
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox."
  placeholder= "Enter your emailaddress"
  buttonText= "Subscribe"
  features= [
    { icon: Star, text: "Exclusive content&quot
  },
  {
    icon: Users, text: "Industry insights&quot
  },
  {
    icon: Globe, text: "Global updates&quot
  },
  {
    icon: Zap, text: "Early access&quot,
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
      await new Promise(resolve=> setTimeout(resolve100 0)
      if (onSubscrib e) {
        onSubscribe(email)
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      // console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false),}
  return (</ContentNewsletterSignupProp>
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4"></div>
      <div className="max-w-4xl mx-auto text-center"></div>
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8"></form>
          <div className="flex flex-col sm:flex-row gap-4"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focu,
  s:border-transparent"
              required
            /></input>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disable,
  d:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? 'Subscribing...' : buttonText}</button>
              <ArrowRight className="ml-2 h-4 w-4" /></ArrowRight>
            
          </div>
        </form>
        
        {isSubscribed && (
          <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg"></div>
            <p className="text-emerald-400 flex items-center justify-center"></p>
              <CheckCircle className="h-5 w-5 mr-2" />
              Thank you for subscribing!</CheckCircle>
            
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {features.map((feature, index) => (</div>
            <div key={index} className="flex items-center space-x-2 text-gray-300"></div>
              <feature.icon className="h-5 w-5 text-emerald-400" /></feature>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      

export default ContentNewsletterSignup
;