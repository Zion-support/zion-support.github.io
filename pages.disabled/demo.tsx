import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEOHead';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Calendar, Download } from 'lucide-react';
;
const Demo = () => {;
  const [selectedDemo, setSelectedDemo] = useState('ai-services');
;
  const structuredData = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Demo - Zion Tech Group",;
    "url": "https://ziontechgroup.com/demo",;
    "description": "Watch live demos of our AI services, IT solutions, and micro SaaS platforms",;
    "publisher": {;
      "@type": "Organization",;
      "name": "Zion Tech Group",;
      "url": "https://ziontechgroup.com";,
}
  };
;
  const demos = [;
    {;
      id: 'ai-services',;
      title: 'AI Services Demo',;
      description: 'See how our AI solutions can transform your business operations',;
      duration: '15 min',;
      category: 'AI Services',;
      features: [;
        'Natural Language Processing',;
        'Computer Vision',;
        'Predictive Analytics',;
        'Chatbot Integration',;
        'Document Intelligence';
      ],;
      videoUrl: '#',;
      thumbnail: '/api/placeholder/600/400';,
},;
    {;
      id: 'it-services',;
      title: 'IT Services Demo',;
      description: 'Explore our comprehensive IT solutions and infrastructure management',;
      duration: '20 min',;
      category: 'IT Services',;
      features: [;
        'Cloud Migration',;
        'DevOps Automation',;
        'Security Monitoring',;
        'Network Management',;
        'Data Backup & Recovery';
      ],;
      videoUrl: '#',;
      thumbnail: '/api/placeholder/600/400';,
},;
    {;
      id: 'micro-saas',;
      title: 'Micro SaaS Demo',;
      description: 'Discover our scalable SaaS solutions and platform capabilities',;
      duration: '25 min',;
      category: 'Micro SaaS',;
      features: [;
        'Multi-tenant Architecture',;
        'API Management',;
        'User Management',;
        'Analytics Dashboard',;
        'Payment Integration';
      ],;
      videoUrl: '#',;
      thumbnail: '/api/placeholder/600/400';,
},;
    {;
      id: 'workflow-automation',;
      title: 'Workflow Automation',;
      description: 'Learn how to automate your business processes with our tools',;
      duration: '18 min',;
      category: 'Automation',;
      features: [;
        'Process Mapping',;
        'Automation Rules',;
        'Integration Hub',;
        'Performance Monitoring',;
        'Custom Workflows';
      ],;
      videoUrl: '#',;
      thumbnail: '/api/placeholder/600/400';,
}
  ];
;
  const testimonials = [;
    {;
      name: 'Sarah Johnson',;
      company: 'TechCorp Inc.',;
      role: 'CTO',;
      content: 'The AI demo was incredible. We could see exactly how it would fit into our workflow.',;
      rating: 5;,
},;
    {;
      name: 'Michael Chen',;
      company: 'StartupXYZ',;
      role: 'Founder',;
      content: 'The micro SaaS demo showed us the scalability we needed for our growing business.',;
      rating: 5;,
},;
    {;
      name: 'Emily Rodriguez',;
      company: 'Enterprise Solutions',;
      role: 'IT Director',;
      content: 'The IT services demo covered everything we needed for our digital transformation.',;
      rating: 5;,
}
  ];
;
  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];
;
  return (;
    <>;
      <SEOHead ;
        title="Demo - Zion Tech Group";
        description="Watch live demos of our AI services, IT solutions, and micro SaaS platforms. See how our solutions can transform your business.";
        keywords="demo, AI services demo, IT solutions demo, micro SaaS demo, product demonstration";
        structuredData={structuredData}
      />;
      <Navigation />;
      ;
      <main className="min-h-screen bg-gray-900 text-white">;
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                See Our Solutions;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> In Action</span>;
              </h1>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Watch live demonstrations of our AI services, IT solutions, and micro SaaS platforms. ;
                See exactly how our solutions can transform your business.;
              </p>;
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">;
                <div className="flex items-center">;
                  <Play className="w-4 h-4 text-cyan-400 mr-2" />;
                  Live demonstrations;
                </div>;
                <div className="flex items-center">;
                  <Users className="w-4 h-4 text-cyan-400 mr-2" />;
                  Expert guidance;
                </div>;
                <div className="flex items-center">;
                  <Clock className="w-4 h-4 text-cyan-400 mr-2" />;
                  Flexible scheduling;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Demo Selection */}
        <section className="py-16">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">Choose Your Demo</h2>;
              <p className="text-gray-300 max-w-2xl mx-auto">;
                Select the demo that best matches your interests and business needs;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">;
              {demos.map((demo) => (;
                <button;
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${;
                    selectedDemo === demo.id;
                      ? 'border-cyan-400 bg-cyan-400/10';
                      : 'border-gray-700 bg-gray-800 hover:border-gray-600';,
}`}
                >;
                  <div className="flex items-center justify-between mb-3">;
                    <span className="text-sm font-semibold text-cyan-400">{demo.category}</span>;
                    <span className="text-sm text-gray-400">{demo.duration}</span>;
                  </div>;
                  <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>;
                  <p className="text-gray-300 text-sm">{demo.description}</p>;
                </button>;
              ))}
            </div>;

            {/* Selected Demo Details */}
            <div className="bg-gray-800 rounded-2xl p-8">;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                <div>;
                  <div className="aspect-video bg-gray-700 rounded-lg mb-6 flex items-center justify-center">;
                    <div className="text-center">;
                      <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />;
                      <p className="text-gray-300">Demo Video Coming Soon</p>;
                      <p className="text-sm text-gray-400 mt-2">;
                        {selectedDemoData.duration} • {selectedDemoData.category}
                      </p>;
                    </div>;
                  </div>;
                  ;
                  <h3 className="text-2xl font-bold mb-4">{selectedDemoData.title}</h3>;
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>;
                  ;
                  <div className="space-y-3">;
                    <h4 className="font-semibold">What you'll see:</h4>;
                    {selectedDemoData.features.map((feature, index) => (;
                      <div key={index} className="flex items-center">;
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                        <span className="text-gray-300">{feature}</span>;
                      </div>;
                    ))}
                  </div>;
                </div>;

                <div className="space-y-6">;
                  <div className="bg-gray-700 rounded-lg p-6">;
                    <h4 className="text-lg font-semibold mb-4">Schedule a Live Demo</h4>;
                    <p className="text-gray-300 mb-4">;
                      Get a personalized demonstration with one of our experts. ;
                      We'll tailor the demo to your specific needs and answer all your questions.;
                    </p>;
                    <div className="space-y-3">;
                      <Link;
                        href="/contact";
                        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">;
                        <Calendar className="w-5 h-5 mr-2" />;
                        Schedule Demo;
                      </Link>;
                      <Link;
                        href="/contact";
                        className="w-full border border-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center">;
                        <Phone className="w-5 h-5 mr-2" />;
                        Call Now;
                      </Link>;
                    </div>;
                  </div>;

                  <div className="bg-gray-700 rounded-lg p-6">;
                    <h4 className="text-lg font-semibold mb-4">Download Resources</h4>;
                    <div className="space-y-3">;
                      <Link;
                        href="/brochure";
                        className="flex items-center justify-between p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">;
                        <div className="flex items-center">;
                          <Download className="w-5 h-5 mr-3" />;
                          <span>Product Brochure</span>;
                        </div>;
                        <ArrowRight className="w-4 h-4" />;
                      </Link>;
                      <Link;
                        href="/pricing";
                        className="flex items-center justify-between p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">;
                        <div className="flex items-center">;
                          <Download className="w-5 h-5 mr-3" />;
                          <span>Pricing Guide</span>;
                        </div>;
                        <ArrowRight className="w-4 h-4" />;
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Testimonials */}
        <section className="py-16 bg-gray-800">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>;
              <p className="text-gray-300 max-w-2xl mx-auto">;
                Hear from businesses that have seen our solutions in action;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {testimonials.map((testimonial, index) => (;
                <div key={index} className="bg-gray-700 rounded-lg p-6">;
                  <div className="flex items-center mb-4">;
                    {[...Array(testimonial.rating)].map((_, i) => (;
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
                    ))}
                  </div>;
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>;
                  <div>;
                    <div className="font-semibold">{testimonial.name}</div>;
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <h2 className="text-3xl font-bold mb-4">Ready to See More?</h2>;
            <p className="text-xl mb-8 text-cyan-100">;
              Schedule a personalized demo and discover how our solutions can transform your business;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                href="/contact";
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Schedule Demo;
              </Link>;
              <Link;
                href="/contact";
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
                Contact Sales;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;

      <Footer />;
    </>;
  );,
};
;
export default Demo;