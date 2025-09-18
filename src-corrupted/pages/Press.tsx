import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Calendar, Download, Mail, Phone, 
  Globe, Users, TrendingUp, Award, Star, 
  ArrowRight, ExternalLink, Search, Filter
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Press = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchQuery, setSearchQuery] = useState<any>('');

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in AI-Powered Healthcare Analytics',
      date: 'March 15, 2024',
      category: 'Product Launch',
      summary: 'Company introduces revolutionary AI platform that transforms healthcare data analysis and patient care optimization.',
      content: 'Zion Tech Group today announced the launch of its groundbreaking AI-powered healthcare analytics platform, designed to revolutionize how healthcare providers analyze patient data and optimize care delivery. The platform leverages advanced machine learning algorithms to provide real-time insights and predictive analytics.',
      featured: true,
      tags: ['AI', 'Healthcare', 'Product Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'Zion Tech Group Secures $50M Series B Funding Round',
      date: 'March 1, 2024',
      category: 'Business',
      summary: 'Investment will accelerate product development and expand market presence in AI and cloud services.',
      content: 'Zion Tech Group has successfully closed a $50 million Series B funding round led by prominent venture capital firms. The investment will be used to accelerate product development, expand the company\'s market presence, and strengthen its position in the AI and cloud services sector.',
      featured: true,
      tags: ['Funding', 'Business', 'Growth', 'Investment']
    },
    {
      id: 3,
      title: 'Zion Tech Group Named to Forbes AI 50 List',
      date: 'February 20, 2024',
      category: 'Awards',
      summary: 'Company recognized as one of the top 50 AI companies to watch in 2024.',
      content: 'Zion Tech Group has been named to the prestigious Forbes AI 50 list, recognizing the company as one of the most promising artificial intelligence companies to watch in 2024. This recognition highlights the company\'s innovative approach to AI solutions and its growing impact in the technology sector.',
      featured: false,
      tags: ['Awards', 'AI', 'Recognition', 'Forbes']
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands European Operations',
      date: 'February 10, 2024',
      category: 'Business',
      summary: 'Company opens new office in Berlin to serve growing European market.',
      content: 'Zion Tech Group has announced the expansion of its European operations with the opening of a new office in Berlin, Germany. This strategic move will enable the company to better serve its growing European customer base and strengthen partnerships in the region.',
      featured: false,
      tags: ['Expansion', 'Europe', 'Business', 'International']
    },
    {
      id: 5,
      title: 'Zion Tech Group Launches Cybersecurity Innovation Lab',
      date: 'January 25, 2024',
      category: 'Innovation',
      summary: 'New lab focuses on developing next-generation cybersecurity solutions.',
      content: 'Zion Tech Group has launched a new Cybersecurity Innovation Lab dedicated to developing cutting-edge security solutions. The lab will bring together leading security researchers and engineers to create innovative products that address emerging cyber threats.',
      featured: false,
      tags: ['Cybersecurity', 'Innovation', 'Research', 'Security']
    },
    {
      id: 6,
      title: 'Zion Tech Group Partners with Leading Universities',
      date: 'January 15, 2024',
      category: 'Partnerships',
      summary: 'Strategic partnerships established with top research institutions.',
      content: 'Zion Tech Group has announced strategic partnerships with several leading universities to advance research in artificial intelligence, machine learning, and cloud computing. These partnerships will foster innovation and provide access to cutting-edge research.',
      featured: false,
      tags: ['Partnerships', 'Research', 'Education', 'Innovation']
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      format: 'PNG, SVG, EPS',
      size: '2.5 MB',
      downloadUrl: '/media/logo-pack.zip'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of company leadership team',
      format: 'JPG, PNG',
      size: '15.2 MB',
      downloadUrl: '/media/executive-photos.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of key products and services',
      format: 'PNG, JPG',
      size: '8.7 MB',
      downloadUrl: '/media/product-screenshots.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Comprehensive overview of company facts and figures',
      format: 'PDF',
      size: '1.2 MB',
      downloadUrl: '/media/fact-sheet.pdf'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      format: 'PDF',
      size: '3.8 MB',
      downloadUrl: '/media/brand-guidelines.pdf'
    },
    {
      title: 'Press Kit Bundle',
      description: 'Complete press kit with all media assets',
      format: 'ZIP',
      size: '31.4 MB',
      downloadUrl: '/media/complete-press-kit.zip'
    }
  ];

  const companyStats = [
    { label: 'Founded', value: '2020', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Employees', value: '500+', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Countries', value: '25+', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { label: 'Customers', value: '1000+', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  const contactInfo = [
    {
      title: 'Press Inquiries',
      description: 'For media and press-related questions',
      contact: 'press@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 101',
      response: 'Within 4 hours'
    },
    {
      title: 'Media Relations',
      description: 'For interview requests and media opportunities',
      contact: 'media@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 102',
      response: 'Within 24 hours'
    },
    {
      title: 'Investor Relations',
      description: 'For financial and investor inquiries',
      contact: 'investors@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 103',
      response: 'Within 48 hours'
    }
  ];

  const categories = ['all', 'Product Launch', 'Business', 'Awards', 'Innovation', 'Partnerships'];

  const filteredReleases = pressReleases.filter(release => {
    if (selectedCategory !== 'all' && release.category !== selectedCategory) return false;
    if (searchQuery) {
      return release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             release.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
             release.content.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

const Press: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Press | Zion Tech Group</title>
        <meta name="description" content="Press - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Press</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Press;
