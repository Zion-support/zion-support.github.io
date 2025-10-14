import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import FuturisticCard from './components/FuturisticCard';
import FuturisticButton from './components/FuturisticButton';
import ResponsiveContainer from './components/ResponsiveContainer';

export default function HomePage() {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      href: '/ai-solutions'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.',
      href: '/cloud-services'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      href: '/cybersecurity'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies and implementation.',
      href: '/digital-transformation'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Enterprise Security',
    'Custom Implementation',
    'Proven Results'
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Success Rate', value: '99%' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud, cybersecurity, and digital transformation solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transforming businesses with cutting-edge AI, cloud, and cybersecurity solutions. 
                Your trusted partner in digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/about">
                  <FuturisticButton variant="outline" size="lg">
                    Learn More
                  </FuturisticButton>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link to={service.href}>
                    <FuturisticButton className="w-full">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine deep technical expertise with business acumen to deliver 
                  solutions that drive real results for your organization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how our solutions can accelerate your digital transformation 
                  and drive business growth.
                </p>
                <Link to="/contact">
                  <FuturisticButton size="lg" className="w-full">
                    Start Your Journey
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses 
                with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Contact Us Today
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/case-studies">
                  <FuturisticButton variant="outline" size="lg">
                    View Case Studies
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}