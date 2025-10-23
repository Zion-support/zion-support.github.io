'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone, Mail } from 'lucide-react'
import { Clock } from 'lucide-react';
import { CheckCircle, Star, Phone, Mail, Check, Clock } from 'lucide-react';
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {CheckCircle, Phone, Mail, Star} from 'lucide-react';
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';

constDemoPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission;
    const subject = `Demo Request from ${formData.name} - ${formData.company}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
 });

  consthandleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {const{namevalue} = e.targetsetFormData(prev=> ({...prev,
      [name]: value;
   }));
  };

  consthandleSubmit= (e: React.FormEvent) => {e.preventDefault();
    // Handle formsubmissionconstsubject= `Demo Request from${formData.name} -${formData.company}`;
    constbody= `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage:${formData.message}`;
    windo w.location.href= `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
   }
  ];

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
      rating: 5;
    }
  ]
      rating:5}
  ];

  return (
  <><SEOOptimizertitle="Request a Demo - ZionTechGroup"
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords={['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Request a Demo</h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                See our AI and IT solutions in action</p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Schedule a personalized demonstration of our services tailored to your business needs.
                Our experts will show you exactly how we can help transform your operations.
              </p>
            </div>
          </section>
          {/* Demo Features */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Demo Form */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="cyber-card p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input;
                        type="text"
                        id="name"
                        name="name"
                        required;
                        value={formData.name}
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">Request a Demo</h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">See our AI and IT solutions in action</p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Schedule a personalized demonstration of our services tailored to your business needs. 
                Our experts will show you exactly how we can help transform your operations.
            </p></di></sectio>{/* DemoFeatures */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">What to Expect</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{demoFeatures.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300">{feature.description}</p></di>))}
          </di></sectio>{/* DemoForm */}
        <sectionclassName="container mx-auto px-4py-16"><divclassName="max-w-4xlmx-auto"><divclassName="grid grid-cols-1 lg:grid-cols-2gap-12">{/* Form */}
              <divclassName="cyber-cardp-8"><h2className="text-2 xl font-boldtext-whitemb-6">ScheduleYourDemo</h><formonSubmit={handleSubmit}className="space-y-6"><di v><labelhtmlFor="name"className="block text-sm font-medium text-gray-300mb-2">Full Name *
                    </labe><inputtype="text"
                       id="name"
                       name="name"
                        requiredvalue={formData.name}
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
                      /></di><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company Name *
                    </labe><inputtype="text"
                       id="company"
                       name="company"
                        requiredvalue={formData.company}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter your companyname"
                      /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number</labe><inputtype="tel"
                       id="phone"
                       name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter your phonenumber"
                      /></di><di v><labelhtmlFor="service"className="block text-sm font-medium text-gray-300mb-2">Service of Interest</labe><selectid="service"
                       name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                      ><optionvalue="">Selectaservice</optio><optionvalue="ai-services">AIServices</optio><optionvalue="it-services">ITServices</optio><optionvalue="cloud-services">CloudServices</optio><optionvalue="cybersecurity">Cybersecurity</optio><optionvalue="data-analytics">DataAnalytics</optio><optionvalue="custom-solution">CustomSolution</optio></selec></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Additional Information</labe><textareaid="message"
                       name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Tell us about your specific needs or questions"
                      />
                    </div>
                    <button;
                      type="submit"
                      className="w-full cyber-button py-3 px-6 text-center"
                    >
                      Schedule Demo</button>
                  </form>
                </div>
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Demo?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Personalized to your business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Live demonstration of our solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Expert consultation and Q&A</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">No obligation, completely free</span>
                      </li>
                    </ul>
                  </div>
                  <div className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
                          (302) 464-0950</a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
                          kleber@ziontechgroup.com</a>
                      </div>
                      <div className="flex items-center">
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
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div>
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
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Tell us about your specific needs orquestions"
                      /></di><
                     type="submit"
                     className="w-full cyber-button py-3px-6text-center"
                    ></
                     type="submit"
                     className="w-full cyber-button py-3px-6text-center"
                    >Schedule Demo</butto></for></di>{/* ContactInfo */}
              <divclassName="space-y-8"><divclassName="cyber-cardp-8"><h3className="text-xl font-boldtext-whitemb-6">Why ChooseOurDemo?</h><ulclassName="space-y-4"><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Personalized to yourbusinessneeds</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Live demonstration ofoursolutions</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Expert consultationandQ&A</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">No obligation,completelyfree</spa></l></u></di><divclassName="cyber-cardp-8"><h3className="text-xl font-boldtext-whitemb-6">ContactInformation</h><divclassName="space-y-4"><divclassName="flexitems-center"><PhoneclassName="w-5 h-5 text-cyan-400mr-3" /><ahref="tel:+13024640950"className="text-gray-300hover:text-cyan-400">(30 2)464-0950</a></di><divclassName="flexitems-center"><MailclassName="w-5 h-5 text-cyan-400mr-3" /><ahref="mailto:kleber@ziontechgroup.com"className="text-gray-300hover:text-cyan-400">kleber@ziontechgroup.com</a></di><divclassName="flexitems-center"><ClockclassName="w-5 h-5 text-cyan-400mr-3" /><spanclassName="text-gray-300">Mon-Fri:9AM-6PMEST</spa></di></di></di></di></di></di></sectio>{/* Testimonials */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">What Our Clients Say</h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
             <divkey={index}className="cyber-cardp-6"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                   <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
                </di><pclassName="text-gray-300mb-4">"{testimonial.text}"</p><di v><divclassName="font-boldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.company}</di></di></di>))}
          </di></sectio></mai><Footer /></di></>
  );
};

export default DemoPage;