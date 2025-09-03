import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap 
} from 'lucide-react';

const Layout = dynamic(() => import('../components/Layout'), { ssr: false });

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Needed to improve customer experience and increase conversion rates',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: '40% increase in conversion rates, 60% reduction in support tickets',
      icon: Building2
    },
    {
      id: 2,
      title: 'Blockchain Supply Chain Management',
      client: 'Global Logistics Inc',
      industry: 'Logistics',
      challenge: 'Required transparent and secure supply chain tracking',
      solution: 'Developed blockchain-based tracking system with smart contracts',
      results: '99.9% accuracy in tracking, 30% reduction in disputes',
      icon: Globe
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices Platform',
      client: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Legacy system couldn\'t scale with growing user base',
      solution: 'Migrated to cloud-native microservices architecture',
      results: '300% improvement in performance, 50% reduction in costs',
      icon: Zap
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Explore our successful case studies and see how we've helped businesses transform with cutting-edge technology solutions." 
        />
      </Head>
      
      <Layout 
        title="Case Studies"
        description="Explore our successful case studies and see how we've helped businesses transform with cutting-edge technology solutions"
      >
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform with cutting-edge technology solutions
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <study.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-gray-600">{study.client}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;