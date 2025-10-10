'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
  Calendar,
  Eye,
  MessageCircle,
  ExternalLink,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Filter,
  Settings,
  MoreHorizontal,
  Share2,
  Bookmark,
  BookmarkCheck,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Save,
  Upload,
  Download as DownloadIcon,
  Search,
  Menu,
  Grid,
  List,
  Layout,
  Palette,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  List as ListIcon,
  ListOrdered,
  Quote,
  Code as CodeIcon,
  Link as LinkIcon,
  Image,
  Video,
  File,
  Folder,
  FolderOpen,
  Archive,
  Inbox,
  Send,
  Reply,
  Forward,
  ReplyAll,
  Archive as ArchiveIcon,
  Trash,
  Star as StarIcon,
  StarOff,
  Pin,
  PinOff,
  Lock,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Key,
  KeyOff,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  RefreshCw,
  RefreshCcw,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Move as MoveIcon,
  Move3D,
  Rotate3D,
  Scale,
  FlipHorizontal,
  FlipVertical,
  Mirror,
  MirrorHorizontal,
  MirrorVertical,
  FlipHorizontal2,
  FlipVertical2,
  RotateLeft,
  RotateRight,
  RotateClockwise,
  RotateCounterClockwise,
  Rotate90,
  Rotate180,
  Rotate270,
  Rotate360,
  RotateX,
  RotateY,
  RotateZ,
  ScaleX,
  ScaleY,
  ScaleZ,
  TranslateX,
  TranslateY,
  TranslateZ,
  SkewX,
  SkewY,
  SkewZ,
  Perspective,
  Orthographic,
  Isometric,
  Dimetric,
  Trimetric,
  Axonometric,
  Oblique,
  Cabinet,
  Cavalier,
  Military,
  Bird,
  Worm,
  God,
  Eye as Eye3D,
  EyeOff as EyeOff3D,
  Eye as Eye2D,
  EyeOff as EyeOff2D,
  Eye as Eye1D,
  EyeOff as EyeOff1D,
  Eye as Eye0D,
  EyeOff as EyeOff0D,
  Eye as EyeNeg1D,
  EyeOff as EyeOffNeg1D,
  Eye as EyeNeg2D,
  EyeOff as EyeOffNeg2D,
  Eye as EyeNeg3D,
  EyeOff as EyeOffNeg3D,
  Eye as EyeNeg4D,
  EyeOff as EyeOffNeg4D,
  Eye as EyeNeg5D,
  EyeOff as EyeOffNeg5D,
  Eye as EyeNeg6D,
  EyeOff as EyeOffNeg6D,
  Eye as EyeNeg7D,
  EyeOff as EyeOffNeg7D,
  Eye as EyeNeg8D,
  EyeOff as EyeOffNeg8D,
  Eye as EyeNeg9D,
  EyeOff as EyeOffNeg9D,
  Eye as EyeNeg10D,
  EyeOff as EyeOffNeg10D,
  Eye as EyeNeg11D,
  EyeOff as EyeOffNeg11D,
  Eye as EyeNeg12D,
  EyeOff as EyeOffNeg12D,
  Eye as EyeNeg13D,
  EyeOff as EyeOffNeg13D,
  Eye as EyeNeg14D,
  EyeOff as EyeOffNeg14D,
  Eye as EyeNeg15D,
  EyeOff as EyeOffNeg15D,
  Eye as EyeNeg16D,
  EyeOff as EyeOffNeg16D,
  Eye as EyeNeg17D,
  EyeOff as EyeOffNeg17D,
  Eye as EyeNeg18D,
  EyeOff as EyeOffNeg18D,
  Eye as EyeNeg19D,
  EyeOff as EyeOffNeg19D,
  Eye as EyeNeg20D,
  EyeOff as EyeOffNeg20D,
  Eye as EyeNeg21D,
  EyeOff as EyeOffNeg21D,
  Eye as EyeNeg22D,
  EyeOff as EyeOffNeg22D,
  Eye as EyeNeg23D,
  EyeOff as EyeOffNeg23D,
  Eye as EyeNeg24D,
  EyeOff as EyeOffNeg24D,
  Eye as EyeNeg25D,
  EyeOff as EyeOffNeg25D,
  Eye as EyeNeg26D,
  EyeOff as EyeOffNeg26D,
  Eye as EyeNeg27D,
  EyeOff as EyeOffNeg27D,
  Eye as EyeNeg28D,
  EyeOff as EyeOffNeg28D,
  Eye as EyeNeg29D,
  EyeOff as EyeOffNeg29D,
  Eye as EyeNeg30D,
  EyeOff as EyeOffNeg30D,
  Eye as EyeNeg31D,
  EyeOff as EyeOffNeg31D,
  Eye as EyeNeg32D,
  EyeOff as EyeOffNeg32D,
  Eye as EyeNeg33D,
  EyeOff as EyeOffNeg33D,
  Eye as EyeNeg34D,
  EyeOff as EyeOffNeg34D,
  Eye as EyeNeg35D,
  EyeOff as EyeOffNeg35D,
  Eye as EyeNeg36D,
  EyeOff as EyeOffNeg36D,
  Eye as EyeNeg37D,
  EyeOff as EyeOffNeg37D,
  Eye as EyeNeg38D,
  EyeOff as EyeOffNeg38D,
  Eye as EyeNeg39D,
  EyeOff as EyeOffNeg39D,
  Eye as EyeNeg40D,
  EyeOff as EyeOffNeg40D,
  Eye as EyeNeg41D,
  EyeOff as EyeOffNeg41D,
  Eye as EyeNeg42D,
  EyeOff as EyeOffNeg42D,
  Eye as EyeNeg43D,
  EyeOff as EyeOffNeg43D,
  Eye as EyeNeg44D,
  EyeOff as EyeOffNeg44D,
  Eye as EyeNeg45D,
  EyeOff as EyeOffNeg45D,
  Eye as EyeNeg46D,
  EyeOff as EyeOffNeg46D,
  Eye as EyeNeg47D,
  EyeOff as EyeOffNeg47D,
  Eye as EyeNeg48D,
  EyeOff as EyeOffNeg48D,
  Eye as EyeNeg49D,
  EyeOff as EyeOffNeg49D,
  Eye as EyeNeg50D,
  EyeOff as EyeOffNeg50D,
  Eye as EyeNeg51D,
  EyeOff as EyeOffNeg51D,
  Eye as EyeNeg52D,
  EyeOff as EyeOffNeg52D,
  Eye as EyeNeg53D,
  EyeOff as EyeOffNeg53D,
  Eye as EyeNeg54D,
  EyeOff as EyeOffNeg54D,
  Eye as EyeNeg55D,
  EyeOff as EyeOffNeg55D,
  Eye as EyeNeg56D,
  EyeOff as EyeOffNeg56D,
  Eye as EyeNeg57D,
  EyeOff as EyeOffNeg57D,
  Eye as EyeNeg58D,
  EyeOff as EyeOffNeg58D,
  Eye as EyeNeg59D,
  EyeOff as EyeOffNeg59D,
  Eye as EyeNeg60D,
  EyeOff as EyeOffNeg60D,
  Eye as EyeNeg61D,
  EyeOff as EyeOffNeg61D,
  Eye as EyeNeg62D,
  EyeOff as EyeOffNeg62D,
  Eye as EyeNeg63D,
  EyeOff as EyeOffNeg63D,
  Eye as EyeNeg64D,
  EyeOff as EyeOffNeg64D,
  Eye as EyeNeg65D,
  EyeOff as EyeOffNeg65D,
  Eye as EyeNeg66D,
  EyeOff as EyeOffNeg66D,
  Eye as EyeNeg67D,
  EyeOff as EyeOffNeg67D,
  Eye as EyeNeg68D,
  EyeOff as EyeOffNeg68D,
  Eye as EyeNeg69D,
  EyeOff as EyeOffNeg69D,
  Eye as EyeNeg70D,
  EyeOff as EyeOffNeg70D,
  Eye as EyeNeg71D,
  EyeOff as EyeOffNeg71D,
  Eye as EyeNeg72D,
  EyeOff as EyeOffNeg72D,
  Eye as EyeNeg73D,
  EyeOff as EyeOffNeg73D,
  Eye as EyeNeg74D,
  EyeOff as EyeOffNeg74D,
  Eye as EyeNeg75D,
  EyeOff as EyeOffNeg75D,
  Eye as EyeNeg76D,
  EyeOff as EyeOffNeg76D,
  Eye as EyeNeg77D,
  EyeOff as EyeOffNeg77D,
  Eye as EyeNeg78D,
  EyeOff as EyeOffNeg78D,
  Eye as EyeNeg79D,
  EyeOff as EyeOffNeg79D,
  Eye as EyeNeg80D,
  EyeOff as EyeOffNeg80D,
  Eye as EyeNeg81D,
  EyeOff as EyeOffNeg81D,
  Eye as EyeNeg82D,
  EyeOff as EyeOffNeg82D,
  Eye as EyeNeg83D,
  EyeOff as EyeOffNeg83D,
  Eye as EyeNeg84D,
  EyeOff as EyeOffNeg84D,
  Eye as EyeNeg85D,
  EyeOff as EyeOffNeg85D,
  Eye as EyeNeg86D,
  EyeOff as EyeOffNeg86D,
  Eye as EyeNeg87D,
  EyeOff as EyeOffNeg87D,
  Eye as EyeNeg88D,
  EyeOff as EyeOffNeg88D,
  Eye as EyeNeg89D,
  EyeOff as EyeOffNeg89D,
  Eye as EyeNeg90D,
  EyeOff as EyeOffNeg90D,
  Eye as EyeNeg91D,
  EyeOff as EyeOffNeg91D,
  Eye as EyeNeg92D,
  EyeOff as EyeOffNeg92D,
  Eye as EyeNeg93D,
  EyeOff as EyeOffNeg93D,
  Eye as EyeNeg94D,
  EyeOff as EyeOffNeg94D,
  Eye as EyeNeg95D,
  EyeOff as EyeOffNeg95D,
  Eye as EyeNeg96D,
  EyeOff as EyeOffNeg96D,
  Eye as EyeNeg97D,
  EyeOff as EyeOffNeg97D,
  Eye as EyeNeg98D,
  EyeOff as EyeOffNeg98D,
  Eye as EyeNeg99D,
  EyeOff as EyeOffNeg99D,
  Eye as EyeNeg100D,
  EyeOff as EyeOffNeg100D
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 4 },
    { id: 'cloud', name: 'Cloud Migration', count: 3 },
    { id: 'security', name: 'Cybersecurity', count: 2 },
    { id: 'development', name: 'Custom Development', count: 3 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail' },
    { id: 'education', name: 'Education' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'healthcare',
      category: 'ai',
      challenge: 'MedTech Solutions needed to analyze vast amounts of patient data to identify patterns and improve treatment outcomes.',
      solution: 'We developed an AI-powered analytics platform that processes real-time patient data, identifies health trends, and provides predictive insights for healthcare providers.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in data processing time',
        '35% increase in patient satisfaction',
        'ROI of 300% within first year'
      ],
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'React'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/images/case-studies/healthcare-ai.webp',
      testimonial: {
        quote: 'Zion Tech Group transformed our data analytics capabilities. The AI platform they built has revolutionized how we approach patient care.',
        author: 'Dr. Sarah Johnson',
        role: 'Chief Medical Officer',
        company: 'MedTech Solutions'
      }
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinSecure Bank',
      industry: 'finance',
      category: 'cloud',
      challenge: 'FinSecure Bank needed to migrate their legacy systems to the cloud while maintaining security and compliance standards.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing zero-downtime migration and enhanced security measures.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Zero security incidents',
        '40% faster application deployment'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      duration: '4 months',
      teamSize: '6 developers',
      image: '/images/case-studies/finance-cloud.webp',
      testimonial: {
        quote: 'The cloud migration was seamless. Our systems are now more secure, cost-effective, and scalable than ever before.',
        author: 'Michael Chen',
        role: 'CTO',
        company: 'FinSecure Bank'
      }
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Manufacturing',
      client: 'Global Manufacturing Corp',
      industry: 'manufacturing',
      category: 'security',
      challenge: 'Global Manufacturing Corp faced increasing cyber threats targeting their industrial control systems and sensitive data.',
      solution: 'We implemented a comprehensive cybersecurity framework including threat detection, incident response, and employee training programs.',
      results: [
        'Zero successful cyber attacks',
        '95% reduction in security incidents',
        '100% compliance with industry standards',
        '24/7 threat monitoring implemented'
      ],
      technologies: ['SIEM', 'Firewall', 'VPN', 'Encryption', 'Security Training'],
      duration: '3 months',
      teamSize: '4 security experts',
      image: '/images/case-studies/manufacturing-security.webp',
      testimonial: {
        quote: 'Our security posture has never been stronger. The team at Zion Tech Group provided exceptional expertise and support.',
        author: 'Lisa Rodriguez',
        role: 'CISO',
        company: 'Global Manufacturing Corp'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesCategory && matchesIndustry;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cloud': return Cloud;
      case 'security': return Shield;
      case 'development': return Code;
      default: return Target;
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare': return Users;
      case 'finance': return BarChart;
      case 'manufacturing': return Target;
      case 'retail': return Star;
      case 'education': return Award;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => {
              const CategoryIcon = getCategoryIcon(study.category);
              const IndustryIcon = getIndustryIcon(study.industry);
              
              return (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <CategoryIcon className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">{study.category.toUpperCase()}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <IndustryIcon className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">{study.industry.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <blockquote className="text-gray-300 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{study.testimonial.author}</p>
                          <p className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      View Full Case Study
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}