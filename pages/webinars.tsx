import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Play, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const WebinarsPage: React.FC = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI Revolution in Business: Practical Implementation Strategies",
      description: "Learn how to implement AI solutions in your business with real-world examples and actionable strategies.",
      speaker: "Dr. Sarah Johnson",
      speakerTitle: "AI Research Director, Zion Tech Group",
      date: "2025-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      attendees: 150,
      maxAttendees: 500,
      category: "Artificial Intelligence",
      level: "Intermediate",
      image: "/images/webinars/ai-business.jpg",
      slug: "ai-revolution-business-implementation"
    },
    {
      id: 2,
      title: "Cloud Security Best Practices for 2025",
      description: "Discover the latest cloud security trends and best practices to protect your organization's data and infrastructure.",
      speaker: "Mike Chen",
      speakerTitle: "Cybersecurity Expert, Zion Tech Group",
      date: "2025-02-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      attendees: 89,
      maxAttendees: 300,
      category: "Cybersecurity",
      level: "Beginner",
      image: "/images/webinars/cloud-security.jpg",
      slug: "cloud-security-best-practices-2025"
    },
    {
      id: 3,
      title: "Building Scalable Micro SaaS Products",
      description: "Learn the secrets to building and scaling profitable micro SaaS products from concept to market success.",
      speaker: "Emily Watson",
      speakerTitle: "SaaS Product Manager, Zion Tech Group",
      date: "2025-03-01",
      time: "1:00 PM EST",
      duration: "75 minutes",
      attendees: 67,
      maxAttendees: 200,
      category: "SaaS Development",
      level: "Advanced",
      image: "/images/webinars/micro-saas.jpg",
      slug: "building-scalable-micro-saas"
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Digital Transformation: A Complete Guide",
      description: "Comprehensive overview of digital transformation strategies and implementation best practices.",
      speaker: "Alex Rodriguez",
      speakerTitle: "Digital Strategy Consultant",
      date: "2025-01-20",
      duration: "60 minutes",
      attendees: 234,
      category: "Digital Transformation",
      level: "Intermediate",
      recordingUrl: "https://youtube.com/watch?v=example1",
      image: "/images/webinars/digital-transformation.jpg",
      slug: "digital-transformation-complete-guide"
    },
    {
      id: 5,
      title: "Data Analytics for Business Intelligence",
      description: "Learn how to turn your data into actionable business insights and drive decision-making.",
      speaker: "David Kim",
      speakerTitle: "Data Analytics Director",
      date: "2025-01-15",
      duration: "50 minutes",
      attendees: 189,
      category: "Data Analytics",
      level: "Beginner",
      recordingUrl: "https://youtube.com/watch?v=example2",
      image: "/images/webinars/data-analytics.jpg",
      slug: "data-analytics-business-intelligence"
    },
    {
      id: 6,
      title: "DevOps Automation: Streamlining Your Pipeline",
      description: "Master DevOps practices to accelerate development cycles and improve deployment reliability.",
      speaker: "Lisa Thompson",
      speakerTitle: "DevOps Engineer",
      date: "2025-01-10",
      duration: "65 minutes",
      attendees: 156,
      category: "DevOps",
      level: "Advanced",
      recordingUrl: "https://youtube.com/watch?v=example3",
      image: "/images/webinars/devops-automation.jpg",
      slug: "devops-automation-streamlining-pipeline"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "SaaS Development", "Digital Transformation", "Data Analytics", "DevOps"];

  return (
    <>
      <Helmet>
        <title>Webinars - Zion Tech Group | Technology Education & Training</title>
        <meta name="description" content="Join our expert-led webinars on the latest technology trends, best practices, and industry insights. Learn from technology leaders and practitioners." />
        <meta name="keywords" content="webinars, technology training, online education, AI, cybersecurity, SaaS development, digital transformation, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/webinars" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Education & Training
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Join our expert-led webinars on the latest technology trends, best practices, and industry insights. Learn from technology leaders and practitioners.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Upcoming Webinars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-16 h-16 mx-auto mb-2" />
                      <div className="text-lg font-bold">{webinar.category}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(webinar.date).toLocaleDateString()} at {webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Registration</span>
                        <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-16 h-16 mx-auto mb-2" />
                      <div className="text-lg font-bold">{webinar.category}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        {webinar.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(webinar.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={webinar.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Watch Recording
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get notified about upcoming webinars, technology insights, and exclusive content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarsPage;