'use client'
import React from 'react'
import Link from 'next/link'
const teamMembers = [
  {
    id: 1,
      name: "Dr. Sarah Chen"
    role: "Chief Executive Officer"
    bio: "Leading AI research and strategic vision with 15+ years in enterprise technology."
    expertise: ["AI Strategy", "Leadership", "Innovation"  ];
    image: "/api/placeholder/300/300"
      }
  {
    id: 2,
      name: "Michael Rodriguez"
    role: "Chief Technology Officer"
    bio: "Expert in scalable architecture and cutting-edge AI implementation."
    expertise: ["System Architecture", "AI Development", "Cloud Computing"  ];
    image: "/api/placeholder/300/300"
      }
  {
    id: 3,
      name: "Dr. Emily Watson"
    role: "Head of AI Research"
    bio: "Pioneering machine learning algorithms and neural network optimization."
    expertise: ["Machine Learning", "Deep Learning", "Research"  ];
    image: "/api/placeholder/300/300"
      }
  {
    id: 4,
      name: "James Thompson"
    role: "VP of Engineering"
    bio: "Building robust, scalable solutions that power the future of business."
    expertise: ["Software Engineering", "DevOps", "Team Leadership"  ];
    image: "/api/placeholder/300/300"
      }
  {
    id: 5,
      name: "Lisa Park"
    role: "Head of Data Science"
    bio: "Transforming raw data into actionable insights and business intelligence."
    expertise: ["Data Analytics", "Business Intelligence", "Statistics"  ];
    image: "/api/placeholder/300/300"
      }
  {
    id: 6,
      name: "David Kumar"
    role: "Lead AI Engineer"
    bio: "Specializing in natural language processing and computer vision applications."
    expertise: ["NLP", "Computer Vision", "AI Implementation"  ];
    image: "/api/placeholder/300/300"
  }
  ];
const values = [
  {
    icon: '🧠'
    title: "Innovation"
      description: "We constantly push the boundaries of what's possible with AI and technology."    }
  {
    icon: '🌍'
    title: "Global Impact"
      description: "Our solutions create positive change for businesses and communities worldwide."    }
  {
    icon: '🛡️'
    title: "Trust & Security"
      description: "We prioritize data security and ethical AI practices in everything we do."    }
  {
    icon: '⚡'
    title: "Excellence"
    description: "We deliver exceptional results through meticulous attention to detail."}
    ];
const stats = [
  { label: "Years Combined Experience", value: "150+"     }
  { label: "AI Projects Delivered", value: "1000+"     }
  { label: "Team Members", value: "25+"     }
  { label: "Client Satisfaction", value: "99%" }
  ];
const TeamPage: React.FC = () => {
  return (
    <div className="...">
      <div className="...">
        <div className="absoluteinset-0bg-gradient-to-rfrom-blue-600/20 to-purple-600/20"></div>
        <div className="...">
          <div className="...">
            <h1 className="...">
              Our Team
            </h1>
            <p className="...">
              Meet the brilliant minds behind our innovative AI and IT solutions.
              Our diverse team of experts is dedicated to transforming your business.
            </p>
          </div>
          {/* Stats Section */}
          <div className="...">
            {stats.map((stat, index) => (
              <div key={index} className="...">
                <div className="...">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Team Members */}
          <div className="...">
            {teamMembers.map((member) => (
              <div key={member.id} className="...">
                <div className="...">
                  <div className="...">
                    <span className="...">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="...">
                    {member.name}
                  </h3>
                  <p className="...">
                    {member.role}
                  </p>
                  <p className="...">
                    {member.bio}
                  </p>
                  <div className="...">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="...">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Values Section */}
          <div className="...">
            <h2 className="...">
              Our Values
            </h2>
            <p className="...">
              The principles that guide everything we do and shape our company culture.
            </p>
            <div className="...">
              {values.map((value, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="...">
                    {value.title}
                  </h3>
                  <p className="...">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="...">
            <h2 className="...">
              Ready to Work With Us?
            </h2>
            <p className="...">
              Join our team of innovators and help shape the future of AI and technology.
            </p>
            <div className="...">
              <Link
                href="/contact"
                className="...">
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="...">
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