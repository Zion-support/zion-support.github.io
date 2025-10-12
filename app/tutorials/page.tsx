import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Cloud, Shield, Database, Zap, ArrowRight, Play, Download } from 'lucide-react';
'use client';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      category: 'AI & Machine Learning',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      tutorials: [
        {
          title: 'Machine Learning Fundamentals',
          description: 'Learn the basics of machine learning algorithms and applications',
          duration: '4 hours',
          level: 'Beginner',
          url: '/tutorials/ml-fundamentals'
        },
        {
          title: 'Deep Learning with TensorFlow',
          description: 'Build neural networks using TensorFlow and Keras',
          duration: '8 hours',
          level: 'Intermediate',
          url: '/tutorials/deep-learning-tensorflow'
        },
        {
          title: 'Natural Language Processing',
          description: 'Process and analyze text data with NLP techniques',
          duration: '6 hours',
          level: 'Intermediate',
          url: '/tutorials/nlp-basics'
        },
        {
          title: 'Computer Vision Applications',
          description: 'Build image recognition and computer vision systems',
          duration: '10 hours',
          level: 'Advanced',
          url: '/tutorials/computer-vision'
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      tutorials: [
        {
          title: 'Cloud Architecture Design',
          description: 'Design scalable and secure cloud architectures',
          duration: '6 hours',
          level: 'Intermediate',
          url: '/tutorials/cloud-architecture'
        },
        {
          title: 'Container Orchestration',
          description: 'Master Docker and Kubernetes for container management',
          duration: '8 hours',
          level: 'Intermediate',
          url: '/tutorials/container-orchestration'
        },
        {
          title: 'CI/CD Pipeline Setup',
          description: 'Build automated deployment pipelines',
          duration: '5 hours',
          level: 'Intermediate',
          url: '/tutorials/cicd-pipelines'
        },
        {
          title: 'Security Best Practices',
          description: 'Implement security measures in cloud environments',
          duration: '4 hours',
          level: 'Advanced',
          url: '/tutorials/cloud-security'
        }
      ]
    },
    {
      category: 'Web Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      tutorials: [
        {
          title: 'React & Next.js Mastery',
          description: 'Build modern web applications with React ecosystem',
          duration: '12 hours',
          level: 'Intermediate',
          url: '/tutorials/react-nextjs'
        },
        {
          title: 'Full-Stack Development',
          description: 'Complete web application development from frontend to backend',
          duration: '20 hours',
          level: 'Advanced',
          url: '/tutorials/fullstack-development'
        },
        {
          title: 'API Design & Integration',
          description: 'Design and integrate RESTful APIs',
          duration: '6 hours',
          level: 'Intermediate',
          url: '/tutorials/api-design'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimize web applications for speed and efficiency',
          duration: '4 hours',
          level: 'Advanced',
          url: '/tutorials/web-performance'
        }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      tutorials: [
        {
          title: 'Network Security Fundamentals',
          description: 'Learn the basics of network security and protection',
          duration: '5 hours',
          level: 'Beginner',
          url: '/tutorials/network-security'
        },
        {
          title: 'Penetration Testing',
          description: 'Ethical hacking and vulnerability assessment',
          duration: '10 hours',
          level: 'Advanced',
          url: '/tutorials/penetration-testing'
        },
        {
          title: 'Cryptography & Encryption',
          description: 'Implement secure communication and data protection',
          duration: '6 hours',
          level: 'Intermediate',
          url: '/tutorials/cryptography'
        },
        {
          title: 'Incident Response',
          description: 'Handle security incidents and breaches effectively',
          duration: '4 hours',
          level: 'Advanced',
          url: '/tutorials/incident-response'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tutorials & Learning Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Learning Paths
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our curated collection of tutorials designed for all skill levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tutorials.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <div key={tutorialIndex} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{tutorial.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{tutorial.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{tutorial.duration}</span>
                        <div className="flex space-x-2">
                          <Link
                            to={tutorial.url}
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Start
                          </Link>
                          <button className="text-gray-400 hover:text-white text-sm font-medium flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of learners who are advancing their careers with our expert-led tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Browse All Tutorials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;