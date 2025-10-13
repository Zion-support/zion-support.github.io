import React, { Link } from 'react-router-dom';
import React, { ArrowRight, Play, Clock, Users, Calendar, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WebinarsPage = () => {
  
  const upcomingWebinars = [
    {
      title: "AI-Powered Business Automation: A Complete Guide",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      description: "Learn how to implement AI automation in your business processes for maximum efficiency and ROI.",
      attendees: 1250,
      category: "AI & Automation"
    },
    {
      title: "5G Technology: Transforming Industries",
      date: "2024-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      description: "Explore the latest 5G innovations and how they're revolutionizing various industries.",'
      attendees: 980,
      category: "5G Solutions"
    },
    {
      title: "Cybersecurity Best Practices for 2024",
      date: "2024-01-29",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Alex Rodriguez",
      description: "Essential cybersecurity strategies to protect your business from emerging threats.",
      attendees: 2100,
      category: "Cybersecurity"
    }
  ];

  const pastWebinars = [
    {
      title: "Introduction to Micro SAAS Solutions",
      date: "2024-01-08",
      duration: "45 minutes",
      speaker: "Emily Davis",
      views: 3500,
      category: "Micro SAAS"
    },
    {
      title: "Data Analytics with AI: Real-World Applications",
      date: "2024-01-01",
      duration: "60 minutes",
      speaker: "Dr. James Wilson",
      views: 4200,
      category: "AI & Analytics"
    },
    {
      title: "Cloud Infrastructure Optimization",
      date: "2023-12-25",
      duration: "50 minutes",
      speaker: "Lisa Thompson",
      views: 2800,
      category: "Cloud Solutions"
    }
  ];

  const categories = [
    "All Webinars","
    "AI & Automation","
    "5G Solutions","
    "Cybersecurity","
    "Micro SAAS","
    "Cloud Solutions","
    "Data Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Webinars - Zion Tech Group | Technology Education & Training"
        description="Join our expert-led webinars on AI, 5G, cybersecurity, and more. Learn from industry leaders and stay ahead of technology trends with Zion Tech Group."
        keywords="webinars, technology training, AI education, 5G learning, cybersecurity training, tech webinars, online learning"
        canonical="https://ziontechgroup.com/webinars"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">"
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />"
            <span className="text-cyan-400 text-sm font-medium">Expert-Led Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Webinars;
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Learn from industry experts and stay ahead of technology trends. Join our free webinars ;
            covering AI, 5G, cybersecurity, and cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#upcoming"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
            >
              View Upcoming;
            </FuturisticButton>
            <FuturisticButton
              href="#past"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Past Webinars;
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button;
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Upcoming Webinars;
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our upcoming expert-led sessions and learn from industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">"
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {webinar.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Users className="w-4 h-4" />
                    <span>{webinar.attendees}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {webinar.description}
                </p>
                
                <div className="space-y-2 mb-6">"
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Clock className="w-4 h-4" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Mic className="w-4 h-4" />
                    <span>Speaker: {webinar.speaker}</span>
                  </div>
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Register Now;
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Past Webinars */}
      <section id="past" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Past Webinars;
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Catch up on our previous sessions and learn from industry experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">"
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {webinar.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Play className="w-4 h-4" />
                    <span>{webinar.views} views</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {webinar.title}
                </h3>
                
                <div className="space-y-2 mb-6">"
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Clock className="w-4 h-4" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Mic className="w-4 h-4" />
                    <span>Speaker: {webinar.speaker}</span>
                  </div>
                </div>
                
                <FuturisticButton
                  href="/demo"
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  Watch Now;
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated with Our Webinars;
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              Subscribe to Updates;
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
            >
              Request a Topic;
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
  );
};


export default WebinarsPage;
export default WebinarsPage;