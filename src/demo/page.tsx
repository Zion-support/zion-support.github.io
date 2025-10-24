<<<<<<< HEAD
'use client'
import { Brain } from 'lucide-react'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone, Mail } from 'lucide-react'
import { Clock } from 'lucide-react';constDemoPage: React.FC = () => {const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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
    const subject = `Demo Request from ${formData.name} - ${formData.company}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  constdemoFeatures= [
    {icon: Brain,
      title: 'AI Solutions Demo',
      description: 'See our AI services in action with live demonstrations'
   },
    {icon: Shield,
      title: 'Security Assessment',
      description: 'Get a free security evaluation of your current setup'
   },
    {icon: Zap,
      title: 'Performance Analysis',
      description: 'Learn how to optimize your business processes'
   },
    {icon: Users,
      title: 'Team Training',
      description: 'Hands-on training for your team members'
    }
  ]

  consttestimonials= [
    {name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      text: 'The demo was incredibly insightful. We saw immediate value in their AI solutions.',
      rating:5},
    {name: 'Michael Chen',
      company: 'InnovateLabs',
      text: 'Professional team with deep expertise. The demo exceeded our expectations.',
      rating:5},
    {name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      text: 'Clear, concise, and very informative. Highly recommend scheduling a demo.',
      rating: 5
    }
  ]

const Page = () => {
  return (
  <><SEOOptimizertitle=&quot;Request a Demo - ZionTechGroup&quot;
        description=&quot;Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology.&quot;
        keywords={['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']}
        canonicalUrl=&quot;https://ziontechgroup.com/demo&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {/* Hero Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
                Request a Demo
              </h1>
              <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8&quot;>
                See our AI and IT solutions in action
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>
                Schedule a personalized demonstration of our services tailored to your business needs.
                Our experts will show you exactly how we can help transform your operations.
              </p>
            </div>
          </section>
          {/* Demo Features */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              What to Expect
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {demoFeatures.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <feature.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Demo Form */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;></div>
                {/* Form */}
                <div className=&quot;cyber-card p-8&quot;></div>
                  <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Schedule Your Demo</h2>
                  <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
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
                      /></di><di v><labelhtmlFor=&quot;company&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Company Name *
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
                      /></di><di v><labelhtmlFor=&quot;service&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Service of Interest
                    </labe><selectid=&quot;service&quot;
                       name=&quot;service&quot;
                        value={formData.service}
                        onChange={handleInputChange}
                       className=&quot;w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400&quot;
                      ><optionvalue=&quot;&quot;>Selectaservice</optio><optionvalue=&quot;ai-services&quot;>AIServices</optio><optionvalue=&quot;it-services&quot;>ITServices</optio><optionvalue=&quot;cloud-services&quot;>CloudServices</optio><optionvalue=&quot;cybersecurity&quot;>Cybersecurity</optio><optionvalue=&quot;data-analytics&quot;>DataAnalytics</optio><optionvalue=&quot;custom-solution&quot;>CustomSolution</optio></selec></di><di v><labelhtmlFor=&quot;message&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Additional Information
                    </labe><textareaid=&quot;message&quot;
                       name=&quot;message&quot;
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400&quot;
                        placeholder=&quot;Tell us about your specific needs or questions&quot;
                      />
                    </div>
                    <button
                      type=&quot;submit&quot;
                      className=&quot;w-full cyber-button py-3 px-6 text-center&quot;
                    >
                      Schedule Demo
                    </button>
                  </form>
                </div>
                {/* Contact Info */}
                <div className=&quot;space-y-8&quot;></div>
                  <div className=&quot;cyber-card p-8&quot;></div>
                    <h3 className=&quot;text-xl font-bold text-white mb-6&quot;>Why Choose Our Demo?</h3>
                    <ul className=&quot;space-y-4&quot;>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Personalized to your business needs</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Live demonstration of our solutions</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>Expert consultation and Q&A</span>
                      </li>
                      <li className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>No obligation, completely free</span>
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
        <Footer />
      </div>
    </>
  )
}

export default Page;}
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
