import React from 'react';
import React from 'react';

import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon
 } from "@heroicons/react/24/outline";

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools',
        'Knowledge of compliance standards'
      ]
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: [
        '4+ years cloud experience',
        'AWS/Azure/GCP certifications',
        'Infrastructure as Code',
        'DevOps practices'
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Above-market compensation packages",
      icon: BriefcaseIcon
    },
    {
      title: "Remote Work",
      description: "Flexible work arrangements",
      icon: MapPinIcon
    },
    {
      title: "Learning & Development",
      description: "Continuous learning opportunities",
      icon: ClockIcon
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health coverage",
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet >
        <title>Careers - Zion Tech Group</>
        <meta name="description" content="Join our team of technology experts. Explore career opportunities at Zion Tech Group and help shape the future of AI and IT solutions." />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity, cloud architect, technology careers" />
      </>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div></>
        </>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4 xl mx-auto">
            <h1 >
              Join Our Team
            </>
            <p >
              Shape the Future of Technology
            </>
            <p >
              Be part of a dynamic team that's revolutionizing the way businesses use technology. 
              We're looking for passionate individuals who want to make a real impact.
            </>
            <Link to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply Now
              <ArrowRightIcon className="w-5 h-5" />
            </>
ursor/fix-errors-and-merge-to-main-94 a7
          </>
        </>
      </>
      {/* Open Positions Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Open Positions
            </>
            <p >
              Find your next career opportunity with us
            </>
          </>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div >
                    <h3 className="text-2 xl font-bold text-white mb-2">{position.title}</>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {position.location}
                      </>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {position.type}
                      </>
                    </>
                  </>
                  <Link to="/contact"
                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                </>
                <p>{position.description}</>
                <div >
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements:</>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {requirement}
                      </>
                    ))}
                  </>
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Why Work With Us?
            </>
            <p >
              We offer more than just a job - we offer a career with purpose
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit .icon className="w-8 h-8 text-white" />
                </>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</>
                <p>{benefit.description}</>
              </>
            ))}
          </>
        </>
      </>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Don't See Your Role?
          </>
          <p >
            We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
          </>
          <Link to="/contact"
            className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
          >
            Send Resume
            <ArrowRightIcon className="w-5 h-5" />
          </>
        </>
      </>
    </>
  );
};

export default CareersPage;
