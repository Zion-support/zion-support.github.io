import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Developer Forums",
      description: "Connect with other developers and get help with your projects",
      icon: ChatBubbleLeftRightIcon,
      features: ["Technical discussions", "Code sharing", "Problem solving", "Best practices"]
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, guides, and educational content",
      icon: AcademicCapIcon,
      features: ["Video tutorials", "Documentation", "Webinars", "Certification programs"]
    },
    {
      title: "Events & Meetups",
      description: "Join our virtual and in-person events",
      icon: UserGroupIcon,
      features: ["Monthly meetups", "Conferences", "Workshops", "Networking events"]
    },
    {
      title: "Contribution Program",
      description: "Contribute to open source projects and earn rewards",
      icon: TrophyIcon,
      features: ["Open source projects", "Bug bounties", "Feature requests", "Recognition program"]
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Development Workshop",
      date: "2024-02-15",
      time: "2:00 PM EST",
      type: "Workshop",
      description: "Learn advanced AI development techniques with hands-on exercises"
    },
    {
      title: "Cloud Architecture Meetup",
      date: "2024-02-20",
      time: "6:00 PM EST",
      type: "Meetup",
      description: "Discuss modern cloud architecture patterns and best practices"
    },
    {
      title: "Open Source Contribution Day",
      date: "2024-02-25",
      time: "10:00 AM EST",
      type: "Hackathon",
      description: "Join us for a day of contributing to open source projects"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community. Connect with developers, learn new skills, and contribute to open source projects." />
        <meta name="keywords" content="community, developers, forums, meetups, open source, learning, networking" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Community
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect, learn, and grow with our vibrant community
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Join thousands of developers, AI enthusiasts, and technology professionals 
              who are building the future together. Share knowledge, get help, and contribute to meaningful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Community Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to connect and collaborate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our upcoming community events
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                    event.type === 'Meetup' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {event.type}
                  </span>
                  <div className="text-right text-sm text-gray-400">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Community Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our community is making a real difference
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "5,000+", label: "Active Members" },
              { number: "500+", label: "Projects Shared" },
              { number: "100+", label: "Events Hosted" },
              { number: "50+", label: "Countries Represented" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Connect with like-minded professionals and start your journey today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Community
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/tutorials" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Learning
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>community@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}