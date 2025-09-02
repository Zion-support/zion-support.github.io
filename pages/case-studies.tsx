import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: NextPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor user experience',
      solution: 'Complete platform rebuild with modern architecture and AI-powered recommendations',
      results: [
        '60% increase in conversion rate',
        '45% reduction in cart abandonment',
        '80% improvement in page load speed',
        '200% increase in mobile traffic'
      ],
      image: '/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems affecting care quality',
      solution: 'Integrated data platform with predictive analytics and real-time monitoring',
      results: [
        '30% improvement in patient outcomes',
        '50% reduction in readmission rates',
        '25% increase in operational efficiency',
        '99.9% system uptime achieved'
      ],
      image: '/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing production delays and quality issues',
      solution: 'IoT sensors integration with predictive maintenance and quality control',
      results: [
        '35% reduction in downtime',
        '20% increase in production efficiency',
        '90% improvement in quality control',
        '40% reduction in maintenance costs'
      ],
      image: '/case-studies/manufacturing.jpg',
      duration: '10 months',
      team: '10 engineers'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'On-premise infrastructure limiting scalability and increasing costs',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: [
        '50% reduction in infrastructure costs',
        '99.99% uptime achieved',
        '3x faster application deployment',
        'Full compliance with financial regulations'
      ],
      image: '/case-studies/finance.jpg',
      duration: '12 months',
      team: '15 experts'
    },
    {
      title: 'Startup MVP Development',
      client: 'TechStartup Inc.',
      industry: 'Technology',
      challenge: 'Need to quickly validate product-market fit with limited resources',
      solution: 'Rapid MVP development with scalable architecture and user analytics',
      results: [
        'Launched in 3 months',
        '10,000+ users in first 6 months',
        'Series A funding secured',
        'Product-market fit achieved'
      ],
      image: '/case-studies/startup.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      title: 'Government Digital Services',
      client: 'City of Innovation',
      industry: 'Government',
      challenge: 'Citizen services were paper-based and inefficient',
      solution: 'Digital transformation with citizen portal and automated workflows',
      results: [
        '70% reduction in processing time',
        '85% citizen satisfaction rate',
        '60% reduction in operational costs',
        '24/7 service availability'
      ],
      image: '/case-studies/government.jpg',
      duration: '18 months',
      team: '20 specialists'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Users className="w-8 h-8" /> },
    { number: '$50M+', label: 'Cost Savings Delivered', icon: <DollarSign className="w-8 h-8" /> },
    { number: '99.9%', label: 'Average Uptime', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses transform their operations and achieve remarkable results
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results, real impact on businesses across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Case Study Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results for your business. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudiesPage;