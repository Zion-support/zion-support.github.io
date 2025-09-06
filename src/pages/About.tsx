
ursor/automate-test-improve-and-merge-code-646c
import React from 'react';


const About: React.FC = () => {
  return (

    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">

        <div className="text-center mb-16">
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '👩‍💼',
      description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and microservices architecture with a track record of successful enterprise deployments.'
    },
    {
      name: 'Emily Johnson',
      role: 'Security Director',
      expertise: 'Cybersecurity',
      image: '👩‍🔬',
      description: 'Cybersecurity specialist ensuring our solutions meet the highest security standards and compliance requirements.'
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      expertise: 'Digital Transformation',
      image: '👨‍💼',
      description: 'Driving product strategy and digital transformation initiatives for our enterprise clients.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-16" variants={itemVariants}>
>>>>>>> main
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cybersecurity, 
            and cloud infrastructure. Our mission is to transform businesses through 
            innovative technology solutions.
          </p>
        </div>
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    }
  ];
ursor/integrate-build-improve-and-re-verify-9d47

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            title="Our Mission"
            description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age."
          />
          <Card
            title="Our Vision"
            description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world."
          />
          <Card
            title="Our Values"
            description="We maintain the highest standards in everything we do, from our code quality to our customer service and support."
          />


        </div>
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in AI and enterprise software. Former Google AI researcher.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems. Ex-AWS principal engineer.',
      image: '/team/mike-chen.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      bio: 'Award-winning UX designer with a focus on accessibility and user experience.',
      image: '/team/emily-davis.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEO
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative AI and technology solutions. Meet our expert team and discover our values."
        keywords="about us, team, mission, values, AI company, technology solutions"
        url="/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech Group</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    We're a team of passionate technologists dedicated to transforming businesses 
                    through innovative AI and technology solutions.
                  </p>
export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge
          technology solutions that transform businesses and drive innovation.
        </p>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Zion Tech Group, we believe in the power of technology to transform businesses and create meaningful impact. 
            Our mission is to deliver innovative AI and technology solutions that help organizations thrive in the digital age.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With over 1000+ successful projects delivered across various industries, we combine technical expertise 
            with business acumen to create solutions that drive real results.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Phone:</p>
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email:</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Address:</p>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>1000+ successful projects</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span>Custom solutions for every need</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <ScrollAnimation animation="fadeIn" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your business with our innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
                    <Link to="/services">View Our Services</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </main>

        <Footer />
ursor/automate-test-improve-and-merge-code-646c
      </div>
    </div>
            We are a leading technology company specializing in AI solutions, cybersecurity,
            and cloud infrastructure. Our mission is to transform businesses through
            innovative technology solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12" variants={itemVariants}>
          {[
            { id: 'mission', label: 'Our Mission' },
            { id: 'team', label: 'Our Team' },
            { id: 'values', label: 'Our Values' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
          {activeTab === 'mission' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>
              <Card
                title="Our Mission"
                description="To empower businesses with cutting-edge AI and technology solutions that drive innovation, efficiency, and growth in the digital age."
                icon="🎯"
              />
              <Card
                title="Our Vision"
                description="To be the global leader in AI-powered technology solutions, transforming industries and creating a smarter, more connected world."
                icon="🚀"
              />
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  title={member.name}
                  description={member.description}
                  icon={member.image}
                  className="text-center"
                >
                  <div className="mt-4">
                    <p className="text-cyan-400 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.expertise}</p>
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
              <Card
                title="Innovation"
                description="We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve complex problems."
                icon="💡"
              />
              <Card
                title="Excellence"
                description="We maintain the highest standards in everything we do, from our code quality to our customer service and support."
                icon="⭐"
              />
              <Card
                title="Integrity"
                description="We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners."
                icon="🤝"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
>>>>>>> main
    </>
ursor/integrate-build-improve-and-re-verify-9d47
  );
};


export default About;

          </div>
        </div>
      </section>
    </div>
  );
}
