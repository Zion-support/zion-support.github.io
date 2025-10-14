
import React from 'react';;
import { Brain, BarChart3, Zap, FileText, MessageSquare, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react;

const AiServicesPage: React.FC = () => {
  const services = [{
      icon: Brain,
      title: ';;AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      color: 'from-purple-500 to-pink-500
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',
      color: 'from-blue-500 to-cyan-500
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      color: 'from-green-500 to-emerald-500
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, documentation, and communication.',
      color: 'from-orange-500 to-red-500
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Service',
      description: 'Intelligent chatbots and customer service solutions powered by AI.',
      color: 'from-indigo-500 to-purple-500
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      color: 'from-red-500 to-pink-500
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",
      rating: 5;
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Comprehensive AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare" />
        <meta name="canonical" content="https://ziontechgroup." />
      </Helmet>
      <FuturisticBackground>;
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
          {/* Hero Section */}
          <section className="relative py-20 px-4">;
            <div className="max-w-7xl mx-auto text-center">;
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                AI;
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Services;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Transform your business with our comprehensive AI services.;
                From analytics to automation, we provide cutting-edge AI solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;
                  Get Started;
                  <Right className="w-5 h-5 ml-2 inline" />;
                </button>;
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;
                  Learn More;
                </button>;
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p>Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const page = React.lazy(() => import('./page'));
export default page;


}