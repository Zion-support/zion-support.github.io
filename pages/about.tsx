import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const About = React.memo(function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership & AI Innovation',
      image: '👩‍💼',
      description: '15+ years in technology leadership, former VP at major tech companies.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture & AI Systems',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and AI system design.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      expertise: 'Cybersecurity & Risk Management',
      image: '👩‍🔒',
      description: 'Leading cybersecurity expert with 12+ years of experience.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Zion Tech Solutions"
        description="Learn about our team of experts dedicated to delivering cutting-edge AI and technology solutions for businesses worldwide."
        keywords={['about us', 'team', 'leadership', 'AI experts', 'technology professionals']}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We are a team of passionate technologists dedicated to transforming businesses through innovative AI and cloud solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with cutting-edge AI and cloud technologies that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, scalable, 
                  and transformative.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team combines deep technical expertise with business acumen to deliver solutions 
                  that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  onClick={() => trackClick('about-contact-cta', 'engagement')}
                >
                  Get in Touch
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Innovation</h4>
                      <p className="text-gray-600">Pushing the boundaries of what's possible with technology</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Excellence</h4>
                      <p className="text-gray-600">Delivering high-quality solutions that exceed expectations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Integrity</h4>
                      <p className="text-gray-600">Building trust through transparent and ethical practices</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, cloud computing, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.expertise}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and cloud solutions can help your business grow and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('about-cta-contact', 'engagement')}
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
                onClick={() => trackClick('about-cta-services', 'engagement')}
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default About;