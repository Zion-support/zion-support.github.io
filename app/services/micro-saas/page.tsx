<<<<<<< HEAD
export const metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Micro SaaS solutions for niche business needs.',
  keywords: 'micro-saas, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Micro SaaS solutions for niche business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored micro-saas solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your micro-saas solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
=======
import Link from 'next/link';
import { CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Build and scale micro SaaS applications with our specialized development services. Fast, efficient, and profitable solutions for modern businesses.',
  keywords: 'micro SaaS development, SaaS applications, software as a service, web applications, scalable software'
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-purple-600" />,
    title: 'Rapid Development',
    description: 'Get your SaaS product to market 50% faster with our proven development methodology.'
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: 'Scalable Architecture',
    description: 'Built to handle growth from startup to enterprise with cloud-native architecture.'
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-600" />,
    title: 'Global Deployment',
    description: 'Deploy anywhere in the world with our multi-region cloud infrastructure.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'User Management',
    description: 'Complete user authentication, authorization, and subscription management.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    title: 'Analytics & Insights',
    description: 'Built-in analytics to track user behavior and business metrics.'
  }
];

const services = [
  {
    title: 'SaaS MVP Development',
    description: 'Get your minimum viable product to market quickly with our streamlined development process.',
    features: ['User Authentication', 'Payment Integration', 'Basic Dashboard', 'API Development'],
    price: 'Starting at $15,000'
  },
  {
    title: 'Full SaaS Platform',
    description: 'Complete SaaS solution with all features needed for a successful business.',
    features: ['Multi-tenant Architecture', 'Advanced Analytics', 'Admin Panel', 'Mobile App'],
    price: 'Starting at $50,000'
  },
  {
    title: 'SaaS Migration',
    description: 'Migrate your existing application to a modern SaaS architecture.',
    features: ['Legacy System Analysis', 'Data Migration', 'API Modernization', 'Performance Optimization'],
    price: 'Starting at $25,000'
  }
];

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">
              Micro SaaS Development
            </h1>
            <p className="text-responsive-md text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build and scale micro SaaS applications with our specialized development services. 
              Fast, efficient, and profitable solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg font-semibold">
                Start Your Project
              </Link>
              <Link href="/services" className="btn btn-outline px-8 py-4 text-lg font-semibold">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Development?
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in building micro SaaS applications that are fast, scalable, and profitable from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our Micro SaaS Services
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From MVP to full-scale platform, we have the expertise to build your SaaS dream.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-responsive-md text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create a custom solution that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your Project
            </Link>
            <Link href="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
>>>>>>> origin/main
}