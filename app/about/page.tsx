'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  Brain,
  Users,
  Target,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart,
  Zap,
  Shield,
  Code,
  Cloud,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText
} from 'lucide-react'
const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI research and enterprise technology leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & Cloud Architecture',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum computing and distributed systems.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Neural Networks',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'Pioneer in advanced machine learning algorithms and applications.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Risk Management',
      image: '/images/team/james-wilson.jpg',
      bio: 'Cybersecurity expert with 15+ years protecting enterprise systems.'
    }
  ]
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better for everyone.'
    }
  ]
  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '99.9%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ]
  return (
    <>
      <Helmet> </Helmet><title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>About </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p>We're a team of passionate technologists dedicated to transforming businesses through 
                cutting-edge AI and IT solutions. Our mission is to make advanced technology accessible 
                and beneficial for organizations of all sizes.
              </p></p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section> </section><div> </div><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p>To democratize access to advanced AI and IT technologies, enabling businesses to 
                  innovate, grow, and thrive in the digital age. We believe that every organization, 
                  regardless of size, should have access to world-class technology solutions.
                </p></p>
                <div> </div><div> </div><CheckCircle> </CheckCircle><p className="text-gray-300">Empowering businesses with AI-driven solutions</p>
                  </div>
                  <div> </div><CheckCircle> </CheckCircle><p className="text-gray-300">Building secure, scalable, and efficient systems</p>
                  </div>
                  <div> </div><CheckCircle> </CheckCircle><p className="text-gray-300">Fostering innovation through cutting-edge technology</p>
                  </div>
                </div>
              </div>
              
              <div> </div><h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p>To be the world's leading provider of AI and IT solutions, recognized for our 
                  innovation, reliability, and commitment to client success. We envision a future 
                  where technology seamlessly integrates with business operations to create 
                  unprecedented value and opportunities.
                </p></p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p>These core values guide everything we do and shape how we work with our clients and each other.
              </p></p>
            </div>

            <div>{values.map((value, index) => (
                </div><div> </div><div> </div><value> </value></div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p>Our diverse team of experts brings together decades of experience in AI, 
                cybersecurity, cloud computing, and digital transformation.
              </p></p>
            </div>

            <div>{teamMembers.map((member, index) => (
                </div><div> </div><div> </div><Users> </Users></div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                  <p className="text-sm text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
              <p>Numbers that reflect our commitment to excellence and client success.
              </p></p>
            </div>

            <div>{achievements.map((achievement, index) => (
                </div><div> </div><div>{achievement.number}
                  </div></div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><h2>Ready to Work With Us?
            </h2></h2>
            <p>Let's discuss how our team can help transform your business with cutting-edge technology.
            </p></p>
            <div> </div><a> </a><span className="relative z-10">Get In Touch</span>
                <div> </div></a>
              <a>Join Our Team
              </a></a>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default AboutPage