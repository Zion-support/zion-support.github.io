import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ExternalLink,
  Filter,
  Search,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  MessageCircle,
  BookOpen,
  CheckCircle
} from 'lucide-react';

const events = [
  {
    id: 1,
    title: "AI & Machine Learning Summit 2027",
    type: "Conference",
    date: "2027-03-15",
    time: "9:00 AM - 6:00 PM EST",
    location: "Virtual + New York City",
    status: "upcoming",
    category: "AI & ML",
    description: "Join industry leaders for a comprehensive exploration of AI and machine learning innovations, featuring keynote speakers, workshops, and networking opportunities.",
    speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "AI Expert Lisa Wang"],
    attendees: 500,
    price: "$299",
    highlights: [
      "Keynote presentations from AI pioneers",
      "Hands-on workshops with real datasets",
      "Networking with industry professionals",
      "Latest AI research and applications"
    ],
    image: "/images/ai-summit-2027.jpg"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices Workshop",
    type: "Workshop",
    date: "2027-02-28",
    time: "2:00 PM - 5:00 PM EST",
    location: "Virtual",
    status: "upcoming",
    category: "Cybersecurity",
    description: "Learn essential cybersecurity practices for modern businesses, including threat detection, incident response, and compliance requirements.",
    speakers: ["Security Expert John Smith", "Compliance Officer Maria Garcia"],
    attendees: 150,
    price: "Free",
    highlights: [
      "Threat detection strategies",
      "Incident response protocols",
      "Compliance best practices",
      "Security tool demonstrations"
    ],
    image: "/images/cybersecurity-workshop.jpg"
  },
  {
    id: 3,
    title: "Cloud Computing & DevOps Conference",
    type: "Conference",
    date: "2027-01-20",
    time: "8:00 AM - 7:00 PM EST",
    location: "San Francisco, CA",
    status: "upcoming",
    category: "Cloud & DevOps",
    description: "Explore the latest trends in cloud computing, containerization, and DevOps practices with hands-on demonstrations and expert insights.",
    speakers: ["Cloud Architect David Lee", "DevOps Engineer Sarah Johnson"],
    attendees: 300,
    price: "$199",
    highlights: [
      "Cloud migration strategies",
      "Container orchestration",
      "CI/CD pipeline optimization",
      "Cost optimization techniques"
    ],
    image: "/images/cloud-devops-conference.jpg"
  },
  {
    id: 4,
    title: "Data Analytics & Business Intelligence",
    type: "Webinar",
    date: "2027-01-10",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    status: "upcoming",
    category: "Data Analytics",
    description: "Discover how data analytics can transform your business decisions with real-world case studies and practical implementation strategies.",
    speakers: ["Data Scientist Emily Chen", "BI Consultant Robert Wilson"],
    attendees: 200,
    price: "Free",
    highlights: [
      "Data visualization techniques",
      "Predictive analytics models",
      "Business intelligence tools",
      "ROI measurement strategies"
    ],
    image: "/images/data-analytics-webinar.jpg"
  },
  {
    id: 5,
    title: "IoT & Edge Computing Symposium",
    type: "Symposium",
    date: "2026-12-15",
    time: "10:00 AM - 4:00 PM EST",
    location: "Virtual",
    status: "past",
    category: "IoT & Edge",
    description: "Explore the future of IoT and edge computing with industry experts, featuring case studies and emerging technology trends.",
    speakers: ["IoT Specialist Dr. James Brown", "Edge Computing Expert Lisa Chen"],
    attendees: 180,
    price: "$149",
    highlights: [
      "IoT architecture design",
      "Edge computing optimization",
      "Security considerations",
      "Industry applications"
    ],
    image: "/images/iot-symposium.jpg"
  },
  {
    id: 6,
    title: "Digital Transformation Summit",
    type: "Conference",
    date: "2026-11-30",
    time: "9:00 AM - 6:00 PM EST",
    location: "Chicago, IL",
    status: "past",
    category: "Digital Transformation",
    description: "Learn from successful digital transformation stories and discover strategies to modernize your business operations and customer experience.",
    speakers: ["Digital Strategist Mark Davis", "Transformation Expert Anna Rodriguez"],
    attendees: 400,
    price: "$249",
    highlights: [
      "Transformation roadmaps",
      "Change management strategies",
      "Technology selection",
      "Success metrics"
    ],
    image: "/images/digital-transformation-summit.jpg"
  }
];

const eventTypes = ['All', 'Conference', 'Workshop', 'Webinar', 'Symposium'];
const categories = ['All', 'AI & ML', 'Cybersecurity', 'Cloud & DevOps', 'Data Analytics', 'IoT & Edge', 'Digital Transformation'];
const statuses = ['All', 'upcoming', 'past'];

export default function Events() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'All' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || event.status === selectedStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesType && matchesCategory && matchesStatus && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & ML': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Data Analytics': return TrendingUp;
      case 'IoT & Edge': return Zap;
      case 'Digital Transformation': return Globe;
      default: return BookOpen;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'upcoming') {
      return <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Upcoming</span>;
    } else {
      return <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">Past</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Events & Webinars</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Events
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover the latest technology trends, learn from industry experts, and network with 
              professionals at our comprehensive events, workshops, and webinars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* Event Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'upcoming' ? 'Upcoming' : status === 'past' ? 'Past' : status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-zion-slate-light">Don't miss these exciting opportunities to learn and network</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(event.status)}
                            <span className="text-sm text-zion-slate-light">{event.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{event.price}</div>
                        <div className="text-sm text-zion-slate-light">Registration</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zion-slate-light mb-4">{event.description}</p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Highlights</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {event.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Speakers */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Featured Speakers</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((speaker, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate-light">Contact us for details</div>
                        <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Past Events</h2>
              <p className="text-zion-slate-light">Missed an event? Check out our past events and stay updated</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 opacity-75"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(event.status)}
                            <span className="text-sm text-zion-slate-light">{event.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zion-slate-light mb-4">{event.description}</p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                      >
                        View Event Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate-light">Contact us for future events</div>
                        <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Partner with Zion Tech Group to host technology events, workshops, or webinars. 
              Let's create valuable learning experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}