<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Target, Award, Globe } from 'lucide-react';
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { Users, Award, Target, CheckCircle, ArrowRight, Globe, Heart, Zap } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
=======
import Link from 'next/link';
<<<<<<< HEAD
>>>>>>> main
import {
  Users,
  Award,
  Target,
<<<<<<< HEAD
  Globe,
  Brain,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
=======
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Zap,
} from 'lucide-react';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
>>>>>>> main
>>>>>>> main

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through exceptional service and results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize security and data protection in everything we build, ensuring your business is safe.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'We deliver fast, iterative solutions that adapt to your changing business needs.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
<<<<<<< HEAD
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> main

  return (
<<<<<<< HEAD
    <MainLayout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions for modern businesses."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative digital solutions.
=======
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
=======
    { number: '24/7', label: 'Support Available' },
  ];
<<<<<<< HEAD

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description:
        'We stay at the forefront of technology, constantly exploring new ways to solve complex problems and deliver cutting-edge solutions.',
    },
    {
      icon: Shield,
      title: 'Security',
      description:
        'Security is paramount in everything we do. We implement enterprise-grade security measures to protect your data and systems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in working closely with our clients as partners, ensuring every solution is tailored to your specific needs and goals.',
    },
    {
      icon: Zap,
      title: 'Excellence',
      description:
        'We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive real business value.',
    },
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description:
        'Technology visionary with over 15 years of experience in AI, cloud computing, and digital transformation.',
      image: '/images/team/kleber-santos.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description:
        'Expert in artificial intelligence and machine learning with a passion for building scalable solutions.',
      image: '/images/team/sarah-johnson.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description:
        'Full-stack developer specializing in micro SaaS platforms and cloud-native applications.',
      image: '/images/team/michael-chen.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description:
        'UX/UI designer focused on creating intuitive and engaging user experiences across all platforms.',
      image: '/images/team/emily-rodriguez.jpg',
    },
  ];

  const achievements = [
    'Microsoft Azure Certified Partner',
    'AWS Advanced Consulting Partner',
    'Google Cloud Premier Partner',
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    'GDPR Compliant',
  ];
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main

  return (
<<<<<<< HEAD
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, a leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform
            their digital presence with cutting-edge AI, cloud architecture, and
            innovative development services.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and competitive advantage in the digital
              age.
            </p>
            <p className="text-lg text-gray-600">
              We believe that technology should be an enabler, not a barrier.
              Our team of expert developers, designers, and strategists work
              together to create solutions that are not only technically sound
              but also aligned with your business goals.
>>>>>>> main
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in the transformative power of technology 
                and its ability to solve complex business challenges.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to be the trusted technology partner that helps organizations 
                navigate the digital landscape and achieve their strategic objectives.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in technology solutions, recognized for our innovation, 
                reliability, and commitment to client success. We envision a future where 
                technology seamlessly integrates with business operations to create unprecedented value.
              </p>
              <p className="text-lg text-gray-600">
                We strive to build lasting partnerships with our clients and contribute to 
                a more connected, efficient, and innovative world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our culture of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, delivering solutions that exceed expectations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and collaboration to achieve outstanding results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace innovation and continuously explore new technologies and methodologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We conduct business with the highest standards of integrity and transparency.</p>
=======
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our
              relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering
                solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical
                practices in all our interactions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and innovative approaches to solve
                complex business challenges.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, fostering
                long-term relationships built on trust.
              </p>
>>>>>>> main
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
<<<<<<< HEAD
      <section className="py-20">
=======
      <section className="py-20 bg-white">
>>>>>>> main
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
              We are a diverse team of passionate professionals dedicated to delivering exceptional technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Engineering Team</h3>
              <p className="text-gray-600">Expert developers and engineers with deep technical knowledge and years of experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Design Team</h3>
              <p className="text-gray-600">Creative designers focused on creating intuitive and engaging user experiences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Consulting Team</h3>
              <p className="text-gray-600">Strategic consultants who help businesses align technology with their goals.</p>
=======
              A diverse team of talented professionals passionate about
              technology and committed to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Team Members</h3>
              <p className="text-gray-600">
                Experienced developers, designers, and strategists working
                together to deliver exceptional solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Projects</h3>
              <p className="text-gray-600">
                Successfully completed projects across various industries and
                technology stacks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Serving clients worldwide with our expertise in cutting-edge
                technologies and best practices.
              </p>
>>>>>>> main
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client
              success.
            </p>
          </div>

          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
>>>>>>> main
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </MainLayout>
=======

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help transform your business with
            innovative technology solutions.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/careers"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> main
  );
};

export default About;
=======
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Learn about Zion Tech Group - a leading technology company specializing in AI services, IT solutions, and micro SaaS development. Meet our expert team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/about" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white pt-16">
=======
>>>>>>> main
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
=======
<<<<<<< HEAD
                We are a leading technology company dedicated to transforming
                businesses through innovative AI services, comprehensive IT
                solutions, and cutting-edge micro SaaS development.
=======
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
>>>>>>> main
>>>>>>> main
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020, Zion Tech Group emerged from a vision to
                  democratize advanced technology and make it accessible to
                  businesses of all sizes. Our journey began with a simple
                  belief: every company deserves access to world-class
                  technology solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we&apos;ve grown into a trusted partner for
                  organizations worldwide, helping them ' navigate the
                  complexities of digital transformation while maintaining the
                  highest standards of security, reliability, and innovation.
=======
>>>>>>> main
        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with revolutionary technology solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, secure, and transformative.
                </p>
                <p className="text-lg text-gray-600">
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business applications, Zion Tech Group has become a trusted partner for companies looking to embrace digital transformation.
<<<<<<< HEAD
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
=======
>>>>>>> main
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
<<<<<<< HEAD
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, enhance efficiency, and create sustainable
                  competitive advantages.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the world&apos;s most trusted technology partner,
                  enabling every organization ' to thrive in the digital age
                  through innovative AI, IT, and SaaS solutions.
                </p>
=======
>>>>>>> main
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    Award-winning development team
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-3" />
                    Global reach with local expertise
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 mr-3" />
                    Passionate about client success
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-3" />
                    Innovative problem-solving approach
                  </li>
                </ul>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

=======
>>>>>>> main
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
=======
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
>>>>>>> main
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
=======
>>>>>>> main
        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
              <p className="text-lg text-gray-600">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 text-center">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Certifications & Achievements
              </h2>
              <p className="text-lg text-gray-600">
                Recognized expertise and industry certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {achievement}
                  </span>
=======
>>>>>>> main
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
>>>>>>> main
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
=======
<<<<<<< HEAD
              Let&apos;s discuss how our team can help transform your business
              with innovative technology solutions.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
=======
>>>>>>> main
              Let's discuss how our technology solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Services
              </Link>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer />
    </>
  );
}
=======

      <Footer />
    </>
  );
}
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
