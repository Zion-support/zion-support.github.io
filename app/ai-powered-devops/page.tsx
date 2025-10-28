import React from 'react'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'AI-Powered DevOps | Zion Tech Group',
  description: 'Professional AI-powered DevOps services and solutions by Zion Tech Group.',
  keywords: 'AI DevOps, automation, CI/CD, technology, services',
  openGraph: {
    title: 'AI-Powered DevOps | Zion Tech Group',
    description: 'Professional AI-powered DevOps services and solutions by Zion Tech Group.',
    type: 'website',
  },
};

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Optimize your development workflow with data-driven insights and automation.',
      benefits: ['Code quality analysis', 'Performance monitoring', 'Automated testing', 'Deployment optimization']
    },
    {
      icon: Target,
      title: 'Automated Deployment',
      description: 'Streamline your deployment process with intelligent automation and monitoring.',
      benefits: ['Zero-downtime deployments', 'Rollback capabilities', 'Environment management', 'Quality gates']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Continuously improve your development processes with AI-driven insights.',
      benefits: ['Process optimization', 'Team productivity', 'Quality metrics', 'Continuous learning']
    }
  ];

  const services = [
    'AI-Powered CI/CD Pipeline Setup',
    'Intelligent Code Review Automation',
    'Predictive Performance Monitoring',
    'Automated Testing & Quality Assurance',
    'Smart Infrastructure Management',
    'DevOps Process Optimization'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered DevOps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your development workflow with intelligent automation, 
              predictive analytics, and AI-driven insights that accelerate delivery 
              while maintaining the highest quality standards.
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
              Our AI-powered DevOps solutions combine cutting-edge technology with proven methodologies.
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
              Comprehensive AI-powered DevOps solutions tailored to your needs.
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
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our AI-powered DevOps solutions can accelerate your development process.
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

export default AiPoweredDevopsPage;