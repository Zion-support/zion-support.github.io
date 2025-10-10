'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions including content generation, analytics, and automation',
      duration: '30 minutes',
      features: [
        'AI Content Generation',
        'Predictive Analytics',
        'Workflow Automation',
        'Natural Language Processing'
      ],
      icon: '🤖'
    },
    {
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'See our comprehensive IT solutions including cloud migration, security, and infrastructure',
      duration: '45 minutes',
      features: [
        'Cloud Migration Tools',
        'Security Monitoring',
        'Infrastructure Management',
        'DevOps Automation'
      ],
      icon: '☁️'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Demo',
      description: 'Explore our micro SAAS tools for project management, content creation, and business automation',
      duration: '25 minutes',
      features: [
        'Project Management',
        'Content Creation',
        'Email Marketing',
        'Financial Analytics'
      ],
      icon: '💻'
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Customized Solution',
        'Industry-Specific Features',
        'Integration Examples',
        'ROI Analysis'
      ],
      icon: '🎯'
    }
  ];

  const benefits = [
    {
      icon: Play,
      title: 'Live Demonstration',
      description: 'See our solutions in action with real-time demonstrations'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get insights from our technical experts and solution architects'
    },
    {
      icon: CheckCircle,
      title: 'Q&A Session',
      description: 'Ask questions and get detailed answers about our solutions'
    },
    {
      icon: Star,
      title: 'Customized Experience',
      description: 'Tailored demo based on your specific business needs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would integrate with our existing systems.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLab',
      role: 'CEO',
      content: 'The custom demo helped us understand the ROI potential. The team was knowledgeable and answered all our questions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Dynamics',
      role: 'Operations Director',
      content: 'The micro SAAS demo showed us tools we never knew we needed. The implementation process was clearly explained.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Book a D</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">e</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">m</h1>o</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">See our AI and IT solutions in action. Schedule a personalized demo to discover how we can transform your busines</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-wrap justify-center gap-4">
           </div className="flex flex-wrap justify-center gap-4"> </div className="flex flex-wrap justify-center gap-4"><div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"> </div><Play className="w-5 h-5 text-cyan-400" />
             </Play className="w-5 h-5 text-cyan-400" /> </Play className="w-5 h-5 text-cyan-400" /><span className="text-white font-medium">Live D</span className="text-white font-medium">e</span className="text-white font-medium">m</span>o</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div><Users className="w-5 h-5 text-purple-400" />
             </Users className="w-5 h-5 text-purple-400" /> </Users className="w-5 h-5 text-purple-400" /><span className="text-white font-medium">Expert Guida</span className="text-white font-medium">n</span className="text-white font-medium">c</span>e</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div><CheckCircle className="w-5 h-5 text-green-400" />
             </CheckCircle className="w-5 h-5 text-green-400" /> </CheckCircle className="w-5 h-5 text-green-400" /><span className="text-white font-medium">Q&A Sess</span className="text-white font-medium">i</span className="text-white font-medium">o</span>n</span>
          <//span> <//span> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Demo Types */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Choose Your Dem</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">o</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{demos.map((demo) => </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">(</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div
                key={demo.id}
                onClick={() =>setSelectedDemo(demo.id)}
                className={`cyber-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id ? 'ring-2 ring-cyan-400 bg-cyan-500/10' : 'hover:bg-slate-700/50'
                </div
                key={demo.id}
                onClick={() =>}</div
                key={demo.id}
                onClick={() =>`</div>}</div>
             <//div> <//div>></div>
               <//div> <//div><div className="text-center">
                 </div className="text-center"> </div className="text-center"><div className="text-4xl mb-4">{demo.ico</div className="text-4xl mb-4">n</div className="text-4xl mb-4">}</div><h3 className="text-xl font-bold text-white mb-2">{demo.title</h3 className="text-xl font-bold text-white mb-2">}</h3 className="text-xl font-bold text-white mb-2"><p className="text-gray-300 text-sm mb-4">{demo.descriptio</p className="text-gray-300 text-sm mb-4">n</p className="text-gray-300 text-sm mb-4">}</p>
                 <//p> <//p><div className="flex items-center justify-center text-cyan-400 text-sm mb-4">
                  </div className="flex items-center justify-center text-cyan-400 text-sm mb-4"> </div className="flex items-center justify-center text-cyan-400 text-sm mb-4"> </div><Clock className="w-4 h-4 mr-1" >{demo.duration</Clock className="w-4 h-4 mr-1" >}</Clock className="w-4 h-4 mr-1" ><ul className="space-y-1 text-xs text-gray-400">{demo.features.map((feature, index) =></ul className="space-y-1 text-xs text-gray-400"> </ul className="space-y-1 text-xs text-gray-400">(</ul>
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

        {/* Demo Benefits */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">What to Expec</h2 className="text-2xl font-bold text-white mb-6 neon-text">t</h2 className="text-2xl font-bold text-white mb-6 neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="text-center">
                 </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"> </div><benefit.icon className="w-8 h-8 text-white" />
                 </benefit.icon className="w-8 h-8 text-white" /> </benefit.icon className="w-8 h-8 text-white" /><h3 className="text-lg font-bold text-white mb-2">{benefit.title</h3 className="text-lg font-bold text-white mb-2">}</h3 className="text-lg font-bold text-white mb-2"><p className="text-gray-300 text-sm">{benefit.descriptio</p className="text-gray-300 text-sm">n</p className="text-gray-300 text-sm">}</p>
              <//p> <//p> </div>
              ))}
          <//div> <//div> </div>
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
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Schedule Your De</h2 className="text-2xl font-bold text-white mb-6 neon-text">m</h2 className="text-2xl font-bold text-white mb-6 neon-text">o</h2>
           <//h2> <//h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> </div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Demo Informati</h3 className="text-xl font-semibold text-cyan-400 mb-4">o</h3 className="text-xl font-semibold text-cyan-400 mb-4">n</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Selected Dem</label className="block text-sm font-medium text-gray-300 mb-2">o</label className="block text-sm font-medium text-gray-300 mb-2"><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{demos.find(d => d.id === selectedDemo)?.tit</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">l</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">e</div>}</div>
                  <//div> <//div> </div>
                <//div> <//div> </div>
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Duratio</label className="block text-sm font-medium text-gray-300 mb-2">n</label className="block text-sm font-medium text-gray-300 mb-2"><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{demos.find(d => d.id === selectedDemo)?.durati</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">o</div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">n</div>}</div>
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
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Additional Not</label className="block text-sm font-medium text-gray-300 mb-2">e</label className="block text-sm font-medium text-gray-300 mb-2">s</label>
                   <//label> <//label><textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                </textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs or questions..."
                    /> </textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs or questions..."
                    /> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
           <//div> <//div><div className="mt-8 text-center">
            </div className="mt-8 text-center"> </div className="mt-8 text-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center">
               </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"> </button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"><Calendar className="w-5 h-5 mr-2" >Schedule De</Calendar className="w-5 h-5 mr-2" >m</Calendar className="w-5 h-5 mr-2" >o</Calendar>
              <//Calendar> <//Calendar> </Calendar><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Need Help Schedulin</h2 className="text-2xl font-bold text-white mb-6 neon-text">g</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">If you need assistance scheduling your demo or have questions about our solutions, our team is here to hel</p className="text-gray-300 mb-6">p</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-3 gap-6"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
               </Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /> </Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white mb-2">Call U</h3 className="text-lg font-semibold text-white mb-2">s</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-300 mb-2">+1 (302) 464-095</p className="text-gray-300 mb-2">0</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">Mon-Fri 9AM-6PM E</p className="text-sm text-gray-400">S</p className="text-sm text-gray-400">T</p>
            <//p> <//p> </div>
             <//div> <//div><div className="text-center">
              </div className="text-center"> </div className="text-center"> </div><Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
               </Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /> </Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white mb-2">Email U</h3 className="text-lg font-semibold text-white mb-2">s</h3 className="text-lg font-semibold text-white mb-2"><p className="text-gray-300 mb-2">demo@ziontechgroup.co</p className="text-gray-300 mb-2">m</p className="text-gray-300 mb-2"><p className="text-sm text-gray-400">Response within 24 hou</p className="text-sm text-gray-400">r</p className="text-sm text-gray-400">s</p>
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

export default DemoPage<//div>;<//div>