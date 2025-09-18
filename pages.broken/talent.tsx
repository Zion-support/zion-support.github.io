import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
const jobOpenings = [{
    "id": 1,
    "title": "Senior AI/ML Engineer"
    "department": "AI Services"
    "location": "Remote"
    "type": "Full-time"
    "experience": "5+ years"
    "description": "Lead the development of cutting-edge AI solutions and machine learning models for our clients."
    "requirements": [
      "Master's degree in Computer Science or related field"
      "5+ years experience in AI/ML development"
      "Proficiency in Python, TensorFlow, PyTorch"
      "Experience with cloud platforms (AWS, Azure, GCP)"
import Layout from '../components/Layout';
const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "AI Services",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
    requirements: [
      "Master's degree in Computer Science or related field",
      "5+ years experience in AI/ML development",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong problem-solving and communication skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
  },
  {
    "id": 2,
    "title": "Full-Stack Developer"
    "department": "Micro SaaS"
    "location": "New York, NY"
    "type": "Full-time"
    "experience": "3+ years"
    "description": "Build scalable web applications and microservices for our SaaS solutions."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "3+ years experience in full-stack development"
      "Proficiency in React, Node.js, TypeScript"
      "Experience with databases (PostgreSQL, MongoDB)"
    id: 2,
    title: "Full-Stack Developer",
    department: "Micro SaaS",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description: "Build scalable web applications and microservices for our SaaS solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in full-stack development",
      "Proficiency in React, Node.js, TypeScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud deployment and DevOps"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
  },
  {
    "id": 3,
    "title": "Cloud Solutions Architect"
    "department": "IT Services"
    "location": "Remote"
    "type": "Full-time"
    "experience": "7+ years"
    "description": "Design and implement cloud infrastructure solutions for enterprise clients."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "7+ years experience in cloud architecture"
      "AWS/Azure/GCP certifications preferred"
      "Experience with containerization (Docker, Kubernetes)"
    id: 3,
    title: "Cloud Solutions Architect",
    department: "IT Services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "7+ years experience in cloud architecture",
      "AWS/Azure/GCP certifications preferred",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong understanding of security best practices"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
  },
  {
    "id": 4,
    "title": "Cybersecurity Specialist"
    "department": "Security"
    "location": "San Francisco, CA"
    "type": "Full-time"
    "experience": "4+ years"
    "description": "Protect our clients' digital assets and implement security best practices."
    "requirements": ["Bachelor's degree in Cybersecurity or related field"
      "4+ years experience in cybersecurity"
      "Certifications (CISSP, CISM, CEH) preferred"
      "Experience with security tools and frameworks"
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    description: "Protect our clients' digital assets and implement security best practices.",
    requirements: [
      "Bachelor's degree in Cybersecurity or related field",
      "4+ years experience in cybersecurity",
      "Certifications (CISSP, CISM, CEH) preferred",
      "Experience with security tools and frameworks",
      "Knowledge of compliance standards (SOC 2, ISO 27001)"
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Professional development"]
  },
  {
    "id": 5,
    "title": "DevOps Engineer"
    "department": "Engineering"
    "location": "Austin, TX"
    "type": "Full-time"
    "experience": "3+ years"
    "description": "Streamline our development and deployment processes with modern DevOps practices."
    "requirements": ["Bachelor's degree in Computer Science or related field"
      "3+ years experience in DevOps"
      "Proficiency in CI/CD pipelines"
      "Experience with infrastructure as code (Terraform, CloudFormation)"
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    description: "Streamline our development and deployment processes with modern DevOps practices.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in DevOps",
      "Proficiency in CI/CD pipelines",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of monitoring and logging tools"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"]
  },
  {
    "id": 6,
    "title": "UX/UI Designer"
    "department": "Design"
    "location": "Remote"
    "type": "Full-time"
    "experience": "2+ years"
    "description": "Create intuitive and beautiful user experiences for our digital products."
    "requirements": ["Bachelor's degree in Design or related field"
      "2+ years experience in UX/UI design"
      "Proficiency in Figma, Sketch, Adobe Creative Suite"
      "Experience with user research and testing"
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create intuitive and beautiful user experiences for our digital products.",
    requirements: [
      "Bachelor's degree in Design or related field",
      "2+ years experience in UX/UI design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Experience with user research and testing",
      "Strong portfolio demonstrating design skills"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Design tools budget"]
  }
];
const benefits = [{
    "title": "Competitive Compensation"
    "description": "We offer competitive salaries and performance-based bonuses"
    "icon": Star
  },
  {
    "title": "Health & Wellness"
    "description": "Comprehensive health insurance and wellness programs"
    "icon": Users
  },
  {
    "title": "Flexible Work"
    "description": "Remote work options and flexible schedules"
    "icon": Clock
  },
  {
    "title": "Professional Growth"
    "description": "Learning opportunities and career development support"
    "icon": ArrowRight
  }
];
const values = ["Innovation and creativity"
  "Collaboration and teamwork"
  "Continuous learning"
  "Work-life balance"
  "Diversity and inclusion"
const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and performance-based bonuses",
    icon: Star
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Users
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Clock
  },
  {
    title: "Professional Growth",
    description: "Learning opportunities and career development support",
    icon: ArrowRight
  }
];
const values = [
  "Innovation and creativity",
  "Collaboration and teamwork",
  "Continuous learning",
  "Work-life balance",
  "Diversity and inclusion",

  "Client success focus"
];

export default function TalentPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">talent</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default talent;
