'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');

  const services = [
    {
      id: 'ai-services',
      title: 'AI Services Consultation',
      description: 'Get expert advice on AI implementation, strategy, and optimization',
      icon: Brain,
      duration: '60 minutes',
      price: 'Free',
      features: [
        'AI Strategy Assessment',
        'Technology Recommendations',
        'Implementation Roadmap',
        'ROI Analysis'
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services Consultation',
      description: 'Comprehensive IT infrastructure and security consultation',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Infrastructure Assessment',
        'Security Audit',
        'Cloud Migration Planning',
        'Cost Optimization'
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Consultation',
      description: 'Discover how micro SAAS tools can streamline your business operations',
      icon: Zap,
      duration: '45 minutes',
      price: 'Free',
      features: [
        'Tool Recommendations',
        'Integration Planning',
        'Workflow Optimization',
        'Training Requirements'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Solution Consultation',
      description: 'Tailored consultation for complex business requirements',
      icon: Users,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Custom Solution Design',
        'Technical Architecture',
        'Project Planning',
        'Budget Estimation'
      ]
    }
  ];

  const consultationProcess = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current systems and business requirements',
      duration: '15 minutes'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'We design a customized solution based on your needs',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'We create a detailed roadmap for implementation',
      duration: '20 minutes'
    },
    {
      step: 4,
      title: 'Q&A Session',
      description: 'We answer all your questions and address concerns',
      duration: '15 minutes'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Analysis',
      description: 'Get insights from our experienced consultants and solution architects'
    },
    {
      icon: Star,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Identify potential challenges and mitigation strategies'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Get actionable recommendations within 24-48 hours'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechStart Solutions',
      role: 'CTO',
      content: 'The consultation helped us identify the right AI tools for our business. The implementation roadmap was exactly what we needed.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'DataCorp Inc',
      role: 'VP of Operations',
      content: 'The IT consultation saved us thousands of dollars by identifying cost optimization opportunities we never knew existed.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      company: 'InnovateLab',
      role: 'CEO',
      content: 'The micro SAAS consultation opened our eyes to tools that have significantly improved our productivity and efficiency.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Free</h1></<<h1>Consultation</h1><p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Get expert advice on how to transform your business with AI and technology solutions. Our free consultation will help you identify opportunities and create a roadmap for success.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-cyan-400" /></CheckCircl>
              <span className="text-white font-medium">100% Free</spa>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <Users className="w-5 h-5 text-purple-400" /></User>
              <span className="text-white font-medium">Expert Guidance</spa>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Star className="w-5 h-5 text-green-400" /></Sta>
              <span className="text-white font-medium">Customized Solutions</spa>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Choose</h2></<<h2>Your</h2> Consultation<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>{services.map((service) => (<div
                key={service.id}
                onClick={() =>setSelectedService(service.id)}</div></<<<di>className</di></di>={`cyber-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id ? 'ring-2 ring-cyan-400 bg-cyan-500/10' : 'hover:bg-slate-700/50'
                }`}</div>
              ></div>
                <div className="text-center"></div>
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></servic>
                  <h3 className="text-xl font-bold text-white mb-2"></h>{service.title}<p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-center text-cyan-400 text-sm mb-4"></div>
                    <Clock className="w-4 h-4 mr-1" >{service.duration}</Clock><div className="text-2 xl font-bold text-green-400 mb-4"></div>{service.price}<ul className="space-y-1 text-xs text-gray-400">{service.features.map((feature, index) => (</u>
                      <li key={index} className="flex items-center"></l>
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircl>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Process */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Our</h2></<<h2>Consultation</h2> Process<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{consultationProcess.map((step, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2 xl font-bold text-white"></spa>{step.step}<h3 className="text-lg font-bold text-white mb-2">{step.title}</h>
                  <p className="text-gray-300 text-sm mb-2"></p>{step.description}<div className="text-cyan-400 text-xs">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our Consultation?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <benefit.icon className="w-8 h-8 text-white" /></benefi>
                <h3 className="text-lg font-bold text-white mb-2"></h>{benefit.title}<p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>What</h2></<<h2>Our</h2> Clients Say<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex justify-center mb-4"></div>{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}</Star><p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                <div className="text-center"></div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4><p className="text-cyan-400 text-sm"></p>{testimonial.role}<p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text">Schedule Your Free Consultation</h>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Consultation Details</h>
                <div className="space-y-4"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Selected Service</label><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{services.find(s => s.id === selectedService)?.title}</div>
                    </div>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{services.find(s => s.id === selectedService)?.duration}</div>
                    </div>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</labe>
                    <input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your company name"
                    /></inpu>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</labe>
                    <input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your full name"
                    /></inpu>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</labe>
                    <input
                      type="email"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your.email@company.com"
                    /></inpu>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</labe>
                    <input
                      type="tel"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    /></inpu>
                  </div>
                </div>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Preferred Time</h>
                <div className="space-y-4"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</labe>
                    <input
                      type="date"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                    /></inpu>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Time</labe>
                    <select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"></selec>
                      <option>9:00 AM - 10:00 AM</option><option>10:00 AM - 11:00 AM</optio>
                      <option>11:00 AM - 12:00 PM</option><option>1:00 PM - 2:00 PM</optio>
                      <option>2:00 PM - 3:00 PM</option><option>3:00 PM - 4:00 PM</option><option>4:00 PM - 5:00 PM</optio>
                    </select>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Time Zone</labe>
                    <select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"></selec>
                      <<<<option>Eastern</option></<<option>Time</option> (ET)<<<<option>Central</option></<<option>Time</option> (CT)</option>
                      <<<<option>Mountain</option></<<option>Time</option> (MT)<<<<option>Pacific</option></<<option>Time</option> (PT)<<<<option>GMT</option></option>
                    </select>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Current Challenges</labe>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your current challenges and what you hope to achieve..."
                    /></textare>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"></butto>
                <Calendar className="w-5 h-5 mr-2" >Schedule Free Consultation</Calenda>
                </Calendar><ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Need</h2></<<h2>Help</h2> Scheduling?<p className="text-gray-300 mb-6">If you need assistance scheduling your consultation or have questions about our services, our team is here to help.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              <div className="text-center"></div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Phon>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></<<<h3>Call</h3></<<h3>Us</h3><p className="text-gray-300 mb-2"></p>+1 (302) 464-0950<p className="text-sm text-gray-400">Mon-Fri 9 AM-6 PM EST</p>
              </div>
              <div className="text-center"></div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Mai>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></<<<h3>Email</h3></<<h3>Us</h3><p className="text-gray-300 mb-2"></p></<<<p>consultation</p>@ziontechgroup.com<p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>
              <div className="text-center"></div>
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Calenda>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></<<<h3>Book</h3></<<h3>Online</h3><p className="text-gray-300 mb-2"></p></<<<p>Instant</p></<<p>scheduling</p><p className="text-sm text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default ConsultationPage;