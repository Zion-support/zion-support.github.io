import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Users, 
  Mail, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight,
  Award,
  Code,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Heart,
  Coffee,
  BookOpen
} from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in technology innovation. Sarah founded Zion Tech Group with a mission to democratize access to cutting-edge technology solutions.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      email: "sarah@ziontechgroup.com",
      expertise: ["Strategic Leadership", "Technology Innovation", "Business Development"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in AI and cloud architecture with a passion for scalable solutions. Michael leads our technical strategy and ensures we stay at the forefront of technology.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen",
      email: "michael@ziontechgroup.com",
      expertise: ["AI/ML", "Cloud Architecture", "System Design"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director focused on user experience and modern design principles. Emily ensures our products are not only functional but also beautiful and intuitive.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      email: "emily@ziontechgroup.com",
      expertise: ["UX/UI Design", "Product Strategy", "User Research"]
    }
  ];

  const teamMembers = [
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in microservices and DevOps practices.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
      expertise: ["Full-Stack Development", "Microservices", "DevOps"]
    },
    {
      name: "Lisa Wang",
      role: "AI/ML Engineer",
      bio: "Machine learning specialist with expertise in deep learning and computer vision.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/lisawang",
      github: "https://github.com/lisawang",
      expertise: ["Machine Learning", "Deep Learning", "Computer Vision"]
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      bio: "Infrastructure specialist focused on cloud automation and scalability.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
      expertise: ["Cloud Infrastructure", "Automation", "Kubernetes"]
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      bio: "Strategic product leader with a focus on user-centered design and agile development.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/mariagarcia",
      twitter: "https://twitter.com/mariagarcia",
      expertise: ["Product Strategy", "Agile Development", "User Research"]
    },
    {
      name: "Alex Thompson",
      role: "Frontend Developer",
      bio: "React specialist passionate about creating smooth, responsive user interfaces.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson",
      expertise: ["React", "TypeScript", "UI/UX"]
    },
    {
      name: "Rachel Brown",
      role: "Data Scientist",
      bio: "Analytics expert who transforms complex data into actionable business insights.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/rachelbrown",
      github: "https://github.com/rachelbrown",
      expertise: ["Data Analytics", "Statistics", "Business Intelligence"]
    },
    {
      name: "Tom Anderson",
      role: "Backend Developer",
      bio: "Server-side specialist with expertise in scalable API design and database optimization.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/tomanderson",
      github: "https://github.com/tomanderson",
      expertise: ["Backend Development", "API Design", "Database Design"]
    },
    {
      name: "Sophie Lee",
      role: "UX Designer",
      bio: "User experience designer focused on creating intuitive and accessible interfaces.",
      image: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/sophielee",
      twitter: "https://twitter.com/sophielee",
      expertise: ["UX Design", "Accessibility", "Prototyping"]
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction"
    }
  ];

  const stats = [
    { number: "25+", label: "Team Members" },
    { number: "8", label: "Countries Represented" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "100%", label: "Remote-Friendly" }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented individuals behind Zion Tech Group. Our diverse team of experts is dedicated to delivering innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                The talented individuals who make Zion Tech Group a leader in technology innovation. 
                We're a diverse team of experts passionate about creating exceptional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our leadership team brings decades of experience and a shared vision for the future of technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-blue-100 text-blue-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals who bring our projects to life with their expertise and dedication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-gray-100 text-gray-700 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Team;