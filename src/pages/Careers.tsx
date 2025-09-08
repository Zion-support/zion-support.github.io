// Removed unused: import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, DollarSign, Users, Brain, Shield, Cloud, Code, ArrowRight, CheckCircle } from 'lucide-react';


export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our AI team to build cutting-edge machine learning models and algorithms that power our marketplace recommendations.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript, Tailwind CSS", "Performance optimization skills"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Drive product strategy and execution for our marketplace platform.",
      requirements: ["5+ years PM experience", "Marketplace/B2B experience", "Data-driven decision making"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure experience", "Kubernetes, Docker", "CI/CD expertise"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Develop and execute marketing campaigns to grow our user base and brand awareness.",
      requirements: ["3+ years marketing experience", "Digital marketing skills", "Analytics and reporting"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Ensure customer satisfaction and help users maximize value from our platform.",
      requirements: ["3+ years CS experience", "Strong communication skills", "Problem-solving mindset"],
      posted: "4 days ago"
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
                </button></div>
            </motion.div></div>
        </section>

        {/* Comp Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Values & Culture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" /></div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div></div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Work at Zion Tech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div></div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.department}</p></div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {job.type}
                        </span></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </div></div>
                    
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul></div>
                    
                    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div></div>
        </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <Card className="bg-zion-blue-dark border-zion-cyan/30 text-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">Don't See the Right Fit?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-zion-purple hover:bg-zion-purple/80 text-white">
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light max-w-2xl mx-auto">
              <p className="text-zion-slate-light mb-4">
                Questions about working at Zion Tech Group? We'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Submit Resume
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Recruiting
                </button>              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work at Zion?</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and 
                technology are accessed, shared, and implemented globally.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our team is passionate about democratizing access to cutting-edge technology and connecting 
                talented individuals with meaningful opportunities. We value innovation, collaboration, and 
                impact in everything we do.
              </p>
              <p className="text-zion-slate-light text-lg">
                If you're excited about shaping the future of AI and technology while working in a dynamic, 
                remote-first environment with a mission-driven team, we'd love to meet you.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
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
                          <Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                            Apply Now
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
              Send us your resume and let's start a conversation.
            </p>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              Send General Application
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Careers;