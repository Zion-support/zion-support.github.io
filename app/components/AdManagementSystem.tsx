import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  Pause, 
  Eye, 
  BarChart3, 
  Calendar,
  Target,
  DollarSign,
  Users,
  TrendingUp,
  Filter,
  Search,
  Download,
  Upload
} from 'lucide-react';

interface Ad {
  id: string;
  title: string;
  description: string;
  type: 'banner' | 'popup' | 'sidebar' | 'inline';
  status: 'draft' | 'active' | 'paused' | 'completed';
  targetAudience: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  ctaText: string;
  ctaUrl: string;
  tags: string[];
}

interface AdManagementSystemProps {
  className?: string;
}

const AdManagementSystem: React.FC<AdManagementSystemProps> = ({ className = '' } => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filter, setFilter] = useState<'all' | 'draft' | 'active' | 'paused' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'createdAt' | 'budget' | 'performance'>('createdAt');

  // Mock data - in real app, this would come from an API
  useEffect(() => {
    const mockAds: Ad[] = [
      {
        id: '1',
        title: 'AI Revolution Banner',
        description: 'Promote our latest AI solutions',
        type: 'banner',
        status: 'active',
        targetAudience: 'Tech Professionals',
        budget: 10000,
        spent: 3500,
        impressions: 125000,
        clicks: 2500,
        conversions: 125,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
        imageUrl: '/images/ai-banner.jpg',
        ctaText: 'Learn More',
        ctaUrl: '/ai-solutions',
        tags: ['AI', 'Technology', 'B2B']
      },
      {
        id: '2',
        title: 'Edge Computing Popup',
        description: 'Edge computing solutions promotion',
        type: 'popup',
        status: 'paused',
        targetAudience: 'Developers',
        budget: 5000,
        spent: 1200,
        impressions: 45000,
        clicks: 900,
        conversions: 45,
        startDate: '2024-02-01',
        endDate: '2024-11-30',
        createdAt: '2024-01-15T00:00:00Z',
        updatedAt: '2024-01-20T14:20:00Z',
        ctaText: 'Get Started',
        ctaUrl: '/edge-computing',
        tags: ['Edge', 'Computing', 'Developers']
      }
    ];
    setAds(mockAds);
  }, []);

  const filteredAds = ads.filter(ad => {
    const matchesFilter = filter === 'all' || ad.status === filter;
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  };

  const sortedAds = [...filteredAds].sort((a, b) => {
    switch (sortBy) {
      case 'createdAt':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'budget':
        return b.budget - a.budget;
      case 'performance':
        const aPerformance = a.conversions / a.clicks || 0;
        const bPerformance = b.conversions / b.clicks || 0;
        return bPerformance - aPerformance;
      default:
        return 0;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'draft': return 'bg-gray-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'banner': return '📊';
      case 'popup': return '💬';
      case 'sidebar': return '📋';
      case 'inline': return '📝';
      default: return '📄';
    }
  };

  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
  };

  const calculateConversionRate = (conversions: number, clicks: number) => {
    return clicks > 0 ? ((conversions / clicks) * 100).toFixed(2) : '0.00';
  };

  const calculateROI = (spent: number, conversions: number, averageValue: number = 100) => {
    const revenue = conversions * averageValue;
    return spent > 0 ? (((revenue - spent) / spent) * 100).toFixed(1) : '0.0';
  };

  return (
    <div className={`ad-management-system ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ad Management System</h1>
            <p className="text-gray-600 mt-1">Manage and optimize your advertising campaigns</p>
          </div>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create New Ad
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Ads</p>
                <p className="text-2xl font-bold text-blue-900">{ads.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-green-900">
                  {ads.filter(ad => ad.status === 'active').length}
                </p>
              </div>
              <Play className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Total Spent</p>
                <p className="text-2xl font-bold text-purple-900">
                  ${ads.reduce((sum, ad) => sum + ad.spent, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Total Conversions</p>
                <p className="text-2xl font-bold text-orange-900">
                  {ads.reduce((sum, ad) => sum + ad.conversions, 0).toLocaleString()}
                </p>
              </div>
              <Target className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search ads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="createdAt">Sort by Date</option>
              <option value="budget">Sort by Budget</option>
              <option value="performance">Sort by Performance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ads Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {sortedAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Ad Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getTypeIcon(ad.type)}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{ad.title}</h3>
                      <p className="text-sm text-gray-600">{ad.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(ad.status)}`}>
                      {ad.status}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setSelectedAd(ad)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Ad Image */}
                {ad.imageUrl && (
                  <div className="mb-4">
                    <img
                      src={ad.imageUrl}
                      alt={ad.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                {/* CTA Preview */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">CTA:</span>
                    <span className="text-sm font-medium text-blue-600">{ad.ctaText}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(ad.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Impressions</p>
                    <p className="text-lg font-semibold text-gray-900">{ad.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Clicks</p>
                    <p className="text-lg font-semibold text-gray-900">{ad.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">CTR</p>
                    <p className="text-lg font-semibold text-gray-900">{calculateCTR(ad.clicks, ad.impressions)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Conversions</p>
                    <p className="text-lg font-semibold text-gray-900">{ad.conversions}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      ${ad.spent.toLocaleString()} / ${ad.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{calculateROI(ad.spent, ad.conversions)}% ROI</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {ad.status === 'active' ? (
                      <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors">
                        <Pause className="w-4 h-4 inline mr-1" />
                        Pause
                      </button>
                    ) : (
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                        <Play className="w-4 h-4 inline mr-1" />
                        Start
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(ad.startDate).toLocaleDateString()} - {new Date(ad.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {sortedAds.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No ads found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || filter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Get started by creating your first ad campaign'
            }
          </p>
          {!searchTerm && filter === 'all' && (
            <button
              onClick={() => setIsCreating(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create Your First Ad
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdManagementSystem;)))