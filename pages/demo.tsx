import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Code,
  Cloud
} from 'lucide-react';

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const demos = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'See our AI solutions in action - from natural language processing to predictive analytics',
      duration: '30 minutes',
      icon: Brain,
      features: ['AI Chatbot Demo', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Platform',
      description: 'Experience our micro SAAS solutions for business automation and efficiency',
      duration: '25 minutes',
      icon: Code,
      features: ['Business Intelligence', 'Customer Experience Hub', 'Supply Chain Optimizer', 'HR Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'it-services',
      title: 'IT Infrastructure',
      description: 'Explore our comprehensive IT services and infrastructure management solutions',
      duration: '35 minutes',
      icon: Cloud,
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps Automation', 'Network Management'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Discover how we help businesses transform digitally with cutting-edge solutions',
      duration: '40 minutes',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'Mobile Solutions', 'Integration Services'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get insights from our certified professionals'
    },
    {
      icon: Shield,
      title: 'Secure Environment',
      description: 'Safe, controlled demo environment'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book at your convenience'
    },
    {
      icon: Star,
      title: 'Personalized Experience',
      description: 'Tailored to your specific needs'
    }
  ];

  const handleBookDemo = async (demoId: string) => {
    setSelectedDemo(demoId);
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsBooking(false);
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <>
        <Head>
          <title>Demo Booked Successfully - Zion Tech Group</title>
          <meta name="description" content="Your demo has been booked successfully. We'll contact you soon to confirm the details." />
        </Head>
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Demo Booked Successfully!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for booking a demo with Zion Tech Group. Our team will contact you within 24 hours to confirm the details and schedule your personalized demonstration.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• We'll review your demo request</li>
                <li>• Our team will prepare a personalized demo</li>
                <li>• You'll receive a calendar invitation</li>
                <li>• Join us for an interactive demonstration</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Book a Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our technology solutions firsthand. Book a personalized demo with our experts." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Our Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                See our technology solutions in action. Book a personalized demo and discover how we can transform your business.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Book a Demo?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get hands-on experience with our solutions and see how they can benefit your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Options */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Demo
              </h2>
              <p className="text-lg text-gray-600">
                Select the solution you'd like to see in action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center mr-4`}>
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {demo.title}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{demo.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {demo.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What you'll see:</h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBookDemo(demo.id)}
                    disabled={isBooking}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${demo.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
                  >
                    {isBooking && selectedDemo === demo.id ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Booking...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Book Demo
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Don't wait to see the future of technology. Book your demo today and discover how our solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}