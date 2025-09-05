import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Calendar, Play, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: "AI in Healthcare: Transforming Patient Care",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Chen",
      description: "Explore how AI is revolutionizing healthcare delivery and patient outcomes.",
      category: "AI & Healthcare"
    },
    {
      title: "Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "3:00 PM EST",
      speaker: "Michael Rodriguez",
      description: "Learn essential security measures for cloud infrastructure and data protection.",
      category: "Cybersecurity"
    },
    {
      title: "Building Scalable Micro SaaS Solutions",
      date: "March 29, 2024",
      time: "1:00 PM EST",
      speaker: "Alex Thompson",
      description: "Discover strategies for creating and scaling successful micro SaaS platforms.",
      category: "Micro SaaS"
    }
  ];

  const webinarFeatures = [
    {
      title: "Live Sessions",
      description: "Interactive webinars with real-time Q&A",
      icon: Play,
      features: ["Expert Speakers", "Live Q&A", "Interactive Demos"]
    },
    {
      title: "Recorded Content",
      description: "Access to our library of recorded webinars",
      icon: Calendar,
      features: ["On-Demand Access", "Downloadable Resources", "Mobile Friendly"]
    },
    {
      title: "Community Access",
      description: "Connect with other attendees and speakers",
      icon: Users,
      features: ["Networking", "Discussion Forums", "Follow-up Sessions"]
    },
    {
      title: "Certificates",
      description: "Earn certificates for completed webinars",
      icon: Award,
      features: ["Professional Development", "Continuing Education", "Industry Recognition"]
    }
  ];

  return (
    <MainLayout 
      title="Webinars - Zion Tech Group"
      description="Join our expert-led webinars on AI, cloud computing, cybersecurity, and emerging technologies."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn from industry experts through our comprehensive webinar series. 
                Stay updated with the latest trends and technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't miss our upcoming expert-led sessions on cutting-edge technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">
                      {webinar.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {webinar.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Speaker: {webinar.speaker}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {webinarFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-violet-600 mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600 justify-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Webinar
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}