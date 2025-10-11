import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Users, Clock, Star } from 'lucide-react';
=======
import { ArrowRight, Users, Award, Clock, CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
import { CheckCircle, ArrowRight, Users, Award, Clock, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Transformation',
      description: 'Revolutionized customer support with intelligent chatbots and automated workflows, reducing response time by 80%.',
      industry: 'E-commerce',
      duration: '6 months',
      results: ['80% faster response time', '60% cost reduction', '95% customer satisfaction'],
      technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'cloud-migration',
      title: 'Enterprise Cloud Migration',
      description: 'Successfully migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs.',
      industry: 'Financial Services',
      duration: '8 months',
<<<<<<< HEAD
<<<<<<< HEAD
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security and compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
      image: '/images/case-studies/cloud-migration.jpg',
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      results: ['50% cost reduction', '99.9% uptime', '3x faster deployment'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics Platform',
<<<<<<< HEAD
      description: 'Built a comprehensive data analytics platform that provides real-time insights and predictive analytics.',
      industry: 'Healthcare',
      duration: '4 months',
      results: ['Real-time insights', '40% better decisions', 'Automated reporting'],
=======
      description: 'Built a comprehensive data analytics platform that provided real-time insights and predictive analytics.',
      industry: 'Healthcare',
      duration: '4 months',
      results: ['Real-time insights', '40% better decision making', 'Automated reporting'],
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      technologies: ['Python', 'Apache Spark', 'React', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'mobile-app',
      title: 'Cross-Platform Mobile Application',
<<<<<<< HEAD
      description: 'Developed a feature-rich mobile app for both iOS and Android with seamless user experience.',
      industry: 'Retail',
      duration: '5 months',
      results: ['50% user engagement', '4.8 app store rating', '1M+ downloads'],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
      description: 'Developed a feature-rich mobile application for both iOS and Android platforms with seamless user experience.',
      industry: 'Retail',
      duration: '5 months',
      results: ['50k+ downloads', '4.8 app store rating', '30% increase in sales'],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'blockchain-solution',
      title: 'Blockchain Supply Chain Solution',
      description: 'Implemented a transparent and secure supply chain tracking system using blockchain technology.',
      industry: 'Manufacturing',
      duration: '7 months',
      results: ['100% traceability', 'Reduced fraud by 90%', 'Improved trust'],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'ai-automation',
      title: 'Process Automation with AI',
      description: 'Automated complex business processes using AI and machine learning, improving efficiency and accuracy.',
      industry: 'Insurance',
      duration: '3 months',
      results: ['70% process automation', '90% accuracy improvement', '60% time savings'],
      technologies: ['Python', 'TensorFlow', 'RPA', 'APIs'],
      image: '/api/placeholder/600/400',
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      featured: false
    }
  ];

<<<<<<< HEAD
=======
  const stats = [
<<<<<<< HEAD
    { label: 'Projects Completed', value: '150+', icon: <Award className="w-8 h-8 text-blue-400" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users className="w-8 h-8 text-green-400" /> },
    { label: 'Years Experience', value: '10+', icon: <Clock className="w-8 h-8 text-purple-400" /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-8 h-8 text-orange-400" /> }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-371b
  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud, and technology solutions." />
        <meta name="keywords" content="case studies, projects, AI solutions, cloud migration, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our innovative AI and technology solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                {study.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured Case Study</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    {study.industry}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {study.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Read Full Case Study
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View All Projects
=======
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group delivers innovative AI and IT solutions." />
        <meta name="keywords" content="case studies, projects, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
=======
    { label: 'Projects Completed', value: '500+', icon: Award },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Clock },
    { label: 'Success Rate', value: '99%', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group delivers innovative AI and IT solutions." />
        <meta name="keywords" content="case studies, projects, AI solutions, IT services, success stories, Zion Tech Group" />
      </Helmet>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
<<<<<<< HEAD
              Case
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and see how we deliver innovative AI and IT solutions that drive real business results.
=======
              Success
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform with innovative AI and IT solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                View All Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
=======
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
<<<<<<< HEAD
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology.
=======
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
<<<<<<< HEAD
              {caseStudies.map((study) => (
                <div key={study.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${study.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {study.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured</span>
=======
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 ${caseStudy.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {caseStudy.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-50">
                      {caseStudy.title.charAt(0)}
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                    </div>
                  )}
                  <div className="mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                  </div>
<<<<<<< HEAD
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        {study.industry}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
=======
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-400 font-semibold">{caseStudy.industry}</span>
                      <span className="text-gray-400 text-sm">{caseStudy.duration}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                    
<<<<<<< HEAD
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
=======
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
=======
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD
=======
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                      Read Full Case Study
                    </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Read Full Case Study
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Portfolio
>>>>>>> cursor/fix-errors-and-merge-to-main-371b
=======
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
                </button>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-d296
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;