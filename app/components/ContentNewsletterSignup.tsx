import { useState } from 'react';
import { ArrowRight  } from 'lucide-react';
'use client'
interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{
    i con: R eact.C omp onentT ype<{ c las sNa me?: string }>
    t ext: string
  }>
  o nSu bscribe?: (email: string) => void
}
c onst ContentNewsletterSignup: R eact.FC<ContentNewsletterSignupProps /> = ({
  c onst title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive c ontent, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "S ubscribe",
  features = [
    { i con: Star, t ext: "Exclusive c ontent" },
    { i con: Users, t ext: "Industry insights" },
    { i con: Globe, t ext: "Global updates" },
    { i con: Zap, t ext: "Early access" }
  ],
  o nSu bscribe
}) => {
  c onst [email, setEmail] = useState('')
  c onst [isSubmitting, setIsSubmitting] = useState(false)
  c onst [isSu bscribed, setIsSu bscribed] = useState(false)
  c onst handleS ubmit = async (e: R eact.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (o nSu bscribe) {
        o nSu bscribe(email)
      }
      setIsSu bscribed(true)
      setEmail('')
    } catch (error) {
      c onsole.error('S ubscription error: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  if (isSu bscribed) {
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
          </d iv>
      </d iv>
    )
  }
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
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  r equ ired
                  c las sNa me="w-f ull px-6 py-4 bg-w hite/10 border border-w hite/20 r oun ded-lg t ext-w hit-e placeholder-g ray-400 focus:outline-none focus:ring-2focus:ring-b lue-500focus:border-t ransparent"
                />
              </d iv>
              <button
                type="submit"

                disabled="{isSubmitting}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]" />
                {isSubmitting ? (
                  <>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span  >Subscribing...</span>

                  </>
                    <d iv c las sNa me="a n imate-s pin r oun ded-full h-5 w-5border-b-2border-w hite">
        </d iv></d iv>
                    <span>S ubscri bing...</span>                  </>
                ) : (

                  <>
                    <span  >{buttonText}</span>
                    <ArrowRight className="w-5 h-5ml-2" />

                  </>
                )}
              </button>
            </d iv>
          </form>


          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (

                <div key="{index}" className="text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <feature.icon className="h-6w-6text-white"  />
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
      </div>
  )
}

export default ContentNewsletterSignup;

