import React from 'react';
import { ArrowRight, Users, Award, Clock, CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';
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
      results: ['50% cost reduction', '99.9% uptime', '3x faster deployment'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics Platform',
      description: 'Built a comprehensive data analytics platform that provides real-time insights and predictive analytics.',
      industry: 'Healthcare',
      duration: '4 months',
      results: ['Real-time insights', '40% better decisions', 'Automated reporting'],
      technologies: ['Python', 'Apache Spark', 'React', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'mobile-app',
      title: 'Cross-Platform Mobile Application',
      description: 'Developed a feature-rich mobile app for both iOS and Android with seamless user experience.',
      industry: 'Retail',
      duration: '5 months',
      results: ['50% user engagement', '4.8 app store rating', '1M+ downloads'],
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: <Award className="w-8 h-8 text-blue-400" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users className="w-8 h-8 text-green-400" /> },
    { label: 'Years Experience', value: '10+', icon: <Clock className="w-8 h-8 text-purple-400" /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-8 h-8 text-orange-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how Zion Tech Group delivers innovative AI and IT solutions." />
        <meta name="keywords" content="case studies, projects, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and see how we deliver innovative AI and IT solutions that drive real business results.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {caseStudies.map((study) => (
                <div key={study.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${study.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {study.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured</span>
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
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;