<<<<<<< HEAD
=======
'use client;

<<<<<<< HEAD
import React, { useState } from 'react;

import { Helmet } from 'react-helmet-async;

import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react;

interface JobPosition {}
  id: number;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

const PagePage: React.FC = () => {}
  title: string;

  department: string;

  location: string;

  type: string;

  experience: string;

  posted: string;

  description: string;

  requirements: string[];

  benefits: string[];

  featured: boolean;

}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

<<<<<<< HEAD
const CareersPage: React.FC = () => {
<<<<<<< HEAD
  const [selectedDepartment, setSelectedDepartment] = useState('all);

  const [selectedLocation, setSelectedLocation] = useState('all);
=======
const CareersPage: React.FC = () => {}
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

  const positions: JobPosition[] = [
    {}
      id: 1,
<<<<<<< HEAD
      title: 'Senior AI Engineer,
      department: 'Engineering,
      location: 'Remote,
      type: 'Full-time,
      experience: '5+ years,
      posted: '2 days ago,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.,
      requirements: [
        'Master\'s degree in Computer Science or related field,
        '5+ years experience in AI/ML development,
        'Expertise in Python, TensorFlow, PyTorch,
        'Experience with cloud platforms (AWS, Azure, GCP),
        'Strong problem-solving and communication skills
      ],
      benefits: [
        'Competitive salary and equity,
        'Comprehensive health insurance,
        'Flexible work arrangements,
        'Professional development budget,
        '401k with company matching
=======
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: []
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: true
    },
    {}
      id: 2,
<<<<<<< HEAD
      title: 'Quantum Computing Researcher,
      department: 'Research,
      location: 'San Francisco, CA,
      type: 'Full-time,
      experience: '3+ years,
      posted: '1 week ago,
      description: 'Research and develop quantum algorithms and applications for real-world business problems.,
      requirements: [
        'PhD in Physics, Computer Science, or related field,
        '3+ years quantum computing research experience,
        'Knowledge of quantum algorithms and programming,
        'Experience with quantum simulators and hardware,
        'Strong publication record
      ],
      benefits: [
        'Research autonomy and resources,
        'Conference and publication support,
        'Collaboration with top researchers,
        'Competitive salary and benefits,
        'State-of-the-art facilities
=======
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Research and develop quantum algorithms and applications for real-world business problems.',
      requirements: []
        'PhD in Physics, Computer Science, or related field',
        '3+ years quantum computing research experience',
        'Knowledge of quantum algorithms and programming',
        'Experience with quantum simulators and hardware',
        'Strong publication record'
      ],
      benefits: []
        'Research autonomy and resources',
        'Conference and publication support',
        'Collaboration with top researchers',
        'Competitive salary and benefits',
        'State-of-the-art facilities'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: true
    },
    {}
      id: 3,
<<<<<<< HEAD
      title: 'DevOps Engineer,
      department: 'Engineering,
      location: 'New York, NY,
      type: 'Full-time,
      experience: '3+ years,
      posted: '3 days ago,
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.,
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,
        '3+ years DevOps experience,
        'Expertise in Kubernetes, Docker, CI/CD,
        'Experience with cloud platforms,
        'Knowledge of monitoring and logging tools
      ],
      benefits: [
        'Competitive salary,
        'Health and dental insurance,
        'Flexible PTO,
        'Learning and development opportunities,
        'Team building events
=======
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.',
      requirements: []
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years DevOps experience',
        'Expertise in Kubernetes, Docker, CI/CD',
        'Experience with cloud platforms',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: []
        'Competitive salary',
        'Health and dental insurance',
        'Flexible PTO',
        'Learning and development opportunities',
        'Team building events'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: false
    },
    {}
      id: 4,
<<<<<<< HEAD
      title: 'AI Product Manager,
      department: 'Product,
      location: 'Remote,
      type: 'Full-time,
      experience: '4+ years,
      posted: '5 days ago,
      description: 'Drive product strategy and roadmap for our AI-powered solutions.,
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field,
        '4+ years product management experience,
        'Experience with AI/ML products,
        'Strong analytical and communication skills,
        'Experience with agile development
      ],
      benefits: [
        'Competitive salary and equity,
        'Comprehensive benefits package,
        'Remote work flexibility,
        'Professional development opportunities,
        'Stock options
=======
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: []
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Professional development opportunities',
        'Stock options'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: false
    },
    {}
      id: 5,
<<<<<<< HEAD
      title: 'Cybersecurity Specialist,
      department: 'Security,
      location: 'Austin, TX,
      type: 'Full-time,
      experience: '4+ years,
      posted: '1 week ago,
      description: 'Protect our systems and data with advanced cybersecurity measures and AI-powered threat detection.,
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field,
        '4+ years cybersecurity experience,
        'Certifications (CISSP, CISM, etc.),
        'Experience with security tools and frameworks,
        'Knowledge of AI security best practices
      ],
      benefits: [
        'Competitive salary,
        'Health and wellness benefits,
        'Professional certification support,
        'Flexible work schedule,
        'Security conference attendance
=======
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '1 week ago',
      description: 'Protect our systems and data with advanced cybersecurity measures and AI-powered threat detection.',
      requirements: []
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of AI security best practices'
      ],
      benefits: []
        'Competitive salary',
        'Health and wellness benefits',
        'Professional certification support',
        'Flexible work schedule',
        'Security conference attendance'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: false
    },
    {}
      id: 6,
<<<<<<< HEAD
      title: 'Data Scientist,
      department: 'Data,
      location: 'Seattle, WA,
      type: 'Full-time,
      experience: '3+ years,
      posted: '2 weeks ago,
      description: 'Extract insights from complex data sets to drive business decisions and improve AI models.,
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field,
        '3+ years data science experience,
        'Expertise in Python, R, SQL,
        'Experience with machine learning,
        'Strong statistical analysis skills
      ],
      benefits: [
        'Competitive salary and equity,
        'Comprehensive health insurance,
        'Data science conference attendance,
        'Access to cutting-edge tools,
        'Collaborative team environment
=======
      title: 'Data Scientist',
      department: 'Data',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '2 weeks ago',
      description: 'Extract insights from complex data sets to drive business decisions and improve AI models.',
      requirements: []
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with machine learning',
        'Strong statistical analysis skills'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Data science conference attendance',
        'Access to cutting-edge tools',
        'Collaborative team environment'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      featured: false
    }

  ];

  const departments = [;
    { id: 'all', name: 'All Departments },
    { id: 'Engineering', name: 'Engineering },
    { id: 'Research', name: 'Research },
    { id: 'Product', name: 'Product },
    { id: 'Security', name: 'Security },
    { id: 'Data', name: 'Data }

  ];

  const locations = [;
    { id: 'all', name: 'All Locations },
    { id: 'Remote', name: 'Remote },
    { id: 'San Francisco, CA', name: 'San Francisco, CA },
    { id: 'New York, NY', name: 'New York, NY },
    { id: 'Austin, TX', name: 'Austin, TX },
    { id: 'Seattle, WA', name: 'Seattle, WA }

  ];

<<<<<<< HEAD
  const filteredPositions = positions.filter(position => {;
    const matchesDepartment = selectedDepartment === 'all || position.department === selectedDepartment;;

    const matchesLocation = selectedLocation === 'all || position.location === selectedLocation;;

=======
  const filteredPositions = positions.filter(position => {}
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    return matchesDepartment && matchesLocation;

  });

<<<<<<< HEAD
  const featuredPositions = filteredPositions.filter(position => position.featured);;

  const regularPositions = filteredPositions.filter(position => !position.featured);;

      id: '1,
      title: 'Senior AI Engineer,
      department: 'AI Solutions',      location: 'Remote,
      type: 'Full-time,
      experience: '5+ years,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.,
      requirements: [
        '5+ years experience in AI/ML development,
        'Expertise in Python, TensorFlow, PyTorch,
        'Experience with cloud platforms (AWS, Azure, GCP),
        'Strong understanding of deep learning algorithms,
        Previous experience in production AI systems
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000,
        'Equity participation,
        'Flexible remote work,
        Professional development budget
=======
  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: []
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: []
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      posted: '2 days ago,
      featured: true});

},
<<<<<<< HEAD
    {
      id: '2,
      title: 'Cloud Architect,
      department: 'Cloud Services,
      location: 'New York, NY,
      type: 'Full-time,
      experience: '7+ years,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.,
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications]});)
=======
    {}
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']});;)
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
}

  ];

  const benefits = [;;

    'Competitive salary and equity,
    'Comprehensive health insurance,
    'Flexible work arrangements,
    'Professional development budget,
    'Top-tier equipment and tools,
    'Team building events,
    'Career growth opportunities,
    '401k matching program,
    'Unlimited PTO,
    Mental health support
  ];

<<<<<<< HEAD
  const values = [;;

    {
=======
  const values = [
    {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Lightbulb,
      title: 'Innovation,
      description: 'We push the boundaries of what\'s possible with technology,
      color: 'text-yellow-400});)
},
    {}
      icon: Users,
      title: 'Collaboration,
      description: 'We work together to achieve extraordinary results,
      color: 'text-blue-400});)
},
    {}
      icon: Target,
      title: 'Excellence,
      description: 'We strive for the highest quality in everything we do,
      color: 'text-green-400});)
},
    {}
      icon: Heart,
      title: 'Integrity,
      description: 'We build trust through transparency and honesty,
      color: 'text-red-400});)
}

  ];

<<<<<<< HEAD
  const culture = [;;

    {
      stat: '98%,
      label: 'Employee Satisfaction,
      description: 'Our team loves working here});)
},
    {
      stat: '50+,
      label: 'Team Members,
      description: 'Growing team of experts});)
},
    {
      stat: '15+,
      label: 'Countries,
      description: 'Global remote team});)
},
    {
      stat: '4.9/5,
      label: 'Glassdoor Rating,
      description: 'Highly rated workplace});)
=======
  const culture = [
    {}
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'});;)
},
    {}
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'});;)
},
    {}
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'});;)
},
    {}
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'});;)
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
}

  ];

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  return (

    <>
      <Helmet>
<<<<<<< HEAD
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and emerging technologies. Explore open positions and start your career with us. />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, tech jobs, remote work, engineering positions />
        <meta property="og:title" content="Careers - Zion Tech Group />
        <meta property="og:description" content="Join our team and work on the future of technology />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/careers />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Build the future of technology with us. Were looking for passionate individuals to join our mission of advancing AI and emerging technologies.
            </p>
            
            {/* Filter Controls */}

            <div className="flex flex-wrap justify-center gap-4 mb-8>
              <select
                value={selectedDepartment}

                onChange={(e) => setSelectedDepartment(e.target.value)}

                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
              >
<<<<<<< HEAD
                {departments.map((dept) => (

                  <option key={dept.id} value={dept.id} className="bg-slate-800>
=======
                {departments.map((dept) => (}
                  <option key={dept.id} value={dept.id} className="bg-slate-800">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                    {dept.name}

                  </option>
                ))}

              </select>
              
              <select
                value={selectedLocation}

                onChange={(e) => setSelectedLocation(e.target.value)}

                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
              >
<<<<<<< HEAD
                {locations.map((loc) => (

                  <option key={loc.id} value={loc.id} className="bg-slate-800>
=======
                {locations.map((loc) => (}
                  <option key={loc.id} value={loc.id} className="bg-slate-800">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                    {loc.name}

                  </option>
                ))}

              </select>
            </div>
          </div>
        </section>
  return (<div>
        <title>Careers - Zion Tech Group | Join Our Team<
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture. 
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        <section className="relative py-20 px-4 overflow-hidden>)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }}

          <div className="relative max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6>
              Join Our Team
            <
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            <
          <
        <

        {/* Featured Positions */}
<<<<<<< HEAD

        {featuredPositions.length > 0 && (

          <section className="py-16 px-4>
            <div className="max-w-7xl mx-auto>
              <h2 className="text-3xl font-bold text-white mb-12 text-center>Featured Positions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>
                {featuredPositions.map((position) => (

                  <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-300 group>
                    <div className="flex items-start justify-between mb-6>
=======
        {featuredPositions.length > 0 && (}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Positions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPositions.map((position) => (}
                  <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors>
                          {position.title}

                        </h3>
                        <p className="text-cyan-400 font-medium>{position.department}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium>
                        Featured
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed>
                      {position.description}

                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400>
                      <div className="flex items-center gap-1>
                        <MapPin className="w-4 h-4 />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <Briefcase className="w-4 h-4 />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <GraduationCap className="w-4 h-4 />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <Users className="w-4 h-4 />
                        <span>Posted {position.posted}</span>
                      </div>
                    </div>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 />
                    </button>
                  </div>
                ))}              </p>
            </div>

            <div></div>
<<<<<<< HEAD
              {values.map((value, index) => (

=======
              {values.map((value, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <div></div>
                  <div></div>
                    <value.icon className="w-8 h-8 />
                  </div>
                  <h></h>{value.title}</h3>
                  <p className="text-gray-300>{value.description}</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Expert Solutions</h3>
                <p className="text-gray-300>Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>24/7 Support</h3>
                <p className="text-gray-300>Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Custom Solutions</h3>
                <p className="text-gray-300>Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </section>
        )}

        {/* All Positions */}
<<<<<<< HEAD

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>All Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>
              {regularPositions.map((position) => (

                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group>
                  <div className="mb-4>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors>
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPositions.map((position) => (}
                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                      {position.title}

                    </h3>
                    <p className="text-cyan-400 font-medium text-sm>{position.department}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed>
                    {position.description}

                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400>
                    <div className="flex items-center gap-1>
                      <MapPin className="w-3 h-3 />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1>
                      <Briefcase className="w-3 h-3 />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-1>
                      <Users className="w-3 h-3 />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-medium py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm>
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 />
                  </button>
                </div>
              ))}

            </div>

<<<<<<< HEAD
            {regularPositions.length === 0 && (

              <div className="text-center py-16>
                <div className="text-6xl mb-4>🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4>No positions found</h3>
                <p className="text-gray-300 mb-8>Try adjusting your filters or check back later for new opportunities</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all);

                    setSelectedLocation('all);

=======
            {regularPositions.length === 0 && (}
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your filters or check back later for new opportunities</p>
                <button
                  onClick={() => {}
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  }}

                  className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Benefits Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Star className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Cutting-Edge Technology</h3>
                <p className="text-gray-300>Work with the latest AI, quantum computing, and emerging technologies that shape the future.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Users className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Collaborative Culture</h3>
                <p className="text-gray-300>Join a diverse team of experts who value collaboration, innovation, and continuous learning.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <CheckCircle className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Comprehensive Benefits</h3>
                <p className="text-gray-300>Enjoy competitive compensation, health benefits, flexible work arrangements, and professional development opportunities.</p>
              </div>            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
                Dont See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                We're always looking for talented individuals. Send us your resume and let us know how youd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors>
                  Submit Your Resume
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors>
                  Learn About Our Culture
                </button>                <div
                  key={position.id}
<<<<<<< HEAD

                  className={bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20
                  } hover:border-purple-400 transition-all duration-300 group}

                >                <div></div>
                  {position.featured && (

=======
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${}
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                <div></div>
                  {position.featured && (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current />
                      <spa></spa>Featured Position</span>
                    </div>
                  );

                  <div className="flex items-start justify-between mb-4>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors>
                        {position.title}

                      </h3>
                      <p className="text-cyan-400 font-medium>{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full>
                    <span></span>                      {position.type}

                    <
                  <

<<<<<<< HEAD
                  <p className="text-gray-300 mb-6>{position.description}</p>
                      {position.requirements.length > 3 && (

                        <li className="text-sm text-gray-400>
=======
                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" 
                      <span>{position.location}<
                    <
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <spa></spa>{position.experience}</span>
                    </div>
                    <div></div>
                      <Users className="w-4 h-4" />
                      <spa></spa>Posted {position.posted}</span>
                    </div>
                  </div>

                          {req}
                        <)
                      ))}
                      {position.requirements.length > 3 && (}
                        <li className="text-sm text-gray-400">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}

                    </ul>
                  </div>

                  <div className="flex items-center justify-between>
                    <div className="text-sm text-gray-400>
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105>
                      Apply Now
                      <ArrowRight className="w-4 h-4 />
                    </button>
                  </div>
                </div>
              ))}

            </div>
                </div>
              ))}

            </div>  ));)
=======
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

export default CareersPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
