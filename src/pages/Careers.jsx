import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Heart, BookOpen, Zap, Globe } from 'lucide-react';

export default function Careers() {
    const [selectedDepartment, setSelectedDepartment] = useState('All');

    // Sample job listings
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

  // Benefits list
  const benefits = [
    {
      title: 'Flexible Work',
      description:
        'Remote - first culture with flexible hours to support your productivity and work - life balance.',
      icon: (<svg
          className="w - 10 h - 10 text - zion - cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org / 2000 / svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2 - 2m0 0l7 - 7 7 7M5 10v10a1 1 0 001 1h3m10 - 11l2 2m - 2-2v10a1 1 0 01 - 1 1h - 3m - 6 0a1 1 0 001 - 1v - 4a1 1 0 011 - 1h2a1 1 0 011 1v4a1 1 0 001 1m - 6 0h6"
                />
        </svg>) ,
    },
    {
      title: 'Health & Wellness',
      description:
        'Comprehensive health coverage, mental health support, and wellness programs to keep you at your best.',
      icon: (<svg
          className="w - 10 h - 10 text - zion - cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org / 2000 / svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682 - 7.682a4.5 4.5 0 00 - 6.364 - 6.364L12 7.636l - 1.318 - 1.318a4.5 4.5 0 00 - 6.364 0z"
                />
        </svg>) ,
    },
    {
      title: 'Competitive Compensation',
      description:
        'Salary packages that recognize your value, plus equity options to share in our success.',
      icon: (<svg
          className="w - 10 h - 10 text - zion - purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org / 2000 / svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c - 1.657 0 - 3 .895 - 3 2s1.343 2 3 2 3 .895 3 2 - 1.343 2 - 3 2m0 - 8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0 - 1c - 1.11 0 - 2.08-.402 - 2.599 - 1M21 12a9 9 0 11 - 18 0 9 9 0 0118 0z"
                />
        </svg>) ,
    },
    {
      title: 'Learning & Growth',
      description:
        'Continuous learning opportunities, conference attendance, and career development support.',
      icon: (<svg
          className="w - 10 h - 10 text - zion - cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org / 2000 / svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0 - 13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253zm0 0C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C16.5 5 14.754 5 13.168 5.477L12 6.253z"
                />
        </svg>) ,
    },
    {
      title: 'Team & Culture',
      description:
        'Collaborative environment with diverse perspectives and a culture of innovation and inclusion.',
      icon: (<svg
          className="w - 10 h - 10 text - zion - cyan"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org / 2000 / svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v - 2a3 3 0 00 - 5.356 - 1.857M17 20H7m10 0v - 2c0-.656-.126 - 1.283-.356 - 1.857M7 20H2v - 2a3 3 0 015.356 - 1.857M7 20v - 2c0-.656.126 - 1.283.356 - 1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11 - 6 0 3 3 0 016 0zm6 3a2 2 0 11 - 4 0 2 2 0 014 0zM7 10a2 2 0 11 - 4 0 2 2 0 014 0z"
                />
        </svg>) ,
    },
  ];

  return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">
      <SEO
        title="Careers at Zion Tech Group - Join Our Team"
        description="Join our mission to revolutionize technology. Explore exciting career opportunities in AI, engineering, product, and more."
        keywords="careers, jobs, employment, Zion Tech Group, AI, technology"
            />

    const filteredJobs = selectedDepartment === 'All' 
        ? Object.values(jobs).flat()
        : jobs[selectedDepartment] || [];

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-6">
                            <Briefcase className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Join Our Team
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Help us build the future of AI-powered technology solutions and make a difference in the world
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Department Filter */}
            <section className="py-12 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => setSelectedDepartment(dept.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    selectedDepartment === dept.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                {dept.name} ({dept.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Open Positions
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover opportunities to grow your career with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                                        {job.department}
                                    </span>
                                    <span className="text-sm text-gray-400">{job.type}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {job.title}
                                </h3>
                                
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {job.type}
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-4">{job.description}</p>
                                
                                <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300">
                                    Apply Now
                                    <Briefcase className="w-4 h-4 ml-2" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                    
                    {filteredJobs.length === 0 && (
                        <div className="text-center py-12">
                            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No positions found</h3>
                            <p className="text-gray-400">Try selecting a different department or check back later</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Work With Us
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We believe in creating an environment where you can thrive and grow
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-300">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Don't See the Right Role?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                        Submit Your Resume
                        <Briefcase className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </section>
        </div>
    );
}
