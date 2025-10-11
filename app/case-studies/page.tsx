import React from 'react';
import { ArrowRight, Calendar, Building, TrendingUp, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  technologies: string[];
  image: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'E-commerce Platform Modernization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing performance issues and scalability problems',
      solution: 'Complete platform rebuild with modern microservices architecture',
      results: ['50% cost reduction', '99.9% uptime', '3x faster deployment'],
      duration: '6 months',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      image: '/api/placeholder/600/400'
    },
    {
      id: '2',
      title: 'AI-Powered Customer Service',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated customer service workflows',
      results: ['70% faster response time', '40% cost reduction', '95% customer satisfaction'],
      duration: '4 months',
      technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'React', 'MongoDB'],
      image: '/api/placeholder/600/400'
    },
    {
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'On-premises infrastructure limiting growth and increasing costs',
      solution: 'Complete cloud migration with optimization and automation',
      results: ['60% infrastructure cost reduction', '99.5% uptime', '2x faster processing'],
      duration: '8 months',
      technologies: ['Azure', 'Docker', 'Terraform', 'Kubernetes', 'Python'],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform and achieve their goals through innovative technology solutions.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gray-200">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Building className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">{study.industry}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h2>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Client: {study.client}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Duration: {study.duration}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Code className="w-3 h-3 mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;