import React from 'react';
import Head from 'next/head';
import { Users, Target, Award, Globe, Brain, Cloud, Shield, Code } from 'lucide-react';
import { Card } from '../components/ui/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work closely with you to understand your unique needs and deliver tailored solutions."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to project delivery and customer service."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "With a diverse team and international experience, we bring global best practices to every project we undertake."
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions including autonomous systems, natural language processing, and intelligent automation."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable cloud platforms with modern DevOps practices, ensuring reliability and performance at scale."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions with zero-trust architecture and compliance automation."
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions and micro SaaS platforms designed to meet your specific business requirements."
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering exceptional technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Zion Tech Group, we believe technology should empower businesses to achieve their full potential. 
                  Our mission is to deliver innovative, scalable, and secure technology solutions that drive growth and transformation.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We combine deep technical expertise with business acumen to create solutions that not only meet today's needs 
                  but also position our clients for future success in an ever-evolving digital landscape.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Expert team with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Cutting-edge technology and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Proven track record of successful deliveries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Competitive pricing and transparent billing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions across AI, cloud, security, and custom development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 transition-colors text-lg font-medium rounded-md">
                Get in Touch
              </a>
              <a href="/services" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium rounded-md">
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;