import Footer  from "./Footer";
import Navigation  from "./Navigation";import { Helmet }  from "react-helmet-async";
import { ArrowRight }  from "lucide-react";import React, { useState }  from "react";
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap }  from "lucide-react";import { CheckCircle, ArrowRight }  from "lucide-react";'use client'
interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ class Nam e?: string}>text: string;
  }>
  onSubscribe?: (email: string) => void;
}constContentNewsletterSignup: React.FC<ContentNewsletterSignupProp s>= ({title= "Stay Updated with Our LatestInsights"
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox."
  placeholder= "Enter your emailaddress"
  buttonText= "Subscribe"
  features= [
    { icon: Star, text:"Exclusive content"}
    {icon: Users, text:"Industry insights"}
    {icon: Globe, text:"Global updates"}
    {
  icon: Zap, text:"Early access"
}
  ]
  onSubscribe;
}) => {
  const [emailsetEmail] = useState('')
  const [isSubmittingsetIsSubmitting] = useState(false)
  const [isSubscribedsetIsSubscribed] = useState(false)
  const [isLoadingsetIsLoading] = useState(false)
  consthandleSubmit= async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
    try {
      // Simulate API call;
      await new Promise(resolve=> setTimeout(resolve100 0))
      if (onSubscrib e) {
        onSubscribe(email)
}
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      // // console.error('Subscription error:', error)
    } finally {
  setIsSubmitting(false)
}
  ]
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
  return(<>
         
      </>
      <Helmet >
        </Helmet>
        </Helmet>
        </Helmet>
      </Helmet>
        <title>ContentNewsletterSignup</title>
<//title>
        <meta name="description" content="Advanced ContentNewsletterSignup solution for modern businesses." />
        </meta>
        </meta>
        </meta>
        </meta name="description" content="Advanced ContentNewsletterSignup solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ContentNewsletterSignup, AI solutions, intelligent automation" />
        </meta>
        </meta>
        </meta>
        </meta name="keywords" content="AI, artificial intelligence, ContentNewsletterSignup, AI solutions, intelligent automation" />
      </Helmet>

      <//Helmet>
      <Navigation />
        </Navigation>
        </Navigation>
        </Navigation>
      </Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
<//div>
        {
  /* Hero Section */
}
        <section className="relative py-20 px-4 overflow-hidden"></section>
<//section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
<//div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
<//div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        </h1>
        </h1>
        </h1>
        </div>
        </h1>
            </h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              ContentNewsletterSignup;
            </h1>

            <//h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        </p>
        </p>
        </p>
        </div>
        </p>
            </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        </div>
              Advanced ContentNewsletterSignup solution for modern businesses.
            </p>

            <//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<//div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
        </ArrowRight>
        </ArrowRight>
        </ArrowRight>
                </ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <//button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More;
              </button>

              <//button>
        </div>

        <//div>
      </div>

      <//div>)
    );
            </div>

            <//div>
          </div>

          <//div>
        </section>

        <//section>
        {
  /* Features Section */
}
        <section className="py-20 px-4"></section>
<//section>
          <div className="max-w-7xl mx-auto"></div>
<//div>
            <div className="text-center mb-16"></div>
<//div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
<//h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-xl text-gray-300 max-w-3xl mx-auto">
        </div>
                Powerful AI-driven features designed to transform your business operations;
              </p>

              <//p>
            </div>

            <//div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
<//div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
<//div>
                  <feature .icon className="h-12 w-12 text-emerald-400 mb-4" />
        </feature>
        </feature>
        </feature>
                  </feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
<//h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<//p>
                  <ul className="space-y-2">
        </ul>
        </ul>
        </ul>
        </div>
        </ul>
                  </ul className="space-y-2">
        </div>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
        </li>
        </li>
        </li>
        </div>
                      </li key={idx} className="flex items-center text-sm text-gray-300">
        </div>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {
  benefit
}
                      </li>

                      <//li>
                    ))}
                  </ul>

                  <//ul>
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </div>

          <//div>
          {
  /* Newsletter Form */
}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"></div>
<//div>
            <form onSubmit={handleSubmit} className="space-y-6">
        </form>
        </form>
        </form>
        </div>
            </form onSubmit={handleSubmit} className="space-y-6">
        </div>
              <div></div>
<//div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
        </label>
        </label>
        </label>
        </div>
                </label htmlFor="email" className="block text-sm font-medium text-white mb-2">
        </div>
                  Email Address;
                <input;
                  type="email"
                  value={
  email
}
                  onChange={
  (e) =>setEmail(e.target.value)
}
                  placeholder={
  placeholder
}
                 requiredclassName="w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent"
                />
              </div>

              <//div>
              <button;
                type="submit"
                disabled={
  isLoading || !email
}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"></button>
<//button>
                {
  isLoading ? (
                  <>
         
      </>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
<//div>
                    Subscribing...
                  </>

                  <//>
                ) : (
                  <>
         
      </>
                    {buttonText
}
                    <ArrowRight className="w-5 h-5 ml-2" />
        </ArrowRight>
        </ArrowRight>
        </ArrowRight>
                    </ArrowRight className="w-5 h-5 ml-2" />
                  </>

                  <//>
                )}
              </button>

              <//button>
              <p className="text-sm text-blue-200 text-center">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-sm text-blue-200 text-center">
        </div>
                We respect your privacy. Unsubscribe at any time.
              </p>

              <//p>
            </div>

            <//div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
<//div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
<//div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                  </CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
<//p>
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </div>

          <//div>
        </section>

        <//section>
        {
  /* CTA Section */
}
        <section className="py-20 px-4"></section>
<//section>
          <div className="max-w-4xl mx-auto text-center"></div>
<//div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
<//h2>
            <p className="text-xl text-gray-300 mb-8">
        </p>
        </p>
        </p>
        </div>
        </p>
            </p className="text-xl text-gray-300 mb-8">
        </div>
              Join thousands of businesses already using our AI solutions;
            </p>

            <//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<//div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial;
              </button>

              <//button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
        </button>
        </button>
        </button>
        </div>
        </button>
              </button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales;
              </button>

              <//button>
            </div>

            <//div>
          </div>

          <//div>
        </section>

        <//section>
      </div>

      <//div>
      <Footer />
        </Footer>
        </Footer>
        </Footer>
      </Footer />
    </>

    <//>
  );
};
export default ContentNewsletterSignupPage;
