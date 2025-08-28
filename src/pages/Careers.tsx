import React, { useState } from 'react';
import { Users, MapPin, Clock, Briefcase, GraduationCap, Heart, Zap, Globe, Mail, Phone, MapPinIcon } from 'lucide-react';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'sales', name: 'Sales & Business Development', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 3 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 5 },
    { id: 'new-york', name: 'New York, NY', count: 3 },
    { id: 'london', name: 'London, UK', count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "AI Research Scientist",
      department: "AI Research & Development",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "7+ years",
      salary: "$150,000 - $220,000",
      description: "Lead groundbreaking AI research initiatives, focusing on autonomous AI systems, natural language processing, and advanced machine learning algorithms.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "Published research in top AI conferences (NeurIPS, ICML, ACL)",
        "Experience with autonomous AI systems and NLP",
        "Strong background in theoretical and applied machine learning"
      ],
      benefits: ["Competitive salary", "Health insurance", "Research budget", "Conference attendance", "Publication support"],
      category: "ai"
    },
    {
      id: 2,
      title: "AI Supply Chain Optimization Engineer",
      department: "AI & Machine Learning",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $180,000",
      description: "Develop AI-powered supply chain optimization solutions that predict demand, optimize inventory, and reduce costs for global enterprises.",
      requirements: [
        "Experience with supply chain optimization and logistics",
        "Strong background in machine learning and predictive analytics",
        "Knowledge of Python, TensorFlow, and optimization libraries",
        "Experience with real-time data processing and IoT integration"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Supply chain certifications", "Global travel opportunities"],
      category: "ai"
    },
    {
      id: 3,
      title: "AI Content Marketing Specialist",
      department: "AI & Marketing",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Create and optimize AI-powered content marketing solutions that drive engagement and ROI for enterprise clients.",
      requirements: [
        "Experience with AI content generation and optimization",
        "Strong background in digital marketing and content strategy",
        "Knowledge of NLP and content analytics",
        "Experience with marketing automation platforms"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Marketing tools", "Creative freedom"],
      category: "ai"
    },
    {
      id: 4,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Join our AI team to develop cutting-edge machine learning models and AI-powered solutions for enterprise clients.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of cloud platforms (AWS, GCP, Azure)",
        "Experience with large-scale data processing"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"],
      category: "ai"
    },
    {
      id: 5,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our clients' digital assets by implementing advanced security measures and threat detection systems.",
      requirements: [
        "Experience with security frameworks and compliance",
        "Knowledge of network security and penetration testing",
        "Familiarity with SIEM tools and incident response",
        "Security certifications (CISSP, CEH, etc.)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Security training"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $150,000",
      description: "Build and maintain scalable cloud infrastructure using modern DevOps practices and automation tools.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, Terraform",
        "CI/CD pipeline experience",
        "Linux system administration skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certifications"],
      category: "cloud"
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $130,000",
      description: "Create beautiful and responsive user interfaces using modern web technologies and frameworks.",
      requirements: [
        "Strong React, Vue, or Angular experience",
        "Proficiency in HTML, CSS, JavaScript",
        "Experience with responsive design",
        "Knowledge of modern build tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Latest equipment"],
      category: "engineering"
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Transform raw data into actionable insights using advanced analytics and machine learning techniques.",
      requirements: [
        "Strong statistical and mathematical background",
        "Experience with Python, R, SQL",
        "Knowledge of data visualization tools",
        "Experience with big data technologies"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Conference attendance"],
      category: "data"
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$130,000 - $190,000",
      description: "Lead product strategy and development for our innovative technology solutions and services.",
      requirements: [
        "Experience in B2B SaaS or enterprise software",
        "Strong analytical and strategic thinking",
        "Experience with agile methodologies",
        "Excellent communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development"],
      category: "product"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and certification programs'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Events',
      description: 'Regular team building, hackathons, and social events'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology to solve complex problems.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      title: 'Impact',
      description: 'We focus on creating meaningful solutions that make a real difference.'
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "careers@ziontechgroup.com", href: "mailto:careers@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPinIcon, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's talented team of innovators, engineers, and technology experts. Explore exciting career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, technology jobs, AI engineer, cybersecurity specialist, cloud engineer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Join Our Innovation Team
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Help us build the future of technology. Join a team of passionate innovators, engineers, and problem-solvers who are shaping the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're building the future of technology, and we need brilliant minds to join us on this journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These core principles guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to make an impact? Explore our current opportunities and find your perfect role
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.location} ({loc.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-zion-slate-light mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-4">
                      {job.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-zion-slate-dark mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-6 lg:text-right">
                    <button className="bg-zion-cyan text-white px-6 py-2 rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals to join our team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                <a
                  href={contact.href}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
