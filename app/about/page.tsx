'use client';
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI and IT solutions that transform businesses and drive meaningful impact.'
    },
    {icon: Users,
      title: 'Client-Focused',
      description: 'Every solution we create is tailored to meet the unique needs and challenges of our clients.'},
    {icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and innovation in everything we do.'}
  ]

  const values = [
    {icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create solutions that were previously thought impossible.'},
    {icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business dealings and client relationships.'},
    {icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a meaningful difference in the world and drive positive change.'}
  ]

  const team = [
    {name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'AI research pioneer with 15+ years in machine learning and neural networks.'},
    {name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      description: 'Full-stack architect specializing in scalable cloud infrastructure and microservices.'},
    {name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      description: 'Leading expert in natural language processing and computer vision technologies.'}
  ]
=======
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions." />
=======
        <title>About Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions for modern businesses." />
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>
=======
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Page
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. 
                We believe technology should be accessible, powerful, and transformative.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team of experts brings together decades of experience in AI, machine learning, and enterprise IT solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
=======
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-gray-900">{benefit}</span>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create innovative solutions that drive your success.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5
          </div>
        </section>
      </main>

      <Footer />
<<<<<<< HEAD
    </>
  )
}
=======
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-f1f5

export default AboutPage
      </Footer>
    </ArrowRight>
  </Navigation>