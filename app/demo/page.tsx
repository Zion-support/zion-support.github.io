'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, MessageSquare, BarChart, Eye, Mic, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
<<<<<<< HEAD
  const [formData, setFormData] = useState()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData()
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
      setFormData()
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
=======
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6

  const demos = const demos = const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer queries naturally.',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Easy Integration']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'See how our AI analytics can transform your business intelligence',;
      duration: '5 min',;
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports'];
=======
      description: 'See how our AI-powered analytics can transform your data into actionable insights',
=======
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      icon: BarChart,
      features: ['Real-time Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Demo',
      description: 'Explore our computer vision capabilities for image recognition and analysis.',
      icon: Eye,
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis']
    },
    {
      id: 'voice-ai',
      title: 'Voice AI Demo',
      description: 'Test our voice AI solutions for speech recognition and synthesis.',
      icon: Mic,
      features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support']
    },
    {
      id: 'document-ai',
      title: 'Document AI Demo',
      description: 'See how our document AI can process and extract information from documents.',
      icon: FileText,
      features: ['Document Classification', 'Text Extraction', 'Form Processing', 'Data Validation']
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ];
=======
  ];

  const benefits = const benefits = const benefits = [
    'See our solutions in action',
    'Get personalized recommendations',
    'Ask questions to our experts',
    'Understand implementation process',;
    'See ROI calculations for your business';
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
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
=======
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Helmet>
        <title>Demo | Zion Tech Group - Try Our AI Solutions</title>
        <meta name="description" content="Experience our AI solutions firsthand with interactive demos. Try our chatbots, analytics, computer vision, and more." />
        <meta name="keywords" content="demo, AI demo, chatbot demo, analytics demo, computer vision, voice AI, document AI, try before you buy" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Try Our Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand with interactive demos and live examples.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose a Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select from our range of interactive demos to see our solutions in action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer rounded-lg p-6 border-2 transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {demo.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Interactive Demo
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click the play button above to start the interactive demo. You'll be able to test the features and see how our solution works in real-time.
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </button>
                </div>
              </div>
<<<<<<< HEAD

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
                          {demo.title} ({demo.duration})
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
=======
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Personal Demo
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Want to see how our solutions can work for your specific use case? Request a personalized demo with our experts.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Request Personal Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </button>
                </form>
              </div>
            </div>
<<<<<<< HEAD

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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the power of our solutions and see how they can transform your business.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </>
  );
};

export default DemoPage;