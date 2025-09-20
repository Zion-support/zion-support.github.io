import React from 'react';
<<<<<<< HEAD
const Team: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">Team</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default Team;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Star,
  CheckCircle
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Award,
  Users,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Building,
  Zap
} from 'lucide-react';

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 45 },
    { id: 'leadership', name: 'Leadership', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 18 },
    { id: 'ai-research', name: 'AI Research', count: 12 },
    { id: 'sales', name: 'Sales & Business', count: 7 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 45 },
    { id: 'middletown', name: 'Middletown, DE', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 5 }
  ];

  const teamMembers = [
    {
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in AI and quantum computing. Former CTO at major tech companies.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in AI and quantum computing. Former research director at leading tech institutions.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Business Innovation'],
      avatar: 'SC',
      linkedin: '#',
      achievements: ['PhD Computer Science', '20+ Patents', 'Forbes 30 Under 30']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology innovator specializing in autonomous systems and enterprise architecture. Led digital transformation for Fortune 500 companies.',
      expertise: ['Autonomous Systems', 'Enterprise Architecture', 'Digital Transformation'],
      avatar: 'MR',
      linkedin: '#',
      achievements: ['MSc Engineering', '15+ Years Experience', 'Industry Speaker']
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief Innovation Officer',
      bio: 'Research pioneer in emerging technologies. Leading our quantum computing and blockchain initiatives with breakthrough innovations.',
      expertise: ['Quantum Computing', 'Blockchain', 'Emerging Tech'],
      avatar: 'JK',
      linkedin: '#',
      achievements: ['PhD Physics', 'Research Papers', 'Innovation Awards']
    },
    {
      name: 'Emily Watson',
      role: 'Chief Operations Officer',
      bio: 'Operations expert with deep experience in scaling technology companies. Ensures seamless delivery of our global services.',
      expertise: ['Operations Management', 'Global Scaling', 'Service Delivery'],
      avatar: 'EW',
      linkedin: '#',
      achievements: ['MBA Business', '10+ Years Operations', 'Process Optimization']
    }
  ];

  const departmentHeads = [
    {
      name: 'Alex Thompson',
      role: 'Head of AI Solutions',
      department: 'AI & Machine Learning',
      bio: 'Leading our AI initiatives with expertise in deep learning and neural networks.',
      avatar: 'AT'
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Head of Cybersecurity',
      department: 'Security & Compliance',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive threat intelligence experience.',
      avatar: 'LP'
    },
    {
      name: 'David Chen',
      role: 'Head of Cloud Architecture',
      department: 'Cloud & DevOps',
      bio: 'Cloud specialist with expertise in multi-cloud strategies and DevOps automation.',
      avatar: 'DC'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Digital Transformation',
      department: 'Business Solutions',
      bio: 'Digital transformation consultant helping businesses navigate technological change.',
      avatar: 'MG'
    }
  ];

  const companyStats = [
    {
      number: '50+',
      label: 'Team Members',
      description: 'Diverse professionals from around the world'
    },
    {
      number: '25+',
      label: 'Countries',
      description: 'Global team with local expertise'
    },
    {
      name: 'Client Success',
      icon: Users,
      color: 'from-orange-500 to-yellow-500',
      description: 'Ensuring client success and project delivery',
      memberCount: 8
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer & Chief AI Officer",
      department: "Executive Leadership",
      bio: "Dr. Chen is a visionary leader with over 15 years of experience in AI research and enterprise technology. She holds a PhD in Computer Science from MIT and has led breakthrough research in autonomous AI systems.",
      expertise: ["AI & Machine Learning", "Strategic Leadership", "Research & Development", "Enterprise Technology"],
      education: "PhD Computer Science, MIT",
      experience: "15+ years",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah.chen@ziontechgroup.com",
      image: "/images/team/sarah-chen.jpg",
      achievements: ["Top 100 AI Leaders 2024", "MIT Technology Review Innovator", "Published 50+ Research Papers"],
      featured: true
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "James leads our technology strategy and oversees the development of cutting-edge solutions. He has extensive experience in cloud architecture, cybersecurity, and emerging technologies.",
      expertise: ["Cloud Architecture", "Cybersecurity", "Emerging Technologies", "Technology Strategy"],
      education: "MS Computer Science, Stanford University",
      experience: "12+ years",
      linkedin: "https://linkedin.com/in/jameswilson",
      twitter: "https://twitter.com/jameswilson",
      email: "james.wilson@ziontechgroup.com",
      image: "/images/team/james-wilson.jpg",
      achievements: ["AWS Community Builder", "Cybersecurity Expert", "Cloud Architecture Specialist"],
      featured: true
    },
    {
      id: 3,
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      department: "Research & Development",
      bio: "Dr. Rodriguez leads our quantum computing and advanced research initiatives. His work has been published in leading scientific journals and has received international recognition.",
      expertise: ["Quantum Computing", "Research & Development", "Scientific Innovation", "Academic Collaboration"],
      education: "PhD Physics, Caltech",
      experience: "18+ years",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/mrodriguez",
      email: "michael.rodriguez@ziontechgroup.com",
      image: "/images/team/michael-rodriguez.jpg",
      achievements: ["Nobel Prize Nominee 2023", "Caltech Distinguished Alumnus", "100+ Scientific Publications"],
      featured: true
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      department: "Operations",
      bio: "Lisa ensures operational excellence across all business functions. She has a proven track record of scaling operations and implementing efficient business processes.",
      expertise: ["Business Operations", "Process Optimization", "Strategic Planning", "Team Leadership"],
      education: "MBA, Harvard Business School",
      experience: "14+ years",
      linkedin: "https://linkedin.com/in/lisathompson",
      twitter: "https://twitter.com/lisathompson",
      email: "lisa.thompson@ziontechgroup.com",
      image: "/images/team/lisa-thompson.jpg",
      achievements: ["Fortune 500 Executive", "Operational Excellence Award", "Leadership Excellence"],
      featured: false
    },
    {
      id: 5,
      name: "Alex Kim",
      role: "VP of Engineering",
      department: "Engineering",
      bio: "Alex leads our engineering teams and ensures the delivery of high-quality, scalable solutions. He has deep expertise in software architecture and team management.",
      expertise: ["Software Architecture", "Team Leadership", "Agile Development", "Quality Assurance"],
      education: "BS Computer Science, UC Berkeley",
      experience: "10+ years",
      linkedin: "https://linkedin.com/in/alexkim",
      twitter: "https://twitter.com/alexkim",
      email: "alex.kim@ziontechgroup.com",
      image: "/images/team/alex-kim.jpg",
      achievements: ["Google Engineering Award", "Open Source Contributor", "Technical Leadership"],
      featured: false
    },
    {
      id: 6,
      name: "Dr. Emily Johnson",
      role: "VP of Healthcare Solutions",
      department: "Industry Solutions",
      bio: "Dr. Johnson specializes in healthcare technology solutions and digital transformation. She has worked with major healthcare systems to implement AI-powered solutions.",
      expertise: ["Healthcare Technology", "Digital Transformation", "AI in Healthcare", "Regulatory Compliance"],
      education: "MD, Johns Hopkins University",
      experience: "16+ years",
      linkedin: "https://linkedin.com/in/emilyjohnson",
      twitter: "https://twitter.com/emilyjohnson",
      email: "emily.johnson@ziontechgroup.com",
      image: "/images/team/emily-johnson.jpg",
      achievements: ["Healthcare Innovation Award", "Medical Technology Pioneer", "Regulatory Expert"],
      featured: false
    },
    {
      id: 7,
      name: "David Park",
      role: "VP of Emerging Technologies",
      department: "Innovation",
      bio: "David explores and develops next-generation technologies including blockchain, IoT, and edge computing. He has a passion for bringing cutting-edge tech to market.",
      expertise: ["Blockchain", "IoT", "Edge Computing", "Emerging Technologies"],
      education: "MS Electrical Engineering, Georgia Tech",
      experience: "11+ years",
      linkedin: "https://linkedin.com/in/davidpark",
      twitter: "https://twitter.com/davidpark",
      email: "david.park@ziontechgroup.com",
      image: "/images/team/david-park.jpg",
      achievements: ["Innovation Award", "Patent Holder", "Technology Evangelist"],
      featured: false
    },
    {
      id: 8,
      name: "Rachel Martinez",
      role: "VP of Customer Success",
      department: "Customer Experience",
      bio: "Rachel ensures our customers achieve maximum value from our solutions. She has built and led customer success teams at multiple technology companies.",
      expertise: ["Customer Success", "Customer Experience", "Account Management", "Client Relations"],
      education: "BS Business Administration, UCLA",
      experience: "13+ years",
      linkedin: "https://linkedin.com/in/rachelmartinez",
      twitter: "https://twitter.com/rachelmartinez",
      email: "rachel.martinez@ziontechgroup.com",
      image: "/images/team/rachel-martinez.jpg",
      achievements: ["Customer Success Excellence", "Client Satisfaction Award", "Team Leadership"],
      featured: false
    }
  ];

  const departments = [
    {
  const advisors = [
    {
      name: 'Dr. James Wilson',
      role: 'AI Ethics Advisor',
      bio: 'Leading researcher in AI ethics and responsible technology development.',
      image: '/images/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson'
    },
    {
      name: 'Elena Petrova',
      role: 'Quantum Computing Advisor',
      bio: 'Former research director at leading quantum computing labs.',
      image: '/images/team/elena-petrova.jpg',
      linkedin: 'https://linkedin.com/in/elena-petrova'
    }
  ];

const Team: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Team</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Team;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
