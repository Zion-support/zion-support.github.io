'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "AI researcher with 15+ years of experience in machine learning and quantum computing.",
    image: "/api/placeholder/300/300",
    expertise: ["AI Research", "Quantum Computing", "Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen"
    }
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Full-stack developer and cloud architecture expert with a passion for scalable solutions.",
    image: "/api/placeholder/300/300",
    expertise: ["Cloud Architecture", "Full-Stack Development", "DevOps"],
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez"
    }
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "Leading expert in natural language processing and computer vision technologies.",
    image: "/api/placeholder/300/300",
    expertise: ["NLP", "Computer Vision", "Deep Learning"],
    social: {
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson"
    }
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Lead Software Engineer",
    bio: "Specialist in building robust, scalable applications with modern technologies.",
    image: "/api/placeholder/300/300",
    expertise: ["React", "Node.js", "TypeScript"],
    social: {
      linkedin: "https://linkedin.com/in/jamesthompson",
      github: "https://github.com/jamesthompson"
    }
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "UX/UI Designer",
    bio: "Creative designer focused on creating intuitive and accessible user experiences.",
    image: "/api/placeholder/300/300",
    expertise: ["UI/UX Design", "Accessibility", "Design Systems"],
    social: {
      linkedin: "https://linkedin.com/in/lisapark",
      dribbble: "https://dribbble.com/lisapark"
    }
  },
  {
    id: 6,
    name: "David Kim",
    role: "Data Scientist",
    bio: "Expert in data analysis, machine learning, and business intelligence solutions.",
    image: "/api/placeholder/300/300",
    expertise: ["Data Science", "Machine Learning", "Business Intelligence"],
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    }
  }
];

const stats = [
  { label: "Years of Experience", value: "50+" },
  { label: "AI Projects Delivered", value: "200+" },
  { label: "Team Members", value: "25+" },
  { label: "Client Satisfaction", value: "99%" }
];

const TeamPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the brilliant minds behind Zion Tech Group
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
