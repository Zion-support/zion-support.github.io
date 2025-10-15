import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon, 
  CalendarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demoFeatures = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered tools in action',
      duration: '15 minutes',
      features: ['Chatbot Builder', 'Document Processor', 'Data Visualizer']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure Demo',
      description: 'See our cloud solutions and monitoring',
      duration: '20 minutes',
      features: ['AWS/Azure Setup', 'Auto-scaling', 'Security Monitoring']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Demo',
      description: 'Explore our security solutions',
      duration: '25 minutes',
      features: ['Threat Detection', 'Compliance Tools', 'Security Audit']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard Demo',
      description: 'View real-time business analytics',
      duration: '10 minutes',
      features: ['Real-time Data', 'Custom Reports', 'AI Insights']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      content: 'The cloud infrastructure demo showed us how we could scale our operations efficiently.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupXYZ',
      content: 'The cybersecurity demo gave us confidence in our data protection strategy.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="Schedule a Demo - Zion Tech Group"
        description="Experience our AI and IT solutions firsthand. Schedule a personalized demo to see how we can transform your business."
        keywords="demo, AI demo, IT solutions demo, technology demonstration, business consultation"
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <PlayIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Live Demo Available</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent holographic">
                  See It In Action
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand. Schedule a personalized demo tailored to your business needs and see the transformation potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  <CalendarIcon className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  <PlayIcon className="w-5 h-5 inline mr-2" />
                  Watch Video Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo Experience</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the demo that best matches your business needs and interests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demoFeatures.map((demo, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center text-sm text-purple-400">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {demo.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Schedule This Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                How Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo Process</span> Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A simple, straightforward process to get you started with our solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Schedule',
                  description: 'Choose your preferred time and demo type',
                  icon: CalendarIcon
                },
                {
                  step: '02',
                  title: 'Prepare',
                  description: 'We prepare a customized demo for your needs',
                  icon: SparklesIcon
                },
                {
                  step: '03',
                  title: 'Demo',
                  description: 'Experience our solutions in real-time',
                  icon: PlayIcon
                },
                {
                  step: '04',
                  title: 'Discuss',
                  description: 'Q&A and next steps discussion',
                  icon: ArrowRightIcon
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform neon-border-animated">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo Attendees</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses that experienced our solutions firsthand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your personalized demo today and discover how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                <CalendarIcon className="w-5 h-5 inline mr-2" />
                Schedule Demo Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                <PlayIcon className="w-5 h-5 inline mr-2" />
                Watch Video
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;