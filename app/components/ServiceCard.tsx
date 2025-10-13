'use client'.
import React, { Helmet } from 'react-helmet-async'.
import React, { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'.
const ServiceCardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ServiceCard | Zion Tech Group</title>
        <meta name="description" content="Professional ServiceCard services by Zion Tech Group. Advanced AI and IT solutions for your business." />"
        <meta name="keywords" content="ServiceCard, AI solutions, IT services, Zion Tech Group, servicecard" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ServiceCard.
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced servicecard solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More.
              </button>
            </div>
          </div>
        </div>
      </section>
          <div className="text-3xl font-bold text-white mb-1">{price</div>}</div>"
          <div className="text-gray-400 text-sm">per month</div>
        </div>
  ).
      )}
      {onSelect && (
        <button.
          onClick={onSelect}className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">,</button>
          Get Started.
          <ArrowRight className="w-4 h-4 group-hover: translate-x-1 transition-transform" />,
export default ServiceCardPage.
export default ServiceCardPage.
export default ServiceCard.
  </ServiceCardProps>
