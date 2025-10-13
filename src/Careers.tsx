import React from 'react';';
import { motion } from 'framer-motion';';
import { Link } from 'react-router-dom';';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";";
export default function Careers() {;
const [activeDepartment, setActiveDepartment] = useState('all');';
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'all','
      name: 'All Departments','
      icon: Users,
      color: 'from-purple-500 to-pink-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'ai-research','
      name: 'AI & Research','
      icon: Brain,
      color: 'from-purple-500 to-pink-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'engineering','
      name: 'Engineering','
      icon: Code,
      color: 'from-blue-500 to-cyan-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cybersecurity','
      name: 'Cybersecurity','
      icon: Shield,
      color: 'from-red-500 to-pink-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'quantum','
      name: 'Quantum Technology','
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cloud','
      name: 'Cloud & Infrastructure','
      icon: Cloud,
      color: 'from-green-500 to-emerald-500''
    }
import { Link } from 'react-router-dom';';
import { Link } from 'react-router-dom';';
import React, { useState } from 'react';';
import { motion } from 'framer-motion';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Briefcase,
  Users,
  Heart,
  Zap,
  Globe,;
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Search,
  MapPin,
  Briefcase,
  Clock,
  Users,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Heart,
  Globe,
  Building2,
  GraduationCap,
  Award,
  Coffee,
  Wifi,
  Monitor,
  Smartphone,
  Palette,
  Dumbbell,
  BookOpen,
  Users2,
  Rocket,
  Target,
  Lightbulb,
  CheckCircle,
  Code,
  Settings,
  Eye
} from 'lucide-react';';
export default function Careers() {;
const [searchQuery, setSearchQuery] = useState('');';
const [selectedDepartment, setSelectedDepartment] = useState('all');';
const [selectedLocation, setSelectedLocation] = useState('all');';
const [selectedType, setSelectedType] = useState('all');';
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Departments', count: 24, icon: Building2 },'
    { id: 'engineering', name: 'Engineering', count: 12, icon: Code },'
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6, icon: Brain },'
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4, icon: Shield },'
    { id: 'quantum', name: 'Quantum Technology', count: 3, icon: Zap },'
    { id: 'sales', name: 'Sales & Business Development', count: 5, icon: Target },'
    { id: 'marketing', name: 'Marketing', count: 3, icon: Lightbulb },'
    { id: 'operations', name: 'Operations', count: 2, icon: Settings }'
  ];
const locations = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Locations', count: 24 },'
    { id: 'remote', name: 'Remote', count: 18 },'
    { id: 'middletown-de', name: 'Middletown, DE', count: 4 },'
    { id: 'new-york', name: 'New York, NY', count: 2 }'
  ];
const jobTypes = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Types', count: 24 },'
    { id: 'full-time', name: 'Full-time', count: 20 },'
    { id: 'part-time', name: 'Part-time', count: 2 },'
    { id: 'contract', name: 'Contract', count: 2 }';
import { motion } from 'framer-motion';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Briefcase,
  Users,
  Award,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Building,
  Brain,
  Shield,
  Cpu,
  Network,
  Rocket,
  Star,
  CheckCircle,
  Globe,
  Heart,
  Zap
} from 'lucide-react';';
export default function Careers() {;
const [searchQuery, setSearchQuery] = useState('');';
const [selectedDepartment, setSelectedDepartment] = useState('all');';
const [selectedLocation, setSelectedLocation] = useState('all');';
const [selectedType, setSelectedType] = useState('all');';
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Departments', count: 23 },'
    { id: 'engineering', name: 'Engineering', count: 12 },'
    { id: 'ai-research', name: 'AI Research', count: 6 },'
    { id: 'sales', name: 'Sales & Business', count: 3 },'
    { id: 'marketing', name: 'Marketing', count: 2 }'
  ];
const locations = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Locations', count: 23 },'
    { id: 'middletown', name: 'Middletown, DE', count: 15 },'
    { id: 'remote', name: 'Remote', count: 6 },'
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 2 }'
  ];
const jobTypes = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Types', count: 23 },'
    { id: 'full-time', name: 'Full Time', count: 18 },'
    { id: 'part-time', name: 'Part Time', count: 3 },'
    { id: 'contract', name: 'Contract', count: 2 }'
  ];
const openPositions = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 1,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      salary: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      urgent: true
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      salary: ","
      description: ","'"Bachelor's degree in Cybersecurity or related field","
        "Experience with security tools and frameworks"
        "Knowledge of compliance standards (SOC2, ISO 27001)"
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Competitive salary"
        "Health and wellness benefits"
        "Training and certification support"
        "Career growth opportunities"
      ],
      urgent: false
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Award,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Send,
  Star,
  TrendingUp
} from 'lucide-react'';
import { Badge } from '../components/ui/badge';';
import { Card } from '../components/ui/card';';
import { Button } from '../components/ui/button';';
import { Input } from '../components/ui/input';';
import { Textarea } from '../components/ui/textarea';';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';';
import { SEO } from '../components/SEO';';';
const Careers: React.FC = () => {;
const [selectedDepartment, setSelectedDepartment] = useState<string>('all');';
const [isApplying, setIsApplying] = useState<string | null>(null);
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    { id: 'all', name: 'All Departments', color: 'from-zion-cyan to-zion-blue' },'
    { id: 'engineering', name: 'Engineering', color: 'from-purple-500 to-pink-500' },'
    { id: 'ai', name: 'AI & ML', color: 'from-blue-500 to-cyan-500' },'
    { id: 'design', name: 'Design', color: 'from-green-500 to-emerald-500' },'
    { id: 'sales', name: 'Sales & Marketing', color: 'from-yellow-500 to-orange-500' },'
    { id: 'operations', name: 'Operations', color: 'from-red-500 to-pink-500' }';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  MapPin,
  Clock,
  Users,
  Building,
  Rocket,
  Brain,
  Shield,
  Cpu,
  Globe,
  Award,
  ArrowRight,
  Mail,
  Linkedin,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';';
export default function Careers() {;
const [searchTerm, setSearchTerm] = useState('');';
const [selectedDepartment, setSelectedDepartment] = useState('All');';
const [selectedLocation, setSelectedLocation] = useState('All');';
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    'All','
    'Engineering','
    'AI & Research','
    'Sales & Business Development','
    'Marketing','
    'Operations','
    'Customer Success','
    'Finance & Legal''
  ];
const locations = [
  // TODO: Add items
]
  // TODO: Add items
]
    'All','
    'Remote','
    'Middletown, DE','
    'Silicon Valley, CA','
    'New York, NY','
    'Austin, TX','
    'Seattle, WA''
  ];
const jobOpenings = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 1,
      title: "Senior AI Research Scientist"
      department: "AI & Machine Learning"
      location: "Remote"
      type: "Full-time"
      experience: "5+ years"
      salary: "$120,000 - $180,000"
      description: "Lead cutting-edge research in autonomous AI systems and quantum neural networks."
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        "PhD in Computer Science, AI, or related field"
        "Strong background in machine learning and neural networks"
        "Experience with quantum computing concepts"
        "Published research in top-tier conferences"
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Develop novel AI algorithms and architectures"
        "Lead research projects and mentor junior researchers"
        "Collaborate with cross-functional teams"
        "Publish research findings and patents"
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Competitive salary and equity"
        "Flexible remote work options"
        "Professional development budget"
        "Health, dental, and vision insurance"
      ],
      icon: Brain,
      urgent: true,
      postedDate: "2024-12-15"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: "Quantum Computing Engineer"
      department: "Quantum Technology"
      location: "Remote"
      type: "Full-time"
      experience: "3+ years"
      salary: "$100,000 - $150,000"
      description: "Build and optimize quantum computing systems and quantum neural network platforms."
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        "MS/PhD in Physics, Computer Science, or Engineering"
        "Experience with quantum computing frameworks"
        "Knowledge of quantum algorithms and error correction"
        "Programming experience in Python, C++, or Q#"
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Design and implement quantum algorithms"
        "Optimize quantum circuit performance"
        "Develop quantum software tools"
        "Collaborate with research teams"
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Competitive salary and equity"
        "Remote work flexibility"
        "Conference attendance support"
        "Comprehensive benefits package"
      ],
      icon: Atom,
      urgent: false,
      postedDate: "2024-12-12"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: "Cybersecurity Architect"
      department: "Cybersecurity"
      location: "Middletown, DE"
      type: "Full-time"
      experience: "7+ years"
      salary: "$130,000 - $200,000"
      description: "Design and implement enterprise security solutions and SOC2 compliance automation."
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Bachelor's degree in Cybersecurity or related field"'"
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      icon: Shield,
      urgent: true,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 4,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      salary: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","'"Experience with AWS, Azure, or GCP","Knowledge of Docker, Kubernetes, and Terraform","Experience with CI/CD tools and automation""Design and implement cloud infrastructure","Automate deployment and scaling processes","Monitor system performance and reliability","Collaborate with development teams""Competitive salary and equity","Remote work options","Cloud certification support","Flexible work hours""2024-12-08""Full Stack Software Engineer","Software Engineering","New York, NY","Full-time","3+ years","$95,000 - $150,000","Develop innovative web applications and AI-powered business solutions.","Bachelor's degree in Computer Science or related field","
        "Experience with React, Node.js, and Python"
        "Knowledge of cloud services and databases"
        "Experience with AI/ML integration"
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Develop full-stack web applications"
        "Integrate AI services and APIs"
        "Optimize application performance"
        "Collaborate with product and design teams"
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Competitive salary and benefits"
        "Office in NYC with hybrid options"
        "Professional development opportunities"
        "Team events and activities"
      ],
      icon: Code,
      urgent: false,
      postedDate: "2024-12-05"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 6,
      title: "AI Product Manager"
      department: "AI & Machine Learning"
      location: "Remote"
      type: "Full-time"
      experience: "5+ years"
      salary: "$110,000 - $170,000"
      description: "Lead product strategy and development for AI-powered business solutions."
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Bachelor's degree in Business, Engineering, or related field"'"
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      icon: Target,
      urgent: false,
      postedDate: ""
      id: 3,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      salary: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      urgent: false
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 4,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      salary: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      urgent: false
    }
  ];
const companyValues = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      description: ","
      icon: Zap
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      description: ","
      icon: Heart
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      description: ","
      icon: Globe
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      description: ","
      icon: BookOpen
    }
  ]
      id: 1,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      salary: ","
      urgent: true,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      salary: ","
      urgent: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","'"7+ years in cybersecurity architecture","Expertise in SOC2 compliance","Experience with zero-trust security","Knowledge of quantum-safe cryptography""Design security architectures","Implement security controls","Ensure compliance standards","Lead security assessments","Mentor security team members""Competitive salary + equity","Remote work options","Security certifications","Professional development","Health and wellness benefits""$140,000 - $180,000","2025-01-10""Full Stack Developer","engineering","remote","full-time","3+ years","Build scalable web applications and contribute to our platform development using modern technologies.","Bachelor's degree in Computer Science or related field","
        "3+ years full-stack development experience"
        "Proficiency in React, Node.js, TypeScript"
        "Experience with cloud platforms (AWS/Azure)"
        "Knowledge of microservices architecture"
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Develop web applications"
        "Write clean, maintainable code"
        "Collaborate with design and product teams"
        "Participate in code reviews"
        "Contribute to technical decisions"
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Competitive salary + equity"
        "Remote work flexibility"
        "Latest development tools"
        "Learning and development budget"
        "Flexible work hours"
      ],
      salary: "$90,000 - $130,000"
      urgent: false,
      postedDate: "2025-01-08"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 5,
      title: "DevOps Engineer"
      department: "engineering"
      location: "remote"
      type: "full-time"
      experience: "4+ years"
      description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability."
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        "Bachelor's degree in Computer Science or related field"'"
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ","
        ""
      ],
      salary: ","
      urgent: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 6,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","'"5+ years in B2 B sales or business development","Experience in technology sales","Strong networking skills","Track record of meeting/exceeding targets""Identify new business opportunities","Build strategic partnerships","Develop sales strategies","Manage client relationships","Achieve revenue targets""Competitive base + commission","Remote work flexibility","Travel opportunities","Professional development","Performance bonuses""$80,000 - $120,000 + commission","2025-01-03""Innovation First","We push boundaries and embrace cutting-edge technologies","from-blue-500 to-cyan-500""Excellence","We strive for the highest quality in everything we do","from-yellow-500 to-orange-500""Collaboration","We believe in the power of diverse teams working together","from-green-500 to-emerald-500""Continuous Learning","We invest in growth and development at every level","from-purple-500 to-pink-500""min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate"
      {/* Hero Section */}
      <div className="
<div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"relative container mx-auto px-4 py-24"
<div className="
<h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"text-gradient block"
<p className="
              Be part of a team that's pushing the boundaries of AI, quantum computing, and emerging technologies. '
              Help us build solutions that transform businesses and shape the future of technology.
            </p>
<div className="flex flex-wrap justify-center gap-4"flex items-center space-x-2 text-zion-cyan"
<Users className="
<span className="text-white"flex items-center space-x-2 text-zion-cyan"
<Globe className="
<span className="text-white"flex items-center space-x-2 text-zion-cyan"
<Star className="
<span className="text-white"min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
      {/* Hero Section */}
      <section className="
<div className="max-w-7 xl mx-auto text-center"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      {/* Hero Section */}
      <section className="
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"relative container mx-auto px-4 sm:px-6 lg:px-8"
<div className="
<h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                {"}Transform the Future"
              </span></h1>
<p className="
              Be part of a team that's pushing the boundaries of AI, quantum technology, and cybersecurity. '
              Help us build solutions that will shape the future of business and technology.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2 xl mx-auto mb-8"absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
<input
                type=""
                placeholder=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
              />
</div>
<div className="flex flex-wrap justify-center gap-4"/contact""inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ArrowRight className="
<$2 />
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6"
<Briefcase className="
              Join Our Team
            </div>
<h1 className="text-4 xl md:text-6 xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"text-xl md:text-2 xl text-gray-300 max-w-4 xl mx-auto leading-relaxed mb-8"
              Join our team of innovators, researchers, and technology leaders who are shaping the future of AI, quantum computing, and enterprise technology.
            </p>

            {/* Search Bar */}
            <div className="
<div className="relative"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
<input
                  type=""
                  placeholder=""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
                />
</div></div>
</motion.div></div>
</section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
            {/* Departments */}
            <div className="flex flex-wrap gap-3"ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs"
                    {dept.count}
                  </span></button>
              ))}
            </div>

            {/* Locations & Types */}
            <div className="
              {locations.map((location) => (
  // TODO: Add parameters
)
                <$2 />
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    selectedLocation === location.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400''
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30''
                  }`}
                >
                  {location.name}
                  <span className="ml-1 text-xs opacity-75"ml-1 text-xs opacity-75"
              ))}
            </div>;
import { Link } from 'react-router-dom';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Users,
  Zap,
  Globe,
  Heart,
  Award,
  BookOpen,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';';
const Careers = () => {;
const [selectedDepartment, setSelectedDepartment] = useState<string>('all');';
const [searchTerm, setSearchTerm] = useState<string>('');';
const departments = [
  // TODO: Add items
]
  // TODO: Add items
]
    'all','
    'Engineering','
    'Design','
    'Product','
    'Sales','
    'Marketing','
    'Operations','
    'AI & ML''
  ];
const jobListings = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 1,
      title: 'Senior Full Stack Developer','
      department: 'Engineering','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
      experience: '5+ years','
      salary: '$120 k - $180 k','
      description: 'We\'re looking for a Senior Full Stack Developer to join our growing engineering team. You\'ll work on cutting-edge projects using modern technologies like React, Node.js, and cloud platforms.','
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Strong experience with React, Node.js, and TypeScript','
        'Experience with cloud platforms (AWS, Azure, or GCP)','
        'Knowledge of microservices architecture','
        'Experience with CI/CD pipelines and DevOps practices','
        'Strong problem-solving and communication skills''
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Competitive salary and equity','
        'Flexible remote work options','
        'Health, dental, and vision insurance','
        'Professional development budget','
        'Unlimited PTO''
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: 'AI/ML Engineer','
      department: 'AI & ML','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
      experience: '3+ years','
      salary: '$130 k - $200 k','
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses. Work on projects involving computer vision, NLP, and predictive analytics.','
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        'MS/PhD in Computer Science, ML, or related field','
        'Experience with PyTorch, TensorFlow, or similar frameworks','
        'Strong Python programming skills','
        'Experience with MLOps and model deployment','
        'Knowledge of cloud ML platforms''
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Competitive salary and equity','
        'Access to latest AI/ML tools and infrastructure','
        'Conference attendance and research opportunities','
        'Health, dental, and vision insurance','
        'Flexible work arrangements''
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: 'UX/UI Designer','
      department: 'Design','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
      experience: '3+ years','
      salary: '$90 k - $140 k','
      description: 'Create beautiful and intuitive user experiences for our products. Work closely with product managers and engineers to design solutions that users love.','
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Strong portfolio showcasing web and mobile design work','
        'Experience with Figma, Sketch, or similar tools','
        'Understanding of user research and usability principles','
        'Experience with design systems and component libraries','
        'Collaboration with cross-functional teams''
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Competitive salary and equity','
        'Latest design tools and software','
        'Creative freedom and ownership','
        'Health, dental, and vision insurance','
        'Professional development opportunities''
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 4,
      title: 'DevOps Engineer','
      department: 'Engineering','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
      experience: '4+ years','
      salary: '$110 k - $160 k','
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes. Help us scale our systems and ensure high availability.','
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Experience with AWS, Azure, or GCP','
        'Knowledge of Kubernetes and containerization','
        'Experience with Terraform or CloudFormation','
        'Strong scripting skills (Python, Bash)','
        'Experience with monitoring and logging tools''
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Competitive salary and equity','
        'Latest cloud tools and certifications','
        'Flexible remote work options','
        'Health, dental, and vision insurance','
        'Professional development budget''
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 5,
      title: 'Product Manager','
      department: 'Product','
      location: 'Remote / Middletown, DE','
      type: 'Full-time','
      experience: '4+ years','
      salary: '$100 k - $150 k','
      description: 'Drive product strategy and execution for our AI-powered solutions. Work with customers, stakeholders, and engineering teams to deliver exceptional products.','
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Experience in B2 B SaaS product management','
        'Strong analytical and strategic thinking','
        'Experience with agile development methodologies','
        'Excellent communication and stakeholder management','
        'Technical background or strong technical aptitude''
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Competitive salary and equity','
        'Product ownership and strategic impact','
        'Customer interaction and market research','
        'Health, dental, and vision insurance','
        'Professional development opportunities''
      ]
    }
  ];
const filteredJobs = jobListings.filter(job => {;
const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;';
const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesDepartment && matchesSearch
  });
const companyValues = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: 'Innovation First','
      description: 'We constantly push boundaries and explore new technologies to solve complex problems.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Users,
      title: 'Collaboration','
      description: 'Great ideas come from diverse teams working together towards common goals.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Heart,
      title: 'Customer Focus','
      description: 'Everything we do is driven by our commitment to customer success.';';
const filteredJobs = selectedDepartment === 'all' '
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);
const companyValues = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Heart,
      title: 'People First','
      description: 'We believe our team is our greatest asset and invest in their growth and well-being.','
      color: 'from-red-500 to-pink-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: 'Innovation Driven','
      description: 'We constantly push boundaries and embrace new technologies to solve complex problems.','
      color: 'from-yellow-500 to-orange-500''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: 'Global Impact','
      id: 1,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: true,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: true,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 4,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 5,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 6,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 7,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 8,
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      requirements: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      responsibilities: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      benefits: [
  // TODO: Add items
]
  // TODO: Add items
]
        ","
        ","
        ","
        ""
      ],
      featured: false,
      postedDate: ""
    }
  ];
const filteredJobs = jobOpenings.filter(job => {;
const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;';
const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation'
    return matchesSearch && matchesDepartment && matchesLocation
  });
const featuredJobs = filteredJobs.filter(job => job.featured);
const regularJobs = filteredJobs.filter(job => !job.featured);
const formatDate = (dateString: string) => {;
const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { '
      year: 'numeric', '
      month: 'long', '
      day: 'numeric' '
    })
  }
  const companyValues = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      description: ","'"Excellence","We deliver the highest quality solutions and exceptional service","Collaboration","We work together to achieve extraordinary results for our clients","Integrity","We maintain the highest ethical standards in all our interactions","Senior AI Engineer","Artificial Intelligence","Remote / Wilmington, DE","Full-time","5+ years","Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.","Python", ", "PyTorch"MLOps", "]"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      skills: [", "Azure"Kubernetes", ", "CI/CD"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: "Cybersecurity Specialist"
      department: "Security"
      location: "Remote / Wilmington, DE"
      type: "Full-time"
      experience: "4+ years"
      description: "Protect client systems and data through advanced security measures and threat detection."
      skills: ["Penetration Testing"SIEM", ", "Incident Response"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: "Full Stack Developer"
      department: "Web Development"
      location: "Remote / Wilmington, DE"
      type: "Full-time"
      experience: "3+ years"
      description: "Build modern, responsive web applications using cutting-edge technologies."
      skills: ["React"Node.js", ", "PostgreSQL"Docker"]"Data Scientist","Data Analytics","Remote / Wilmington, DE","Full-time","4+ years","Transform raw data into actionable insights for business decision-making.","Python", ", "SQL"Tableau", "]"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: ","
      department: ","
      location: ","
      type: ","
      experience: ","
      description: ","
      skills: [", "Kubernetes"Jenkins", ", "Monitoring"
    }
  ];
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🏠"
      title: "Remote First"
      description: "Work from anywhere with flexible remote work options"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "💰"
      title: "Competitive Salary"
      description: "Attractive compensation packages with equity options"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🏥"
      title: "Health Benefits"
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "📚"
      title: "Learning & Development"
      description: "Continuous learning opportunities and skill development"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🎯"
      title: "Career Growth"
      description: "Clear career progression paths and mentorship"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🎉"
      title: "Team Events"
      description: "Regular team building and social activities"
    }
  ];
const values = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🚀"
      title: "Innovation"
      description: "We push boundaries and embrace new technologies"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "🤝"
      title: "Collaboration"
      description: "Teamwork and knowledge sharing drive our success"
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: "💡"
      title: "Excellence"
      description: "We strive for quality in everything we do"
      title: "Competitive Compensation"
      description: "Attractive salary packages with equity options"
      icon: Award
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: "Flexible Work"
      description: "Remote and hybrid work options for work-life balance"
      icon: Globe
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: "Professional Growth"
      description: "Continuous learning and career development opportunities"
      icon: Brain
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: "Health & Wellness"
      description: "Comprehensive health, dental, and vision coverage"
      icon: Shield
    }
  ]
  return (
  // TODO: Add parameters
)
    <>
<SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."

      <SEO
        title="Careers at Zion - Join Our Team"
        description="Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform."'"
        keywords=""
        canonical=""
      />
<main className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"max-w-4 xl mx-auto text-center"
<h1 className="
              Join Our Team
            </h1>
<p className="text-xl md:text-2 xl text-zion-slate-light mb-8 leading-relaxed"flex flex-wrap justify-center gap-4"
<$2 />
                href=""
                className="
              >
                View Open Positions
              </a>
<$2 />
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold mb-4"
              Our Values
            </h2>
<p className="
              These core principles guide everything we do and shape our company culture.
            </p></div>
<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"pt-32 pb-16 px-4 sm:px-6 lg:px-8"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
            Help us build the future of AI and technology. Join a team of innovators, problem-solvers, and visionaries.
          </p>
<div className="
<button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              Submit Application
            </button></div>
</div></div>

      {/* Values Section */}
      <div className="
<div className="max-w-7 xl mx-auto"text-center mb-12"
<h2 className="
              Our Values
            </h2>
<p className="text-xl text-gray-300 max-w-2 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {values.map((value, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<h3 className="text-xl font-semibold text-cyan-400 mb-3"text-gray-300"
            ))}
          </div></div>
      {/* Benefits Section */}
      <div className="
<div className="text-center mb-12"text-3 xl font-bold text-white mb-4"
<p className="
            We invest in our people because they're our greatest asset'
          </p></div>
</section>

      {/* Job Openings */}
      <section id="openings"py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold mb-4"
              Open Positions
            </h2>
<p className="
              Find the perfect role for your skills and career goals.
            </p></div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12"w-4 h-4"
<span>{dept.name}</span>
<span className="
                  {dept.count}
                </span></button>
            ))}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"text-3 xl font-bold text-white mb-6"
<p className="
                At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and '
                technology are accessed, shared, and implemented globally.
              </p>
<p className="text-zion-slate-light text-lg mb-6"text-zion-slate-light text-lg"
                If you're excited about shaping the future of AI and technology while working in a dynamic, '
                remote-first environment with a mission-driven team, we'd love to meet you.'
              </p></div>
<div className="
<img loading="lazy"
                src="https://images.unsplash.com/photo-1522071820081-009 f0129 c71 c?auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="object-cover w-full h-full"space-y-6"
            {filteredJobs.map((job) => (
  // TODO: Add parameters
)
              <div key={job.id} className="
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"mb-4 lg:mb-0"
<div className="
<h3 className="text-2 xl font-bold"px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                          Urgent
                        </span>
                      )}
                    </div>
<div className="
<div className="flex items-center space-x-1"w-4 h-4"
<span>{departments.find(d => d.id === job.department)?.name}</span></div>
<div className="
<MapPin className="w-4 h-4"flex items-center space-x-1"
<Clock className="
<span>{job.type}</span></div>
<div className="flex items-center space-x-1"w-4 h-4"
<span>{job.experience}</span></div>
<div className="
<DollarSign className="w-4 h-4"px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
<span>Apply Now</span>
<ArrowRight className="
</div>
<p className="text-gray-300 mb-4"grid grid-cols-1 lg:grid-cols-2 gap-6"
<div>
<h4 className="
<ul className="space-y-2"flex items-center space-x-2"
<CheckCircle className="
<span className="text-gray-300 text-sm"py-20 bg-black/20"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-white mb-4"
              Our Values
            </h2>
<p className="
              The principles that guide everything we do
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
<div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
<value.icon className="
<h3 className="text-lg font-semibold text-white mb-2"text-gray-300 text-sm"
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-center mb-16"
<h2 className="
              Why Work With Us?
            </h2>
<p className="text-xl text-gray-300"grid grid-cols-1 lg:grid-cols-2 gap-8"
            {benefits.map((category, index) => (
  // TODO: Add parameters
)
              <$2 />
                key={index}
                className="
              >
<h3 className="text-xl font-semibold text-white mb-4"space-y-3"
                  {category.items.map((item, itemIndex) => (
  // TODO: Add parameters
)
                    <div key={itemIndex} className="
<CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0"text-gray-300"
                  ))}
                </div>
      {/* Company Culture */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-center mb-16"
<h2 className="
              Why Work at Zion Tech Group?
            </h2>
<p className="text-xl text-zion-slate max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {companyValues.map((value, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center"w-10 h-10 text-white"
<h3 className="
                  {value.title}
                </h3>
<p className="text-zion-slate"pb-20 px-4 sm:px-6 lg:px-8"
<div className="
<div className="text-center mb-12"text-3 xl font-bold text-white mb-4"
<p className="
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8"bg-gray-800/50 backdrop-blur-sm rounded-2 xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
<div className="
<Briefcase className="w-16 h-16 text-cyan-400"p-6"
<div className="
<span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"text-gray-400 text-sm capitalize"
<h3 className="
                      {position.title}
                    </h3>
<p className="text-gray-300 mb-4 leading-relaxed"flex items-center justify-between mb-4"
<div className="
<div className="flex items-center gap-2"w-4 h-4"
                          {locations.find(l => l.id === position.location)?.name}
                        </div>
<div className="
<Clock className="w-4 h-4"flex items-center gap-2"
<Users className="
                          {position.applications} applications
                        </div></div>
</div>
<div className="mb-4"font-semibold text-gray-300 mb-2"
<ul className="
                        {position.requirements.slice(0, 3).map((req, idx) => (
  // TODO: Add parameters
)
                          <li key={idx} className="flex items-center text-sm text-gray-400"w-3 h-3 text-green-400 mr-2 flex-shrink-0"
      {/* Benefits */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-center mb-16"
<h2 className="
              Benefits & Perks
            </h2>
<p className="text-xl text-zion-slate max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center"w-8 h-8 text-white"
<h3 className="
                  {benefit.title}
                </h3>
<p className="text-zion-slate text-sm"px-4 sm:px-6 lg:px-8 pb-16"
<div className="
<div className="text-center mb-12"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Why Work With Us
            </h2>
<p className="
              We offer more than just a job - we offer a career with purpose
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300"
<div className="
<h3 className="text-xl font-semibold text-white mb-3"text-gray-300"
            ))}
          </div></div>
<div>
<h4 className="
<ul className="space-y-1"flex items-start text-sm text-zion-slate"
<div className="
                            {benefit}
                          </li>
                        ))}
                      </ul></div>
</div></div>
              ))
            )}
    <div className="min-h-screen bg-background"Careers - Join Zion Tech Group" "Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group.""careers, jobs, Zion Tech Group, employment, tech jobs, AI jobs""https://ziontechgroup.com/careers""relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"text-zion-cyan"
<p className="
            Help us build the future of technology. We're looking for passionate, '
            innovative minds to join our mission.
          </p>
<Button asChild size="lg"bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark"
<a href=">View Open Positions</a></Button>"
</div></section>

      {/* Why Work With Us */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-3 xl font-bold text-white text-center mb-16"
<div className="
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors"text-center"
<div className="
                    {benefit.icon}
                  </div>
<CardTitle className="text-zion-cyan"text-zion-slate-light text-center"
                    {benefit.description}
                  </p></CardContent>
</Card>
            ))}
          </div></div>
</section></div>

      {/* Open Positions */}
      <div className="
<div className="max-w-7 xl mx-auto"text-center mb-12"
<h2 className="
              Open Positions
            </h2>
<p className="text-xl text-gray-300 max-w-2 xl mx-auto"space-y-6"
    ","
    ","
    ","
    ","
    ","
    ""
  ]
  return (
  // TODO: Add parameters
)
    <div className="
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<div className="flex items-center justify-center mb-6"w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2 xl flex items-center justify-center mr-4"
<Users className="
<h1 className="text-4 xl md:text-6 xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"text-xl md:text-2 xl text-gray-300 max-w-4 xl mx-auto mb-8"
              Help us build the future of AI and technology. Join a team of innovators, problem-solvers, and visionaries.
            </p>
<div className="
<button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 transition-all duration-300"
                Learn About Culture
              </button></div>
</div></div>

        {/* Background Elements */}
        <div className="
<div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
<div className="
</div></section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300 max-w-3 xl mx-auto"
              We're building more than technology - we're building a culture of innovation, collaboration, and growth'
            </p></div>
<div className="
            {values.map((value, index) => (
  // TODO: Add parameters
)
              <div key={index} className="flex items-center space-x-4"w-6 h-6 text-blue-400 flex-shrink-0"
<span className="
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20"max-w-7 xl mx-auto"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300 max-w-3 xl mx-auto"
              We offer competitive benefits and a supportive environment where you can thrive and grow
            </p></div>
<div className="
            {benefits.map((benefit, index) => {;
const Icon = benefit.icon
              return (
  // TODO: Add parameters
)
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2 xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6"
<Icon className="
<h3 className="text-xl font-semibold text-white mb-4"text-gray-300"
              )
            })}
          </div></div>
</section>

      {/* Open Positions Section */}
      <section className="
<div className="max-w-7 xl mx-auto"text-center mb-16"
<h2 className="
              Open Positions
            </h2>
<p className="text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 lg:grid-cols-2 gap-8"
            {openPositions.map((position, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-start justify-between mb-4"text-xl font-semibold text-white"
<span className="
                    {position.type}
                  </span></div>
<div className="space-y-3 mb-6"flex items-center space-x-4 text-sm text-gray-300"
<div className="
<Briefcase className="w-4 h-4 text-blue-400"flex items-center space-x-2"
<MapPin className="
<span>{position.location}</span></div>
<div className="flex items-center space-x-2"w-4 h-4 text-blue-400"
<span>{position.experience}</span></div>
</div></div>
<h4 className="
<ul className="space-y-2"flex items-center space-x-2"
<CheckCircle className="
<span className="text-gray-300 text-sm"min-h-screen bg-background relative overflow-hidden"
<SEO
        title=" "
        description=""
        keywords=""
        canonical=""
      />

      {/* Hero Section */}
      <section className="
<div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"text-center"
          >
<h1 className="
              Join Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"text-xl text-zion-slate-light max-w-3 xl mx-auto mb-8"
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects, '
              learn from experts, and grow your career with us.
            </p>
<div className="
<$2 />
                href="#open-positions"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"w-5 h-5"
<$2 />
                to=""
                className="
              >
                Contact Us
                <Mail className="w-5 h-5"🌱","Growth","Continuous learning and personal development""Careers at Zion Tech Group - Join Our Team""Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore exciting career opportunities in AI, cloud computing, cybersecurity, and more."'"careers, jobs, employment, Zion Tech Group, technology jobs, AI jobs, remote work""min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20"
        {/* Hero Section */}
        <section className="
<div className="absolute inset-0 overflow-hidden"absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3 xl"
<div className="
</div>
<motion.div
            className="max-w-7 xl mx-auto text-center relative z-10"text-4 xl md:text-6 xl lg:text-7 xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }
              animate={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8, delay: 0.2 }
            >
              Join Our
              <span className="
                {" "
              </span></motion.h1>
<motion.p
              className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto leading-relaxed"flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }
              animate={{ opacity: 1, y: 0 }
              transition={{ duration: 0.8, delay: 0.6 }
            >
<$2 />
                href=""
                className="
              >
                View Open Positions
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M13 7 l5 5 m0 0 l-5 5 m5-5 H6"
</a>
<$2 />
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
<div className="
<motion.div
              className="text-center mb-16"text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-4"
                Why Work With Zion Tech Group?
              </h2>
<p className="
                We're not just another tech company. We're a team of innovators, problem-solvers, and future-shapers.'
              </p></motion.div>
<motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"initial""animate""text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }
                >
<div className="
<h3 className="text-xl font-semibold text-white mb-3"text-gray-300 leading-relaxed"
              ))}
            </motion.div></div>
</section>

        {/* Benefits Section */}
        <section className="
<div className="max-w-7 xl mx-auto"text-center mb-16"
              initial={{ opacity: 0, y: 30 }
              whileInView={{ opacity: 1, y: 0 }
              viewport={{ once: true }
              transition={{ duration: 0.8 }
            >
<h2 className="
                Benefits & Perks
              </h2>
<p className="text-xl text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial=""
              whileInView=""
              viewport={{ once: true }
            >
              {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
                <motion.div
                  key={index}
                  className="
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }
                >
<div className="text-5 xl mb-4"text-xl font-semibold text-white mb-3"
<p className="
              ))}
            </motion.div></div>
</section>

        {/* Open Positions */}
        <section id="open-positions"py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
<div className="
<motion.div
              className="text-center mb-16"text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-4"
                Open Positions
              </h2>
<p className="
                Ready to join our team? Check out our current openings and find your perfect fit
              </p></motion.div>
<motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"initial""animate""bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }
                >
<div className="
<h3 className="text-xl font-semibold text-white"px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      {position.type}
                    </span></div>
<div className="
<span className="flex items-center"w-4 h-4 mr-1"none"currentColor" viewBox=">"
<path strokeLinecap=" strokeLinejoin="round"M19 21 V5 a2 2 0 00-2-2 H7 a2 2 0 00-2 2 v16 m14 0 h2 m-2 0 h-5 m-9 0 H3 m2 0 h5 M9 7 h1 m-1 4 h1 m4-4 h1 m-1 4 h1 m-5 10 v-5 a1 1 0 011-1 h2 a1 1 0 011 1 v5 m-4 0 h4" /></svg>"flex items-center"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" />"
<path strokeLinecap=" strokeLinejoin="round"M15 11 a3 3 0 11-6 0 3 3 0 016 0 z" /></svg>"flex items-center"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" /></svg>"
                      {position.experience}
                    </span></div>
<p className="
<div className="mb-4"text-sm font-semibold text-white mb-2"
<div className="
                      {position.skills.map((skill, skillIndex) => (
  // TODO: Add parameters
)
                        <$2 />
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-600/30"inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                    <svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" /></svg>"
</a></motion.div>
              ))}
            </motion.div></div>
</section>

        {/* CTA Section */}
        <section className="
<div className="max-w-4 xl mx-auto text-center px-4"text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }
              whileInView={{ opacity: 1, y: 0 }
              viewport={{ once: true }
              transition={{ duration: 0.8 }
            >
              Don't See Your Perfect Role?'
            </motion.h2>
<motion.p
              className="
              initial={{ opacity: 0, y: 30 }
              whileInView={{ opacity: 1, y: 0 }
              viewport={{ once: true }
              transition={{ duration: 0.8, delay: 0.2 }
            >
              We're always looking for talented individuals to join our team. '
              Send us your resume and let's discuss how you can contribute to our mission.'
            </motion.p>
<motion.div
              initial={{ opacity: 0, y: 30 }
              whileInView={{ opacity: 1, y: 0 }
              viewport={{ once: true }
              transition={{ duration: 0.8, delay: 0.4 }
            >
<$2 />
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"none"currentColor" viewBox=">"
<path strokeLinecap=" strokeLinejoin="round"M13 7 l5 5 m0 0 l-5 5 m5-5 H6" /></svg>"p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300"
<div className="
<div>
<h3 className="text-xl font-semibold text-white mb-2"flex flex-wrap gap-2 mb-3"
<span className="
                        {position.department}
                      </span>
<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                        {position.type}
                      </span>
<span className="
                        {position.experience}
                      </span></div>
</div>
<button className="lg:ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"text-gray-300 mb-4"
<div>
<h4 className="
<div className="flex flex-wrap gap-2"px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                        {skill}
                      </span>
                    ))}
                  </div>
<div className="
      {/* Hero Section */}
      <div className="relative overflow-hidden"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"
<div className="
<div className="text-center"text-4 xl md:text-6 xl font-bold text-white mb-6"
              Join Our Team
            </h1>
<p className="
              Help us shape the future of technology. Join a team of innovators,
              researchers, and industry experts committed to transforming businesses
              through cutting-edge AI solutions.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4 xl mx-auto mb-8"relative mb-6"
<Search className="
<input
                  type="text"
                  placeholder="Search jobs, departments, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"flex flex-wrap gap-4 justify-center"
<div className="
<Filter className="w-4 h-4 text-gray-400"px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {departments.map((dept) => (
  // TODO: Add parameters
)
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select></div>
<div className="
<MapPin className="w-4 h-4 text-gray-400"px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {locations.map((location) => (
  // TODO: Add parameters
)
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select></div>
</div></div>
<div className="
<div className="flex items-center"w-5 h-5 mr-2"
<span>{jobOpenings.length} Open Positions</span></div>
<div className="
<Globe className="w-5 h-5 mr-2"flex items-center"
<Users className="
<span>Growing Team</span></div>
</div></div>
</div></div>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
  // TODO: Add parameters
)
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"text-3 xl font-bold text-white mb-8 text-center"
<div className="
            {featuredJobs.map((job) => (
  // TODO: Add parameters
)
              <$2 />
                key={job.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"p-6"
<div className="
<span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full"px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      {job.department}
                    </span></div>
<h3 className="
                    {job.title}
                  </h3>
<p className="text-gray-300 mb-6 leading-relaxed"flex items-center space-x-6 mb-6 text-sm text-gray-400"
<div className="
<MapPin className="w-4 h-4 mr-2"flex items-center"
<Clock className="
                      {job.type}
                    </div>
<div className="flex items-center"w-4 h-4 mr-2"
                      {job.experience}
                    </div></div>
<div className="
<h4 className="text-sm font-semibold text-cyan-400 mb-3"space-y-1"
                      {job.requirements.slice(0, 3).map((req, index) => (
  // TODO: Add parameters
)
                        <li key={index} className="
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group"
                    Apply Now
                    <ArrowRight className="
</div></div>
            ))}
          </div></div>
      )}

      {/* All Job Openings */}
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"text-3 xl font-bold text-white mb-8 text-center"
          All Open Positions
        </h2>
<div className="
          {regularJobs.map((job) => (
  // TODO: Add parameters
)
            <$2 />
              key={job.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"p-6"
<div className="
<span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"text-xl font-bold text-white mb-4 leading-tight"
                  {job.title}
                </h3>
<p className="
                  {job.description}
                </p>
<div className="flex items-center space-x-4 mb-6 text-sm text-gray-400"flex items-center"
<MapPin className="
                    {job.location}
                  </div>
<div className="flex items-center"w-4 h-4 mr-2"
                    {job.type}
                  </div></div>
<div className="
<h4 className="text-xs font-semibold text-cyan-400 mb-2"flex flex-wrap gap-1"
                    {job.requirements.slice(0, 2).map((req, index) => (
  // TODO: Add parameters
)
                      <$2 />
                        key={index}
                        className="
                      >
                        {req.split(' ').slice(0, 3).join(' ')}...'
                      </span>
                    ))}
                  </div></div>
<button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
</div></div>
          ))}
        </div></div>

      {/* Company Values */}
      <div className="
<div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-20"text-3 xl font-bold text-white mb-12 text-center"
<div className="
            {companyValues.map((value, index) => {;
const Icon = value.icon
              return (
  // TODO: Add parameters
)
                <$2 />
                  key={index}
                  className="text-center"w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
<Icon className="
<h3 className="text-xl font-semibold text-white mb-3"text-gray-300"
              )
            })}
          </div></div>
</div>

      {/* Benefits */}
      <div className="
<h2 className="text-3 xl font-bold text-white mb-12 text-center"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          {benefits.map((benefit, index) => {;
const Icon = benefit.icon
            return (
  // TODO: Add parameters
)
              <$2 />
                key={index}
                className="
              >
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-gray-300 text-sm"py-20 bg-zion-blue-dark"
<div className="
<div className="text-center mb-16"text-4 xl font-bold mb-6"
<p className="
              Our hiring process is designed to be transparent, efficient, and focused on finding
              the right fit for both you and our team.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8"bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700"
<div className="
<div className="text-center"text-3 xl font-bold text-white mb-6"
              Don't See the Right Fit?'
            </h2>
<p className="
              We're always looking for talented individuals. Send us your resume and '
              let's discuss how you can contribute to our mission.'
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"mailto:careers@ziontechgroup.com""inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Your Resume
                <Mail className="
<$2 />
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"open-positions" className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-3 xl font-bold text-white text-center mb-16"
<div className="
            {openPositions.map((position) => (
  // TODO: Add parameters
)
              <Card key={position.id} className={`bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors ${position.featured ? 'ring-2 ring-zion-cyan' : '}`}>''
<CardHeader>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"flex items-center gap-3 mb-2"
<CardTitle className="
                        {position.featured && (
  // TODO: Add parameters
)
                          <Badge className="bg-zion-cyan text-zion-blue-dark"flex flex-wrap gap-2 text-sm text-zion-slate-light"
<span className="
<Briefcase className="w-4 h-4"flex items-center gap-1"
<MapPin className="
                          {position.location}
                        </span>
<span className="flex items-center gap-1"w-4 h-4"
                          {position.type}
                        </span>
<span className="
<Star className="w-4 h-4"flex items-center gap-1"
<DollarSign className="
                          {position.salary}
                        </span></div>
</div>
<Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark"w-4 h-4 ml-2"
</Button></div>
</CardHeader>
<CardContent>
<p className="
<div className="flex flex-wrap gap-2"outline" className="
                        {skill}
                      </Badge>
                    ))}
                  </div></CardContent>
</Card>
            ))}
          </div></div>
</section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark/50"container mx-auto px-4 sm:px-6 lg:px-8"
<h2 className="
<div className="grid md:grid-cols-4 gap-8"text-center"
<div className="
                1
              </div>
<h3 className="text-xl font-semibold text-white mb-2"text-zion-slate-light"
                Submit your application with resume and cover letter
              </p></div>
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl"text-xl font-semibold text-white mb-2"
<p className="
                Our team reviews your application within 48 hours
              </p></div>
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl"
                3
              </div>
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
                4
              </div>
<h3 className="text-xl font-semibold text-white mb-2"text-zion-slate-light"
                Welcome to the Zion Tech Group team!
              </p></div>
</div></div>
</section>

      {/* CTA Section */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"text-3 xl font-bold text-white mb-6"
            Don't See the Right Role?'
          </h2>
<p className="
            We're always looking for talented individuals to join our team. '
            Send us your resume and we'll keep you in mind for future opportunities.'
          </p>
<div className="flex flex-wrap justify-center gap-4"lg" className="
<a href="mailto:careers@ziontechgroup.com?subject=General Application"
                Send General Application
              </a></Button>
<Button asChild size="lg"outline" className="
<Link to="/contact"
</div></div>;
export default Careers;
export default Careers;
export default Careers;
            <div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<span className="
<h3 className="text-xl font-semibold mb-3"text-zion-slate-light"
<div className="
<div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4"text-2 xl font-bold text-white"
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
<span className="text-2 xl font-bold text-white"text-xl font-semibold mb-3"
<p className="
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<span className="
<h3 className="text-xl font-semibold mb-3"text-zion-slate-light"
</div></div>
</section>

      {/* CTA Section */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"text-4 xl font-bold mb-6"
<p className="
            Join us in building the future of technology. Your next adventure starts here.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"#open-positions">"bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                Browse Openings
              </button></Link>
<Link to=">"
<button className="
                Learn More About Us
              </button></Link>
</div></div>
</section></div>
</main>

  )
}
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</p></p>
</p></p>
</p></p>
</p></ul>
</ul></li>
</li></section>
</section></section>
</section></section>
</section></section>
</section>
}}}}}}}}}}}}}}}}))))))))))))))))