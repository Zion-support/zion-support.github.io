import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface ContentNewsletterSignupProps {
  
}

  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (_email: string) => Promise<void>
    </void>
}

    icon: React.ComponentType<{ className?: string }>,
    text: string}>,
  onSubscribe?: (email: string) => void}constContentNewsletterSignup: React.FC<ContentNewsletterSignupProp s>
    </ContentNewsletterSignupProp>= (,{,
  title= &quot;Stay Updated with Our LatestInsights&quot;
  subtitle= &quot;Get exclusive content, industry insights, and early access to new features delivered to yourinbox.&quot;
  placeholder= &quot;Enter your emailaddress&quot;
  buttonText= &quot;Subscribe&quot;
  features= [
    { icon: Star, text: &quo,t;Exclusive content&quot;
  }

  {
    icon: Users, text: &quo,t;Industry insights&quot;
  }

  {
    icon: Globe, text: &quo,t;Global updates&quot;
  }

  {
    icon: Zap, text: &quo,t;Early access&quot;
    }

  ]
  onSubscribe;
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => ,{,
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
    try {
  
}

      if (onSubscribe) {
        await onSubscribe(email)
      } else {
  // Simulate API call;
}

        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Subscription failed: ', error,)
    } finally {
  
}

      setIsSubmitting(false)
    }

  }

  if (isSubscribed) {
    return (
  <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
    </di>
        <div className="max-w-4xl mx-auto text-center">
    </di>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
    </di>
            <CheckCircle className="w-8 h-8 text-white" />
    </CheckCircl>
          </div>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
    </h>,
)
            Welcome to Our Community!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          </p>
          <button;
            onClick={() =>
    </butto> setIsSubscribed(false)}

            className="text-white underline hover: text-blue-200 transition-colors"
          >,
            Subscribe another email;
          </button>
        </div>
      </div>
    )
  }

  return (
  <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4">
    </di>
        <div className="max-w-4xl mx-auto text-center">
    </di> </div><h2 className="text-4xl font-bold text-white mb-4">
    </h>{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
    </for> </form><div className="flex flex-col sm: flex-row gap-4">
    </di>
            <inpu,t;
)
              type="email"
              value={email}

              onChange={(e) =>
    </inpu> setEmail(e.target.value)}

              placeholder={placeholder}

              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus: ring-emerald-500 focus:border-transparent",,
              required;
            />
            <button;
              type="submit"
              disabled={isLoading}

              className="bg-emerald-600 hover: bg-emerald-700 disabled:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
    </butto>{isLoading ? 'Subscribing...' : buttonText}

              </button><ArrowRight className="ml-2 h-4 w-4" />
    </ArrowRight>
            </button>
          </div>
        </form>
        
        {isSubscribed && (
          <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg">
    </di> </div><p className="text-emerald-400 flex items-center justify-center"> </p><CheckCircle className="h-5 w-5 mr-2" />
    </CheckCircl>Thank you for subscribing!
            </CheckCircle></p>
          </div>
        )}

        <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mt-8">
    </di>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-300">
    </di> </div><feature.icon className="h-5 w-5 text-emerald-400" />
    </featur> </feature><span className="text-sm">
    </spa>{feature.text}</span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ContentNewsletterSignup,