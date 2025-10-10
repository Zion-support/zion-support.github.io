'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';
interface JobPosition {
}
}
  id: number;
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
};
const CareersPage: React.FC = () => {
};
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const positions: JobPosition[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Research and develop quantum algorithms and applications for real-world business problems.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years quantum computing research experience',
        'Knowledge of quantum algorithms and programming',
        'Experience with quantum simulators and hardware',
        'Strong publication record'
      ],
      benefits: [
        'Research autonomy and resources',
        'Conference and publication support',
        'Collaboration with top researchers',
        'Competitive salary and benefits',
        'State-of-the-art facilities'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years DevOps experience',
        'Expertise in Kubernetes, Docker, CI/CD',
        'Experience with cloud platforms',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Flexible PTO',
        'Learning and development opportunities',
        'Team building events'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Professional development opportunities',
        'Stock options'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '1 week ago',
      description: 'Protect our systems and data with advanced cybersecurity measures and AI-powered threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of AI security best practices'
      ],
      benefits: [
        'Competitive salary',
        'Health and wellness benefits',
        'Professional certification support',
        'Flexible work schedule',
        'Security conference attendance'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '2 weeks ago',
      description: 'Extract insights from complex data sets to drive business decisions and improve AI models.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with machine learning',
        'Strong statistical analysis skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Data science conference attendance',
        'Access to cutting-edge tools',
        'Collaborative team environment'
      ],
      featured: false
    };
  ];
  const departments = [
[
        { id: 'all', name: 'All Departments' },
        { id: 'Engineering', name: 'Engineering' },
        { id: 'Research', name: 'Research' },
        { id: 'Product', name: 'Product' },
        { id: 'Security', name: 'Security' },
        { id: 'Data', name: 'Data' };
  ];
  const locations = [
[
        { id: 'all', name: 'All Locations' },
        { id: 'Remote', name: 'Remote' },
        { id: 'San Francisco, CA', name: 'San Francisco, CA' },
        { id: 'New York, NY', name: 'New York, NY' },
        { id: 'Austin, TX', name: 'Austin, TX' },
        { id: 'Seattle, WA', name: 'Seattle, WA' };
  ];
  const filteredPositions = positions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });
  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true});
},
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']});;)
};
  ];
  const benefits = [
];
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401k matching program',
    'Unlimited PTO',
    'Mental health support'
  ];
  const values = [
[
        {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
      color: 'text-yellow-400'});;)
},
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      color: 'text-blue-400'});;)
},
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      color: 'text-green-400'});;)
},
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      color: 'text-red-400'});;)
};
  ];
  const culture = [
[
        {
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'});;)
},
    {
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'});;)
},
    {
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'});;)
},
    {
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'});;)
};
  ];
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and emerging technologies. Explore open positions and start your career with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, tech jobs, remote work, engineering positions" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and work on the future of technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */};
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of technology with us. We're looking for passionate individuals to join our mission of advancing AI and emerging technologies.
            </p>
            {/* Filter Controls */};
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <select
                value={selectedDepartment};
                onChange={(e) => setSelectedDepartment(e.target.value)};
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id} className="bg-slate-800">
                    {dept.name};
                  </option>
                ))};
              </select>
              <select
                value={selectedLocation};
                onChange={(e) => setSelectedLocation(e.target.value)};
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id} className="bg-slate-800">
                    {loc.name};
                  </option>
                ))};
              </select>
            </div>
          </div>
        </section>
                  {position.featured && (
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <spa></spa>Featured Position</span>
                    </div>
                  );
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {position.title};
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {position.type};
                    <
                  <
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
                          {req};
                        <)
                      ))};
                      {position.requirements.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )};
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))};
            </div>
};
export default CareersPage;
