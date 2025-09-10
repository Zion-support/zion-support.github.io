import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years of machine learning experience",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models",
        "Strong background in NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "AI research opportunities"],
      category: "ai"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our systems and data from cyber threats and ensure compliance.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years of security experience",
        "Knowledge of security frameworks and compliance",
        "Experience with penetration testing",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Security certifications"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of cloud architecture experience",
        "Expertise in AWS, Azure, or GCP",
        "Experience with infrastructure as code",
        "Strong communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications"],
      category: "cloud"
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Heart,
      title: "People Matter",
      description: "Our team is our greatest asset and we invest in their growth"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We build secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We solve problems that affect people worldwide"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family"
    },
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and location independence"
    },
    {
      icon: Award,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conferences, and skill development"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with smart, passionate colleagues"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding contributions"
    }
  ];

  const filteredJobs = jobListings.filter(job => 
    selectedCategory === 'all' || job.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Careers at Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Join Our <span className="text-blue-600">Innovation</span> Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Help us build the future of technology. We're looking for passionate individuals 
            who want to make a real impact in AI, quantum computing, and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedCategory(dept.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">
                      {job.salary}
                    </span>
                    <Button variant="outline" size="sm">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We offer competitive benefits and a culture that values innovation and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our team and help us build the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View All Positions
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
