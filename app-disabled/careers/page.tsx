import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Briefcase, Star } from 'lucide-react';

interface JobPosition {
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
}

const CareersPage: React.FC = () => {
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
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'research', name: 'Research' },
    { id: 'product', name: 'Product' },
    { id: 'data', name: 'Data' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'austin', name: 'Austin, TX' },
    { id: 'seattle', name: 'Seattle, WA' }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department.toLowerCase() === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location.toLowerCase().includes(selectedLocation);
    return matchesDepartment && matchesLocation;
  });

  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and emerging technologies. Explore open positions and start your career with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, tech jobs, remote work, engineering positions" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and work on the future of technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Careers
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build the future of technology with us. We're looking for passionate individuals to join our mission of advancing AI and emerging technologies.
          </p>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id} className="bg-slate-800">
                  {dept.name}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id} className="bg-slate-800">
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPositions.map((position) => (
                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-300">
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
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                        {position.requirements.length > 3 && (
                          <li className="text-sm text-gray-400">
                            +{position.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Posted {position.posted}</span>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">All Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Posted {position.posted}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {regularPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your filters or check back later for new opportunities</p>
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;