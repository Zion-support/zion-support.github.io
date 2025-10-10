'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Edit, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Globe,
  Bell,
  Settings,
  Database,
  Image
} from 'lucide-react';

const MicroSaasCmsPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Create, edit, and organize content with an intuitive drag-and-drop interface'
    },
    {
      icon: Edit,
      title: 'Rich Text Editor',
      description: 'Advanced WYSIWYG editor with formatting, media, and collaboration features'
    },
    {
      icon: Zap,
      title: 'AI Content Generation',
      description: 'AI-powered content suggestions and automated content creation'
    },
    {
      icon: Shield,
      title: 'Version Control',
      description: 'Track changes, manage revisions, and maintain content history'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user editing with real-time collaboration and approval workflows'
    },
    {
      icon: Globe,
      title: 'Multi-site Management',
      description: 'Manage multiple websites and content from a single dashboard'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS CMS - AI-Powered Content Management | Zion Tech Group</title>
        <meta name="description" content="Manage your content with our AI-powered micro SaaS CMS. Rich text editing, team collaboration, and intelligent content management." />
        <meta name="keywords" content="content management system, CMS, content editing, micro saas, team collaboration" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-cms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS CMS
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Manage your content with our AI-powered micro SaaS CMS. 
                Rich text editing, team collaboration, and intelligent content management.
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
                Advanced CMS Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS platform provides everything you need to manage content effectively.
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
                Ready to Streamline Your Content Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and experience the power of AI-driven content management.
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

export default MicroSaasCmsPage;