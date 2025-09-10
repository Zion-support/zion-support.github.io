import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CalendarIcon as CalendarIconIcon, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Video,
  MessageSquare,
  Building
} from 'lucide-react';

const timeSlots = [
  { time: "9:00 AM", available: true, type: "Video Call" },
  { time: "9:30 AM", available: true, type: "Phone Call" },
  { time: "10:00 AM", available: false, type: "Video Call" },
  { time: "10:30 AM", available: true, type: "In-Person" },
  { time: "11:00 AM", available: true, type: "Video Call" },
  { time: "11:30 AM", available: true, type: "Phone Call" },
  { time: "1:00 PM", available: true, type: "Video Call" },
  { time: "1:30 PM", available: false, type: "In-Person" },
  { time: "2:00 PM", available: true, type: "Video Call" },
  { time: "2:30 PM", available: true, type: "Phone Call" },
  { time: "3:00 PM", available: true, type: "In-Person" },
  { time: "3:30 PM", available: true, type: "Video Call" },
  { time: "4:00 PM", available: false, type: "Phone Call" },
  { time: "4:30 PM", available: true, type: "Video Call" },
  { time: "5:00 PM", available: true, type: "Phone Call" }
];

const consultationTypes = [
  {
    title: "Free Discovery Call",
    duration: "30 minutes",
    description: "Discuss your project requirements and explore how we can help",
    price: "Free",
    icon: MessageSquare,
    features: ["Project assessment", "Solution recommendations", "Timeline discussion", "Budget estimation"]
  },
  {
    title: "Technical Consultation",
    duration: "60 minutes",
    description: "Deep dive into technical requirements and architecture planning",
    price: "$200",
    icon: Building,
    features: ["Technical architecture review", "Technology stack recommendations", "Implementation planning", "Risk assessment"]
  },
  {
    title: "Strategy Session",
    duration: "90 minutes",
    description: "Comprehensive business strategy and digital transformation planning",
    price: "$500",
    icon: Users,
    features: ["Business analysis", "Digital strategy planning", "ROI projections", "Implementation roadmap"]
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    expertise: "Strategic Planning, AI Strategy",
    image: "/images/team/sarah-johnson.jpg",
    available: true
  },
  {
    name: "Michael Chen",
    role: "CTO",
    expertise: "Cloud Architecture, Quantum Computing",
    image: "/images/team/michael-chen.jpg",
    available: true
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of AI Research",
    expertise: "Machine Learning, AI Research",
    image: "/images/team/emily-rodriguez.jpg",
    available: false
  },
  {
    name: "David Kim",
    role: "Head of Cybersecurity",
    expertise: "Cybersecurity, Risk Management",
    image: "/images/team/david-kim.jpg",
    available: true
  }
];

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>Schedule a Consultation - ZION TECH GROUP</title>
        <meta name="description" content="Schedule a free consultation with our experts. Book a call to discuss your AI, IT, or digital transformation needs." />
        <meta name="keywords" content="schedule, consultation, book call, free consultation, AI experts, IT consulting" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Schedule a <span className="text-blue-600">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book a free consultation with our experts to discuss your project requirements and explore how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Free 30-minute Discovery Call</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Expert Team Available</span>
              </div>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Flexible Scheduling</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the type of consultation that best fits your needs and schedule.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0 ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'
                }`}
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-lg mb-4 opacity-90">{type.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm opacity-75">{type.duration}</span>
                  <span className="text-2xl font-bold">{type.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose to meet with any of our available team members for your consultation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                  member.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {member.available ? 'Available' : 'Unavailable'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Time Slots</h2>
            <p className="text-xl text-gray-600">
              Select your preferred time slot for today's consultations.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {timeSlots.map((slot, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                disabled={!slot.available}
                className={`p-4 rounded-lg text-center transition-all ${
                  slot.available
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <div className="text-lg font-semibold">{slot.time}</div>
                <div className="text-sm opacity-75">{slot.type}</div>
                {slot.available && (
                  <CheckCircle className="w-5 h-5 mx-auto mt-2" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you need to speak with someone right away or have urgent questions, please contact us directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">123 Tech Street, San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-blue-100">Mon-Fri: 9:00 AM - 6:00 PM PST</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Video className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">Video Calls</div>
                    <div className="text-blue-100">Zoom, Teams, or Google Meet</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">Live Chat</div>
                    <div className="text-blue-100">Available 24/7 on our website</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your consultation today and take the first step towards transforming your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}