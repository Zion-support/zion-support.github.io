import React from 'react';
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
  const title = "Stay Updated with Our Latest Insights",
  subtitle="Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder="Enter your email address",
  buttonText="Subscribe",
  features=[
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
      await new Promise(resolve=> setTimeout(resolve, 1000))
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
    <div className="py-20px-4sm:px-6lg:px-8bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3 xl p-12 border border-white/20">
        <div className="w-20h-20bg-gradient-to-rfrom-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10h-10text-white" />
            </div>
            <h2 className="text-3xlfont-bold text-whitemb-4"  />Thank You for Subscribing!
            </h2>
            <p className="text-xltext-gray-300 mb-8">
              You'll receive our latest insights and updates soon.
            </p>
            <button
              onClick="{()" =  />setIsSubscribed(false)}
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
    <div className="py-20px-4sm:px-6lg:px-8bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3 xl p-12 border border-white/20">
        <div className="text-centermb-12">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />{title}
            </h2>
            <p className="text-xltext-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <form onSubmit="{handleSubmit}" className="max-w-md mx-auto mb-12" />
            <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
                <input
                  type="email"
                  value="{email}"
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required
                  className="w-full px-6py-4bg-white/10 border border-white/20 rounded-lg text-whiteplaceholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled="{isSubmitting}"
                className="bg-gradient-to-rfrom-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-whitefont-semibold px-8py-4rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 min-w-[140, px]"
               />
                {isSubmitting ? (
                  <>
      <div className="animate-spin rounded-full h-5w-5border-b-2 border-white" /></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span  >{buttonText}</span>
                    <ArrowRight className="h-5w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-2md:grid-cols-4gap-6" />
            {features.map((feature, index) => (

                <div key={index} className="text-center" />
                <div className="w-12h-12bg-gradient-to-rfrom-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3" />
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentNewsletterSignup;