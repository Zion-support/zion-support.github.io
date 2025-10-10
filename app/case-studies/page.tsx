'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Manufacturing Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Reduce production downtime and optimize equipment maintenance',
      solution: 'Implemented AI predictive maintenance system with IoT sensors',
      results: [
        '70% reduction in unplanned downtime',
        '$2.5M annual savings in maintenance costs',
        '95% accuracy in failure prediction',
        '25% increase in overall equipment effectiveness'
      ],
      duration: '6 months',
      teamSize: '8 specialists',
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'Premier Bank',
      industry: 'Financial Services',
      challenge: 'Migrate legacy systems to cloud while maintaining security and compliance',
      solution: 'Hybrid cloud architecture with advanced security measures',
      results: [
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster application deployment',
        'Full compliance with financial regulations'
      ],
      duration: '8 months',
      teamSize: '12 specialists',
      image: '/images/case-studies/banking.jpg'
    },
    {
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'TechStart Inc',
      industry: 'Technology',
      challenge: 'Handle increasing customer inquiries with limited support staff',
      solution: 'AI-powered chatbot and automated ticket routing system',
      results: [
        '80% reduction in response time',
        '90% customer satisfaction rate',
        '40% reduction in support costs',
        '24/7 customer support availability'
      ],
      duration: '4 months',
      teamSize: '6 specialists',
      image: '/images/case-studies/customer-service.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement',
      client: 'Healthcare Systems Ltd',
      industry: 'Healthcare',
      challenge: 'Strengthen cybersecurity posture and protect patient data',
      solution: 'Comprehensive security framework with AI threat detection',
      results: [
        '99.8% threat detection accuracy',
        'Zero security breaches since implementation',
        '50% reduction in security incidents',
        'Full HIPAA compliance achieved'
      ],
      duration: '5 months',
      teamSize: '10 specialists',
      image: '/images/case-studies/healthcare.jpg'
    },
    {
      id: 5,
      title: 'Data Analytics Platform',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Gain insights from customer data to improve sales and marketing',
      solution: 'Advanced analytics platform with machine learning capabilities',
      results: [
        '35% increase in sales conversion',
        '60% improvement in marketing ROI',
        'Real-time customer insights',
        'Predictive inventory management'
      ],
      duration: '7 months',
      teamSize: '9 specialists',
      image: '/images/case-studies/retail.jpg'
    },
    {
      id: 6,
      title: 'DevOps Transformation',
      client: 'Software Solutions Co',
      industry: 'Software Development',
      challenge: 'Accelerate software delivery and improve deployment reliability',
      solution: 'Complete DevOps pipeline with CI/CD and automated testing',
      results: [
        '75% faster deployment cycles',
        '90% reduction in deployment failures',
        '50% improvement in code quality',
        'Automated testing coverage increased to 95%'
      ],
      duration: '6 months',
      teamSize: '7 specialists',
      image: '/images/case-studies/devops.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Client: {study.client}</h3>
                    <p className="text-gray-300 mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;