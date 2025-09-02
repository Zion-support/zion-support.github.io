import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

const Home: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, quantum computing, blockchain, and innovative development services. From micro SaaS 
            applications to enterprise AI solutions, we deliver measurable results that drive growth and efficiency.
            <br /><br />
            <span className="text-blue-300 font-semibold">Contact us today:</span> 
            <br />📞 <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200">+1 302 464 0950</a> | 
            📧 <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">kleber@ziontechgroup.com</a>
            <br />📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">75+</div>
              <div className="text-gray-300">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From innovative micro SaaS applications to enterprise-grade AI solutions, quantum computing, blockchain infrastructure, 
              and cutting-edge IT services, we provide end-to-end technology solutions that drive measurable business results and competitive advantages.
              <br /><br />
              <span className="text-blue-600 font-semibold">50+ Services Available</span> | 
              <span className="text-green-600 font-semibold"> Starting from $12/month</span> | 
              <span className="text-purple-600 font-semibold"> 24/7 Support</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6">
                Innovative, focused software solutions that solve specific business problems with minimal overhead. 
                Starting from $12/month, our micro SaaS applications deliver immediate ROI and scale with your business.
                <br /><br />
                <span className="text-sm text-blue-600 font-semibold">25+ Solutions Available:</span>
                <br />• AI Code Reviewer Pro ($45-299/month)
                <br />• Smart Contract Auditor ($199-1299/month)
                <br />• AI SEO Optimizer ($39-249/month)
                <br />• Blockchain Analytics ($79-499/month)
                <br />• AI Video Editor ($29-199/month)
              </p>
              <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses. 
                From $2,000 to $400,000, our IT services ensure your infrastructure is secure, scalable, and optimized.
                <br /><br />
                <span className="text-sm text-blue-600 font-semibold">15+ Services Available:</span>
                <br />• Quantum Cloud Infrastructure ($25K-200K)
                <br />• Edge Computing Architecture ($15K-120K)
                <br />• Zero Trust Security ($20K-150K)
                <br />• AIOps Platform ($18K-140K)
                <br />• Blockchain Infrastructure ($30K-250K)
              </p>
              <Link href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages. 
                From $4,000 to $800,000, our AI services transform your business with machine learning, quantum AI, and automation.
                <br /><br />
                <span className="text-sm text-blue-600 font-semibold">20+ Services Available:</span>
                <br />• Quantum AI Algorithms ($50K-400K)
                <br />• AI Drug Discovery ($100K-800K)
                <br />• AI Climate Modeling ($40K-350K)
                <br />• AI Space Exploration ($60K-500K)
                <br />• AI Metaverse Platform ($80K-700K)
              </p>
              <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 1000+ successful businesses that have transformed their operations with our technology solutions. 
            Get a free consultation and discover how we can accelerate your growth and efficiency.
            <br /><br />
            <span className="text-blue-200 font-semibold">Ready to get started?</span>
            <br />📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-blue-200">+1 302 464 0950</a>
            <br />📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200">kleber@ziontechgroup.com</a>
            <br />🌐 Visit: <a href="https://ziontechgroup.com" className="text-white hover:text-blue-200">ziontechgroup.com</a>
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;