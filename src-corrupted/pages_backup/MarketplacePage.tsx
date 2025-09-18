import React from 'react';

<<<<<<< HEAD


import { useRouter } from 'next/router'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { useTranslation } from 'react-i18next',
import { motion, AnimatePresence } from 'framer-motion',

import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react'
import { NextSeo  } from '@/components/NextSeo';
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { ProductListing  } from '@/types/listings';
import { SkeletonCard  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent, CardHeader  } from '@/components/ui/card';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';
import { NextSeo } from '@/components/NextSeo';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { INITIAL_MARKETPLACE_PRODUCTS  } from '@/data/initialMarketplaceProducts';
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';





const MarketplaceInsights = ({ stats }: { stats: any },) => (
const MarketplaceInsights = ({ stats }: { stats: any }) => (

  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.availableCount}</div>
          <div className="text-sm text-muted-foreground">Available</div>
        </div>
      </div>
    </CardContent>
  </Card>
)
// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any,) => (
}: any) => (


  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
// Market insights component;
const MarketplaceInsights = ({ stats }: { stats: any },) => (;
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">;
    <CardContent className="p-6">;
      <div className="flex items-center gap-2 mb-4">;
        <TrendingUp className="h-5 w-5 text-blue-400" />;
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>;
      </div>;
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">;
        <div className="text-center">;
          <div className="text-2xl font-bold text-blue-400">${Math && Math.round(stats && stats.averagePrice / 1000)}k</div>;
          <div className="text-sm text-muted-foreground">Avg Price</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-green-400">{stats && stats.averageRating.toFixed(1)}</div>;
          <div className="text-sm text-muted-foreground">Avg Rating</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-purple-400">{stats && stats.totalProducts}</div>;
          <div className="text-sm text-muted-foreground">Products</div>;
        </div>;
        <div className="text-center">;
          <div className="text-2xl font-bold text-orange-400">{stats && stats.availableCount}</div>;
          <div className="text-sm text-muted-foreground">Available</div>;
        </div>;
      </div>;
    </CardContent>;
  </Card>;
),;

// Filter controls;
const MarketplaceFilterControls = ({;
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading;
}: any,) => (;
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">;
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}

    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e,) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">




        <option value="">All Categories</option>
        {categories.map((cat: string,) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e,) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">

        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Sparkles className="h-4 w-4 mr-1" />
      {showRecommended ? "All Products" : "Recommended"}


    </Button>;
  </div>;
),;
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useAuth } from '@/context/auth/AuthProvider';
import { toast } from '@/hooks/use-toast';
// Product card;
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: (,) => void, onAddToCart: () => void }) => {;
  const { formatPrice } = useCurrency(),;

  return (
  <Card className="h-full hover:shadow-lg transition-shadow">;
    <CardHeader className="pb-3">;
      <div className="flex items-start justify-between">;
        <div className="flex-1 min-w-0">;
          <h3 className="font-semibold text-lg truncate">{product && product.title}</h3>;
          <p className="text-sm text-muted-foreground">{product && product.category}</p>;
          <div className="flex items-center gap-2 mt-2">;
            <Badge variant="secondary" className="text-xs">{product && product.brand}</Badge>;
            {product && product.aiScore && product && product.aiScore > 80 && (;
              <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600">;
                AI {product && product.aiScore}
              </Badge>;
            )}
          </div>;
        </div>;
        <div className="text-right">;
          <div className="text-xl font-bold text-blue-600">{formatPrice(product && product.price ?? 0)}</div>;
          <Badge variant={product && product.availability === "Available" ? "default" : "outline"} className="text-xs">;
            {product && product.availability}
;
import { use_router } from 'next / router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { use_translation } from 'react - i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';
import { NextSeo } from '@/components / NextSeo';
import { useInfiniteScrollPagination } from '@/hooks / useInfiniteScroll';
import { ProductListing } from '@/types / listings';
import { SkeletonCard } from '@/components / ui / skeleton';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader } from '@/components / ui / card';
import Spinner from '@/components / ui / spinner';
import { MARKETPLACE_LISTINGS } from '@/data / listing_data';
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data / initialMarketplaceProducts';
import { use_currency } from '@/hooks / use_currency';
import {logErrorToProduction} from '@/utils / production_logger';
// Market insights component;
const MarketplaceInsights = ({ stats }: { stats: any }, ) =>: any (
  <Card className="bg - gradient - to - r from - blue - 900 / 20 to - purple - 900 / 20 border - blue - 700 / 30 mb - 6">;
    <CardContent className="p - 6">;
      <div className="flex items - center gap - 2 mb - 4">;
        <TrendingUp className="h - 5 w - 5 text - blue - 400" />;
        <h3 className="text - lg font - semibold">Marketplace Insights</h3>;
      </div>;
      <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4">;
        <div className="text - center">;
          <div className="text - 2xl font - bold text - blue - 400">${Math.round (stats.average_price / 1000)}k</div>;
          <div className="text - sm text - muted - foreground">Avg Price</div>;
        </div>;
        <div className="text - center">;
          <div className="text - 2xl font - bold text - green - 400">{stats.average_rating.to_fixed (1)}</div>;
          <div className="text - sm text - muted - foreground">Avg Rating</div>;
        </div>;
        <div className="text - center">;
          <div className="text - 2xl font - bold text - purple - 400">{stats.total_products}</div>;
          <div className="text - sm text - muted - foreground">Products</div>;
        </div>;
        <div className="text - center">;
          <div className="text - 2xl font - bold text - orange - 400">{stats.available_count}</div>;
          <div className="text - sm text - muted - foreground">Available</div>;
        </div>;
      </div>;
    </CardContent>;
  </Card>),
// Filter controls;
const MarketplaceFilterControls = ({
  sort_by, setSortBy, filter_category, setFilterCategory, categories, show_recommended, setShowRecommended, loading;
}: any, ) =>: any (
  <div className="flex flex - wrap gap - 4 mb - 6 p - 4 bg - muted / 30 rounded - lg relative">;
    {loading && <Spinner className="absolute right - 4 top - 4 h - 4 w - 4 text - primary" />}
    <div className="flex items - center gap - 2">;
      <Filter className="h - 4 w - 4 text - muted - foreground" />;
      <select value={filter_category} on_change={(e, ) => setFilterCategory (e.target.value)} className="bg - background border border - border px - 3 py - 2 rounded">;
        <option value="">All Categories</option>;
        {categories.map ((cat: string, ) => <option key={cat} value={cat}>{cat}</option>)}
      </select>;
    </div>;
    <div className="flex items - center gap - 2">;
      <SortAsc className="h - 4 w - 4 text - muted - foreground" />;
      <select value={sort_by} on_change={(e, ) => setSortBy (e.target.value)} className="bg - background border border - border px - 3 py - 2 rounded">;
        <option value="newest">Newest First</option>;
        <option value="price - low">Price: Low to High</option>;
        <option value="price - high">Price: High to Low</option>;
        <option value="rating">Highest Rated</option>;
        <option value="popular">Most Popular</option>;
        <option value="ai - score">AI Score</option>;
      </select>;
    </div>;
    <Button variant={show_recommended ? "default" : "outline"} size="sm" on_click={() => setShowRecommended (!show_recommended)}>;
      <Sparkles className="h - 4 w - 4 mr - 1" />;
      {show_recommended ? "All Products" : "Recommended"}
    </Button>;
  </div>),
import { use_dispatch } from 'react - redux';
import type { AppDispatch } from '@/store';
import { add_item } from '@/store / cart_slice';
import { use_auth } from '@/context / auth / AuthProvider';
import { toast } from '@/hooks / use - toast';
// Product card;
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: (id: string) =>: any void, onAddToCart: () => void }) => {
  const { format_price } = use_currency ();
  return (
  <Card className="h - full hover:shadow - lg transition - shadow">;
    <CardHeader className="pb - 3">;
      <div className="flex items - start justify - between">;
        <div className="flex - 1 min - w-0">;
          <h3 className="font - semibold text - lg truncate">{product.title}</h3>;
          <p className="text - sm text - muted - foreground">{product.category}</p>;
          <div className="flex items - center gap - 2 mt - 2">;
            <Badge variant="secondary" className="text - xs">{product.brand}</Badge>;
            {product.ai_score && product.ai_score > 80 && (
              <Badge variant="default" className="text - xs bg - gradient - to - r from - blue - 600 to - purple - 600">;
                AI {product.ai_score}
              </Badge>)}
          </div>;
        </div>;
        <div className="text - right">;
          <div className="text - xl font - bold text - blue - 600">{format_price (product.price ?? 0)}</div>;
          <Badge variant={product.availability === "Available" ? "default" : "outline"} className="text - xs">;
            {product.availability}
          </Badge>;
        </div>;
      </div>;
    </CardHeader>;


          onClick={onAddToCart}



          aria-label="Add to cart"
          data-testid="add-to-cart-listing-button"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}
// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number },) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

    {Array.from({ length: count }).map((_, i,) => <SkeletonCard key={i} />)}
  </div>
)
// Main component
function MarketplacePageContent() {
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated } = useAuth()
  const [sortBy, setSortBy] = useState('newest')
  const [filterCategory, setFilterCategory] = useState('')
  const [showRecommended, setShowRecommended] = useState(false)
  const fetchProducts = useCallback(async (page: number, limit: number,) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS]
      // Apply category filtering
      let processedDataset = fullDataset
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory)
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>;
),;
// Main component;
function MarketplacePageContent() {;
  const router = useRouter(),;
  const { t } = useTranslation(),;
  const dispatch = useDispatch<AppDispatch>(),;
  const { isAuthenticated } = useAuth(),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  const fetchProducts = useCallback(async (page: number, limit: number) => {;
    // Simulate API delay;
    await new Promise(resolve => setTimeout(resolve, 300)),;
    try {;
      // Combine initial products with marketplace listings;
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],;
      // Apply category filtering;
      let processedDataset = fullDataset,;
      if (filterCategory) {;
        processedDataset = processedDataset.filter(p => p.category === filterCategory);



      }
      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset.filter(p => (p.rating |0) >= 4.5 |(p.aiScore |0) >= 85)
      }
      // Sort the processed dataset
      processedDataset.sort((a, b,) => {
        switch (sortBy) {
          case 'price-low':
            return (a.price |0) - (b.price |0)
          case 'price-high':
            return (b.price |0) - (a.price |0)
          case 'rating':
            return (b.rating |0) - (a.rating |0)
          case 'popular':
            return (b.reviewCount |0) - (a.reviewCount |0)
          case 'ai-score':
            return (b.aiScore |0) - (a.aiScore |0)
          default: // 'newest'
            return new Date(b.createdAt |'').getTime() - new Date(a.createdAt |'').getTime()
        }
      })
      // Slice for pagination
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const items = processedDataset.slice(startIndex, endIndex)
      return {
        items
        hasMore: endIndex < processedDataset.length
        total: processedDataset.length
      }
    } catch (error) {
      logErrorToProduction('Error in fetchProducts:', { data: error })
      throw new Error('Failed to load marketplace data. Please try again.')
    }
  }, [sortBy, filterCategory, showRecommended])

  }, [sortBy, filterCategory, showRecommended]),

  const {
    items: products
    loading
    error
    hasMore
    total
    isFetching
    lastElementRef
    refresh
    scrollToTop
    loadMore
  } = useInfiniteScrollPagination(fetchProducts, 12)
  // Refresh when filters change
  useEffect((,) => {
    const timeoutId = setTimeout((,) => {
      refresh()
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh])
  const marketStats = useMemo((,) => {
    if (products.length === 0) return null
    return {
      averagePrice: products.reduce((sum, p,) => sum + (p.price |0), 0) / products.length
      averageRating: products.reduce((sum, p,) => sum + (p.rating |0), 0) / products.length
      totalProducts: products.length
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
      availableCount: products.filter(p => p.availability === "Available").length
    }
  }, [products])
  const categories = useMemo((,) => {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]
  }, [])
  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect((,) => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800)
    window.addEventListener('scroll', handleScroll)
  }, []),

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Loading state
  if (loading && products.length === 0) {

          data-testid="add-to-cart-listing-button">;
          <ShoppingCart className="h-4 w-4" />;
        </Button>;
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}>;
          View Details;
        </Button>;
      </div>;
    </CardContent>;
  </Card>;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
};

export default MarketplacePage;
