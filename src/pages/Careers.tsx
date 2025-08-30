import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';

<<<<<<< HEAD
const Careers = () => {;
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample job listings
  const jobListings = [
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120K - $180K",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: ["PhD in Computer Science", "5+ years ML experience", "Python, TensorFlow, PyTorch"]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Technologies",
      location: "New York / Remote",
      type: "Full-time",
      salary: "$150K - $220K",
      description: "Develop quantum algorithms and quantum-safe security protocols.",
      requirements: ["PhD in Physics/CS", "Quantum computing experience", "Qiskit, Cirq expertise"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin / Remote",
      type: "Full-time",
      salary: "$100K - $150K",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines.",
      requirements: ["3+ years DevOps", "AWS/Azure/GCP", "Kubernetes, Docker"]
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Washington DC / Remote",
      type: "Full-time",
<<<<<<< HEAD
      salary: "$90K - $140K",
      description: "Protect our systems and clients from emerging cyber threats.",
      requirements: ["CISSP certification", "3+ years security", "Threat hunting experience"];
    };
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, quantum computing, and emerging technologies"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Global Impact",
      description: "Solve real-world problems for Fortune 500 companies worldwide"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and clear career progression paths";
    };
  ];

  const values = [
    "Innovation First",
    "Client Success",
    "Continuous Learning",
    "Diversity & Inclusion",
    "Ethical AI",;
    "Sustainability";
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Join the Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Technology</span>
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.2 

}}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Help us revolutionize industries with AI, quantum computing, and cutting-edge solutions. 
            Work with brilliant minds on projects that matter.
          </motion.p>
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.8,
  delay: 0.4 

}}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-white">200+ Team Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white">25+ Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Briefcase className="w-5 h-5 text-green-400" />
              <span className="text-white">50+ Open Positions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our comp culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold">{value}</h3>
              </motion.div>
            ))}
=======
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
        "Strong analytical and strategic thinking",;
        "Experience with agile methodologies",;
        "Excellent communication and leadership skills";
      ],;
      benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development"],;
      category: "product";
    };
  ];

  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length },;
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length },;
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length },;
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length },;
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length },;
    { id: 'data', name: 'Data & Analytics', count: jobListings.filter(job => job.category === 'data').length },;
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length };
  ];

  const filteredJobs = selectedCategory === 'all' ;
    ? jobListings ;
    : jobListings.filter(job => job.category === selectedCategory);

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure solutions that our clients can rely on"
    },
    {
      icon: Cloud,
      title: "Scalable Solutions",
      description: "Creating technology that grows with our clients' needs";
    },;
    {;
      icon: Code,;
      title: "Quality Code",;
      description: "Writing clean, maintainable, and efficient code";
    };
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",;
    "Flexible work arrangements and remote options",;
    "Professional development and learning opportunities",;
    "Modern equipment and tools",;
    "Regular team events and activities",;
    "Generous vacation and time-off policies",;
    "401(k) matching and financial planning";
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Innovation Team</title>
        <meta name = "description" content="Join Zion Tech Group's talented team of innovators, engineers, and technology experts. Explore exciting career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, technology jobs, AI engineer, cybersecurity specialist, cloud engineer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer more than just a job - we offer a mission, a community, and a chance to make history.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 

}}
                whileInView = {
  { opacity: 1,
  x: 0 

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.2 

}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
=======
        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.2 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Values & Culture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    animate = {
  { opacity: 1,
  y: 0 






}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to join our mission? Check out our current openings and find your perfect role.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 

}}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-400 mb-4">{position.description}</p>
=======
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.4 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Work at Zion Tech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial = {
  { opacity: 0,
  x: -20 






}}
                    animate = {
  { opacity: 1,
  x: 0 






}}
                    transition = {
  { duration: 0.6,
  delay: 0.05 * index 






}}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 






}}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Open Positions
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              
              {/* Job Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    animate = {
  { opacity: 1,
  y: 0 






}}
                    transition = {
  { duration: 0.6,
  delay: 0.1 * index 






}}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto group">
              Send General Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
=======
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.8 






}}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Submit Resume
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Recruiting
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
};

export default Careers;
