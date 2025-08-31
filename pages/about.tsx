import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Users, Target, Eye, Heart, Award, Globe, Zap, Shield } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success is our success."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Technology visionary with over 15 years of experience in software development and business strategy.",
      expertise: ["AI/ML", "Cloud Architecture", "Business Strategy"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in emerging technologies with a passion for scalable solutions and innovation.",
      expertise: ["DevOps", "Cybersecurity", "System Architecture"]
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning specialist focused on practical AI applications for business transformation.",
      expertise: ["Machine Learning", "Data Science", "AI Ethics"]
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Long-term partnerships with satisfied customers"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - our mission, values, team, and commitment to delivering cutting-edge technology solutions." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI solutions, cloud services, cybersecurity" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a leading technology solutions provider dedicated to transforming businesses 
            through innovative AI, cloud, and cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-600">
                We believe that technology should be an enabler, not a barrier. Our mission is to 
                make advanced technology accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the trusted technology partner for businesses worldwide, known for innovation, 
                reliability, and exceptional client success.
              </p>
              <p className="text-gray-600">
                We envision a future where every business can leverage the power of AI, cloud, and 
                cybersecurity to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, 
              partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts who drive our innovation and ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block">
                Get Started Today
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-block">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;