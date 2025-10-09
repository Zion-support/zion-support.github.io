<<<<<<< HEAD

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PagePage;
=======
import {HelpCircle, Search, Phone, Mail, MessageSquare, BookOpen, Video, Download, CheckCircle, ArrowRight, Users, Users from 'lucide-react';}
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const HelpPage: React.FC = () => {return (}
    <div>Coming Soon</div>
  );
};
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
const categories = [
    {// TODO: Add content;}
};
  id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: HelpCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',

      id: 'technical',
      name: 'Technical Support',
      icon: MessageSquare,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];
  const helpArticles = {// TODO: Add content;}
}
    'getting-started': [;
  title: 'Setting Up Your First Dashboard',
        description: 'Step-by-step instructions for creating and customizing your analytics dashboard',
        readTime: '3 min read',
        title: 'Integration with Existing Systems',
        description: 'How to integrate our AI services with your current business systems',
        readTime: '7 min read',
        difficulty: 'Intermediate',
        title: 'Security Best Practices',
        description: 'Implement security measures to protect your data and systems',
        readTime: '8 min read',
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all our services',
      icon: Video,
      count: '50+ videos',

      title: 'API Reference',
      description: 'Complete API documentation with examples',
      count: '100+ endpoints',

      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: Mail,
      responseTime: 'Within 4 hours',

      title: 'Community Forum',
      description: 'Connect with other users and share knowledge',
      icon: Users,
      responseTime: 'Community driven'
                
          
          
          
          
          
          
          
          
          <MessageSquare className="w-5 h-5 mr-2" />
// Contact Support;
          </a>
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
    </>
export default HelpPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
