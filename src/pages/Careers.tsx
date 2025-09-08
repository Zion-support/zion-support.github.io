import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Award, CheckCircle, Globe, TrendingUp, Lightbulb, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      title: 'Quantum Computing Researcher',
      location: 'Remote',
      type: 'Full-time',
      department: 'Research',
      description: 'Research and develop quantum algorithms and quantum computing solutions',
      requirements: ['PhD in Physics/Computer Science', 'Quantum computing experience', 'Research publication record']
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build and maintain cloud infrastructure and CI/CD pipelines',
      requirements: ['3+ years DevOps experience', 'AWS/Azure/GCP', 'Docker, Kubernetes, Terraform']
    },
    {
      title: 'Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description: 'Design enterprise solutions and guide clients through implementation',
      requirements: ['7+ years enterprise experience', 'Strong technical background', 'Excellent communication skills']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities in cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in an inclusive and supportive environment'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health, dental, vision, and retirement benefits'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and work-life balance'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Focus',
      description: 'Work on the latest AI, quantum computing, and emerging technologies'
    },
    {
      icon: Lightbulb,
      title: 'Creative Freedom',
      description: 'Autonomy to explore new ideas and push technological boundaries'
    }
  ];

  const values = [
    'Innovation First',
    'Excellence in Everything',
    'Collaboration & Teamwork',
    'Continuous Learning',
    'Customer Success',
    'Integrity & Trust'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join our team of innovators and help shape the future of AI, quantum computing, 
              and emerging technologies that will transform industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn About Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide our work and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg p-4 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <span className="text-zion-slate-light text-sm font-medium">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover the benefits of being part of our innovative team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">{position.title}</h3>
                  <span className="px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-zion-slate-light">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{position.department}</span>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Submit Resume
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Careers;
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            {openPositions.map((position, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="lg:ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us shape the future of technology. Join a team of innovators, 
              researchers, and industry experts committed to transforming businesses 
              through cutting-edge AI solutions.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, departments, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>





      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple steps to join our team
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our hiring process is designed to be transparent, efficient, and focused on finding 
              the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<<<<<<< HEAD
            );
          })}
=======
<<<<<<< HEAD
            {[
              { step: '1', title: 'Apply', description: 'Submit your application and resume' },
              { step: '2', title: 'Review', description: 'Our team reviews your application' },
              { step: '3', title: 'Interview', description: 'Technical and cultural fit interviews' },
              { step: '4', title: 'Offer', description: 'Welcome to the team!' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
=======
            );
          })}
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        </div>
      </div>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Submit Resume
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and 
              let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <Card key={position.id} className={`bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors ${position.featured ? 'ring-2 ring-zion-cyan' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-white">{position.title}</CardTitle>
                        {position.featured && (
                          <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {position.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
                      <a href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}>
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
              <p className="text-zion-slate-light">
                Submit your application with resume and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
              <p className="text-zion-slate-light">
                Our team reviews your application within 48 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              <p className="text-zion-slate-light">
                Technical and cultural fit interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Offer</h3>
              <p className="text-zion-slate-light">
                Welcome to the Zion Tech Group team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <a href="mailto:careers@ziontechgroup.com?subject=General Application">
                Send General Application
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
export default Careers;
=======
export default Careers;
=======
export default Careers;
=======
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application</h3>
              <p className="text-zion-slate-light">Submit your resume and cover letter through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Screening</h3>
              <p className="text-zion-slate-light">Initial review and phone screening with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview</h3>
              <p className="text-zion-slate-light">Technical assessment and team interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Offer</h3>
              <p className="text-zion-slate-light">Welcome to the Zion Tech Group family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue to-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join us in building the future of technology. Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="#open-positions">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Browse Openings
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default CareersPage;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
