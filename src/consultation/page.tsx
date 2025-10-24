'use client'


constConsultationPage: React.FC = () => {const [
        formDatasetFormData
      ] = useState({}
    name: ''
    email: ''
    company: ''
    phone: ''
    industry: ''
    companySize: ''
    currentChallenges: ''
    goals: ''
    timeline: ''
    budge,
      t: ''
    messag,
      e: ''
  })
;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev
      [
        name
      ]: value
{    }))
{  };

  const handleSubmit = (e: React.FormEvent) => {};
    e.preventDefault()
    // Handle form submission
    const subject = `Free Consultation Request from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nCompany Size: ${formData.companySize}\nCurrent Challenges: ${formData.currentChallenges}\nGoals: ${formData.goals}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
{  }

  const consultationBenefits = []
    {
      icon: Target,
      title: 'Strategic Assessment'
      descriptio,
      n: 'Comprehensive analysis of your current technology stack and business processes'
   }
    {
      icon: Brain,
      title: 'AI Readiness Evaluation'
      descriptio,
      n: 'Determine how AI can best serve your specific business needs'
   }
    {
      icon: Shield,
      title: 'Security Audit'
      descriptio,
      n: 'Identify potential vulnerabilities and security improvements'
   }
    {
      icon: TrendingUp,
      title: 'Growth Strategy'
      descriptio,
      n: 'Develop a roadmap for scaling your technology infrastructure'
    }
  ]

  const consultationProcess = []
    {step: '1'
      titl,
      e: 'Initial Assessment'
      descriptio,
      n: 'We review your current setup and understand your business goals'
   }
    {step: '2'
      titl,
      e: 'Gap Analysis'
      descriptio,
      n: 'Identify areas where technology can drive improvement'
   }
    {step: '3'
      titl,
      e: 'Solution Design'
      descriptio,
      n: 'Create a customized technology roadmap for your business'
   }
    {step: '4'
      titl,
      e: 'Implementation Plan'
      descriptio,
      n: 'Provide detailed steps and timeline for your transformation'
    }
  ]

  const testimonials = []
    {name: 'David Thompson'
      company: 'Manufacturing Plus'
      tex,
      t: 'The free consultation opened our eyes to possibilities we never considered. Highly valuable session.'
      ratin,
      g:5}
    {name: 'Lisa Wang'
      compan,
      y: 'Retail Innovations'
      tex,
      t: 'Professional, insightful, and completely free. They helped us plan our digital transformation.'
      rating:5}
    {name: 'Robert Martinez'
      company: 'Healthcare Solutions'
      tex,
      t: 'The consultation was worth every minute. Clear recommendations and actionable insights.'
      ratin,
      g: 5
    }
  ]


        description=&quot;Get a free30-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness.&quot;
        keywords = {['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']}
        canonicalUrl=&quot;https: //ziontechgroup.com/consultation&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6 neon-text&quot;>Free Business Consultation
              </h1>
              <p className=&quot;text-xl m,
      d:text-2xl text-cyan-400 mb-8&quot;>Discover how technology can transform your business
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>Get a free 30-minute consultation with our technology experts. We'll assess your current setup
                identify opportunities, and provide actionable recommendations to drive your business forward.
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center items-center&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span >Schedule Now</span>
                </a>
              </div>
            </div>
          </section>
          {
    /* Benefits Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>What You'll Get
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-4 gap-8&quot;></div>
              {consultationBenefits.map((benefit, index) => ()
                <div key={index} className=&quot;cyber-card p-6 text-center hover: scale-105 transition-all duration-300&quot;></div>
                  <benefit.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title};

  return (
                  <p className=&quot;text-gray-300&quot;>{benefit.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Process Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Our Consultation Process
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-4 gap-8&quot;></div>
              {consultationProcess.map((step, index) => ()
                <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;></div>
                    {step.step};

  return (
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{step.title};

  return (
                  <p className=&quot;text-gray-300&quot;>{step.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Consultation Form  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <div className=&quot;grid grid-cols-1 lg: grid-cols-2 gap-12&quot;></div>
                {
    /* Form  */
    return (</div>
                  <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Schedule Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                    <div className=&quot;grid grid-cols-1 md: grid-cols-2 gap-4&quot;></div>
                      
                        <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Full Name *
                        </label>
                        <input type=&quot;text&quot;>
                          id=&quot;name&quot;
                          name=&quot;name&quot;
                          required
                          value = {formData.name}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                         placeholder=&quot;Enter your fullname&quot;
                        /></di><di v><labe lhtmlFor=&quot;email&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Email Address *
                      </labe><inputtype =&quot;email&quot;>
                         id=&quot;email&quot;
                         name=&quot;email&quot;
                          requiredvalue = {formData.email}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                         placeholder=&quot;Enter youremail&quot;
                        /></di></di><divclassName=&quot;grid grid-cols-1m,
      d:grid-cols-2gap-4&quot;><di v><labe lhtmlFor=&quot;company&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Company Name *
                      </labe><inputtype =&quot;text&quot;>
                         id=&quot;company&quot;
                         name=&quot;company&quot;
                          requiredvalue = {formData.company}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                         placeholder=&quot;Enter your companyname&quot;
                        /></di><di v><labe lhtmlFor=&quot;phone&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Phone Number
                      </labe><inputtype =&quot;tel&quot;>
                         id=&quot;phone&quot;
                         name=&quot;phone&quot;
                          value = {formData.phone}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                         placeholder=&quot;Enter your phonenumber&quot;
                        /></di></di><divclassName=&quot;grid grid-cols-1m,
      d:grid-cols-2gap-4&quot;><di v><labe lhtmlFor=&quot;industry&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Industry
                      </labe><selectid =&quot;industry&quot;>
                         name=&quot;industry&quot;
                          value = {formData.industry}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                        ><optio nvalue=&quot;&quot;>Selectyourindustry</optio><optio nvalue=&quot;healthcare&quot;>Healthcare</optio><optio nvalue=&quot;finance&quot;>Finance</optio><optio nvalue=&quot;manufacturing&quot;>Manufacturing</optio><optio nvalue=&quot;retail&quot;>Retail</optio><optio nvalue=&quot;technology&quot;>Technology</optio><optio nvalue=&quot;education&quot;>Education</optio><optio nvalue=&quot;other&quot;>Other</optio></selec></di><di v><labe lhtmlFor=&quot;companySize&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Company Size
                      </labe><selectid =&quot;companySize&quot;>
                         name=&quot;companySize&quot;
                          value = {formData.companySize}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                        ><optio nvalue=&quot;&quot;>Selectcompanysize</optio><optio nvalue=&quot;1-10&quot;>1-10employees</optio><optio nvalue=&quot;1 1-50&quot;>11-50employees</optio><optio nvalue=&quot;5 1-200&quot;>51-200employees</optio><optio nvalue=&quot;20 1-500&quot;>201-500employees</optio><optio nvalue=&quot;500+&quot;>500+employees</optio></selec></di></di><di v><labe lhtmlFor=&quot;currentChallenges&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Current Challenges
                    </labe><textareaid =&quot;currentChallenges&quot;>
                       name=&quot;currentChallenges&quot;
                        rows = {3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                       className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                       placeholder=&quot;Describe your current technologychallenges&quot;
                      /></di><di v><labe lhtmlFor=&quot;goals&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Business Goals
                    </labe><textareaid =&quot;goals&quot;>
                       name=&quot;goals&quot;
                        rows = {3}
                        value={formData.goals}
                        onChange={handleInputChange}
                       className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                       placeholder=&quot;What are your main businessobjectives?&quot;
                      /></di><divclassName=&quot;grid grid-cols-1m,
      d:grid-cols-2gap-4&quot;><di v><labe lhtmlFor=&quot;timeline&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Implementation Timeline
                      </labe><selectid =&quot;timeline&quot;>
                         name=&quot;timeline&quot;
                          value = {formData.timeline}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                        ><optio nvalue=&quot;&quot;>Selecttimeline</optio><optio nvalue=&quot;immediate&quot;>Immediate(0-3months)</optio><optio nvalue=&quot;short&quot;>Short term(3-6months)</optio><optio nvalue=&quot;medium&quot;>Mediumterm(6-12months)</optio><optio nvalue=&quot;long&quot;>Long term (12+months)</optio></selec></di><di v><labe lhtmlFor=&quot;budget&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Budget Range
                      </labe><selectid =&quot;budget&quot;>
                         name=&quot;budget&quot;
                          value = {formData.budget}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocu,
      s:border-cyan-400&quot;
                        ><optio nvalue=&quot;&quot;>Selectbudgetrange</optio><optio nvalue=&quot;under-10k&quot;>Under $10,000</optio><optio nvalue=&quot;10 k-50k&quot;>$1 0,000- $50,000</optio><optio nvalue=&quot;50 k-100k&quot;>$5 0,000- $100,000</optio><optio nvalue=&quot;100 k-500k&quot;>$10 0,000- $500,000</optio><optio nvalue=&quot;500k+&quot;>$500000+</optio></selec></di></di><di v><labe lhtmlFor=&quot;message&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Additional Information
                    </labe><textareaid =&quot;message&quot;>
                       name=&quot;message&quot;
                        rows = {4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus: outline-none focu,
      s:border-cyan-400&quot;
                        placeholder=&quot;Any additional information you'd like to share&quot;
                      />
                    </div>
                    <button type=&quot;submit&quot;>className=&quot;w-full cyber-button py-3 px-6 text-center&quot;
                    >
                      Schedule Free Consultation
                    </button>
                  </form>
                </div>
                {
    /* Benefits Sidebar  */
    return (</div>
                  <div className=&quot;cyber-card p-8&quot;></div>
                    <h3 className=&quot;text-xl font-bold text-white mb-6&quot;>Why Choose Our Consultation?</h3>
                    <ul className=&quot;space-y-4&quot;>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Completely free with no obligations</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Expert analysis of your current setup</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Actionable recommendations</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Customized technology roadmap</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>30-minute focused session</span>
                      </li>
                    </ul>
                  </div>
                  <div className=&quot;cyber-card p-8&quot;></div>
                    <h3 className=&quot;text-xl font-bold text-white mb-6&quot;>Contact Information</h3>
                    <div className=&quot;space-y-4&quot;></div>
                      <div className=&quot;flex items-center&quot;></div>
                        <Phone className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                        <a href=&quot;tel: +13024640950&quot; className=&quot;text-gray-300 hover:text-cyan-400&quot;>(302) 464-0950
                        </a>
                      </div>
                      <div className=&quot;flex items-center&quot;></div>
                        <Mail className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                        <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-gray-300 hove,
      r:text-cyan-400&quot;>kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className=&quot;flex items-center&quot;></div>
                        <Clock className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                        <span className=&quot;text-gray-300&quot;>Mon-Fr,
      i: 9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {
    /* Testimonials  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>What Our Clients Say
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-3 gap-8&quot;></div>
              {testimonials.map((testimonial, index) => ()
                <div key={index} className=&quot;cyber-card p-6&quot;></div>
                  <div className=&quot;flex items-center mb-4&quot;></div>
                    {[...Array(testimonial.rating)].map((_, i) => ()
                      <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                    ))};

  return (
                  <p className=&quot;text-gray-300 mb-4&quot;>&quot;{testimonial.text}&quot;</p>
                  
                    <div className=&quot;font-bold text-white&quot;>{testimonial.name};

  return (
                    <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.company};

  return (
                  </div>
                </div>
              ))};

  return (
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
}}}}}}}
