<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pause } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Network } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Play } from 'lucide-react';
import { Hand } from 'lucide-react';
import { Cloud } from 'lucide-react';

import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Maximize, ArrowRight, CheckCircle, Star, Calendar, Users, Award } from 'lucide-react';

export default function Page() {

  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { number: "500+", label: "Demos Available" },
    { number: "50K+", label: "Users Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const benefits = [
    {
      icon: <Play className="w-8 h-8 text-cyan-400" />,
      title: "Interactive Demos",
      description: "Hands-on experience with our solutions"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Expert Guidance",
      description: "Learn from our experienced team"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Proven Results",
      description: "See real-world success stories"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Data-Driven",
      description: "Make informed decisions with data"
  ];

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
<<<<<<< HEAD
      description: 'See how our AI-powered analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.',
      duration: '3:45',
      category: 'AI Analytics',
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Interactive Dashboards', 'Automated Reporting'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent chatbot in action with natural language processing, sentiment analysis, and seamless human handoff.',
      duration: '2:30',
      category: 'AI Customer Service',
      features: ['Natural Language Processing', 'Sentiment Analysis', 'Multi-language Support', 'Human Handoff'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Watch our AI create high-quality content including blog posts, social media content, and marketing materials with SEO optimization.',
      duration: '4:15',
      category: 'AI Content',
      features: ['SEO Optimization', 'Brand Voice Training', 'Multi-format Output', 'Content Calendar'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Defense',
      description: 'See our advanced threat detection system in action with real-time monitoring, automated response, and compliance reporting.',
      duration: '3:20',
      category: 'Cybersecurity',
      features: ['Threat Detection', 'Automated Response', 'Real-time Monitoring', 'Compliance Reports'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: '5g-solutions',
      title: '5G Network Solutions',
      description: 'Explore our 5G network infrastructure solutions with ultra-low latency, massive IoT connectivity, and edge computing capabilities.',
      duration: '5:00',
      category: '5G Technology',
      features: ['Ultra-low Latency', 'IoT Connectivity', 'Edge Computing', 'Smart City Solutions'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Discover our comprehensive cloud solutions with automated scaling, backup, disaster recovery, and cost optimization.',
      duration: '4:30',
      category: 'Cloud Services',
      features: ['Auto-scaling', 'Disaster Recovery', 'Cost Optimization', 'Multi-cloud Support'],
      thumbnail: '/api/placeholder/800/450',
      videoUrl: '#'
  ];

  return null;
=======
      description: 'Experience real-time AI-powered analytics and insights for your business data.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Interactive dashboards'
      ],
      icon: BarChart,
      duration: '5 min demo',
      category: 'AI Solutions',
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.',
      features: [
        'Natural language understanding',
        'Multi-language support',
        '24/7 availability',
        'Seamless handoff to humans'
      ],
      icon: Users,
      duration: '3 min demo',
      category: 'AI Solutions',
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Tool',
      description: 'Watch our automated cloud migration process in action.',
      features: [
        'Automated assessment',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance'
      ],
      icon: Zap,
      duration: '7 min demo',
      category: 'Cloud Services',
    },
    {
      id: 'cybersecurity',
      title: 'AI Security Monitor',
      description: 'Experience our AI-powered threat detection and response system.',
      features: [
        'Real-time threat detection',
        'Automated response',
        'Compliance monitoring',
        'Incident reporting'
      ],
      icon: Shield,
      duration: '4 min demo',
      category: 'Cybersecurity',
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      quote: 'The AI analytics demo showed us exactly how we could transform our data insights. The implementation was seamless.',
      rating: 5;
    },
    {
      name: 'Michael Chen',
      company: 'RetailMax',
      role: 'Head of Operations',
      quote: 'The chatbot demo exceeded our expectations. It handled complex queries better than we imagined.',
      rating: 5;
    },
    {
      name: 'Emily Rodriguez',
      company: 'FinanceFlow',
      role: 'IT Director',
      quote: 'The cloud migration demo convinced us to move forward. The automation saved us months of work.',
      rating: 5;
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Live Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with real-time demonstrations." />
        <meta name="keywords" content="AI demos, technology demos, live demonstrations, AI solutions, cloud services, cybersecurity demos" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. 
            See exactly how our technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Live Demo
            </button>
          </div></div></div></div></div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300">Select a solution to see it in action</p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-purple-500/10'
                    : 'border-white/10 bg-white/5 hover: bg-white/10',
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <demo.icon className="w-6 h-6 text-white" />
                </div></div>
                <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{demo.category}</span>
                  <span className="text-xs text-cyan-400">{demo.duration}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 flex items-center justify-center">
                      <selectedDemoData.icon className="w-8 h-8 text-white" />
                    </div></div></div></div></div></div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}</h3>
                      <p className="text-gray-400">{selectedDemoData.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Start Demo
                    </button>
                    <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                      Schedule Live Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-12 h-12 text-white" />
                    </div></div></div>
                    <h4 className="text-xl font-semibold text-white mb-2">Interactive Demo</h4>
                    <p className="text-gray-300">Click play to experience this solution in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">See how our demos led to successful implementations</p>
          </div></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div></div></div>
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div></div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
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
            Schedule a personalized demo with our experts. We'll show you exactly 
            how our solutions can address your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Live Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div></div>
        </div>
      </section>

      <Footer />
    </div>
=======
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const DemoPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Demo - Zion Tech Group"
        description="Request a demo of Zion Tech Group services"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Request a Demo</h1>
          <p className="text-gray-300">Contact us to schedule a demo at kleber@ziontechgroup.com</p>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
};

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return null;
};

  const handleNextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsPlaying(false);
  };

  return null;
};

  const handlePrevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setIsPlaying(false);
  };

  return null;
};

export default function DemoPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Demo</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive demo solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
  return null;
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Demo() {return (
    <>
      <title>Demo - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Demo</h1>
            <p className="text-lg text-gray-300 mb-8">Professional demo services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
