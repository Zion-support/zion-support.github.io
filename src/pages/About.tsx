
import { AppLayout } from "@/layout/AppLayout";

import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <AppLayout>
      <SEO 
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
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        canonical="https://ziontechgroup.com/about"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </main>
    </>
      </main>
    </AppLayout>
      </main>
    </AppLayout>
  );
}
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
              </p>
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to transform your business with AI, explore quantum computing, 
            or partner with us on innovative projects, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Join Our Team
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
