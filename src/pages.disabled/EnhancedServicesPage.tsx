import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award, MessageSquare, Phone, Mail, ExternalLink } from 'lucide-react';
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { ProductListing } from '@/types/listings';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Spinner from '@/components/ui/spinner';
import { SERVICES, serviceCategories, getServicesMarketStats, getRecommendedServices } from '@/data/servicesData';
import { specializedServices, specializedCategories } from '@/data/specializedServices';
import { CONTACT_INFO, mainMarketingContent, serviceMarketingContent } from '@/data/marketingContent';
import { useCurrency } from '@/hooks/useCurrency';
// Enhanced service card with comprehensive information
const EnhancedServiceCard = ({ service, onViewDetails }: { service: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency();
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">"
      <CardHeader className="pb-3">"
        <div className="flex items-start justify-between">"
          <div className="flex-1 min-w-0">"
            <div className="flex items-center gap-2 mb-2">"
              <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">"
                {service.title}
              </h3>
              {service.badge && (
                <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse">"
                  {service.badge}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">"
              <div className="flex items-center gap-1">"
                <Star className="h-4 w-4 text-yellow-500 fill-current" />"
                <span className="text-sm font-medium">{service.rating}</span>"
                <span className="text-xs text-muted-foreground">({service.reviewCount})</span>"
              </div>
              {service.aiScore && service.aiScore > 85 && (
                <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">"
                  AI Score: {service.aiScore}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">"
              <Badge variant="outline" className="text-xs">{service.category}</Badge>"
            </div>
          </div>
          <div className="text-right">"
            <div className="text-xl font-bold text-green-600">{service.price}</div>"
            <div className="text-xs text-muted-foreground line-through">{service.marketPrice}</div>"
            <Badge variant={service.availability === "Available" ? "default" : "outline"} className="text-xs mt-1">"
              {service.availability || "Available"}"
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>"
        {/* Key Features */}
        <div className="mb-3">"
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Features:</h4>"
          <div className="flex flex-wrap gap-1">"
            {service.features?.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">"
                {feature}
              </Badge>
            ))}
            {service.features?.length > 3 && (
              <Badge variant="outline" className="text-xs">"
                +{service.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        {/* Benefits */}
        <div className="mb-3">"
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Benefits:</h4>"
          <div className="space-y-1">"
            {service.benefits?.slice(0, 2).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">"
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>"
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-3">"
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">Contact Zion Tech Group:</h4>"
          <div className="space-y-1 text-xs">"
            <div className="flex items-center gap-2">"
              <Phone className="h-3 w-3 text-blue-600" />"
              <span className="font-medium">{service.contactInfo?.phone || CONTACT_INFO.phone}</span>"
            </div>
            <div className="flex items-center gap-2">"
              <Mail className="h-3 w-3 text-blue-600" />"
              <span className="font-medium">{service.contactInfo?.email || CONTACT_INFO.email}</span>"
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">"
          <Button variant="outline" size="sm" onClick={onViewDetails} className="flex-1">"
            <MessageSquare className="h-4 w-4 mr-1" />"
            Learn More
          </Button>
          <Button size="sm" onClick={() => window.open(`mailto:${service.contactInfo?.email || CONTACT_INFO.email}?subject=Inquiry about ${service.title}`)} className="flex-1">"
            <ShoppingCart className="h-4 w-4 mr-1" />"
            Contact
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};
// Market insights component
const EnhancedMarketInsights = ({ stats }: { stats: any }) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">"
    <CardContent className="p-6">"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">"
        <div className="text-center">"
          <div className="text-2xl font-bold text-green-400">${(stats.averagePrice / 1000).toFixed(1)}k</div>"
          <div className="text-sm text-muted-foreground">Avg Price</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-blue-400">{stats.averageRating}</div>"
          <div className="text-sm text-muted-foreground">Avg Rating</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-purple-400">{stats.totalServices}</div>"
          <div className="text-sm text-muted-foreground">Total Services</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-orange-400">{stats.availableServices}</div>"
          <div className="text-sm text-muted-foreground">Available Now</div>"
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">"
        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
      </div>
    </CardContent>
  </Card>
);
// Filter controls
const EnhancedFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,
  loading
}:,  any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">"
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}"
    <div className="flex items-center gap-2">"
      <Filter className="h-4 w-4 text-muted-foreground" />"
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">"
        <option value="">All Categories</option>"
        {categories.map((cat:,  string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">"
      <SortAsc className="h-4 w-4 text-muted-foreground" />"
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">"
        <option value="newest">Newest First</option>"
        <option value="price-low">Price: Low to High</option>"
        <option value="price-high">Price: High to Low</option>"
        <option value="rating">Highest Rated</option>"
        <option value="ai-score">AI Score</option>"
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>"
      <Star className="h-4 w-4 mr-1" />"
      {showRecommended ? "All Services" : "Recommended"}"
    </Button>
  </div>
);
// Loading grid
const ServicesLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">"
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);
// Main component
export default function EnhancedServicesPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');,
  const [filterCategory, setFilterCategory] = useState('');,
  const [showRecommended, setShowRecommended] = useState(false);,
  const [totalGenerated, setTotalGenerated] = useState(0);,
  const [activeTab, setActiveTab] = useState('all');
  // Combine all services
  const allServices = useMemo(() => [...SERVICES, ...specializedServices], []);,
  const fetchServices = useCallback(async (page: number, limit:,  number) => {,
    await new Promise(resolve => setTimeout(resolve, 400));
    let filteredServices = allServices;
    if (activeTab !== 'all') {'
      filteredServices = filteredServices.filter(s => s.category ===,  activeTab);
    }
    if (filterCategory) {
      filteredServices = filteredServices.filter(s => s.category ===,  filterCategory);
    }
    if (showRecommended) {
      filteredServices = getRecommendedServices(filteredServices);
    }
    filteredServices.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':'
          return (a.price || 0) - (b.price || 0);
        case 'price-high':'
          return (b.price || 0) - (a.price || 0);
        case 'rating':'
          return (b.rating || 0) - (a.rating || 0);
        case 'ai-score':'
          return (b.aiScore || 0) - (a.aiScore || 0);
        default: ,
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      }
    });
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredServices.slice(startIndex, endIndex);
    return {
      items,
      hasMore: endIndex < filteredServices.length,
      total: filteredServices.length
    };
  }, [sortBy, filterCategory, showRecommended, activeTab, allServices]);
  const {
    items: services,
    loading,
    error,
    hasMore,
    isFetching,
    lastElementRef,
    scrollToTop,
    refresh,
    total
  } = useInfiniteScrollPagination(fetchServices, 12);
  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, showRecommended, activeTab]);
  const marketStats = useMemo(() => {
    if (services.length === 0) return null;
    return getServicesMarketStats(services);
  }, [services]);,
  const categories = useMemo(() => {
    return Array.from(new Set(services.map(s => s.category).filter(Boolean)));
  }, [services]);,
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);,
  if (loading && services.length === 0) {
    return (
      <div className="container py-8">"
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">"
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">"
            {mainMarketingContent.title}
          </h1>
          <p className="text-muted-foreground text-lg">{mainMarketingContent.subtitle}</p>"
        </motion.div>
        <ServicesLoadingGrid />
      </div>
    );
  }
  if (error) {
    return (
      <div className="container py-8 text-center">"
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>"
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>"
        <Button onClick={refresh}>Retry</Button>
      </div>
    );
  }
  return (
    <div className="container py-8">"
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>"
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">"
          {mainMarketingContent.title}
        </h1>
        <p className="text-muted-foreground text-lg mb-6">{mainMarketingContent.subtitle}</p>"
        <p className="text-muted-foreground text-base max-w-4xl mx-auto mb-8">{mainMarketingContent.description}</p>"
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">"
          {mainMarketingContent.benefits.slice(0, 6).map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">"
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>"
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">"
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">"
            <div className="flex items-center gap-2">"
              <Phone className="h-4 w-4 text-blue-600" />"
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">"
              <Mail className="h-4 w-4 text-blue-600" />"
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">📍</span>"
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </motion.div>
      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EnhancedMarketInsights stats={marketStats} />
        </motion.div>
      )}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">"
        <TabsList className="grid w-full grid-cols-6">"
          <TabsTrigger value="all">All Services</TabsTrigger>"
          <TabsTrigger value="micro-saas">Micro SAAS</TabsTrigger>"
          <TabsTrigger value="ai-services">AI Services</TabsTrigger>"
          <TabsTrigger value="it-services">IT Services</TabsTrigger>"
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>"
          <TabsTrigger value="mobile">Mobile</TabsTrigger>"
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">"
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <EnhancedFilterControls
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
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>"
            <AnimatePresence mode="popLayout">"
              {services.map((item, index) => (
                <motion.div
                  key={item.id}
                  ref={index === services.length - 1 ? lastElementRef : null}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <EnhancedServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />`
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {(isFetching ||,  loading) && (
            <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>"
              <ServicesLoadingGrid count={4} />
            </motion.div>
          )}
          {!hasMore && services.length > 0 && (
            <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>"
              <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>'
              <div className="text-sm text-muted-foreground">Showing {services.length} professional services</div>"
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"",
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />"
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
