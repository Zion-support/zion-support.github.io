import React from 'react';
const upcomingEvents = [
  {
    title: 'AI Innovation Summit 2024',
    date: '2024-03-15',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco, CA',
    type: 'Conference',
    attendees: 500,
    description: 'Join industry leaders for a deep dive into the latest AI technologies and their practical applications.',
    speakers: ['Dr. Sarah Chen', 'Mark Johnson', 'Lisa Rodriguez'],
    price: '$299',
    image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=AI+Summit'
  },
  {
    title: 'Cloud Architecture Workshop',
    date: '2024-03-22',
    time: '10:00 AM - 3:00 PM',
    location: 'New York, NY',
    type: 'Workshop',
    attendees: 50,
    description: 'Hands-on workshop covering cloud architecture patterns, best practices, and implementation strategies.',
    speakers: ['Alex Thompson', 'Maria Garcia'],
    price: '$199',
    image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Cloud+Workshop'
  },
  {
    title: 'Cybersecurity Roundtable',
    date: '2024-03-28',
    time: '2:00 PM - 4:00 PM',
    location: 'Online',
    type: 'Webinar',
    attendees: 200,
    description: 'Interactive discussion on the latest cybersecurity threats and defense strategies.',
    speakers: ['David Kim', 'Jennifer Lee'],
    price: 'Free',
    image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Security+Roundtable'
  },
  {
    title: 'Developer Meetup',
    date: '2024-04-05',
    time: '6:00 PM - 9:00 PM',
    location: 'Austin, TX',
    type: 'Meetup',
    attendees: 100,
    description: 'Networking event for developers with lightning talks and open discussions.',
    speakers: ['Community Speakers'],
    price: 'Free',
    image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Developer+Meetup'
  },
  {
    title: 'Enterprise Solutions Expo',
    date: '2024-04-12',
    time: '9:00 AM - 6:00 PM',
    location: 'Chicago, IL',
    type: 'Expo',
    attendees: 1000,
    description: 'Comprehensive showcase of enterprise-grade solutions and technologies.',
    speakers: ['Industry Experts'],
    price: '$149',
    image: 'https://via.placeholder.com/400x250/ea580c/ffffff?text=Enterprise+Expo'
  },
  {
    title: 'Data Science Bootcamp',
    date: '2024-04-20',
    time: '9:00 AM - 5:00 PM',
    location: 'Seattle, WA',
    type: 'Bootcamp',
    attendees: 30,
    description: 'Intensive 2-day bootcamp covering data science fundamentals and advanced techniques.',
    speakers: ['Dr. Michael Chen', 'Sarah Wilson'],
    price: '$499',
    image: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=Data+Science'
  }
];

const eventTypes = [
  { name: 'All Events', count: 24, color: 'bg-gray-100 text-gray-800' },
  { name: 'Conferences', count: 6, color: 'bg-blue-100 text-blue-800' },
  { name: 'Workshops', count: 8, color: 'bg-green-100 text-green-800' },
  { name: 'Webinars', count: 5, color: 'bg-purple-100 text-purple-800' },
  { name: 'Meetups', count: 3, color: 'bg-orange-100 text-orange-800' },
  { name: 'Expos', count: 2, color: 'bg-red-100 text-red-800' }
];

export default function EventsPage() {
  return (
    <Layout
      title="Events - Zion Tech Group"
      description="Join our upcoming events, conferences, workshops, and webinars. Learn from industry experts and connect with peers."
      keywords="events, conferences, workshops, webinars, meetups, training, networking"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Upcoming{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Join our events to learn, network, and stay ahead of the latest technology trends. 
                From conferences to hands-on workshops.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#events">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Events
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Host an Event
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Types Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Filter by Event Type
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {eventTypes.map((type, index) => (
                  <button
                    key={type.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${type.color} hover:opacity-80`}
                  >
                    {type.name} ({type.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section id="events" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our upcoming events and find the perfect opportunity to learn and network.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Event Image</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                        event.type === 'Webinar' ? 'bg-purple-100 text-purple-800' :
                        event.type === 'Meetup' ? 'bg-orange-100 text-orange-800' :
                        event.type === 'Expo' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        {event.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Speakers:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <span key={speakerIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Missed an event? Check out recordings and resources from our past events.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
                >
                  <Video className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Event Recording {item}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Watch the full recording of our recent event
                  </p>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                  >
                    Watch Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Host an Event?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Partner with us to host your own event or workshop. 
                We provide the platform, you bring the expertise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Host an Event
                  </span>
                </Link>
                <Link href="/partners">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Become a Partner
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
=======
import SEO from '../components/SEO';

export default function EventsPage() {
	return (
		<>
			<SEO title="Events | Zion Tech Group" description="Upcoming events and conferences." canonical="/events" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Events</h1>
				<p className="text-gray-300">No upcoming events at this time. Check back soon.</p>
			</div>
		</>
	);
}