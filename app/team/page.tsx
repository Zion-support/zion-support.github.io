import React from 'react;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Github, Twitter, Award, Users, Brain, Shield, Zap, Globe, BarChart3, CheckCircle, Star, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO;

export default function TeamPage() {
  
  const teamMembers = [
    {
      name: ';Dr. Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI & Machine Learning",
      bio: "Visionary leader with 15+ years in AI and technology innovation. PhD in Computer Science from MIT, former Google AI researcher.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/klebersantos",
        twitter: "https://twitter.com/klebersantos",
        email: "kleber@ziontechgroup.com"
      },
      achievements: ["AI Research Pioneer", "Tech Innovation Award 2023", "Forbes 30 Under 30"],
      icon: <Brain />
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Cloud Infrastructure & DevOps",
      bio: "Cloud architecture expert with 12+ years building scalable systems. Former AWS Solutions Architect, certified in multiple cloud platforms.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen",
        email: "sarah@ziontechgroup.com"
      },
      achievements: ["Cloud Architecture Expert", "DevOps Innovation Award", "Open Source Contributor"],
      icon: <Globe />
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Cybersecurity & Risk Management",
      bio: "Cybersecurity specialist with 10+ years protecting enterprise systems. Former NSA security analyst, CISSP certified.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mikecybersec",
        email: "michael@ziontechgroup.com"
      },
      achievements: ["Cybersecurity Expert", "Security Innovation Award", "CISSP Certified"],
      icon: <Shield />
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Research",
      expertise: "Machine Learning & NLP",
      bio: "AI research leader with 8+ years in machine learning. PhD in AI from Stanford, published 20+ research papers.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/emilyjohnson",
        github: "https://github.com/emilyai",
        email: "emily@ziontechgroup.com"
      },
      achievements: ["AI Research Leader", "ML Innovation Award", "Published Researcher"],
      icon: <Brain />
    },
    {
      name: "David Kim",
      role: "Head of Product",
      expertise: "Product Strategy & UX",
      bio: "Product strategist with 10+ years building user-centric solutions. Former product manager at Microsoft and Apple.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidproduct",
        email: "david@ziontechgroup.com"
      },
      achievements: ["Product Strategy Expert", "UX Innovation Award", "Tech Product Leader"],
      icon: <BarChart3 />
    },
    {
      name: "Lisa Wang",
      role: "Head of Engineering",
      expertise: "Software Engineering & Architecture",
      bio: "Engineering leader with 12+ years building robust software systems. Former senior engineer at Google and Facebook.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/lisawang",
        github: "https://github.com/lisawang",
        email: "lisa@ziontechgroup.com"
      },
      achievements: ["Engineering Leader", "Software Architecture Expert", "Open Source Maintainer"],
      icon: <Zap />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6"> },
    { number: "15+", label: "Years Average Experience", icon: <Award className="w-6 h-6"> },
    { number: "25+", label: "PhD Holders", icon: <Brain className="w-6 h-6"> },
    { number: "100+", label: "Certifications", icon: <CheckCircle className="w-6 h-6"> }
  ];

  const values = [
    {
      title: "Innovation First",'
      description: "We constantly push the boundaries of what's possible with technology",
      icon: <Brain />
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together",
      icon: <Users />
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver",
      icon: <Award />
    },
    {
      title: "Continuous Learning",
      description: "We stay ahead by constantly learning and adapting to new technologies",
      icon: <Clock />
    }
  ];

  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <h1>Meet Our
             <span>{" "}Expert Team
            </span></h1>
          <p />
            Our diverse team of AI researchers, engineers, and technology leaders is dedicated to pushing the boundaries of innovation and delivering exceptional solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div>
    <div />
            {stats.map((stat, index) => (
              <div>
    <div />
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Leadership Team
              </span>
            </h2>
            <p />
              Meet the visionary leaders driving innovation and excellence at Zion Tech Group.
            </p>
          </div>
          
          <div />
            {teamMembers.map((member, index) => (
              <div>
    <div />
                <div />
                  {/* Profile Image */}
                  <div />'
                    {member.name.split(' ').map(n => n[0]).join(';)}
                  </div>
                  
                  {/* Member Info */}
                  <div>
    <h3 />
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                    <div />
                      {member.icon}
                      <span className="text-gray-300 text-sm">{member.expertise}</span>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p />
                    {member.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div>
    <h4 className="text-white font-medium mb-2 text-sm">Key Achievements:</h4>
                    <div />
                      {member.achievements.map((achievement, idx) => (
                        <div>
    <Star />
                          <span className="text-gray-300 text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div />
                    {member.social.linkedin && (
                      <a />
                        <Linkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a />
                        <Github />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a />
                        <Twitter />
                      </a>
                    )}
                    {member.social.email && (
                      <a />
                        <Mail />
                      </a>
                    )}
                  </div>
        </div>
      </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Our Values
              </span>
            </h2>
            <p />
              The principles that guide our team and shape our approach to technology and innovation.
            </p>
          </div>
          
          <div />
            {values.map((value, index) => (
              <div>
    <div />
                <div>
    <div />
                    {value.icon}
                  </div>
                  <h3 />
                    {value.title}
                  </h3>
                  <p />
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <div />
            <h2 />
              Join Our Team
            </h2>
            <p />'
              Ready to be part of the future of technology? We're always looking for talented individuals to join our mission.
            </p>
            <div>
    <Link />
                View Open Positions
                <ArrowRight />
              </Link>
              <Link />
                Get in Touch
              </Link>
            </div>
        </div>
      </div>
      </section>
    </div>
  );
}

'