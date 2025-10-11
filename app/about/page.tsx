import React from 'react';
import {   Target, Award, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive edge.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality and reliability in every project we undertake.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Integrity',
      description: 'We conduct business with transparency, honesty, and ethical practices, building long-term relationships based on trust.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: '15+ years in AI and enterprise technology leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Expert in 5G implementation and cloud architecture.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      description: 'PhD in Machine Learning with 10+ years experience.'
    },
    {
      name: 'David Kim',
      role: 'Lead Solutions Architect',
      description: 'Specialist in digital transformation and system integration.'
    }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>About Us - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h1>
  
              About Zion Tech Group
            </h1>
            <p>
  
              We are a leading technology company specializing in AI-powered solutions, 5G implementation, and enterprise IT services. Our mission is to help businesses harness the power of cutting-edge technology to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p>
  
                To democratize access to advanced AI and IT technologies, enabling businesses of all sizes to compete in the digital economy. We believe technology should be accessible, reliable, and transformative.
              </p>
              <p>
  
                Since our founding in 2020, we've helped over 500 companies transform their operations through innovative technology solutions. Our team of experts combines deep technical knowledge with business acumen to deliver results that matter.
              </p>
              <div>
  
                <div>
  
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div>
  
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
  
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul>
  
                <li>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">Proven track record of successful implementations</span>
                </li>
                <li>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">Expert team with deep industry knowledge</span>
                </li>
                <li>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">24/7 support and maintenance services</span>
                </li>
                <li>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">Cutting-edge technology and methodologies</span>
                </li>
                <li>
  
                  <CheckCircle>
  
                  <span className="text-gray-300">Scalable solutions that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p>
  
              The principles that guide everything we do
            </p>
          </div>
          
          <div>
  
            {values.map((value, index) => (
              <div>
  
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p>
  
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div>
  
            {team.map((member, index) => (
              <div>
  
                <div>
  
                  <span>
  
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p>
  
                Let's discuss how we can help transform your business with our expertise and technology solutions.
              </p>
              <div>
  
                <a>
  
                  Get in Touch
                </a>
                <a>
  
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;