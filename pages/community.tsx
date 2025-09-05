import React from 'react';
import Layout from '../../components/Layout';
import { Users, MessageCircle, Calendar, Award, BookOpen, Zap } from 'lucide-react';

const communityFeatures = [
  {
    title: "Developer Forums",
    description: "Connect with developers, share knowledge, and get help from the community",
    icon: MessageCircle,
    features: ["Technical Discussions", "Code Reviews", "Best Practices", "Q&A Support"]
  },
  {
    title: "Learning Resources",
    description: "Access tutorials, documentation, and educational content",
    icon: BookOpen,
    features: ["Tutorials", "Documentation", "Video Guides", "Code Examples"]
  },
  {
    title: "Events & Meetups",
    description: "Join our virtual and in-person events to network and learn",
    icon: Calendar,
    features: ["Webinars", "Workshops", "Conferences", "Networking Events"]
  },
  {
    title: "Recognition Program",
    description: "Get recognized for your contributions and achievements",
    icon: Award,
    features: ["Contributor Badges", "Leaderboards", "Certificates", "Special Recognition"]
  }
];

const upcomingEvents = [
  {
    title: "AI & Machine Learning Workshop",
    date: "2024-02-15",
    time: "2:00 PM EST",
    type: "Workshop",
    description: "Learn advanced AI techniques and best practices"
  },
  {
    title: "Cloud Architecture Deep Dive",
    date: "2024-02-20",
    time: "3:00 PM EST",
    type: "Webinar",
    description: "Explore modern cloud architecture patterns"
  },
  {
    title: "Community Meetup - NYC",
    date: "2024-02-25",
    time: "6:00 PM EST",
    type: "Meetup",
    description: "Network with local developers and tech professionals"
  }
];

export default function CommunityPage() {
  return (
    <Layout
      title="Community - Zion Tech Group"
      description="Join the Zion Tech Group community. Connect with developers, access learning resources, attend events, and contribute to open source projects."
      keywords="developer community, tech community, learning resources, events, meetups, open source"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our
                <span className="block text-purple-400">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Connect with developers, learn new skills, and contribute to innovative projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Join Community
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover all the ways you can engage with our vibrant developer community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our upcoming events and connect with the community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Workshop' ? 'bg-blue-100 text-blue-600' :
                      event.type === 'Webinar' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <div>Date: {event.date}</div>
                    <div>Time: {event.time}</div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Community by the Numbers
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our growing community of developers and tech professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
                <div className="text-gray-300">Projects Shared</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Connect with like-minded developers, learn new skills, and contribute to innovative projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Join Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Browse Events
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}