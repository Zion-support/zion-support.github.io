import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Users, Target, Award, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const About: NextPage = () => {
  return (
    <Layout
      title="About Zion Tech Group - Leading Technology Solutions Provider"
      description="Learn about Zion Tech Group's mission, values, and team. We're a leading technology solutions provider helping businesses transform their digital presence."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            We're a team of passionate technologists, innovators, and problem-solvers dedicated to 
            transforming businesses through cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get in Touch
              </a>
            </Link>
            <Link href="/careers">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Join Our Team
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that technology should be an enabler, not a barrier. Our mission is to 
                bridge the gap between complex technology and business success, making advanced 
                solutions accessible and valuable to organizations of all sizes.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Driving Digital Transformation</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-6">
                To be the leading technology partner for businesses seeking to innovate, 
                transform, and thrive in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We envision a future where every business, regardless of size or industry, 
                has access to the technology solutions they need to succeed and grow.
              </p>
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-purple-600" />
                <span className="text-lg font-semibold text-gray-900">Global Technology Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions that drive 
                real business value and measurable results.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to client 
                service, ensuring the highest standards of delivery.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches, constantly pushing boundaries 
                to deliver cutting-edge solutions for our clients.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical practices in all our 
                business relationships and project deliveries.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and collaboration, both within our 
                organization and with our clients and partners.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Continuous Learning</h3>
              <p className="text-gray-600">
                We're committed to continuous learning and development, staying current 
                with the latest technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading technology solutions provider.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">2018 - The Beginning</h3>
                <p className="text-gray-600">
                  Zion Tech Group was founded by a group of passionate technologists who believed that 
                  businesses deserved better technology solutions. We started with a simple mission: 
                  to make advanced technology accessible and valuable to organizations of all sizes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">2020 - Growth & Expansion</h3>
                <p className="text-gray-600">
                  As our reputation for quality and innovation grew, so did our team and capabilities. 
                  We expanded our service offerings to include AI development, cloud services, and 
                  comprehensive digital transformation solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">2022 - Industry Recognition</h3>
                <p className="text-gray-600">
                  Our commitment to excellence was recognized by industry leaders and clients alike. 
                  We became a trusted partner for enterprises seeking to modernize their technology 
                  infrastructure and drive digital innovation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">2024 - Future Forward</h3>
                <p className="text-gray-600">
                  Today, Zion Tech Group continues to push the boundaries of what's possible with 
                  technology. We're investing in emerging technologies like AI, blockchain, and IoT, 
                  while maintaining our commitment to delivering practical, value-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who make Zion Tech Group a leading technology solutions provider.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Team Members</h3>
              <p className="text-gray-600">
                Our diverse team includes developers, designers, architects, and consultants 
                with expertise across multiple technologies and industries.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Years Experience</h3>
              <p className="text-gray-600">
                Combined decades of experience in software development, cloud architecture, 
                AI, and digital transformation across various industries.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Projects Delivered</h3>
              <p className="text-gray-600">
                Successfully delivered hundreds of projects for clients ranging from startups 
                to Fortune 500 companies across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">We've successfully delivered hundreds of projects across various industries and technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our team includes certified professionals with deep expertise in cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">We stay ahead of the curve, implementing the latest technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-600">We prioritize your success and work closely with you to ensure project success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how Zion Tech Group can help transform your business with 
                innovative technology solutions.
              </p>
              <Link href="/contact">
                <a className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Zion Tech Group?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their digital presence with our 
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Get Started Today
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore Our Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;