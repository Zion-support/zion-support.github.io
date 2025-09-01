import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Brain, Cloud, Globe, Smartphone, Shield, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services: NextPage = () => {
  return (
    <Layout
      title="Technology Services - Zion Tech Group"
      description="Comprehensive technology services including AI development, cloud services, web development, mobile development, blockchain solutions, and more. Transform your business with Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive technology services designed to transform your business operations 
            and drive digital innovation across all industries.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get Started Today
              </a>
            </Link>
            <Link href="/solutions">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                View Our Solutions
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI development to cybersecurity, we provide end-to-end technology solutions 
              that help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Transform your business with cutting-edge artificial intelligence solutions, 
                machine learning models, and intelligent automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
              <Link href="/services/ai-development" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions and infrastructure design for modern applications 
                with seamless migration and optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Cloud Migration</li>
                <li>• Infrastructure Design</li>
                <li>• Multi-Cloud Solutions</li>
                <li>• DevOps & CI/CD</li>
              </ul>
              <Link href="/services/cloud-services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Modern, responsive web applications built with cutting-edge technologies 
                for optimal performance and user experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Custom Web Applications</li>
                <li>• E-commerce Platforms</li>
                <li>• Progressive Web Apps</li>
                <li>• Performance Optimization</li>
              </ul>
              <Link href="/services/web-development" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile applications for iOS and Android 
                with cutting-edge features and seamless user experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• iOS Development</li>
                <li>• Android Development</li>
                <li>• Cross-Platform Apps</li>
                <li>• App Store Optimization</li>
              </ul>
              <Link href="/services/mobile-development" className="text-orange-600 hover:text-orange-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Security Auditing</li>
                <li>• Threat Detection</li>
                <li>• Compliance Management</li>
                <li>• Security Training</li>
              </ul>
              <Link href="/services/cybersecurity" className="text-red-600 hover:text-red-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced data analytics and business intelligence solutions 
                to drive informed decision-making and business growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Big Data Processing</li>
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Predictive Analytics</li>
              </ul>
              <Link href="/services/data-analytics">
                <a className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology services for specific business needs and emerging technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Blockchain Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Innovative blockchain technology for secure, transparent business processes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smart Contracts</li>
                <li>• DeFi Applications</li>
                <li>• Supply Chain Tracking</li>
                <li>• Digital Identity</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">IoT Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connected device solutions and IoT infrastructure for smart business operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Device Management</li>
                <li>• Data Collection</li>
                <li>• Real-time Monitoring</li>
                <li>• Predictive Maintenance</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Machine Learning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom ML models and algorithms for predictive analytics and automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Model Development</li>
                <li>• Training & Optimization</li>
                <li>• Deployment & Monitoring</li>
                <li>• Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Delivery Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering high-quality technology services that meet your business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your requirements, challenges, and objectives to understand your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-gray-600">
                We develop detailed project plans and technical specifications for your solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Execution</h3>
              <p className="text-gray-600">
                We implement your solution using industry best practices and modern technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support, monitoring, and optimization for your solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver services that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team includes certified professionals with deep expertise in cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Methodologies</h3>
                    <p className="text-gray-600">We follow industry best practices and proven methodologies for service delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing and quality assurance processes ensure reliable, high-performance solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support, monitoring, and optimization for your solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how our technology services can transform your business and drive growth.
              </p>
              <Link href="/contact">
                <a className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of technology services and start your 
            digital transformation journey with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get Started Today
              </a>
            </Link>
            <Link href="/solutions">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore Our Solutions
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;