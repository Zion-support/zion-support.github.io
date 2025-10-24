'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Users, Target, Shield, Globe, Star } from 'lucide-react'
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and expertise.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges and goals.'
    }
    ];
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/team/sarah.jpg',
      bio: '15+ years in AI and technology leadership'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Expert in cloud architecture and AI systems'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/team/emily.jpg',
      bio: 'Passionate about user experience and accessibility'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '/team/david.jpg',
      bio: 'Full-stack developer with expertise in modern frameworks'
    }
  ];
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
    ];
    return (
    <>
      <Navigation />
      
      <main className="...">
        {/* Hero Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h1 className="...">
                About Zion Tech Group
              </h1>
              <p className="...">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions
                cloud architecture, and cutting-edge development services.
              </p>
              <div className="...">
                {stats.map((stat, index) => (
                  <div key={index} className="...">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="...">
                To empower businesses with cutting-edge technology solutions that drive growth
                efficiency, and innovation. We believe in the transformative power of AI and 
                modern technology to solve complex business challenges.
              </p>
              <div className="...">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="...">
                  To be the global leader in AI-powered business solutions, helping organizations 
                  of all sizes harness the power of technology to achieve their goals and create 
                  a better future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
              <div className="...">
                {values.map((value, index) => (
                  <div key={index} className="...">
                    <div className="...">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
              <div className="...">
                {team.map((member, index) => (
                  <div key={index} className="...">
                    <div className="...">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
              <div className="...">
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Proven Expertise</h3>
                  </div>
                  <p className="...">
                    Our team brings years of experience in AI, cloud computing, and software development.
                  </p>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Custom Solutions</h3>
                  </div>
                  <p className="...">
                    We tailor our solutions to meet your specific business needs and requirements.
                  </p>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
                  </div>
                  <p className="...">
                    Round-the-clock support to ensure your systems run smoothly at all times.
                  </p>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Scalable Solutions</h3>
                  </div>
                  <p className="...">
                    Our solutions grow with your business, adapting to your changing needs.
                  </p>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Security First</h3>
                  </div>
                  <p className="...">
                    Enterprise-grade security measures to protect your data and systems.
                  </p>
                </div>
                <div className="...">
                  <div className="...">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Innovation Focus</h3>
                  </div>
                  <p className="...">
                    We stay ahead of technology trends to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="...">
                Let's discuss how our AI and technology solutions can help you achieve your goals.
              </p>
              <div className="...">
                <a
                  href="/contact"
                  className="...">
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="...">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;