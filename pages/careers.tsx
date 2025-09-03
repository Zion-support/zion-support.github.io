import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Users, MapPin, Clock, Briefcase, Heart, Zap, Award, Globe } from 'lucide-react';
=======
<<<<<<< HEAD
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Lightbulb,
  Zap,
  Globe,
  Award,
  Coffee,
  Home,
} from 'lucide-react';
>>>>>>> main

>>>>>>> main
export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
<<<<<<< HEAD
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Professional development, training programs, and career advancement paths.'
=======
      description:
        'Comprehensive health insurance, dental, vision, and wellness programs.',
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Flexible remote work options and home office stipend.',
    },
    {
      icon: Award,
      title: 'Professional Development',
      description:
        'Learning budget, conference attendance, and career growth opportunities.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and mental health support.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and innovative projects.',
>>>>>>> main
    },
    {
      icon: Globe,
      title: 'Global Impact',
<<<<<<< HEAD
      description: 'Work on projects that make a difference for businesses worldwide.'
    }
=======
      description:
        'Make a difference with projects that impact businesses worldwide.',
    },
>>>>>>> main
  ];

  const openPositions = [
    {
<<<<<<< HEAD
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI model development and implementation for enterprise clients.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable web applications using modern technologies.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our technology solutions.'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      description: 'Technical sales support and client relationship management.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our products.'
    }
  ];

  const values = [
    'Innovation and creativity in everything we do',
    'Collaboration and teamwork across all departments',
    'Continuous learning and professional growth',
    'Client success as our primary focus',
    'Transparency and open communication',
    'Work-life balance and employee well-being'
=======
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Join our engineering team to build scalable web applications and AI-powered solutions.',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Develop and implement machine learning models and AI solutions for our clients.',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description:
        'Manage cloud infrastructure and deployment pipelines for our applications.',
    },
    {
      title: 'Product Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Product',
      description:
        'Lead product strategy and work with cross-functional teams to deliver great products.',
    },
    {
      title: 'Sales Representative',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description:
        'Drive business growth by building relationships with potential clients.',
    },
    {
      title: 'Customer Success Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Customer Success',
      description:
        'Ensure client satisfaction and help customers achieve their goals with our solutions.',
    },
=======
import { MapPin, Clock, Users, Award, Heart, Lightbulb, Target, ArrowRight, Mail, Phone, Building, Globe, Code, Brain, Shield, Cloud } from 'lucide-react';

export default function Careers() {
  const openPositions = [
<<<<<<< HEAD
    {
      title: 'Senior AI Engineer', department: 'AI & Machine Learning',
=======
  {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
>>>>>>> main
      location: 'Remote / Middletown, DE',
      type: 'Full-time', experience: '5+ years',
      icon: Brain, description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
<<<<<<< HEAD
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch', 'Experience with cloud platforms (AWS, Azure, GCP)', 'Strong problem-solving and communication skills'
=======
        'Master\'s degree in Computer Science or related field,5+ years experience in AI/ML development,Proficiency in Python, TensorFlow, PyTorch,Experience with cloud platforms (AWS, Azure, GCP),Strong problem-solving and communication skills'
>>>>>>> main
      ]
    }, {
      title: 'Cloud Solutions Architect',
<<<<<<< HEAD
      department: 'Cloud & DevOps', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '7+ years', icon: Cloud,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.', requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture', 'Certifications in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)', 'Strong understanding of DevOps practices'
=======
      department: 'Cloud & DevOps',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      icon: Cloud,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,7+ years experience in cloud architecture,Certifications in AWS, Azure, or GCP,Experience with containerization (Docker, Kubernetes),Strong understanding of DevOps practices'
>>>>>>> main
      ]
    }, {
      title: 'Cybersecurity Specialist',
      department: 'Security', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '4+ years', icon: Shield,
      description: 'Protect our clients\' digital assets with advanced security solutions and threat analysis.',
      requirements: [
<<<<<<< HEAD
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity', 'Certifications (CISSP, CISM, CEH preferred)', 'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
=======
        'Bachelor\'s degree in Cybersecurity or related field,4+ years experience in cybersecurity,Certifications (CISSP, CISM, CEH preferred),Experience with security tools and frameworks,Knowledge of compliance standards (SOC 2, ISO 27001)'
>>>>>>> main
      ]
    }, {
      title: 'Full Stack Developer',
<<<<<<< HEAD
      department: 'Software Development', location: 'Remote / Middletown, DE', type: 'Full-time',
      experience: '3+ years', icon: Code,
      description: 'Build innovative web applications and microservices using modern technologies.', requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development', 'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)', 'Knowledge of modern development practices'
=======
      department: 'Software Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: Code,
      description: 'Build innovative web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,3+ years experience in full-stack development,Proficiency in React, Node.js, TypeScript,Experience with databases (PostgreSQL, MongoDB),Knowledge of modern development practices'
>>>>>>> main
      ]
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      title: 'Competitive Compensation', description: 'Above-market salaries with performance bonuses',
=======
  {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses',
>>>>>>> main
      icon: Award
    }, {
      title: 'Flexible Work Environment',
      description: 'Remote work options and flexible hours', icon: Globe
    },
    {
      title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs',
      icon: Heart
    }, {
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities', icon: Lightbulb
    },
    {
      title: 'Innovation Time', description: '20% time for personal projects and innovation',
      icon: Target
    }, {
      title: 'Team Building',
      description: 'Regular team events and company retreats', icon: Users
    }
  ];

  const companyValues = [
<<<<<<< HEAD
    {
      title: 'Innovation First', description: 'We push the boundaries of technology to create solutions that matter.',
=======
  {
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create solutions that matter.',
>>>>>>> main
      icon: Lightbulb
    }, {
      title: 'Client Success',
      description: 'Our success is measured by our clients\' achievements and satisfaction.',
      icon: Target
    },
    {
      title: 'Collaborative Culture', description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users
    }, {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development.',
      icon: Award
    }
>>>>>>> main
>>>>>>> main
  ];

  return (
    <>
<<<<<<< HEAD
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a dynamic team that's revolutionizing how businesses use technology. We're looking for passionate individuals who want to make a real impact.
              </p>
=======
<<<<<<< HEAD
      <SEO
        title="Careers - Zion Tech Group"
        description="Join our team at Zion Tech Group. Explore career opportunities in technology, engineering, and business. Remote work available."
        keywords="careers, jobs, employment, remote work, technology jobs, engineering jobs"
      />
=======
>>>>>>> main
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-500 text-white">
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our team of innovators, creators, and problem-solvers.
              We&apos;re building the next generation ' of technology solutions
              and we want you to be part of it.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn About Our Culture
              </Button>
=======
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Build the future of technology with us. We&apos;re looking for passionate innovators to join our growing team.'
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="#positions">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Open Positions
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get in Touch
                  </button>
                </Link>
              </div>
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Work With Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Zion Tech Group, we believe our people are our greatest asset. Here's what makes us special.
=======
<<<<<<< HEAD
      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose,
              growth, and amazing benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your
              career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="mr-4">{position.location}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{position.type}</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {position.department}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <Button className="w-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive,
              learn, and make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">
                      We encourage creative thinking and embrace new ideas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Collaboration
                    </h4>
                    <p className="text-gray-600">
                      We work together as a team to achieve common goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">
                      We strive for the highest quality in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey with us? We&apos;re always looking
                for talented individuals ' who share our passion for technology
                and innovation.
              </p>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Send Your Resume
                </Button>
              </div>
=======
        {/* Company Values */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
>>>>>>> main
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
=======
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Company Culture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We foster an environment where innovation thrives, collaboration is encouraged, and every team member has the opportunity to grow and make a meaningful impact.
                </p>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Mission</h3>
                <p className="text-lg mb-6">
                  We're not just building software – we're building the future. Every project we work on has the potential to transform entire industries and improve how businesses operate.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    <span>Collaborative team environment</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-3" />
                    <span>Exciting project opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    <span>Recognition and growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">
                Explore our current openings and find the perfect role for you.
=======
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t see a position that fits? We&apos;re always interested in
            hearing from talented individuals. Send us your resume and
            let&apos;s start a conversation.'
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Send Resume
            </Button>
=======
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose
>>>>>>> main
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <Link 
                    href="/contact" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Apply Now
                  </Link>
=======
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
>>>>>>> main
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-2">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
=======
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don&apos;t See Your Role?'
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and let&apos;s discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <a href="mailto:careers@ziontechgroup.com" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                careers@ziontechgroup.com
              </a>
              <a href="tel:+13024640950" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
>>>>>>> main
              </Link>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
    </>
  );
}
=======
</>
  );
}
>>>>>>> main
