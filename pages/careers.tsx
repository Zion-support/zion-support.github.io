import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  Home
} from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Flexible remote work options and home office stipend.'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Learning budget, conference attendance, and career growth opportunities.'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and mental health support.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and innovative projects.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make a difference with projects that impact businesses worldwide.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Join our engineering team to build scalable web applications and AI-powered solutions.'
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Develop and implement machine learning models and AI solutions for our clients.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Manage cloud infrastructure and deployment pipelines for our applications.'
    },
    {
      title: 'Product Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Product',
      description: 'Lead product strategy and work with cross-functional teams to deliver great products.'
    },
    {
      title: 'Sales Representative',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description: 'Drive business growth by building relationships with potential clients.'
    },
    {
      title: 'Customer Success Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Customer Success',
      description: 'Ensure client satisfaction and help customers achieve their goals with our solutions.'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team at Zion Tech Group. Explore career opportunities in technology, engineering, and business. Remote work available."
        keywords="careers, jobs, employment, remote work, technology jobs, engineering jobs"
      />
      <Head>
        <title>Careers - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-500 text-white">
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> With Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our team of innovators, creators, and problem-solvers. We're building the next generation 
              of technology solutions and we want you to be part of it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and amazing benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive, learn, and make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">We encourage creative thinking and embrace new ideas.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">We work together as a team to achieve common goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">We strive for the highest quality in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey with us? We're always looking for talented individuals 
                who share our passion for technology and innovation.
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always interested in hearing from talented individuals. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Send Resume
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}