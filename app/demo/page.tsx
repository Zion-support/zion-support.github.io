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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Book</h1></<<h1>a</h1> Demo<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">See our AI and IT solutions in action. Schedule a personalized demo to discover how we can transform your business.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
              <Play className="w-5 h-5 text-cyan-400" /></Pla>
              <span className="text-white font-medium">Live Demo</spa>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <Users className="w-5 h-5 text-purple-400" /></User>
              <span className="text-white font-medium">Expert Guidance</spa>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-green-400" /></CheckCircl>
              <span className="text-white font-medium">Q&A Session</spa>
            </div>
          </div>
        </section>

        {/* Demo Types */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Choose</h2></<<h2>Your</h2> Demo<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>{demos.map((demo) => (<div
                key={demo.id}
                onClick={() =>setSelectedDemo(demo.id)}</div></<<<di>className</di></di>={`cyber-card p-6 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id ? 'ring-2 ring-cyan-400 bg-cyan-500/10' : 'hover:bg-slate-700/50'
                }`}</div>
              ></div>
                <div className="text-center"></div>
                  <div className="text-4 xl mb-4"></div>{demo.icon}<h3 className="text-xl font-bold text-white mb-2"></h>{demo.title}<p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center justify-center text-cyan-400 text-sm mb-4"></div>
                    <Clock className="w-4 h-4 mr-1" >{demo.duration}</Clock><ul className="space-y-1 text-xs text-gray-400">{demo.features.map((feature, index) => (</u>
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

        {/* Demo Benefits */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>What</h2></<<h2>to</h2> Expect<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8 h-8 text-white" /></benefi>
                  <h3 className="text-lg font-bold text-white mb-2"></h>{benefit.title}<p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text">Schedule Your Demo</h>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Demo Information</h>
                <div className="space-y-4"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Selected Demo</label><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{demos.find(d => d.id === selectedDemo)?.title}</div>
                    </div>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label><div className="bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white">{demos.find(d => d.id === selectedDemo)?.duration}</div>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</labe>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="Tell us about your specific needs or questions..."
                    /></textare>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-700 transition-all inline-flex items-center"></butto>
                <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
                </Calendar><ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Need</h2></<<h2>Help</h2> Scheduling?<p className="text-gray-300 mb-6">If you need assistance scheduling your demo or have questions about our solutions, our team is here to help.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
              <div className="text-center"></div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Phon>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></<<<h3>Call</h3></<<h3>Us</h3><p className="text-gray-300 mb-2"></p>+1 (302) 464-0950<p className="text-sm text-gray-400">Mon-Fri 9 AM-6 PM EST</p>
              </div>
              <div className="text-center"></div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" /></Mai>
                <h3 className="text-lg font-semibold text-white mb-2"></h3></<<<h3>Email</h3></<<h3>Us</h3><p className="text-gray-300 mb-2"></p></<<<p>demo</p>@ziontechgroup.com<p className="text-sm text-gray-400">Response within 24 hours</p>
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

export default DemoPage;