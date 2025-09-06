import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { RefreshCw, Target, Rocket, TrendingUp } from 'lucide-react';
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
export default function DigitalTransformationPage() {
  const transformationServices = [;
    {}
      title: "Process Automation","
      description: "Streamline operations with intelligent automation","
      icon: RefreshCw,
      features: ["Workflow Automation", "Document Processing", "Task Optimization"]"
    },
    {}
      title: "Digital Strategy","
      description: "Comprehensive digital transformation roadmap","
      icon: Target,
      features: ["Strategic Planning", "Technology Assessment", "Change Management"]"
    },
    {}
      title: "Technology Integration","
      description: "Seamlessly integrate new technologies with existing systems","
      icon: Rocket,
      features: ["System Integration", "API Development", "Data Migration"]"
    },
    {}
      title: "Performance Optimization","
      description: "Enhance efficiency and drive measurable results","
      icon: TrendingUp,
      features: ["KPI Tracking", "Performance Analytics", "Continuous Improvement"]"
    }
;  ];
  return (;
    <Layout );
      title="Digital Transformation - Zion Tech Group"";
      description="Complete digital transformation solutions to modernize your business and drive innovation."";
    >;
      <div className="min-h-screen bg-gray-50">";
  ];
:pages/solutions/digital-transformation.tsx
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Digital Transformation;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Transform your business for the digital age with our comprehensive transformation solutions. 
                Modernize processes, enhance efficiency, and drive innovation.,
              </p>;
            </motion.div>;
          </div>;
        </section>;
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transformation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge technology solutions. From AI implementation to cloud migration, we help you stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Transformation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
:pages/solutions/digital-transformation.tsx
        {/* Transformation Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {transformationServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
:pages/solutions/digital-transformation.tsx
                  >
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold mb-4">
                      Duration: {step.duration}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  >,
                    <div className="text-purple-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Start Your Digital Journey;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to transform your business? Let our experts guide you through your digital transformation journey.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Begin Transformation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
