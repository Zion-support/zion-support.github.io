<<<<<<< HEAD
    "use client",
import { Brain, Target, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Mail, Brain, TrendingUp, Target } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Mail, Brain, TrendingUp, Target } from 'lucide-react'
import { Mail, Brain, TrendingUp, Target } from 'lucide-react'
constConsultationPage: React.FC = () =>{const [formDatasetFormData] = useState({}
    name: ''
    email: ''
    company: ''
    phone: ''
    industry: ''
    companySize: ''
    currentChallenges: ''
    goals: ''
    timeline: ''
    budget: ''
    message: ''
  })
;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev
      [name]: value
{    }))
{  }
  const handleSubmit = (e: React.FormEvent) => {};
    e.preventDefault()
    // Handle form submission
    const subject = `Free Consultation Request from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nCompany Size: ${formData.companySize}\nCurrent Challenges: ${formData.currentChallenges}\nGoals: ${formData.goals}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
{  }
  constconsultationBenefits= []
    {
      icon: Target,
      title: "Strategic Assessment",
      description: 'Comprehensive analysis of your current technology stack and business processes'
  }
    {
      icon: Brain,
      title: "AI Readiness Evaluation",
      description: 'Determine how AI can best serve your specific business needs'
  }
    {
      icon: Shield,
      title: "Security Audit",
      description: 'Identify potential vulnerabilities and security improvements'
  }
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: 'Develop a roadmap for scaling your technology infrastructure'
  }
  ]
  constconsultationProcess= []
    {step: "1",
      title: 'Initial Assessment'
      description: 'We review your current setup and understand your business goals'
  }
    {step: "2",
      title: 'Gap Analysis'
      description: 'Identify areas where technology can drive improvement'
  }
    {step: "3",
      title: 'Solution Design'
      description: 'Create a customized technology roadmap for your business'
  }
    {step: "4",
      title: 'Implementation Plan'
      description: 'Provide detailed steps and timeline for your transformation'
  }
  ]
  consttestimonials= []
    {name: "David Thompson",
      company: 'Manufacturing Plus'
      text: "The free consultation opened our eyes to possibilities we never considered. Highly valuable session.",
      rating:5}
    {name: "Lisa Wang",
      company: 'Retail Innovations'
      text: "Professional, insightful, and completely free. They helped us plan our digital transformation.",
      rating:5}
    {name: "Robert Martinez",
      company: 'Healthcare Solutions'
      text: "The consultation was worth every minute. Clear recommendations and actionable insights.",
      rating: 5
  }
  ]
const Page = () => {
  return (
  <>
      <SEOOptimizer
        title="Free Business Consultation - ZionTechGroup"
const Page = () => {
  return (
    <>
      <SEOOptimizertitle =&quot;Free Business Consultation - ZionTechGroup&quot;>
        description="Get a free30-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness."
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']}
        canonicalUrl="https: //ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"></section>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
                Free Business Consultation
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Discover how technology can transform your business
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Get a free 30-minute consultation with our technology experts. We'll assess your current setup
                identify opportunities, and provide actionable recommendations to drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                <a href="tel:+13024640950">
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a href="mailto:kleber@ziontechgroup.com">
                  className="cyber-button flex items-center space-x-2"
                  style = {{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className="w-5 h-5" />
                  <span>Schedule Now</span>
                </a>
              </div>
            </div>
          </section>
          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {consultationBenefits.map((benefit, index) => ()
                <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300"></div>
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Process Section */}
          <section className="container mx-auto px-4 py-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Consultation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {consultationProcess.map((step, index) => ()
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
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-12"></div>
                {/* Form */}
                <div className="cyber-card p-8"></div>
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md: grid-cols-2 gap-4"></div>
                        <label htmlFor=&quot;name&quot; className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input type=&quot;text&quot;>
                          id=&quot;name&quot;
                          name=&quot;name&quot;
    required;
                          value = {formData.name}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                         placeholder=&quot;Enter your fullname&quot;
                        /></di><di v><labelhtmlFor=&quot;email&quot;className="block text-sm font-medium text-gray-300mb-2">Email Address *
                      </labe><inputtype =&quot;email&quot;>
                         id=&quot;email&quot;
                         name=&quot;email&quot;
                          requiredvalue = {formData.email}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                         placeholder=&quot;Enter youremail&quot;
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor=&quot;company&quot;className="block text-sm font-medium text-gray-300mb-2">Company Name *
                      </labe><inputtype =&quot;text&quot;>
                         id=&quot;company&quot;
                         name=&quot;company&quot;
                          requiredvalue = {formData.company}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                         placeholder=&quot;Enter your companyname&quot;
                        /></di><di v><labelhtmlFor=&quot;phone&quot;className="block text-sm font-medium text-gray-300mb-2">Phone Number
                      </labe><inputtype =&quot;tel&quot;>
                         id=&quot;phone&quot;
                         name=&quot;phone&quot;
                          value = {formData.phone}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                         placeholder=&quot;Enter your phonenumber&quot;
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor=&quot;industry&quot;className="block text-sm font-medium text-gray-300mb-2">Industry
                      </labe><selectid =&quot;industry&quot;>
                         name=&quot;industry&quot;
                          value = {formData.industry}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                        ><optionvalue=&quot;&quot;>Selectyourindustry</optio><optionvalue=&quot;healthcare&quot;>Healthcare</optio><optionvalue=&quot;finance&quot;>Finance</optio><optionvalue=&quot;manufacturing&quot;>Manufacturing</optio><optionvalue=&quot;retail&quot;>Retail</optio><optionvalue=&quot;technology&quot;>Technology</optio><optionvalue=&quot;education&quot;>Education</optio><optionvalue=&quot;other&quot;>Other</optio></selec></di><di v><labelhtmlFor=&quot;companySize&quot;className="block text-sm font-medium text-gray-300mb-2">Company Size
                      </labe><selectid =&quot;companySize&quot;>
                         name=&quot;companySize&quot;
                          value = {formData.companySize}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                        ><optionvalue=&quot;&quot;>Selectcompanysize</optio><optionvalue=&quot;1-10&quot;>1-10employees</optio><optionvalue=&quot;1 1-50&quot;>11-50employees</optio><optionvalue=&quot;5 1-200&quot;>51-200employees</optio><optionvalue=&quot;20 1-500&quot;>201-500employees</optio><optionvalue=&quot;500+&quot;>500+employees</optio></selec></di></di><di v><labelhtmlFor=&quot;currentChallenges&quot;className="block text-sm font-medium text-gray-300mb-2">Current Challenges
                    </labe><textareaid =&quot;currentChallenges&quot;>
                       name=&quot;currentChallenges&quot;
                        rows = {3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder=&quot;Describe your current technologychallenges&quot;
                      /></di><di v><labelhtmlFor=&quot;goals&quot;className="block text-sm font-medium text-gray-300mb-2">Business Goals
                    </labe><textareaid =&quot;goals&quot;>
                       name=&quot;goals&quot;
                        rows = {3}
                        value={formData.goals}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder=&quot;What are your main businessobjectives?&quot;
                      /></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor=&quot;timeline&quot;className="block text-sm font-medium text-gray-300mb-2">Implementation Timeline
                      </labe><selectid =&quot;timeline&quot;>
                         name=&quot;timeline&quot;
                          value = {formData.timeline}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                        ><optionvalue=&quot;&quot;>Selecttimeline</optio><optionvalue=&quot;immediate&quot;>Immediate(0-3months)</optio><optionvalue=&quot;short&quot;>Short term(3-6months)</optio><optionvalue=&quot;medium&quot;>Mediumterm(6-12months)</optio><optionvalue=&quot;long&quot;>Long term (12+months)</optio></selec></di><di v><labelhtmlFor=&quot;budget&quot;className="block text-sm font-medium text-gray-300mb-2">Budget Range
                      </labe><selectid =&quot;budget&quot;>
                         name=&quot;budget&quot;
                          value = {formData.budget}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                        ><optionvalue=&quot;&quot;>Selectbudgetrange</optio><optionvalue=&quot;under-10k&quot;>Under $10,000</optio><optionvalue=&quot;10 k-50k&quot;>$1 0,000- $50,000</optio><optionvalue=&quot;50 k-100k&quot;>$5 0,000- $100,000</optio><optionvalue=&quot;100 k-500k&quot;>$10 0,000- $500,000</optio><optionvalue=&quot;500k+&quot;>$500000+</optio></selec></di></di><di v><labelhtmlFor=&quot;message&quot;className="block text-sm font-medium text-gray-300mb-2">Additional Information
                    </labe><textareaid =&quot;message&quot;>
                       name=&quot;message&quot;
                        rows = {4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400"
                        placeholder=&quot;Any additional information you'd like to share&quot;
                      />
                    </div>
                    <button type=&quot;submit&quot;>
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
                        <a href="tel: +13024640950" className="text-gray-300 hover:text-cyan-400">
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
            <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => ()
                <div key={index} className="cyber-card p-6"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => ()
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
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
{}
export default Page;
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> origin/main
