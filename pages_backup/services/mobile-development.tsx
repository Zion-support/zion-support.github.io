import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Smartphone, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Globe } from 'lucide-react';

const MobileDevelopment: NextPage = () => {
  const mobileSolutions = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and SwiftUI.',
      features: ['iPhone Apps', 'iPad Apps', 'Apple Watch Apps', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'Android Development',
      description: 'Native Android applications built with Kotlin and Jetpack Compose.',
      features: ['Phone Apps', 'Tablet Apps', 'Wear OS Apps', 'Google Play Optimization']
    },
    {
      icon: Zap,
      title: 'Cross-Platform',
      description: 'Single codebase for both iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Unified Experience']
    },
    {
      icon: BarChart3,
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and performance optimization.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', 'User Analytics']
    }
  ];

  const developmentProcess = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your business goals and defining app requirements.'
    },
    {
      number: '02',
      title: 'Design & UX',
      description: 'Creating intuitive user interfaces and exceptional user experiences.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your mobile app using modern technologies and best practices.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across multiple devices and platforms.'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'App store submission and go-live with ongoing support.'
    }
  ];

  const technologies = [
    {
      platform: 'iOS',
      tools: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Xcode', 'TestFlight']
    },
    {
      platform: 'Android',
      tools: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room Database', 'Android Studio', 'Firebase']
    },
    {
      platform: 'Cross-Platform',
      tools: ['React Native', 'Flutter', 'Xamarin', 'Expo', 'Redux', 'MobX']
    }
  ];

  const appTypes = [
    {
      type: 'Business Apps',
      description: 'Enterprise solutions for internal operations and customer management.',
      examples: ['CRM Systems', 'Inventory Management', 'Employee Portals', 'Client Apps']
    },
    {
      type: 'E-commerce Apps',
      description: 'Mobile shopping experiences with payment integration.',
      examples: ['Online Stores', 'Marketplace Apps', 'Payment Apps', 'Loyalty Programs']
    },
    {
      type: 'Social Media Apps',
      description: 'Platforms for connecting and sharing content.',
      examples: ['Social Networks', 'Content Sharing', 'Messaging Apps', 'Community Platforms']
    },
    {
      type: 'Utility Apps',
      description: 'Tools and services for everyday tasks.',
      examples: ['Productivity Tools', 'Health & Fitness', 'Travel Apps', 'Educational Apps']
    }
  ];

  return (
    <>
      <Head>
        <title>Mobile Development Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's mobile app development services. iOS, Android, and cross-platform solutions." />
        <meta name="keywords" content="mobile development, iOS development, Android development, React Native, Flutter, mobile apps, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-900 via-blue-900 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Mobile Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Create powerful, engaging mobile applications that connect with your users 
              and drive business growth. From iOS to Android, we deliver exceptional experiences.
            </p>
          </div>
        </section>

        {/* Mobile Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mobile Development Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive mobile development services across all major platforms, 
                helping businesses reach their users wherever they are.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology that ensures successful mobile app delivery 
                and maximum value for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Technologies We Use</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We leverage the latest mobile development technologies and frameworks 
                to build high-performance, scalable applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">{tech.platform}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Types of Apps We Build</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have experience building mobile applications across various industries 
                and use cases, from business solutions to consumer apps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {appTypes.map((appType, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{appType.type}</h3>
                  <p className="text-gray-600 mb-4">{appType.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {appType.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Zion Tech Group for Mobile Development?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver mobile applications 
                that not only look great but also perform exceptionally well.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">User-Centric Design</h3>
                <p className="text-gray-600">
                  We prioritize user experience and create intuitive interfaces that 
                  engage and delight your users.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Performance Focused</h3>
                <p className="text-gray-600">
                  We build fast, efficient mobile apps that provide excellent 
                  user experience and performance.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security First</h3>
                <p className="text-gray-600">
                  We implement robust security measures to protect your app 
                  and your users' data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app development needs and create a solution 
              that helps you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileDevelopment;