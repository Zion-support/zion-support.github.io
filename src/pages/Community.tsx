import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Globe, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  BarChart3,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Database,
  BookOpen,
  Video,
  FileText,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
  Star,
  Share2,
  Mail,
  Phone,
  Building2,
  HelpCircle
} from 'lucide-react';

export default function Community() {
  const communityEvents = [
    {
      id: 1,
      title: "AI & Automation Summit 2025",
      description: "Join industry leaders and experts for a comprehensive exploration of AI technologies and their impact on business transformation.",
      date: "April 15-17, 2025",
      location: "San Francisco, CA",
      type: "Conference",
      attendees: 500,
      category: "AI & Technology",
      featured: true,
      registrationUrl: "/events/ai-summit-2025",
      highlights: [
        "Keynote speeches from AI industry leaders",
        "Hands-on workshops and demonstrations",
        "Networking opportunities with experts",
        "Exclusive product previews"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Workshop Series",
      description: "Learn the latest cybersecurity best practices and threat mitigation strategies in our hands-on workshop series.",
      date: "March 28, 2025",
      location: "Virtual Event",
      type: "Workshop",
      attendees: 200,
      category: "Security",
      featured: false,
      registrationUrl: "/events/cybersecurity-workshop",
      highlights: [
        "Threat detection and response",
        "Security architecture design",
        "Compliance and governance",
        "Incident response planning"
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps Meetup",
      description: "Connect with fellow developers and DevOps professionals to share knowledge and best practices.",
      date: "April 5, 2025",
      location: "Austin, TX",
      type: "Meetup",
      attendees: 75,
      category: "Development",
      featured: false,
      registrationUrl: "/events/cloud-devops-meetup",
      highlights: [
        "Technical presentations",
        "Open discussion forums",
        "Networking sessions",
        "Lightning talks"
      ]
    },
    {
      id: 4,
      title: "Digital Transformation Forum",
      description: "Explore strategies for successful digital transformation in enterprise organizations.",
      date: "May 10, 2025",
      location: "New York, NY",
      type: "Forum",
      attendees: 300,
      category: "Business Strategy",
      featured: true,
      registrationUrl: "/events/digital-transformation-forum",
      highlights: [
        "Case study presentations",
        "Strategy workshops",
        "Expert panel discussions",
        "Implementation roadmaps"
      ]
    }
  ];

  const communityGroups = [
    {
      id: 1,
      name: "AI & Machine Learning Enthusiasts",
      description: "A community of professionals passionate about artificial intelligence and machine learning technologies.",
      members: 1250,
      category: "AI & Technology",
      meetingFrequency: "Bi-weekly",
      nextMeeting: "April 8, 2025",
      topics: ["Machine Learning", "Deep Learning", "AI Ethics", "Neural Networks"],
      joinUrl: "/community/ai-ml-group"
    },
    {
      id: 2,
      name: "Cybersecurity Professionals Network",
      description: "Connect with security experts, share threat intelligence, and discuss emerging security challenges.",
      members: 890,
      category: "Security",
      meetingFrequency: "Monthly",
      nextMeeting: "April 15, 2025",
      topics: ["Threat Intelligence", "Incident Response", "Security Architecture", "Compliance"],
      joinUrl: "/community/cybersecurity-network"
    },
    {
      id: 3,
      name: "Cloud & DevOps Community",
      description: "A collaborative space for cloud architects, DevOps engineers, and infrastructure specialists.",
      members: 1100,
      category: "Development",
      meetingFrequency: "Weekly",
      nextMeeting: "April 3, 2025",
      topics: ["Cloud Architecture", "DevOps Practices", "Containerization", "Infrastructure as Code"],
      joinUrl: "/community/cloud-devops"
    },
    {
      id: 4,
      name: "Data Science & Analytics Hub",
      description: "Share insights on data analytics, visualization, and business intelligence solutions.",
      members: 750,
      category: "Data & Analytics",
      meetingFrequency: "Monthly",
      nextMeeting: "April 20, 2025",
      topics: ["Data Analytics", "Business Intelligence", "Data Visualization", "Predictive Modeling"],
      joinUrl: "/community/data-science"
    },
    {
      id: 5,
      name: "Startup & Innovation Network",
      description: "Connect with entrepreneurs, investors, and innovators in the technology space.",
      members: 600,
      category: "Innovation",
      meetingFrequency: "Bi-monthly",
      nextMeeting: "May 5, 2025",
      topics: ["Startup Strategy", "Innovation Management", "Funding", "Market Entry"],
      joinUrl: "/community/startup-innovation"
    },
    {
      id: 6,
      name: "Women in Technology",
      description: "Empowering women in technology through mentorship, networking, and professional development.",
      members: 450,
      category: "Professional Development",
      meetingFrequency: "Monthly",
      nextMeeting: "April 12, 2025",
      topics: ["Career Development", "Leadership", "Technical Skills", "Mentorship"],
      joinUrl: "/community/women-in-tech"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Network with Experts",
      description: "Connect with industry professionals and thought leaders"
    },
    {
      icon: Lightbulb,
      title: "Learn & Grow",
      description: "Access exclusive knowledge and skill development opportunities"
    },
    {
      icon: Target,
      title: "Career Advancement",
      description: "Discover new opportunities and accelerate your professional growth"
    },
    {
      icon: Heart,
      title: "Give Back",
      description: "Share your expertise and mentor others in the community"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Access our comprehensive library of technical resources and guides",
      url: "/resources/knowledge-base"
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Watch recorded sessions, tutorials, and expert presentations",
      url: "/resources/videos"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Technical documentation and implementation guides",
      url: "/resources/documentation"
    },
    {
      icon: Code,
      title: "Code Samples",
      description: "Reusable code examples and development templates",
      url: "/resources/code-samples"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community of technology professionals, innovators, and thought leaders. Connect, learn, and grow through events, meetups, and collaborative networks." />
        <link rel="canonical" href="https://ziontechgroup.com/community" />
        <meta name="keywords" content="tech community, professional networking, technology events, AI meetups, cybersecurity workshops, cloud computing community, professional development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Connect with technology professionals, innovators, and thought leaders. 
              Share knowledge, build relationships, and accelerate your career growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>5,000+ Members</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Monthly Events</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Network</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-gray-300 text-lg">
              Discover the benefits of being part of our growing technology community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-300 text-lg">
              Join us at our upcoming community events and workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2"><strong>Highlights:</strong></p>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={event.registrationUrl}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/events"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Community Groups Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Groups
            </h2>
            <p className="text-gray-300 text-lg">
              Join specialized groups based on your interests and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                    {group.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {group.members.toLocaleString()}
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {group.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {group.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Meets {group.meetingFrequency}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Next: {group.nextMeeting}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2"><strong>Topics:</strong></p>
                  <div className="flex flex-wrap gap-2">
                    {group.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={group.joinUrl}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Join Group
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Resources
            </h2>
            <p className="text-gray-300 text-lg">
              Access exclusive resources and learning materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with like-minded professionals and start your journey of growth and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="/events"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Browse Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About Our Community?
            </h3>
            <p className="text-gray-300 mb-6">
              Our community team is here to help you get started and make the most of your membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Community Team
              </a>
              <a
                href="/help"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                                 <HelpCircle className="w-4 h-4 mr-2" />
                Community Guidelines
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
