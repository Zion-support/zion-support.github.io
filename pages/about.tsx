import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

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

  const stats = ['
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>'
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
            <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-12 items-center">
              <div>"
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>"
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with revolutionary technology solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, secure, and transformative.
                </p>"
                <p className="text-lg text-gray-600">
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business applications, Zion Tech Group has become a trusted partner for companies looking to embrace digital transformation.
                </p>
              </div>"
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>"
                <ul className="space-y-3">"
                  <li className="flex items-center">"
                    <Award className="w-5 h-5 mr-3" />
                    Award-winning development team
                  </li>"
                  <li className="flex items-center">"
                    <Globe className="w-5 h-5 mr-3" />
                    Global reach with local expertise
                  </li>"
                  <li className="flex items-center">"
                    <Heart className="w-5 h-5 mr-3" />
                    Passionate about client success
                  </li>"
                  <li className="flex items-center">"
                    <Lightbulb className="w-5 h-5 mr-3" />
                    Innovative problem-solving approach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>"
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>"
            <div className="grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {values.map((value, index) => ("
                <div key={index} className="text-center">"
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>"
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>"
              <p className="text-lg text-gray-600">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>"
            <div className="grid grid-cols-2 m,
    d:grid-cols-4 gap-8">
              {stats.map((stat, index) => ("
                <div key={index} className="text-center">"
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              Let's discuss how our technology solutions can drive your business forward.
            </p>'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </Link>"
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}"