<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/update-content-and-fix-links-5397
import Head from 'next/head';
import Link from 'next/link';

const Events: React.FC = () => {
<<<<<<< HEAD
  const upcomingEvents = [
    {
      title: 'Automation Masterclass 2025',
      date: '2025-02-15',
      time: '10:00 AM - 2:00 PM EST',
      type: 'Webinar',
      description: 'Learn advanced automation techniques and best practices for cloud-native applications.',
      speaker: 'Dr. Sarah Chen, Automation Expert',
      attendees: 156,
      status: 'upcoming',
      category: 'Automation'
    },
    {
      title: 'Cloud Architecture Summit',
      date: '2025-02-22',
      time: '9:00 AM - 5:00 PM EST',
      type: 'Conference',
      description: 'Join industry leaders for a comprehensive overview of modern cloud architecture patterns.',
      speaker: 'Multiple Speakers',
      attendees: 342,
      status: 'upcoming',
      category: 'Architecture'
    },
    {
      title: 'DevOps Best Practices Workshop',
      date: '2025-03-01',
      time: '1:00 PM - 4:00 PM EST',
      type: 'Workshop',
      description: 'Hands-on workshop covering CI/CD pipelines, monitoring, and deployment strategies.',
      speaker: 'Mike Rodriguez, DevOps Engineer',
      attendees: 89,
      status: 'upcoming',
      category: 'DevOps'
    },
    {
      title: 'Security in Automation Systems',
      date: '2025-03-08',
      time: '11:00 AM - 1:00 PM EST',
      type: 'Panel Discussion',
      description: 'Expert panel discussing security challenges and solutions in automated systems.',
      speaker: 'Security Experts Panel',
      attendees: 203,
      status: 'upcoming',
      category: 'Security'
    }
  ];

  const pastEvents = [
    {
      title: 'Introduction to Cloud Automation',
      date: '2025-01-10',
      type: 'Webinar',
      description: 'Basic concepts and getting started with cloud automation.',
      attendees: 234,
      status: 'completed',
      recording: 'https://youtube.com/watch?v=example1'
    },
    {
      title: 'Performance Optimization Workshop',
      date: '2025-01-17',
      type: 'Workshop',
      description: 'Practical techniques for optimizing application performance.',
      attendees: 167,
      status: 'completed',
      recording: 'https://youtube.com/watch?v=example2'
    }
  ];

  const eventCategories = [
    { name: 'All Events', count: upcomingEvents.length + pastEvents.length, active: true },
    { name: 'Automation', count: upcomingEvents.filter(e => e.category === 'Automation').length, active: false },
    { name: 'Architecture', count: upcomingEvents.filter(e => e.category === 'Architecture').length, active: false },
    { name: 'DevOps', count: upcomingEvents.filter(e => e.category === 'DevOps').length, active: false },
    { name: 'Security', count: upcomingEvents.filter(e => e.category === 'Security').length, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Webinar': return 'bg-blue-100 text-blue-800';
      case 'Conference': return 'bg-purple-100 text-purple-800';
      case 'Workshop': return 'bg-green-100 text-green-800';
      case 'Panel Discussion': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Events - bolt.new.zion.app</title>
        <meta name="description" content="Upcoming events, webinars, and workshops on automation, cloud architecture, and best practices" />
        <meta name="keywords" content="events, webinars, workshops, automation, cloud, architecture" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community events to learn from experts, network with peers, and stay updated 
              on the latest trends in automation and cloud architecture.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/content-hub" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Content Hub
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Event Categories */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Categories</h2>
            <div className="flex flex-wrap gap-4">
              {eventCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    category.active
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count} events</div>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div>📅 {formatDate(event.date)}</div>
                        <div>🕒 {event.time}</div>
                        <div>👤 {event.speaker}</div>
                        <div>👥 {event.attendees} registered</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Add to Calendar
=======
  const [activeFilter, setActiveFilter] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: '📅' },
    { id: 'webinars', name: 'Webinars', icon: '💻' },
    { id: 'workshops', name: 'Workshops', icon: '🔧' },
    { id: 'conferences', name: 'Conferences', icon: '🎤' },
    { id: 'meetups', name: 'Meetups', icon: '🤝' }
  ];

  const events = [
    {
      id: 1,
      title: 'Automation Masterclass 2025',
      category: 'webinars',
      date: '2025-02-15',
      time: '14:00 UTC',
      duration: '2 hours',
      description: 'Learn advanced automation techniques and best practices from industry experts.',
      speaker: 'Dr. Sarah Chen',
      attendees: 150,
      status: 'upcoming',
      featured: true
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Workshop',
      category: 'workshops',
      date: '2025-02-20',
      time: '10:00 UTC',
      duration: '4 hours',
      description: 'Hands-on workshop on building robust CI/CD pipelines for modern applications.',
      speaker: 'Mike Rodriguez',
      attendees: 75,
      status: 'upcoming',
      featured: false
    },
    {
      id: 3,
      title: 'DevOps Summit 2025',
      category: 'conferences',
      date: '2025-03-10',
      time: '09:00 UTC',
      duration: '2 days',
      description: 'Join industry leaders for insights into the future of DevOps and automation.',
      speaker: 'Multiple Speakers',
      attendees: 500,
      status: 'upcoming',
      featured: true
    },
    {
      id: 4,
      title: 'Local Developer Meetup',
      category: 'meetups',
      date: '2025-02-08',
      time: '18:00 UTC',
      duration: '3 hours',
      description: 'Network with local developers and share automation experiences.',
      speaker: 'Community Led',
      attendees: 25,
      status: 'upcoming',
      featured: false
    },
    {
      id: 5,
      title: 'Security in Automation',
      category: 'webinars',
      date: '2025-01-25',
      time: '15:00 UTC',
      duration: '1.5 hours',
      description: 'Understanding security implications and best practices in automated systems.',
      speaker: 'Alex Thompson',
      attendees: 200,
      status: 'completed',
      featured: false
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const completedEvents = events.filter(event => event.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Head>
        <title>Events - bolt.new.zion.app</title>
        <meta name="description" content="Join our events, webinars, workshops, and conferences on automation and development" />
        <meta name="keywords" content="events, webinars, workshops, conferences, meetups, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Events & Learning
            </h1>
            <p className="text-xl text-gray-600">
              Join our community events to learn, network, and stay updated with the latest in automation
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium">{event.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <p className="font-medium">{event.time}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <p className="font-medium">{event.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Attendees:</span>
                      <p className="font-medium">{event.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Speaker: {event.speaker}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {event.status === 'upcoming' ? 'Register' : 'View Recording'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {event.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{event.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Speaker: {event.speaker}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {event.status === 'upcoming' ? 'Register' : 'View Recording'}
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Past Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div>📅 {formatDate(event.date)}</div>
                        <div>👥 {event.attendees} attended</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={event.recording}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
                    >
                      Watch Recording
                    </a>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Event Materials
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Host Your Own Event</h2>
            <p className="text-blue-700 mb-6">
              Have expertise to share? We'd love to feature your event or workshop in our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Submit Event
              </Link>
              <Link href="/content-hub" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                View Content
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Get notified about upcoming events, workshops, and community activities.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
=======
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Statistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{upcomingEvents.length}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Upcoming Events</h3>
                <p className="text-gray-600">Join our next sessions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{completedEvents.length}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Completed Events</h3>
                <p className="text-gray-600">Access recordings and materials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Total Attendees</h3>
                <p className="text-gray-600">Join our growing community</p>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;