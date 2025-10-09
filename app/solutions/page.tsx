'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Cloud, Shield, Code, Zap, Target, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutionCategories = [
    {
      title: 'AI Solutions',
      icon: Brain,
      description: 'Comprehensive artificial intelligence solutions for modern businesses',
      solutions: [
        'AI Services & Consulting',
        'AI Marketing Automation',
        'AI Workflow Automation',
        'AI Data Analytics',
        'AI Content Generation',
        'AI Customer Support'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'IT Services',
      icon: Cloud,
      description: 'Enterprise-grade IT infrastructure and cloud solutions',
      solutions: [
        'Cloud Migration & Setup',
        'IT Infrastructure Management',
        'DevOps & CI/CD',
        'Database Services',
        'Network Solutions',
        'Cybersecurity'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      description: 'Ready-to-use AI-powered applications for immediate deployment',
      solutions: [
        '50+ AI Tools',
        'Business Applications',
        'Productivity Tools',
        'Marketing Tools',
        'Developer Tools',
        'Analytics Tools'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      description: 'Cutting-edge technologies for future-ready businesses',
      solutions: [
        'Quantum Computing',
        'Blockchain & Web3',
        'IoT & Edge Computing',
        'Robotics',
        'Business Intelligence',
        'Autonomous Systems'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored AI and IT solutions designed specifically for your business needs'
    },
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Delivering measurable results with 95% client satisfaction and 300% average ROI'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all your critical data and operations'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 expert support from our team of AI and IT specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Solutions - Zion Tech Group"
        description="Comprehensive AI and IT solutions for modern businesses. Custom AI services, IT infrastructure, micro SAAS applications, and emerging technologies."
        keywords={['AI solutions', 'IT services', 'micro SAAS', 'emerging technologies', 'business solutions', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/solutions"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with our complete suite of AI and IT solutions designed for modern enterprises
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Solution Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionCategories.map((category, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Our Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Annual Savings Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our experts for a free consultation and discover how our solutions can accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;