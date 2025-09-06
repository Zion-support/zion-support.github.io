<<<<<<< HEAD
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { RefreshCw, Target, Rocket, TrendingUp } from 'lucide-react';
import React from 'react';
=======
import * as React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
export default function DigitalTransformationPage() {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
;  ];
  return (
    <Layout)
      title="Digital Transformation - Zion Tech Group""
      description="Complete digital transformation solutions to modernize your business and drive innovation."">;
      <div className="min-h-screen bg-gray-50">";
=======
  ];
  return (
    <MainLayout
      title="Digital Transformation Solutions - Zion Tech Group"
      description="Transform your business with our comprehensive digital transformation services. AI, cloud, automation, and more."
      keywords="digital transformation, business transformation, AI implementation, cloud migration, process optimization"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-20">"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
=======
              transition={{ duration: 0.8 }}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
:pages/solutions/digital-transformation.tsx
              className="text-center";
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Digital{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  Transformation;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Transform your business with cutting-edge technology solutions. From AI implementation to cloud migration, we help you stay ahead of the competition.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">;
                  Start Your Transformation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">;
                  View Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
:pages/solutions/digital-transformation && transformation.tsx;
        {/* Transformation Process */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
=======
        {/* Services Section */}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {transformationServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
<<<<<<< HEAD
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {transformationServices && transformationServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
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
:pages/solutions/digital-transformation && transformation.tsx>;
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">;
                      {step && step.step}
                    </div>;
                    <div className="text-blue-600 mb-4">;
                      <IconComponent className="w-8 h-8 mx-auto" />;
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step && step.title}</h3>;
                    <p className="text-gray-600 mb-4">{step && step.description}</p>;
                    <div className="text-sm text-blue-600 font-semibold mb-4">;
                      Duration: {step && step.duration}
                    </div>;
                    <ul className="text-sm text-gray-600 space-y-1">;
                      {step && step.features.map((feature, idx) => (;
                        <li key={idx} className="flex items-center">;
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                  >,;
=======
                  >,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
            </div>,
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;
:pages/solutions/digital-transformation && transformation.tsx;
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Transformation Benefits;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                See the measurable impact of digital transformation on your business performance.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => {;
                const IconComponent = benefit && benefit.icon;
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="text-blue-600 mb-4">;
                      <IconComponent className="w-12 h-12 mx-auto" />;
                    </div>;
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit && benefit.metric}</div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit && benefit.title}</h3>;
                    <p className="text-gray-600">{benefit && benefit.description}</p>;
                  </motion && motion.div>;
                );
              })}
            </div>;
          </div>;
        </section>;
        {/* Industries Section */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Industry Solutions;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We have experience transforming businesses across various industries with tailored solutions.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {industries && industries.map((industry, index) => {;
                const IconComponent = industry && industry.icon;
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="text-blue-600 mb-4">;
                      <IconComponent className="w-8 h-8" />;
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{industry && industry.name}</h3>;
                    <p className="text-gray-600">{industry && industry.description}</p>;
                  </motion && motion.div>;
                );
              })}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </div>
          </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our experts help you navigate your digital transformation journey with proven strategies and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
            </div>
          </div>
        </section>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            </div>
          </div>
        </section>
ursor/fix-syntax-push-and-merge-to-main-40de
            </div>,
          </div>;
        </section>;
:pages/solutions/digital-transformation && transformation.tsx;
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Transformation Benefits;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                See the measurable impact of digital transformation on your business performance.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => {;
                const IconComponent = benefit && benefit.icon;
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="text-blue-600 mb-4">;
                      <IconComponent className="w-12 h-12 mx-auto" />;
                    </div>;
                    <div className="text-3xl font-bold text-blue-600 mb-2">{benefit && benefit.metric}</div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit && benefit.title}</h3>;
                    <p className="text-gray-600">{benefit && benefit.description}</p>;
                  </motion && motion.div>;
                );
              })}
            </div>;
          </div>;
        </section>;
        {/* Industries Section */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                Industry Solutions;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We have experience transforming businesses across various industries with tailored solutions.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {industries && industries.map((industry, index) => {;
                const IconComponent = industry && industry.icon;
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="text-blue-600 mb-4">;
                      <IconComponent className="w-8 h-8" />;
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{industry && industry.name}</h3>;
                    <p className="text-gray-600">{industry && industry.description}</p>;
                  </motion && motion.div>;
                );
              })}
=======
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Start Your Digital Journey;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to transform your business? Let our experts guide you through your digital transformation journey.;
            </p>;
<<<<<<< HEAD
=======
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              Begin Transformation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}