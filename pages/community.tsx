import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, BookOpen, Award, Star, ArrowRight, CheckCircle, Globe, Code, Heart, Zap } from 'lucide-react';

const communityFeatures = [
  {
    title: "Developer Forums",
    description: "Connect with developers, share knowledge, and get help from the community",
    icon: Code,
    members: "2,500+",
    posts: "15,000+"
  },
  {
    title: "Knowledge Base",
    description: "Access comprehensive guides, tutorials, and best practices shared by experts",
    icon: BookOpen,
    articles: "500+",
    views: "100K+"
  },
  {
    title: "Events & Webinars",
    description: "Join our regular events, webinars, and workshops to learn and network",
    icon: Calendar,
    events: "50+",
    attendees: "5,000+"
  },
  {
    title: "Success Stories",
    description: "Read inspiring stories from our community members and their achievements",
    icon: Award,
    stories: "200+",
    featured: "50+"
  }
];

const upcomingEvents = [
  {
    title: "AI Development Workshop",
    date: "2024-02-15",
    time: "2:00 PM EST",
    type: "Workshop",
    attendees: 150,
    description: "Learn advanced AI development techniques and best practices"
  },
  {
    title: "Cloud Migration Best Practices",
    date: "2024-02-20",
    time: "3:00 PM EST",
    type: "Webinar",
    attendees: 300,
    description: "Expert insights on successful cloud migration strategies"
  },
  {
    title: "Blockchain Innovation Summit",
    date: "2024-02-25",
    time: "10:00 AM EST",
    type: "Conference",
    attendees: 500,
    description: "Explore the latest trends and innovations in blockchain technology"
  },
  {
    title: "Micro SaaS Success Stories",
    date: "2024-03-01",
    time: "1:00 PM EST",
    type: "Panel Discussion",
    attendees: 200,
    description: "Hear from successful micro SaaS entrepreneurs"
  }
];

const communityStats = [
  { number: "10,000+", label: "Active Members" },
  { number: "50,000+", label: "Posts & Discussions" },
  { number: "200+", label: "Expert Contributors" },
  { number: "95%", label: "Member Satisfaction" }
];

const benefits = [
  {
    title: "Networking Opportunities",
    description: "Connect with industry professionals, potential partners, and clients",
    icon: Users
  },
  {
    title: "Knowledge Sharing",
    description: "Share your expertise and learn from other community members",
    icon: MessageCircle
  },
  {
    title: "Professional Growth",
    description: "Access exclusive resources and opportunities for career advancement",
    icon: Star
  },
  {
    title: "Early Access",
    description: "Get early access to new features, tools, and services",
    icon: Zap
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content: "The Zion Tech Group community has been invaluable for our team. The knowledge sharing and networking opportunities have helped us grow significantly.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    content: "I've learned so much from the community forums and workshops. The experts here are always willing to help and share their knowledge.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "The community events and webinars have given me insights that I couldn't get anywhere else. Highly recommended!",
    avatar: "ER"
  }
];

export default function CommunityPage() {
  return (
    <Layout
      title="Community - Zion Tech Group"
      description="Join the Zion Tech Group community. Connect with developers, share knowledge, attend events, and grow your professional network."
      keywords="community, developers, networking, events, webinars, knowledge sharing, professional growth"
      canonical="https://ziontechgroup.com/community"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
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
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Connect with thousands of developers, entrepreneurs, and technology professionals. 
                Share knowledge, learn from experts, and grow your network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#join" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Join Community
                </a>
                <a href="#events" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  View Events
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
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
                Community Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover all the ways you can engage with our vibrant community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      {Object.entries(feature).filter(([key]) => key !== 'title' && key !== 'description' && key !== 'icon').map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="font-semibold text-blue-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="events" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our upcoming events, webinars, and workshops.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{event.date}</div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Why Join Our Community?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the benefits of being part of our growing community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Community Says
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our community members about their experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section id="join" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of professionals who are already part of our growing community. 
              Start networking, learning, and growing today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Join Now - It's Free
              </a>
              <a 
                href="/events" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View All Events
              </a>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2" />
                <span>Global Community</span>
              </div>
              <div className="flex items-center justify-center">
                <Heart className="w-6 h-6 mr-2" />
                <span>Always Welcoming</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Free to Join</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}