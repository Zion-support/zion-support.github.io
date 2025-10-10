'use client';

import React from 'react';
import { 
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Zap,
  Brain,
  Cloud,
  Code
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: "AI Workflow Automation",
      description: "See how our AI can automate complex business processes",
      duration: "5 min",
      category: "AI Services",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      features: [
        "Visual workflow builder",
        "AI-powered decision making",
        "Real-time monitoring",
        "Exception handling"
      ]
    },
    {
      title: "AI Customer Support",
      description: "Experience our intelligent customer support system",
      duration: "3 min",
      category: "AI Services",
      icon: Users,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Sentiment analysis",
        "Escalation management"
      ]
    },
    {
      title: "AI Data Analytics",
      description: "Explore our advanced analytics dashboard",
      duration: "4 min",
      category: "AI Services",
      icon: Zap,
      color: "from-green-500 to-emerald-600",
      features: [
        "Real-time dashboards",
        "Predictive insights",
        "Custom reports",
        "Data visualization"
      ]
    },
    {
      title: "Cloud Migration",
      description: "Learn about our cloud migration process",
      duration: "6 min",
      category: "IT Services",
      icon: Cloud,
      color: "from-orange-500 to-red-600",
      features: [
        "Zero-downtime migration",
        "Security assessment",
        "Performance optimization",
        "24/7 support"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "The demo showed us exactly how AI could transform our operations. The ROI was clear from day one.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "The AI analytics demo was incredible. We could see the potential immediately.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Operations Director, GreenTech",
      content: "The workflow automation demo saved us hours of explanation. Our team was sold instantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Demos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience our AI and IT solutions firsthand. See how they can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our interactive demos to see our solutions in action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                      <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                        {demo.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{demo.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {demo.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${demo.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                      <Play className="w-4 h-4 mr-2" />
                      Start Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule a Live Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a personalized demonstration with our experts. See how our solutions can address your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Needs Assessment</h4>
                    <p className="text-gray-300">We'll discuss your specific requirements and challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Custom Demo</h4>
                    <p className="text-gray-300">We'll show you exactly how our solutions address your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Q&A Session</h4>
                    <p className="text-gray-300">Ask questions and get detailed answers from our experts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Next Steps</h4>
                    <p className="text-gray-300">We'll provide a customized proposal and implementation plan.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Demo Interest</label>
                  <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                    <option>AI Workflow Automation</option>
                    <option>AI Customer Support</option>
                    <option>AI Data Analytics</option>
                    <option>Cloud Migration</option>
                    <option>Custom Solution</option>
                  </select>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients have to say about our demos and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of our AI and IT solutions. Start your free demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;