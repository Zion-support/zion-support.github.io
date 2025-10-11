'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Brain, Cloud, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [formData, setFormData] = useState();
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData();
    }));
  };

  const handleSubmit = const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData();
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our advanced AI chatbot with natural language processing and sentiment analysis',
      icon: Brain,
      features: ['Natural conversations', 'Multi-language support', 'Sentiment analysis', 'CRM integration'],
      duration: '15 minutes',
      category: 'AI Services'
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',

    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Explore our cloud solutions including AWS, Azure, and GCP with migration services',
      icon: Cloud,
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', 'Auto-scaling'],
      duration: '25 minutes',
      category: 'IT Services'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Discover how AI can automate and optimize your business processes',
      icon: Zap,
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling'],
      duration: '18 minutes',
      category: 'AI Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Learn about our comprehensive security services and threat detection',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', '24/7 monitoring'],
      duration: '22 minutes',
      category: 'IT Services'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Tools',
      description: 'Try our ready-to-use business tools with AI and automation capabilities',
      icon: Users,
      features: ['Ready-to-use tools', 'AI integration', 'Custom workflows', 'Scalable solutions'],
      duration: '30 minutes',
      category: 'Micro SaaS'
    }

  return() {demos.map((demo) => ()
                      onClick={() => setSelectedDemo(demo.id)}
                    >
                      <div className="flex items-start space-x-4" /></div>
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0" /></div>
                          <demo.icon className="w-6 h-6 text-white" /></demo>
                        </div>
                        <div className="flex-1" /></div>
                          <div className="flex items-center justify-between mb-2" /></div>
                            <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                            <span className="text-sm text-cyan-400 font-semibold">{demo.duration}</span>
                          </div>
                          <p className="text-gray-300 mb-3">{demo.description}</p>
                          <div className="flex items-center justify-between" /></div>
                            <span className="text-sm text-gray-400">{demo.category}</span>
                            <div className="flex space-x-2" /></div>
                              {demo.features.slice(0, 2).map((feature, index) => ()
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6" /></div>
                  <h3 className="text-lg font-semibold text-white mb-4">What You'll Get</h3>
                  <ul className="space-y-2" /></ul>
                    {benefits.map((benefit, index) => ()
                    ))}
                  </ul>
                </div>
              </div>

              {/* Demo Request Form */}
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
                
                {submitStatus === 'success' && ()
                )}, {submitStatus === 'error' && ()
                )}

                <form onSubmit={handleSubmit} className="space-y-6" /></form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Name *
                      </label>
                      <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Email *
                      </label>
                      <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      / /></input>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Company
                      </label>
                      <input type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Phone
                      </label>
                      <input type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      / /></input>
                    </div>
                  </div>

                  <div></div>
                    <label htmlFor="demo" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                      Demo Type
                    </label>
                    <select id="demo"
                      name="demo"
                      value={formData.demo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /></select>
                      <option value="">Select a demo</option>
                      {demos.map((demo) => ()
                          {demo.title} ({demo.duration});
                        </option>
                      ))}
                    </select>
                  </div>

                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                      Additional Requirements
                    </label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    / /></textarea>
                  </div>

                  <button type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2" /></button>
                    {isSubmitting ? ()
                    ) : ()
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" /></div>
                  <a href="tel:+13024640950"
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Clock className="w-5 h-5" / /></Clock>
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <ArrowRight className="w-5 h-5" / /></ArrowRight>
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer / /></Footer>
    </>
  );
};

export default DemoPage;