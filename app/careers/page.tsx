'use client';
import { Link } from 'react-router-dom';
import {}
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Filter,
  Search,
  Calendar,
  Award,
  Brain,
  Code,
  Shield,
  Cloud,
  Target,
  BarChart,
  MessageSquare,
  Settings,
  FileText,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Eye,
  Sparkles,
  TrendingUp,
  Lock,
  Database,
  Smartphone,
  Globe,
  Zap,
  Activity,
  PieChart,
  TrendingDown,
  Compass,
  Navigation;
} from 'lucide-react';

export default function CareersPage() {}
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { name: 'all', label: 'All Departments', count: 24 },
    { name: 'engineering', label: 'Engineering', count: 12 },
    { name: 'ai-research', label: 'AI Research', count: 6 },
    { name: 'data-science', label: 'Data Science', count: 4 },
    { name: 'product', label: 'Product', count: 2 }
  ];

  const locations = [
    { name: 'all', label: 'All Locations', count: 24 },
    { name: 'remote', label: 'Remote', count: 15 },
    { name: 'middletown-de', label: 'Middletown, DE', count: 6 },
    { name: 'san-francisco-ca', label: 'San Francisco, CA', count: 3 }
  ];

  const jobTypes = [
    { name: 'all', label: 'All Types', count: 24 },
    { name: 'full-time', label: 'Full-time', count: 18 },
    { name: 'part-time', label: 'Part-time', count: 3 },
    { name: 'contract', label: 'Contract', count: 3 }
  ];

  const openPositions = [
<<<<<<< HEAD
    {
      id: 1;
      title: 'Senior AI Engineer'
      department: 'engineering'
      location: 'remote'
      type: 'full-time'
      level: 'Senior'
=======
    {}
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      level: 'Senior',
>>>>>>> origin/merge-error-fixes
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [,
        '5+ years experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      benefits: [,
        'Competitive salary + equity',
        'Health, dental, vision insurance',
        '401 k with company matching',
        'Flexible work arrangements'
      ],
      postedDate: '2024-01-15',
      salary: '$120,000 - $180,000',
      experience: '5+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker']
    },
<<<<<<< HEAD
    {
      id: 2;
      title: 'AI Research Scientist'
      department: 'ai-research'
      location: 'san-francisco-ca'
      type: 'full-time'
      level: 'Senior'
=======
    {}
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'san-francisco-ca',
      type: 'full-time',
      level: 'Senior',
>>>>>>> origin/merge-error-fixes
      description: 'Conduct groundbreaking research in artificial intelligence and machine learning.',
      requirements: [,
        'PhD in AI/ML or related field',
        'Strong publication record',
        'Experience with deep learning',
        'Knowledge of quantum computing'
      ],
      benefits: [,
        'Research budget and resources',
        'Conference attendance',
        'Patent filing support',
        'Collaboration opportunities'
      ],
      postedDate: '2024-01-12',
      salary: '$150,000 - $220,000',
      experience: '3+ years',
      skills: ['Research', 'Deep Learning', 'Quantum Computing', 'Publications']
    },
<<<<<<< HEAD
    {
      id: 3;
      title: 'Data Scientist'
      department: 'data-science'
      location: 'remote'
      type: 'full-time'
      level: 'Mid'
=======
    {}
      id: 3,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'remote',
      type: 'full-time',
      level: 'Mid',
>>>>>>> origin/merge-error-fixes
      description: 'Analyze complex data sets and build predictive models for business insights.',
      requirements: [,
        '3+ years data science experience',
        'Strong statistical background',
        'Python/R programming skills',
        'Experience with big data tools'
      ],
      benefits: [,
        'Learning and development budget',
        'Mentorship program',
        'Career growth opportunities',
        'Work-life balance'
      ],
      postedDate: '2024-01-10',
      salary: '$90,000 - $130,000',
      experience: '3+ years',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics']
    },
<<<<<<< HEAD
    {
      id: 4;
      title: 'Product Manager'
      department: 'product'
      location: 'middletown-de'
      type: 'full-time'
      level: 'Senior'
=======
    {}
      id: 4,
      title: 'Product Manager',
      department: 'product',
      location: 'middletown-de',
      type: 'full-time',
      level: 'Senior',
>>>>>>> origin/merge-error-fixes
      description: 'Lead product strategy and development for AI-powered solutions.',
      requirements: [,
        '5+ years product management',
        'Experience with AI products',
        'Strong analytical skills',
        'MBA preferred'
      ],
      benefits: [,
        'Product ownership',
        'Cross-functional collaboration',
        'Customer interaction',
        'Strategic impact'
      ],
      postedDate: '2024-01-08',
      salary: '$110,000 - $160,000',
      experience: '5+ years',
      skills: ['Product Strategy', 'AI Products', 'Analytics', 'Leadership']
    },
<<<<<<< HEAD
    {
      id: 5;
      title: 'DevOps Engineer'
      department: 'engineering'
      location: 'remote'
      type: 'full-time'
      level: 'Mid'
=======
    {}
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      level: 'Mid',
>>>>>>> origin/merge-error-fixes
      description: 'Build and maintain scalable cloud infrastructure for AI applications.',
      requirements: [,
        '3+ years DevOps experience',
        'AWS/Azure/GCP expertise',
        'Kubernetes and Docker',
        'Infrastructure as Code'
      ],
      benefits: [,
        'Cutting-edge technology',
        'Scalable systems',
        'Automation focus',
        'Team collaboration'
      ],
      postedDate: '2024-01-05',
      salary: '$85,000 - $125,000',
      experience: '3+ years',
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD']
    },
<<<<<<< HEAD
    {
      id: 6;
      title: 'UX Designer'
      department: 'product'
      location: 'san-francisco-ca'
      type: 'full-time'
      level: 'Mid'
=======
    {}
      id: 6,
      title: 'UX Designer',
      department: 'product',
      location: 'san-francisco-ca',
      type: 'full-time',
      level: 'Mid',
>>>>>>> origin/merge-error-fixes
      description: 'Design intuitive user experiences for AI-powered applications.',
      requirements: [,
        '3+ years UX design experience',
        'Portfolio of AI/ML products',
        'Figma and prototyping skills',
        'User research experience'
      ],
      benefits: [,
        'Creative freedom',
        'User impact',
        'Design system ownership',
        'Cross-team collaboration'
      ],
      postedDate: '2024-01-03',
      salary: '$80,000 - $120,000',
      experience: '3+ years',
      skills: ['Figma', 'User Research', 'Prototyping', 'AI/ML UX']
    }
  ];

  const filteredPositions = openPositions.filter(position => {)}
    const departmentMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === selectedLocation;
    const typeMatch = selectedType === 'all' || position.type === selectedType;
    return departmentMatch && locationMatch && typeMatch;

  const benefits = [
<<<<<<< HEAD
    {
      icon: Award;
=======
    {}
      icon: Award,
>>>>>>> origin/merge-error-fixes
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity participation and performance bonuses',
    },
<<<<<<< HEAD
    {
      icon: Heart;
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with mental health support'
    },
    {
      icon: Home;
=======
    {}
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with mental health support'
    },
    {}
      icon: Home,
>>>>>>> origin/merge-error-fixes
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO',
    },
<<<<<<< HEAD
    {
      icon: Brain;
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs'
    },
    {
      icon: Users;
=======
    {}
      icon: Brain,
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs'
    },
    {}
      icon: Users,
>>>>>>> origin/merge-error-fixes
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and company retreats',
    },
<<<<<<< HEAD
    {
      icon: Globe;
=======
    {}
      icon: Globe,
>>>>>>> origin/merge-error-fixes
      title: 'Global Impact',
      description: 'Work on projects that make a real difference in the world',
    }
  ];

  const culture = [
    {}
      title: 'Innovation First',
      description: 'We encourage experimentation and reward bold ideas that push boundaries',
      icon: Sparkles;
    },
    {}
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together',
      icon: Users;
    },
<<<<<<< HEAD
    {
      title: 'Growth Mindset',)
      description: 'We invest in our people\'s development and provide opportunities to learn',)
      icon: TrendingUp;,)
    })
    {
      title: 'Work-Life Balance'),
      description: 'We understand that great work comes from well-rested, happy people')
      icon: Clock;
    }
  ];
<<<<<<< HEAD
)
    const getDepartmentIcon = (department: string) => {
    const icons = {
=======
    {}
      title: 'Growth Mindset',
      description: 'We invest in our people\'s development and provide opportunities to learn',
      icon: TrendingUp
    },
    {}
      title: 'Work-Life Balance',
      description: 'We understand that great work comes from well-rested, happy people',
      icon: Clock
    }
  ];

  const getDepartmentIcon = (department: string) => {}
    const icons = {}
>>>>>>> origin/merge-error-fixes
      engineering: Code,
=======

  const getDepartmentIcon = (department: string) => {,
    const icons = {,
      engineering: Code;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      'ai-research': Brain,
      'data-science': BarChart,
      product: Target;
    };
    return icons[department as keyof typeof icons] || Briefcase;
  };

<<<<<<< HEAD
  const getDepartmentColor = (department: string) => {,
    const colors = {,
=======
  const getDepartmentColor = (department: string) => {}
    const colors = {}
>>>>>>> origin/merge-error-fixes
      engineering: 'text-blue-400',
      'ai-research': 'text-purple-400',
      'data-science': 'text-green-400',
      product: 'text-orange-400',
    };
    return colors[department as keyof typeof colors] || 'text-gray-400';
  };

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Join Our Team</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Build the future of AI with us. Join a team of passionate innovators</p>
              working on cutting-edge technology that transforms businesses worldwide.</p>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Join Our Team;
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the future of AI with us. Join a team of passionate innovators;
              working on cutting-edge technology that transforms businesses worldwide.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">100+ Open Positions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Home className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Remote-First</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Top Benefits</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>),
),
      {/* Filters */}
      <section className="py-8">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md: flex-row gap-4 mb-8">
              <div className="flex-1 relative">
=======
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
              <div className="flex-1 relative"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex gap-2 overflow-x-auto">{departments.map((dept) => (<button
=======
              </div>
<<<<<<< HEAD
              <div className="flex gap-2 overflow-x-auto">,
                {departments.map((dept) => (,
                  <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
              <div className="flex gap-2 overflow-x-auto">{departments.map((dept) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    key={dept.name}
                    onClick={() =>setSelectedDepartment(dept.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedDepartment === dept.name;
                        ? 'bg-cyan-500 text-white'}
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
=======
              <div className="flex gap-2 overflow-x-auto">
                {departments.map((dept) => (}
                  <button
                    key={dept.name}
                    onClick={() => setSelectedDepartment(dept.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                      selectedDepartment === dept.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
>>>>>>> origin/merge-error-fixes
                    }`}
                  ></button>
                    {dept.label} ({dept.count})</button>
                  </button>
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="flex gap-2 overflow-x-auto">{locations.map((location) => (<button
=======
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
<<<<<<< HEAD
              {locations.map((location) => (
                <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
              <div className="flex gap-2 overflow-x-auto">{locations.map((location) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  key={location.name}
                  onClick={() =>setSelectedLocation(location.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedLocation === location.name;
                      ? 'bg-purple-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
=======
              {locations.map((location) => (}
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                    selectedLocation === location.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
>>>>>>> origin/merge-error-fixes
                  }`}
                ></button>
                  {location.label} ({location.count})</button>
                </button>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex gap-2 overflow-x-auto mt-2">{jobTypes.map((type) => (<button
=======
            </div>
            <div className="flex gap-2 overflow-x-auto mt-2">
<<<<<<< HEAD
              {jobTypes.map((type) => (
                <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
            <div className="flex gap-2 overflow-x-auto mt-2">{jobTypes.map((type) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  key={type.name}
                  onClick={() =>setSelectedType(type.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedType === type.name;
                      ? 'bg-green-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
=======
              {jobTypes.map((type) => (}
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                    selectedType === type.name
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
>>>>>>> origin/merge-error-fixes
                  }`}
                ></button>
                  {type.label} ({type.count})</button>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions<div className="space-y-6">{filteredPositions.map((position) => (</div>
=======
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6">
              {filteredPositions.map((position) => (}
>>>>>>> origin/merge-error-fixes
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{position.title}<span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">{position.level}</span>
=======
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">,
                    <div className="flex-1">,
                      <div className="flex items-center space-x-3 mb-2">,
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                          {position.level}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2><div className="space-y-6">{filteredPositions.map((position) => (</div>
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"></div>
                    <div className="flex-1"></div>
                      <div className="flex items-center space-x-3 mb-2"></div>
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3><span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">{position.level}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3"></div>
                        <div className="flex items-center space-x-1"></div>
                          <MapPin className="w-4 h-4" />
                          <span className="capitalize">{position.location.replace('-', ', ')}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Clock className="w-4 h-4" />
                          <span className="capitalize">{position.type.replace('-', ' ')}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Calendar className="w-4 h-4" />
                          <span>Posted {new Date(position.postedDate).toLocaleDateString()}</span><p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="lg:ml-6 lg:text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{position.salary}<div className="text-gray-400 text-sm">{position.experience}</div>
=======
                    <div className="lg:ml-6 lg:text-right"></div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{position.salary}</div><div className="text-gray-400 text-sm">{position.experience}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"></div>
                    <div></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:<ul className="space-y-1">{position.requirements.slice(0, 3).map((req, index) => (</ul>
=======
                    <div className="lg: ml-6 lg:text-right">,
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{position.salary}</div>
                      <div className="text-gray-400 text-sm">{position.experience}</div>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">,
                    <div>,
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h4>,
                      <ul className="space-y-1">,
                        {position.requirements.slice(0, 3).map((req, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (}
>>>>>>> origin/merge-error-fixes
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{req}</CheckCircle>
                          </CheckCircle>
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:<div className="flex flex-wrap gap-2">{position.skills.map((skill, index) => (<span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{skill}</span>
=======
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills: </h4>,
                      <div className="flex flex-wrap gap-2">,
                        {position.skills.map((skill, index) => (
=======
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, index) => (}
>>>>>>> origin/merge-error-fixes
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {skill}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
                    <div></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:<div className="flex flex-wrap gap-2">{position.skills.map((skill, index) => (</div><span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{skill}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="flex flex-col sm: flex-row gap-4">,
                    <Link;
=======
                  <div className="flex flex-col sm:flex-row gap-4"></div>
                    <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      to={`/careers/${position.id}`}
<<<<<<< HEAD
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-center"
                    >Apply Now</Lin>
                      <ArrowRight className="w-4 h-4 ml-2 inline" /></ArrowRigh>
                    <button className="border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all">Save Job</butto>
                    </button>
                  </div>
                </div>
=======
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover: from-cyan-600 hover:to-purple-700 transition-all text-center"
                    >
                      Apply Now;
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                    <button className="border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all">
                      Save Job;
                    </button>,
                  </div>,
                </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Us?<p className="text-lg text-gray-300 max-w-3xl mx-auto">We offer competitive benefits and a culture that values innovation, growth, and work-life balance<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
=======
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (}
>>>>>>> origin/merge-error-fixes
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}<p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">,
              Why Work With Us?,
            </h2>,
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">,
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance;
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <benefit.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Us?</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We offer competitive benefits and a culture that values innovation, growth, and work-life balance</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Culture<p className="text-lg text-gray-300 max-w-3xl mx-auto">The values and principles that shape how we work together<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{culture.map((item, index) => (</div>
=======
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The values and principles that shape how we work together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (}
>>>>>>> origin/merge-error-fixes
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}<p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Culture;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The values and principles that shape how we work together;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {culture.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <item.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Culture</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">The values and principles that shape how we work together</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{culture.map((item, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
<<<<<<< HEAD
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't See the Right Role?<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll</p>
=======
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            reach out when we have a position that matches your skills.</p>
=======
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll;
            reach out when we have a position that matches your skills.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
<<<<<<< HEAD
              <Mail className="w-5 h-5 mr-2" >Send Your Resume</Mail>
            </Mail>
            <Link
              to="/team"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></Lin>
              <Users className="w-5 h-5 mr-2" >Meet Our Team</User>
            </Users>
=======
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume;
            </Link>
            <Link;
              to="/team"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team;
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </div>
        </div>
      </section>,
    </div>,
  );
};

export default CareersPage;