import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  Globe,
  Code,
  Shield
} from 'lucide-react';
import Layout from '../components/Layout';

const teamMembers = [
  {
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
    expertise: ["Strategic Leadership", "AI/ML", "Cloud Architecture", "Business Development"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    department: "Technology",
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  },

  {
    id: 3,
    name: "Mike Chen",
    position: "Head of Cybersecurity",
    department: "Security",
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/mikechen",
    twitter: "https://twitter.com/mikechen",
    github: "https://github.com/mikechen",
    expertise: ["Cybersecurity", "Zero-Trust", "Threat Intelligence", "Compliance"]
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Head of AI/ML",
    department: "AI & Machine Learning",
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
    github: "https://github.com/emilyrodriguez",
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    id: 5,
    name: "David Kim",
    position: "Head of Data Analytics",
    department: "Data & Analytics",
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/davidkim",
    twitter: "https://twitter.com/davidkim",
    github: "https://github.com/davidkim",
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  },
  {
    id: 6,
    name: "Lisa Wang",
    position: "Head of Product Development",
    department: "Product",
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit.",
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
    github: "https://github.com/lisawang",
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
  }
];

const departments = [
  {
    name: "Leadership",
    description: "Strategic vision and company direction",
    icon: "👑",
    count: 1
  },
  {
    name: "Technology",
    description: "Engineering and technical innovation",
    icon: "💻",
    count: 15
  },
  {
    name: "AI & Machine Learning",
    description: "Artificial intelligence and data science",
    icon: "🤖",
    count: 12
  },
  {
    name: "Cybersecurity",
    description: "Security and compliance solutions",
    icon: "🛡️",
    count: 8
  },
  {
    name: "Data & Analytics",
    description: "Business intelligence and analytics",
    icon: "📊",
    count: 10
  },
  {
    name: "Product",
    description: "Product development and design",
    icon: "🎨",
    count: 6
  },
  {
    name: "Sales & Marketing",
    description: "Business development and growth",
    icon: "📈",
    count: 8
  },
  {
    name: "Operations",
    description: "Project management and delivery",
    icon: "⚙️",
    count: 5
  }
];

const stats = [
  { number: "65+", label: "Team Members" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Countries Represented" },
  { number: "95%", label: "Employee Satisfaction" }
];

export default function TeamPage() {
  return (
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results."
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals"
      canonical="https://ziontechgroup.com/team"
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Visionary leaders driving innovation and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-semibold">{member.position}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals across all departments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm">{member.position}</p>
                  <p className="text-gray-500 text-xs">{member.department}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.expertise.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Specialized teams working together to deliver excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div 
                key={dept.name}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                <div className="text-purple-600 font-semibold">{dept.count} members</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/careers" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Open Positions
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Let's discuss how our experienced team can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
      </div>
    </MainLayout>
  );
};

export default Page;
