<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client;

import React from 'react;
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from "lucide-react";
export default function DemoPage() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import { Helmet } from 'react-helmet-async;

import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react;

import Navigation from ../components
import Footer from ../components
;

const DemoPage: React.FC = () => {const demos = [;

const DemoPage: React.FC = () => {
  const demos = [    {;
      title: 'AI Analytics Dashboard,
      description: 'See how our AI analytics can transform your business intelligence,
      duration: '5 min,
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports]
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const subject = `Demo Request from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const demoFeatures = [
=======
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';

interface Demo {
  title: string;
  description: string;
  duration: string;
  features: string[];
  category: string;
  icon: React.ComponentType<any>;
}

const DemoPage: React.FC = () => {
  const demos: Demo[] = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
      icon: Brain,
      title: 'AI Solutions Demo',
      description: 'See our AI services in action with live demonstrations'
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Get a free security evaluation of your current setup'
    },
    {
      icon: Zap,
      title: 'Performance Analysis',
      description: 'Learn how to optimize your business processes'
    },
    {
      id: 'ai-chatbot,
      title: 'AI Customer Service Bot,
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.,
      features: [
        'Natural language understanding,
        'Multi-language support,
        24
        Seamless handoff to humans
      ],
      icon: Users,
      duration: '3 min demo,
      category: 'AI Solutions
    },    {
      title: 'AI Content Generation,
      description: 'Watch our AI create high-quality content in seconds,
      duration: '4 min,
      features: ['Blog posts', 'Social media content', 'Product descriptions]
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';
=======
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;

<<<<<<< HEAD
const $1Page: React.FC = () => {}
=======
const DemoPage: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  const demos = [

const DemoPage: React.FC = () => {}
  const demos = [
    {}
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports'],
      category: 'Analytics',
      icon: BarChart
    },
<<<<<<< HEAD
    {}
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.',
      features: []
        'Natural language understanding',
        'Multi-language support',
        '24
        'Seamless handoff to humans'
      ],
      icon: Users,
      duration: '3 min demo',
      category: 'AI Solutions'
    },
    {}
      title: 'AI Content Generation',
=======
    {
      title: 'AI Customer Support Bot',
      description: 'Experience our intelligent customer service automation',
      duration: '3 min',
      features: ['Natural language processing', 'Multi-language support', '24/7 availability'],
      category: 'Customer Service',
      icon: Users
    },
    {
      title: 'AI Content Generator',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      description: 'Watch our AI create high-quality content in seconds',
      duration: '2 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions'],
      category: 'Content',
      icon: Zap
    },
    {
      title: 'AI Security Monitor',
      description: 'See how AI protects your systems from threats',
      duration: '4 min',
      features: ['Threat detection', 'Real-time monitoring', 'Automated response'],
      category: 'Security',
      icon: Shield
    }
<<<<<<< HEAD
=======
  ];

  const categories = ['all', 'Analytics', 'Customer Service', 'Content', 'Security'];

  const features = [
    {
      icon: Play,
      title: 'Interactive Demos',
      description: 'Hands-on experience with our AI solutions'
    },
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Walkthroughs led by our AI specialists'
    },
    {
      icon: CheckCircle,
      title: 'Real Results',
      description: 'See actual performance metrics and outcomes'
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

<<<<<<< HEAD
  ];

<<<<<<< HEAD
export default function Demo() {
=======
  const stats = [
    { number: '50+', label: 'Live Demos Available' },
    { number: '1000+', label: 'Businesses Transformed' },
    { number: '99.9%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Demo Access' }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsPlaying(false);
  };

  const handlePrevDemo = () => {
    setCurrentDemo((prev) => (prev - 1 + demos.length) % demos.length);
    setIsPlaying(false);
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

        </div>
      </div>
    </div>
  );
}
      {/* CTA Section *
      <section className="py-20 px-4>
        <div className="max-w-4xl mx-auto text-center>
          <h2 className="text-4xl font-bold text-white mb-6>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  return (
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Zion Tech Group - Demo page" />
=======
  return (
    <>
  <Helmet />
        <title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Demo
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
=======
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how we can transform your business." />
        <meta name="keywords" content="demo, AI solutions, interactive, experience, showcase" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI and IT solutions in action. Interactive demos that showcase the power and potential of our technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Interactive Demos
              </span>
              <span className="flex items-center">
                <Play className="w-4 h-4 mr-2 text-blue-400" />
                No Registration Required
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Expert Guided
              </span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Try Our Demos?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Demo
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {demo.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 bg-slate-700 px-3 py-1 rounded-full">
                      {demo.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {demo.duration}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center group">
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Live Demo?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our AI experts. We'll show you exactly how our solutions can address your specific business needs.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Personalized Demo</h3>
                <p className="text-gray-400 text-sm">
                  Customized demonstration based on your industry and requirements
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Q&A Session</h3>
                <p className="text-gray-400 text-sm">
                  Ask questions and get expert advice during the demo
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Contact Sales
                <Users className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI and see how it can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                Try All Demos
                <Play className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      </div>
=======
        </div>
      </section>

      <Footer />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
    </>
  );
};

<<<<<<< HEAD
export default DemoPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
export default DemoPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
