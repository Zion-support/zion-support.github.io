    icon ReactComponentType< className string >
    text string>
  onSubscribe email string => voidconstContentNewsletterSignup ReactFC<ContentNewsletterSignupProp s>= 
  title= quotStay Updated with Our LatestInsightsquot subtitle= quotGet exclusive content industry insights and early access to new features delivered to yourinboxquot placeholder= quotEnter your emailaddressquot buttonText= quotSubscribequot features= 
     icon Star text quotExclusive contentquot icon Users text quotIndustry insightsquot icon Globe text quotGlobal updatesquot icon Zap text quotEarly accessquot onSubscribe => 
  const email setEmail = useState''
  const isSubmitting setIsSubmitting = useStatefalse const isSubscribed setIsSubscribed = useStatefalse const isLoading setIsLoading = useStatefalse const handleSubmit = async e ReactFormEvent => 
    epreventDefault if email return setIsLoadin gtrue    <><div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
      </div>
        <div className="max-w-4xl mx-auto">
        </div>
        <div className="text-center mb-8">
          </div><h2 className="text-3xl font-bold text-white mb-4">title</h2>
          <p className="text-gray-300 text-lg">subtitle</p></p>
        </div>
        <div className="grid mdgrid-cols-2 gap-8 items-center">
          / Features /
          </div>
        <div className="space-y-4">
            featuresmapfeature index => 
              </div>
        <div key=index className="flex items-center space-x-3">
                </div>
        <div className="flex-shrink-0">
                  </div><featureicon className="w-6 h-6 text-cyan-400" />
                </div></>
                <span className="text-gray-300">featuretext</span>
              </div>
            
          </div>

          / Newsletter Form /
          <><div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            </div><form onSubmit=handleSubmit className="space-y-4">
              <div>
                </div><label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address</label>
                <div className="relative">
                  </div><Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email"
                    id="email"
                    value=email onChange=e => setEmailetargetvalue placeholder=placeholder required className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focusoutline-none focusring-2 focusring-cyan-500 focusborder-transparent"
                  />
                </div>
              </div>
              <button type="submit"
                disabled=isSubmitting className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hoverfrom-cyan-600 hoverto-purple-600 transition-all duration-300 disabledopacity-50 disabledcursor-not-allowed"
              >
                isSubmitting  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div></div>
                    Subscribing</>
                  
                  <>
                    buttonText  <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                
              </button>
            </form>
          </div>
        <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-16 px-4">
        </div>
        <div className="max-w-4xl mx-auto text-center"> </div></div></><h2 className="text-4xl font-bold text-white mb-4">title</h2>
        <p className="text-xl text-gray-300 mb-8">subtitle</p></p>
        
        <form onSubmit=handleSubmit className="max-w-md mx-auto mb-8"> </form><div className="flex flex-col sm flex-row gap-4">
            </div><input type="email"
              value=email onChange=e => setEmailetargetvalue placeholder=placeholder className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus outline-none focusring-2 focusring-emerald-500 focusborder-transparent"
              required />
            <button type="submit"
              disabled=isLoading className="bg-emerald-600 hover bg-emerald-700 disabledbg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >isLoading  'Subscribing'  buttonText</button><ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
        
        isSubscribed  <div className="mt-4 p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg"> </div></div>
          <p className="text-emerald-400 flex items-center justify-center"> </p></p><CheckCircle className="h-5 w-5 mr-2" />Thank you for subscribing</CheckCircle></p>
          </div>
        <div className="grid grid-cols-2 md grid-cols-4 gap-4 mt-8">
          featuresmapfeature index => 
            </div>
        <div key=index className="flex items-center space-x-2 text-gray-300"> </div></div><featureicon className="h-5 w-5 text-emerald-400" /> </feature><span className="text-sm">featuretext</span>
            </div>
          