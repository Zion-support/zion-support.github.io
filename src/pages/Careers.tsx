import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Globe, 
  Shield, 
  Heart, 
  Zap,
  Award,
  BookOpen,
  Coffee,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('engineering');

  const jobs = {
    engineering: [
      {
        title: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace."
      },
      {
        title: "AI Research Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        department: "Engineering",
        description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
      },
      {
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
      }
    ],
    product: [
      {
        title: "Product Manager",
        location: "New York, NY",
        type: "Full-time",
        department: "Product",
        description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."
      },
      {
        title: "UX/UI Designer",
        location: "Remote",
        type: "Full-time",
        department: "Product",
        description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
      }
    ],
    marketing: [
      {
        title: "Growth Marketing Manager",
        location: "Remote",
        type: "Full-time",
        department: "Marketing",
        description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
      },
      {
        title: "Content Strategist",
        location: "London, UK",
        type: "Full-time",
        department: "Marketing",
        description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
      }
    ],
    operations: [
      {
        title: "Community Manager",
        location: "Remote",
        type: "Full-time",
        department: "Operations",
        description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
      },
      {
        title: "Talent Acquisition Specialist",
        location: "Remote",
        type: "Full-time",
        department: "Operations",
        description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
      }
    ]
  };

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
      icon: Home
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs to keep you healthy and happy.",
      icon: Heart
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conference attendance, and career development programs.",
      icon: BookOpen
    },
    {
      title: "Team & Culture",
      description: "Collaborative environment with regular team events, hackathons, and innovation challenges.",
      icon: Users
    },
    {
      title: "Global Impact",
      description: "Work on technology that connects people worldwide and drives innovation across industries.",
      icon: Globe
    },
    {
      title: "Competitive Benefits",
      description: "Competitive salary, equity, and retirement benefits to reward your contributions.",
      icon: Shield
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve complex challenges.",
      icon: Zap
    },
    {
      title: "Customer Success",
      description: "Everything we do is focused on helping our customers achieve their goals.",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from working together and sharing knowledge.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices.",
      icon: Shield
    }
  ];

  const tabs = [
    { id: 'engineering', label: 'Engineering', count: jobs.engineering.length },
    { id: 'product', label: 'Product', count: jobs.product.length },
    { id: 'marketing', label: 'Marketing', count: jobs.marketing.length },
    { id: 'operations', label: 'Operations', count: jobs.operations.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Help us build the future of AI and technology. Join a team of innovators, 
              problem-solvers, and visionaries who are transforming how businesses connect and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                View Open Positions
              </Link>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're committed to creating an environment where you can thrive, grow, and make a real impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, passion, and career goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs[activeTab]?.map((job, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-zion-slate-light text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {job.department}
                  </span>
                </div>
                <p className="text-zion-slate-light mb-4">{job.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals 
            who share our passion for innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
              Send Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
