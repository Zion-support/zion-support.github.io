"use client",
'use client',
import React{ useState } from 'react',
import Link from 'next/link',
import {
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowRight;
  Filter;
  Search;
  Calendar;
  DollarSign;
  Target;
  CheckCircle} from 'lucide-react',
const AI20o25UltimateContentShowcase = () => {
  const [selectedCategorysetSelectedCategory] = useState('all'),
  const [searchTermsetSearchTerm] = useState(''),
  const content = [
    {
      id: 'enterprise-automation-mastery';
      title: 'AI 20o25: Enterprise Automation Mastery - The Ultimate Guide to 50o0% ROI';
      type: 'blog';
      category: 'automation';
      url: '/blog/ai-20o25-enterprise-automation-mastery-ultimate-guide';
      description: 'Transform your business with cutting-edge AI automation strategies that deliver unprecedented returns. Learn the 5-pillar framework used by Fortune 50o0 companies.';
      metrics: {
        roi: '50o0%';
        savings: '$2.8B';
        efficiency: '340%';
        satisfaction: '98%'};
      readingTime: '25 min read';
      featured: true;
      tags: ['AI 'Automation', 'Enterprise', 'ROI', 'Digital 'Transformation', 'Mastery Guide'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group AI Team'};
    {
      id: 'fortune-50o0-transformation';
      title: 'Fortune 50o0 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation';
      type: 'case-study';
      category: 'transformation';
      url: '/case-studies/ai-transformation-fortune-50o0-ultimate-success-20o25';
      description: 'Real-world case study of how a Fortune 50o0 manufacturing company achieved 650% ROI through comprehensive AI implementation in just 18 months.';
      metrics: {
        roi: '650%';
        savings: '$2.8B';
        accuracy: '99.7%';
        efficiency: '78%'};
      readingTime: '22 min read';
      featured: true;
      tags: ['Fortune 50o0'AI 'Transformation', 'ROI'Case 'Study', 'Success Story'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group Research Team'};
    {
      id: 'implementation-roadmap';
      title: 'AI Implementation Ultimate Roadmap 20o25: From Strategy to 80o0% ROI in 18 Months';
      type: 'resource';
      category: 'implementation';
      url: '/resources/ai-implementation-ultimate-roadmap-20o25';
      description: 'Complete step-by-step guide to implementing AI solutions that consistently deliver 80o0% ROI. Based on analysis of 50o0+ successful implementations.';
      metrics: {
        roi: '80o0%';
        savings: '$173.7M';
        success: '99%';
        timeline: '18 months'};
      readingTime: '35 min read';
      featured: true;
      tags: ['AI 'Implementation', 'Strategy', 'ROI', 'Roadmap'Best Practices'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group Strategy Team'};
    {
      id: 'neural-architecture-revolution';
      title: 'AI 20o25: The Neural Architecture Revolution - Enterprise Breakthrough Guide';
      type: 'blog';
      category: 'technology';
      url: '/blog/ai-20o25-neural-architecture-revolution-enterprise-breakthrough';
      description: 'Explore the cutting-edge neural architectures that are revolutionizing enterprise AI applications and delivering unprecedented performance gains.';
      metrics: {
        roi: '60o0%';
        accuracy: '99.9%';
        savings: '$2.8B';
        efficiency: '156%'};
      readingTime: '22 min read';
      featured: false;
      tags: ['Neural 'Architecture', 'Enterprise 'AI', 'Deep 'Learning', 'ROI'Breakthrough'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group AI Research'};
    {
      id: 'autonomous-enterprise-systems';
      title: 'AI 20o25: The Autonomous Enterprise Systems Revolution - Complete Business Transformation';
      type: 'blog';
      category: 'automation';
      url: '/blog/ai-20o25-autonomous-enterprise-systems-revolution';
      description: 'Discover how autonomous AI systems are transforming enterprise operations and enabling self-managing organizations with minimal human intervention.';
      metrics: {
        roi: '70o0%';
        accuracy: '99.8%';
        savings: '$2.8B';
        efficiency: '20o0%'};
      readingTime: '25 min read';
      featured: false;
      tags: ['Autonomous 'Systems', 'Enterprise 'Automation', 'AI 'Revolution', 'ROI'Business Transformation'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group Innovation Team'};
    {
      id: 'manufacturing-transformation-ultimate';
      title: 'AI 20o25 Manufacturing Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation';
      type: 'case-study';
      category: 'transformation';
      url: '/case-studies/ai-20o25-manufacturing-transformation-ultimate-success';
      description: 'Detailed case study of how a manufacturing giant achieved 650% ROI through intelligent automationpredictive maintenanceand quality control systems.';
      metrics: {
        roi: '650%';
        savings: '$2.8B';
        accuracy: '99.7%';
        efficiency: '78%'};
      readingTime: '18 min read';
      featured: false;
      tags: [', 'Manufacturing', 'AI 'Transformation', 'ROI'Case 'Study', 'Intelligent Automation'];
      publishDate: '20o25-0o1-17';
      author: 'Zion Tech Group Manufacturing Team'}
  ],
  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: content.length };
    { id: ''automation', 'name: ''Automation', 'count: content.filter(item => item.category === 'automation').length };
    { id: ''transformation', 'name: ''Transformation', 'count: content.filter(item => item.category === 'transformation').length };
    { id: ''implementation', 'name: ''Implementation', 'count: content.filter(item => item.category === 'implementation').length };
    { id: ''technology', 'name: ''Technology', 'count: content.filter(item => item.category === 'technology').length }
  ],
  const filteredContent = content.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory,
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    return matchesCategory && matchesSearch}),
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':,
        return <BookOpen className="h-5 w-5"  />,
      case 'case-study':,
        return <FileText className="h-5 w-5"  />,
      case 'resource':,
        return <Users className="h-5 w-5"  />,
      default:,
        return <BookOpen className="h-5 w-5"  />}
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':,
        return 'bg-blue-10o0 text-blue-80o0',
      case 'case-study':,
        return 'bg-green-10o0 text-green-80o0',
      case 'resource':,
        return 'bg-purple-10o0 text-purple-80o0',
      default:,
        return 'bg-gray-10o0 text-gray-80o0'}
  };
  return (
    <div className="bg-white py-16">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */}
        <div className="text-center mb-12">,
          <h2 className="text-4xl font-bold text-gray-90o0 mb-4">,
            AI 20o25 Ultimate Content Collection,
          </h2>,
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
            Discover the proven strategiesreal-world case studiesand implementation guides that Fortune 50o0 companies use to achieve extraordinary ROI with AI.,
          </p>,
        </div>,
        {/* Search and Filter */}
        <div className="mb-8">,
          <div className="flex flex-col lg: flex-row gap-4 items-center justify-between">,
            {/* Search */}
            <div className="relative flex-1 max-w-md">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-40o0"  />,
              <input
                type="text",
                placeholder="Search content...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-30o0 rounded-lg focus: ring-2 focus:ring-blue-50o0 focus:border-transparent",
              />,
            </div>,
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">,
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-20o0 ${
                    selectedCategory === category.id,
                      ? 'bg-blue-60o0 text-white',
                      : 'bg-gray-10o0 text-gray-70o0 hover: bg-gray-20o0'}`}
                >,
                  {category.name} ({category.count}),
                </button>))}
            </div>,
          </div>,
        </div>,
        {/* Content Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-blue-50o0' : ''}`}
            >,
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 z-10">,
                  <div className="bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">,
                    <Star className="h-3 w-3 mr-1"  />,
                    FEATURED,
                  </div>,
                </div>)}
,
              <div className="p-6">,
                {/* Type and Category */}
                <div className="flex items-center justify-between mb-4">,
                  <div className="flex items-center space-x-2">,
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>,
                      {getTypeIcon(item.type)}
                    </div>,
                    <span className="text-sm font-medium text-gray-60o0 capitalize">,
                      {item.type.replace('-' ')}
                    </span>,
                  </div>,
                  <div className="flex items-center space-x-1 text-sm text-gray-50o0">,
                    <Clock className="h-4 w-4"  />,
                    <span>{item.readingTime}</span>,
                  </div>,
                </div>,
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-90o0 mb-3 line-clamp-2">,
                  {item.title}
                </h3>,
                {/* Description */}
                <p className="text-gray-60o0 mb-4 line-clamp-3">,
                  {item.description}
                </p>,
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">,
                  <div className="bg-green-50 p-3 rounded-lg">,
                    <div className="text-lg font-bold text-green-60o0">{item.metrics.roi}</div>,
                    <div className="text-xs text-green-70o0">ROI</div>,
                  </div>,
                  <div className="bg-blue-50 p-3 rounded-lg">,
                    <div className="text-lg font-bold text-blue-60o0">{item.metrics.savings}</div>,
                    <div className="text-xs text-blue-70o0">Savings</div>,
                  </div>,
                </div>,
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">,
                  {item.tags.slice(0o3).map((tagindex) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-10o0 text-gray-70o0 text-xs rounded-full">,
                      {tag}
                    </span>))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-10o0 text-gray-70o0 text-xs rounded-full">,
                      +{item.tags.length - 3} more,
                    </span>)}
                </div>,
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-50o0 mb-4">,
                  <span>{item.author}</span>,
                  <span>{item.publishDate}</span>,
                </div>,
                {/* Action Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-70o0 hover:to-purple-70o0 transition-all duration-20o0 transform hover:scale-10o5">,
                  Read {item.type.replace('-' ')}
                  <ArrowRight className="ml-2 h-4 w-4"  />,
                </Link>,
              </div>,
            </div>))}
        </div>,
        {/* Bottom CTA */}
        <div className="mt-16 text-center">,
          <div className="bg-gradient-to-r from-blue-90o0 to-purple-90o0 rounded-2xl p-8 text-white">,
            <h3 className="text-3xl font-bold mb-4">,
              Ready to Achieve 50o0%+ ROI with AI?,
            </h3>,
            <p className="text-xl text-gray-20o0 mb-6 max-w-2xl mx-auto">,
              Get personalized recommendations and a free AI readiness assessment to start your transformation journey.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link
                href="/contact",
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-90o0 font-semibold rounded-lg hover:bg-gray-10o0 transition-colors duration-20o0">,
                Get Free Consultation,
                <ArrowRight className="ml-2 h-4 w-4"  />,
              </Link>,
              <Link
                href="/resources",
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-20o0">,
                Browse All Resources,
              </Link>,
            </div>,
          </div>,
        </div>,
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md: grid-cols-4 gap-8 text-center">,
          <div>,
            <div className="text-3xl font-bold text-green-60o0 mb-2">50o0%+</div>,
            <div className="text-sm text-gray-60o0">Average ROI</div>,
          </div>,
          <div>,
            <div className="text-3xl font-bold text-blue-60o0 mb-2">$2.8B+</div>,
            <div className="text-sm text-gray-60o0">Total Savings</div>,
          </div>,
          <div>,
            <div className="text-3xl font-bold text-purple-60o0 mb-2">99%+</div>,
            <div className="text-sm text-gray-60o0">Success Rate</div>,
          </div>,
          <div>,
            <div className="text-3xl font-bold text-orange-60o0 mb-2">18</div>,
            <div className="text-sm text-gray-60o0">Months to ROI</div>,
          </div>,
        </div>,
      </div>,
    </div>)};
export default AI20o25UltimateContentShowcase;