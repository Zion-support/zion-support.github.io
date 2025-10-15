<<<<<<< HEAD

import React from 'react;'
import { Helmet } from 'react-helmet-async;'
import { Link } from 'react-router-dom;'
import {
  PlayIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline;'
const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Solutions Demo',''
      description: 'Experience our AI-powered solutions in action with interactive demonstrations.',''
      icon: CpuChipIcon,
      features: [
        'Machine Learning Models',''
        'Natural Language Processing',''
        'Computer Vision',''
        'Predictive Analytics''
      ],
      duration: '15 minutes''
    },
    {
      title: 'Cybersecurity Demo',''
      description: 'See how our security solutions protect your digital assets in real-time.',''
      icon: ShieldCheckIcon,
      features: [
        'Threat Detection',''
        'Vulnerability Assessment',''
        'Security Monitoring',''
        'Incident Response''
      ],
      duration: '20 minutes''
    },
    {
      title: 'Cloud Infrastructure Demo',''
      description: 'Explore our cloud solutions and infrastructure management capabilities.',''
      icon: CloudIcon,
      features: [
        'Cloud Migration',''
        'Auto-scaling',''
        'Disaster Recovery',''
        'Cost Optimization''
      ],
      duration: '25 minutes''
    },
    {
      title: 'Micro SaaS Demo',''
      description: 'Discover our custom micro SaaS applications and their capabilities.',''
      icon: GlobeAltIcon,
      features: [
        'Custom Development',''
        'API Integration',''
        'User Management',''
        'Analytics Dashboard''
      ],
      duration: '18 minutes''
    },
    {
      title: '5G Technology Demo',''
      description: 'Experience the power of 5G technology and IoT solutions.',''
      icon: SignalIcon,
      features: [
        '5G Network Implementation',''
        'IoT Device Management',''
        'Edge Computing',''
        'Real-time Processing''
      ],
      duration: '22 minutes''
    }
  ];
  return (
    <React.Fragment></React>
      <Helmet></Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our technology solutions with interactive demos. See AI, cybersecurity, cloud infrastructure, and more in action." />""
        <meta name="keywords" content="demo, technology demo, AI demo, cybersecurity demo, cloud demo, micro SaaS demo" />""
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">""
        <div className="absolute inset-0 opacity-20">""
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>""
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">""
          <div className="max-w-4xl mx-auto">""
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""
              Experience Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">""
              Interactive Demos of Our Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">""
              See our AI, cybersecurity, cloud infrastructure, and other solutions in action.
              Schedule a personalized demo to explore how our technology can transform your business.
            </p>
            <Link
              to="/contact""
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2""
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />""
            </Link>
          </div>
        </div>
      </section>
      {/* Demo Grid */}
      <section className="py-20 bg-slate-900">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">""
              Available Demos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
              Choose from our comprehensive range of technology demonstrations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">""
                <div className="flex items-center mb-6">""
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">""
                    <demo.icon className="w-8 h-8 text-white" />""
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{demo.title}</h3>""
                    <p className="text-purple-400 text-sm">{demo.duration}</p>""
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">""
                  {demo.description}
                </p>
                <ul className="space-y-3 mb-6">""
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">""
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />""
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact""
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all""
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />""
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">""
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">""
          <h2 className="text-4xl font-bold mb-6">Ready to See Our Solutions in Action?</h2>""
          <p className="text-xl text-gray-300 mb-8">""
            Schedule a personalized demo tailored to your business needs
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">""
            <div className="bg-slate-800 rounded-xl p-6">""
              <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />""
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>""
              <p className="text-gray-300 text-lg">+1-302-464-0950</p>""
              <p className="text-gray-400 text-sm">Available 24/7</p>""
            </div>
            <div className="bg-slate-800 rounded-xl p-6">""
              <EnvelopeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />""
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>""
              <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>""
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>""
            </div>
          </div>
          <Link
            to="/contact""
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2""
          >
            Schedule Your Demo
            <PlayIcon className="w-5 h-5" />""
          </Link>
        </div>
      </section>
    </>
  );
};
=======
import SEOHead from '../components/SEOHead';

const DemoPage: React.FC = () => {}
  const [selectedDemo, setSelectedDemo] = useState('ai-solutions');

  const demos = [
    {};
      id: 'ai-solutions';
      title: 'AI Solutions Demo';
      description: 'Experience our AI-powered solutions in action';
      icon: ;
      features: [
        'Natural Language Processing';
        'Computer Vision';
        'Predictive Analytics';
        'Chatbot Interface';
        'Data Visualization';
        'Real-time Insights'
      ],
      duration: '15 minutes',
      category: 'AI & Machine Learning'
    };
    {},
      id: 'micro-saas',
      title: 'Micro SAAS Platform',
      description: 'Explore our scalable software-as-a-service solutions',
      icon: features: [
        'Project Management';
        'Content Creation';
        'Analytics Dashboard';
        'Email Marketing';
        'User Management';
        'API Integration'
      ],
      duration: '20 minutes',
      category: 'Micro SAAS'
    };
    {},
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'See our cloud solutions and infrastructure management',
      icon: Cloud,
      features: [
        'Auto-scaling';
        'Security ing';
        'Backup Solutions';
        'Performance Analytics';
        'Cost Optimization';
        'Disaster Recovery'
      ],
      duration: '25 minutes',
      category: 'Cloud & Infrastructure'
    };
    {},
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Test our mobile apps and cross-platform solutions',
      icon: features: [
        'Native iOS/Android';
        'Cross-platform Development';
        'Offline Functionality';
        'Push Notifications';
        'Biometric Authentication';
        'Real-time Sync'
      ],
      duration: '18 minutes',
      category: 'Mobile Development'
    };
  ],
      const demoSteps = [
    {},
      step: '01',
      title: 'Schedule Your Demo',
      description: 'Choose a convenient time that works for your schedule',
      icon: Calendar
    };
    {},
      step: '02',
      title: 'Meet Our Expert',
      description: 'Connect with our solution specialist via video call',
      icon: Users
    };
    {},
      step: '03',
      title: 'See It In Action',
      description: 'Watch live demonstrations of our solutions',
      icon: Play
    };
    {},
      step: '04',
      title: 'Ask Questions',
      description: 'Get answers to all your questions and concerns',
      icon: Target
    };
    {},
      step: '05',
      title: 'Get Custom Quote',
      description: 'Receive a tailored proposal for your needs',
      icon: Award
    };
  ],
      const testimonials = [
    {},
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'The demo was incredibly insightful. We could see exactly how the AI solutions would fit into our workflow.',
      rating: 5
    };
    {},
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      content: 'The micro SAAS demo showed us the potential to scale our business quickly and efficiently.',
      rating: 5
    };
    {},
      name: 'Emily Rodriguez',
      role: 'IT Director, Enterprise Inc',
      content: 'The cloud infrastructure demo convinced us that Zion Tech Group was the right partner for our migration.',
      rating: 5
    };
  ],
      const selectedDemoData = demos.find(demo => demo.id === selectedDemo),
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, micro SAAS demo, cloud demo, mobile app demo" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>

const DemoPage: React.FC = () => {
  return (
    <>
      <SEOHead title =" Demo Page - Zion Tech Group"";
        description="Zion Tech Group  Demo Page service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4"> Demo Page</h1>";
          <p className ="text-gray-300">Coming soon...</p>";

        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              See It In
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                {' '}Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Experience our AI and IT solutions firsthand. Schedule a personalized demo 
              and see how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <>
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></>
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />
              </>
              <>
                to="/pricing"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <Rocket className="w-5 h-5 mr-2" />
                View Pricing
              </>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Select the solution you'd like to see in action. Our experts will tailor the demo to your specific needs.'
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"></div>
            {demos.map((demo) => ()}
              <buttonkey={demo.id},>
      onClick={() => setSelectedDemo(demo.id)},
      className={`p-6 rounded-xl border transition-all duration-300 text-left ${},
      selectedDemo === demo.id
                    ? 'bg-cyan-600 border-cyan-500 text-white'
                    : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700/70 hover:border-cyan-500/50'
                }`};
              >
                <div className="flex items-center mb-4">
        <div className="flex items-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-75">{demo.category}</p>
                  </div>
                </div>
                <p className="text-sm mb-4">{demo.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-sm font-medium">{demo.duration}</span>
                  <Play className="w-4 h-4" />
                </div>
              </button>
            ))};
          </div>

          {/* Selected Demo Details */};
          {selectedDemoData && ()}
            <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/50">
        <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/50">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                <div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4"></div>
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}</h3>
                      <p className="text-cyan-400">{selectedDemoData.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{selectedDemoData.description}</p>
                  <div className="flex items-center text-gray-300 mb-6"></div>
                    <className="w-5 h-5 mr-2" />
                    <span>Duration: {selectedDemoData.duration}</span>
                  </div>
                  <>
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center w-fit"
                  ></>
                    Schedule This Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                </div>
                <div></div>
                  <h4 className="text-xl font-semibold text-white mb-4">What You'll See:</h4>'
                  <ul className="space-y-3"></ul>
                    {selectedDemoData.features.map((feature) => ()}
                      <li key={index} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};
                  </ul>
                </div>
              </div>
            </div>
          )};
        </div>
      </section>

      {/* Demo Process */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our demo process is designed to give you the most value in the shortest time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8"></div>
            {demoSteps.map((step) => ()}
              <div key={index} className="relative">
        <div key={index} className="relative">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
                {index < demoSteps.length - 1 && ()}
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>
                )};
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Testimonials */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Don't just take our word for it. Here's what clients say about our demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial) => ()}
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
        <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  {[...Array(testimonial.rating)].map((_, i) => ()}
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))};
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to See It Live?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>
            Schedule your personalized demo today and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <>
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            ></>
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </>
            <ahref="tel:+13024640950">
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            ></a
>
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

    </>
  ),
};

>>>>>>> main
export default DemoPage;