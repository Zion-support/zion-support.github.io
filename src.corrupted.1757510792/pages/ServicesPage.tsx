import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { useRouter } from 'next/router',
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { generateITServices, getServicesMarketStats, getRecommendedServices } from '@/utils/servicesAutoFeedAlgorithm',
import { ProductListing } from '@/types/listings',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
import { SERVICES } from '@/data/servicesData',
import { useCurrency } from '@/hooks/useCurrency',
// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES,

// Market insights component
const ServicesMarketInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">
    <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">${(stats.averagePrice / 1000).toFixed(1)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.averageRating}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalServices}</div>
          <div className="text-sm text-muted-foreground">Total Services</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableServices}</div>
          <div className="text-sm text-muted-foreground">Available Now</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
      </div>
    </CardContent>
  </Card>
),

// Filter controls
const ServiceFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Services" : "Recommended"}
    </Button>
  </div>
),

// Service card
const ServiceCard = ({ service, onViewDetails }: { service: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency(),
  return (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{service.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your project requirements
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}
;
