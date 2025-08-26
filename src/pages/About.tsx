
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { AppLayout } from "@/layout/AppLayout";
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
>>>>>>> origin/cursor/website-audit-and-enhancement-56af

export default function About() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
=======
    <AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
      <SEO 
<<<<<<< HEAD
        title="About Zion Tech Group - Leading Technology Solutions Provider" 
        description="Learn about Zion Tech Group's mission to revolutionize technology services through AI, innovation, and digital transformation expertise."
        keywords="about us, Zion Tech Group, technology company, AI services, digital transformation"
        canonical="https://ziontechgroup.com/about"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology through innovative AI solutions, 
            cutting-edge services, and transformative digital experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize advanced technology solutions and empower businesses of all sizes 
                to thrive in the digital age through accessible, innovative, and sustainable 
                technology services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that cutting-edge technology should be available to everyone, 
                not just large corporations. Our mission is to bridge the gap between 
                complex technological solutions and practical business needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted partner for AI-powered technology solutions, 
                leading the charge in sustainable digital transformation and creating a future 
                where technology serves humanity's greatest needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { AppLayout } from "@/layout";

export default function About() {
  return (
    <AppLayout>
      <SEO 
        title="About Zion Tech Group - The Future of AI & Tech Marketplace" 
        description="Learn about Zion Tech Group's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion Tech Group, AI marketplace, tech platform, mission, vision, team"
=======
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-aa85
        canonical="https://ziontechgroup.com/about"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible, embracing emerging 
                technologies and creative solutions to solve complex challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code quality 
                to customer service, ensuring exceptional results for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnerships, working closely 
                with clients and stakeholders to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Zion Tech Group by the Numbers</h2>
            <p className="text-xl text-blue-100">
              Our impact and growth in the technology industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-blue-100">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">5+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Executive Officer</p>
              <p className="text-gray-600">
                Visionary leader with 15+ years of experience in technology and business strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Technology Officer</p>
              <p className="text-gray-600">
                AI and technology expert leading our innovation and development initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Operations Officer</p>
              <p className="text-gray-600">
                Operations specialist ensuring seamless delivery of our technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - the story of Zion Tech Group.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2020</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Company Founded</h3>
                  <p className="text-gray-600">
                    Zion Tech Group was established with a vision to revolutionize how businesses 
                    approach technology solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2021</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">First Major Client</h3>
                  <p className="text-gray-600">
                    Successfully delivered our first enterprise-level AI solution, marking 
                    the beginning of our growth trajectory.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2023</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Platform Launch</h3>
                  <p className="text-gray-600">
                    Launched our flagship AI platform, revolutionizing how businesses 
                    access and utilize artificial intelligence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2024</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Expansion</h3>
                  <p className="text-gray-600">
                    Expanded our services globally, serving clients across multiple 
                    continents and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
=======
import { Helmet } from 'react-helmet-async';
import { EnhancedAbout } from '@/components/EnhancedAbout';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology solutions provider specializing in AI, cloud services, cybersecurity, and digital transformation." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <EnhancedAbout />
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
      </main>
    </AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
      </main>
    </AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
  );
}
=======
import { Users, Target, Zap, Globe, Award, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Innovation,
      title: "Innovation",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches to solve complex challenges."
    },
    {
      icon: Excellence,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery."
    },
    {
      icon: Collaboration,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve extraordinary results that benefit everyone involved."
    },
    {
      icon: Integrity,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business relationships and operations."
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions."
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Launched revolutionary AI autonomous business platform, transforming how companies operate."
    },
    {
      year: "2023",
      title: "Quantum Innovation",
      description: "Developed cutting-edge quantum computing solutions for enterprise applications."
    },
    {
      year: "2022",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to revolutionize technology solutions."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Zion Tech Group is a leading technology company dedicated to transforming businesses through 
              innovative AI solutions, quantum computing, and cutting-edge digital technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To democratize advanced technology and make AI, quantum computing, and innovative solutions 
                accessible to businesses of all sizes, enabling them to thrive in the digital age.
              </p>
            </div>
            
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-300">
                To be the global leader in transformative technology solutions, creating a future where 
                every business can harness the full potential of AI and quantum computing.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of technology through innovative AI solutions, quantum computing, 
              and cutting-edge digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <LightBulbIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, quantum computing, and advanced automation for sustainable growth 
                and competitive advantage.
              </p>
              <p className="text-lg text-gray-300">
                We believe that technology should be accessible, ethical, and transformative, driving positive 
                change across industries and society.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                  <RocketLaunchIcon className="h-8 w-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                To be the global leader in autonomous technology solutions, pioneering the next generation 
                of AI-powered business operations and quantum computing applications.
              </p>
              <p className="text-lg text-gray-300">
                We envision a future where businesses operate seamlessly with intelligent systems, 
                unlocking unprecedented levels of efficiency, innovation, and human potential.
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
=======
      {/* Company Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-400">2019</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                  <p className="text-gray-300">
                    Zion Tech Group was founded with a vision to bridge the gap between cutting-edge research 
                    and practical business applications. Our founders recognized the transformative potential 
                    of emerging technologies and committed to making them accessible to businesses worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-green-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-400">2021</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Breakthrough</h3>
                  <p className="text-gray-300">
                    We launched our first autonomous AI business management platform, revolutionizing how 
                    companies approach process automation and decision-making. This marked the beginning 
                    of our journey into autonomous technology solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-purple-400">2023</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quantum Expansion</h3>
                  <p className="text-gray-300">
                    Expanding into quantum computing services, we began offering quantum solutions for 
                    complex optimization problems, financial modeling, and scientific research applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-orange-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-400">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-300">
                    Today, Zion Tech Group serves clients across multiple continents, with offices in 
                    key technology hubs and a growing team of experts in AI, quantum computing, and 
                    digital transformation.
                  </p>
                </div>
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From startup to industry leader, discover the key milestones in our company's growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            ))}
=======
      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible, exploring new technologies 
                and approaches to solve complex challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-300">
                We prioritize the security and privacy of our clients' data, building systems 
                that are both powerful and secure.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership, working closely with clients to understand 
                their needs and deliver tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Our solutions are designed to create positive change on a global scale, 
                benefiting businesses, communities, and the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards of quality in everything we do, from 
                product development to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="h-10 w-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Focused</h3>
              <p className="text-gray-300">
                We're always looking ahead, anticipating future trends and preparing 
                our clients for what's next in technology.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              AI, quantum computing, and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Leadership Team</h3>
              <p className="text-gray-300 mb-4">Experienced executives driving innovation and growth</p>
              <Link
                to="/team"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Meet the Leaders
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Experts</h3>
              <p className="text-gray-300 mb-4">World-class engineers and scientists pushing boundaries</p>
              <Link
                to="/careers"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Join Our Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support Team</h3>
              <p className="text-gray-300 mb-4">Dedicated professionals ensuring your success</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                Get Support
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
=======
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kleber</h3>
              <p className="text-blue-400 mb-3">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Visionary leader with over 15 years of experience in technology innovation 
                and business transformation.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-purple-400 mb-3">AI & Machine Learning</p>
              <p className="text-gray-300 text-sm">
                World-class researchers and engineers developing cutting-edge AI solutions 
                for autonomous business operations.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Q</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Team</h3>
              <p className="text-green-400 mb-3">Quantum Computing</p>
              <p className="text-gray-300 text-sm">
                Experts in quantum mechanics and computing, pioneering the next generation 
                of computational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Zion Tech Group by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-gray-300">Global Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">100+</div>
              <p className="text-gray-300">AI Solutions</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">25+</div>
              <p className="text-gray-300">Quantum Services</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
=======
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to transform your business with AI, explore quantum computing, 
            or partner with us on innovative projects, we'd love to hear from you.
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
=======
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            >
              Get in Touch
            </Link>
            <Link
<<<<<<< HEAD
              to="/case-studies"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
=======
              to="/careers"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Join Our Team
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icon components
const Innovation = ({ className }: { className?: string }) => (
  <Lightbulb className={className} />
);

const Excellence = ({ className }: { className?: string }) => (
  <Award className={className} />
);

const Collaboration = ({ className }: { className?: string }) => (
  <Users className={className} />
);

const Integrity = ({ className }: { className?: string }) => (
  <Shield className={className} />
);

export default About;
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
