'use client'
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
    }
  ]

        </div>
      </div>
    );
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
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
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder={placeholder}
                 requiredclassName="w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent"
                />
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

=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
