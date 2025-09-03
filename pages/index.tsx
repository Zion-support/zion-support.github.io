import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
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
  BarChart3,
  Target,
  Award,
  Clock,
  MessageCircle,
  FileText,
  Settings,
  Cpu,
  Layers,
  Network,
  Play,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500',
      href: '/services/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500',
      href: '/services/transformation'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-indigo-500 to-purple-500',
      href: '/services#analytics'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      color: 'from-red-500 to-pink-500',
      href: '/services#development'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The cloud architecture they designed is incredibly scalable and secure. We can now handle 10x more traffic.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their DevOps practices reduced our deployment time from hours to minutes. Outstanding work!',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const solutions = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Build and scale your software-as-a-service platform with our proven frameworks.',
      icon: Rocket,
      href: '/micro-saas'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamlessly connect your existing systems with modern cloud technologies.',
      icon: Network,
      href: '/solutions#integration'
    },
    {
      title: 'IoT & Smart Systems',
      description: 'Connect and manage your devices with intelligent IoT solutions.',
      icon: Cpu,
      href: '/solutions#iot'
    }
  ];

  return (
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Transform your business with cutting-edge AI, cloud architecture, DevOps, and innovative development services. Expert technology solutions for modern enterprises."
      keywords="AI solutions, cloud architecture, DevOps, cybersecurity, digital transformation, micro SaaS, technology consulting, enterprise solutions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Leading Technology Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver cutting-edge AI services, cloud infrastructure, cybersecurity solutions, and innovative technology platforms that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
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
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Innovative Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for modern business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss how our technology solutions can accelerate your growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us Today
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}