'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Code, Zap, Brain, Cloud, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export default function GuidesPage() {
  const guides = [
    {
      category: 'AI Implementation',
      icon: Brain,
      color: 'purple',
      guides: [
        {
          title: 'Getting Started with AI Services',
          description: 'Complete guide to implementing AI solutions in your organization',
          duration: '15 min read',
          difficulty: 'Beginner',
          href: '/guides/ai-implementation-basics'
        },
        {
          title: 'AI Model Selection Guide',
          description: 'How to choose the right AI model for your specific use case',
          duration: '20 min read',
          difficulty: 'Intermediate',
          href: '/guides/ai-model-selection'
        },
        {
          title: 'AI Data Preparation Best Practices',
          description: 'Essential steps for preparing your data for AI implementation',
          duration: '25 min read',
          difficulty: 'Intermediate',
          href: '/guides/ai-data-preparation'
        }
      ]
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'blue',
      guides: [
        {
          title: 'Cloud Migration Strategy',
          description: 'Step-by-step guide to migrating your infrastructure to the cloud',
          duration: '30 min read',
          difficulty: 'Advanced',
          href: '/guides/cloud-migration-strategy'
        },
        {
          title: 'Container Orchestration with Kubernetes',
          description: 'Complete guide to deploying and managing containerized applications',
          duration: '45 min read',
          difficulty: 'Advanced',
          href: '/guides/kubernetes-orchestration'
        },
        {
          title: 'Serverless Architecture Patterns',
          description: 'Design patterns and best practices for serverless applications',
          duration: '35 min read',
          difficulty: 'Intermediate',
          href: '/guides/serverless-patterns'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'green',
      guides: [
        {
          title: 'AI Security Best Practices',
          description: 'Comprehensive security guidelines for AI implementations',
          duration: '25 min read',
          difficulty: 'Intermediate',
          href: '/guides/ai-security-practices'
        },
        {
          title: 'GDPR Compliance for AI Systems',
          description: 'Ensuring your AI systems comply with data protection regulations',
          duration: '30 min read',
          difficulty: 'Advanced',
          href: '/guides/gdpr-ai-compliance'
        },
        {
          title: 'Zero Trust Security Architecture',
          description: 'Implementing zero trust principles in your infrastructure',
          duration: '40 min read',
          difficulty: 'Advanced',
          href: '/guides/zero-trust-architecture'
        }
      ]
    },
    {
      category: 'Development',
      icon: Code,
      color: 'orange',
      guides: [
        {
          title: 'API Development Best Practices',
          description: 'Designing robust and scalable APIs for modern applications',
          duration: '20 min read',
          difficulty: 'Intermediate',
          href: '/guides/api-development'
        },
        {
          title: 'Microservices Architecture Guide',
          description: 'Building scalable applications with microservices',
          duration: '50 min read',
          difficulty: 'Advanced',
          href: '/guides/microservices-architecture'
        },
        {
          title: 'DevOps Pipeline Setup',
          description: 'Setting up CI/CD pipelines for automated deployment',
          duration: '35 min read',
          difficulty: 'Intermediate',
          href: '/guides/devops-pipeline-setup'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-900/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-900/20';
      case 'Advanced': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getCategoryColor = (color: string) => {
    switch (color) {
      case 'purple': return 'text-purple-400 bg-purple-900/20';
      case 'blue': return 'text-blue-400 bg-blue-900/20';
      case 'green': return 'text-green-400 bg-green-900/20';
      case 'orange': return 'text-orange-400 bg-orange-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Technical Guides
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Expert guides to help you master AI, cloud, and modern technology
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive, step-by-step guides written by our expert team to help you implement 
              cutting-edge technology solutions in your organization.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {guides.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-lg ${getCategoryColor(category.color)} mr-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide, guideIndex) => (
                    <div key={guideIndex} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {guide.title}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                          {guide.difficulty}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {guide.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {guide.duration}
                        </div>
                      </div>
                      
                      <a
                        href={guide.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                      >
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help with Implementation?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our expert team is ready to help you implement any of these solutions. 
                Get personalized guidance and support for your specific use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                >
                  Get Expert Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}