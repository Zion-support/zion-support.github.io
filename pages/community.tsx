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
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our vibrant community of developers, technologists, and innovators. 
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
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-teal-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
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

        {/* Community Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community by the Numbers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our growing community of technology enthusiasts and professionals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">2,500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
                <div className="text-gray-600">Monthly Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">5,000+</div>
                <div className="text-gray-600">Forum Posts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Community Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to connect with like-minded professionals and expand your knowledge? Join our community today.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Join Community
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
}