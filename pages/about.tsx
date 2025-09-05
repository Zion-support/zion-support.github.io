import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake
} from 'lucide-react';
import Layout from '../components/Layout';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new and better ways to solve problems.'
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
    description: 'Our success is measured by our clients\' success. We are committed to being true partners in their growth journey.'
  }
];

const team = [
  {
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
    name: 'Emily Johnson',
    role: 'Product Director',
    expertise: 'User Experience',
    experience: '10+ years',
    image: '/team/emily-johnson.jpg'
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    expertise: 'Full Stack Development',
    experience: '14+ years',
    image: '/team/david-kim.jpg'
  }
];

const achievements = [
  {
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
    description: '300% year-over-year growth in revenue and team size',
    stat: '300%'
  }
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the expert team behind our innovative AI, IT, and Micro SaaS solutions." />
        <meta name="keywords" content="about us, team, company, mission, values, AI solutions, IT services" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-gray-900 mb-6"
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                We are a leading technology company specializing in AI solutions, IT services, and Micro SaaS platforms. Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 mb-8"
              >
                To democratize access to cutting-edge technology by providing affordable, scalable, and innovative solutions that empower businesses of all sizes to compete in the digital economy.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-50">
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
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative technology solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}