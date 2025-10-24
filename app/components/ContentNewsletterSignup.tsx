'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, Star, Users, Globe, Zap } from 'lucide-react'

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
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank you for subscribing!</h3>
        <p className="text-emerald-100">
          You'll receive our latest updates and insights soon.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              buttonText
            )}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-gray-300">
            <feature.icon className="w-5 h-5 text-emerald-400" />
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentNewsletterSignup