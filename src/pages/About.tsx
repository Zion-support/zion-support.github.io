import React from 'react';
import { SEO } from '../components/SEO';
import { Users, Award, Globe, Zap, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology solutions."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We help businesses worldwide transform and thrive in the digital age."
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology and business transformation."
    },
    {
      name: "Development Team",
      role: "Engineering Excellence",
      description: "Skilled professionals specializing in AI, cloud, and enterprise solutions."
    },
    {
      name: "Consulting Team",
      role: "Strategic Advisors",
      description: "Industry experts helping businesses navigate digital transformation."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision for innovative technology solutions."
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Successfully delivered enterprise AI solution for Fortune 500 company."
    },
    {
      year: "2022",
      title: "AI Platform Launch",
      description: "Introduced proprietary AI platform for business automation."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended services to international markets and diverse industries."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established research and development center for emerging technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SEO 
        title="About Us | Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions and expert consulting services."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of technology innovators, problem solvers, and strategic thinkers 
            dedicated to transforming businesses through cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              <p className="text-gray-300">
                We believe that technology should be an enabler, not a barrier. Our solutions 
                are designed to be intuitive, scalable, and transformative.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-6">
                To be the leading technology partner for businesses seeking to harness the 
                power of AI, automation, and digital transformation.
              </p>
              <p className="text-gray-300">
                We envision a future where every business can leverage cutting-edge technology 
                to achieve unprecedented levels of success and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner for businesses worldwide.
            </p>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-600/30">
                  <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the passionate professionals who make Zion Tech Group a leader in technology innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We bring unique advantages that set us apart from other technology companies.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-300">
                  Over 100 successful projects delivered across various industries and technologies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-300">
                  Certified professionals with deep expertise in AI, cloud, and enterprise solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
                <p className="text-gray-300">
                  We stay ahead of technology trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock support and maintenance to ensure your systems run smoothly.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-300">
                  Tailored solutions designed specifically for your business needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
