'use client'
import { Brain, Target, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone, Mail } from 'lucide-react'
import { Clock } from 'lucide-react'

constConsultationPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const subject = `Free Consultation Request from ${formData.name} - ${formData.company}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nCompany Size: ${formData.companySize}\nCurrent Challenges: ${formData.currentChallenges}\nGoals: ${formData.goals}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  constconsultationBenefits= [
    {icon: Target,
      title: 'Strategic Assessment',
      description: 'Comprehensive analysis of your current technology stack and business processes'
   },
    {icon: Brain,
      title: 'AI Readiness Evaluation',
      description: 'Determine how AI can best serve your specific business needs'
   },
    {icon: Shield,
      title: 'Security Audit',
      description: 'Identify potential vulnerabilities and security improvements'
   },
    {icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Develop a roadmap for scaling your technology infrastructure'
    }
  ]

  constconsultationProcess= [
    {step: '1',
      title: 'Initial Assessment',
      description: 'We review your current setup and understand your business goals'
   },
    {step: '2',
      title: 'Gap Analysis',
      description: 'Identify areas where technology can drive improvement'
   },
    {step: '3',
      title: 'Solution Design',
      description: 'Create a customized technology roadmap for your business'
   },
    {step: '4',
      title: 'Implementation Plan',
      description: 'Provide detailed steps and timeline for your transformation'
    }
  ]

  consttestimonials= [
    {name: 'David Thompson',
      company: 'Manufacturing Plus',
      text: 'The free consultation opened our eyes to possibilities we never considered. Highly valuable session.',
      rating:5},
    {name: 'Lisa Wang',
      company: 'Retail Innovations',
      text: 'Professional, insightful, and completely free. They helped us plan our digital transformation.',
      rating:5},
    {name: 'Robert Martinez',
      company: 'Healthcare Solutions',
      text: 'The consultation was worth every minute. Clear recommendations and actionable insights.',
      rating: 5
    }
  ]

const Page = () => {
  return (
  <><SEOOptimizertitle="Free Business Consultation - ZionTechGroup"
        description="Get a free30-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness."
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"></section>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Free Business Consultation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Discover how technology can transform your business
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Get a free 30-minute consultation with our technology experts. We'll assess your current setup,
                identify opportunities, and provide actionable recommendations to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Now</span>
                </a>
              </div>
            </div>
          </section>
          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {consultationBenefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Process Section */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Consultation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {consultationProcess.map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center"></div>
                  <div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Consultation Form */}
          <section className="container mx-auto px-4 py-16"></section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
                {/* Form */}
                <div className="cyber-card p-8"></div>
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                      <div></div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                         placeholder="Enter your fullname"
                        /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                      </labe><inputtype="email"
                         id="email"
                         name="email"
                          requiredvalue={formData.email}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                         placeholder="Enter youremail"
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company Name *
                      </labe><inputtype="text"
                         id="company"
                         name="company"
                          requiredvalue={formData.company}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                         placeholder="Enter your companyname"
                        /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number
                      </labe><inputtype="tel"
                         id="phone"
                         name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                         placeholder="Enter your phonenumber"
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="industry"className="block text-sm font-medium text-gray-300mb-2">Industry
                      </labe><selectid="industry"
                         name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectyourindustry</optio><optionvalue="healthcare">Healthcare</optio><optionvalue="finance">Finance</optio><optionvalue="manufacturing">Manufacturing</optio><optionvalue="retail">Retail</optio><optionvalue="technology">Technology</optio><optionvalue="education">Education</optio><optionvalue="other">Other</optio></selec></di><di v><labelhtmlFor="companySize"className="block text-sm font-medium text-gray-300mb-2">Company Size
                      </labe><selectid="companySize"
                         name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectcompanysize</optio><optionvalue="1-10">1-10employees</optio><optionvalue="1 1-50">11-50employees</optio><optionvalue="5 1-200">51-200employees</optio><optionvalue="20 1-500">201-500employees</optio><optionvalue="500+">500+employees</optio></selec></di></di><di v><labelhtmlFor="currentChallenges"className="block text-sm font-medium text-gray-300mb-2">Current Challenges
                    </labe><textareaid="currentChallenges"
                       name="currentChallenges"
                        rows={3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Describe your current technologychallenges"
                      /></di><di v><labelhtmlFor="goals"className="block text-sm font-medium text-gray-300mb-2">Business Goals
                    </labe><textareaid="goals"
                       name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="What are your main businessobjectives?"
                      /></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="timeline"className="block text-sm font-medium text-gray-300mb-2">Implementation Timeline
                      </labe><selectid="timeline"
                         name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selecttimeline</optio><optionvalue="immediate">Immediate(0-3months)</optio><optionvalue="short">Short term(3-6months)</optio><optionvalue="medium">Mediumterm(6-12months)</optio><optionvalue="long">Long term (12+months)</optio></selec></di><di v><labelhtmlFor="budget"className="block text-sm font-medium text-gray-300mb-2">Budget Range
                      </labe><selectid="budget"
                         name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectbudgetrange</optio><optionvalue="under-10k">Under $10,000</optio><optionvalue="10 k-50k">$1 0,000- $50,000</optio><optionvalue="50 k-100k">$5 0,000- $100,000</optio><optionvalue="100 k-500k">$10 0,000- $500,000</optio><optionvalue="500k+">$500000+</optio></selec></di></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Additional Information
                    </labe><textareaid="message"
                       name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Any additional information you'd like to share"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full cyber-button py-3 px-6 text-center"
                    >
                      Schedule Free Consultation
                    </button>
                  </form>
                </div>
                {/* Benefits Sidebar */}
                <div className="space-y-8"></div>
                  <div className="cyber-card p-8"></div>
                    <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Consultation?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Completely free with no obligations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Expert analysis of your current setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Actionable recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Customized technology roadmap</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">30-minute focused session</span>
                      </li>
                    </ul>
                  </div>
                  <div className="cyber-card p-8"></div>
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4"></div>
                      <div className="flex items-center"></div>
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
                          (302) 464-0950
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                        <span className="text-gray-300">Mon-Fri: 9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div></div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page;
