import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Award } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Professional development budget']
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and frameworks.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Remote work options', 'Learning opportunities']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and data with advanced security measures and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Security training budget', 'Flexible schedule', 'Career growth opportunities']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and comprehensive benefits package'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Remote Work',
      description: 'Flexible remote work options and modern office spaces'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Culture',
      description: 'Collaborative environment with talented and passionate colleagues'
    }
  ];

  const values = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and cutting-edge solutions'
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Collaboration',
      description: 'We work together to achieve common goals'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Impact',
      description: 'We make a positive difference in the world through technology'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, employment, technology careers, AI jobs, software development" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;
            Page;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Professional page solutions tailored to your business needs.;
          </p>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;
                Expert Solutions;
              </h3>;
              <p className="text-blue-700">;
                Our team of experts delivers cutting-edge page solutions.;
              </p>;
            </div>;
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-green-900 mb-2">;
                Custom Implementation;
              </h3>;
              <p className="text-green-700">;
                Tailored page implementations for your specific requirements.;
              </p>;
            </div>;
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;
                24/7 Support;
              </h3>;
              <p className="text-purple-700">;
                Round-the-clock support for all your page needs.;
              </p>;
            </div>;
          </div>;
          <div className="mt-12">;
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
              Get Started Today;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>)}
