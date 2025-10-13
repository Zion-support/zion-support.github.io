import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Play, 
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  Brain,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  Monitor,
  Smartphone,
  CheckCircle,
  Target,
  TrendingUp
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions in action',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Analytics Dashboard',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Machine Learning Models'
      ],
      videoUrl: '/demos/ai-services-demo.mp4',
      duration: '5 minutes'
    },
    {
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'See our comprehensive IT solutions',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Cloud Infrastructure',
        'Cybersecurity Solutions',
        'DevOps Automation',
        '5G Network Setup',
        'Data Center Management'
      ],
      videoUrl: '/demos/it-services-demo.mp4',
      duration: '7 minutes'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Demo',
      description: 'Explore our ready-to-use software solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Inventory Management',
        'HR Assistant Pro',
        'Analytics Dashboard',
        'Customer Support Bot',
        'Workflow Automation'
      ],
      videoUrl: '/demos/micro-saas-demo.mp4',
      duration: '6 minutes'
    }
  ];

  const interactiveFeatures = [
    {
      title: 'Live Dashboard',
      description: 'Interact with our real-time analytics dashboard',
      icon: <BarChart3 className="w-6 h-6" />,
      status: 'Available'
    },
    {
      title: 'AI Chatbot',
      description: 'Test our AI-powered customer support chatbot',
      icon: <Brain className="w-6 h-6" />,
      status: 'Available'
    },
    {
      title: 'Mobile App',
      description: 'Try our mobile application features',
      icon: <Smartphone className="w-6 h-6" />,
      status: 'Available'
    },
    {
      title: 'API Testing',
      description: 'Test our APIs with sample data',
      icon: <Settings className="w-6 h-6" />,
      status: 'Available'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc",
      role: "CTO",
      content: "The demo was incredibly impressive. We could see exactly how the AI would integrate with our existing systems.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "Operations Director",
      content: "The interactive features helped us understand the full potential of the platform. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Manufacturing Corp",
      role: "IT Director",
      content: "The demo team was knowledgeable and answered all our questions. The platform exceeded our expectations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Demo - Experience Our Solutions | Zion Tech Group</title>
        <meta name="description" content="Experience our AI services, IT solutions, and micro SAAS platforms through interactive demos. See how our solutions can transform your business." />
        <meta name="keywords" content="demo, product demo, AI demo, IT solutions demo, micro SAAS demo, interactive demo" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Play className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Interactive Product Demos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Experience Our Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            See our AI services, IT solutions, and micro SAAS platforms in action. 
            Interactive demos that show you exactly how our solutions work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#demos"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Demo
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Live Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Demo Selection */}
      <section id="demos" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the demo that interests you most and see our solutions in action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {demos.map((demo) => (
              <FuturisticCard
                key={demo.id}
                className={`group hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeDemo === demo.id ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center justify-center text-sm text-blue-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={`#demo-${demo.id}`}
                  variant={activeDemo === demo.id ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {activeDemo === demo.id ? 'Watching Now' : 'Watch Demo'}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Active Demo Display */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="max-w-6xl mx-auto">
            {demos.map((demo) => (
              activeDemo === demo.id && (
                <div key={demo.id} id={`demo-${demo.id}`} className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">{demo.title}</h3>
                  
                  {/* Video Placeholder */}
                  <div className="relative bg-slate-800 rounded-xl overflow-hidden mb-8">
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white text-lg mb-2">Demo Video</p>
                        <p className="text-gray-400 text-sm">Click to play {demo.title}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">What You'll See</h4>
                      <ul className="space-y-2">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300">
                          <Target className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          Improved efficiency and productivity
                        </li>
                        <li className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          Better decision making with data insights
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Shield className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          Enhanced security and compliance
                        </li>
                        <li className="flex items-center text-gray-300">
                          <Zap className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          Automated processes and workflows
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Interactive Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interactive Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Try our interactive features and see how they work in real-time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {interactiveFeatures.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {feature.status}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our demos helped businesses make informed decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized demo with our experts and see how our solutions 
              can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Play className="w-5 h-5" />}
              >
                Schedule Live Demo
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free personalized demo • No commitment required • Expert consultation</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Demo;