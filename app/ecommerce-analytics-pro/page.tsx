import React from 'react'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'E-commerce Analytics Pro | Zion Tech Group',
  description: 'Professional e-commerce analytics services by Zion Tech Group.',
  keywords: 'e-commerce, analytics, data, technology, services',
  openGraph: {
    title: 'E-commerce Analytics Pro | Zion Tech Group',
    description: 'Professional e-commerce analytics services by Zion Tech Group.',
    type: 'website',
  },
};

const EcommerceAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Performance Tracking',
      description: 'Comprehensive tracking and analysis of your e-commerce performance metrics.',
      benefits: ['Sales analytics', 'Customer behavior', 'Conversion tracking', 'Revenue optimization']
    },
    {
      icon: Target,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation for targeted marketing and personalization.',
      benefits: ['Behavioral analysis', 'Demographic insights', 'Purchase patterns', 'Personalized campaigns']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Data-driven strategies to optimize your e-commerce growth and profitability.',
      benefits: ['Conversion optimization', 'A/B testing', 'Performance insights', 'ROI improvement']
    }
  ];

  const services = [
    'E-commerce Analytics Dashboard Setup',
    'Customer Behavior Analysis',
    'Sales Performance Tracking',
    'Conversion Rate Optimization',
    'Marketing Attribution Analysis',
    'Inventory Management Analytics'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce Analytics Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your e-commerce business with advanced analytics, 
              AI-powered insights, and data-driven optimization strategies 
              that drive growth and maximize profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our e-commerce analytics solutions combine cutting-edge technology with proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive e-commerce analytics solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional implementation and support for {service.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your E-commerce?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our analytics solutions can boost your e-commerce performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-300 text-blue-100 rounded-lg hover:bg-blue-500 transition-colors font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceAnalyticsProPage;