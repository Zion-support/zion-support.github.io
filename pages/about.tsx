import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain,
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
  TrendingUp
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution we create is designed with our clients' success and satisfaction as the top priority.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Agile & Fast",
      description: "We deliver results quickly without compromising quality, adapting to changing requirements seamlessly.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of our work, ensuring flawless execution and optimal performance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team/john.jpg",
      bio: "Visionary leader with 15+ years in tech"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/team/sarah.jpg", 
      bio: "Technical expert specializing in cloud architecture"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "/team/mike.jpg",
      bio: "Full-stack developer passionate about innovation"
    }
  ];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              >
                We're a team of passionate technologists dedicated to transforming businesses through innovative software solutions and cutting-edge technology.
              </motion.p>
            </div>
        <meta name="description" content="Learn about Zion Tech Group's mission to deliver innovative technology solutions and our commitment to excellence." />
        <meta name="keywords" content="about zion tech group, company mission, technology leadership, innovation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Services
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to delivering innovative solutions that transform businesses and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-4">
                To revolutionize the technology landscape by providing cutting-edge solutions that empower businesses to achieve unprecedented levels of efficiency, security, and innovation.
              </p>
              <p className="text-gray-300 text-lg">
                We believe in the transformative power of technology and are committed to making advanced solutions accessible to organizations of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-6">
                  At Zion Tech Group, we are committed to delivering cutting-edge technology solutions 
                  that empower businesses to thrive in the digital age. Our mission is to bridge the 
                  gap between innovation and implementation, making advanced technology accessible 
                  and practical for organizations of all sizes.
                </p>
                <p className="text-lg text-slate-300">
                  We believe in the transformative power of technology and its ability to solve 
                  complex business challenges while driving sustainable growth and efficiency.
                </p>
              </div>
              <div className="card">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Innovation and Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Client-Centric Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Continuous Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span className="text-slate-300">Ethical Technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                By the Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">350+</div>
                <div className="text-slate-300">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-slate-300">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-slate-300">Micro SaaS Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-slate-300">IT Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-blue-400 mb-4">AI & Machine Learning</h3>
                <p className="text-slate-300">
                  Our team specializes in developing and implementing AI solutions that 
                  automate processes, enhance decision-making, and drive innovation.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Cloud & DevOps</h3>
                <p className="text-slate-300">
                  We help businesses migrate to the cloud and implement DevOps practices 
                  for improved efficiency, scalability, and reliability.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-green-400 mb-4">Blockchain & Web3</h3>
                <p className="text-slate-300">
                  Our experts develop secure, scalable blockchain solutions and Web3 
                  applications for the decentralized future.
                </p>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with technology.
              </p>
              <motion.a
                href="/contact"
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
};

export default AboutPage;
      </main>
      <Footer />
    </>
  );
}
