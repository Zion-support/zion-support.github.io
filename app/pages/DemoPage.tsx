import React, { useState } from 'react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Brain,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  Play,
  Calendar,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action',
      icon: Brain,
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbot Interface',
        'Data Visualization',
        'Real-time Insights'
      ],
      duration: '15 minutes',
      category: 'AI & Machine Learning'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Platform',
      description: 'Explore our scalable software-as-a-service solutions',
      icon: Cpu,
      features: [
        'Project Management',
        'Content Creation',
        'Analytics Dashboard',
        'Email Marketing',
        'User Management',
        'API Integration'
      ],
      duration: '20 minutes',
      category: 'Micro SAAS'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'See our cloud solutions and infrastructure management',
      icon: Cloud,
      features: [
        'Auto-scaling',
        'Security Monitoring',
        'Backup Solutions',
        'Performance Analytics',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      duration: '25 minutes',
      category: 'Cloud & Infrastructure'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Test our mobile apps and cross-platform solutions',
      icon: Smartphone,
      features: [
        'Native iOS/Android',
        'Cross-platform Development',
        'Offline Functionality',
        'Push Notifications',
        'Biometric Authentication',
        'Real-time Sync'
      ],
      duration: '18 minutes',
      category: 'Mobile Development'
    }
  ];

  const demoSteps = [
    {
      step: '01',
      title: 'Schedule Your Demo',
      description: 'Choose a convenient time that works for your schedule',
      icon: Calendar
    },
    {
      step: '02',
      title: 'Meet Our Expert',
      description: 'Connect with our solution specialist via video call',
      icon: Users
    },
    {
      step: '03',
      title: 'See It In Action',
      description: 'Watch live demonstrations of our solutions',
      icon: Play
    },
    {
      step: '04',
      title: 'Ask Questions',
      description: 'Get answers to all your questions and concerns',
      icon: Target
    },
    {
      step: '05',
      title: 'Get Custom Quote',
      description: 'Receive a tailored proposal for your needs',
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      content: 'The micro SAAS demo showed us the potential to scale our business quickly and efficiently.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director, Enterprise Inc',
      content: 'The cloud infrastructure demo convinced us that Zion Tech Group was the right partner for our migration.',
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, micro SAAS demo, cloud demo, mobile app demo" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It In
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI and IT solutions firsthand. Schedule a personalized demo 
              and see how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the solution you'd like to see in action. Our experts will tailor the demo to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-cyan-600 border-cyan-500 text-white'
                    : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700/70 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    selectedDemo === demo.id
                      ? 'bg-white/20'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600'
                  }`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-75">{demo.category}</p>
                  </div>
                </div>
                <p className="text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{demo.duration}</span>
                  <Play className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}</h3>
                      <p className="text-cyan-400">{selectedDemoData.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{selectedDemoData.description}</p>
                  <div className="flex items-center text-gray-300 mb-6">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Duration: {selectedDemoData.duration}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center w-fit"
                  >
                    Schedule This Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">What You'll See:</h4>
                  <ul className="space-y-3">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our demo process is designed to give you the most value in the shortest time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {demoSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
                {index < demoSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what clients say about our demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to See It Live?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Schedule your personalized demo today and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;