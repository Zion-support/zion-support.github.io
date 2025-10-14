import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering exceptional results for your business.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients across various industries.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, automation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600"> AI & Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We deliver cutting-edge AI solutions and IT services that drive innovation, 
              efficiency, and growth for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Machine learning, natural language processing, computer vision, and predictive analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Machine Learning</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Natural Language Processing</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Computer Vision</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                IT Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Cloud migration, system architecture, security, and performance optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Cloud Migration</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />System Architecture</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Security Solutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Complete digital transformation services to modernize your business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Process Automation</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Data Analytics</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Workflow Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations and our efficiency has improved by 40%."
                </p>
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-sm text-gray-500">CEO, TechCorp</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your goals with cutting-edge technology.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;