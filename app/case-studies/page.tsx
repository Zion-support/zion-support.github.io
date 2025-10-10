'use client',
import React, { useState } from 'react',
import { Link } from 'react-router-dom';
import {}
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  ExternalLink,
  Filter,
  Search,
  Calendar,
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
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
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
  Lock,
  Database,
  Smartphone,
  Zap,
  Activity,
  PieChart,
  TrendingDown,
  Globe2,
  Map,
  Navigation,
  Compass,
  Clock3,
} from 'lucide-react',

export default function CaseStudiesPage() {}
const [selectedIndustry, setSelectedIndustry] = useState('all'),
const [selectedService, setSelectedService] = useState('all'),

const industries = [
    { name: 'all', label: 'All Industries', count: 24 },
    { name: 'healthcare', label: 'Healthcare', count: 6 },
    { name: 'finance', label: 'Finance', count: 5 },
    { name: 'manufacturing', label: 'Manufacturing', count: 4 },
    { name: 'retail', label: 'Retail', count: 3 },
    { name: 'education', label: 'Education', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ],

const services = [
    { name: 'all', label: 'All Services', count: 24 },
    { name: 'ai-solutions', label: 'AI Solutions', count: 12 },
    { name: 'it-services', label: 'IT Services', count: 8 },
    { name: 'cloud-migration', label: 'Cloud Migration', count: 4 }
  ],

const caseStudies = [
      company: 'MedTech Solutions',
      industry: 'healthcare',
      service: 'ai-solutions',
      challenge: 'Manual diagnosis processes were taking 2-3 days, causing delays in patient care and increasing costs.',
      solution: 'Implemented AI-powered diagnostic system with machine learning algorithms trained on millions of medical images.',
      results: [
        '90% reduction in diagnosis time',
        '95% accuracy in early disease detection',
        '60% cost savings in diagnostic processes',
        '40% improvement in patient satisfaction'
      ],
      image: '/images/case-studies/healthcare-ai.webp',
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['Machine Learning', 'Computer Vision', 'Cloud Computing', 'API Integration'],
        quote: "The AI diagnostic system has transformed our hospital operations. We can now provide faster, more accurate diagnoses, ultimately saving more lives.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        avatar: "SJ",
      },
        roi: '400%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        timesSaved: '2.5 days',
        accuracy: '95%',
        costReduction: '60%',
      }
    },
      company: 'SecureBank International',
      industry: 'finance',
      service: 'ai-solutions',
      challenge: 'Traditional fraud detection systems were missing 15% of fraudulent transactions, resulting in millions in losses.',
      solution: 'Deployed advanced AI fraud detection system with real-time analysis and machine learning models.',
      results: [
        '99.8% fraud detection accuracy',
        '80% reduction in false positives',
        'Real-time transaction monitoring',
        '50% reduction in fraud losses'
      ],
      image: '/images/case-studies/finance-fraud.webp',
      duration: '4 months',
      teamSize: '8 experts',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'API Integration'],
        quote: "Our AI fraud detection system has saved us millions and given our customers peace of mind. The accuracy is remarkable.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "Michael Chen",
        role: "Chief Security Officer",
        avatar: "MC",
      },
        roi: '500%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        accuracy: '99.8%',
        falsePositives: '80%',
        lossesReduced: '50%',
      }
    },
      industry: 'manufacturing',
      service: 'it-services',
      challenge: 'Outdated manufacturing systems were causing 20% production delays and high maintenance costs.',
      solution: 'Complete digital transformation with IoT sensors, AI analytics, and automated quality control systems.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in maintenance costs',
        '99.5% quality control accuracy',
        '40% reduction in downtime'
      ],
      image: '/images/case-studies/manufacturing-iot.webp',
      duration: '8 months',
      teamSize: '15 experts',
      technologies: ['IoT', 'AI Analytics', 'Cloud Computing', 'Automation'],
        quote: "The smart factory transformation has revolutionized our operations. We're producing more with less waste and higher quality.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "Emily Rodriguez",
        role: "Operations Director",
        avatar: "ER",
      },
        roi: '350%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        efficiency: '30%',
        costReduction: '25%',
        quality: '99.5%',
      }
    },
      solution: 'Implemented AI-powered personalization engine with recommendation systems and chatbot support.',
      results: [
        '45% increase in customer engagement',
        '35% improvement in conversion rates',
        '60% reduction in support tickets',
        '25% increase in average order value'
      ],
      image: '/images/case-studies/retail-ai.webp',
      duration: '5 months',
      teamSize: '10 experts',
      technologies: ['Machine Learning', 'NLP', 'Recommendation Engine', 'Chatbot'],
        quote: "Our AI-powered customer experience has transformed our business. Customers love the personalized recommendations and instant support.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "David Kim",
        role: "Chief Marketing Officer",
        avatar: "DK",
      },
        roi: '280%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        engagement: '45%',
        conversion: '35%',
        orderValue: '25%',
      }
    },
      company: 'EduTech University',
      industry: 'education',
      service: 'ai-solutions',
      challenge: 'Traditional learning methods were not meeting individual student needs, resulting in low completion rates.',
      solution: 'Developed AI-powered adaptive learning platform with personalized content and progress tracking.',
      results: [
        '50% improvement in student performance',
        '40% increase in course completion rates',
        '85% student satisfaction score',
        '60% reduction in administrative workload'
      ],
      image: '/images/case-studies/education-ai.webp',
      duration: '7 months',
      teamSize: '14 experts',
      technologies: ['Machine Learning', 'NLP', 'Adaptive Learning', 'Analytics'],
        quote: "The AI learning platform has revolutionized education. Students are more engaged and achieving better results than ever before.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "Professor Lisa Wang",
        role: "Dean of Technology",
        avatar: "LW",
      },
        roi: '320%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        performance: '50%',
        completion: '40%',
        satisfaction: '85%',
      }
    },
      solution: 'Complete cloud migration to AWS with microservices architecture and automated deployment pipelines.',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achievement',
        '5 x faster deployment cycles',
        'Unlimited scalability'
      ],
      image: '/images/case-studies/cloud-migration.webp',
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        quote: "The cloud migration has transformed our business. We can now scale instantly and deploy new features in minutes instead of days.",
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        author: "Robert Johnson",
        role: "CTO",
        avatar: "RJ",
      },
        roi: '450%',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        costReduction: '70%',
        uptime: '99.9%',
        deployment: '5x',
      }
    }
  ],

    const icons = {
      healthcare: Stethoscope,
      finance: CreditCard,
      manufacturing: Factory,
      retail: ShoppingCart,
      education: GraduationCap,
      technology: Code,
const filteredCaseStudies = caseStudies.filter(study => {)}
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry,
    const serviceMatch = selectedService === 'all' || study.service === selectedService,
    return industryMatch && serviceMatch,

const getIndustryIcon = (industry: string) => {}
    const icons = {}
      healthcare: Stethoscope,
      finance: CreditCard,
      manufacturing: Factory,
      retail: ShoppingCart,
      education: GraduationCap,
      technology: Code
>>>>>>> origin/merge-error-fixes
    },
    return icons[industry as keyof typeof icons] || Building,
  },

      finance: 'text-blue-400',
      manufacturing: 'text-orange-400',
      retail: 'text-purple-400',
      education: 'text-cyan-400',
      technology: 'text-pink-400',
    },
    return colors[industry as keyof typeof colors] || 'text-gray-400',
  },

            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">300% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99% Client Satisfaction</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>),
),
      {/* Filters */}
      <section className="py-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input,
                  type="text"
                  placeholder="Search case studies..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              <div className="flex gap-2 overflow-x-auto">{industries.map((industry) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    key={industry.name}
                    onClick={() =>setSelectedIndustry(industry.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedIndustry === industry.name,
                        ? 'bg-cyan-500 text-white'}
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
              <div className="flex gap-2 overflow-x-auto">
                {industries.map((industry) => (}
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                      selectedIndustry === industry.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
>>>>>>> origin/merge-error-fixes
                    }`}
                  ></button>
                    {industry.label} ({industry.count})</button>
                  </button>
                ))}
              <div className="flex gap-2 overflow-x-auto">{services.map((service) => (</div><button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  key={service.name}
                  onClick={() =>setSelectedService(service.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedService === service.name,
                      ? 'bg-purple-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
              {services.map((service) => (}
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                    selectedService === service.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
>>>>>>> origin/merge-error-fixes
                  }`}
                ></button>
                  {service.label} ({service.count})</button>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{filteredCaseStudies.map((study) => (</div>
                <div key={study.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group"></div>
                  <div className="relative"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (}
                <div key={study.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="relative">
>>>>>>> origin/merge-error-fixes
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4"></div>
                      <div className={`w-8 h-8 ${getIndustryColor(study.industry)}`}>{React.createElement(getIndustryIcon(study.industry), { className: 'w-8 h-8' })}</div>
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">,
              {filteredCaseStudies.map((study) => (,
                <div key={study.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover: bg-slate-700/50 transition-all duration-300 group">,
                  <div className="relative">,
                    <img,
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover: scale-105 transition-transform duration-300",
                    />,
                    <div className="absolute top-4 left-4">,
                      <div className={`w-8 h-8 ${getIndustryColor(study.industry)}`}>
                        {React.createElement(getIndustryIcon(study.industry), { className: 'w-8 h-8' })}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      </div>
                    </div>
                    <div className="absolute top-4 right-4"></div>
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">{study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}</span>
                      </span>
                    </div>
                  </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{study.title}</h3>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover: text-cyan-400 transition-colors">,
                      {study.title}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </h3>

                    <div className="flex items-center space-x-4 mb-4"></div>
                      <div className="flex items-center space-x-2"></div>
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{study.company}</span>
                      </div>
                      <div className="flex items-center space-x-2"></div>
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{study.duration}</span>
                      </div>
                    </div>

                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:<p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div></div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:<p className="text-gray-300 text-sm">{study.solution}</p>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge: </h4>,
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution: </h4>,
                        <p className="text-gray-300 text-sm">{study.solution}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      </div>
                    </div>

                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.slice(0, 4).map((result, index) => (}
>>>>>>> origin/merge-error-fixes
                          <div key={index} className="flex items-center text-sm text-gray-300">
                    <div className="mb-6"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:<div className="grid grid-cols-2 gap-2">{study.results.slice(0, 4).map((result, index) => (</div>
                          <div key={index} className="flex items-center text-sm text-gray-300"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{result}</CheckCircle>
                          </CheckCircle>
                        ))}
                      </div>
                    </div>

                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {tech}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    <div className="mb-6"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used:<div className="flex flex-wrap gap-2">{study.technologies.map((tech, index) => (</div><span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{tech}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4"></div>
                      <div className="flex items-center space-x-4"></div>
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{study.testimonial.avatar}</div>
                        </div>
                        <div className="flex-1"></div>
                          <p className="text-gray-300 text-sm italic mb-1">"{study.testimonial.quote}"</p><div className="text-cyan-400 text-xs font-medium">{study.testimonial.author}</div><div className="text-gray-400 text-xs">{study.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link,
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join hundreds of businesses that have already transformed their operations with our AI and technology solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
          </div>
        </div>
      </section>,
    </div>,
  ),
},

export default CaseStudiesPage,