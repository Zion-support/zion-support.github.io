import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, ArrowRight, ExternalLink, Star } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const upcomingWebinars = [
  {
    title: "AI Revolution in Healthcare: Real-World Applications",
    description: "Join industry experts as they discuss how AI is transforming healthcare delivery, from diagnostic imaging to personalized medicine and patient care optimization.",
    date: "2024-02-15",
    time: "2:00 PM EST",
    duration: "60 minutes",
    speaker: "Dr. Sarah Johnson, CTO",
    attendees: "500+",
    category: "AI & Healthcare",
    image: "/api/placeholder/600/400",
    isLive: false,
    registrationOpen: true
  },
  {
    title: "Cloud Migration Strategies: Best Practices and Pitfalls",
    description: "Learn from our cloud experts about successful migration strategies, common challenges, and how to optimize your cloud infrastructure for maximum efficiency and cost savings.",
    date: "2024-02-22",
    time: "3:00 PM EST",
    duration: "45 minutes",
    speaker: "Michael Chen, Cloud Architect",
    attendees: "300+",
    category: "Cloud & Infrastructure",
    image: "/api/placeholder/600/400",
    isLive: false,
    registrationOpen: true
  },
  {
    title: "Cybersecurity Trends 2024: Protecting Your Digital Assets",
    description: "Stay ahead of emerging threats with insights from our security experts on the latest cybersecurity trends, threat landscape, and best practices for enterprise protection.",
    date: "2024-02-28",
    time: "1:00 PM EST",
    duration: "50 minutes",
    speaker: "David Kim, Security Lead",
    attendees: "400+",
    category: "Cybersecurity",
    image: "/api/placeholder/600/400",
    isLive: false,
    registrationOpen: true
  }
];

const pastWebinars = [
  {
    title: "Digital Transformation: A Strategic Approach",
    description: "Comprehensive guide to digital transformation strategies, implementation best practices, and real-world success stories from industry leaders.",
    date: "2024-01-20",
    duration: "55 minutes",
    speaker: "Kleber Santos, CEO",
    attendees: "750+",
    category: "Digital Transformation",
    image: "/api/placeholder/600/400",
    rating: 4.8,
    views: "2.5K",
    isLive: false,
    registrationOpen: false
  },
  {
    title: "Microservices Architecture: Design Patterns and Implementation",
    description: "Deep dive into microservices architecture, design patterns, and practical implementation strategies for building scalable, maintainable systems.",
    date: "2024-01-15",
    duration: "65 minutes",
    speaker: "Emily Rodriguez, Lead Developer",
    attendees: "600+",
    category: "Software Development",
    image: "/api/placeholder/600/400",
    rating: 4.9,
    views: "3.2K",
    isLive: false,
    registrationOpen: false
  },
  {
    title: "Data Analytics: From Insights to Action",
    description: "Learn how to transform raw data into actionable business insights using modern analytics tools and techniques.",
    date: "2024-01-10",
    duration: "50 minutes",
    speaker: "Lisa Wang, Data Scientist",
    attendees: "450+",
    category: "Data Analytics",
    image: "/api/placeholder/600/400",
    rating: 4.7,
    views: "2.8K",
    isLive: false,
    registrationOpen: false
  }
];

const liveWebinar = {
  title: "Live: Building Scalable React Applications",
  description: "Join us live as we demonstrate best practices for building scalable React applications with modern tools and techniques.",
  time: "Now Live",
  speaker: "Alex Thompson, Senior Developer",
  attendees: "150+",
  category: "Web Development",
  image: "/api/placeholder/600/400",
  isLive: true,
  registrationOpen: false
};

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Software Development",
  "Data Analytics",
  "Digital Transformation",
  "Web Development"
];

const stats = [
  { value: "50+", label: "Webinars Hosted" },
  { value: "10K+", label: "Total Attendees" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "95%", label: "Satisfaction Rate" }
];

export default function WebinarsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Webinars & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our expert-led webinars and events to stay ahead of technology trends and learn from industry leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Webinar */}
        {liveWebinar && (
          <section className="py-20 bg-red-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  LIVE NOW
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Currently Live
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img
                      src={liveWebinar.image}
                      alt={liveWebinar.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center">
                        <Play className="w-5 h-5 mr-2" />
                        Join Live
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {liveWebinar.category}
                      </span>
                      <span className="text-red-600 font-semibold">{liveWebinar.time}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {liveWebinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {liveWebinar.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-600">{liveWebinar.attendees} watching</span>
                      </div>
                      <div className="text-gray-600">
                        Speaker: {liveWebinar.speaker}
                      </div>
                    </div>

                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                      <Play className="w-5 h-5 mr-2" />
                      Join Live Webinar
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filter Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss our upcoming expert-led sessions covering the latest trends and technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Registration Open
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {webinar.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date} at {webinar.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} registered
                      </div>
                      <div className="text-sm text-gray-500">
                        Speaker: {webinar.speaker}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Past Webinars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Catch up on our previous webinars and learn from industry experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Now
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {webinar.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} attended
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {webinar.views} views
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{webinar.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Speaker: {webinar.speaker}
                      </div>
                    </div>

                    <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Recording
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Page;


import React from 'react';




ursor/fix-website-loading-errors-and-merge-6662
import React from 'react',;
import SEO from '../components/SEO',;
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function WebinarsPage() {
import React from 'react';
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Head from 'next/head';
import Layout from '../components/Layout';

export default function WebinarsPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <SEO
        title='Webinars | Zion Tech Group'
        description='Upcoming webinars and on-demand sessions.'
        canonical='/webinars'
      />
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-4'>Webinars</h1>
        <p className='text-gray-300'>
          No upcoming webinars at this time. Check back soon.
        </p>
      </div>
    </>
  );

 <> <SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" /> <div className="container mx-auto px-4 py-16" > <h1 className="text-4xl font-bold mb-4" >Webinars</h1> <p className="text-gray-300" >No upcoming webinars at this time. Check back soon.</p> </div> </> 
import SEO from '../components/SEO';
export default function WebinarsPage() {
import SEO from '../components/SEO';
export default function WebinarsPage() {
origin/main
origin/automation-improvements-final
	return (
		<>
			<SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Webinars</h1>
				<p className="text-gray-300">No upcoming webinars at this time. Check back soon.</p>
		<>
			<SEO title=&quot;Webinars | Zion Tech Group&quot; description=&quot;Upcoming webinars and on-demand sessions.&quot; canonical=&quot;/webinars&quot; />
			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<h1 className=&quot;text-4xl font-bold mb-4&quot;>Webinars</h1>
				<p className=&quot;text-gray-300&quot;>No upcoming webinars at this time. Check back soon.</p>

			</div>
		</>
	)

}
origin/cursor/integrate-build-improve-and-re-verify-2156
import React from 'react',;
import SEO from '../components / SEO',;
export default /**
 * WebinarsPage - Function description
 */
function WebinarsPage() {
return (
  <>;
  <SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on - demand sessions." canonical="/webinars" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 4">Webinars</h1>;
    <p className="text - gray - 300">No upcoming webinars at this time. Check back soon.</p>;
  </div>;
  </>);
}
origin/cursor/automate-test-improve-and-merge-code-20a4

}
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/automation-improvements-final
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
 <> <SEO title="Webinars | Zion Tech Group" description="Upcoming webinars and on-demand sessions." canonical="/webinars" /> <div className="container mx-auto px-4 py-16" > <h1 className="text-4xl font-bold mb-4" >Webinars</h1> <p className="text-gray-300" >No upcoming webinars at this time. Check back soon.</p> </div> </>
origin/cursor/automate-test-improve-and-merge-code-2533
}
