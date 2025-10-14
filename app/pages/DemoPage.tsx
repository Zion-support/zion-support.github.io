import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  PauseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI solutions can transform your data into actionable insights with real-time analytics and predictive modeling.',
      duration: '5:30',
      category: 'AI Solutions',
      icon: CpuChipIcon,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive dashboards',
        'Automated reporting'
      ],
      videoUrl: '/videos/ai-analytics-demo.mp4',
      thumbnail: '/images/demos/ai-analytics.jpg'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Experience seamless cloud management with our comprehensive infrastructure solutions and monitoring tools.',
      duration: '4:15',
      category: 'Cloud Computing',
      icon: CloudIcon,
      features: [
        'Multi-cloud management',
        'Auto-scaling',
        'Cost optimization',
        'Security monitoring'
      ],
      videoUrl: '/videos/cloud-management-demo.mp4',
      thumbnail: '/images/demos/cloud-management.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Threat Detection',
      description: 'Watch our advanced security systems in action, detecting and preventing threats in real-time.',
      duration: '6:00',
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      features: [
        'Real-time threat detection',
        'Automated response',
        'Security analytics',
        'Compliance monitoring'
      ],
      videoUrl: '/videos/cybersecurity-demo.mp4',
      thumbnail: '/images/demos/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS Application Builder',
      description: 'Build and deploy custom micro SaaS applications with our intuitive development platform.',
      duration: '7:20',
      category: 'Development',
      icon: CogIcon,
      features: [
        'Drag-and-drop interface',
        'API integration',
        'Multi-tenant architecture',
        'Deployment automation'
      ],
      videoUrl: '/videos/micro-saas-demo.mp4',
      thumbnail: '/images/demos/micro-saas.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI analytics demo completely changed our perspective on data management. The insights we gained were incredible.',
      rating: 5,
      image: '/images/testimonials/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The cloud management demo showed us exactly how to optimize our infrastructure costs while improving performance.',
      rating: 5,
      image: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      company: 'SecureNet Solutions',
      role: 'Security Director',
      content: 'The cybersecurity demo was impressive. The real-time threat detection capabilities are exactly what we needed.',
      rating: 5,
      image: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'See It In Action',
      description: 'Watch our solutions work in real-world scenarios with live demonstrations.'
    },
    {
      icon: StarIcon,
      title: 'Expert Guidance',
      description: 'Get insights from our technical experts who understand your industry challenges.'
    },
    {
      icon: ClockIcon,
      title: 'Time Efficient',
      description: 'Get a comprehensive overview of our capabilities in just a few minutes.'
    },
    {
      icon: UserIcon,
      title: 'Personalized',
      description: 'Customized demos tailored to your specific business needs and requirements.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive live demos. See how our technology can transform your business." />
        <meta name="keywords" content="demos, live demos, AI demos, cloud demos, cybersecurity demos, technology demonstrations, interactive demos" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the power of our AI and IT solutions through interactive live demos. 
              See how our technology can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
              >
                {isPlaying ? (
                  <>
                    <PauseIcon className="w-5 h-5 mr-2" />
                    Pause Demo
                  </>
                ) : (
                  <>
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Start Demo
                  </>
                )}
              </button>
              <Link 
                to="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Schedule Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Choose a Demo to Explore
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(index)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedDemo === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                      selectedDemo === index ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      <demo.icon className={`w-8 h-8 ${
                        selectedDemo === index ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{demo.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{demo.description}</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {demos[selectedDemo].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {demos[selectedDemo].description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {demos[selectedDemo].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                  <Link 
                    to="/contact" 
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                  >
                    Get Custom Demo
                  </Link>
                </div>
              </div>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Schedule a Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience with these benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Schedule Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll contact you to schedule your personalized demonstration
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <PlayIcon className="w-8 h-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Watch Our Demos?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <UserIcon className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Schedule Live Demo
              </Link>
              <Link 
                to="/services" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Questions About Our Demos?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
