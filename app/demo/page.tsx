<<<<<<< HEAD
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield,
  Brain,
  BarChart3,
  Zap,
  Mail,
  Phone
} from "lucide-react";

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState("ai-analytics");

  const demos = [
    {
      id: "ai-analytics",
      title: "AI Analytics Dashboard",
      description: "See how our AI analytics platform transforms raw data into actionable insights.",
      duration: "5 min",
      features: ["Real-time data visualization", "Predictive modeling", "Custom dashboards", "Automated reporting"],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      id: "ai-automation",
      title: "AI Workflow Automation",
      description: "Experience how AI can automate your business processes and increase efficiency.",
      duration: "7 min",
      features: ["Process automation", "Smart routing", "Error reduction", "Time savings"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Monitoring",
      description: "Get a glimpse of our advanced security monitoring and threat detection capabilities.",
      duration: "6 min",
      features: ["Threat detection", "Real-time monitoring", "Incident response", "Security analytics"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: "ai-content",
      title: "AI Content Generation",
      description: "Discover how AI can help create engaging content for your marketing campaigns.",
      duration: "4 min",
      features: ["Content creation", "SEO optimization", "Brand consistency", "Multi-format output"],
      icon: <Brain className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "The AI analytics demo was incredible. We saw immediate value and implemented it within a week.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "Data Director",
      content: "The automation capabilities exceeded our expectations. Our efficiency increased by 40%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Ltd.",
      role: "Security Manager",
      content: "The cybersecurity monitoring demo showed us vulnerabilities we never knew existed.",
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group</title>
        <meta
          name="description"
          content="Experience our AI and technology solutions through interactive demos. See how Zion Tech Group can transform your business."
        />
        <meta
          name="keywords"
          content="AI demo, technology demo, business automation, cybersecurity demo, AI analytics demo"
        />
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {}
import { Play, ArrowRight, Circle, Star } from 'lucide-react';

const DemoPage: React.FC = () => {}
  const features = [
    {}
      icon: 'Analytics',
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {}
      icon: 'Security',
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {}
      icon: 'Intelligence',
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    },
    {}
      icon: 'Cloud',
      title: 'Cloud Infrastructure',
      description: 'Test our scalable cloud solutions',
      demo: 'Cloud Demo';
    };
  ];

  const demos = [
    {}
      title: 'AI Analytics Dashboard',
      description: 'Interactive dashboard showing real-time data analysis',
      duration: '5 min',
      difficulty: 'Beginner',
      category: 'AI Solutions'
    },
    {}
      title: 'Security Monitoring',
      description: 'Live security monitoring and threat detection',
      duration: '3 min',
      difficulty: 'Intermediate',
      category: 'Cybersecurity'
    },
    {}
      title: 'Cloud Migration',
      description: 'Step-by-step cloud migration process',
      duration: '10 min',
      difficulty: 'Advanced',
      category: 'Cloud Services';
    };
  ];

  return (
    <div>Page content</div>
  );
    <div className="min-h-screen bg-white">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group demo page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className="text-center">
      </div>
      </div>
      </div>
      </div>
      </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Demo</h1>
          <p className="text-xl text-gray-600">
            Welcome to our demo page.
          </p>
        </div>
        <meta name="description" content="Experience our AI, cloud, and cybersecurity solutions through interactive demos." />
        <meta name="keywords" content="demo, AI demo, cloud demo, security demo, interactive demo" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div>
      </div>
      </div>
      </div>
      </div>
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
=======
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="text-center">
      </div>
      </div>
      </div>
      </div>
      </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Interactive Demos
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and technology solutions in action. Choose from interactive demos designed to showcase 
                the power and potential of our cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  <Play className="w-5 h-5" />
=======
      </div>
      </div>
      </div>
      </div>
      </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                  Start Demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Demo Selection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
=======
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="text-center mb-16">
      </div>
      </div>
      </div>
      </div>
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Demo Features</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of interactive demonstrations to see how our solutions can benefit your business.
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`mb-4 ${selectedDemo === demo.id ? 'text-cyan-400' : 'text-gray-400'}`}>
                    {demo.icon}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      </div>
      </div>
      </div>
      </div>
      </div>
              {features.map((feature, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors text-center group">
      </div>
      </div>
      </div>
      </div>
      </div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      </div>
      </div>
      </div>
      </div>
      </div>
                    <span className="text-2xl font-bold text-white">{feature.icon.charAt(0)}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                  <p className="text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{demo.duration}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {selectedDemoData.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {selectedDemoData.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {selectedDemoData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                        <Play className="w-5 h-5" />
                        Start Demo
                      </button>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                      >
                        Get More Info
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 text-center">
                    <div className="text-cyan-400 mb-4">
                      {selectedDemoData.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Interactive Demo</h4>
                    <p className="text-gray-300 mb-4">
                      Experience our technology firsthand with this interactive demonstration.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Live Demo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedDemoData.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
=======
        {/* Demo List Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="text-center mb-16">
      </div>
      </div>
      </div>
      </div>
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Available Demos</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our demos have helped businesses make informed decisions about our solutions.
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      </div>
      </div>
      </div>
      </div>
      </div>
              {demos.map((demo, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-colors">
      </div>
      </div>
      </div>
      </div>
      </div>
                  <div className="flex items-center justify-between mb-4">
      </div>
      </div>
      </div>
      </div>
      </div>
                    <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {demo.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  <div className="flex items-center justify-between mb-6">
      </div>
      </div>
      </div>
      </div>
      </div>
                    <div className="flex items-center text-sm text-gray-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                      <Circle className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                    <div className="text-sm text-gray-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                      {demo.difficulty}
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See More?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions can address your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Demo
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
      </div>
      </div>
      </div>
      </div>
      </div>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
      </div>
      </div>
      </div>
      </div>
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Schedule a personalized demo with our experts to see how our solutions 
                can specifically address your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
      </div>
      </div>
      </div>
      </div>
      </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

export default DemoPage;
export default DemoPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
