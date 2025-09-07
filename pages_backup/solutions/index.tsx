import React from 'react;
import MainLayout from ../../components/layout/MainLayout';

export default function SolutionsPage() {
  return (
    <MainLayout title="Solutions - Zion Tech Group>
      <div className=container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8>Our Solutions</h1>
        <p className=text-lg text-gray-700">
          This is a placeholder for the solutions page.
        </p>
      </div>
    </MainLayout>
  );
}

import type { NextPage } from 'next;
import Head from next/head';
import Link from next/link';
import { motion } from 'framer-motion;
import { 
  Shield, 
  Rocket, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Target,
  Zap;
} from lucide-react';
import MainLayout from '../../components/layout/MainLayout;

const solutions = [
  {
    title: Enterprise Solutions',
    description: 'Comprehensive technology solutions for large organizations,
    icon: Building,
    href: /solutions/enterprise',
    features: ['Scalable Architecture, Enterprise Security', '24/7 Support, Custom Integration'],
    color: 'from-blue-600 to-blue-800
  },
  {
    title: Startup Solutions',
    description: 'Rapid deployment solutions for growing startups,
    icon: Rocket,
    href: /solutions/startup',
    features: ['Quick Setup, Cost Effective', 'Scalable Growth, MVP Development'],
    color: 'from-green-600 to-green-800
  },
  {
    title: Industry Solutions',
    description: 'Specialized solutions for specific industries,
    icon: BarChart3,
    href: /solutions/industry',
    features: ['Industry Expertise, Compliance Ready', 'Custom Workflows, Regulatory Support'],
    color: 'from-purple-600 to-purple-800
  },
  {
    title: Custom Development',
    description: 'Tailored solutions built to your exact specifications,
    icon: Settings,
    href: /solutions/custom',
    features: ['Bespoke Development, Full Control', 'Unique Features, Dedicated Team'],
    color: 'from-orange-600 to-orange-800
  }
];

origin/cursor/automate-test-improve-and-merge-code-2533
const stats = [
  { number: 500+', label: 'Projects Delivered },
  { number: 50+', label: 'Enterprise Clients },
  { number: 99.9%', label: 'Uptime Guarantee },
  { number: 24/7', label: 'Support Available }
];
}

export default function SolutionsPage() {
  
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>
        {/* Hero Section */}
        <section className=relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0>
            <div className=absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000></div>
            <div className=absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                Technology Solutions for{ '}
                <span className=bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Every Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300>
                From startups to enterprises, we deliver tailored technology solutions 
                that drive growth, efficiency, and innovation.
              </p>
              
              <div className=flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact>
                  <span className=bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Custom Quote
                  </span>
                </Link>
                <Link href="/about>
                  <span className=bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn More
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white>
          <div className=container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2>
                    {stat.number}
                  </div>
                  <div className=text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-gray-50>
          <div className=container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16
            >
              <h2 className=text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto>
                We offer specialized solutions designed for different business needs and growth stages.
              </p>
            </motion.div>

            <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group
                >
                  <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                  <div className=p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white />
                    </div>
                    
                    <h3 className=text-xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6>
                      {solution.description}
                    </p>
                    
                    <ul className=space-y-2 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600>
                          <CheckCircle className=w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-300
                    >
                      Learn More
                      <ArrowRight className=w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white>
          <div className=container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6>
                Ready to Transform Your Business?
              </h2>
              <p className=text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Let's discuss your specific needs and create a custom solution that drives your success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6>
                <Link href=/contact">
                  <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg>
                    Start Your Project
                  </span>
                </Link>
                <Link href=/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Meet Our Team
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
