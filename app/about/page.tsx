<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';'
import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export const metadata = {
  }
  "title": 'About Us - Zion Tech Group','
  "description": 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.','
  "title": 'About | Zion Tech Group','
  "description": 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.''
  "title": 'About | Zion Tech Group','
  "description": 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.''
  "title": 'About Us - Zion Tech Group','
  "description": 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.','
  "title": 'About | Zion Tech Group','
  "description": 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.''
  "title": 'About Us - Zion Tech Group','
  "description": 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.','
  "title": 'About Us - Zion Tech Group','
  "description": 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.','
  "title": 'About | Zion Tech Group','
  "description": 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.''
=======
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group'
  description: "Learn about Zion Tech Group's mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results."
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise technology'
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
=======
import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI, micro SaaS, IT solutions, enterprise',
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
    type: 'website',
  },
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
};
export default function AboutPage() {
<<<<<<< HEAD
<<<<<<< HEAD
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            We are a leading technology company specializing in AI solutions,
            micro SaaS development, and comprehensive enterprise IT services.
=======
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Zion Tech Group
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Zion Tech Group is a leading provider of enterprise-grade AI solutions
            micro SaaS development, and comprehensive IT services. We specialize in 
            delivering cutting-edge technology solutions that drive real business results.
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative AI and technology solutions 
                that transform operations and drive sustainable growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in AI-powered business solutions
                making advanced technology accessible to enterprises of all sizes.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-blue-600" >
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-green-600" >
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">500+ specialized services and solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-purple-600" >
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600">Proven track record of success</p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="max-w-6xl mx-auto">"
          {/* Company Overview */}
          <div className="grid grid-cols-1 "lg":grid-cols-2 gap-12 mb-16">"
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>"
              <p className="text-lg text-gray-600 mb-6">"
                To empower businesses with cutting-edge technology solutions that drive growth,
                efficiency, and innovation. We believe in the transformative power of AI and,
modern software development to solve complex business challenges.
              </p>
              <p className="text-lg text-gray-600">"
                Since our founding, we have delivered over 1000 successful projects across,
various industries, helping companies of all sizes achieve their digital;
                transformation goals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">"
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>"
              <div className="space-y-4">"
                <div className="flex items-start">"
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 mt-2"></span>"
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>"
                    <p className="text-gray-600">Constantly pushing the boundaries of what's possible with technology</p>'
                  </div>
                </div>
                <div className="flex items-start">"
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>"
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>"
                    <p className="text-gray-600">Delivering exceptional solutions that exceed expectations</p>"
                  </div>
                </div>
                <div className="flex items-start">"
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 mt-2"></span>"
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrity</h4>"
                    <p className="text-gray-600">Building trust through transparency and honest communication</p>"
                  </div>
                </div>
                <div className="flex items-start">"
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 mt-2"></span>"
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>"
                    <p className="text-gray-600">Working closely with clients as partners in their success</p>"
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team Section */}
          <div className="mb-16">"
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expertise</h2>"
            <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">"
              <div className="text-center">"
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-3xl">🤖</span>"
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>"
                <p className="text-gray-600">Advanced AI solutions and custom ML models</p>"
              </div>
              <div className="text-center">"
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-3xl">🚀</span>"
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Micro SaaS</h3>"
                <p className="text-gray-600">Scalable software-as-a-service solutions</p>"
              </div>
              <div className="text-center">"
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-3xl">☁️</span>"
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>"
                <p className="text-gray-600">Enterprise cloud solutions and DevOps</p>"
              </div>
              <div className="text-center">"
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-3xl">🔒</span>"
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>"
                <p className="text-gray-600">Comprehensive security solutions</p>"
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white mb-16">"
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>"
            <div className="grid grid-cols-1 "md":grid-cols-4 gap-8">"
              <div className="text-center">"
                <div className="text-4xl font-bold mb-2">1000+</div>"
                <div className="text-blue-100">Projects Delivered</div>"
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold mb-2">50+</div>"
                <div className="text-blue-100">Enterprise Clients</div>"
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold mb-2">99.9%</div>"
                <div className="text-blue-100">Uptime Guarantee</div>"
              </div>
              <div className="text-center">"
                <div className="text-4xl font-bold mb-2">24/7</div>"
                <div className="text-blue-100">Support Available</div>"
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
              Let's discuss your project and see how we can help transform your business'
              with innovative technology solutions.
            </p>
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
              <Link,
href="/contact""
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors inline-flex items-center""
              >
                Get In Touch
                <ArrowRightIcon className="h-5 w-5 ml-2" />"
              </Link>
              <Link,
href="/services""
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-colors""
              >
                View Our Services
              </Link>
            </div>
=======
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" >
            </Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </div>
=======
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI, micro SaaS, and IT solutions 
            that drive real business results for enterprises worldwide.
          </p>
>>>>>>> cursor/automate-test-improve-and-merge-code-9862
        </div>
      </div>
=======
<<<<<<< HEAD
      </section>
=======
      </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
    </div>
  );
}