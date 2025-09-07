

import { motion } from 'framer-motion;
import Head from next/head';
import Link from 'next/link;
import MainLayout from ../components/layout/MainLayout';
import { 
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake,
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
  DollarSign, 
  Clock, 
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react;

const values = [
  {
    icon: Lightbulb,
    title: Innovation',
    description: 'We constantly push the boundaries of technology to create cutting-edge solutions that drive real business value.
  },
  {
    icon: Shield,
    title: Security',
    description: 'Security is at the core of everything we do, ensuring your data and systems are protected with enterprise-grade security.
  },
  {
    icon: Users,
    title: Collaboration',
    description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.
  },
  {
    icon: Target,
    title: Excellence',
    description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.
  }
];

const team = [
  {
    name: John Smith',
    role: 'CEO & Founder,
    expertise: Strategic Leadership',
    experience: '15+ years in technology leadership
  },
  {
    name: Sarah Johnson',
    role: 'CTO,
    expertise: Technical Innovation',
    experience: '12+ years in AI and cloud technologies
  },
  {
    name: Mike Chen',
    role: 'Lead Developer,
    expertise: Full-Stack Development',
    experience: '10+ years in modern web technologies
  }
];

const achievements = [
  {
    stat: 500+',
    title: 'Projects Completed,
    description: Successfully delivered projects across various industries',
    icon: CheckCircle
  },
  {
    stat: '99.9%,
    title: Client Satisfaction',
    description: 'Consistently high client satisfaction ratings,
    icon: Star
  },
  {
    stat: 24/7',
    title: 'Support Available,
    description: Round-the-clock support for all our clients',
    icon: Clock
  },
  {
    stat: '50+,
    title: Team Members',
    description: 'Expert professionals dedicated to your success,
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <MainLayout
      title="About Us - Zion Tech Group
      description=Learn about Zion Tech Groups mission, values, and team. We're dedicated to delivering cutting-edge technology solutions."
      keywords="about us, company, team, mission, values, technology solutions
    >
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6>
              About Zion Tech Group
            </h1>
            <p className=text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses 
              through innovative AI solutions, IT services, and micro SaaS applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2>{achievement.stat}</div>
                <div className=text-white font-semibold mb-2">{achievement.title}</div>
                <div className="text-gray-300 text-sm>{achievement.description}</div>
              </motion.div>
            ))}
          </div>

          <div className=grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20
              >
                <div className=flex items-center mb-4">
                  <value.icon className="h-8 w-8 text-blue-400 mr-3 />
                  <h3 className=text-2xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300>{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className=bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4>
              Ready to Work With Us?
            </h2>
            <p className=text-xl text-blue-100 mb-8">
              Contact us today to discuss your project and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8>
              <div className=flex items-center text-white">
                <Phone className="h-5 w-5 mr-2 />
                <span>+1 302 464 0950</span>
              </div>
              <div className=flex items-center text-white">
                <Mail className="h-5 w-5 mr-2 />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className=flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2 />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import Layout from '../components/Layout;
import Layout from ../components/Layout';
import Head from 'next/head;
import { motion } from framer-motion';
import { 
  Brain,
Brain,
origin/cursor/automate-test-improve-and-merge-code-2533
  Shield,
  Users,
  Zap,
  Target,
  Award,
  ChevronRight,
  CheckCircle,
  Star,
  Globe,
  Code,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Heart,
  Lightbulb,
  Rocket,
  Lock,
  TrendingUp;
} from 'lucide-react;

  );
      name: Kleber',
      role: 'Founder & CEO,
      description: Visionary leader driving innovation in AI and quantum technologies',
      image: '/api/placeholder/150/150,
      color: from-cyan-500 to-blue-500'
    }
    {
      name: 'AI Team,
      role: AI Research & Development',
      description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence,
      image: /api/placeholder/150/150',
      color: 'from-purple-500 to-pink-500
    }
    {
      name: Quantum Team',
      role: 'Quantum Computing,
      description: Specialists in quantum algorithms and quantum-resistant cryptography',
      image: '/api/placeholder/150/150,
      color: from-blue-500 to-cyan-500'
    }
    {
      name: 'Security Team,
      role: Cybersecurity',
      description: 'Experts in threat detection and zero-trust security architectures,
      image: /api/placeholder/150/150',
      color: 'from-red-500 to-orange-500
    }
  ];

  const milestones = [
    {
      year: 2020',
      title: 'Company Founded,
      description: Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.'
    }
    {
      year: '2021,
      title: First AI Solutions',
      description: 'Launched our first AI-powered business intelligence and automation solutions.
    }
    {
      year: 2022',
      title: 'Quantum Breakthrough,
      description: Developed quantum-resistant cybersecurity solutions and quantum neural networks.'
    }
    {
      year: '2023,
      title: Space Technology',
      description: 'Expanded into space technology with AI-powered satellite management systems.
    }
    {
      year: 2024',
      title: 'Global Expansion,
      description: Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.'
    }
    {
      year: '2025,
      title: Future Vision',
      description: 'Continuing to push boundaries with autonomous AI systems and consciousness technology.
    }
  ];

import React from react';
import Head from 'next/head;
import Button from ../components/ui/Button';
export default function AboutPage() {
  return (
    <div className=min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description content=About Zion Tech Group: AI, micro SaaS, and enterprise IT innovators." />
        <link rel="canonical href=https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white>
        <div className=max-w-6xl mx-auto space-y-10">
          <header className="text-center>
            <h1 className=text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About Zion Tech Group</h1>
            <p className="text-gray-300 text-lg>We build real, outcome-oriented AI, micro SaaS, and enterprise IT solutions.</p>
          </header>

          <section className=grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60>
              <div className=text-sm text-gray-400 mb-2">What we do</div>
              <div className="text-gray-200>200+ production-ready services across AI, DevOps, Security, Cloud, and Data.</div>
            </div>
            <div className=p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400 mb-2>How we deliver</div>
              <div className=text-gray-200">Template-driven deployments, SLAs, clear pricing, and measurable ROI.</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60>
              <div className=text-sm text-gray-400 mb-2">Who we serve</div>
              <div className="text-gray-200>Startups to enterprises across healthcare, fintech, manufacturing, media, and public sector.</div>
            </div>
          </section>

          <section className=grid grid-cols-1 md: grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60>
              <h2 className=text-2xl font-semibold mb-3">Contact</h2>
              <ul className="text-gray-300 space-y-2>
                <li>Mobile: <a className=text-cyan-300" href="tel:+13024640950>+1 302 464 0950</a></li>
                <li>E-mail: <a className=text-purple-300" href="mailto:kleber@ziontechgroup.com>kleber@ziontechgroup.com</a></li>
                <li>Address: <span className=text-gray-200">364 E Main St STE 1008 Middletown DE 19709</span></li>
                <li>Website: <a className="text-cyan-300 href=https://ziontechgroup.com">ziontechgroup.com</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60>
              <h2 className=text-2xl font-semibold mb-3">Get Started</h2>
              <p className="text-gray-300 mb-4>Book a consultation to map your roadmap to shipped outcomes.</p>
              <div className=flex gap-3">
                <Button href="/contact className=bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Talk to Sales</Button>
                <Button href="/pricing variant=outline" className="border border-gray-600 text-gray-200>Pricing</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )

export default AboutPage;

import React from './react;
import Layout from ../components / Layout";
export default /**
 * About - Function description
 */
function About() {
  return (
    <Layout;
      title="About Us - Zion Tech Group;
      description=Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting - edge technology solutions.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20>;
        <div className=container mx - auto px - 4">;
          <div className="text - center mb - 12>;
            <h1 className=text - 4xl font - bold text - gray - 900 mb - 4">;
              About Zion Tech Group;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto>;
              Leading technology solutions provider specializing in AI,
              cybersecurity, and digital transformation.;
            </p>;
          </div>;
          <div className=text - center">;
            <p className="text - gray - 600>About page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  ];

  const team = [
    {
name: John Smith",
      role: "CEO & Founder,
      image: /team/john.jpg",
      bio: "Visionary leader with 15+ years in tech
    },
    {
      name: Sarah Johnson",
      role: "CTO,
      image: /team/sarah.jpg", 
      bio: "Technical expert specializing in cloud architecture
    },
    {
      name: Mike Chen",
      role: "Lead Developer,
      image: /team/mike.jpg",
      bio: "Full-stack developer passionate about innovation
    }
  ];

  return (
    <Layout
      title=About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting-edge technology solutions.
    >
      <div className=min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4>
          <div className=text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4>
              About Zion Tech Group
            </h1>
            <p className=text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in AI
              cybersecurity, and digital transformation.
            </p>
          </div>
          <div className="text-center>
            <p className=text-gray-600">About page is under construction.</p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50>
          <div className=container mx-auto px-4">
            <div className="max-w-6xl mx-auto>
              <h2 className=text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className=bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6 text-white />
                    </div>
                    <h3 className=text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className=py-16 bg-blue-900">
          <div className="container mx-auto px-4>
            <div className=max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12>
                By the Numbers
              </h2>
              <div className=grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center
                  >
                    <div className=text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className=py-16 bg-white">
          <div className="container mx-auto px-4>
            <div className=max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12>
                Meet Our Team
              </h2>
              <div className=grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center
                  >
                    <div className=w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600>
                        {member.name.split( ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className=text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2>
                      {member.role}
                    </p>
                    <p className=text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600>
          <div className=container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center>
              <h2 className=text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8>
                Let's discuss how we can help transform your business with technology.
              </p>
              <motion.a
                href=/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
origin/cursor/automate-test-improve-and-merge-code-2533
