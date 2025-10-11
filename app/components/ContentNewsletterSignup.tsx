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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
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
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Why Subscribe?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Get early access to new features</li>
                <li>• Exclusive industry insights</li>
                <li>• Special offers and discounts</li>
                <li>• No spam, unsubscribe anytime</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>{buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-sm text-gray-400 text-center mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContentNewsletterSignup