import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { ContactSection } from '@/components/ContactSection';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80',
      bio: "Alex Johnson leads Zion as CEO, driving the company's vision to democratize AI globally. With over a decade of experience in technology startups, Alex previously built enterprise platforms adopted by Fortune 500 companies. At Zion, he focuses on building partnerships and ensuring that innovation benefits everyone. Alex believes in open collaboration and empowers the team to push boundaries while upholding transparency. Outside work, he mentors young entrepreneurs and enjoys exploring new cultures. He loves hiking, reading science fiction, and cooking.",
    },
    {
      name: 'Maria Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80',
      bio: "Maria Chen, Zion's CTO, oversees the platform's technical strategy and architecture. She has led engineering teams at several AI-focused startups, delivering scalable solutions that power millions of users. At Zion, Maria champions a culture of experimentation and rigorous security, ensuring the marketplace remains reliable and cutting-edge. She collaborates closely with open-source communities and mentors young developers in her spare time. Maria holds a master's in computer science and enjoys painting landscapes when she's not coding. She also loves robotics projects.",
    },
    {
      name: 'Sam Lee',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      bio: "Sam Lee serves as Zion's Head of Community, cultivating relationships with developers, partners, and customers worldwide. He previously launched multiple tech communities that grew from small meetups into thriving networks. At Zion, Sam orchestrates events, online forums, and mentorship programs that encourage collaboration and knowledge sharing. His empathetic approach helps newcomers feel welcomed while promoting an inclusive culture. Sam studied communications and has a background in user advocacy. In his downtime, he enjoys photography and traveling with his family.",
    },
  ];

  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GradientHeading
              title="About Zion Tech Group"
              subtitle="Pioneering the Future of Technology"
              className="text-center mb-16"
            />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we believe technology should empower everyone. 
                  Our mission is to democratize access to cutting-edge AI and automation 
                  solutions, making them accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We're not just building software; we're creating the infrastructure 
                  for a more intelligent, efficient, and connected world.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-100">Innovation through collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-100">Transparency in all our dealings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-100">Excellence in every project</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-100">Empowering our clients' success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <GradientHeading
              title="Meet Our Team"
              subtitle="The brilliant minds behind our success"
              className="text-center mb-16"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-2xl p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our 
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}