import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Play, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Cloud,
  Code
} from 'lucide-react';

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState(1);

  const demos = [
    {
      id: 1,
      title: 'AI Services Demo',
      description: 'See our AI solutions in action',
      icon: Brain,
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'Cloud Solutions Demo',
      description: 'Explore our cloud infrastructure',
      icon: Cloud,
      features: ['Auto-scaling', 'Load Balancing', 'Security']
    },
    {
      id: 3,
      title: 'Micro SaaS Demo',
      description: 'Experience our business automation tools',
      icon: Code,
      features: ['Workflow Automation', 'Data Integration', 'Custom Dashboards']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI demo was incredible. We could see exactly how it would integrate with our existing systems.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLab',
      role: 'CEO',
      content: 'The cloud demo showed us the scalability we needed. Very impressive performance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      role: 'IT Director',
      content: 'The IT services demo covered everything we needed. Very comprehensive and professional.',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Live Demo - Zion Tech Group</title>
        <meta name="description" content="See our AI services, IT solutions, and micro SaaS development in action. Book a personalized demo today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See Our Solutions in <span className="text-blue-600">Action</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Experience our AI services, cloud solutions, and micro SaaS platforms through interactive demos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Start Demo
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                >
                  Book Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-600">
                Select from our range of technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {demos.map((demo) => {
                const IconComponent = demo.icon;
                return (
                  <div
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`cursor-pointer rounded-lg p-6 border-2 transition-all ${
                      selectedDemo === demo.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${
                        selectedDemo === demo.id ? 'bg-blue-600' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          selectedDemo === demo.id ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{demo.title}</h3>
                        <p className="text-gray-600">{demo.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by leading companies worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a personalized demo with our team and see how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}