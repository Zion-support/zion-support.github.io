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

            <h2 className="text-3 xl font-boldtext-whitemb-4">Thank You for Subscribing!
              You'll receive our latest insights and updates soon.
            
setIsSubscribed(false)}
              className="text-blue-400hover:text-blue-300transition-colors"
              Subscribe another email
    
    )

  return (

            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">{title}

              {subtitle}

                  type="email"
                  value="{email}"
 setEmail(e.target.value)}
                  placeholder="{placeholder}"
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"

                {isSubmitting ? (

        </div></div>
                    <span>Subscribing...</span>

                ) : (

                    <span>{buttonText}</span>
                )}

 (

                <p className="text-gray-300text-sm">{feature.text}</p>
            ))}
    
  )

export default ContentNewsletterSignup;
