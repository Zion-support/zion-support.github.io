<<<<<<< HEAD
import: type { NextPage } from 'next';';';';
import: Layout from '../../components/Layout';';';';
import: Link from 'next/link';';';';
import: { Code, Globe, Smartphone, Zap, CheckCircle, ArrowRight, Users, Award } from 'lucide-react';';';';

const: WebDevelopment: NextPage: = () => ,{,
  return (
    <Layout;
      title="Web: Development Services - Zion Tech Group"";";";
      description="Modern, responsive: web applications built with cutting-edge technologies. Transform your digital presence with our expert web development services."";";";
    >
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <div: className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">";";";
            <Code: className="w-10 h-10 text-white" />";";";
          </div>
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Web: Development
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Services</span>";";";
          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Modern, responsive: web applications built with cutting-edge technologies that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm: flex-row: justify-center gap-4 mb-12">",;,";";
            <Link: href="/contact" className="bg-green-600 hover: bg-green-700: text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Get: Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-green-900: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              View: All Services
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import { Award, Best, Code, Cross, Globe, Mobile, Regular, Smartphone, Today, User, Users, Zap } from 'lucide-react';
'
import Layout from '../../components/Layout';
import Link from 'next/link';
const WebDevelopment: NextPage = () => {
  return (
    <Layout'
      title="Web Development Services - Zion Tech Group""
      description="Modern, responsive web applications built with cutting-edge technologies. Transform your digital presence with our expert web development services."
    >
      {/* Hero Section */}"
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">"
        <div className="container mx-auto px-4 text-center">"
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">"
            <Code className="w-10 h-10 text-white" />
          </div>"
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { Code, Globe, Smartphone, Zap, CheckCircle, ArrowRight, Users, Award } from 'lucide-react';
;
const WebDevelopment: NextPage = () => {;
  return (;
    <Layout;
      title="Web Development Services - Zion Tech Group";
      description="Modern, responsive web applications built with cutting-edge technologies. Transform your digital presence with our expert web development services.";
    >;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">;
            <Code className="w-10 h-10 text-white" />;
          </div>;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Web Development;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Services</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Modern, responsive web applications built with cutting-edge technologies that deliver exceptional user experiences.;
          </p>;
          ;
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">;
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Get Started Today;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We build modern, scalable web applications that drive business growth and user engagement.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">;
                <Globe className="w-8 h-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Custom Web Applications</h3>;
              <p className="text-gray-600 mb-4">;
                Tailored web applications built to meet your specific business requirements and objectives.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• Business Applications</li>;
                <li>• E-commerce Platforms</li>;
                <li>• Content Management Systems</li>;
                <li>• Customer Portals</li>;
              </ul>;
            </div>;

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                <Smartphone className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>;
              <p className="text-gray-600 mb-4">;
                Mobile-first, responsive designs that work perfectly across all devices and screen sizes.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• Mobile-First Design</li>;
                <li>• Cross-Browser Compatibility</li>;
                <li>• Touch-Friendly Interfaces</li>;
                <li>• Adaptive Layouts</li>;
              </ul>;
            </div>;

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">;
                <Zap className="w-8 h-8 text-purple-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>;
              <p className="text-gray-600 mb-4">;
                Lightning-fast web applications optimized for speed, SEO, and user experience.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• Speed Optimization</li>;
                <li>• SEO Best Practices</li>;
                <li>• Core Web Vitals</li>;
                <li>• Progressive Web Apps</li>;
              </ul>;
            </div>;

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">;
                <Code className="w-8 h-8 text-orange-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Modern Technologies</h3>;
              <p className="text-gray-600 mb-4">;
                Built with the latest technologies and frameworks for scalability and maintainability.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• React & Next.js</li>;
                <li>• Node.js & Express</li>;
                <li>• TypeScript</li>;
                <li>• Modern CSS Frameworks</li>;
              </ul>;
            </div>;

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">;
                <Users className="w-8 h-8 text-red-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">User Experience Design</h3>;
              <p className="text-gray-600 mb-4">;
                Intuitive and engaging user interfaces designed to maximize user satisfaction and conversion.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• UX/UI Design</li>;
                <li>• User Research</li>;
                <li>• Prototyping</li>;
                <li>• Usability Testing</li>;
              </ul>;
            </div>;

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">;
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">;
                <Award className="w-8 h-8 text-indigo-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>;
              <p className="text-gray-600 mb-4">;
                Ongoing maintenance, updates, and support to keep your web application running smoothly.;
              </p>;
              <ul className="text-sm text-gray-500 space-y-2">;
                <li>• Regular Updates</li>;
                <li>• Security Patches</li>;
                <li>• Performance Monitoring</li>;
                <li>• Technical Support</li>;
              </ul>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Process Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We follow an agile development methodology to deliver high-quality web applications on time and within budget.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-white font-bold text-xl">1</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>;
              <p className="text-gray-600">We analyze your requirements and create a detailed project plan.</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-white font-bold text-xl">2</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>;
              <p className="text-gray-600">We create wireframes, mockups, and interactive prototypes.</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-white font-bold text-xl">3</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>;
              <p className="text-gray-600">We build and thoroughly test your web application.</p>;
            </div>;

            <div className="text-center">;
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-white font-bold text-xl">4</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Deployment & Launch</h3>;
              <p className="text-gray-600">We deploy your application and provide ongoing support.</p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Let's discuss your web development needs and create a solution that drives your business forward.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Start Your Project;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  );
};
;
export default WebDevelopment;
=======
<<<<<<< HEAD
import {
  Code,
  Globe,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
} from 'lucide-react';
=======
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Monitor,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Search,
} from 'lucide-react';

export default function WebDevelopment() {
  const features = [
  {
      icon: Code,
      title: 'Custom Development',
      description:
        'Tailored web applications built with modern technologies and best practices',
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description:
        'Mobile-first approach ensuring perfect display across all devices',
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Robust data management with scalable database solutions',
    },
    {
      icon: Shield,
      title: 'Security First',
      description:
        'Enterprise-grade security measures to protect your data and users',
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast loading times and optimized user experience',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with your users in mind',
    },
  ];

  const technologies = [
  { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Tailwind CSS', category: 'Styling' },
  ];

  const services = [
  {
      title: 'Frontend Development',
      description:
        'Modern, responsive user interfaces built with React, Vue, or Angular',
      icon: Monitor,
<<<<<<< HEAD
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'Component Architecture',
        'State Management',
      ],
=======
      features: ['Responsive Design,Progressive Web Apps,Component Architecture,State Management']
>>>>>>> main
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      icon: Server,
<<<<<<< HEAD
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database Design'],
=======
      features: ['RESTful APIs,GraphQL,Microservices,Database Design']
>>>>>>> main
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from frontend to backend',
      icon: Cloud,
<<<<<<< HEAD
      features: [
        'End-to-End Development',
        'DevOps Integration',
        'Performance Optimization',
        'Security Implementation',
      ],
=======
      features: ['End-to-End Development,DevOps Integration,Performance Optimization,Security Implementation']
>>>>>>> main
    },
    {
      title: 'E-commerce Platforms',
      description: 'Custom online stores and marketplace solutions',
      icon: BarChart3,
<<<<<<< HEAD
      features: [
        'Payment Integration',
        'Inventory Management',
        'Order Processing',
        'Analytics Dashboard',
      ],
    },
=======
      features: ['Payment Integration,Inventory Management,Order Processing,Analytics Dashboard']
    }
>>>>>>> main
  ];
>>>>>>> main

  return (
    <>
      <Head>
        <title>Web Development Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional web development services including custom applications, e-commerce platforms, and full-stack solutions. Modern technologies and responsive design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https: //ziontechgroup.com/services/web-development"
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional{' '}
                <span className="text-blue-600">Web Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your ideas into powerful web applications with our
                expert development team. We create custom solutions that drive
                business growth and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
<<<<<<< HEAD
>>>>>>> main
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Web Development"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">"
              {' '}
              Services
            </span>
          </h1>'
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Modern, responsive web applications built with cutting-edge
            technologies that deliver exceptional user experiences.
          </p>
<<<<<<< HEAD
"
          <div className="flex flex-col sm: flex-row justify-center gap-4 mb-12">
            <Link"
              href="/contact""
=======

          <div className="flex flex-col sm: flex-row justify-center gap-4 mb-12">
            <Link
              href="/contact"
>>>>>>> main
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Get Started Today
            </Link>
            <Link"
              href="/services""
              className="bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              View All Services
>>>>>>> main
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 bg-gray-50">";";";
        <div: className="container mx-auto px-4">";";";
          <div: className="text-center mb-16">";";";
            <h2: className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>";";";
            <p: className="text-xl text-gray-600 max-w-3xl mx-auto">";";";
              We: build modern, scalable web applications that drive business growth and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-8">",;,";";
            <div: className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Globe: className="w-8 h-8 text-green-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">Custom Web Applications</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Tailored: web applications built to meet your specific business requirements and objectives.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• Business: Applications</li>
=======
      {/* Features Section */}"
      <section className="py-20 bg-gray-50">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build modern, scalable web applications that drive business
              growth and user engagement.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">"
            <div className="bg-white rounded-lg p-8 shadow-lg hove,
    r:shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">"
                <Globe className="w-8 h-8 text-green-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">
                Custom Web Applications
              </h3>"
              <p className="text-gray-600 mb-4">
                Tailored web applications built to meet your specific business
                requirements and objectives.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Business Applications</li>
>>>>>>> main
                <li>• E-commerce Platforms</li>
                <li>• Content Management Systems</li>
                <li>• Customer Portals</li>
              </ul>
            </div>
<<<<<<< HEAD

            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Smartphone: className="w-8 h-8 text-blue-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">Responsive Design</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Mobile-first, responsive: designs that work perfectly across all devices and screen sizes.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• Mobile-First: Design</li>
=======
"
            <div className="bg-white rounded-lg p-8 shadow-lg hove,
    r:shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">"
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>"
              <p className="text-gray-600 mb-4">
                Mobile-first, responsive designs that work perfectly across all
                devices and screen sizes.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Mobile-First Design</li>
>>>>>>> main
                <li>• Cross-Browser Compatibility</li>
                <li>• Touch-Friendly Interfaces</li>
                <li>• Adaptive Layouts</li>
              </ul>
            </div>
<<<<<<< HEAD

            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Zap: className="w-8 h-8 text-purple-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">Performance Optimization</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Lightning-fast: web applications optimized for speed, SEO, and user experience.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• Speed: Optimization</li>
=======
"
            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">"
                <Zap className="w-8 h-8 text-purple-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">
                Performance Optimization
              </h3>"
              <p className="text-gray-600 mb-4">
                Lightning-fast web applications optimized for speed, SEO, and
                user experience.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Speed Optimization</li>
>>>>>>> main
                <li>• SEO Best Practices</li>
                <li>• Core Web Vitals</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>
<<<<<<< HEAD

            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Code: className="w-8 h-8 text-orange-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">Modern Technologies</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Built: with the latest technologies and frameworks for scalability and maintainability.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• React: & Next.js</li>
=======
"
            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">"
                <Code className="w-8 h-8 text-orange-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">
                Modern Technologies
              </h3>"
              <p className="text-gray-600 mb-4">
                Built with the latest technologies and frameworks for
                scalability and maintainability.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• React & Next.js</li>
>>>>>>> main
                <li>• Node.js & Express</li>
                <li>• TypeScript</li>
                <li>• Modern CSS Frameworks</li>
              </ul>
            </div>
<<<<<<< HEAD

            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Users: className="w-8 h-8 text-red-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">User Experience Design</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Intuitive: and engaging user interfaces designed to maximize user satisfaction and conversion.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• UX/UI: Design</li>
=======
"
            <div className="bg-white rounded-lg p-8 shadow-lg hove,
    r:shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">"
                <Users className="w-8 h-8 text-red-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">
                User Experience Design
              </h3>"
              <p className="text-gray-600 mb-4">
                Intuitive and engaging user interfaces designed to maximize user
                satisfaction and conversion.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• UX/UI Design</li>
>>>>>>> main
                <li>• User Research</li>
                <li>• Prototyping</li>
                <li>• Usability Testing</li>
              </ul>
            </div>
<<<<<<< HEAD

            <div className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl: transition-shadow">",;,";";
              <div: className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">";";";
                <Award: className="w-8 h-8 text-indigo-600" />";";";
              </div>
              <h3: className="text-xl font-semibold mb-4">Maintenance & Support</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                Ongoing: maintenance, updates, and support to keep your web application running smoothly.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">";";";
                <li>• Regular: Updates</li>
=======
"
            <div className="bg-white rounded-lg p-8 shadow-lg hove,
    r:shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">"
                <Award className="w-8 h-8 text-indigo-600" />
              </div>"
              <h3 className="text-xl font-semibold mb-4">
                Maintenance & Support
              </h3>"
              <p className="text-gray-600 mb-4">
                Ongoing maintenance, updates, and support to keep your web
                application running smoothly.
              </p>"
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Regular Updates</li>
>>>>>>> main
                <li>• Security Patches</li>
                <li>• Performance Monitoring</li>
                <li>• Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Process Section */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4">";";";
          <div: className="text-center mb-16">";";";
            <h2: className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>";";";
            <p: className="text-xl text-gray-600 max-w-3xl mx-auto">";";";
              We: follow an agile development methodology to deliver high-quality web applications on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">",;,";";
            <div: className="text-center">";";";
              <div: className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";";";
                <span: className="text-white font-bold text-xl">1</span>";";";
              </div>
              <h3: className="text-xl font-semibold mb-2">Discovery & Planning</h3>";";";
              <p: className="text-gray-600">We analyze your requirements and create a detailed project plan.</p>";";";
            </div>

            <div: className="text-center">";";";
              <div: className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";";";
                <span: className="text-white font-bold text-xl">2</span>";";";
              </div>
              <h3: className="text-xl font-semibold mb-2">Design & Prototyping</h3>";";";
              <p: className="text-gray-600">We create wireframes, mockups, and interactive prototypes.</p>";";";
            </div>

            <div: className="text-center">";";";
              <div: className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";";";
                <span: className="text-white font-bold text-xl">3</span>";";";
              </div>
              <h3: className="text-xl font-semibold mb-2">Development & Testing</h3>";";";
              <p: className="text-gray-600">We build and thoroughly test your web application.</p>";";";
            </div>

            <div: className="text-center">";";";
              <div: className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">";";";
                <span: className="text-white font-bold text-xl">4</span>";";";
              </div>
              <h3: className="text-xl font-semibold mb-2">Deployment & Launch</h3>";";";
              <p: className="text-gray-600">We deploy your application and provide ongoing support.</p>";";";
=======
      {/* Process Section */}"
      <section className="py-20 bg-white">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow an agile development methodology to deliver high-quality
              web applications on time and within budget.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-white font-bold text-xl">1</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">
                Discovery & Planning
              </h3>"
              <p className="text-gray-600">
                We analyze your requirements and create a detailed project plan.
              </p>
            </div>
"
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-white font-bold text-xl">2</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">
                Design & Prototyping
              </h3>"
              <p className="text-gray-600">
                We create wireframes, mockups, and interactive prototypes.
              </p>
            </div>
"
            <div className="text-center">"
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-white font-bold text-xl">3</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">
                Development & Testing
              </h3>"
              <p className="text-gray-600">
                We build and thoroughly test your web application.
              </p>
            </div>
"
            <div className="text-center">"
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-white font-bold text-xl">4</span>
              </div>"
              <h3 className="text-xl font-semibold mb-2">
                Deployment & Launch
              </h3>"
              <p className="text-gray-600">
                We deploy your application and provide ongoing support.
              </p>
>>>>>>> main
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA: Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h2: className="text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>";";";
          <p: className="text-xl mb-8 max-w-3xl mx-auto">";";";
            Let's: discuss your web development needs and create a solution that drives your business forward.';';';
          </p>
          <div: className="flex flex-col sm: flex-row: justify-center gap-4">",;,";";
            <Link: href="/contact" className="bg-white text-green-600 hover: bg-gray-100: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Start: Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-green-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              View: All Services
=======
      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">"
        <div className="container mx-auto px-4 text-center">"
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Web Application?
<<<<<<< HEAD
          </h2>"
          <p className="text-xl mb-8 max-w-3xl mx-auto">"
            Let's discuss your web development needs and create a solution that
            drives your business forward.
          </p>'
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link"
              href="/contact""
=======
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your web development needs and create a solution
            that drives your business forward.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link
              href="/contact"
>>>>>>> main
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Start Your Project
            </Link>
            <Link"
              href="/services""
              className="bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              View All Services
>>>>>>> main
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
<<<<<<< HEAD
export default WebDevelopment
=======

<<<<<<< HEAD
export: default WebDevelopment;
=======
export default WebDevelopment;
<<<<<<< HEAD
"
=======
=======
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver
                web solutions that exceed expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-200 hover: shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Web Development Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive web development solutions tailored to your
                business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-fit mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600">
                Modern, proven technologies for robust and scalable web
                applications
              </p>
            </div>

            <div className="grid grid-cols-2 md: grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg border border-gray-200 hover: border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600">
                A structured approach to delivering exceptional web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description:
                    'Understanding your requirements and creating a detailed project roadmap',
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description:
                    'Creating wireframes, mockups, and interactive prototypes',
                },
                {
                  step: '03',
                  title: 'Development & Testing',
                  description:
                    'Building your application with continuous testing and quality assurance',
                },
                {
                  step: '04',
                  title: 'Deployment & Support',
                  description:
                    'Launching your application and providing ongoing maintenance and support',
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom
              web solution that drives your business forward.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
