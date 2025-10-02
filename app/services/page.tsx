import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, 
  Brain, 
  Server, 
  ArrowRight, 
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
  Globe
} from 'lucide-react';
import EnhancedServicesCatalog from '../../enhanced-services-catalog';

export default function ServicesOverview() {
  const title = 'Comprehensive Services — Zion Tech Group';
  const description = 'Complete suite of micro SaaS, AI services, and IT solutions. Production-ready applications, cutting-edge AI technologies, and comprehensive IT services for modern businesses.';

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      name: 'AI Customer Service Automation',
      description: 'Transform customer support with intelligent automation and 24/7 AI-powered assistance',
      icon: Brain,
      link: '/services/ai-customer-service-automation',
      features: ['300% ROI', '60% Cost Reduction', '80% Faster Response', '24/7 Support'],
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      price: '$299/month'
    },
    {
      name: 'Smart Appointment Scheduler',
      description: 'Streamline bookings with AI-powered optimization and automated reminders',
      icon: Clock,
      link: '/services/appointment-scheduling-saas',
      features: ['250% ROI', '50% Less No-Shows', '35% More Bookings', '30 Day Trial'],
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      price: '$49/month'
    },
    {
      name: 'Enterprise Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and expert guidance',
      icon: Server,
      link: '/services/cloud-migration-service',
      features: ['200% ROI', '40% Cost Reduction', 'Zero Downtime', '24/7 Support'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      price: 'Custom Pricing'
    },
    {
      name: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics and reporting',
      icon: TrendingUp,
      link: '/services/ai-business-intelligence',
      features: ['400% ROI', '70% Time Savings', 'Real-time Analytics', '21 Day Trial'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      price: '$199/month'
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response with AI-powered security automation',
      icon: Shield,
      link: '/services/ai-cybersecurity-platform',
      features: ['500% ROI', '90% Threat Reduction', 'Real-time Monitoring', '14 Day Trial'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      price: '$399/month'
    },
    {
      name: 'Telemedicine Platform',
      description: 'Complete virtual healthcare solution with video consultations and patient management',
      icon: Users,
      link: '/services/healthcare-telemedicine-platform',
      features: ['300% ROI', '200% Patient Reach', '60% Less No-Shows', '30 Day Trial'],
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      price: '$149/month'
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Complete Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              {description}
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

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Service Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From production-ready micro SaaS applications to cutting-edge AI technologies and comprehensive IT services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 h-full">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                        <span className={`text-sm ${service.textColor} font-medium`}>Featured Service</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{service.price}</div>
                        <div className="text-sm text-gray-500">Starting price</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={service.link}
                        className={`flex-1 ${service.bgColor} ${service.textColor} hover:opacity-90 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value with proven results, cutting-edge technology, and comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Deployment</h3>
                <p className="text-gray-600">Quick implementation with proven methodologies and experienced teams</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Security</h3>
                <p className="text-gray-600">Enterprise-grade security with compliance and best practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High ROI</h3>
                <p className="text-gray-600">Average 280% ROI with measurable business impact and value</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">24/7 support with dedicated experts and ongoing optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get started with a free consultation and discover how our comprehensive services can drive your success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-200 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-200 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-gray-200 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Free Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-lg">Business requirements analysis and strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-lg">Technology solution recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-lg">Implementation roadmap and timeline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-lg">ROI projections and success metrics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Catalog */}
        <EnhancedServicesCatalog />
      </div>
    </>
  );
}