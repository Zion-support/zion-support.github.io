<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, Zap, Brain, Shield, Globe, Heart, Star } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'ai', name: 'AI & ML', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'business', name: 'Business Development', count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Experience with deep learning frameworks (TensorFlow, PyTorch)',
        'Strong Python programming skills',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of MLOps and model deployment'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Health, dental, and vision insurance',
        'Professional development budget',
        '401(k) with company match'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients and infrastructure from evolving cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, IT, or related field',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits package',
        'Continuous learning opportunities',
        'Modern office environment',
        'Team collaboration events'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices for our AI platform.',
      requirements: [
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud-native development',
        'Knowledge of database design and optimization',
        'Understanding of DevOps practices',
        'Strong problem-solving abilities'
      ],
      benefits: [
        'Competitive salary with growth potential',
        'Remote work flexibility',
        'Health and wellness benefits',
        'Professional development support',
        'Innovative technology stack'
      ]
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'business',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        'Proven track record in B2B sales',
        'Experience in technology or AI industry',
        'Strong communication and negotiation skills',
        'Ability to build and maintain client relationships'
      ],
      benefits: [
        'Base salary + commission structure',
        'Performance-based bonuses',
        'Company car allowance',
        'Health and dental coverage',
        'Professional development budget'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology.',
      icon: Zap
    },
    {
      title: 'Continuous Learning',
      description: 'Growth mindset drives our personal and professional development.',
      icon: Brain
    },
    {
      title: 'Security & Trust',
      description: 'We build secure, reliable solutions that our clients can trust.',
      icon: Shield
    },
    {
      title: 'Global Impact',
      description: 'Our solutions help businesses worldwide transform and grow.',
      icon: Globe
    }
  ];

  const perks = [
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours',
      icon: Clock
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs',
      icon: Heart
    },
    {
      title: 'Growth Opportunities',
      description: 'Clear career paths and advancement opportunities',
      icon: Star
    },
    {
      title: 'Team Culture',
      description: 'Collaborative environment with smart, passionate people',
      icon: Users
=======
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CAREER_JOBS } from "@/data/careersJobs";

export default function Careers() {
  const applyEmail = "careers@ziontechgroup.com";
  const jobs = CAREER_JOBS;

  const whyWork =
    "At Zion, we’re building more than a marketplace—we’re cultivating a community where forward-thinking engineers, product visionaries, and creatives collaborate to pioneer accessible AI technology. You’ll join a remote-first team dedicated to removing barriers and shaping solutions that empower everyday innovators. Our culture emphasizes trust, continuous learning, and meaningful impact, giving you the freedom to take ownership and experiment. We believe diverse perspectives fuel groundbreaking ideas, so we welcome talent from every background. You’ll work alongside passionate peers who care about real-world results, not just buzzwords. Zion’s growth means endless opportunities to expand your skills, explore new roles, and contribute to open-source initiatives. If you’re driven by curiosity and want to leave a lasting mark on the future of technology, Zion offers a supportive environment where your contributions truly matter. Come help us redefine what’s possible and make advanced AI accessible to all. Join us to transform ideas into reality today.";

  // Benefits list
  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs to keep you at your best.",
      icon: (
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "Education stipends and dedicated learning time to help you grow professionally.",
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your value, plus equity options to share in our success.",
      icon: (
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Impactful Projects",
      description: "Contribute to innovations that make advanced technology accessible worldwide.",
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us shape the future of AI and technology. Join a team of innovators, 
            problem-solvers, and visionaries building solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#openings"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Contact HR Team
            </Link>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Perks & Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                  <p className="text-gray-300">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div id="openings" className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Open Positions
          </h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>
          
          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {departments.find(d => d.id === job.department)?.name}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No positions found in the selected department.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Resume
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                Contact HR Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
=======
    <>
      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."
        keywords="Zion careers, AI jobs, tech careers, remote work, startup jobs"
        canonical="https://app.ziontechgroup.com/careers"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the future of AI and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg whitespace-pre-line">
                {whyWork}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
              </TabsList>
              
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>
                            </div>
                            <p className="text-zion-slate-light mb-4">{job.description}</p>
                          </div>
                          <Button
                            asChild
                            className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                          >
                            <Link href={`/careers/${job.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and technology.
              Send us your resume and let's start a conversation. You can also
              apply directly by emailing us at
              <a
                href={`mailto:${applyEmail}`}
                className="text-zion-cyan hover:text-zion-purple transition-colors"
              >
                {applyEmail}
              </a>
              .
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              <a href={`mailto:${applyEmail}`}>Send General Application</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
