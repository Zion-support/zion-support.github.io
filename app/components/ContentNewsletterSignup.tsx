import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function ContentNewsletterSignup() {
  return (
<<<<<<< HEAD

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

=======
    <>
      <Helmet>
        <title>Content Newsletter Signup - Zion Tech Group</title>
        <meta name="description" content="Professional content newsletter signup by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Content Newsletter Signup</h1>
          <p className="text-lg text-gray-300 mb-8">Professional content newsletter signup coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
