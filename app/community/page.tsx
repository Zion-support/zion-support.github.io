<<<<<<< HEAD
};

export default PagePage;
          {/* Tabs */} <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">{[</div>
                { id: 'overview', name: 'Overview' ,},
                {id: 'events', name: 'Events' ,},
                {id: 'forums', name: 'Forums' ,},
                {id: 'benefits', name: 'Benefits' ,}].map((tab) => (
                <button;
                  key={tab.id}onClick={() =>setActiveTab(tab.id)</button>}className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id;
          {/* Overview Tab */}{activeTab === 'overview' && (
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Be respectful and inclusive;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Share knowledge generously;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Help others learn and grow;
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Keep discussions relevant and constructive;
          )}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe } from "lucide-react";
export default function Community() {
  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join industry leaders as we explore the latest trends in artificial intelligence and machine learning.",
      attendees: 500
    },
    {
      title: "Tech Talk: Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "2:00 PM - 3:00 PM",
      location: "Online Webinar",
      description: "Learn about the latest cloud security strategies and how to protect your digital assets.",
      attendees: 150
    },
    {
      title: "Developer Workshop: React & TypeScript",
      date: "March 29, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Office",
      description: "Hands-on workshop covering advanced React patterns and TypeScript best practices.",
      attendees: 25
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

          {/* Events Tab */}{activeTab === 'events' && (
                          <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded">{event.type</span>} </span>
                        </div>
                      </div>
                      <a;
                        Register Now;
                        <ArrowRight className="w-4 h-4 ml-2" />
          )}

          {/* Forums Tab */}{activeTab === 'forums' && (
                        Visit Forum;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}

          {/* Benefits Tab */}{activeTab === 'benefits' && (
          )}

          {/* Join Community CTA */} <div id="join" className="cyber-card-enhanced p-8 mt-16 text-center">
              <a;
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
<<<<<<< HEAD
                Learn More;
          {/* Contact Information */} <div className="cyber-card-enhanced p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto: community@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">,
                    community@ziontechgroup.com;
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel: +13024640950" className="text-cyan-400 hover:text-cyan-300">,
                    +1 (302) 464-0950;
=======
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Events
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our upcoming events and workshops to learn, network, and grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Community Initiatives</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get involved in our community programs and make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                  <p className="text-gray-300 mb-4">{initiative.description}</p>
                  <div className="text-cyan-400 font-semibold">{initiative.participants}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with thousands of professionals, attend exclusive events, and be part of something bigger.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
