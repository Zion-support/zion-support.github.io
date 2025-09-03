import type { NextPage } from 'next';
import Link from 'next/link';
import { Brain, Cloud, Shield, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Home: NextPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models for your business needs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp Industries"
    },
    {
      quote: "Their cloud architecture expertise helped us scale our platform to handle millions of users seamlessly.",
      author: "Michael Chen",
      role: "CTO, DataFlow",
      company: "DataFlow Systems"
    },
    {
      quote: "Working with Zion Tech Group was a game-changer for our digital transformation journey.",
      author: "Emily Rodriguez",
      role: "VP of Technology",
      company: "InnovateCorp"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12">
              <Link href="/services">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors text-base md:text-lg inline-block">
                  Our Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors text-base md:text-lg inline-block">
                  Get in Touch
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Why Choose Zion Tech Group?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 md:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4 md:mb-6">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">AI Services</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">Cutting-edge AI solutions for business automation and intelligence</p>
              <Link href="/ai-services" className="block">
                <div className="w-full bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center text-sm md:text-base">
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 w-fit mx-auto mb-4 md:mb-6">
                <Cloud className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">IT Services</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">Complete IT infrastructure and cloud solutions</p>
              <Link href="/it-services" className="block">
                <div className="w-full bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center text-sm md:text-base">
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 w-fit mx-auto mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Micro SaaS</h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">Custom micro SaaS applications for niche markets</p>
              <Link href="/micro-saas" className="block">
                <div className="w-full bg-blue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center text-sm md:text-base">
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-base md:text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm md:text-base lg:text-lg mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 font-medium text-xs md:text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
              Get Free Consultation
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm md:text-base">
              Learn More About Us
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="mt-8 text-sm md:text-base text-blue-100">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;