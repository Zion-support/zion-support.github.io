<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCustomerService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Customer Service - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Service solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Ai Customer Service</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiCustomerService;
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, Clock, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';

export default function AiCustomerServicePage() {
  const features = [
    {
      title: "24/7 AI Chatbots",
      description: "Intelligent chatbots that provide instant responses to customer inquiries",
      icon: <MessageCircle className="w-8 h-8" />,
      benefits: ["Instant responses", "Multilingual support", "Context awareness", "Seamless handoff"]
    },
    {
      title: "Sentiment Analysis",
      description: "Real-time analysis of customer emotions and satisfaction levels",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Emotion detection", "Satisfaction tracking", "Proactive intervention", "Quality insights"]
    },
    {
      title: "Automated Ticketing",
      description: "Smart ticket routing and prioritization based on AI analysis",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Smart routing", "Priority scoring", "Auto-categorization", "Escalation management"]
    }
  ];

  const solutions = [
    {
      title: "Live Chat Integration",
      description: "Seamlessly integrate AI chatbots with your existing live chat system",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Email Automation",
      description: "Automated email responses and follow-ups based on customer behavior",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Voice Support",
      description: "AI-powered voice assistants for phone and video support",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Knowledge Base",
      description: "Intelligent knowledge base that learns from customer interactions",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "90%", label: "Faster Response Time" },
    { number: "85%", label: "Customer Satisfaction" },
    { number: "70%", label: "Cost Reduction" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Service - Zion Tech Group</title>
        <meta name="description" content="Transform your customer service with AI-powered solutions. Chatbots, sentiment analysis, and automated support." />
        <meta name="keywords" content="AI customer service, chatbots, customer support, sentiment analysis, automated support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Customer Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer service with intelligent AI solutions. Provide instant, personalized support 
              that scales with your business and delights your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer service solutions provide intelligent, personalized support that scales with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI customer service solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you implement intelligent customer service solutions that delight your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> main
=======
<<<<<<< HEAD
import React from 'react;'
import { ArrowRight } from 'lucide-react;'
import { CheckCircle } from 'lucide-react;'
import { Star } from 'lucide-react;'
import { Users } from 'lucide-react;'
import { Clock } from 'lucide-react;'
import { DollarSign } from 'lucide-react;'
import { Shield } from 'lucide-react;'
import { Code } from 'lucide-react;'
import { Database } from 'lucide-react;'
import { Mail } from 'lucide-react;'
import { Settings } from 'lucide-react;'
import { Target } from 'lucide-react;'
import { TrendingUp } from 'lucide-react;'
import { PieChart } from 'lucide-react;'
import { MessageSquare } from 'lucide-react;'
import { Heart } from 'lucide-react;'
import { Globe } from 'lucide-react;'
import { Smartphone } from 'lucide-react;'
import { Network } from 'lucide-react;'
import { Lock } from 'lucide-react;'
import { Cpu } from 'lucide-react;'
import { Wifi } from 'lucide-react;'
import { Building2 } from 'lucide-react;'
import { Briefcase } from 'lucide-react;'
import { Lightbulb } from 'lucide-react;'
import { Link } from 'react-router-dom;'
import EnhancedSEO from '../components/EnhancedSEO;'
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
    <>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import SEOHead from '../components/SEOHead';

const AiCustomerServicePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="Page - Zion Tech Group"
        description="Advanced page solutions powered by AI"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page</h1>
          <pclassName="text-gray-300">

const AiCustomerServicePage: React.FC = () => {
  return (
    <>
      <SEOHead title ="ai-customer-service - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group ai-customer-service service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">ai-customer-service - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>
  ),
};

>>>>>>> main
>>>>>>> main
