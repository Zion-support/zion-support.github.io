:pages_backup/team.tsx

const Page = () => {
  return (
    <MainLayout
      title="Team - Zion Tech Group"
      description="Meet our team"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Team</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
:pages_backup/team.tsx





import React from "react";"
import Head from "next/head";"
import Link from "next/link";"
import { motion } from "framer-motion";
:pages_backup/team.tsx

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
:pages_backup/team.tsx
} from "lucide-react";
import Layout from "../components/Layout";
import React from 'react';
import SEO from '../components/SEO';
origin/cursor/automate-test-improve-and-merge-code-2533
const teamMembers = [
  {
ursor/integrate-build-improve-and-re-verify-8f7d

    id: 1,
    name: "Kleber Santos",
    position: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",

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
  {}
    id: 2"
    name: "Sarah Johnson""
    position: "CTO""
    department: "Technology""
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.""
    image: "/api/placeholder/300/300""
    linkedin: "https://linkedin.com/in/sarahjohnson""
    twitter: "https://twitter.com/sarahjohnson""
    github: "https://github.com/sarahjohnson""
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"]
  }
  {}
    id: 3"
    name: "Mike Chen""
    position: "Head of Cybersecurity""
    department: "Security""
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.""
    image: "/api/placeholder/300/300""
    linkedin: "https://linkedin.com/in/mikechen""
    twitter: "https://twitter.com/mikechen""
    github: "https://github.com/mikechen"
    expertise: ["
      "Cybersecurity""
      "Zero-Trust""
      "Threat Intelligence""
      "Compliance"
    ]
  }
  {}
    id: 4"
    name: "Emily Rodriguez""
    position: "Head of AI/ML""
    department: "AI & Machine Learning""
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.""
    image: "/api/placeholder/300/300""
    linkedin: "https://linkedin.com/in/emilyrodriguez""
    twitter: "https://twitter.com/emilyrodriguez""
    github: "https://github.com/emilyrodriguez""
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"]
  }
  {}
    id: 5"
    name: "David Kim""
    position: "Head of Data Analytics""
    department: "Data & Analytics""
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.""
    image: "/api/placeholder/300/300""
    linkedin: "https://linkedin.com/in/davidkim""
    twitter: "https://twitter.com/davidkim""
    github: "https://github.com/davidkim""
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"]
  }
:pages_backup/team.tsx
    image: "/api / placeholder / 300 / 300",
    linkedin: "https://linkedin.com / in / klebersantos",
    twitter: "https://twitter.com / klebersantos",
    github: "https://github.com / klebersantos",
    expertise: [;"
      "Strategic Leadership","
      "AI / ML","
      "Cloud Architecture","
      "Business Development",
    ],
  },
:pages_backup/team.tsx
  {

    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"]
    name: 'Dr. Sarah Johnson','
    role: 'Chief Technology Officer','
    expertise: 'AI & Machine Learning',
    icon: Brain,'
    description: 'Leading our AI initiatives with 15+ years of experience in machine learning and data science.'
  },
  {'
    name: 'Michael Chen','
    role: 'Cloud Solutions Architect','
    expertise: 'Cloud Infrastructure',
    icon: Cloud,'
    description: 'Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.'
  },
  {'
    name: 'Emily Rodriguez','
    role: 'Security Specialist','
    expertise: 'Cybersecurity',
    icon: Shield,'
    description: 'Ensuring enterprise-grade security with expertise in threat detection and prevention.'
  },
  {'
    name: 'David Thompson','
    role: 'Team Lead','
    expertise: 'Project Management',
    icon: Users,'
    description: 'Leading our development teams with agile methodologies and client-focused delivery.'
:pages_backup/team.tsx
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
:pages_backup/team.tsx
  }
];

;
const departments = [;

  {"
    name: "Leadership""
    description: "Strategic vision and company direction""
    icon: "👑"
    count: 1;
  }
  {"
    name: "Technology""
    description: "Engineering and technical innovation""
    icon: "💻"
    count: 15;
  }
  {"
    name: "AI & Machine Learning""
    description: "Artificial intelligence and data science""
    icon: "🤖"
    count: 12;
  }
  {"
    name: "Cybersecurity""
    description: "Security and compliance solutions""
    icon: "🛡️"
    count: 8;
  }
  {"
    name: "Data & Analytics""
    description: "Business intelligence and analytics""
    icon: "📊"
    count: 10;
  }
  {"
    name: "Product""
    description: "Product development and design""
    icon: "🎨"
    count: 6;
  }
  {"
    name: "Sales & Marketing""
    description: "Business development and growth""
    icon: "📈"
    count: 8;
  }
  {"
    name: "Operations""
    description: "Project management and delivery""
    icon: "⚙️"
    count: 5;
  }
];
const stats = ["
  { number: "65+", label: "Team Members" }"
  { number: "15+", label: "Years Experience" }"
  { number: "25+", label: "Countries Represented" }"
  { number: "95%", label: "Employee Satisfaction" }
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
:pages_backup/team.tsx
  Shield,;"
} from "lucide-react";"
import Layout from "../components/Layout";

const teamMembers = [;
  {;
    id: 1,;"
    name: "Kleber Santos",;"
    position: "CEO & Founder",;"
    department: "Leadership",;"
    bio: "Visionary leader with 15+ years in technology and business transformation. Passionate about leveraging AI and cloud technologies to solve complex business challenges.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/klebersantos",;"
    twitter: "https://twitter && twitter.com/klebersantos",;"
    github: "https://github && github.com/klebersantos",;
    expertise: [;"
      "Strategic Leadership",;"
      "AI/ML",;"
      "Cloud Architecture",;"
      "Business Development",;
    ],;
  },;
  {;
    id: 2,;"
    name: "Sarah Johnson",;"
    position: "CTO",;"
    department: "Technology",;"
    bio: "Technology visionary with expertise in cloud computing, AI, and scalable architecture. Led digital transformations for Fortune 500 companies.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/sarahjohnson",;"
    twitter: "https://twitter && twitter.com/sarahjohnson",;"
    github: "https://github && github.com/sarahjohnson",;"
    expertise: ["Cloud Computing", "AI/ML", "System Architecture", "DevOps"],;
  },;
  {;
    id: 3,;"
    name: "Mike Chen",;"
    position: "Head of Cybersecurity",;"
    department: "Security",;"
    bio: "Cybersecurity expert with 12+ years protecting enterprise systems. Specializes in zero-trust architecture and threat intelligence.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/mikechen",;"
    twitter: "https://twitter && twitter.com/mikechen",;"
    github: "https://github && github.com/mikechen",;
    expertise: [;"
      "Cybersecurity",;"
      "Zero-Trust",;"
      "Threat Intelligence",;"
      "Compliance",;
    ],;
  },;
  {;
    id: 4,;"
    name: "Emily Rodriguez",;"
    position: "Head of AI/ML",;"
    department: "AI & Machine Learning",;"
    bio: "AI researcher and practitioner with deep expertise in machine learning, natural language processing, and computer vision applications.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/emilyrodriguez",;"
    twitter: "https://twitter && twitter.com/emilyrodriguez",;"
    github: "https://github && github.com/emilyrodriguez",;"
    expertise: ["Machine Learning", "NLP", "Computer Vision", "Deep Learning"],;
  },;
  {;
    id: 5,;"
    name: "David Kim",;"
    position: "Head of Data Analytics",;"
    department: "Data & Analytics",;"
    bio: "Data science leader with expertise in big data, predictive analytics, and business intelligence. Transforms data into actionable insights.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/davidkim",;"
    twitter: "https://twitter && twitter.com/davidkim",;"
    github: "https://github && github.com/davidkim",;"
    expertise: ["Data Science", "Big Data", "Predictive Analytics", "BI"],;
  },;
  {;
    id: 6,;"
    name: "Lisa Wang",;"
    position: "Head of Product Development",;"
    department: "Product",;"
    bio: "Product strategist with experience building scalable SaaS platforms and mobile applications. Focuses on user experience and market fit.",;"
    image: "/api/placeholder/300/300",;"
    linkedin: "https://linkedin && linkedin.com/in/lisawang",;"
    twitter: "https://twitter && twitter.com/lisawang",;"
    github: "https://github && github.com/lisawang",;"
    expertise: ["Product Strategy", "SaaS Development", "UX/UI", "Mobile Apps"],;
  },;
];
:pages_backup/team.tsx
export default function TeamPage() {
  return (
origin/cursor/automate-test-improve-and-merge-code-2533
    <Layout
      title="Our Team - Zion Tech Group"
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results."
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals"

    <Layout"
      title="Our Team - Zion Tech Group""
      description="Meet our expert team of technology professionals. Experienced engineers, data scientists, and business leaders dedicated to delivering exceptional results.""
      keywords="team, experts, engineers, data scientists, AI specialists, cybersecurity experts, technology professionals""
      canonical="https://ziontechgroup && ziontechgroup.com/team">;
      {/* Hero Section */}"
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center max-w-4xl mx-auto">;
            <motion&& motion.h1"
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              Meet Our;"
              <span className="text-purple-400"> Expert Team</span>;
            </motion && motion.h1>;
            <motion&& motion.p"
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

:pages_backup/team.tsx
{/* Stats Section */}
      <section className="py-16 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="grid md:grid-cols-4 gap-8">;
            {stats && stats.map((stat, index) => (;
              <motion&& motion.div;
                key={index}"
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;"
                <div className="text-4xl font-bold text-purple-600 mb-2">;
                  {stat && stat.number}
                </div>;"
                <div className="text-gray-600">{stat && stat.label}</div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* Leadership Team */}"
      <section className="py-16 bg-white">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Leadership Team;
            </h2>;"
            <p className="text-xl text-gray-600">;
              Visionary leaders driving innovation and growth;
            </p>;
          </div>;
"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {teamMembers && teamMembers.slice(0, 3).map((member, index) => (;
              <motion&& motion.div;
                key={member && member.id}
"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;"
                <div className="text-center mb-4">;
                  <img;
                    src={member && member.image}
                    alt={member && member.name}"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />;"
                  <h3 className="text-xl font-bold text-gray-900">;
                    {member && member.name}
                  </h3>;"
                  <p className="text-purple-600 font-semibold">;
                    {member && member.position}
                  </p>;
                </div>;"
                <p className="text-gray-600 text-sm mb-4">{member && member.bio}</p>;"
                <div className="flex flex-wrap gap-2 mb-4">;
                  {member && member.expertise.slice(0, 2).map((skill) => (;
                    <span;
                      key={skill}"
                      className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">;
                      {skill}
                    </span>;
                  ))}
                </div>;"
                <div className="flex justify-center space-x-4">;
                  <a;
                    href={member && member.linkedin}"
                    className="text-gray-400 hover:text-blue-600 transition-colors">;"
                    <Linkedin className="w-5 h-5" />;
                  </a>;
                  <a;
                    href={member && member.twitter}"
                    className="text-gray-400 hover:text-blue-400 transition-colors">;"
                    <Twitter className="w-5 h-5" />;
                  </a>;
                  <a;
                    href={member && member.github}"
                    className="text-gray-400 hover:text-gray-600 transition-colors">;"
                    <Github className="w-5 h-5" />;
                  </a>;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* All Team Members */}"
      <section className="py-16 bg-gray-50">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Our Expert Team;
            </h2>;"
            <p className="text-xl text-gray-600">;
              Dedicated professionals across all departments;
            </p>;
          </div>;
"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {teamMembers && teamMembers.map((member, index) => (;
              <motion&& motion.div;
                key={member && member.id}
"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;"
                <div className="text-center mb-4">;
                  <img;
                    src={member && member.image}
                    alt={member && member.name}"
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />;"
                  <h3 className="text-lg font-bold text-gray-900">;
                    {member && member.name}
                  </h3>;"
                  <p className="text-purple-600 font-semibold text-sm">;
                    {member && member.position}
                  </p>;"
                  <p className="text-gray-500 text-xs">{member && member.department}</p>;
                </div>;"
                <p className="text-gray-600 text-sm mb-4">{member && member.bio}</p>;"
                <div className="flex flex-wrap gap-1 mb-4">;
                  {member && member.expertise.slice(0, 3).map((skill) => (;
                    <span;
                      key={skill}"
                      className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">;
                      {skill}
                    </span>;
                  ))}
                </div>;"
                <div className="flex justify-center space-x-3">;
                  <a;
                    href={member && member.linkedin}"
                    className="text-gray-400 hover:text-blue-600 transition-colors">;"
                    <Linkedin className="w-4 h-4" />;
                  </a>;
                  <a;
                    href={member && member.twitter}"
                    className="text-gray-400 hover:text-blue-400 transition-colors">;"
                    <Twitter className="w-4 h-4" />;
                  </a>;
                  <a;
                    href={member && member.github}"
                    className="text-gray-400 hover:text-gray-600 transition-colors">;"
                    <Github className="w-4 h-4" />;
                  </a>;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

      {/* Departments */}"
      <section className="py-16 bg-white">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Our Departments;
            </h2>;"
            <p className="text-xl text-gray-600">;
              Specialized teams working together to deliver excellence;
            </p>;
          </div>;
"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {departments && departments.map((dept, index) => (;
              <motion&& motion.div;
                key={dept && dept.name}
"
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;"
                <div className="text-4xl mb-4">{dept && dept.icon}</div>;"
                <h3 className="text-lg font-semibold mb-2">{dept && dept.name}</h3>;"
                <p className="text-gray-600 text-sm mb-2">{dept && dept.description}</p>;"
                <div className="text-purple-600 font-semibold">;
                  {dept && dept.count} members;
                </div>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;

:pages_backup/team.tsx
{/* Join Our Team CTA */}
      <section className="py-16 bg-purple-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>;
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">;
            We're always looking for talented individuals who share our passion;
            for technology and innovation.;
          </p>;"
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link"
              href="/careers""
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">;
              View Open Positions;
            </Link>;
            <Link"
              href="/contact"
"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors">;
;
const stats = [;"
  { number: "65+", label: "Team Members" },"
  { number: "15+", label: "Years Experience" },"
  { number: "25+", label: "Countries Represented" },"
  { number: "95%", label: "Employee Satisfaction" },
];
:pages_backup/team.tsx
export default /**;
 * TeamPage - Function description;
 */
function TeamPage() {}
  return (
              Get in Touch;
            </Link>;
          </div>;
        </div>;
      </section>;
:pages_backup/team.tsx

    <>
      <SEO'
        title='Our Team | Zion Tech Group''
        description='Meet the leadership team at Zion Tech Group.''
        canonical='/team'
      />'
      <div className='container mx-auto px-4 py-16'>'
        <h1 className='text-4xl font-bold mb-4'>Our Team</h1>'
        <p className='text-gray-300 mb-8'>
          Profiles coming soon. For inquiries, contact us.
        </p>
      </div>
    </>
:pages_backup/team.tsx
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

              className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
              Get Free Consultation;
            </Link>;
          </div>;

          {/* Contact Information */}"
          <div className="grid md:grid-cols-3 gap-8 mt-12">;"
            <div className="flex items-center justify-center">;"
              <Phone className="w-6 h-6 mr-2" />;
              <span>+1 302 464 0950</span>;
            </div>;"
            <div className="flex items-center justify-center">;"
              <Mail className="w-6 h-6 mr-2" />;
              <span>kleber@ziontechgroup && ziontechgroup.com</span>;
            </div>;"
            <div className="flex items-center justify-center">;"
              <MapPin className="w-6 h-6 mr-2" />;
              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
      {/* Contact CTA Section */}"
      <section className="py - 20 bg - gray - 50">;"
        <div className="container mx - auto px - 4 text - center">;"
          <h2 className="text - 4xl font - bold mb - 6">;
            Ready to Work with Our Expert Team?;
          </h2>;"
          <p className="text - xl mb - 8 text - gray - 600 max - w-3xl mx - auto">;'
            Let's discuss how our experienced team can help transform your;
            business with cutting - edge technology solutions.;
          </p>;"
          <div className="flex flex - col sm:flex - row justify - center gap - 4 mb - 8">;
            <Link;"
              href="/contact";"
              className="bg - purple - 600 text - white hover:bg - purple - 700 px - 8 py - 4 rounded - lg font - semibold transition - colors text - lg";
            >;
              Get Free Consultation;
            </Link>;
          </div>;
          {/* Contact Information */}"
          <div className="grid md:grid - cols - 3 gap - 8 mt - 12">;"
            <div className="flex items - center justify - center">;"
              <Phone className="w - 6 h - 6 mr - 2" />;
              <span>+1 302 464 0950</span>;
            </div>;"
            <div className="flex items - center justify - center">;"
              <Mail className="w - 6 h - 6 mr - 2" />;
              <span > kleber@ziontechgroup.com</span>;
            </div>;"
            <div className="flex items - center justify - center">;"
              <MapPin className="w - 6 h - 6 mr - 2" />;
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            </div>;
          </div>;
        </div>;
      </section>;

const teamMembers = [;
  {;"
    name: "Dr. Sarah Johnson",;"
    role: "Chief Technology Officer",;"
    expertise: "AI & Machine Learning",;
    icon: Brain,;
    description:;"
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science.",;
  },;
  {;"
    name: "Michael Chen",;"
    role: "Cloud Solutions Architect",;"
    expertise: "Cloud Infrastructure",;
    icon: Cloud,;
    description:;"
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.",;
  },;
  {;"
    name: "Emily Rodriguez",;"
    role: "Security Specialist",;"
    expertise: "Cybersecurity",;
    icon: Shield,;
    description:;"
      "Ensuring enterprise-grade security with expertise in threat detection and prevention.",;
  },;
  {;"
    name: "David Thompson",;"
    role: "Team Lead",;"
    expertise: "Project Management",;
    icon: Users,;
    description:;"
      "Leading our development teams with agile methodologies and client-focused delivery.",;
  },;
];

:pages_backup/team.tsx
export default function TeamPage() {;

  return (
    <>
<>
      <SEO
        title="Our Team | Zion Tech Group"
        description="Meet the leadership team at Zion Tech Group."
        canonical="/team"

</>;
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
import React from 'react';
import SEO from '../components/SEO';
export default function TeamPage() {
	return (

		<>
			<SEO title="Our Team | Zion Tech Group" description="Meet the leadership team at Zion Tech Group." canonical="/team" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Our Team</h1>
    </Layout>);
<p className="text-gray-300 mb-8">Profiles coming soon. For inquiries, contact us.</p>
			</div>
		</>
	)

}
</Layout>);
}
import Head from './next / head';
import { motion  } from './framer-motion';
import { Brain, Cloud, Shield, Users  } from './lucide-react';
;
const team_members = [;
  {"
    name: "Dr. Sarah Johnson","
    role: "Chief Technology Officer","
    expertise: "AI & Machine Learning",
    icon: Brain,
    description:;"
      "Leading our AI initiatives with 15+ years of experience in machine learning and data science.",
  },
  {"
    name: "Michael Chen","
    role: "Cloud Solutions Architect","
    expertise: "Cloud Infrastructure",
    icon: Cloud,
    description:;"
      "Expert in cloud migration and scalable infrastructure design with AWS and Azure certifications.",
  },
  {"
    name: "Emily Rodriguez","
    role: "Security Specialist","
    expertise: "Cybersecurity",
    icon: Shield,
    description:;"
      "Ensuring enterprise - grade security with expertise in threat detection and prevention.",
  },
  {"
    name: "David Thompson","
    role: "Team Lead","
    expertise: "Project Management",
    icon: Users,
    description:;"
      "Leading our development teams with agile methodologies and client - focused delivery.",
  },
];
;
export default /**;
 * TeamPage - Function description;
 */
function TeamPage() {}
  return (
:pages_backup/team.tsx

}

;

    <>;
      <SEO;"
        title="Our Team | Zion Tech Group";"
        description="Meet the leadership team at Zion Tech Group.";"
        canonical="/team";
      />;"
      <div className="container mx - auto px - 4 py - 16">;"
        <h1 className="text - 4xl font - bold mb - 4">Our Team</h1>;"
        <p className="text - gray - 300 mb - 8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
    </>);
  return (
    <>;
      <SEO;"
        title="Our Team | Zion Tech Group";"
        description="Meet the leadership team at Zion Tech Group.";"
        canonical="/team";
      />;"
      <div className="container mx - auto px - 4 py - 16">;"
        <h1 className="text - 4xl font - bold mb - 4">Our Team</h1>;"
        <p className="text - gray - 300 mb - 8">;
          Profiles coming soon. For inquiries, contact us.;
        </p>;
      </div>;
    </>);
;
}

}

;

:pages_backup/team.tsx

'
import React from 'react';'
import MainLayout from '../components/layout/MainLayout';

const Page = () => {}
  return (
    <MainLayout"
      title="Team - Zion Tech Group""
      description="Meet our team"
    >"
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Team</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;


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
export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos', role: 'CEO & Founder',
      expertise: 'AI & Machine Learning', description: 'Visionary leader with 15+ years in AI and technology innovation.',
      icon: Brain, linkedin: 'https://linkedin.com/in/kleber-santos'
    },
    {
      name: 'Sarah Johnson', role: 'CTO',
      expertise: 'Cloud Architecture', description: 'Expert in scalable cloud solutions and enterprise architecture.',
      icon: Globe, linkedin: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      name: 'Michael Chen', role: 'Lead AI Engineer',
      expertise: 'Machine Learning', description: 'Specialist in deep learning and autonomous systems development.',
      icon: Brain, linkedin: 'https://linkedin.com/in/michael-chen'
    },
    {
      name: 'Emily Rodriguez', role: 'Security Director',
      expertise: 'Cybersecurity', description: 'Cybersecurity expert with focus on zero-trust architecture.',
      icon: Shield, linkedin: 'https://linkedin.com/in/emily-rodriguez'
    },
    {
      name: 'David Kim', role: 'DevOps Lead',
      expertise: 'Infrastructure', description: 'DevOps specialist with expertise in automation and scaling.',
      icon: Code, linkedin: 'https://linkedin.com/in/david-kim'
    },
    {
      name: 'Lisa Thompson', role: 'Product Manager',
      expertise: 'SaaS Solutions', description: 'Product strategist focused on micro SaaS and user experience.',
      icon: Users, linkedin: 'https://linkedin.com/in/lisa-thompson'
    }
  ];

  const values = [
    {
      icon: Brain, title: 'Innovation First',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions.'
    }, {
      icon: Users,
      title: 'Client Success', description: 'Your success is our success. We\'re committed to delivering exceptional results.''
    },
    {
      icon: Shield, title: 'Security & Trust',
      description: 'We maintain the highest security standards and build trust through transparency.'
    }, {
      icon: Zap,
      title: 'Agile Delivery', description: 'Fast, efficient delivery without compromising on quality or security.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team — Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Experienced professionals dedicated to delivering innovative technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com/team" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-blue-600">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Our diverse team of technology experts brings together decades of experience 
                in AI, cloud computing, cybersecurity, and software development.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Experienced professionals leading innovation in technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow border border-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <member.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.expertise}</p>
                    <p className="text-gray-600 mb-6">{member.description}</p>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Connect on LinkedIn
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our expert team can help transform your business with innovative technology solutions.''
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </Link>
              <Link href="/careers" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
</>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Team - Zion Tech Group"
      description="Meet our team"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Team</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

