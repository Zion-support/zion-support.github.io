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
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ContentNewsletterSignupPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Content Community!</h2>h2>
          <p className="text-xl text-gray-600 mb-8">You'll receive our latest AI insights, enterprise transformation guides, and breakthrough content directly in your inbox.</p>p>
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✅ Weekly AI trend reports</li>
              <li>✅ Exclusive enterprise case studies</li>
              <li>✅ Early access to new content</li>
              <li>✅ Invitation to expert webinars</li>
            </ul>
          </div>
        </div>
      </div>
    );
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
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
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
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContentNewsletterSignup;
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
