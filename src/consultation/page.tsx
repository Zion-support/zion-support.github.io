'use client'
import { Brain, Target, TrendingUp } from 'lucide-react'
import React, { useSta, t, e } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone, Mail  } from "lucide-react";
import { Clo, c, k } from "lucide-react";
constConsultationPage: React.FC= () => {
  const [formDatasetFormDa, t, a] = useState({
    name: ',&apos;,
    email: ',',
      company: ',',
    phone: ',',
      industry: ',',
    companySize: ',',
      currentChallenges: ',',
    goals: ',',
      timeline: ',',
    budget: ',',
    message: ''
 ,
})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { nam, e, value
} = e.target
    setFormData(prev => ({
      ...prev
      [na, m, e]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
    // Handle form submission
    const subject = `Free Consultation Request from ${formData.nam,e
} - ${formData.company}`
    const body = `Name: ${formData.nam,e}\nEmail: ${formData.emai,l}\nCompany: ${formData.compan,y}\nPhone: ${formData.phon,e}\nIndustry: ${formData.industr,y}\nCompany Size: ${formData.companySiz,e}\nCurrent Challenges: ${formData.currentChallenge,s}\nGoals: ${formData.goal,s}\nTimeline: ${formData.timelin,e}\nBudget: ${formData.budge,t}\nMessage: ${formData.messag,e}`
    window.location.href = `mailto: kleber@ziontechgroup.com?subject=${encodeURIComponent(subject,)}&body=${encodeURIComponent(bo, d, y)}`
  }

  constconsultationBenefits= [
    {icon: Targe,
      title: 'Strategic Assessment,',
      description: 'Comprehensive analysis of your current technology stack and business processes'
  , },
    {icon: Brai,
      title: 'AI Readiness Evaluation,',
      description: 'Determine how AI can best serve your specific business needs'
  , },
    {icon: Shiel,
      title: 'Security Audit,',
      description: 'Identify potential vulnerabilities and security improvements'
  , },
    {icon: TrendingU,
      title: 'Growth Strategy,',
      description: 'Develop a roadmap for scaling your technology infrastructure'
   , }
  ]

  constconsultationProcess= [
    {step: '1,',
      title: 'Initial Assessment,',
      description: 'We review your current setup and understand your business goals'
  , },
    {step: '2,',
      title: 'Gap Analysis,',
      description: 'Identify areas where technology can drive improvement'
  , },
    {step: '3,',
      title: 'Solution Design,',
      description: 'Create a customized technology roadmap for your business'
  , },
    {step: '4,',
      title: 'Implementation Plan,',
      description: 'Provide detailed steps and timeline for your transformation'
   , }
  ]

  consttestimonials= [
    {name: 'David Thompson,',
      company: 'Manufacturing Plus,',
      text: 'The free consultation opened our eyes to possibilities we never considered. Highly valuable session.,',
      rating:5},
    {name: 'Lisa Wang,',
      company: 'Retail Innovations,',
      text: 'Professiona,l, insightful, and completely free. They helped us plan our digital transformation.',
      rating:5},
    {name: 'Robert Martinez,',
      company: 'Healthcare Solutions,',
      text: 'The consultation was worth every minute. Clear recommendations and actionable insights.,',
      rating: 5
   , }
  ]

const Page = (): JSX.Element => {
  return (
  <><SEOOptimizertitle=&quot;Free Business Consultation - ZionTechGroup&quot;
        description=&quot;Get a free30-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness.&quot;
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']}
        canonicalUrl=&quot;https://ziontechgroup.com/consultation&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {/* Hero Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
                Free Business Consultation
              </h1>
              <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8&quot;>
                Discover how technology can transform your business
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>
                Get a free 30-minute consultation with our technology experts. We'll assess your current setup,
                identify opportunities, and provide actionable recommendations to drive your business forward.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span>Schedule Now</span>
                </a>
              </div>
            </div>
          </section>
          {/* Benefits Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              What You'll Get
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {consultationBenefits.map((benefit, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <benefit.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Process Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Our Consultation Process
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {consultationProcess.map((step, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;></div>
                    {step.step}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{step.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{step.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Consultation Form */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;></div>
                {/* Form */}
                <div className=&quot;cyber-card p-8&quot;></div>
                  <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Schedule Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;></div>
                      <div></div>
                        <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                          Full Name *
                        </label>
                        <input
                          type=&quot;text&quot;
                          id=&quot;name&quot;
                          name=&quot;name&quot;
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                         placeholder=&quot;Enter your fullname&quot;
                        /></di><di v><labelhtmlFor=&quot;email&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Email Address *
                      </labe><inputtype=&quot;email&quot;
                         id=&quot;email&quot;
                         name=&quot;email&quot;
                          requiredvalue={formData.email}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                         placeholder=&quot;Enter youremail&quot;
                        /></di></di><divclassName=&quot;grid grid-cols-1md:grid-cols-2gap-4&quot;><di v><labelhtmlFor=&quot;company&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Company Name *
                      </labe><inputtype=&quot;text&quot;
                         id=&quot;company&quot;
                         name=&quot;company&quot;
                          requiredvalue={formData.company}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                         placeholder=&quot;Enter your companyname&quot;
                        /></di><di v><labelhtmlFor=&quot;phone&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Phone Number
                      </labe><inputtype=&quot;tel&quot;
                         id=&quot;phone&quot;
                         name=&quot;phone&quot;
                          value={formData.phone}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                         placeholder=&quot;Enter your phonenumber&quot;
                        /></di></di><divclassName=&quot;grid grid-cols-1md:grid-cols-2gap-4&quot;><di v><labelhtmlFor=&quot;industry&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Industry
                      </labe><selectid=&quot;industry&quot;
                         name=&quot;industry&quot;
                          value={formData.industry}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                        ><optionvalue=&quot;&quot;>Selectyourindustry</optio><optionvalue=&quot;healthcare&quot;>Healthcare</optio><optionvalue=&quot;finance&quot;>Finance</optio><optionvalue=&quot;manufacturing&quot;>Manufacturing</optio><optionvalue=&quot;retail&quot;>Retail</optio><optionvalue=&quot;technology&quot;>Technology</optio><optionvalue=&quot;education&quot;>Education</optio><optionvalue=&quot;other&quot;>Other</optio></selec></di><di v><labelhtmlFor=&quot;companySize&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Company Size
                      </labe><selectid=&quot;companySize&quot;
                         name=&quot;companySize&quot;
                          value={formData.companySize}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                        ><optionvalue=&quot;&quot;>Selectcompanysize</optio><optionvalue=&quot;1-10&quot;>1-10employees</optio><optionvalue=&quot;1 1-50&quot;>11-50employees</optio><optionvalue=&quot;5 1-200&quot;>51-200employees</optio><optionvalue=&quot;20 1-500&quot;>201-500employees</optio><optionvalue=&quot;500+&quot;>500+employees</optio></selec></di></di><di v><labelhtmlFor=&quot;currentChallenges&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Current Challenges
                    </labe><textareaid=&quot;currentChallenges&quot;
                       name=&quot;currentChallenges&quot;
                        rows={3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                       className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                       placeholder=&quot;Describe your current technologychallenges&quot;
                      /></di><di v><labelhtmlFor=&quot;goals&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Business Goals
                    </labe><textareaid=&quot;goals&quot;
                       name=&quot;goals&quot;
                        rows={3}
                        value={formData.goals}
                        onChange={handleInputChange}
                       className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                       placeholder=&quot;What are your main businessobjectives?&quot;
                      /></di><divclassName=&quot;grid grid-cols-1md:grid-cols-2gap-4&quot;><di v><labelhtmlFor=&quot;timeline&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Implementation Timeline
                      </labe><selectid=&quot;timeline&quot;
                         name=&quot;timeline&quot;
                          value={formData.timeline}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                        ><optionvalue=&quot;&quot;>Selecttimeline</optio><optionvalue=&quot;immediate&quot;>Immediate(0-3months)</optio><optionvalue=&quot;short&quot;>Short term(3-6months)</optio><optionvalue=&quot;medium&quot;>Mediumterm(6-12months)</optio><optionvalue=&quot;long&quot;>Long term (12+months)</optio></selec></di><di v><labelhtmlFor=&quot;budget&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Budget Range
                      </labe><selectid=&quot;budget&quot;
                         name=&quot;budget&quot;
                          value={formData.budget}
                          onChange={handleInputChange}
                         className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                        ><optionvalue=&quot;&quot;>Selectbudgetrange</optio><optionvalue=&quot;under-10k&quot;>Under $10,000</optio><optionvalue=&quot;10 k-50k&quot;>$1 0,000- $50,000</optio><optionvalue=&quot;50 k-100k&quot;>$5 0,000- $100,000</optio><optionvalue=&quot;100 k-500k&quot;>$10 0,000- $500,000</optio><optionvalue=&quot;500k+&quot;>$500000+</optio></selec></di></di><di v><labelhtmlFor=&quot;message&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Additional Information
                    </labe><textareaid=&quot;message&quot;
                       name=&quot;message&quot;
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400&quot;
                        placeholder=&quot;Any additional information you'd like to share&quot;
                      />
                    </div>
                    <button
                      type=&quot;submit&quot;
                      className=&quot;w-full cyber-button py-3 px-6 text-center&quot;
                    >
                      Schedule Free Consultation</button>
                  </form>
                </div>
                {/* Benefits Sidebar */}
                <div className=&quot;space-y-8&quot;></div>
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
                        <a href=&quot;tel:+13024640950&quot; className=&quot;text-gray-300 hover:text-cyan-400&quot;>
                          (302) 464-0950
                        </a>
                      </div>
                      <div className=&quot;flex items-center&quot;></div>
                        <Mail className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                        <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-gray-300 hover:text-cyan-400&quot;>
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className=&quot;flex items-center&quot;></div>
                        <Clock className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                        <span className=&quot;text-gray-300&quot;>Mon-Fri: 9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              What Our Clients Say
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className=&quot;cyber-card p-6&quot;></div>
                  <div className=&quot;flex items-center mb-4&quot;></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                    ))}
                  </div>
                  <p className=&quot;text-gray-300 mb-4&quot;>&quot;{testimonial.text}&quot;</p>
                  <div></div>
                    <div className=&quot;font-bold text-white&quot;>{testimonial.name}</div>
                    <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer /></Footer>
      </div>
    </>
  )
}

export default Page;

export default Page;