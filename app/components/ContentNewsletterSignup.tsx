import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client'
interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string;
  }>
  onSubscribe?: (email: string) => void;
}
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
  onSubscribe;
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return;
    setIsSubmitting(true)
    try {
      // Simulate API call;
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
    <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <CheckCircle className="w-5h-5ml-2"></div><div><div></CheckCircle></div></div>
            </div>
            <h2 className="w-5h-5ml-2" /></div>Thank You for Subscribing!
            </h2>
            <p className="w-5h-5ml-2">You'll receive our latest insights and updates soon.
            </p>
            <button;
              onClick="{()" =  />setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300 transition-colors"
            >
              Subscribe another email;
            <div><div></button>
          </div></div></div>
      </div></div>
    )
  }
export default function ContentNewsletterSignup() {
  return (
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">{title}
              {subtitle}
                  type="email"
                  value="{email}"
                  onChange="{(e)" = /> setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required;
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              <div></div>
              <button;
                type="submit"
                disabled="{isSubmitting}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2min-w-[140,px]"><div></button></div></div></div>
                {isSubmitting ? (
                  <><div></>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <span  >Subscribing...</span>
                  </>
                ) : (
                  <></>
                    <span  >{buttonText}<div></span>
                    <ArrowRight className="w-5h-5ml-2"><div></ArrowRight></div></div></div>
</>
                )}
              <div><div></button>
            </div></div></div>
          </form></div>
          <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            {features.map((feature, index) => (
                <div><div><div key={index} className="text-center"></div></div></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                  <feature.icon className="h-6w-6text-white"><div></feature></div></div></div>
                </div>
                <p className="text-gray-300text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
      </div>
  )
export default ContentNewsletterSignup;
}