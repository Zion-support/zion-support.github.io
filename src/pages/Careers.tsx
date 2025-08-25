import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap, Heart, Zap, Brain, Atom, Shield, Cloud, Rocket, Globe, Star, CheckCircle, Send, Building2, Target, Award, Lightbulb, Code, Database, Network, ShieldCheck, Wifi, Satellite, Factory, Heart as HeartIcon, Gavel, Scale, Eye, Key, Leaf, Sun, Wind } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = [
    { name: 'All', count: 24, icon: Building2 },
    { name: 'AI & Machine Learning', count: 8, icon: Brain },
    { name: 'Quantum Technology', count: 3, icon: Atom },
    { name: 'Cybersecurity', count: 5, icon: Shield },
    { name: 'Cloud & DevOps', count: 4, icon: Cloud },
    { name: 'Software Engineering', count: 4, icon: Code }
  ];

  const locations = [
    { name: 'All', count: 24, icon: Globe },
    { name: 'Remote', count: 18, icon: Wifi },
    { name: 'Middletown, DE', count: 4, icon: MapPin },
    { name: 'New York, NY', count: 2, icon: Building2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Research Scientist",
      department: "AI & Machine Learning",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead cutting-edge research in autonomous AI systems and quantum neural networks.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Strong background in machine learning and neural networks",
        "Experience with quantum computing concepts",
        "Published research in top-tier conferences"
      ],
      responsibilities: [
        "Develop novel AI algorithms and architectures",
        "Lead research projects and mentor junior researchers",
        "Collaborate with cross-functional teams",
        "Publish research findings and patents"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Professional development budget",
        "Health, dental, and vision insurance"
      ],
      icon: Brain,
      urgent: true,
      postedDate: "2024-12-15"
    },
    {
      id: 2,
      title: "Quantum Computing Engineer",
      department: "Quantum Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Build and optimize quantum computing systems and quantum neural network platforms.",
      requirements: [
        "MS/PhD in Physics, Computer Science, or Engineering",
        "Experience with quantum computing frameworks",
        "Knowledge of quantum algorithms and error correction",
        "Programming experience in Python, C++, or Q#"
      ],
      responsibilities: [
        "Design and implement quantum algorithms",
        "Optimize quantum circuit performance",
        "Develop quantum software tools",
        "Collaborate with research teams"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Conference attendance support",
        "Comprehensive benefits package"
      ],
      icon: Atom,
      urgent: false,
      postedDate: "2024-12-12"
    },
    {
      id: 3,
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130,000 - $200,000",
      description: "Design and implement enterprise security solutions and SOC2 compliance automation.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "CISSP, CISM, or similar certifications",
        "Experience with enterprise security architecture",
        "Knowledge of compliance frameworks (SOC2, ISO 27001)"
      ],
      responsibilities: [
        "Design security architecture for enterprise systems",
        "Implement security controls and monitoring",
        "Lead security assessments and audits",
        "Develop security policies and procedures"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Hybrid work model",
        "Professional certification support",
        "Health and wellness programs"
      ],
      icon: Shield,
      urgent: true,
      postedDate: "2024-12-10"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90,000 - $140,000",
      description: "Build and maintain cloud infrastructure and CI/CD pipelines for autonomous systems.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, and Terraform",
        "Experience with CI/CD tools and automation"
      ],
      responsibilities: [
        "Design and implement cloud infrastructure",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Collaborate with development teams"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work options",
        "Cloud certification support",
        "Flexible work hours"
      ],
      icon: Cloud,
      urgent: false,
      postedDate: "2024-12-08"
    },
    {
      id: 5,
      title: "Full Stack Software Engineer",
      department: "Software Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95,000 - $150,000",
      description: "Develop innovative web applications and AI-powered business solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with React, Node.js, and Python",
        "Knowledge of cloud services and databases",
        "Experience with AI/ML integration"
      ],
      responsibilities: [
        "Develop full-stack web applications",
        "Integrate AI services and APIs",
        "Optimize application performance",
        "Collaborate with product and design teams"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Office in NYC with hybrid options",
        "Professional development opportunities",
        "Team events and activities"
      ],
      icon: Code,
      urgent: false,
      postedDate: "2024-12-05"
    },
    {
      id: 6,
      title: "AI Product Manager",
      department: "AI & Machine Learning",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$110,000 - $170,000",
      description: "Lead product strategy and development for AI-powered business solutions.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "Experience in product management or AI product development",
        "Understanding of AI/ML technologies and market trends",
        "Strong analytical and communication skills"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize product requirements",
        "Work with engineering teams on product development",
        "Analyze market trends and competitive landscape"
      ],
      benefits: [
        "Competitive salary and equity",
        "Remote work flexibility",
        "Product management training",
        "Comprehensive benefits package"
      ],
      icon: Target,
      urgent: false,
      postedDate: "2024-12-03"
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service",
      icon: Star
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together",
      icon: Users
    },
    {
      title: "Impact",
      description: "We're driven by the positive impact our technology has on businesses and society",
      icon: Target
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Above-market salaries, equity options, and performance bonuses",
      icon: DollarSign
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance",
      icon: Globe
    },
    {
      title: "Professional Growth",
      description: "Continuous learning, conference attendance, and career development",
      icon: GraduationCap
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
      icon: Heart
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      icon: Zap
    },
    {
      title: "Team Culture",
      description: "Collaborative environment, team events, and strong community",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Mission to
              <span className="text-gradient block">Transform the Future</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Be part of a team that's pushing the boundaries of AI, quantum computing, and emerging technologies. 
              Help us build solutions that transform businesses and shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="h-5 w-5" />
                <span className="text-white">24 Open Positions</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="h-5 w-5" />
                <span className="text-white">Remote & Hybrid Options</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Star className="h-5 w-5" />
                <span className="text-white">Competitive Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-zion-slate-light text-lg">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-zion-slate-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us</h2>
          <p className="text-zion-slate-light text-lg">
            We invest in our people because they're our greatest asset
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-zion-slate-light text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-zion-slate-light mb-6">
              Find the perfect role that matches your skills and passion for innovation.
            </p>
            
            {/* Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Department</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.name}
                      onClick={() => setSelectedDepartment(dept.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        selectedDepartment === dept.name
                          ? 'bg-zion-cyan text-white border-zion-cyan'
                          : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <dept.icon className="h-4 w-4" />
                        <span>{dept.name}</span>
                      </div>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        {dept.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-3">Location</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location.name}
                      onClick={() => setSelectedLocation(location.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        selectedLocation === location.name
                          ? 'bg-zion-cyan text-white border-zion-cyan'
                          : 'bg-zion-slate-dark text-zion-slate-light border-zion-cyan/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <location.icon className="h-4 w-4" />
                        <span>{location.name}</span>
                      </div>
                      <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs">
                        {location.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {filteredJobs.length} Positions Available
              </h3>
              <span className="text-zion-slate-light text-sm">
                Updated {new Date().toLocaleDateString()}
              </span>
            </div>
            
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-lg">
                        <job.icon className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-bold text-white">{job.title}</h4>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <p className="text-zion-slate-light mb-4">{job.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-zion-cyan mb-1">{job.salary}</div>
                      <div className="text-sm text-zion-slate-light">{job.experience}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Requirements</h5>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Responsibilities</h5>
                      <ul className="space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-zion-cyan font-semibold mb-2">Benefits</h5>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                    <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Fit?
          </h2>
          <p className="text-zion-slate-light mb-8 text-lg">
            We're always looking for talented individuals to join our team. Send us your resume 
            and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center space-x-2">
              <span>Submit Your Resume</span>
              <Send className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;