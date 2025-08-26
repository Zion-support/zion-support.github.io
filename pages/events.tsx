import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Zion AI Summit 2025",
      date: "2025-02-15",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      description: "Join us for the biggest AI automation event of the year. Learn about the latest trends, network with industry leaders, and see live demonstrations of autonomous systems.",
      type: "Conference",
      attendees: 500,
      registration: "Open"
    },
    {
      id: 2,
      title: "Autonomous Systems Workshop",
      date: "2025-01-25",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      description: "Hands-on workshop on building and deploying autonomous cloud systems. Perfect for developers and DevOps engineers.",
      type: "Workshop",
      attendees: 50,
      registration: "Limited Spots"
    },
    {
      id: 3,
      title: "Cloud Automation Meetup",
      date: "2025-01-30",
      time: "6:00 PM - 8:00 PM",
      location: "New York, NY",
      description: "Monthly meetup for cloud automation enthusiasts. Share experiences, learn from peers, and discover new tools.",
      type: "Meetup",
      attendees: 100,
      registration: "Open"
=======

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Cloud Automation Summit 2025',
      date: '2025-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      type: 'Conference',
      description: 'Join industry leaders and experts for a day of insights into the future of cloud automation and AI-driven infrastructure.',
      speakers: ['Dr. Sarah Chen', 'Mark Rodriguez', 'Lisa Thompson'],
      capacity: 500,
      registered: 342
    },
    {
      id: 2,
      title: 'AI Automation Workshop',
      date: '2025-02-22',
      time: '2:00 PM - 6:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      description: 'Hands-on workshop covering practical implementation of AI automation in cloud environments.',
      speakers: ['Alex Johnson', 'Maria Garcia'],
      capacity: 100,
      registered: 87
    },
    {
      id: 3,
      title: 'Developer Meetup: Automation Tools',
      date: '2025-03-01',
      time: '6:00 PM - 9:00 PM',
      location: 'New York, NY',
      type: 'Meetup',
      description: 'Network with fellow developers and learn about the latest automation tools and techniques.',
      speakers: ['David Kim', 'Rachel Green'],
      capacity: 150,
      registered: 98
>>>>>>> origin/cursor/update-content-and-fix-links-7079
    }
  ];

  const pastEvents = [
    {
      id: 4,
<<<<<<< HEAD
      title: "Zion Launch Event",
      date: "2025-01-10",
      location: "Virtual",
      description: "The official launch of Zion's autonomous cloud automation platform.",
      type: "Launch"
=======
      title: 'Zion App Launch Event',
      date: '2025-01-10',
      location: 'Virtual Event',
      type: 'Product Launch',
      description: 'Celebrated the official launch of Zion App with demonstrations and Q&A sessions.',
      attendees: 1200
    },
    {
      id: 5,
      title: 'Automation Best Practices Webinar',
      date: '2025-01-05',
      location: 'Virtual Event',
      type: 'Webinar',
      description: 'Shared insights and best practices for implementing automation in production environments.',
      attendees: 850
>>>>>>> origin/cursor/update-content-and-fix-links-7079
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Events | Zion - AI & Automation Events</title>
        <meta name="description" content="Join Zion at upcoming events, workshops, and conferences focused on AI automation and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join us at conferences, workshops, and meetups focused on the future of autonomous cloud automation
            </p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>📅 {event.date}</span>
                      <span>🕒 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="text-right mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        event.registration === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.registration}
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    📅 {event.date} • 📍 {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Host an Event with Zion
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in hosting a workshop, meetup, or conference? Let's collaborate to bring the future of automation to your community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Events - Zion App</title>
        <meta name="description" content="Upcoming events, conferences, and workshops hosted by Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Events & Meetups
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us for conferences, workshops, and networking events
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="md:flex md:items-start md:justify-between">
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          event.type === 'Conference' ? 'bg-purple-500/20 text-purple-400' :
                          event.type === 'Workshop' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-gray-400 text-sm">{event.date}</span>
                        <span className="text-gray-400 text-sm">{event.time}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                        <span>📍 {event.location}</span>
                        <span>👥 {event.registered}/{event.capacity} registered</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-2">Speakers:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker) => (
                            <span key={speaker} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 md:text-right mt-4 md:mt-0">
                      <button className="w-full md:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors mb-3">
                        Register Now
                      </button>
                      <button className="w-full md:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      event.type === 'Product Launch' ? 'bg-orange-500/20 text-orange-400' :
                          event.type === 'Webinar' ? 'bg-indigo-500/20 text-indigo-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                      {event.type}
                    </span>
                    <span className="text-gray-400 text-sm">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">📍 {event.location}</span>
                    <span className="text-gray-400">👥 {event.attendees} attendees</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Host an Event with Us
              </h3>
              <p className="text-gray-300 mb-6">
                Interested in hosting a workshop, meetup, or conference? Let's collaborate!
              </p>
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                Get in Touch
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/update-content-and-fix-links-7079
  );
}