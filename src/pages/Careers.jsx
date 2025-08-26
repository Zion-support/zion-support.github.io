import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'AI & ML', 'Sales', 'Marketing', 'Operations', 'Design'];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & ML',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['PhD in Computer Science or related field', 'Expertise in TensorFlow, PyTorch', 'Experience with large language models'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies and best practices.',
      requirements: ['React, Node.js, Python', 'Cloud platforms (AWS/Azure)', 'Database design and optimization'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Operations',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Implement and maintain security protocols to protect client data and systems.',
      requirements: ['CISSP certification', 'Experience with SIEM tools', 'Incident response expertise'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Generate new business opportunities and build relationships with potential clients.',
      requirements: ['B2B sales experience', 'Tech industry knowledge', 'Strong communication skills'],
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our digital products and platforms.',
      requirements: ['Portfolio of web/mobile designs', 'Figma, Sketch proficiency', 'User research experience'],
      posted: '5 days ago'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Optimize our infrastructure and deployment processes for maximum efficiency and reliability.',
      requirements: ['Kubernetes, Docker expertise', 'CI/CD pipeline experience', 'Cloud infrastructure management'],
      posted: '2 weeks ago'
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Passion for Innovation',
      description: 'We love what we do and are constantly pushing the boundaries of what\'s possible.'
    },
    {
      icon: Zap,
      title: 'Fast-Paced Growth',
      description: 'Join a company that\'s growing rapidly and offers endless opportunities for advancement.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference in industries worldwide.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work arrangements'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional development programs'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented, passionate professionals from around the world'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Health insurance, 401(k), stock options, and more'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Help us shape the future of technology. Join a team of innovators, problem-solvers, and visionaries.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search for jobs, skills, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept 
                    ? 'bg-zion-cyan text-white' 
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-cyan hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Open Positions ({filteredJobs.length})
            </h2>
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtered by: {selectedDepartment}</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center space-x-6 text-sm text-zion-slate-light mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-zion-slate-light text-sm space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zion-slate-light">Posted {job.posted}</span>
                      <Link to={`/careers/${job.id}`}>
                        <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform flex items-center space-x-2">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <Briefcase className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No jobs found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work at Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-zion-slate-light text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Send Resume
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Learn About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
