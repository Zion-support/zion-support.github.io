import React, { useState, useEffect } from 'react'.
import { motion, AnimatePresence } from 'framer-motion'.
import React, { Plus, Edit, Trash2, Play, Pause, Eye, BarChart3, Calendar, Target, DollarSign, Users, TrendingUp, Filter, Search, Download, Upload } from 'lucide-react'.
interface Ad {
  id: string.
  title: string.
  description: string.
  type: 'banner' | 'popup' | 'sidebar' | 'inline';'
  status: 'draft' | 'active' | 'paused' | 'completed';'
  targetAudience: string.
  budget: number.
  spent: number.
  impressions: number.
  clicks: number.
  conversions: number.
  startDate: string.
  endDate: string.
  createdAt: string.
  updatedAt: string.
  imageUrl?: string.
  ctaText: string.
  ctaUrl: string.
  tags: string[];
}

interface AdManagementSystemProps {
  className?: string.
}

const AdManagementSystem: React.FC<AdManagementSystemProps> = ({ className = '' }) => {
  const [ads, setAds] = useState<Ad[]>([]).
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null).
  const [isCreating, setIsCreating] = useState(false).
  const [isEditing, setIsEditing] = useState(false).
  const [filter, setFilter] = useState<'all' | 'draft' | 'active' | 'paused' | 'completed'>('all');'
  const [searchTerm, setSearchTerm] = useState('').
  const [sortBy, setSortBy] = useState<'createdAt' | 'budget' | 'performance'>('createdAt');'

  // Mock data - in real app, this would come from an API.
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
        tags: ['AI', 'Technology', 'B2B'],
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
        tags: ['Edge', 'Computing', 'Developers'],
      }
    ];
    setAds(mockAds).
  }, []).

  const filteredAds = ads.filter(ad => {
    const matchesFilter = filter === 'all' || ad.status === filter.
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())).
    return matchesFilter && matchesSearch.
  }).

  const sortedAds = [...filteredAds].sort((a, b) => {
    switch (sortBy) {
      case 'createdAt':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime().
      case 'budget':
        return b.budget - a.budget.
      case 'performance':
        const aPerformance = a.conversions / a.clicks || 0.
        const bPerformance = b.conversions / b.clicks || 0.
        return bPerformance - aPerformance.
      default:
        return 0.
    }
  }).

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';'
      case 'paused': return 'bg-yellow-500';'
      case 'draft': return 'bg-gray-500';'
      case 'completed': return 'bg-blue-500';'
      default: return 'bg-gray-500'.
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'banner': return '📊';'
      case 'popup': return '💬';'
      case 'sidebar': return '📋';'
      case 'inline': return '📝';'
      default: return '📄'.
    }
  };

  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00'.
  };

  const calculateConversionRate = (conversions: number, clicks: number) => {
    return clicks > 0 ? ((conversions / clicks) * 100).toFixed(2) : '0.00'.
  };

  const calculateROI = (spent: number, conversions: number, averageValue: number = 100) => {
    const revenue = conversions * averageValue.
    return spent > 0 ? (((revenue - spent) / spent) * 100).toFixed(1) : '0.0'.
  };

  return (
    <div className={`ad-management-system ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">"
        <div className="flex items-center justify-between mb-6">
            onClick={() => setIsCreating(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">"
          <div className="bg-blue-50 p-4 rounded-lg">"
            <div className="flex items-center justify-between">
                  {ads.filter(ad => ad.status === 'active').length}
              <Play className="w-8 h-8 text-green-600" />
                <p className="text-2xl font-bold text-purple-900">
                  ${ads.reduce((sum, ad) => sum + ad.spent, 0).toLocaleString()}
              <DollarSign className="w-8 h-8 text-purple-600" />
                <p className="text-2xl font-bold text-orange-900">
                  {ads.reduce((sum, ad) => sum + ad.conversions, 0).toLocaleString()}
              <Target className="w-8 h-8 text-orange-600" />
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">"
        <div className="flex flex-col md:flex-row gap-4">"
          <div className="flex-1">"
            <div className="relative">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search ads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
          <div className="flex gap-4">
            <select.
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
      {/* Ads Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {sortedAds.map((ad) => (
            <motion.div.
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Ad Header */}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(ad.status)}`}>
                      {ad.status}
                    <div className="flex gap-1">
                      <button.
                        onClick={() => setSelectedAd(ad)}
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        onClick={() => setIsEditing(true)}
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                        <Trash2 className="w-4 h-4" />
                {/* Ad Image */}
                {ad.imageUrl && (
                  <div className="mb-4">
                    <img.
                      src={ad.imageUrl}
                      alt={ad.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                )}
                
                {/* CTA Preview */}
                  <div className="text-sm text-gray-500">
                    {new Date(ad.createdAt).toLocaleDateString()}
              {/* Performance Metrics */}
              <div className="p-6">"
                <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Action Buttons */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">"
                <div className="flex items-center justify-between">"
                  <div className="flex gap-2">"
                    {ad.status === 'active' ? (
                      <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors">"
                        <Pause className="w-4 h-4 inline mr-1" />
                    ) : (
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">"
                        <Play className="w-4 h-4 inline mr-1" />
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(ad.startDate).toLocaleDateString()} - {new Date(ad.endDate).toLocaleDateString()}
          ))}
      {/* Empty State */}
      {sortedAds.length === 0 && (
            {searchTerm || filter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Get started by creating your first ad campaign'
            }
          {!searchTerm && filter === 'all' && (
            <button.
              onClick={() => setIsCreating(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
          )}
      )}
};

export default AdManagementSystem.