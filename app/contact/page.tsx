import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  MessageSquare,
  Calendar,
  Star,
  Shield,
  Zap,
  Target
} from 'lucide-react';

export default function ContactPage() {
  const title = 'Contact Us — Zion Tech Group';
  const description = 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT solutions. Professional consultation and support.';

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      description: 'Call us for immediate assistance',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us your project details',
      available: '24/7 response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008\nMiddletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our office',
      available: 'By appointment only'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'https://ziontechgroup.com',
      link: 'https://ziontechgroup.com',
      description: 'Explore our services online',
      available: '24/7 available'
    }
  ];

  const services = [
    {
      name: 'AI Services & Solutions',
      description: 'Intelligent automation and AI-powered solutions',
      pricing: '$500 - $30,000/month',
      delivery: '1-12 weeks'
    },
    {
      name: 'AI-Powered Business Automation',
      description: 'Transform operations with intelligent automation',
      pricing: '$800 - $35,000/month',
      delivery: '1-8 weeks'
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Production-ready micro SaaS applications',
      pricing: '$199 - $12,000/month',
      delivery: '1-6 weeks'
    },
    {
      name: 'Cloud Infrastructure & DevOps',
      description: 'Enterprise-grade cloud and DevOps solutions',
      pricing: '$2,000 - $50,000/project',
      delivery: '2-12 weeks'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Advanced security and compliance automation',
      pricing: '$2,500 - $40,000/month',
      delivery: '2-8 weeks'
    },
    {
      name: 'Data Analytics & Business Intelligence',
      description: 'Transform data into actionable insights',
      pricing: '$2,500 - $35,000/month',
      delivery: '2-12 weeks'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: '98% Client Satisfaction',
      description: 'Proven track record of successful project delivery'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Average project completion in 4 weeks'
    },
    {
      icon: Target,
      title: '340% Average ROI',
      description: 'Significant return on investment for our clients'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2, GDPR, HIPAA compliant solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI, micro SaaS, and IT solutions? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us for your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <method.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              <a 
                href={method.link} 
                className="text-blue-600 hover:text-blue-700 font-medium mb-2 block"
              >
                {method.value}
              </a>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <p className="text-sm text-gray-500">{method.available}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions with transparent pricing and fast delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pricing:</span>
                    <span className="text-sm font-medium text-green-600">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Delivery:</span>
                    <span className="text-sm font-medium text-blue-600">{service.delivery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results and exceptional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free consultation and discover how we can help transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}