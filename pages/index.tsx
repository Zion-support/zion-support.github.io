import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Database,
  Lock,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Server,
  BarChart3,
  Clock,
  Award,
  Network,
  Target,
  MessageCircle,
  Eye,
  FileText,
  Settings,
  Link as LinkIcon,
  CheckSquare,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Wifi,
  Link2,
  Glasses,
  Bot,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'DevOps Excellence',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience in cutting-edge technologies.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including chatbots, predictive analytics, and computer vision',
      icon: Brain,
      href: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      icon: Network,
      href: '/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      icon: Cloud,
      href: '/micro-saas'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations. Contact us at +1 302 464 0950." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, IT consulting, digital transformation, blockchain, IoT, machine learning, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Leading AI, Cloud & Technology Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI, Cloud & Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations." />
      </Head>

      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Zion Tech Group delivers comprehensive AI services, cloud solutions, and innovative technology 
                to help businesses scale, innovate, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <Link href={service.href} className="block">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="inline-flex p-3 rounded-lg bg-blue-100 mb-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/request-quote" 
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}