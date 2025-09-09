import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Code, 
  Brain, 
  Database, 
  Shield, 
  Cloud, 
  Smartphone, 
  Globe, 
  Zap, 
  Cpu,
  Network,
  Server,
  Monitor,
  Smartphone as Mobile,
  Palette,
  BarChart3,
  Lock,
  Rocket,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Settings,
  Wrench,
  Layers
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  serviceCount: number;
  popularServices: string[];
  tags: string[];
}

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: Category[] = [
    {
      id: 'ai-development',
      name: 'AI Development',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      serviceCount: 1247,
      popularServices: ['Machine Learning Models', 'ChatGPT Integration', 'Computer Vision', 'Predictive Analytics'],
      tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Models']
    },
    {
      id: 'software-development',
      name: 'Software Development',
      description: 'Full-stack development services for web, mobile, and desktop applications using modern technologies.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      serviceCount: 2156,
      popularServices: ['Web Applications', 'Mobile Apps', 'API Development', 'System Architecture'],
      tags: ['React', 'Node.js', 'Python', 'Java', 'Mobile Development']
    },
    {
      id: 'data-science',
      name: 'Data Science',
      description: 'Data analysis, visualization, and insights to drive business decisions and optimize operations.',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      serviceCount: 892,
      popularServices: ['Data Analysis', 'Business Intelligence', 'Statistical Modeling', 'Data Visualization'],
      tags: ['Python', 'R', 'SQL', 'Tableau', 'Power BI']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      serviceCount: 567,
      popularServices: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      tags: ['Security', 'Compliance', 'Auditing', 'Penetration Testing']
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Cloud infrastructure, migration, and management services for scalable and reliable solutions.',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      serviceCount: 743,
      popularServices: ['AWS Migration', 'Azure Solutions', 'DevOps', 'Container Orchestration'],
      tags: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: Mobile,
      color: 'from-pink-500 to-rose-500',
      serviceCount: 634,
      popularServices: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter Development'],
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'Mobile UI/UX']
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern web applications with responsive design and cutting-edge technologies.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
      serviceCount: 1892,
      popularServices: ['Frontend Development', 'Backend Systems', 'E-commerce', 'Progressive Web Apps'],
      tags: ['React', 'Vue.js', 'Angular', 'Node.js', 'Full Stack']
    },
    {
      id: 'devops',
      name: 'DevOps & Infrastructure',
      description: 'Automation, deployment, and infrastructure management for modern software development.',
      icon: Settings,
      color: 'from-gray-500 to-slate-500',
      serviceCount: 456,
      popularServices: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      tags: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Monitoring']
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive user experiences.',
      icon: Palette,
      color: 'from-yellow-500 to-orange-500',
      serviceCount: 378,
      popularServices: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      tags: ['User Experience', 'User Interface', 'Design Systems', 'Prototyping']
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and blockchain infrastructure development.',
      icon: Layers,
      color: 'from-emerald-500 to-green-500',
      serviceCount: 234,
      popularServices: ['Smart Contracts', 'DApps', 'DeFi Solutions', 'NFT Development'],
      tags: ['Ethereum', 'Smart Contracts', 'DeFi', 'Web3', 'Blockchain']
    },
    {
      id: 'iot-development',
      name: 'IoT Development',
      description: 'Internet of Things solutions for connected devices and smart systems.',
      icon: Cpu,
      color: 'from-blue-600 to-indigo-600',
      serviceCount: 189,
      popularServices: ['Sensor Integration', 'Device Management', 'Data Collection', 'Smart Home'],
      tags: ['IoT', 'Embedded Systems', 'Sensors', 'Smart Devices']
    },
    {
      id: 'consulting',
      name: 'IT Consulting',
      description: 'Strategic technology consulting to help businesses make informed decisions.',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      serviceCount: 445,
      popularServices: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Selection'],
      tags: ['Strategy', 'Consulting', 'Digital Transformation', 'Process Improvement']
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayedCategories = selectedCategory === 'all' 
    ? filteredCategories 
    : filteredCategories.filter(category => category.id === selectedCategory);

  return (
    <>
      <SEO
        title="Service Categories - Zion Tech Group"
        description="Explore our comprehensive range of AI and technology service categories. Find the perfect solution for your business needs."
        keywords="service categories, AI services, tech services, software development, data science, cybersecurity"
        canonical="https://ziontechgroup.com/categories"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Service Categories</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of AI and technology services organized by category
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light text-white placeholder:text-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedCategories.map((category) => (
              <Card key={category.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-zion-blue-light/20 text-zion-cyan">
                      {category.serviceCount.toLocaleString()}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Popular Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Popular Services</h4>
                    <div className="space-y-1">
                      {category.popularServices.slice(0, 3).map((service, index) => (
                        <div key={index} className="text-xs text-zion-slate-light">
                          • {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.tags.slice(0, 4).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      <Link to={`/marketplace?category=${category.id}`}>
                        Browse Services
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                      <Link to={`/marketplace?category=${category.id}&view=grid`}>
                        View All
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Navigation */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 mb-16">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Category Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                  className={`p-3 rounded-lg text-center transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple/20 border border-zion-purple text-zion-cyan'
                      : 'bg-zion-blue-light/10 border border-transparent text-zion-slate-light hover:bg-zion-blue-light/20 hover:text-white'
                  }`}
                >
                  <category.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-xs font-medium">{category.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-purple/20 border border-zion-purple/30">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                  Explore our marketplace to find the perfect AI and technology services for your business needs. 
                  All basic services are completely free to access.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                    <Link to="/marketplace">Browse Marketplace</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                    <Link to="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}