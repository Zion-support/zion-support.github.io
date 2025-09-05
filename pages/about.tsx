import React from 'react',
import { motion } from 'framer-motion',
import Head from 'next/head',
import Link from 'next/link',
import Layout from '../components/Layout',
import {,
  Brain,;
  Users,;
  Target,;
  Heart,;
  Globe,;
  Shield,;
  Zap,;
  CheckCircle,;
  ArrowRight,;
  Star,
} from 'lucide-react',
,
const team = [,
  {,
    name: "Dr. Sarah Chen",;
    role: "Chief AI Officer",;
    image: "/team/sarah-chen.jpg",;
    bio: "Leading AI research and development with 15+ years in machine learning",;
    expertise: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
  },;
  {,
    name: "Michael Rodriguez",;
    role: "CTO",;
    image: "/team/michael-rodriguez.jpg",;
    bio: "Technology visionary driving innovation in cloud and enterprise solutions",;
    expertise: ["Cloud Architecture", "DevOps", "System Design", "Scalability"],
  },;
  {,
    name: "Emily Johnson",;
    role: "Head of Product",;
    image: "/team/emily-johnson.jpg",;
    bio: "Product strategy expert focused on user experience and market needs",;
    expertise: ["Product Strategy", "UX Design", "Market Research", "Agile Development"],
  },;
  {,
    name: "David Kim",;
    role: "Lead Developer",;
    image: "/team/david-kim.jpg",;
    bio: "Full-stack developer passionate about building scalable applications",;
    expertise: ["Full-Stack Development", "React", "Node.js", "Python"],
  };
],
,
const values = [,
  {,
    icon: Brain,;
    title: "Innovation",;
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions.",
  ,},;
  {,
    icon: Users,;
    title: "Collaboration",;
    description: "We believe in the power of teamwork and work closely with our clients to achieve shared success.",
  ,},;
  {,
    icon: Shield,;
    title: "Integrity",;
    description: "We maintain the highest standards of ethics and transparency in all our business relationships.",
  ,},;
  {,
    icon: Target,;
    title: "Excellence",;
    description: "We are committed to delivering exceptional results that exceed our clients' expectations.",
  ,};
],
,
const stats = [,
  { number: "500+", label: "Projects Completed" ,},;
  { number: "150+", label: "Happy Clients" ,},;
  { number: "50+", label: "Team Members" ,},;
  { number: "5+", label: "Years Experience" ,};
],
,
export default function About() {,
  return (,
    <Layout,
      title="About Us - Zion Tech Group",
      description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and technology solutions that transform businesses.",
      keywords="about us, AI company, technology team, company mission, AI experts, tech leadership",
    >,
      <Head>,
        <title>About Us - Zion Tech Group</title>,
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and technology solutions that transform businesses." />,
      </Head>,
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">,
        {/* Hero Section */};
        <section className="relative py-20 px-4 sm: px-6 lg:px-8">,
          <div className="container mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold text-gray-900 mb-6">,
                About Zion Tech Group,
              </h1>,
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">,
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions,;
                cutting-edge development, and exceptional service delivery.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Mission Section */};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="max-w-4xl mx-auto text-center">,
              <motion.div,
                initial={{ opacity: 0, y: 20 ,}};
                whileInView={{ opacity: 1, y: 0 ,}};
                transition={{ duration: 0.6 ,}};
                viewport={{ once: true ,}};
              >,
                <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">,
                  Our Mission,
                </h2>,
                <p className="text-lg text-gray-600 mb-8">,
                  To empower businesses with cutting-edge AI and technology solutions that drive growth,;
                  efficiency, and innovation. We believe technology should be accessible, understandable,;
                  and transformative for organizations of all sizes.,
                </p>,
                <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mt-12">,
                  {stats.map((stat, index) => (,
                    <motion.div,
                      key={stat.label};
                      initial={{ opacity: 0, y: 20 ,}};
                      whileInView={{ opacity: 1, y: 0 ,}};
                      transition={{ duration: 0.6, delay: index * 0.1 ,}};
                      viewport={{ once: true ,}};
                      className="text-center",
                    >,
                      <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>,
                      <div className="text-gray-600">{stat.label}</div>,
                    </motion.div>,
                  ))};
                </div>,
              </motion.div>,
            </div>,
          </div>,
        </section>,
        {/* Values Section */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Our Values,
              </h2>,
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">,
                These core values guide everything we do and shape our culture of excellence.,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {values.map((value, index) => (,
                <motion.div,
                  key={value.title};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-white rounded-xl p-6 shadow-lg hover: shadow-xl transition-shadow",
                >,
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">,
                    <value.icon className="w-6 h-6 text-blue-600" />,
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title,}</h3>,
                  <p className="text-gray-600">{value.description}</p>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Team Section */};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Meet Our Team,
              </h2>,
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">,
                Our diverse team of experts brings together decades of experience in AI,;
                technology, and business innovation.,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {team.map((member, index) => (,
                <motion.div,
                  key={member.name};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-white rounded-xl p-6 shadow-lg hover: shadow-xl transition-shadow",
                >,
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">,
                    <Users className="w-10 h-10 text-gray-400" />,
                  </div>,
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name,}</h3>,
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>,
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>,
                  <div className="flex flex-wrap gap-2">,
                    {member.expertise.map((skill) => (,
                      <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">,
                        {skill};
                      </span>,
                    ))};
                  </div>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
            >,
              <h2 className="text-3xl md: text-4xl font-bold mb-4">,
                Ready to Work With Us?,
              </h2>,
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">,
                Let's discuss how our team can help transform your business with cutting-edge technology solutions.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link,
                  href="/contact",
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors",
                >,
                  Get In Touch,
                </Link>,
                <Link,
                  href="/case-studies",
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors",
                >,
                  View Our Work,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};