import React from 'react';
import Link from 'next/link';
import { Building2, Heart, DollarSign, ShoppingCart, Factory, GraduationCap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';

const SolutionsPage = () => {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions for large enterprises',
      icon: Building2,
      href: '/solutions/enterprise',
      features: ['Digital Transformation', 'Legacy System Modernization', 'Enterprise Architecture', 'Scalable Infrastructure']
    },
    {
      title: 'Healthcare Solutions',
      description: 'Technology solutions designed for healthcare organizations',
      icon: Heart,
      href: '/solutions/healthcare',
      features: ['HIPAA Compliance', 'Electronic Health Records', 'Telemedicine Platforms', 'Health Analytics']
    },
    {
      title: 'Financial Services',
      description: 'Secure and compliant solutions for financial institutions',
      icon: DollarSign,
      href: '/solutions/finance',
      features: ['Regulatory Compliance', 'Risk Management', 'Payment Processing', 'Financial Analytics']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms and marketplaces',
      icon: ShoppingCart,
      href: '/solutions/ecommerce',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Customer Analytics']
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Industry 4.0 solutions for modern manufacturing',
      icon: Factory,
      href: '/solutions/manufacturing',
      features: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control']
    },
    {
      title: 'Education Solutions',
      description: 'Technology solutions for educational institutions',
      icon: GraduationCap,
      href: '/solutions/education',
      features: ['Learning Management Systems', 'Student Information Systems', 'Online Learning Platforms', 'Educational Analytics']
    }
  ];

  const technologies = [
    'AI & Machine Learning', 'Cloud Computing', 'Blockchain', 'IoT', 'Cybersecurity', 'Data Analytics',
    'Mobile Development', 'Web Development', 'DevOps', 'Microservices', 'API Development', 'Database Design'
  ];

  return (
    <>
      <SEOHead
        title="Industry Solutions | Zion Tech Group"
        description="Comprehensive technology solutions tailored for different industries including enterprise, healthcare, finance, e-commerce, manufacturing, and education."
        keywords="industry solutions, enterprise solutions, healthcare technology, fintech, e-commerce, manufacturing, education technology"
        canonicalUrl="https://ziontechgroup.com/solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Industry Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tailored Solutions for
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Every Industry</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We understand that every industry has unique challenges and requirements. 
                Our specialized solutions are designed to address the specific needs of your sector.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our technology solutions can transform your industry and drive innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Link key={index} href={solution.href} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{solution.title}</h3>
                        <p className="text-gray-300">{solution.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build solutions that drive innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Industry?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can drive innovation and growth in your sector.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;