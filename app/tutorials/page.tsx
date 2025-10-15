import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  BookOpenIcon, 
  PlayIcon, 
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      category: 'AI & Machine Learning',
      icon: CpuChipIcon,
      tutorials: [
        {
          title: 'Getting Started with AI Chatbot Development',
          description: 'Learn how to build intelligent chatbots using our AI platform',
          duration: '45 min',
          level: 'Beginner',
          href: '/tutorials/ai-chatbot-basics'
        },
        {
          title: 'Advanced Machine Learning Models',
          description: 'Deep dive into creating sophisticated ML models for business applications',
          duration: '2 hours',
          level: 'Advanced',
          href: '/tutorials/advanced-ml-models'
        },
        {
          title: 'AI Data Processing Pipeline',
          description: 'Build end-to-end data processing pipelines with AI integration',
          duration: '1.5 hours',
          level: 'Intermediate',
          href: '/tutorials/ai-data-pipeline'
        }
      ]
    },
    {
      category: 'Cloud Infrastructure',
      icon: CloudIcon,
      tutorials: [
        {
          title: 'Cloud Migration Strategies',
          description: 'Best practices for migrating your infrastructure to the cloud',
          duration: '1 hour',
          level: 'Intermediate',
          href: '/tutorials/cloud-migration'
        },
        {
          title: 'Container Orchestration with Kubernetes',
          description: 'Master container management and orchestration',
          duration: '2.5 hours',
          level: 'Advanced',
          href: '/tutorials/kubernetes-guide'
        },
        {
          title: 'Serverless Architecture Patterns',
          description: 'Design and implement serverless solutions',
          duration: '1.5 hours',
          level: 'Intermediate',
          href: '/tutorials/serverless-patterns'
        }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      tutorials: [
        {
          title: 'Security Audit Fundamentals',
          description: 'Learn how to conduct comprehensive security audits',
          duration: '1 hour',
          level: 'Beginner',
          href: '/tutorials/security-audit-basics'
        },
        {
          title: 'Threat Detection and Response',
          description: 'Advanced techniques for identifying and mitigating security threats',
          duration: '2 hours',
          level: 'Advanced',
          href: '/tutorials/threat-detection'
        }
      ]
    },
    {
      category: 'Data Analytics',
      icon: ChartBarIcon,
      tutorials: [
        {
          title: 'Business Intelligence Dashboard Creation',
          description: 'Build powerful analytics dashboards for your business',
          duration: '1.5 hours',
          level: 'Intermediate',
          href: '/tutorials/bi-dashboard'
        },
        {
          title: 'Predictive Analytics Implementation',
          description: 'Implement predictive models for business forecasting',
          duration: '2 hours',
          level: 'Advanced',
          href: '/tutorials/predictive-analytics'
        }
      ]
    },
    {
      category: 'Development',
      icon: CodeBracketIcon,
      tutorials: [
        {
          title: 'API Development Best Practices',
          description: 'Create robust and scalable APIs following industry standards',
          duration: '1.5 hours',
          level: 'Intermediate',
          href: '/tutorials/api-development'
        },
        {
          title: 'Microservices Architecture',
          description: 'Design and implement microservices-based applications',
          duration: '2 hours',
          level: 'Advanced',
          href: '/tutorials/microservices'
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Comprehensive tutorials and guides for AI, cloud infrastructure, cybersecurity, and development technologies."
        keywords="tutorials, guides, AI learning, cloud computing, cybersecurity, development, training"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tutorials & Learning Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Master cutting-edge technologies with our comprehensive tutorials and hands-on guides designed for all skill levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#tutorials" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Browse Tutorials
                </a>
                <a href="/contact" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Request Custom Training
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section id="tutorials" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Explore Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tutorial Categories</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From beginner-friendly introductions to advanced technical deep-dives, find the perfect learning path for your needs.
              </p>
            </div>

            <div className="space-y-12">
              {tutorials.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div key={tutorialIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center">
                            <PlayIcon className="w-4 h-4 mr-1" />
                            {tutorial.duration}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
                          {tutorial.title}
                        </h4>
                        
                        <p className="text-gray-400 mb-4 text-sm">
                          {tutorial.description}
                        </p>
                        
                        <a 
                          href={tutorial.href}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                        >
                          Start Tutorial
                          <PlayIcon className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Need Custom Training?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our experts can create tailored training programs for your team's specific needs and technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Request Custom Training
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Training Packages
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;