import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

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

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps /> = ({
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

  handleSubmit = async (e: React.FormEvent) => {
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
      console.error('Subscription error: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
    <div className="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="ma x-w-4 xlmx-autotext-center">
          <div className="b g-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
            <div className="w-2 0 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-automb-6">
              <CheckCircle className="w-10 h-10text-white" />
            </div>
            <h2 className="tex t-3 xl font-bold text-white mb-4"  />Thank You for Subscribing!
            </h2>
            <p className="tex t-xltext-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick="{()" =  />setIsSubscribed(false)}
              className="tex t-blue-400hover:text-blue-300transition-colors"
            >
              Subscribe another email
    <>
            </button>
          </div>
      </div>
    )
  }

  return (
    <div className="p y-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <div className="ma x-w-4xlmx-auto">
        <div className="b g-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20">
          <div className="tex t-centermb-12">
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />{title}
            </h2>
            <p className="tex t-xl text-gray-300 max-w-2xlmx-auto">
              {subtitle}
    <>
            </p>
          </div>

    <>
          <form onSubmit="{handleSubmit}" className="ma x-w-mdmx-automb-12" />
            <div className="fle x flex-colsm:flex-rowgap-4">
              <div className="fle x-1">
                <input
                  type="email"
                  value="{email}"
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required
                  className="w-ful l px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled="{isSubmitting}"
                className="b g-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" />
                {isSubmitting ? (
    <>
                  <>
                    <div className="animat e-spin rounded-full h-5 w-5border-b-2border-white"></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
    <>
                  <>
                    <span>{buttonText}</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
    <>
              </button>
            </div>
          </form>

          <div className="gri d grid-cols-2md:grid-cols-4gap-6">
        </div>
            {features.map((feature, index) => (

    <>
                <div key="{index}" className="tex t-center" />
                <div className="w-1 2 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-automb-3">
                  <feature.icon className="h-6 w-6text-white" />
                </div>
                <p className="tex t-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
    <>
          </div>
      </div>
  )
}

export default ContentNewsletterSignup;
    </>