import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Cloud,
  Server,
  Database,
  Lock,
  BarChart3,
  Settings,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Cloud Migration Service - Zion Tech Group',
  description: 'Seamless cloud transformation with zero downtime. Complete cloud migration service including assessment, planning, execution, and optimization.',
  keywords: 'cloud migration, AWS, Azure, Google Cloud, enterprise migration, zero downtime migration',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CloudMigrationService() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Comprehensive migration assessment and planning',
    'Zero-downtime migration strategy and execution',
    'Security and compliance validation and certification',
    'Performance optimization and cost analysis',
    '24/7 migration support and monitoring',
    'Post-migration optimization and training',
    'Multi-cloud expertise (AWS, Azure, Google Cloud)',
    'Automated migration tools and processes'
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve scalability and performance',
    'Enhanced security and compliance',
    'Disaster recovery capabilities',
    'Modern development environment',
    'Reduced maintenance overhead'
  ];

  const capabilities = [
    'Multi-cloud expertise and certification',
    'Automated migration tools and scripts',
    'Compliance certification (SOC2, HIPAA, GDPR)',
    '24/7 support and monitoring',
    'Custom migration strategies',
    'Performance optimization and tuning'
  ];

  const useCases = [
    'Legacy system modernization',
    'Disaster recovery implementation',
    'Scalability improvement',
    'Cost reduction and optimization',
    'Security enhancement',
    'Compliance requirements'
  ];

  const technologies = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Docker and Kubernetes',
    'Terraform and Infrastructure as Code',
    'CI/CD Pipelines',
    'Monitoring and Logging',
    'Security and Compliance Tools'
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure, applications, and dependencies',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Custom migration strategy with risk mitigation and rollback plans',
      duration: '1 week'
    },
    {
      step: '3',
      title: 'Migration Execution',
      description: 'Zero-downtime migration with real-time monitoring and support',
      duration: '2-8 weeks'
    },
    {
      step: '4',
      title: 'Optimization & Training',
      description: 'Performance tuning, cost optimization, and team training',
      duration: '1-2 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-6">☁️</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Enterprise Cloud Migration
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Seamless cloud transformation with zero downtime. Complete migration service including assessment, planning, execution, and optimization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom Enterprise Pricing</h2>
            <p className="text-xl text-gray-600">Tailored solutions for your specific needs</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">Custom</div>
                <div className="text-xl text-gray-600 mb-4">pricing based on scope</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-1" />
                  Enterprise Solution
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">200%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">4-12</div>
                  <div className="text-gray-600">Weeks Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-600">Proven methodology for successful cloud migration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="text-sm text-purple-600 font-medium">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Features</h2>
            <p className="text-xl text-gray-600">Everything you need for successful cloud migration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Benefits</h2>
            <p className="text-xl text-gray-600">Real results from our enterprise clients</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade expertise and tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600">Industries and scenarios we serve</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Platforms</h2>
            <p className="text-xl text-gray-600">Expertise across all major cloud platforms</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Position</h2>
            <p className="text-xl text-gray-600">Leading cloud migration experts</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$8.2B</div>
              <div className="text-gray-600">Market Size by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">18%</div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that have successfully migrated to the cloud with our expert guidance and proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-purple-400">{contactInfo.phone}</a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400">{contactInfo.email}</a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}