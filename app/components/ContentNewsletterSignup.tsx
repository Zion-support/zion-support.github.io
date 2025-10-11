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
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/90 mb-4">
          You've successfully subscribed to our newsletter. Check your email for confirmation.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-white/80 hover:text-white underline"
        >
          Subscribe another email
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-8 text-center">
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
      <p className="text-white/90 mb-6">
        Get the latest AI and technology insights delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {isSubmitting && (
          <div className="mt-4 flex items-center justify-center gap-2 text-white/80">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Subscribing...</span>
          </div>
        )}
      </form>
      
      <p className="text-white/70 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}

export default ContentNewsletterSignup