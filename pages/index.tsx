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

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized solutions that deliver exceptional performance and speed.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your data and systems.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Cloud-based solutions accessible from anywhere in the world.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.'
    }
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
            with cutting-edge AI, cloud architecture, and innovative development services.
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
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-blue-400"> Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Zion Tech Group delivers innovative micro SaaS, IT services, and AI solutions 
              that drive growth, efficiency, and competitive advantage for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/services">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Explore Services
                </span>
              </Link>
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-0451
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions and machine learning models tailored to your business needs.
              </p>
              <Link href="/services/ai-development" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions and infrastructure design for modern applications.
              </p>
              <Link href="/services/cloud-services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Modern, responsive web applications built with cutting-edge technologies.
              </p>
              <Link href="/services/web-development" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <Link href="/services/mobile-development" className="text-orange-600 hover:text-orange-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-4">
                Innovative blockchain technology for secure, transparent business processes.
              </p>
              <Link href="/services/blockchain-solutions" className="text-red-600 hover:text-red-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT Platforms</h3>
              <p className="text-gray-600 mb-4">
                Connected device solutions and IoT infrastructure for smart business operations.
              </p>
              <Link href="/services/iot-platforms" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
=======
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-0451
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
=======
      {/* Features Section */}
      <section className="py-20">
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-0451
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team consists of industry experts with years of experience in cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">We've successfully delivered hundreds of projects across various industries and technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">We stay ahead of the curve, implementing the latest technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock support ensures your systems are always running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                Schedule a Consultation
              </Link>
=======
              We combine cutting-edge technology with proven methodologies to deliver 
              solutions that exceed expectations and drive real business results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable SaaS applications designed to solve specific business challenges 
              and streamline your operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">${service.pricing.starter}</div>
                  <div className="text-sm text-gray-500">Starting price per month</div>
                </div>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Services & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, 
              and optimize your technology operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">${service.pricing.starter.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Machine Learning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, 
              and create competitive advantages for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">${service.pricing.starter.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Starting price</div>
                </div>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Group transformed our business operations with their AI-powered solutions. 
                The results exceeded our expectations and the team was incredibly professional."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, TechStart Inc.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Their cloud migration service was seamless and professional. 
                We experienced zero downtime and improved performance significantly."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">CTO, Global Solutions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The micro SaaS solutions they developed for us have streamlined our workflow 
                and increased productivity by 40%. Highly recommended!"
              </p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Operations Manager, InnovateCorp</div>
>>>>>>> cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-0451
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their digital presence with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Learn More About Us
=======
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;