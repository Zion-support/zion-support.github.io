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

    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />
      </Head>
    <div className="min-h-screen bg-gray-50">;
      <Head>;
        <title>Join Our Team - Zion Tech Group</title>;
        <meta name="description" content="Join our team of talented professionals and help us build the future of technology." />;
      </Head>;
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100">
              We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>
      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
    <Layout 
      title="Careers - Zion Tech Group"

      description="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group."
      keywords="careers, jobs, employment, technology careers, AI engineer, developer, cloud architect"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,


        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div,
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div,
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div,
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <motion.div,
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div,
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5