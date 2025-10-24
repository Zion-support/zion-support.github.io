'use client';
import React from 'react';
import Link from 'next/link';
// import { Cloud } from 'lucide-react';


const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Leading AI research and strategic vision with 15+ years in enterprise technology.",
    expertise: ["AI Strategy", "Leadership", "Innovation"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Expert in scalable architecture and cutting-edge AI implementation.",
    expertise: ["System Architecture", "AI Development", "Cloud Computing"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "Pioneering machine learning algorithms and neural network optimization.",
    expertise: ["Machine Learning", "Deep Learning", "Research"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "VP of Engineering",
    bio: "Building robust, scalable solutions that power the future of business.",
    expertise: ["Software Engineering", "DevOps", "Team Leadership"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Head of Data Science",
    bio: "Transforming raw data into actionable insights and business intelligence.",
    expertise: ["Data Analytics", "Business Intelligence", "Statistics"],
    image: "/api/placeholder/300/300"
  },
  {
    id: 6,
    name: "David Kumar",
    role: "Lead AI Engineer",
    bio: "Specializing in natural language processing and computer vision applications.",
    expertise: ["NLP", "Computer Vision", "AI Implementation"],
    image: "/api/placeholder/300/300"
  }
]
const values = [
  {
    icon: '🧠',
    title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."},
  {
    icon: '🌍',
    title: "Global Impact",
      description: "Our solutions create positive change for businesses and communities worldwide."},
  {
    icon: '🛡️',
    title: "Trust & Security",
      description: "We prioritize data security and ethical AI practices in everything we do."},
  {
    icon: '⚡',
    title: "Excellence",
    description: "We deliver exceptional results through meticulous attention to detail."}
  ]
const stats = [
  { label: "Years Combined Experience", value: "150+" },
  { label: "AI Projects Delivered", value: "1000+" },
  { label: "Team Members", value: "25+" },
  { label: "Client Satisfaction", value: "99%" }
]
const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      <div className="relativeoverflow-hidden">
        <div className="absoluteinset-0bg-gradient-to-rfrom-blue-600/20 to-purple-600/20"></div>
        <div className="relativemax-w-7xl mx-autopx-4 sm: px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
              Meet the brilliant minds behind our innovative AI and IT solutions.
              Our diverse team of experts is dedicated to transforming your business.
            </p>
          </div>
          {/* Stats Section */}
          <div className="gridgrid-cols-2md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xlmd:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Team Members */}
          <div className="gridmd:grid-cols-2lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white/10backdrop-blur-mdrounded-xlp-6 hover: bg-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-24h-24bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xlfont-boldtext-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-300mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300text-smmb-4">
                    {member.bio}
                  </p>
                  <div className="flexflex-wrapgap-2justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3py-1bg-blue-500/20text-blue-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xltext-gray-300mb-12max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
            <div className="gridmd:grid-cols-2lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16h-16bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of AI and technology.
            </p>
            <div className="flexflex-colsm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600hover:bg-blue-700text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="borderborder-whitetext-whitehover: bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamPage