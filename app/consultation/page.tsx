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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Free Consultat</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">i</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">o</h1>n</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get expert advice on how to transform your business with AI and technology solutions. Our free consultation will help you identify opportunities and create a roadmap for succes</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-wrap justify-center gap-4">
           </div className="flex flex-wrap justify-center gap-4"> </div className="flex flex-wrap justify-center gap-4"><div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"> </div><CheckCircle className="w-5 h-5 text-cyan-400" />
             </CheckCircle className="w-5 h-5 text-cyan-400" /> </CheckCircle className="w-5 h-5 text-cyan-400" /><span className="text-white font-medium">100% F</span className="text-white font-medium">r</span className="text-white font-medium">e</span>e</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div><Users className="w-5 h-5 text-purple-400" />
             </Users className="w-5 h-5 text-purple-400" /> </Users className="w-5 h-5 text-purple-400" /><span className="text-white font-medium">Expert Guida</span className="text-white font-medium">n</span className="text-white font-medium">c</span>e</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div><Star className="w-5 h-5 text-green-400" />
             </Star className="w-5 h-5 text-green-400" /> </Star className="w-5 h-5 text-green-400" /><span className="text-white font-medium">Customized Soluti</span className="text-white font-medium">o</span className="text-white font-medium">n</span>s</span>
          <//span> <//span> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Consultation Types */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Choose Your Consultatio</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">n</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service) => </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">(</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div
                key={service.id}
                onClick={() =>setSelectedService(service.id)}
                className={`cyber-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id ? 'ring-2 ring-cyan-400 bg-cyan-500/10' : 'hover:bg-slate-700/50'
                </div
                key={service.id}
                onClick={() =>}</div
                key={service.id}
                onClick={() =>`</div>}</div>
             <//div> <//div>></div>
               <//div> <//div><div className="text-center">
                </div className="text-center"> </div className="text-center"> </div><service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                 </service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /> </service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">{service.title</h3 className="text-xl font-bold text-white mb-2">}</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 text-sm mb-4">{service.descriptio</p className="text-gray-300 text-sm mb-4">n</p className="text-gray-300 text-sm mb-4">}</p>
                 <//p> <//p><div className="flex items-center justify-center text-cyan-400 text-sm mb-4">
                  </div className="flex items-center justify-center text-cyan-400 text-sm mb-4"> </div className="flex items-center justify-center text-cyan-400 text-sm mb-4"> </div><Clock className="w-4 h-4 mr-1" >{service.duration</Clock className="w-4 h-4 mr-1" >}</Clock className="w-4 h-4 mr-1" ><div className="text-2xl font-bold text-green-400 mb-4">{service.pric</div className="text-2xl font-bold text-green-400 mb-4">e</div className="text-2xl font-bold text-green-400 mb-4">}</div><ul className="space-y-1 text-xs text-gray-400">{service.features.map((feature, index) =></ul className="space-y-1 text-xs text-gray-400"> </ul className="space-y-1 text-xs text-gray-400">(</ul>
                     <//ul> <//ul><li key={index} className="flex items-center">
                       </li key={index} className="flex items-center"> </li key={index} className="flex items-center"><CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{featur</CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >e</CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >}</CheckCircle>
                    <//CheckCircle> <//CheckCircle> </CheckCircle>
                    ))}
                <//CheckCircle> <//CheckCircle> </ul>
              <//ul> <//ul> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Consultation Process */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Our Consultation Proces</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{consultationProcess.map((step, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="text-center">
                 </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"> </div><span className="text-2xl font-bold text-white">{step.ste</span className="text-2xl font-bold text-white">p</span className="text-2xl font-bold text-white">}</span><h3 className="text-lg font-bold text-white mb-2">{step.titl</h3 className="text-lg font-bold text-white mb-2">e</h3 className="text-lg font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><p className="text-gray-300 text-sm mb-2">{step.description</p className="text-gray-300 text-sm mb-2">}</p className="text-gray-300 text-sm mb-2"><div className="text-cyan-400 text-xs">{step.durati</div className="text-cyan-400 text-xs">o</div className="text-cyan-400 text-xs">n</div>}</div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Benefits */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Consultation</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">?</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6 text-center">
               </div key={index} className="cyber-card p-6 text-center"> </div key={index} className="cyber-card p-6 text-center"><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div><benefit.icon className="w-8 h-8 text-white" />
               </benefit.icon className="w-8 h-8 text-white" /> </benefit.icon className="w-8 h-8 text-white" /><h3 className="text-lg font-bold text-white mb-2">{benefit.title</h3 className="text-lg font-bold text-white mb-2">}</h3 className="text-lg font-bold text-white mb-2"><p className="text-gray-300 text-sm">{benefit.descriptio</p className="text-gray-300 text-sm">n</p className="text-gray-300 text-sm">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Testimonials */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">What Our Clients Sa</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">y</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex justify-center mb-4">{[...Array(5)].map((_, i) =></div className="flex justify-center mb-4"> </div className="flex justify-center mb-4">(</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >}</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" ><p className="text-gray-300 italic mb-4">"{testimonial.content</p className="text-gray-300 italic mb-4">}</p className="text-gray-300 italic mb-4">"</p>
               <//p> <//p><div className="text-center">
                </div className="text-center"> </div className="text-center"> </div><h4 className="text-white font-bold">{testimonial.name</h4 className="text-white font-bold">}</h4 className="text-white font-bold"><p className="text-cyan-400 text-sm">{testimonial.role</p className="text-cyan-400 text-sm">}</p className="text-cyan-400 text-sm"><p className="text-gray-400 text-sm">{testimonial.compan</p className="text-gray-400 text-sm">y</p className="text-gray-400 text-sm">}</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Booking Form */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Schedule Your Free Consultati</h2 className="text-2xl font-bold text-white mb-6 neon-text">o</h2 className="text-2xl font-bold text-white mb-6 neon-text">n</h2>
           <//h2> <//h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> </div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Consultation Detai</h3 className="text-xl font-semibold text-cyan-400 mb-4">l</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Selected Servic</label className="block text-sm font-medium text-gray-300 mb-2">e</label className="block text-sm font-medium text-gray-300 mb-2"><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{services.find(s => s.id === selectedService)?.tit</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">l</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">e</div>}</div>
                  <//div> <//div> </div>
                <//div> <//div> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Duratio</label className="block text-sm font-medium text-gray-300 mb-2">n</label className="block text-sm font-medium text-gray-300 mb-2"><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{services.find(s => s.id === selectedService)?.durati</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">o</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">n</div>}</div>
                  <//div> <//div> </div>
                <//div> <//div> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Company Na</label className="block text-sm font-medium text-gray-300 mb-2">m</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                   <//label> <//label><input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your company name"
                    />
                </input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your company name"
                    /> </input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your company name"
                    /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Your Na</label className="block text-sm font-medium text-gray-300 mb-2">m</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                   <//label> <//label><input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                </input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your full name"
                    /> </input
                      type="text"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Your full name"
                    /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Email Addre</label className="block text-sm font-medium text-gray-300 mb-2">s</label className="block text-sm font-medium text-gray-300 mb-2">s</label>
                   <//label> <//label><input
                      type="email"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your.email@company.com"
                    />
                </input
                      type="email"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your.email@company.com"
                    /> </input
                      type="email"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="your.email@company.com"
                    /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Phone Numb</label className="block text-sm font-medium text-gray-300 mb-2">e</label className="block text-sm font-medium text-gray-300 mb-2">r</label>
                   <//label> <//label><input
                      type="tel"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    />
                </input
                      type="tel"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    /> </input
                      type="tel"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="+1 (555) 123-4567"
                    /> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Preferred Ti</h3 className="text-xl font-semibold text-cyan-400 mb-4">m</h3 className="text-xl font-semibold text-cyan-400 mb-4">e</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Da</label className="block text-sm font-medium text-gray-300 mb-2">t</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                   <//label> <//label><input
                      type="date"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                    />
                </input
                      type="date"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                    /> </input
                      type="date"
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                    /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Ti</label className="block text-sm font-medium text-gray-300 mb-2">m</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                   <//label> <//label><select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400">
                     </select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"> </select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"><option>9:00 AM - 10:00 A</option>M</option><option>10:00 AM - 11:00 </option>A</option>M</option>
                     <//option> <//option><option>11:00 AM - 12:00 P</option>M</option><option>1:00 PM - 2:00 </option>P</option>M</option>
                     <//option> <//option><option>2:00 PM - 3:00 P</option>M</option><option>3:00 PM - 4:00 P</option>M</option><option>4:00 PM - 5:00 </option>P</option>M</option>
                  <//option> <//option> </select>
                <//select> <//select> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Time Zo</label className="block text-sm font-medium text-gray-300 mb-2">n</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                   <//label> <//label><select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400">
                     </select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"> </select className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"><option>Eastern Time (ET</option>)</option><option>Central Time (C</option>T</option>)</option>
                     <//option> <//option><option>Mountain Time (MT</option>)</option><option>Pacific Time (PT</option>)</option><option>G</option>M</option>T</option>
                  <//option> <//option> </select>
                <//select> <//select> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Current Challeng</label className="block text-sm font-medium text-gray-300 mb-2">e</label className="block text-sm font-medium text-gray-300 mb-2">s</label>
                   <//label> <//label><textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your current challenges and what you hope to achieve..."
                    />
                </textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your current challenges and what you hope to achieve..."
                    /> </textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your current challenges and what you hope to achieve..."
                    /> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
           <//div> <//div><div className="mt-8 text-center">
            </div className="mt-8 text-center"> </div className="mt-8 text-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center">
               </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"><Calendar className="w-5 h-5 mr-2" >Schedule Free Consultati</Calendar className="w-5 h-5 mr-2" >o</Calendar className="w-5 h-5 mr-2" >n</Calendar>
              <//Calendar> <//Calendar> </Calendar><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Need Help Schedulin</h2 className="text-2xl font-bold text-white mb-6 neon-text">g</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">If you need assistance scheduling your consultation or have questions about our services, our team is here to hel</p className="text-gray-300 mb-6">p</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-3 gap-6"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
               </Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /> </Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white mb-2">Call U</h3 className="text-lg font-semibold text-white mb-2">s</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-300 mb-2">+1 (302) 464-095</p className="text-gray-300 mb-2">0</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">Mon-Fri 9AM-6PM E</p className="text-sm text-gray-400">S</p className="text-sm text-gray-400">T</p>
            <//p> <//p> </div>
             <//div> <//div><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
               </Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /> </Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white mb-2">Email U</h3 className="text-lg font-semibold text-white mb-2">s</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-300 mb-2">consultation@ziontechgroup.co</p className="text-gray-300 mb-2">m</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">Response within 24 hou</p className="text-sm text-gray-400">r</p className="text-sm text-gray-400">s</p>
            <//p> <//p> </div>
             <//div> <//div><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
               </Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" /> </Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white mb-2">Book Onlin</h3 className="text-lg font-semibold text-white mb-2">e</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-300 mb-2">Instant schedulin</p className="text-gray-300 mb-2">g</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">Available 24</p className="text-sm text-gray-400">/</p className="text-sm text-gray-400">7</p>
            <//p> <//p> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default ConsultationPage<//div>;<//div>