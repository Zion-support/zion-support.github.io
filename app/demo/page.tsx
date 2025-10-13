import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DemoPage = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7',
      duration: '5 min',
      category: 'AI Solutions',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Integration capabilities'
      ],
      videoUrl: '#',
      thumbnail: '🤖'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Dashboard',
      description: 'See how our analytics platform transforms raw data into actionable insights',
      duration: '8 min',
      category: 'Data Analytics',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom visualizations',
        'Automated reporting'
      ],
      videoUrl: '#',
      thumbnail: '📊'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Process',
      description: 'Watch our seamless cloud migration process in action',
      duration: '10 min',
      category: 'Cloud Solutions',
      features: [
        'Zero-downtime migration',
        'Automated testing',
        'Performance optimization',
        'Security compliance'
      ],
      videoUrl: '#',
      thumbnail: '☁️'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Monitoring',
      description: 'Explore our advanced security monitoring and threat detection system',
      duration: '6 min',
      category: 'Cybersecurity',
      features: [
        'Real-time threat detection',
        'Automated response',
        'Compliance monitoring',
        'Incident management'
      ],
      videoUrl: '#',
      thumbnail: '🔒'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "The demo showed exactly what we needed. The AI chatbot integration was seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "The analytics dashboard demo convinced us to move forward with the project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      role: "Head of Operations",
      content: "Seeing the cloud migration process in action gave us confidence in the solution.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Demos Conducted" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24h", label: "Average Response Time" },
    { number: "50+", label: "Success Stories" }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, cloud migration demo, cybersecurity demo, data analytics demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Experience Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI and IT solutions in action. Interactive demos that showcase 
              the power and potential of our technology.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of interactive demos to see our solutions in action
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                    selectedDemo === index
                      ? 'bg-slate-800/50 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="text-4xl mb-4">{demo.thumbnail}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                      {demo.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {demos[selectedDemo].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {demos[selectedDemo].description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {demos[selectedDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Start Demo
                    </button>
                    <Link
                      to="/contact"
                      className="px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                    >
                      Schedule Live Demo
                    </Link>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{demos[selectedDemo].thumbnail}</div>
                    <p className="text-gray-400">Interactive Demo Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duration: {demos[selectedDemo].duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What Clients Say About Our Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our demos have helped clients make informed decisions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircleIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions 
              can address your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
              >
                Schedule Live Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;