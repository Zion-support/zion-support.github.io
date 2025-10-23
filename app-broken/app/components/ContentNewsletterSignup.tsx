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
  title = &quot;Stay Updated with Our Latest Insights&quot;,
  subtitle = &quot;Get exclusive content, industry insights, and early access to new features delivered to your inbox.&quot;,
  placeholder = &quot;Enter your email address&quot;,
  buttonText = &quot;Subscribe&quot;,
  features = [
    { icon: Star, text: &quot;Exclusive content&quot; },
    { icon: Users, text: &quot;Industry insights&quot; },
    { icon: Globe, text: &quot;Global updates&quot; },
    { icon: Zap, text: &quot;Early access&quot; }
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
      <div className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20&quot;></div>
            <div className=&quot;w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6&quot;></div>
              <CheckCircle className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Thank You for Subscribing!
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className=&quot;text-blue-400 hover:text-blue-300 transition-colors&quot;
            >
              Subscribe another email
            </button>
          </div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Welcome to Our Community!
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-8&quot;>
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className=&quot;text-white underline hover:text-blue-200 transition-colors&quot;>
            Subscribe another email

        </div>
      </div>
    )
  }
  return (
    <div className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <div className=&quot;max-w-4xl mx-auto&quot;></div>
        <div className=&quot;bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              {title}
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>
              {subtitle}
            </p>
            <div className=&quot;space-y-4&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;flex items-center space-x-3&quot;></div>
                  <div className=&quot;w-6 h-6 bg-white/20 rounded-full flex items-center justify-center&quot;></div>
                    <feature.icon className=&quot;w-4 h-4 text-white&quot; />
                  </div>
                  <span className=&quot;text-blue-100&quot;>{feature.text}</span>
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className=&quot;w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
                />
              </div>
              <button
                type=&quot;submit&quot;
                disabled={isLoading || !email}
                className=&quot;w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center&quot;>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentNewsletterSignup
</label>
</button>
</ContentNewsletterSignupProps>