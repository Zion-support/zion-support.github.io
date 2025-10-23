'use client'
import React, {useState} from 'react'
import {Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap} from 'lucide-react'
interface ContentNewsletterSignupProp s {title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{
    icon: React.ComponentType<{ class Nam e?: string}>text: string
  }>
  onSubscribe?: (email: string) => void
}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({title= "Stay Updated with Our LatestInsights",
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox.",
  placeholder= "Enter your emailaddress",
  buttonText= "Subscribe",
  features= [
    { icon: Star, text:"Exclusive content"},
    {icon: Users, text:"Industry insights"},
    {icon: Globe, text:"Global updates"},
    {icon: Zap, text:"Early access"}
  ],
  onSubscribe
}) => {const [emailsetEmail] = useState('')
  const [isSubmittingsetIsSubmitting] = useState(false)
  const [isSubscribedsetIsSubscribed] = useState(false)
  const [isLoadingsetIsLoading] = useState(false)
  consthandleSubmit= async (e: React.FormEvent) => {
  
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
    try {
      // Simulate API call
      await new Promise(resolve=> setTimeout(resolve100 0))
      if (onSubscrib e) {
        onSubscribe(email)
     }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {} finally {setIsSubmitting(false)
   }
  }
  if (isSubscribe d) {return (
    <divclassName="py-20px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><divclassName="max-w-4 xlmx-autotext-center"><divclassName="bg-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20"><divclassName="w-20h-20bg-gradient-to-r from-green-500to-emerald-600rounded-full flex items-center justify-centermx-automb-6"><CheckCircleclassName="w-10h-10text-white" /></di><spanclassName="text-3 xl font-boldtext-whitemb-4"></className="text-3 xl font-boldtext-whitemb-4">Thank You for Subscribing!
          </h><spanclassName="text-xl text-gray-300mb-8"></className="text-xl text-gray-300mb-8">You'll receive our latest insights and updates soon.
          </p><
              onClick={() =></
              onClick={() =>setIsSubscribed(false)}
             className="text-blue-400 hover:text-blue-300transition-colors"
            >
              Subscribe another email
          </butto></di><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">Welcome to Our Community!
        </h><spanclassName="text-xl text-blue-100mb-8"></className="text-xl text-blue-100mb-8">Thank you for subscribing. You'll receive our latest insights and updates soon.
        </p><
            onClick={() =></
            onClick={() =>setIsSubscribed(false)}
           className="text-white underlinehover:text-blue-200transition-colors">
            Subscribe another email

      </di></di>)
  }
  return (
  <divclassName="py-20px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><divclassName="max-w-4xlmx-auto"><divclassName="bg-white/5 backdrop-blur-sm rounded-3 xl p-12borderborder-white/20"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">{title}
          </h><spanclassName="text-xl text-gray-300max-w-2xlmx-auto"></className="text-xl text-gray-300max-w-2xlmx-auto">{subtitle}
          </p><divclassName="space-y-4">{features.map((featureindex) => (
             <divkey={index}className="flexitems-centerspace-x-3"><divclassName="w-6 h-6 bg-white/20rounded-full flexitems-centerjustify-center"><feature.iconclassName="w-4h-4text-white" /></di><spanclassName="text-blue-100">{feature.text}</spa></di>))}
          </di></di>{/* NewsletterForm */}
        <divclassName="bg-white/10backdrop-blur-sm border border-white/20rounded-2xlp-8"><formonSubmit={handleSubmit}className="space-y-6"><di v><labelhtmlFor="email"className="block text-sm font-mediumtext-whitemb-2">Email Address

              <inputtype="email"
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder={placeholder}
                 requiredclassName="w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent"
                />
            </di><
               type="submit"
                disabled={isLoading ||!email}
               className="w-full bg-white text-purple-600font-bold py-3 px-6 rounded-lghover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300flexitems-centerjustify-center"></
               type="submit"
                disabled={isLoading ||!email}
               className="w-full bg-white text-purple-600font-bold py-3 px-6 rounded-lghover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300flexitems-centerjustify-center">{isLoading ? (
                <><divclassName="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600mr-2"></di>Subscribing...
                </>)  : (
                <>{buttonText}
                  <ArrowRightclassName="w-5h-5ml-2" /></>)}
            </butto><spanclassName="text-sm text-blue-200text-center"></spa></className="text-sm text-blue-200text-center">We respect your privacy. Unsubscribe at any time.
            </p></for></di></di></di></di>)
}
export defaultContentNewsletterSignup</labe></butto></ContentNewsletterSignupProp>