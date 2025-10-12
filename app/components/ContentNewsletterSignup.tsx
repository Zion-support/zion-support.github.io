import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array
    icon: React.ComponentType<{ className?: string }>
    text: string
 void

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps /> = ({
  const title = "Stay Updated with Our Latest Insights",
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
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      // Simulate API call
 setTimeout(resolve, 1000))
      if (onSubscribe) {
        onSubscribe(email)
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription error: ', error)
    } finally {
      setIsSubmitting(false)

  if (isSubscribed) {
    return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <CheckCircle className="w-5 h-5ml-2" />
            </div>
            <h2 className="w-5 h-5ml-2" />Thank You for Subscribing!
            </h2>
            <p className="w-5 h-5ml-2">You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick="{()" =  />setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />{title}
            </h2>
            <p className="w-5 h-5ml-2">{subtitle}
            </p>
          </div>

          <form onSubmit="{handleSubmit}" className="max-w-mdmx-automb-12" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <input
                  type="email"
                  value="{email}"
 setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled="{isSubmitting}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" />
                {isSubmitting ? (
                  <>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span  >{buttonText}</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (

                <div key="{index}" className="text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-6w-6text-white"  />
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
            ))}
          </div>
      </div>
  )

export default ContentNewsletterSignup;
