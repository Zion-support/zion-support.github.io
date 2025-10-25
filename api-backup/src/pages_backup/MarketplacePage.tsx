


import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';import { useTranslation  } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { useTranslation } from 'react-i18next',
import { motion, AnimatePresence } from 'framer-motion',
;
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw  } from 'lucide-react';
import { NextSeo   } from '@/components/NextSeo';import { useInfiniteScrollPagination   } from '@/hooks/useInfiniteScroll';
import { ProductListing   } from '@/types/listings';import { SkeletonCard   } from '@/components/ui/skeleton';
import { Button   } from '@/components/ui/button';import { Badge   } from '@/components/ui/badge';
import { Card, CardContent, CardHeader   } from '@/components/ui/card';import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';import { useTranslation  } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw  } from 'lucide-react';
import { NextSeo  } from '@/components/NextSeo';import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { ProductListing  } from '@/types/listings';import { SkeletonCard  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';import { Badge  } from '@/components/ui/badge';
import { Card, CardContent, CardHeader  } from '@/components/ui/card';import Spinner from '@/components/ui/spinner';
import { MARKETPLACE_LISTINGS   } from '@/data/listingData';
import { INITIAL_MARKETPLACE_PRODUCTS   } from '@/data/initialMarketplaceProducts';import { useCurrency   } from '@/hooks/useCurrency';
import { logErrorToProduction } from '@/utils/productionLogger';const MarketplaceInsights = ({ stats }: { stats: any },) => (
const MarketplaceInsights = ({ stats }: { stats: any }) => (

  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6"></Card>
    <CardContent className="p-6"></CardContent>
      <div className="flex items-center gap-2 mb-4"></div>
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
                </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
                </div>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-green-400"></div>
                {stats.averageRating.toFixed(1)}
                </div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
                </div>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-purple-400"></div>
                {stats.totalProducts}
                </div>
          <div className="text-sm text-muted-foreground">Products</div>
                </div>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-orange-400"></div>
                {stats.availableCount}
                </div>
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


  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative"></div>
// Market insights component
const MarketplaceInsights = ({ stats }: { stats: any },) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6"></Card>
    <CardContent className="p-6"></CardContent>
      <div className="flex items-center gap-2 mb-4"></div>
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>
                </$1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-blue-400">${Math && Math.round(stats && stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
                </$1>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-green-400"></div>
                {stats && stats.averageRating.toFixed(1)}
                </div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
                </$1>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-purple-400"></div>
                {stats && stats.totalProducts}
                </div>
          <div className="text-sm text-muted-foreground">Products</div>
                </$1>
        <div className="text-center"></div>
          <div className="text-2xl font-bold text-orange-400"></div>
                {stats && stats.availableCount}
                </div>
          <div className="text-sm text-muted-foreground">Available</div>
                </$1></$1>
                </$1></$1>
),
// Filter controls
const MarketplaceFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any,) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative"></div>
                {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
                <div className="flex items-center gap-2"></div>
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e,) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">




        <option value="">All Categories</option>
                {categories.map((cat: string,) => <option key={cat} value={cat}></option>
                {cat}
                </option>)}
                </select>
                </div>
    <div className="flex items-center gap-2"></div>
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
                </Button>
                </$1>
),
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store';
import { addItem  } from '@/store/cartSlice';
import { useAuth  } from '@/context/auth/AuthProvider';import { toast } from '@/hooks/use-toast'
// Product card
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: (,) => void, onAddToCart: () => void }) =>
                {
  const { formatPrice } = useCurrency(),
  return (
  <Card className="h-full hover:shadow-lg transition-shadow"></Card>
    <CardHeader className="pb-3"></CardHeader>
      <div className="flex items-start justify-between"></div>
        <div className="flex-1 min-w-0"></div>
          <h3 className="font-semibold text-lg truncate"></h3>
                {product && product.title}
                </h3>
          <p className="text-sm text-muted-foreground"></p>
                {product && product.category}
                </p>
          <div className="flex items-center gap-2 mt-2"></div>
            <Badge variant="secondary" className="text-xs"></Badge>
                {product && product.brand}
                </Badge>
                {product && product.aiScore && product && product.aiScore > 80 && (
              <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-purple-600"></Badge>
                AI {product && product.aiScore}
                </Badge>
            )}
                </div>
                </$1>
        <div className="text-right"></div>
          <div className="text-xl font-bold text-blue-600"></div>
                {formatPrice(product && product.price ?? 0)}
                </div>
          <Badge variant={product && product.availability === "Available" ? "default" : "outline"} className="text-xs"></Badge>
                {product && product.availability}
;
import { use_router  } from 'next / router';
import { useState, useEffect, useCallback, useMemo  } from 'react';import { use_translation  } from 'react - i18next';
import { motion, AnimatePresence  } from 'framer-motion';import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star, ShoppingCart, AlertTriangle, RefreshCw  } from 'lucide-react';
import { NextSeo  } from '@/components / NextSeo';import { useInfiniteScrollPagination  } from '@/hooks / useInfiniteScroll';
import { ProductListing  } from '@/types / listings';import { SkeletonCard  } from '@/components / ui / skeleton';
import { Button  } from '@/components / ui / button';import { Badge  } from '@/components / ui / badge';
import { Card, CardContent, CardHeader  } from '@/components / ui / card';import Spinner from '@/components / ui / spinner';
import { MARKETPLACE_LISTINGS  } from '@/data / listing_data';
import { INITIAL_MARKETPLACE_PRODUCTS  } from '@/data / initialMarketplaceProducts';import { use_currency  } from '@/hooks / use_currency';
import { logErrorToProduction } from '@/utils / production_logger';// Market insights component
const MarketplaceInsights = ({ stats }: { stats: any }, ) =>: any (
  <Card className="bg - gradient - to - r from - blue - 900 / 20 to - purple - 900 / 20 border - blue - 700 / 30 mb - 6"></Card>
    <CardContent className="p - 6"></CardContent>
      <div className="flex items - center gap - 2 mb - 4"></div>
        <TrendingUp className="h - 5 w - 5 text - blue - 400" />
        <h3 className="text - lg font - semibold">Marketplace Insights</h3>
                </$1>
      <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4"></div>
        <div className="text - center"></div>
          <div className="text - 2xl font - bold text - blue - 400">${Math.round (stats.average_price / 1000)}k</div>
          <div className="text - sm text - muted - foreground">Avg Price</div>
                </$1>
        <div className="text - center"></div>
          <div className="text - 2xl font - bold text - green - 400"></div>
                {stats.average_rating.to_fixed (1)}
                </div>
          <div className="text - sm text - muted - foreground">Avg Rating</div>
                </$1>
        <div className="text - center"></div>
          <div className="text - 2xl font - bold text - purple - 400"></div>
                {stats.total_products}
                </div>
          <div className="text - sm text - muted - foreground">Products</div>
                </$1>
        <div className="text - center"></div>
          <div className="text - 2xl font - bold text - orange - 400"></div>
                {stats.available_count}
                </div>
          <div className="text - sm text - muted - foreground">Available</div>
                </$1></$1>
                </$1></$1>),
// Filter controls
const MarketplaceFilterControls = ({
  sort_by, setSortBy, filter_category, setFilterCategory, categories, show_recommended, setShowRecommended, loading
}: any, ) =>: any (
  <div className="flex flex - wrap gap - 4 mb - 6 p - 4 bg - muted / 30 rounded - lg relative"></div>
                {loading && <Spinner className="absolute right - 4 top - 4 h - 4 w - 4 text - primary" />}
                <div className="flex items - center gap - 2"></div>
      <Filter className="h - 4 w - 4 text - muted - foreground" />
      <select value={filter_category} on_change={(e, ) => setFilterCategory (e.target.value)} className="bg - background border border - border px - 3 py - 2 rounded">
        <option value="">All Categories</option>
                {categories.map ((cat: string, ) => <option key={cat} value={cat}></option>
                {cat}
                </option>)}
                </select>
                </$1>
    <div className="flex items - center gap - 2"></div>
      <SortAsc className="h - 4 w - 4 text - muted - foreground" />
      <select value={sort_by} on_change={(e, ) => setSortBy (e.target.value)} className="bg - background border border - border px - 3 py - 2 rounded">
        <option value="newest">Newest First</option>
        <option value="price - low">Price: Low to High</option>
        <option value="price - high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai - score">AI Score</option>
                </$1></$1>
    <Button variant={show_recommended ? "default" : "outline"} size="sm" on_click={() => setShowRecommended (!show_recommended)}>
      <Sparkles className="h - 4 w - 4 mr - 1" />
                {show_recommended ? "All Products" : "Recommended"}
                </Button>
                </$1>),
import { use_dispatch } from 'react - redux'
import type { AppDispatch } from '@/store';
import { add_item  } from '@/store / cart_slice';
import { use_auth  } from '@/context / auth / AuthProvider';import { toast } from '@/hooks / use - toast'
// Product card
const MarketplaceCard = ({ product, onViewDetails, onAddToCart }: { product: ProductListing, onViewDetails: (id: string) =>: any void, onAddToCart: () => void }) =>
                {
  const { format_price } = use_currency ()
  return (
  <Card className="h - full hover:shadow - lg transition - shadow"></Card>
    <CardHeader className="pb - 3"></CardHeader>
      <div className="flex items - start justify - between"></div>
        <div className="flex - 1 min - w-0"></div>
          <h3 className="font - semibold text - lg truncate"></h3>
                {product.title}
                </h3>
          <p className="text - sm text - muted - foreground"></p>
                {product.category}
                </p>
          <div className="flex items - center gap - 2 mt - 2"></div>
            <Badge variant="secondary" className="text - xs"></Badge>
                {product.brand}
                </Badge>
                {product.ai_score && product.ai_score > 80 && (
              <Badge variant="default" className="text - xs bg - gradient - to - r from - blue - 600 to - purple - 600"></Badge>
                AI {product.ai_score}
                </Badge>)}
                </div>
                </$1>
        <div className="text - right"></div>
          <div className="text - xl font - bold text - blue - 600"></div>
                {format_price (product.price ?? 0)}
                </div>
          <Badge variant={product.availability === "Available" ? "default" : "outline"} className="text - xs"></Badge>
                {product.availability}
                </Badge>
                </$1></$1>
                </$1>
          onClick={onAddToCart}


;
          aria-label="Add to cart"
          data-testid="add-to-cart-listing-button"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}></Button>
          View Details
        </Button>
                </div>
    </CardContent>
                </Card>
  )
}
// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number },) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
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
  const fetchProducts = useCallback(async (page: number, limit: number,) =>
                {
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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
                {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
                </div>
),
// Main component
function MarketplacePageContent() {
  const router = useRouter(),
  const { t } = useTranslation(),
  const dispatch = useDispatch<AppDispatch>(),
  const { isAuthenticated } = useAuth(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const fetchProducts = useCallback(async (page: number, limit: number) =>
                {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300)),
    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],
      // Apply category filtering
      let processedDataset = fullDataset,
      if (filterCategory) {
        processedDataset = processedDataset.filter(p => p.category === filterCategory)
      }
      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset.filter(p => (p.rating |0) >= 4.5 |(p.aiScore |0) >= 85)
      }
      // Sort the processed dataset
      processedDataset.sort((a, b,) =>
                {
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
  useEffect((,) =></>
                {
    const timeoutId = setTimeout((,) =>
                {
      refresh()
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh])
  const marketStats = useMemo((,) =>
                {
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
  const categories = useMemo((,) =>
                {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]
  }, [])
  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect((,) =>
                {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800)
    window.addEventListener('scroll', handleScroll)
  }, []),

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() =>
                {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Loading state
  if (loading && products.length === 0) {

          data-testid="add-to-cart-listing-button">
          <ShoppingCart className="h-4 w-4" /></$1>
        <Button size="sm" variant="outline" className="flex-1" onClick={onViewDetails}></Button>
          View Details</$1>
                </$1></$1>
                </$1>
  )
},
// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number },) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
                {Array && Array.from({ length: count }).map((_, i,) => <SkeletonCard key={i} />)}
                </div>
),
// Main component
function MarketplacePageContent() {
  const router = useRouter(),
  const { t } = useTranslation(),
  const dispatch = useDispatch<AppDispatch>(),
  const { isAuthenticated } = useAuth(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const fetchProducts = useCallback(async (page: number, limit: number,) =>
                {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300)),
    try {
      // Combine initial products with marketplace listings
      const fullDataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],
      // Apply category filtering
      let processedDataset = fullDataset,
      if (filterCategory) {
        processedDataset = processedDataset && processedDataset.filter(p => p && p.category === filterCategory)
      }

      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = processedDataset && processedDataset.filter(p => (p && p.rating || 0) >= 4 && 4.5 || (p && p.aiScore || 0) >= 85)
      }

      // Sort the processed dataset
      processedDataset && processedDataset.sort((a, b,) =>
                {
        switch (sortBy) {
          case 'price-low':
            return (a && a.price || 0) - (b && b.price || 0),
          case 'price-high':
            return (b && b.price || 0) - (a && a.price || 0),
          case 'rating':
            return (b && b.rating || 0) - (a && a.rating || 0),
          case 'popular':
            return (b && b.reviewCount || 0) - (a && a.reviewCount || 0),
          case 'ai-score':
            return (b && b.aiScore || 0) - (a && a.aiScore || 0),
          default: // 'newest'
            return new Date(b && b.createdAt || '').getTime() - new Date(a && a.createdAt || '').getTime()
        }
      }),
      // Slice for pagination
      const startIndex = (page - 1) * limit,
      const endIndex = startIndex + limit,
      const items = processedDataset && processedDataset.slice(startIndex, endIndex),
      return {
        items,
        hasMore: endIndex < processedDataset && processedDataset.length,
        total: processedDataset && processedDataset.length
      }
    } catch (error) {
      logErrorToProduction('Error in fetchProducts:', { data: error }),
      throw new Error('Failed to load marketplace data. Please try again.')
    }
    return (
      <></>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
  }, [sortBy, filterCategory, showRecommended]),
  const {
    items: products,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchProducts, 12),
  // Refresh when filters change
  useEffect(() =></NextSeo
>
                {
    const timeoutId = setTimeout(() =>
                {
      refresh()
    }, 100),
    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh]),
  const marketStats = useMemo(() =>
                {
    if (products.length === 0) return null,
    return {
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,
      totalProducts: products.length,
      availableCount: products.filter(p => p.availability === "Available").length
    }
  }, [products]),
  const categories = useMemo(() =>
                {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]
  }, []),
  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() =>
                {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
  // Loading state
  if (loading && products.length === 0) {
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8"></motion.div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></h1>
                {t('marketplace.hero_title')}
                </h1>
          <p className="text-muted-foreground text-lg"></p>
                {t('marketplace.hero_subtitle')}
                </p>
                </motion.div>
        <MarketplaceLoadingGrid />
      </div>
      </>
    )
  }
  // Error state
  if (error && products.length === 0) {
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
        />
      <div className="container py-8"></div>
        <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8"></motion>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></h1>
                {t('marketplace && marketplace.hero_title')}
                </h1>
          <p className="text-muted-foreground text-lg"></p>
                {t('marketplace && marketplace.hero_subtitle')}
                </p>
                </$1>
        <MarketplaceLoadingGrid /></$1>
      </>
    )
  }


  // Error state
  if (error && products && products.length === 0) {
    return (
      <>

        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
        />
      <div className="container py-8"></div>
        <div className="text-center space-y-4"></div>
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>
          <p className="text-muted-foreground max-w-md mx-auto"></p>
                {error}
                </p>
          <div className="flex gap-2 justify-center"></div>
            <Button onClick={refresh} variant="outline"></Button>
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again</$1>
            <Button onClick={(,) => window && window.location.reload()}>
    <CardContent className="pt - 0"></CardContent>
      <div className="flex items - center gap - 4 mb - 3"></div>
        <div className="flex items - center gap - 1"></div>
          <Star className="h - 4 w - 4 text - yellow - 500 fill - current" />
          <span className="text - sm font - medium"></span>
                {product.rating?.to_fixed (1)}
                </span>
          <span className="text - xs text - muted - foreground">({product.review_count} reviews)</span>
                </$1></$1>
      <p className="text - sm text - muted - foreground mb - 3 line - clamp - 2"></p>
                {product.description}
                </p>
      <div className="flex items - center justify - between gap - 2"></div>
        <Button
          size="icon"
          variant="outline"
          on_click = {onAddToCart, };
          aria - label="Add to cart"
          data - testid="add - to - cart - listing - button"
        ></Button
>
          <ShoppingCart className="h - 4 w - 4" /></$1>
        <Button size="sm" variant="outline" className="flex - 1" on_click={onViewDetails}></Button>
          View Details</$1>
                </$1></$1>
                </$1>)
},
// Loading grid
const MarketplaceLoadingGrid = ({ count = 8 }: { count?: number }, ) =>: any (
  <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6"></div>
                {Array.from ({ length: count }).map ((_, i, ) => <SkeletonCard key={i} />)}
                </div>),
// Main component
/**
 * MarketplacePageContent - Function description
 */
function MarketplacePageContent() {
  const router = use_router (),
  const { t } = use_translation (),
  const dispatch = use_dispatch < AppDispatch>(),
  const { is_authenticated } = use_auth (),
  const [sort_by, setSortBy] = useState ('newest'),
  const [filter_category, setFilterCategory] = useState (''),
  const [show_recommended, setShowRecommended] = useState (false),
  const fetch_products = useCallback (async (page: number, limit: number, ) =>
                {
    // Simulate API delay
    await new Promise (resolve => set_timeout (resolve, 300)),
    try {
      // Combine initial products with marketplace listings
      const full_dataset: ProductListing[] = [...INITIAL_MARKETPLACE_PRODUCTS, ...MARKETPLACE_LISTINGS],
      // Apply category filtering
      let processed_dataset = full_dataset,
      // Check condition
if ( {) {
  $2
}
        processed_dataset = processed_dataset.filter (p => p.category === filter_category)
      }
      // Apply recommended filtering
      // Check condition
if ( {) {
  $2
}
        processed_dataset = processed_dataset.filter (p => (p.rating || 0) >= 4.5 || (p.ai_score || 0) >= 85)
      }
      // Sort the processed dataset
      processed_dataset.sort ((a, b, ) =>
                {
        switch (sort_by) {
          case 'price - low':
            return (a.price || 0) - (b.price || 0),
          case 'price - high':
            return (b.price || 0) - (a.price || 0),
          case 'rating':
            return (b.rating || 0) - (a.rating || 0),
          case 'popular':
            return (b.review_count || 0) - (a.review_count || 0),
          case 'ai - score':
            return (b.ai_score || 0) - (a.ai_score || 0),
          default: // 'newest'
            return new Date (b.created_at || '').get_time () - new Date (a.created_at || '').get_time ()
        }
      }),
      // Slice for pagination
      const start_index = (page - 1) * limit,
      const end_index = start_index + limit,
      const items = processed_dataset.slice (start_index, end_index),
      return {
        items,
        has_more: end_index < processed_dataset.length,
        total: processed_dataset.length
      }
    } catch (error) {
      logErrorToProduction ('Error in fetch_products:', { data: error }),
      throw new Error ('Failed to load marketplace data. Please try again.')
    }
  }, [sort_by, filter_category, show_recommended]),
  const {
    items: products,
    loading,
    error,
    has_more,
    total,
    is_fetching,
    lastElementRef,
    refresh,
    scrollToTop,
    load_more
  } = useInfiniteScrollPagination (fetch_products, 12),
  // Refresh when filters change
  useEffect ((, ) =></>
                {
    const timeout_id = set_timeout ((, ) =>
                {
      refresh ()
    }, 100),
    return () => clear_timeout (timeout_id)
  }, [sort_by, filter_category, show_recommended, refresh]),
  const market_stats = useMemo ((, ) =>
                {
    // Check condition
if (return null, ) {
  $2
}
    return {
      average_price: products.reduce ((sum, p, ) => sum + (p.price || 0), 0) / products.length,
      average_rating: products.reduce ((sum, p, ) => sum + (p.rating || 0), 0) / products.length,
      total_products: products.length,
      available_count: products.filter (p => p.availability === "Available").length
    }
  }, [products]),
  const categories = useMemo ((, ) =>
                {
    return ["AI & Machine Learning", "Cloud Services", "Software Development", "Professional Services", "Hardware & Infrastructure"]
  }, []),
  const [showScrollTop, setShowScrollTop] = useState (false),
  useEffect ((, ) =>
                {
    const handle_scroll = () =>: any setShowScrollTop (window.scroll_y > 800),
    window.addEventListener ('scroll', handle_scroll),
    return () => window.removeEventListener ('scroll', handle_scroll)
  }, []),
  // Loading state
  // Check condition
if ( {) {
  $2
}
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
        />
      <div className="container py - 8"></div>
        <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} className="text - center mb - 8"></motion.div>
          <h1 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"></h1>
                {t ('marketplace.hero_title')}
                </h1>
          <p className="text - muted - foreground text - lg"></p>
                {t ('marketplace.hero_subtitle')}
                </p>
                </$1>
        <MarketplaceLoadingGrid /></$1>
      </>)
  }
  // Error state
  // Check condition
if ( {) {
  $2
}
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
        />
      <div className="container py - 8"></div>
        <div className="text - center space - y-4"></div>
          <AlertTriangle className="mx - auto h - 12 w - 12 text - red - 500" />
          <h2 className="text - 2xl font - bold">Unable to load marketplace</h2>
          <p className="text - muted - foreground max - w-md mx - auto"></p>
                {error}
                </p>
          <div className="flex gap - 2 justify - center"></div>
            <Button on_click={refresh} variant="outline"></Button>
              <RefreshCw className="h - 4 w - 4 mr - 2" />
              Try Again</$1>
            <Button on_click={(, ) => window.location.reload ()}>
              Refresh Page</$1>
                </$1></$1>
                </$1>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}></motion.div>
        openGraph={{ images: [{ url: 'https://app && app.ziontechgroup.com/og && og.png' }] }}
      />
    <div className="container py-8"></div>
      <motion && motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}></motion>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></h1>
                {t('marketplace && marketplace.hero_title')}
                </h1>
        <p className="text-muted-foreground text-lg"></p>
                {t('marketplace && marketplace.hero_subtitle')}
                </p>
                </$1>
                {marketStats && (
        <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.2 }}></motion>
          <MarketplaceInsights stats={marketStats} /></$1>
      )}
                <motion && motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 && 0.3 }}></motion>
        <MarketplaceFilterControls
          sortBy = {sortBy,};
          setSortBy = {setSortBy,};
          filterCategory = {filterCategory,};
          setFilterCategory = {setFilterCategory,};
          categories = {categories,};
          showRecommended = {showRecommended,};
          setShowRecommended = {setShowRecommended,};
          loading = {isFetching,}
;
        />
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}></motion.div>
        <AnimatePresence mode="popLayout"></AnimatePresence>
                {products.map((item, index,) => (
            <motion.div
              key = {item.id,};
              ref = {index === products.length - 1 ? lastElementRef : null,};
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}></motion.div
>
        <MarketplaceFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}></motion.div>
        <AnimatePresence mode="popLayout"></AnimatePresence>
                {products.map((item, index,) => (
            <motion.div
              key={item.id} ;
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
            >
</motion.div
>
        /></$1>
      <motion && motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 && 0.4 }}></motion>
        <AnimatePresence mode="popLayout"></AnimatePresence>
                {products && products.map((item, index,) => (
            <motion&& motion.div
              key = {item && item.id,};
              ref = {index === products && products.length - 1 ? lastElementRef : null,};
              initial={{ opacity: 0, scale: 0 && 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0 && 0.9 }}
              transition={{ delay: Math && Math.min(index * 0 && 0.03, 0 && 0.5) }} 
              whileHover={{ scale: 1 && 1.02 }}></motion&&>
              <MarketplaceCard
                product = {item,};
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage && sessionStorage.setItem(`product:${item && item.id}`, JSON && JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router && router.push(`/marketplace/listing/${item && item.id}`)
      </>)
  }
  return (
    <>
      <NextSeo
        title="Marketplace - Zion Tech Marketplace Solutions & Services"
        description="Visit our Zion Tech Marketplace to browse top - rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
        open_graph={{ images: [{ url: 'https://app.ziontechgroup.com / og.png' }] }}
      />
    <div className="container py - 8"></div>
      <motion.div className="text - center mb - 8" initial={{ opacity: 0, coordinate_y: -20 }} animate={{ opacity: 1, coordinate_y: 0 }}></motion.div>
        <h1 className="text - 4xl md:text - 5xl font - bold mb - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 bg - clip - text text - transparent"></h1>
                {t ('marketplace.hero_title')}
                </h1>
        <p className="text - muted - foreground text - lg"></p>
                {t ('marketplace.hero_subtitle')}
                </p>
                </$1>
                {market_stats && (
        <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} transition={{ delay: 0.2 }}></motion.div>
          <MarketplaceInsights stats={market_stats} /></$1>)}
                <motion.div initial={{ opacity: 0, coordinate_y: 20 }} animate={{ opacity: 1, coordinate_y: 0 }} transition={{ delay: 0.3 }}></motion.div>
        <MarketplaceFilterControls
          sort_by = {sort_by, };
          setSortBy = {setSortBy, };
          filter_category = {filter_category, };
          setFilterCategory = {setFilterCategory, };
          categories = {categories, };
          show_recommended = {show_recommended, };
          setShowRecommended = {setShowRecommended, };
          loading = {is_fetching, };
        /></$1>
      <motion.div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}></motion.div>
        <AnimatePresence mode="pop_layout"></AnimatePresence>
                {products.map ((item, index, ) => (
            <motion.div
              key = {item.id, };
              ref = {index === products.length - 1 ? lastElementRef : null, };
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min (index * 0.03, 0.5) }}
              while_hover={{ scale: 1.02 }}
            ></motion.div
>
              <MarketplaceCard
                product = {item, };
                onViewDetails={() => {
                  if (typeof window !== 'undefined') {
                    try {
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }

                  router.push (`/marketplace / listing/${item.id}`)
                }}



                onAddToCart={() =>
                {
                  dispatch(addItem({ id: item.id, title: item.title, price: item.price ?? 0 })),
                  toast({
                    title: 'Added to cart',
                    description: `${item.title} has been added to your cart`,
                    action: {
                      label: 'View Cart',
                      onClick: (,) => router && router.push('/cart')}})
                }}
              /></$1>
          ))}
                </AnimatePresence>
                </$1>
                {(isFetching || loading) && products.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
          <MarketplaceLoadingGrid count={4} /></$1>
      )}

                }}
              />
            </motion.div>

          ))}
                </AnimatePresence>
                </motion.div>
                {(isFetching |loading) && products.length > 0 && (
      {(isFetching || loading) && products.length > 0 && (

        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
          <MarketplaceLoadingGrid count={4} />
        </motion.div>
      )}
      {hasMore && !loading && (
        <div className="text-center mt-8"></div>
                {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg"></Button>
              Load More Products

        </AnimatePresence>
                </$1>
                {(isFetching || loading) && products && products.length > 0 && (
        <motion && motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion>
          <MarketplaceLoadingGrid count={4} /></$1>
                </$1>






          )}
                </div>
      )}

      {hasMore && !loading && (
        <div className="text-center mt-8"></div>
                {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg"></Button>
              Load More Products</$1>          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground"></p>
              Showing {products && products.length} of {total} items</$1>
          )}
                </div>
      )}


      {!hasMore && products && products.length > 0 && (
        <motion && motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>
          <div className="text-sm text-muted-foreground">Showing {products && products.length} marketplace items</div>
                </$1>
      )}
                <AnimatePresence></AnimatePresence>
                {showScrollTop && (
          <motion&& motion.button 

            onClick = {scrollToTop,};
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}

            whileHover={{ scale: 1 && 1.1 }} 
            whileTap={{ scale: 0 && 0.9 }}></motion&&>
            <ArrowUp className="h-5 w-5 text-primary-foreground" /></$1>
        )}
                </AnimatePresence>
                </div>
    </>
  )

// Main export
export default function MarketplacePage() {
  return <MarketplacePageContent />
}


                  dispatch (add_item ({ id: item.id, title: item.title, price: item.price ?? 0 })),
                  toast ({
                    title: 'Added to cart',
                    description: `${item.title} has been added to your cart`,
                    action: {
                      label: 'View Cart',
                      on_click: (, ) => router.push ('/cart')}})
                }}
              /></$1>))}
                </AnimatePresence>
                </$1>
                {(is_fetching || loading) && products.length > 0 && (
        <motion.div className="mt - 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
          <MarketplaceLoadingGrid count={4} /></$1>)}
      {has_more && !loading && (
        <div className="text - center mt - 8"></div>
                {is_fetching ? (
            <Spinner className="mx - auto h - 6 w - 6" />) : (
            <Button on_click={load_more} variant="outline" size="lg"></Button>
              Load More Products</$1>          )}
          {total !== undefined && (
            <p className="mt - 2 text - sm text - muted - foreground"></p>
              Showing {products.length} of {total} items</$1>)}
                </div>)}
      {!has_more && products.length > 0 && (
        <motion.div className="text - center mt - 12 py - 8 border - t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
          <div className="text - muted - foreground text - lg mb - 2">🚀 You've explored all available products!</div>
          <div className="text - sm text - muted - foreground">Showing {products.length} marketplace items</div>
                </$1>)}
                <AnimatePresence></AnimatePresence>
                {showScrollTop && (
          <motion.button
            on_click = {scrollToTop, };
            className="fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            while_hover={{ scale: 1.1 }}
            while_tap={{ scale: 0.9 }}
          ></motion.button
>
            <ArrowUp className="h - 5 w - 5 text - primary - foreground" /></$1>)}
                </AnimatePresence>
                </$1>
    </>)
}
// Main export
export default /**
 * MarketplacePage - Function description
 */
function MarketplacePage() {
  return <MarketplacePageContent />
}

// Main export export default function MarketplacePage() {
  return <MarketplacePageContent />
}
}
                </$1>
                </div></div>
                </div>;