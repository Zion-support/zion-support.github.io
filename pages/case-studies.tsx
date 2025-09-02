import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor user experience',
      solution: 'Complete platform modernization with AI-powered recommendations and microservices architecture',
      results: [
        '60% reduction in cart abandonment',
        '45% increase in conversion rates',
        '80% improvement in page load times',
        '300% increase in mobile traffic'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'AI/ML', 'Kubernetes'],
      duration: '6 months',
      teamSize: '12 developers',
      image: '/case-studies/ecommerce-transformation.jpg',
      testimonial: {
        text: 'Zion Tech Group transformed our entire platform. The results exceeded our expectations and we\'ve seen unprecedented growth.',
        author: 'Sarah Johnson',
        position: 'CTO, TechRetail Inc.'
      }
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare Analytics',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual patient data analysis taking weeks and missing critical insights',
      solution: 'Custom AI platform for real-time patient monitoring and predictive analytics',
      results: [
        '90% reduction in analysis time',
        '35% improvement in early diagnosis rates',
        '50% decrease in readmission rates',
        '99.9% system uptime achieved'
      ],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'AWS'],
      duration: '8 months',
      teamSize: '8 developers',
      image: '/case-studies/healthcare-ai.jpg',
      testimonial: {
        text: 'The AI platform has revolutionized our patient care. We can now predict and prevent complications before they occur.',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer, MediCare Solutions'
      }
    },
    {
      id: 3,
      title: 'Blockchain Supply Chain Optimization',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in global supply chain operations',
      solution: 'Blockchain-based supply chain platform with IoT integration and real-time tracking',
      results: [
        '100% supply chain transparency',
        '30% reduction in delivery times',
        '25% decrease in operational costs',
        'Zero counterfeit products detected'
      ],
      technologies: ['Blockchain', 'IoT', 'React', 'Node.js', 'Ethereum'],
      duration: '10 months',
      teamSize: '15 developers',
      image: '/case-studies/blockchain-logistics.jpg',
      testimonial: {
        text: 'The blockchain solution has given us complete visibility into our supply chain. Our customers trust us more than ever.',
        author: 'Robert Martinez',
        position: 'CEO, Global Logistics Corp'
      }
    },
    {
      id: 4,
      title: 'Quantum-Secure Financial Platform',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'Need for quantum-resistant security to protect against future threats',
      solution: 'Implementation of post-quantum cryptography and quantum key distribution',
      results: [
        'Future-proof security implementation',
        'Zero security breaches',
        'Compliance with new regulations',
        '50% reduction in security audit time'
      ],
      technologies: ['Post-Quantum Cryptography', 'QKD', 'Python', 'AWS', 'Kubernetes'],
      duration: '12 months',
      teamSize: '10 developers',
      image: '/case-studies/quantum-security.jpg',
      testimonial: {
        text: 'Zion Tech Group helped us stay ahead of security threats. Our quantum-resistant platform is now the gold standard.',
        author: 'Jennifer Liu',
        position: 'CISO, SecureBank International'
      }
    },
    {
      id: 5,
      title: 'AR/VR Manufacturing Training',
      client: 'Industrial Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'Expensive and time-consuming traditional training methods for complex machinery',
      solution: 'Immersive AR/VR training platform with real-time feedback and progress tracking',
      results: [
        '70% reduction in training time',
        '60% decrease in training costs',
        '85% improvement in knowledge retention',
        'Zero training-related accidents'
      ],
      technologies: ['Unity', 'WebXR', 'React', 'Node.js', 'AWS'],
      duration: '7 months',
      teamSize: '9 developers',
      image: '/case-studies/ar-vr-training.jpg',
      testimonial: {
        text: 'The AR/VR training platform has transformed how we onboard new employees. It\'s faster, safer, and more effective.',
        author: 'David Thompson',
        position: 'Training Director, Industrial Manufacturing Ltd'
      }
    },
    {
      id: 6,
      title: 'Edge Computing IoT Network',
      client: 'Smart City Solutions',
      industry: 'Smart Cities',
      challenge: 'High latency and bandwidth issues with centralized IoT data processing',
      solution: 'Distributed edge computing network with real-time data processing and analytics',
      results: [
        '95% reduction in latency',
        '80% decrease in bandwidth usage',
        'Real-time decision making enabled',
        '99.9% network reliability'
      ],
      technologies: ['Edge Computing', 'IoT', 'Kubernetes', 'Python', 'MQTT'],
      duration: '9 months',
      teamSize: '11 developers',
      image: '/case-studies/edge-computing.jpg',
      testimonial: {
        text: 'The edge computing solution has made our smart city truly intelligent. We can respond to issues in real-time.',
        author: 'Amanda Rodriguez',
        position: 'Smart City Director, Smart City Solutions'
      }
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses transform their operations with cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries transform their operations 
            and achieve unprecedented growth with our technology solutions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our technology solutions have driven measurable business outcomes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>Client:</strong> {study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <blockquote className="text-gray-600 italic mb-4">
                      "{study.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{study.testimonial.position}</div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our technology solutions consistently deliver measurable business outcomes across all industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">45%</div>
              <div className="text-blue-100">Average Revenue Increase</div>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Faster Time to Market</div>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">35%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business and deliver measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Project
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Contact Information:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <span className="font-semibold">Phone:</span>
                <span className="ml-2">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Email:</span>
                <span className="ml-2">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudiesPage;