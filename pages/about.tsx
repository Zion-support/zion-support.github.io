import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD

export default function About() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>About Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of micro SaaS products, AI services, and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about zion tech group, technology company, micro SaaS, AI services, IT solutions, company mission" />
        <link rel="canonical" href={`${contact.site}/about`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Pioneering the Future of Technology Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We are a leading technology company dedicated to delivering innovative micro SaaS products, 
              advanced AI services, and comprehensive IT solutions that help businesses scale efficiently and securely.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-4">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe in making advanced technology accessible 
                  and practical for organizations of all sizes.
                </p>
                <p className="text-slate-400">
                  Our mission is to bridge the gap between complex technology and practical business needs, 
                  delivering solutions that are both powerful and easy to use.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
                <p className="text-lg text-slate-300 mb-4">
                  To be the world&apos;s leading provider of micro SaaS products and AI-powered solutions, 
                  transforming how businesses operate and compete in the digital age.
                </p>
                <p className="text-slate-400">
                  We envision a future where every business has access to enterprise-grade technology 
                  solutions that are affordable, scalable, and tailored to their specific needs.
                </p>
=======
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import {
  ArrowRight,
  Brain,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission to revolutionize business through AI-powered solutions and cutting-edge technology."
      keywords="about us, company, mission, team, AI technology, innovation"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are pioneers in AI-powered technology solutions, dedicated to transforming businesses 
                through innovative approaches and cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  To democratize access to advanced AI and technology solutions, enabling businesses 
                  of all sizes to compete and thrive in the digital age.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "AI Innovation",
                    description: "Leading the charge in artificial intelligence and machine learning solutions."
                  },
                  {
                    icon: Users,
                    title: "Client Success",
                    description: "Dedicated to delivering exceptional value and results for our clients."
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "Committed to the highest standards of quality and innovation."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Company Stats */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Impact
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">40+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-4xl font-bold text-purple-400 mb-2">16+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-4xl font-bold text-green-400 mb-2">16+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">500+</h3>
                <p className="text-slate-300">Happy Clients</p>
=======
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do and shape our culture.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Target, title: "Focus", description: "Clear objectives and strategic focus" },
                  { icon: Heart, title: "Passion", description: "Genuine enthusiasm for technology" },
                  { icon: Globe, title: "Global", description: "Worldwide impact and reach" },
                  { icon: Shield, title: "Trust", description: "Reliability and security first" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation</h3>
                <p className="text-slate-300">
                  We continuously push the boundaries of technology, developing cutting-edge solutions 
                  that anticipate and meet the evolving needs of our clients.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quality</h3>
                <p className="text-slate-300">
                  We maintain the highest standards in everything we do, from product development 
                  to customer service, ensuring exceptional results for our clients.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Partnership</h3>
                <p className="text-slate-300">
                  We believe in building long-term relationships with our clients, working closely 
                  with them to understand their needs and deliver tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Discover how our innovative solutions can transform your business. 
              Get in touch with our team to discuss your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
=======
        {/* Contact Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can help transform your business with AI and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
