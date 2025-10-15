import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chatbot Builder',
      description: 'See how our AI chatbot can handle customer inquiries with natural language understanding.',
      duration: '5 min',
      category: 'AI Services',
      icon: CpuChipIcon,
      features: ['Natural language processing', 'Multi-language support', 'Real-time responses', 'Integration ready']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Explore our advanced analytics platform with real-time insights and visualizations.',
      duration: '8 min',
      category: 'Analytics',
      icon: ChartBarIcon,
      features: ['Real-time dashboards', 'Custom visualizations', 'Predictive analytics', 'Export capabilities']
    },
    {
      title: 'Security Audit Tool',
      description: 'Experience our comprehensive security assessment and vulnerability scanning tools.',
      duration: '6 min',
      category: 'Security',
      icon: ShieldCheckIcon,
      features: ['Vulnerability scanning', 'Compliance checking', 'Risk assessment', 'Detailed reports']
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'See how we manage and optimize cloud resources across multiple providers.',
      duration: '10 min',
      category: 'Infrastructure',
      icon: CpuChipIcon,
      features: ['Multi-cloud support', 'Auto-scaling', 'Cost optimization', 'Monitoring']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The demo showed us exactly how AI could transform our customer service. Implementation was seamless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'VP of Technology',
      content: 'The analytics demo was impressive. We could see the value immediately and signed up the same day.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The security audit demo helped us understand our vulnerabilities and how to fix them quickly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="Live Demo - Zion Tech Group"
        description="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business."
        keywords="AI demo, IT solutions demo, technology demonstration, business automation demo"
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
                <span className="text-purple-300 text-sm font-medium">Interactive Demos</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent holographic">
                  Experience Our Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and IT solutions in action through interactive demos. Experience the power of our technology firsthand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Demo
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo Experience</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of interactive demos to see how our solutions can work for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-400 font-medium">{demo.category}</div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {demo.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Start Demo
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients experienced during their demo sessions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
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
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Schedule Live Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;