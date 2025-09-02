import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI, IT, and SaaS solutions to deliver cutting-edge results.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security and compliance are at the core of everything we build, ensuring your data and systems are protected.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in all our deliverables, from initial consultation to final deployment.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Technology visionary with 15+ years of experience in AI, cloud computing, and digital transformation.',
      expertise: ['AI Strategy', 'Cloud Architecture', 'Business Development']
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in deep learning, computer vision, and natural language processing.',
      expertise: ['Deep Learning', 'Computer Vision', 'NLP', 'MLOps']
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Engineers',
      description: 'Certified cloud architects and DevOps engineers with expertise in AWS, Azure, and Google Cloud Platform.',
      expertise: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker']
    },
    {
      name: 'SaaS Development Team',
      role: 'Full-Stack Developers',
      description: 'Experienced developers building scalable SaaS applications with modern frameworks and best practices.',
      expertise: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Microservices']
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Industrial',
    'E-commerce & Retail',
    'Education & Training',
    'Government & Public Sector',
    'Technology & Software',
    'Energy & Utilities'
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - leading provider of AI services, IT solutions, and micro SaaS development. Founded by technology experts with 15+ years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI services, IT solutions, and micro SaaS development. 
                Our mission is to transform businesses through innovative technology solutions that drive growth and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize access to cutting-edge technology. 
                  Our founder, Kleber Santos, recognized the need for businesses to leverage AI, cloud computing, and SaaS solutions 
                  to stay competitive in an increasingly digital world.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we serve clients across multiple industries, from startups to Fortune 500 companies, 
                  delivering innovative solutions that transform how they operate, compete, and grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To empower businesses with intelligent technology solutions that drive innovation, 
                  efficiency, and growth in the digital age.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-700">
                  To be the world's leading provider of AI-powered business solutions, 
                  transforming industries and creating a more connected, intelligent future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and team members.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experts behind our innovative solutions. Our diverse team brings together 
                decades of experience in AI, cloud computing, and software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are trusted by businesses across diverse industries, 
                each with unique challenges and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                  <div className="text-gray-700 font-medium">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
            
            <div className="text-blue-100 text-sm">
              <p>Phone: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}