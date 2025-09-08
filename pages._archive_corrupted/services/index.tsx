

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}




import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Cpu, Headphones, Calendar, Send, Layers } from 'lucide-react';
const categories = ['AI Services', 'IT Services', 'Development', 'Security'];



    <EnhancedLayout>
      <h1 className=\"text-3xl font-bold mb-4\">Our Services</h1>
      <p className=\"text-gray-700 mb-6\">Comprehensive solutions across software, cloud, and AI.</p>
      <div className=\"grid \"md\": grid-cols-2 lg:grid-cols-3 gap-6\">
        <Link href=\"/services/web-application-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Web Application Development
        </Link>
        <Link href=\"/services/mobile-app-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Mobile App Development
        </Link>
        <Link href=\"/services/cloud-migration-services-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Cloud Migration
        </Link>
        <Link href=\"/services/ai-model-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          AI Model Development
        </Link>
        <Link href=\"/services/performance-optimization-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Performance Optimization
        </Link>
        <Link href=\"/services/security-auditing-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  )
};

      <div className=\"min-h-screen bg-white\">
      <div className="min-h-screen bg-white">

      <div className=\"min-h-screen bg-white\">
      <div className="min-h-screen bg-white">
        {/* Header */}
      <div className=\"min-h-screen bg-white\">
      <div className="min-h-screen bg-white">

  return (
    <EnhancedLayout>
      <h1 className=\"text-3xl font-bold mb-4\">Our Services</h1>
      <p className=\"text-gray-700 mb-6\">Comprehensive solutions across software, cloud, and AI.</p>
      <div className=\"grid \"md\": grid-cols-2 lg:grid-cols-3 gap-6\">
        <Link href=\"/services/web-application-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Web Application Development
        </Link>
        <Link href=\"/services/mobile-app-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Mobile App Development
        </Link>
        <Link href=\"/services/cloud-migration-services-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Cloud Migration
        </Link>
        <Link href=\"/services/ai-model-development-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          AI Model Development
        </Link>
        <Link href=\"/services/performance-optimization-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Performance Optimization
        </Link>
        <Link href=\"/services/security-auditing-chat\" className=\"bg-white p-4 rounded shadow hover:shadow-md transition\">
          Security Auditing
        </Link>
      </div>
    </EnhancedLayout>
  )
};

      <div className=\"min-h-screen bg-white\">
      <div className="min-h-screen bg-white">



        {/* Header */}




        <section className=\"bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center\">
          <div className=\"max-w-5xl mx-auto px-6\">
            <div className=\"inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6\">
              <Layers className=\"w-4 h-4 mr-2\"  />
        <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">




ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5




        <section className=\"py-16 max-w-6xl mx-auto px-6\">
          <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">Our Service Portfolio</h2>
          <div className=\"grid \"md\": gri d-cols-2 lg: gri d-cols-3 gap-8\">
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Portfolio</h2>





            {services.map((service, index) => {



                      <li key={featureIndex} className=\"flex items-center text-sm text-gray-600\">
                        <Check className=\"w-3 h-3 text-green-500 mr-2 flex-shrink-0\"  />
const \"Services\": NextPage = () => {
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Globe, Smartphone, Shield, Database, Cpu, Zap } from 'lucide-react';





ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5





      <section className=\"py-20\">;
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
          <div className=\"text-center mb-16\">;
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">;
              Technology Solutions;
            </h2>;
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;
              From AI and cloud computing to web development and cybersecurity, ;
              we provide end-to-end technology solutions for modern businesses.;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 \"md\": grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 \"md\": grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className=\"grid grid-cols-1 \"md\": grid-cols-2 lg:grid-cols-3 gap-8\">;
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8">;
            {services && services.map((service) => (;
              <div
                key={service && service.title}
                className=\"bg-white rounded-lg shadow-lg overflow-hidden \"hover\": shadow-xl transition-shadow\">;
                <div className={`h-32 bg-gradient-to-r ${service && service.color} flex items-center justify-center`}>;
                  <service && service.icon className=\"h-16 w-16 text-white\" />;
                </div>;
                <div className=\"p-6\">;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                    {service && service.title}
                  </h3>;
                  <p className=\"text-gray-600 mb-4\">;
                    {service && service.description}
                  </p>;
                  <ul className=\"space-y-2 mb-6\">;
                    {service && service.features.slice(0, 3).map((feature) => (;
                      <li key={feature} className=\"flex items-center text-sm text-gray-600\">;
                        <div className=\"w-2 h-2 bg-blue-600 rounded-full mr-3\"></div>;
                      <li key={feature} className="flex items-center text-sm text-gray-600">;
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>;

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

                        {feature}
                      </li>;
                    ))}




                  </ul>;
              );
            })}
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                    <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-4 gap-6">
              {useCases.map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 "hover": shado w-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                    <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                  </div>
                  <p className="text-gray-600">Comprehensive technology solutions tailored for {industry.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-indigo-100 text-xl mb-8">
              Get started with our comprehensive technology solutions today.
            </p>
            <div className="flex flex-col "sm": fle x-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">
                Schedule Demo <Mail className="w-4 h-4 ml-2"  />
              </Link>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  <Link
                    href={service && service.href}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg "hover": b g-indigo-700 transition-colors inline-flex items-center justify-center">;
                    Learn More <ArrowRight className="w-4 h-4 ml-2"  />;
                  </Link>;
                </div>;

              );
            })}

          </div>;
        </section>;
        <section className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>;
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-3 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;
                  <div className="flex items-center mb-3">;
                    <Zap className="w-6 h-6 text-indigo-600 mr-3"  />;
                    <h3 className="text-lg font-semibold text-gray-900">Performance</h3>;
                  </div>;
                  <p className="text-gray-600">{benefit}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-16">;
          <div className="max-w-6xl mx-auto px-6">;
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>;
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-4 gap-6">;
              {useCases && useCases.map((industry, index) => (;
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 "hover": shado w-md transition-shadow">;
                  <div className="flex items-center mb-3">;
                    <Target className="w-5 h-5 text-indigo-600 mr-3"  />;
                    <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>;
                  </div>;
                  <p className="text-gray-600">Comprehensive technology solutions tailored for {industry && industry.toLowerCase()}.</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-16 bg-indigo-600">;
          <div className="max-w-4xl mx-auto px-6 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>;
            <p className="text-indigo-100 text-xl mb-8">;
              Get started with our comprehensive technology solutions today.;
            </p>;
            <div className="flex flex-col "sm": fle x-row gap-4 justify-center">;
              <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">;
                Get Started <ArrowRight className="w-4 h-4 ml-2"  />;
              </Link>;
              <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">;
                Schedule Demo <Mail className="w-4 h-4 ml-2"  />;
              </Link>;
            </div>;
          </div>;
        </section>;
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">;
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8 text-center">;
            <p className="text-gray-400 text-sm">;
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
            </p>;
          </div>;
        </footer>;
      </div>;
    </>;
  );

          </div>;
        </section>;
        <section className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>;
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-3 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;
                  <div className="flex items-center mb-3">;
                    <Zap className="w-6 h-6 text-indigo-600 mr-3"  />;
                    <h3 className="text-lg font-semibold text-gray-900">Performance</h3>;
                  </div>;
                  <p className="text-gray-600">{benefit}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-16">;
          <div className="max-w-6xl mx-auto px-6">;
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>;
            <div className="grid "md": gri d-cols-2 lg: gri d-cols-4 gap-6">;
              {useCases && useCases.map((industry, index) => (;
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 "hover": shado w-md transition-shadow">;
                  <div className="flex items-center mb-3">;
                    <Target className="w-5 h-5 text-indigo-600 mr-3"  />;
                    <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>;
                  </div>;
                  <p className="text-gray-600">Comprehensive technology solutions tailored for {industry && industry.toLowerCase()}.</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-16 bg-indigo-600">;
          <div className="max-w-4xl mx-auto px-6 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>;
            <p className="text-indigo-100 text-xl mb-8">;
              Get started with our comprehensive technology solutions today.;
            </p>;
            <div className="flex flex-col "sm": fle x-row gap-4 justify-center">;
              <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">;
                Get Started <ArrowRight className="w-4 h-4 ml-2"  />;
              </Link>;
              <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">;
                Schedule Demo <Mail className="w-4 h-4 ml-2"  />;
              </Link>;
            </div>;
          </div>;
        </section>;
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">;
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8 text-center">;
            <p className="text-gray-400 text-sm">;
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
            </p>;
          </div>;
        </footer>;
      </div>;
    </>;
  );






ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">







                  </div>
                  <div>
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">
                      Expert Team
                    </h3>
                    <p className=\"text-gray-600\">
                      Our experienced developers and consultants bring deep expertise 
                      across multiple technologies and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>





            <div className=\"bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8\">
              <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">Ready to Get Started?</h3>
              <p className=\"text-gray-700 mb-6\">
                Let\'s discuss your project requirements and how we can help you 
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">






ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


