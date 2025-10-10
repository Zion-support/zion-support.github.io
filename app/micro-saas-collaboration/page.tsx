'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  MessageCircle, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  FileText,
  Bell,
  Settings,
  Video,
  Share2
} from 'lucide-react';

const MicroSaasCollaborationPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Team Workspaces',
      description: 'Create dedicated workspaces for teams with role-based access control'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Instant messaging with file sharing, mentions, and threaded conversations'
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'HD video calls with screen sharing, recording, and virtual backgrounds'
    },
    {
      icon: FileText,
      title: 'Document Collaboration',
      description: 'Real-time document editing with comments, suggestions, and version control'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline team processes'
    },
    {
      icon: Shield,
      title: 'Secure Sharing',
      description: 'Secure file sharing with encryption and access permissions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Collaboration - Team Productivity Platform | Zion Tech Group</title>
        <meta name="description" content="Enhance team collaboration with our AI-powered micro SaaS platform. Real-time chat, video calls, and document collaboration." />
        <meta name="keywords" content="team collaboration, productivity tools, video conferencing, document collaboration, micro saas" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-collaboration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Collaboration
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Enhance team productivity with our AI-powered collaboration platform. 
                Real-time communication, document sharing, and seamless teamwork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Collaboration Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS platform provides everything you need for effective team collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Team Productivity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and experience the power of AI-driven collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasCollaborationPage;