<<<<<<< HEAD
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['End-to-end encryption', 'Security protocols', 'Compliance standards']
    },
    {
      icon: Zap,
      title: 'High-Speed Connectivity',
      description: 'Ultra-fast 5G connectivity with low latency for mission-critical applications.',
      benefits: ['Ultra-low latency', 'High bandwidth', 'Reliable performance']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures for 5G networks and connected devices.',
      benefits: ['Network security', 'Device protection', 'Data encryption']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide 5G network deployment with local compliance and regulations.',
      benefits: ['Global reach', 'Local compliance', 'Scalable infrastructure']
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of existing infrastructure and requirements.',
      duration: '2-4 weeks'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Custom 5G network design tailored to your specific needs.',
      duration: '3-6 weeks'
    },
    {
      step: '03',
      title: 'Infrastructure Setup',
      description: 'Installation and configuration of 5G equipment and systems.',
      duration: '4-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization.',
      duration: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Full deployment with ongoing monitoring and support.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services with comprehensive design, deployment, and support. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G implementation, 5G deployment, 5G network design, 5G services, network infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional 5G Implementation Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your business with cutting-edge 5G technology. Our expert team delivers comprehensive 5G network implementation with guaranteed performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our 5G Implementation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive 5G solutions that drive business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful 5G deployment and optimal performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement 5G?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact our 5G experts today to discuss your implementation needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Ready to transform your business with 5G? Contact us today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">5g@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Global Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGImplementationPage;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">
          This page is under development. Please check back later for updates.
        </p>
      </div>
    
        </div>
      </div>
    </div>
  );
}
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
