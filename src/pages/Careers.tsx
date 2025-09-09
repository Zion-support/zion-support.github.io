import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  GraduationCap, 
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $180,000',
    description: 'Lead the development of cutting-edge AI solutions for enterprise clients, focusing on natural language processing and computer vision applications.',
    requirements: [
      'Advanced degree in Computer Science, AI, or related field',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with large language models and transformer architectures',
      'Strong background in machine learning algorithms',
      'Experience with cloud platforms (AWS, GCP, Azure)'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work policy',
      'Professional development budget',
      'Health, dental, and vision insurance',
      '401(k) with company match'
    ],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90,000 - $130,000',
    description: 'Build modern, responsive web applications using React, TypeScript, and cutting-edge frontend technologies.',
    requirements: [
      'Strong proficiency in React, TypeScript, and modern JavaScript',
      'Experience with CSS frameworks (Tailwind CSS, styled-components)',
      'Knowledge of state management (Redux, Zustand)',
      'Understanding of web accessibility standards',
      'Experience with testing frameworks (Jest, React Testing Library)'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work policy',
      'Professional development budget',
      'Health, dental, and vision insurance',
      '401(k) with company match'
    ],
    posted: '1 week ago'
  },
  {
    id: '3',
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Remote / Austin',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$100,000 - $150,000',
    description: 'Transform complex data into actionable insights, develop predictive models, and drive data-driven decision making across the organization.',
    requirements: [
      'Advanced degree in Statistics, Mathematics, or related field',
      'Proficiency in Python, R, SQL',
      'Experience with data visualization tools (Tableau, Power BI)',
      'Knowledge of statistical analysis and machine learning',
      'Experience with big data technologies (Spark, Hadoop)'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work policy',
      'Professional development budget',
      'Health, dental, and vision insurance',
      '401(k) with company match'
    ],
    posted: '3 days ago'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Seattle',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$110,000 - $160,000',
    description: 'Design, implement, and maintain scalable cloud infrastructure, CI/CD pipelines, and monitoring systems.',
    requirements: [
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
      'Strong Linux system administration skills'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Flexible remote work policy',
      'Professional development budget',
      'Health, dental, and vision insurance',
      '401(k) with company match'
    ],
    posted: '5 days ago'
  }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family'
  },
  {
    icon: Zap,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and unlimited PTO'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Professional development budget and access to learning platforms'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Competitive compensation with equity options and performance bonuses'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on cutting-edge technology that solves real-world problems'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment with talented, passionate individuals'
  }
];

const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We push boundaries and embrace new technologies to create breakthrough solutions'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We understand our users\' needs and design solutions that truly help them'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do'
  },
  {
    icon: Building,
    title: 'Collaboration',
    description: 'We believe great things happen when diverse minds work together'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions. Explore exciting career opportunities in AI, engineering, data science, and more."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Join Our
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Mission</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Help us build the future of AI-powered technology. We're looking for passionate, 
              innovative minds to join our team and create solutions that transform industries.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('company-culture')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-xl hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                Learn About Our Culture
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="company-culture" className="py-20 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Our Values
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why Work With Us
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              We take care of our team so you can focus on doing your best work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Open Positions
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Find the perfect role for your skills and passion
            </p>
          </div>
          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zion-cyan/20 text-zion-cyan">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zion-purple/20 text-zion-purple">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      Posted {job.posted}
                    </div>
                  </div>
                  <div className="lg:flex-shrink-0">
                    <button
                      onClick={() => handleApply(job)}
                      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                Apply for {selectedJob.title}
              </h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resume/CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zion-cyan file:text-white hover:file:bg-zion-cyan/90"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-3 text-lg font-semibold text-gray-300 border-2 border-slate-600 rounded-xl hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Don't See the Right Fit?
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="mt-10">
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Send General Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
