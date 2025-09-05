<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { MessageCircle, Calendar, Users, Award } from 'lucide-react';

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Developer Forums",
      description: "Connect with developers and share knowledge",
      icon: MessageCircle,
      features: ["Technical Discussions", "Code Sharing", "Problem Solving"]
    },
    {
      title: "Events & Webinars",
      description: "Join our regular events and learning sessions",
      icon: Calendar,
      features: ["Monthly Webinars", "Tech Talks", "Workshops"]
    },
    {
      title: "Expert Network",
      description: "Access to our network of technology experts",
      icon: Users,
      features: ["Mentorship", "Consultations", "Collaboration"]
    },
    {
      title: "Recognition Program",
      description: "Get recognized for your contributions",
      icon: Award,
      features: ["Community Badges", "Contributor Recognition", "Special Access"]
    }
  ];

  return (
    <Layout
      title="Community - Zion Tech Group"
      description="Join our vibrant community of developers, technologists, and innovators. Connect, learn, and grow together."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, Award, BookOpen, Code, Globe, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const communityFeatures = [
  {
    icon: Users,
    title: 'Developer Forums',
    description: 'Connect with fellow developers, share knowledge, and get help with your projects.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Real-time discussions and instant support from our community and team.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Calendar,
    title: 'Events & Meetups',
    description: 'Join our regular events, workshops, and networking opportunities.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Get recognized for your contributions and achievements in the community.',
    color: 'from-yellow-500 to-orange-500'
  }
];

const communityStats = [
  { number: '10,000+', label: 'Active Members' },
  { number: '50+', label: 'Countries' },
  { number: '500+', label: 'Projects Shared' },
  { number: '24/7', label: 'Support Available' }
];

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our vibrant community of developers, innovators, and technology enthusiasts." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
>>>>>>> pr-11913
                Connect, learn, and grow together in the world of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-500 flex items-center">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
=======
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
>>>>>>> pr-11913
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Connect with like-minded professionals and take your skills to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Join Now
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
=======
        {/* Community Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Community Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of developers and innovators who are shaping the future of technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Become part of our growing community and start collaborating with like-minded professionals today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Join Community
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}