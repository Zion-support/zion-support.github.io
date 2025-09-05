import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD

const About: NextPage = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy, Cloud Architecture",
      experience: "15+ years",
      image: "/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      expertise: "Software Engineering, DevOps",
      experience: "12+ years",
      image: "/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      expertise: "Machine Learning, Data Science",
      experience: "10+ years",
      image: "/team/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      expertise: "Cybersecurity, Compliance",
      experience: "8+ years",
      image: "/team/emily-rodriguez.jpg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering solutions that drive real business value.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to project delivery and customer service.",
      icon: "⭐"
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with our clients as partners, ensuring transparency and alignment throughout every project.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider specializing in AI, cloud services, and digital transformation. Based in Middletown, DE." />
        <meta name="keywords" content="about us, technology company, AI solutions, cloud services, software development, Delaware" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
              <p className="text-xl max-w-3xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative AI, cloud, and software solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2018, Zion Tech Group has grown from a small startup to a trusted technology 
                  partner for businesses across various industries. Our journey began with a simple mission: 
                  to make cutting-edge technology accessible and beneficial for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we specialize in AI-powered solutions, cloud architecture, and digital transformation 
                  services. Our team of expert engineers, data scientists, and consultants work tirelessly to 
                  deliver solutions that not only meet but exceed our clients' expectations.
                </p>
                <p className="text-lg text-gray-600">
                  Based in Middletown, Delaware, we serve clients globally, helping them navigate the 
                  complexities of modern technology and achieve their digital transformation goals.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600">
                  To be the world's most trusted technology partner, known for delivering 
                  exceptional results and transforming how businesses operate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">Let's discuss how we can help transform your business</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import {
  Brain,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
=======
import { 
  Brain, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake
} from 'lucide-react';
<<<<<<< HEAD
const values = [{
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what&apos;s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients&apos; success. We are committed to being true partners in their growth journey.'
  }
];
const team = [{
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    experience: '15+ years',
    image: '/team/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Engineering',
    expertise: 'Cloud Infrastructure',
    experience: '12+ years',
    image: '/team/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Watson',
    role: 'Lead Data Scientist',
    expertise: 'Data Analytics & AI',
    experience: '10+ years',
    image: '/team/emily-watson.jpg'
  },
  {
    name: 'David Kim',
    role: 'Security Architect',
    expertise: 'Cybersecurity',
    experience: '14+ years',
    image: '/team/david-kim.jpg'
  }
];
const achievements = [{
    icon: Award,
    title: 'Industry Recognition',
    description: 'Named "Top AI Solutions Provider" by TechCrunch 2024',
    stat: '2024'
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: '98% client retention rate with 500+ successful projects',
    stat: '98%'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 25+ countries worldwide',
    stat: '25+'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: '300% year-over-year growth in AI services',
    stat: '300%'
  }
];
const timeline = [{
    year: '2018',
    title: 'Company Founded',
    description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    year: '2020',
    title: 'AI Division Launch',
    description: 'Launched our specialized AI services division, focusing on machine learning and automation.'
  },
  {
    year: '2022',
    title: 'Cloud Expansion',
    description: 'Expanded into comprehensive cloud infrastructure and cybersecurity services.'
  },
  {
    year: '2024',
    title: 'Micro SaaS Platform',
    description: 'Introduced our Micro SaaS solutions platform for rapid business application deployment.'
  }
];
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>About Us - Zion Tech Group</title>
                  <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals." />
                  <meta name="keywords" content="about us, team, mission, values, company history, technology experts" />
                  </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
                  <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
</h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
            </p>
                  </motion.div>
                  </div>
                  </section>
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on strong values and a clear vision for the future of technology.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
                  </motion.div>
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered technology solutions, setting the standard for innovation and excellence.
              </p>
                  </motion.div>
                  <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, excellence, and client success are the core values that guide everything we do.
              </p>
                  </motion.div>
                  </div>
                  </div>
                  </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }} ">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to delivering exceptional technology solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                  <p className="text-sm text-gray-600 mb-2">
                  {member.expertise}
                </p>
                  <p className="text-xs text-gray-500">
                  {member.experience}
                </p>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* Achievements Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and results that speak to our commitment to excellence.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
=======
>>>>>>> main

const values = [{
    "icon": Lightbulb,
    "title": 'Innovation',
    "description": 'We constantly push the boundaries of what&apos;s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    "icon": Shield,
    "title": 'Integrity',
    "description": 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    "icon": Star,
    "title": 'Excellence',
    "description": 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    "icon": Handshake,
    "title": 'Client Success',
    "description": 'Our success is measured by our clients&apos; success. We are committed to being true partners in their growth journey.'
  }
];

const team = [{
    "name": 'Dr. Sarah Chen',
    "role": 'Chief Technology Officer',
    "expertise": 'AI & Machine Learning',
    "experience": '15+ years',
    "image": '/team/sarah-chen.jpg'
  },
  {
    "name": 'Michael Rodriguez',
    "role": 'Head of Engineering',
    "expertise": 'Cloud Infrastructure',
    "experience": '12+ years',
    "image": '/team/michael-rodriguez.jpg'
  },
  {
    "name": 'Emily Watson',
    "role": 'Lead Data Scientist',
    "expertise": 'Data Analytics & AI',
    "experience": '10+ years',
    "image": '/team/emily-watson.jpg'
  },
  {
    "name": 'David Kim',
    "role": 'Security Architect',
    "expertise": 'Cybersecurity',
    "experience": '14+ years',
    "image": '/team/david-kim.jpg'
  }
];

const achievements = [{
    "icon": Award,
    "title": 'Industry Recognition',
    "description": 'Named "Top AI Solutions Provider" by TechCrunch 2024',
    "stat": '2024'
  },
  {
    "icon": Users,
    "title": 'Client Satisfaction',
    "description": '98% client retention rate with 500+ successful projects',
    "stat": '98%'
  },
  {
    "icon": Globe,
    "title": 'Global Reach',
    "description": 'Serving clients across 25+ countries worldwide',
    "stat": '25+'
  },
  {
    "icon": TrendingUp,
    "title": 'Growth',
    "description": '300% year-over-year growth in AI services',
    "stat": '300%'
  }
];

const timeline = [{
    "year": '2018',
    "title": 'Company Founded',
    "description": 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
  },
  {
    "year": '2020',
    "title": 'AI Division Launch',
    "description": 'Launched our specialized AI services division, focusing on machine learning and automation.'
  },
  {
    "year": '2022',
    "title": 'Cloud Expansion',
    "description": 'Expanded into comprehensive cloud infrastructure and cybersecurity services.'
  },
  {
    "year": '2024',
    "title": 'Micro SaaS Platform',
    "description": 'Introduced our Micro SaaS solutions platform for rapid business application deployment.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals." />
        <meta name="keywords" content="about us, team, mission, values, company history, technology experts" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ "opacity": 0, "y": 30 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on strong values and a clear vision for the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8, "delay": 0.1 }}
              viewport={{ "once": true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8, "delay": 0.2 }}
              viewport={{ "once": true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered technology solutions, setting the standard for innovation and excellence.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ "opacity": 0, "y": 30 }}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8, "delay": 0.3 }}
              viewport={{ "once": true }}
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, excellence, and client success are the core values that guide everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, "y": 30 }}
                  whileInView={{ "opacity": 1, "y": 0 }}
                  transition={{ "duration": 0.8, "delay": index * 0.1 }}
                  viewport={{ "once": true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to delivering exceptional technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, "y": 30 }}
                whileInView={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.8, "delay": index * 0.1 }}
                viewport={{ "once": true }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {member.expertise}
                </p>
                <p className="text-xs text-gray-500">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and results that speak to our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ "opacity": 0, "y": 30 }}
                  whileInView={{ "opacity": 1, "y": 0 }}
                  transition={{ "duration": 0.8, "delay": index * 0.1 }}
                  viewport={{ "once": true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
<<<<<<< HEAD
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos;s growth and evolution.
            </p>
                  </motion.div>
                  <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
=======
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos;s growth and evolution.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
<<<<<<< HEAD
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  </div>
                  <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                  <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  </motion.div>
              ))}
            </div>
                  </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get in Touch
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
=======
                  initial={{ "opacity": 0, "x": -30 }}
                  whileInView={{ "opacity": 1, "x": 0 }}
                  transition={{ "duration": 0.8, "delay": index * 0.1 }}
                  viewport={{ "once": true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get in Touch
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  );
}
