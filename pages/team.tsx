<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {


  ArrowRight
  Phone
  Mail
  MapPin
  Linkedin
  Twitter
  Github
  Award
  Users
  Globe
  Code
  Shield
=======
=======
import {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  Shield,;
} from "lucide-react";
import Layout from "../components/Layout";
const teamMembers = [
  {
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",
<<<<<<< HEAD




=======
    image: "/api/placeholder/300/300",
    linkedin: "https://linkedin.com/in/klebersantos",
    twitter: "https://twitter.com/klebersantos",
    github: "https://github.com/klebersantos",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    expertise: ["Strategic Leadership", "AI/ML", "Cloud Architecture", "Business Development"]
  },
    id: 1
    name: "Kleber Santos"
    position: "CEO & Founder"
    department: "Leadership"
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/klebersantos"
    twitter: "https://twitter.com/klebersantos"
    github: "https://github.com/klebersantos"
    expertise: [
      "Strategic Leadership"
      "AI/ML"
      "Cloud Architecture"
      "Business Development"
    ]
  }
<<<<<<< HEAD
  {
    id: 2
    name: "Sarah Johnson"
    position: "CTO"
    department: "Technology"
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/sarahjohnson"
    twitter: "https://twitter.com/sarahjohnson"
    github: "https://github.com/sarahjohnson"
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  }
  {
    id: 3
    name: "Mike Chen"
    position: "Head of Cybersecurity"
    department: "Security"
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/mikechen"
    twitter: "https://twitter.com/mikechen"
    github: "https://github.com/mikechen"
    expertise: [
      "Cybersecurity"
      "Zero-Trust"
      "Threat Intelligence"
      "Compliance"
    ]
  }
  {
    id: 4
    name: "Emily Rodriguez"
    position: "Head of AI/ML"
    department: "AI & Machine Learning"
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/emilyrodriguez"
    twitter: "https://twitter.com/emilyrodriguez"
    github: "https://github.com/emilyrodriguez"
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  }
  {
    id: 5
    name: "David Kim"
    position: "Head of Data Analytics"
    department: "Data & Analytics"
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/davidkim"
    twitter: "https://twitter.com/davidkim"
    github: "https://github.com/davidkim"
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  }
<<<<<<< HEAD
Shield,
} from './lucide-react';
import Layout from "../components / Layout";
;
const team_members = [;
  {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / klebersantos",
    twitter: "https://twitter.com / klebersantos",
    github: "https://github.com / klebersantos",
    expertise: [;
      "Strategic Leadership",
      "AI / ML",
      "Cloud Architecture",
      "Business Development",
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    department: "Technology",
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / sarahjohnson",
    twitter: "https://twitter.com / sarahjohnson",
    github: "https://github.com / sarahjohnson",
    expertise: ["Cloud Computing", "AI / ML", "System Architecture", "DevOps"],
  },
  {
    id: 3,
    name: "Mike Chen",
    position: "Head of Cybersecurity",
    department: "Security",
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero - trust architecture and threat intelligence.",
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / mikechen",
    twitter: "https://twitter.com / mikechen",
    github: "https://github.com / mikechen",
    expertise: [;
      "Cybersecurity",
      "Zero - Trust",
      "Threat Intelligence",
      "Compliance",
    ],
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Head of AI / ML",
    department: "AI & Machine Learning",
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / emilyrodriguez",
    twitter: "https://twitter.com / emilyrodriguez",
    github: "https://github.com / emilyrodriguez",
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"],
  },
  {
    id: 5,
    name: "David Kim",
    position: "Head of Data Analytics",
    department: "Data & Analytics",
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / davidkim",
    twitter: "https://twitter.com / davidkim",
    github: "https://github.com / davidkim",
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"],
  },
  {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / lisawang",
    twitter: "https://twitter.com / lisawang",
    github: "https://github.com / lisawang",
    expertise: ["Product Strategy", "SaaS Development", "UX / UI", "Mobile Apps"],

<<<<<<< HEAD
} from "lucide-react";
import Layout from "../components/Layout";
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

    id: 1
    name: "Kleber Santos"
    position: "CEO & Founder"
    department: "Leadership"
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/klebersantos"
    twitter: "https://twitter.com/klebersantos"
    github: "https://github.com/klebersantos"

    expertise: [
      "Strategic Leadership"
      "AI/ML"
      "Cloud Architecture"
      "Business Development"
    ]
  }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/main
  {
    id: 2
    name: "Sarah Johnson"
    position: "CTO"
    department: "Technology"
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/sarahjohnson"
    twitter: "https://twitter.com/sarahjohnson"
    github: "https://github.com/sarahjohnson"
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  }
  {
    id: 3
    name: "Mike Chen"
    position: "Head of Cybersecurity"
    department: "Security"
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/mikechen"
    twitter: "https://twitter.com/mikechen"
    github: "https://github.com/mikechen"
    expertise: [
      "Cybersecurity"
      "Zero-Trust"
      "Threat Intelligence"
      "Compliance"
    ]
  }
  {
    id: 4
    name: "Emily Rodriguez"
    position: "Head of AI/ML"
    department: "AI & Machine Learning"
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/emilyrodriguez"
    twitter: "https://twitter.com/emilyrodriguez"
    github: "https://github.com/emilyrodriguez"
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  }
  {
    id: 5
    name: "David Kim"
    position: "Head of Data Analytics"
    department: "Data & Analytics"
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/davidkim"
    twitter: "https://twitter.com/davidkim"
    github: "https://github.com/davidkim"
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  }
<<<<<<< HEAD
=======
=======
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / klebersantos",
    twitter: "https://twitter.com / klebersantos",
    github: "https://github.com / klebersantos",
    expertise: [;
      "Strategic Leadership",
      "AI / ML",
      "Cloud Architecture",
      "Business Development",
    ],
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"],
  },
<<<<<<< HEAD
=======
  },
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    icon: Brain,
    description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.'
  },
  {
    name: 'Michael Chen',
    role: 'Cloud Solutions Architect',
    expertise: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Security Specialist',
    expertise: 'Cybersecurity',
    icon: Shield,
    description: 'Ensuring enterprise-grade security with expertise in threat detection and prevention.'
  },
  {
    name: 'David Thompson',
    role: 'Team Lead',
    expertise: 'Project Management',
    icon: Users,
    description: 'Leading our development teams with agile methodologies and client-focused delivery.'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  }
origin/automation-improvements-final
    id: 6
    name: "Lisa Wang"
    position: "Head of Product Development"
    department: "Product"
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit."
    image: "/api/placeholder/300/300"
    linkedin: "https://linkedin.com/in/lisawang"
    twitter: "https://twitter.com/lisawang"
    github: "https://github.com/lisawang"
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    name: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    expertise: 'AI & Machine Learning',
    icon: Brain,
    description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.'
  },
  {
    name: 'Michael Chen',
    role: 'Cloud Solutions Architect',
    expertise: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Security Specialist',
    expertise: 'Cybersecurity',
    icon: Shield,
    description: 'Ensuring enterprise-grade security with expertise in threat detection and prevention.'
  },
  {
    name: 'David Thompson',
    role: 'Team Lead',
    expertise: 'Project Management',
    icon: Users,
    description: 'Leading our development teams with agile methodologies and client-focused delivery.'
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
];

;
const departments = [;

<<<<<<< HEAD
<<<<<<< HEAD
  }
];
;
const departments = [;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    name: "Leadership"
    description: "Strategic vision and company direction"
    icon: "👑"
    count: 1
  }
  {
    name: "Technology"
    description: "Engineering and technical innovation"
    icon: "💻"
    count: 15
  }
  {
    name: "AI & Machine Learning"
    description: "Artificial intelligence and data science"
    icon: "🤖"
    count: 12
  }
  {
    name: "Cybersecurity"
    description: "Security and compliance solutions"
    icon: "🛡️"
    count: 8
  }
  {
    name: "Data & Analytics"
    description: "Business intelligence and analytics"
    icon: "📊"
    count: 10
  }
  {
    name: "Product"
    description: "Product development and design"
    icon: "🎨"
    count: 6
  }
  {
    name: "Sales & Marketing"
    description: "Business development and growth"
    icon: "📈"
    count: 8
  }
  {
    name: "Operations"
    description: "Project management and delivery"
    icon: "⚙️"
    count: 5
  }
];
const stats = [
  { number: "65+", label: "Team Members" }
  { number: "15+", label: "Years Experience" }
  { number: "25+", label: "Countries Represented" }
  { number: "95%", label: "Employee Satisfaction" }
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  Linkedin,;
  Twitter,;
  Github,;
  Award,;
  Users,;
  Globe,;
  Code,;
  Shield,;
} from "lucide-react";
import Layout from "../components/Layout";
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const teamMembers = [;
  {;
    id: 1,;
    name: "Kleber Santos",;
    position: "CEO & Founder",;
    department: "Leadership",;
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/klebersantos",;
    twitter: "https://twitter && twitter.com/klebersantos",;
    github: "https://github && github.com/klebersantos",;
    expertise: [;
      "Strategic Leadership",;
      "AI/ML",;
      "Cloud Architecture",;
      "Business Development",;
    ],;
  },;
  {;
    id: 2,;
    name: "Sarah Johnson",;
    position: "CTO",;
    department: "Technology",;
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/sarahjohnson",;
    twitter: "https://twitter && twitter.com/sarahjohnson",;
    github: "https://github && github.com/sarahjohnson",;
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"],;
  },;
  {;
    id: 3,;
    name: "Mike Chen",;
    position: "Head of Cybersecurity",;
    department: "Security",;
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/mikechen",;
    twitter: "https://twitter && twitter.com/mikechen",;
    github: "https://github && github.com/mikechen",;
    expertise: [;
      "Cybersecurity",;
      "Zero-Trust",;
      "Threat Intelligence",;
      "Compliance",;
    ],;
  },;
  {;
    id: 4,;
    name: "Emily Rodriguez",;
    position: "Head of AI/ML",;
    department: "AI & Machine Learning",;
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/emilyrodriguez",;
    twitter: "https://twitter && twitter.com/emilyrodriguez",;
    github: "https://github && github.com/emilyrodriguez",;
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"],;
  },;
  {;
    id: 5,;
    name: "David Kim",;
    position: "Head of Data Analytics",;
    department: "Data & Analytics",;
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/davidkim",;
    twitter: "https://twitter && twitter.com/davidkim",;
    github: "https://github && github.com/davidkim",;
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"],;
  },;
  {;
    id: 6,;
    name: "Lisa Wang",;
    position: "Head of Product Development",;
    department: "Product",;
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit.",;
    image: "/api/placeholder/300/300",;
    linkedin: "https://linkedin && linkedin.com/in/lisawang",;
    twitter: "https://twitter && twitter.com/lisawang",;
    github: "https://github && github.com/lisawang",;
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"],;
  },;
];

<<<<<<< HEAD
=======
export default function TeamPage() {
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results."
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals"
      canonical="https://ziontechgroup && ziontechgroup.com/team">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center max-w-4xl mx-auto">;
            <motion&& motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              Meet Our;
              <span className="text-purple-400"> Expert Team</span>;
            </motion && motion.h1>;
            <motion&& motion.p
              className="text-xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
              Our diverse team of technology professionals brings together;
              decades of experience in AI, cloud computing, cybersecurity, and;
              business transformation.;
            </motion && motion.p>;
          </div>;
        </div>;
      </section>;


      {/* Stats Section */}
      <section className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="grid md:grid-cols-4 gap-8">;
            {stats && stats.map((stat, index) => (;
              <motion&& motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                <div className="text-4xl font-bold text-purple-600 mb-2">;
                  {stat && stat.number}
                </div>;
                <div className="text-gray-600">{stat && stat.label}</div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* Leadership Team */}
      <section className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Leadership Team;
            </h2>;
            <p className="text-xl text-gray-600">;
              Visionary leaders driving innovation and growth;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {teamMembers && teamMembers.slice(0, 3).map((member, index) => (;
              <motion&& motion.div
                key={member && member.id}

                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                <div className="text-center mb-4">;
                  <img
                    src={member && member.image}
                    alt={member && member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />;
                  <h3 className="text-xl font-bold text-gray-900">;
                    {member && member.name}
                  </h3>;
                  <p className="text-purple-600 font-semibold">;
                    {member && member.position}
                  </p>;
                </div>;
                <p className="text-gray-600 text-sm mb-4">{member && member.bio}</p>;
                <div className="flex flex-wrap gap-2 mb-4">;
                  {member && member.expertise.slice(0, 2).map((skill) => (;
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">;
                      {skill}
                    </span>;
                  ))}
                </div>;
                <div className="flex justify-center space-x-4">;
                  <a
                    href={member && member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors">;
                    <Linkedin className="w-5 h-5" />;
                  </a>;
                  <a
                    href={member && member.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors">;
                    <Twitter className="w-5 h-5" />;
                  </a>;
                  <a
                    href={member && member.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors">;
                    <Github className="w-5 h-5" />;
                  </a>;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* All Team Members */}
      <section className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Our Expert Team;
            </h2>;
            <p className="text-xl text-gray-600">;
              Dedicated professionals across all departments;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {teamMembers && teamMembers.map((member, index) => (;
              <motion&& motion.div
                key={member && member.id}

                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                <div className="text-center mb-4">;
                  <img
                    src={member && member.image}
                    alt={member && member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />;
                  <h3 className="text-lg font-bold text-gray-900">;
                    {member && member.name}
                  </h3>;
                  <p className="text-purple-600 font-semibold text-sm">;
                    {member && member.position}
                  </p>;
                  <p className="text-gray-500 text-xs">{member && member.department}</p>;
                </div>;
                <p className="text-gray-600 text-sm mb-4">{member && member.bio}</p>;
                <div className="flex flex-wrap gap-1 mb-4">;
                  {member && member.expertise.slice(0, 3).map((skill) => (;
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">;
                      {skill}
                    </span>;
                  ))}
                </div>;
                <div className="flex justify-center space-x-3">;
                  <a
                    href={member && member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors">;
                    <Linkedin className="w-4 h-4" />;
                  </a>;
                  <a
                    href={member && member.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors">;
                    <Twitter className="w-4 h-4" />;
                  </a>;
                  <a
                    href={member && member.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors">;
                    <Github className="w-4 h-4" />;
                  </a>;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* Departments */}
      <section className="py-16 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Our Departments;
            </h2>;
            <p className="text-xl text-gray-600">;
              Specialized teams working together to deliver excellence;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {departments && departments.map((dept, index) => (;
              <motion&& motion.div
                key={dept && dept.name}

                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                <div className="text-4xl mb-4">{dept && dept.icon}</div>;
                <h3 className="text-lg font-semibold mb-2">{dept && dept.name}</h3>;
                <p className="text-gray-600 text-sm mb-2">{dept && dept.description}</p>;
                <div className="text-purple-600 font-semibold">;
                  {dept && dept.count} members;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;


      {/* Join Our Team CTA */}
      <section className="py-16 bg-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>;
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">;
            We're always looking for talented individuals who share our passion;
            for technology and innovation.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link
              href="/careers"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">;
              View Open Positions;
            </Link>;
            <Link
              href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">;
=======
;
const stats = [;
  { number: "65+", label: "Team Members" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Countries Represented" },
  { number: "95%", label: "Employee Satisfaction" },
];
export default /**
 * TeamPage - Function description
 */
function TeamPage() {
  return (
<<<<<<< HEAD
<Layout;
=======
    <Layout;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title="Our Team - Zion Tech Group";
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results.";
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals";
      canonical="https://ziontechgroup.com / team";
    >;
<<<<<<< HEAD

    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results."
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals"
      canonical="https://ziontechgroup.com/team"
    >

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hero Section */}
      <section className="bg - gradient - to - br from - purple - 900 via - blue - 900 to - indigo - 900 text - white py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center max - w-4xl mx - auto">;
            <motion.h1;
              className="text - 5xl md:text - 6xl font - bold mb - 6 leading - tight";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              Meet Our;
              <span className="text - purple - 400"> Expert Team</span>;
            </motion.h1>;
            <motion.p;
              className="text - xl mb - 8 text - purple - 100";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >;
              Our diverse team of technology professionals brings together;
              decades of experience in AI, cloud computing, cybersecurity, and;
              business transformation.;
            </motion.p>;
          </div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py - 16 bg - gray - 50">;
        <div className="container mx - auto px - 4">;
          <div className="grid md:grid - cols - 4 gap - 8">;
            {stats.map ((stat, index) => (
              <motion.div;
                key={index}
                className="text - center";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >;
                <div className="text - 4xl font - bold text - purple - 600 mb - 2">;
                  {stat.number}
                </div>;
                <div className="text - gray - 600">{stat.label}</div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Leadership Team */}
      <section className="py - 16 bg - white">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
              Leadership Team;
            </h2>;
            <p className="text - xl text - gray - 600">;
              Visionary leaders driving innovation and growth;
            </p>;
          </div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {team_members.slice (0, 3).map ((member, index) => (
              <motion.div;
                key={member.id}
                className="bg - white rounded - lg shadow - lg p - 6 hover:shadow - xl transition - shadow";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >;
                <div className="text - center mb - 4">;
                  <img;
                    src={member.image}
                    alt={member.name}
                    className="w - 24 h - 24 rounded - full mx - auto mb - 4 object - cover";
                  />;
                  <h3 className="text - xl font - bold text - gray - 900">;
                    {member.name}
                  </h3>;
                  <p className="text - purple - 600 font - semibold">;
                    {member.position}
                  </p>;
                </div>;
                <p className="text - gray - 600 text - sm mb - 4">{member.bio}</p>;
                <div className="flex flex - wrap gap - 2 mb - 4">;
                  {member.expertise.slice (0, 2).map ((skill) => (
                    <span;
                      key={skill}
                      className="px - 2 py - 1 bg - purple - 100 text - purple - 800 rounded text - xs";
                    >;
                      {skill}
                    </span>))}
                </div>;
                <div className="flex justify - center space - x-4">;
                  <a;
                    href={member.linkedin}
                    className="text - gray - 400 hover:text - blue - 600 transition - colors";
                  >;
                    <Linkedin className="w - 5 h - 5" />;
                  </a>;
                  <a;
                    href={member.twitter}
                    className="text - gray - 400 hover:text - blue - 400 transition - colors";
                  >;
                    <Twitter className="w - 5 h - 5" />;
                  </a>;
                  <a;
                    href={member.github}
                    className="text - gray - 400 hover:text - gray - 600 transition - colors";
                  >;
                    <Github className="w - 5 h - 5" />;
                  </a>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* All Team Members */}
      <section className="py - 16 bg - gray - 50">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
              Our Expert Team;
            </h2>;
            <p className="text - xl text - gray - 600">;
              Dedicated professionals across all departments;
            </p>;
          </div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {team_members.map ((member, index) => (
              <motion.div;
                key={member.id}
                className="bg - white rounded - lg shadow - md p - 6 hover:shadow - lg transition - shadow";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >;
                <div className="text - center mb - 4">;
                  <img;
                    src={member.image}
                    alt={member.name}
                    className="w - 20 h - 20 rounded - full mx - auto mb - 3 object - cover";
                  />;
                  <h3 className="text - lg font - bold text - gray - 900">;
                    {member.name}
                  </h3>;
                  <p className="text - purple - 600 font - semibold text - sm">;
                    {member.position}
                  </p>;
                  <p className="text - gray - 500 text - xs">{member.department}</p>;
                </div>;
                <p className="text - gray - 600 text - sm mb - 4">{member.bio}</p>;
                <div className="flex flex - wrap gap - 1 mb - 4">;
                  {member.expertise.slice (0, 3).map ((skill) => (
                    <span;
                      key={skill}
                      className="px - 2 py - 1 bg - purple - 100 text - purple - 800 rounded text - xs";
                    >;
                      {skill}
                    </span>))}
                </div>;
                <div className="flex justify - center space - x-3">;
                  <a;
                    href={member.linkedin}
                    className="text - gray - 400 hover:text - blue - 600 transition - colors";
                  >;
                    <Linkedin className="w - 4 h - 4" />;
                  </a>;
                  <a;
                    href={member.twitter}
                    className="text - gray - 400 hover:text - blue - 400 transition - colors";
                  >;
                    <Twitter className="w - 4 h - 4" />;
                  </a>;
                  <a;
                    href={member.github}
                    className="text - gray - 400 hover:text - gray - 600 transition - colors";
                  >;
                    <Github className="w - 4 h - 4" />;
                  </a>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Departments */}
      <section className="py - 16 bg - white">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
              Our Departments;
            </h2>;
            <p className="text - xl text - gray - 600">;
              Specialized teams working together to deliver excellence;
            </p>;
          </div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
            {departments.map ((dept, index) => (
              <motion.div;
                key={dept.name}
                className="text - center p - 6 rounded - lg hover:bg - gray - 50 transition - colors";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >;
                <div className="text - 4xl mb - 4">{dept.icon}</div>;
                <h3 className="text - lg font - semibold mb - 2">{dept.name}</h3>;
                <p className="text - gray - 600 text - sm mb - 2">{dept.description}</p>;
                <div className="text - purple - 600 font - semibold">;
                  {dept.count} members;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Join Our Team CTA */}
<<<<<<< HEAD
<section className="py - 16 bg - purple - 600 text - white">;
=======
      <section className="py - 16 bg - purple - 600 text - white">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="container mx - auto px - 4 text - center">;
          <h2 className="text - 3xl font - bold mb - 4">Join Our Growing Team</h2>;
          <p className="text - xl mb - 8 text - purple - 100 max - w-3xl mx - auto">;
            We're always looking for talented individuals who share our passion;
            for technology and innovation.;
          </p>;
          <div className="flex flex - col sm:flex - row justify - center gap - 4">;
            <Link;
              href="/careers";
              className="bg - white text - purple - 600 hover:bg - gray - 100 px - 8 py - 4 rounded - lg font - semibold transition - colors";
            >;
              View Open Positions;
            </Link>;
            <Link;
              href="/contact";
              className="bg - transparent border - 2 border - white text - white hover:bg - white hover:text - purple - 600 px - 8 py - 4 rounded - lg font - semibold transition - colors";
            >;

              Get in Touch;
            </Link>;
          </div>;
        </div>;
      </section>;



=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <SEO
        title='Our Team | Zion Tech Group'
        description='Meet the leadership team at Zion Tech Group.'
        canonical='/team'
      />
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-4'>Our Team</h1>
        <p className='text-gray-300 mb-8'>
          Profiles coming soon. For inquiries, contact us.
        </p>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
    </Layout>;
  );
}
import Head from "next/head";
import { motion } from "framer-motion";
import { Brain, Cloud, Shield, Users } from "lucide-react";
const teamMembers = [
  {
    name: "Dr. Sarah Johnson"
    role: "Chief Technology Officer"
    expertise: "AI & Machine Learning"
    icon: Brain
    description:
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science."
  }
  {
    name: "Michael Chen"
    role: "Cloud Solutions Architect"
    expertise: "Cloud Infrastructure"
    icon: Cloud
    description:
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications."
  }
  {
    name: "Emily Rodriguez"
    role: "Security Specialist"
    expertise: "Cybersecurity"
    icon: Shield
    description:
      "Ensuring enterprise-grade security with expertise in threat detection and prevention."
  }
  {
    name: "David Thompson"
    role: "Team Lead"
    expertise: "Project Management"
    icon: Users
    description:
      "Leading our development teams with agile methodologies and client-focused delivery."
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">;
;
const stats = [;
  { number: "65+", label: "Team Members" },
  { number: "15+", label: "Years Experience" },
  { number: "25+", label: "Countries Represented" },
  { number: "95%", label: "Employee Satisfaction" },
];
export default /**
 * TeamPage - Function description
 */
function TeamPage() {
  return (
              Get in Touch;
            </Link>;
          </div>;
        </div>;
      </section>;
ursor/integrate-build-improve-and-re-verify-8f7d
    <>
      <SEO
        title='Our Team | Zion Tech Group'
        description='Meet the leadership team at Zion Tech Group.'
        canonical='/team'
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-300 mb-8">
          Profiles coming soon. For inquiries, contact us.
        </p>
      </div>
    </>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    </>;
  );
  return (
    <>
      <SEO
        title="Our Team | Zion Tech Group"
        description="Meet the leadership team at Zion Tech Group."
        canonical="/team"
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-300 mb-8">
          Profiles coming soon. For inquiries, contact us.
        </p>
      </div>
    </>
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
<<<<<<< HEAD
className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Get Free Consultation;
            </Link>;
          </div>;
=======

>>>>>>> origin/automation-improvements-final
=======
              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
              Get Free Consultation;
            </Link>;
          </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">;
            <div className="flex items-center justify-center">;
              <Phone className="w-6 h-6 mr-2" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items-center justify-center">;
              <Mail className="w-6 h-6 mr-2" />;
              <span>kleber@ziontechgroup && ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center justify-center">;
              <MapPin className="w-6 h-6 mr-2" />;
              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact CTA Section */}
      <section className="py - 20 bg - gray - 50">;
        <div className="container mx - auto px - 4 text - center">;
          <h2 className="text - 4xl font - bold mb - 6">;
            Ready to Work with Our Expert Team?;
          </h2>;
          <p className="text - xl mb - 8 text - gray - 600 max - w-3xl mx - auto">;
            Let's discuss how our experienced team can help transform your;
            business with cutting - edge technology solutions.;
          </p>;
          <div className="flex flex - col sm:flex - row justify - center gap - 4 mb - 8">;
            <Link;
              href="/contact";
              className="bg - purple - 600 text - white hover:bg - purple - 700 px - 8 py - 4 rounded - lg font - semibold transition - colors text - lg";
            >;
              Get Free Consultation;
            </Link>;
          </div>;
          {/* Contact Information */}
          <div className="grid md:grid - cols - 3 gap - 8 mt - 12">;
            <div className="flex items - center justify - center">;
              <Phone className="w - 6 h - 6 mr - 2" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items - center justify - center">;
              <Mail className="w - 6 h - 6 mr - 2" />;
              <span > kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items - center justify - center">;
              <MapPin className="w - 6 h - 6 mr - 2" />;
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const teamMembers = [;
  {;
    name: "Dr. Sarah Johnson",;
    role: "Chief Technology Officer",;
    expertise: "AI & Machine Learning",;
    icon: Brain,;
    description:;
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science.",;
  },;
  {;
    name: "Michael Chen",;
    role: "Cloud Solutions Architect",;
    expertise: "Cloud Infrastructure",;
    icon: Cloud,;
    description:;
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.",;
  },;
  {;
    name: "Emily Rodriguez",;
    role: "Security Specialist",;
    expertise: "Cybersecurity",;
    icon: Shield,;
    description:;
      "Ensuring enterprise-grade security with expertise in threat detection and prevention.",;
  },;
  {;
    name: "David Thompson",;
    role: "Team Lead",;
    expertise: "Project Management",;
    icon: Users,;
    description:;
      "Leading our development teams with agile methodologies and client-focused delivery.",;
  },;
<<<<<<< HEAD

    </Layout>;

  );
}
import Head from "next/head";
import { motion } from "framer-motion";
import { Brain, Cloud, Shield, Users } from "lucide-react";
const teamMembers = [
  {
    name: "Dr. Sarah Johnson"
    role: "Chief Technology Officer"
    expertise: "AI & Machine Learning"
    icon: Brain
    description:
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science."
  }
  {
    name: "Michael Chen"
    role: "Cloud Solutions Architect"
    expertise: "Cloud Infrastructure"
    icon: Cloud
    description:
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications."
  }
  {
    name: "Emily Rodriguez"
    role: "Security Specialist"
    expertise: "Cybersecurity"
    icon: Shield
    description:
      "Ensuring enterprise-grade security with expertise in threat detection and prevention."
  }
  {
    name: "David Thompson"
    role: "Team Lead"
    expertise: "Project Management"
    icon: Users
    description:
      "Leading our development teams with agile methodologies and client-focused delivery."
  }

];
export default function TeamPage() {;

<<<<<<< HEAD


    <>
  return (
<>;

    <>

=======
  return (


=======

=======

    <>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
];

export default function TeamPage() {;

  return (
ursor/integrate-build-improve-and-re-verify-8f7d
    <>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO
        title="Our Team | Zion Tech Group"
        description="Meet the leadership team at Zion Tech Group."
        canonical="/team"

<<<<<<< HEAD
<<<<<<< HEAD

    </>;
/>;
      <div className="container mx-auto px-4 py-16">;
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>;
        <p className="text-gray-300 mb-8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-300 mb-8">
          Profiles coming soon. For inquiries, contact us.
        </p>
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>;

    </>;

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    </>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  return (
    <>;
      <SEO
        title="Our Team | Zion Tech Group"
        description="Meet the leadership team at Zion Tech Group."
        canonical="/team"
      />;
      <div className="container mx-auto px-4 py-16">;
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>;
        <p className="text-gray-300 mb-8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
    </>;
  );
}
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
export default function TeamPage() {
	return (

  );
}
import SEO from '../components/SEO';
export default function TeamPage() {	return (
=======
import SEO from '../components/SEO';
export default function TeamPage() {	return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import SEO from '../components/SEO',
export default function TeamPage() {
	return (
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
import React from 'react';
import SEO from '../components/SEO';
export default function TeamPage() {
	return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
		<>
			<SEO title="Our Team | Zion Tech Group" description="Meet the leadership team at Zion Tech Group." canonical="/team" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Our Team</h1>
<<<<<<< HEAD
<p className="text-gray-300 mb-8">Profiles coming soon. For inquiries, contact us.</p>
			</div>
		</>
	)
    </Layout>);
</Layout>);
=======
				<p className="text-gray-300 mb-8">Profiles coming soon. For inquiries, contact us.</p>
			</div>
		</>
	)
ursor/fix-lint-push-and-merge-to-main-ae4e
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </Layout>);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
import Head from './next / head';
import { motion  } from './framer-motion';
import { Brain, Cloud, Shield, Users  } from './lucide-react';
;
const team_members = [;
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Technology Officer",
    expertise: "AI & Machine Learning",
    icon: Brain,
    description:;
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science.",
  },
  {
    name: "Michael Chen",
    role: "Cloud Solutions Architect",
    expertise: "Cloud Infrastructure",
    icon: Cloud,
    description:;
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.",
  },
  {
    name: "Emily Rodriguez",
    role: "Security Specialist",
    expertise: "Cybersecurity",
    icon: Shield,
    description:;
      "Ensuring enterprise - grade security with expertise in threat detection and prevention.",
  },
  {
    name: "David Thompson",
    role: "Team Lead",
    expertise: "Project Management",
    icon: Users,
    description:;
      "Leading our development teams with agile methodologies and client - focused delivery.",
  },
];
;
export default /**
 * TeamPage - Function description
 */
function TeamPage() {
  return (
    <>;
      <SEO;
        title="Our Team | Zion Tech Group";
        description="Meet the leadership team at Zion Tech Group.";
        canonical="/team";
      />;
      <div className="container mx - auto px - 4 py - 16">;
        <h1 className="text - 4xl font - bold mb - 4">Our Team</h1>;
        <p className="text - gray - 300 mb - 8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
    </>);
  return (
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO;
        title="Our Team | Zion Tech Group";
        description="Meet the leadership team at Zion Tech Group.";
        canonical="/team";
      />;
      <div className="container mx - auto px - 4 py - 16">;
        <h1 className="text - 4xl font - bold mb - 4">Our Team</h1>;
        <p className="text - gray - 300 mb - 8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
    </>);
;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}

;

<<<<<<< HEAD
<<<<<<< HEAD
}

ursor/fix-lint-push-and-merge-to-main-ae4e
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
