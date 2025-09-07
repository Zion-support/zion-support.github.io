
import { useRouter  } from 'next/router';
import { useState, useEffect, useCallback, useMemo  } from 'react';
import { useTranslation  } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';

import { useRouter } from 'next/router'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
origin/cursor/automate-test-improve-and-merge-code-2533
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
const MarketplaceInsights = ({ stats }: { stats: any }) => (
const MarketplaceInsights = ({ stats }: { stats: any },) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">"
    <CardContent className="p-6">"
      <div className="flex items-center gap-2 mb-4">"
        <TrendingUp className="h-5 w-5 text-blue-400" />"
        <h3 className="text-lg font-semibold">Marketplace Insights</h3>"
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">"
        <div className="text-center">"
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice / 1000)}k</div>"
          <div className="text-sm text-muted-foreground">Avg Price</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>"
          <div className="text-sm text-muted-foreground">Avg Rating</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>"
          <div className="text-sm text-muted-foreground">Products</div>"
        </div>
        <div className="text-center">"
          <div className="text-2xl font-bold text-orange-400">{stats.availableCount}</div>"
          <div className="text-sm text-muted-foreground">Available</div>"
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { useTranslation } from 'react-i18next',
import { motion, AnimatePresence } from 'framer-motion',
import { NextSeo } from '@/components/NextSeo',
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { ProductListing } from '@/types/listings',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
import { MARKETPLACE_LISTINGS } from '@/data/listingData',
import { INITIAL_MARKETPLACE_PRODUCTS } from '@/data/initialMarketplaceProducts',
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
// Market insights component
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">


                }}
              />
            </motion.div>
          ))}
      {(isFetching ||,  loading) && products.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>"
        </AnimatePresence>
      </motion.div>
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MarketplaceLoadingGrid count={4} />
        </motion.div>
      )}
      {hasMore && !loading && (
        <div className="text-center mt-8">"
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />"
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">"
              Load More Products
        </AnimatePresence>;
      </motion && motion.div>;
      {(isFetching ||,  loading) && products && products.length > 0 && (;
        <motion && motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <MarketplaceLoadingGrid count={4} />;
        </motion && motion.div>;
            </Button>
          )}
        </div>
      )}
      {hasMore && !loading && (;
        <div className="text-center mt-8">;
          {isFetching ? (;
            <Spinner className="mx-auto h-6 w-6" />;
          ) : (;
            <Button onClick={loadMore} variant="outline" size="lg">;
              Load More Products;
            </Button>          )}
          {total !== undefined && (;
            <p className="mt-2 text-sm text-muted-foreground">;
              Showing {products && products.length} of {total} items;
            </p>;
          )}
        </div>;
      )}
      {!hasMore && products && products.length > 0 && (;
        <motion && motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>;
          <div className="text-sm text-muted-foreground">Showing {products && products.length} marketplace items</div>;
        </motion && motion.div>;
      )}
      <AnimatePresence>;
        {showScrollTop && (;
          <motion&& motion.button
            onClick = {scrollToTop,}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"",
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1 && 1.1 }}
            whileTap={{ scale: 0 && 0.9 }}>;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion && motion.button>;
        )}
      </AnimatePresence>
    </div>
    </>
  )
}
;
// Main export;
export default function MarketplacePage() {;
  return <MarketplacePageContent />;
}
                  dispatch (add_item ({ id: item.id, title: item.title, price: item.price ?? 0 })),
                  toast ({
                    title: 'Added to cart','
                    description: `${item.title} has been added to your cart`,`
                    action: {,
                      label: 'View Cart','
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Products

        </AnimatePresence>;
      </motion && motion.div>;

      {(isFetching || loading) && products && products.length > 0 && (;
        <motion && motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <MarketplaceLoadingGrid count={4} />;
        </motion && motion.div>;

            </Button>
          )}
      )}
            onClick = {scrollToTop,}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
}
                  dispatch (add_item ({ id: item.id, title: item.title, price: item.price ?? 0 })),
                  toast ({
                    title: 'Added to cart',
                    description: `${item.title} has been added to your cart`,
                    action: {
                      label: 'View Cart',
                      on_click: (, ) => router.push ('/cart')}});
                }}
              />;
            </motion.div>))}
        </AnimatePresence>;
      </motion.div>;
      {(is_fetching ||,  loading) && products.length > 0 && (
      {(is_fetching || loading) && products.length > 0 && (
        <motion.div className="mt - 8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <MarketplaceLoadingGrid count={4} />;
        </motion.div>)}
      {has_more && !loading && (
        <div className="text - center mt - 8">;
          {is_fetching ? (
            <Spinner className="mx - auto h - 6 w - 6" />) : ("
            <Spinner className="mx - auto h - 6 w - 6" />) : (
            <Button on_click={load_more} variant="outline" size="lg">;
              Load More Products;
            </Button>          )}
          {total !== undefined && (
            <p className="mt - 2 text - sm text - muted - foreground">;
              Showing {products.length} of {total} items;
            </p>)}
        </div>)}
      {!has_more && products.length > 0 && (
        <motion.div className="text - center mt - 12 py - 8 border - t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text - muted - foreground text - lg mb - 2">🚀 You've explored all available products!</div>;
          <div className="text - muted - foreground text - lg mb - 2"> You've explored all available products!</div>;
          <div className="text - sm text - muted - foreground">Showing {products.length} marketplace items</div>;
        </motion.div>)}
      <AnimatePresence>;
        {showScrollTop && (
          <motion.button;
            on_click = {scrollToTop, }
            className="fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50";",
            className="fixed bottom - 8 right - 8 p - 3 bg - primary hover:bg - primary / 90 rounded - full shadow - lg z - 50";
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            while_hover={{ scale: 1.1 }}
            while_tap={{ scale: 0.9 }}
          >;
            <ArrowUp className="h - 5 w - 5 text - primary - foreground" />;
          </motion.button>)}
      </AnimatePresence>;
    </div>;
    </>);
}
// Main export;
export default /**
 * MarketplacePage - Function description
 */
function MarketplacePage() {
  return <MarketplacePageContent />;
}
;
// Main export export default function MarketplacePage() {
  return <MarketplacePageContent />;
}
;
}})))))

  // Error state
  if (error && products.length === 0) {
    return (
      <>
        <NextSeo
          title="Marketplace - Zion Tech Marketplace Solutions & Services"
          description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
          openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
        />
      <div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load marketplace</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
          <div className="flex gap-2 justify-center">
            <Button onClick={refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
      <NextSeo
        title="Marketplace - Zion Tech Marketplace Solutions & Services"
        description="Visit our Zion Tech Marketplace to browse top-rated products, service packages, and exclusive offers. Start shopping with confidence today. Earn rewards and access limited deals."
        openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
      />;
    <div className="container py-8">;
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          {t('marketplace.hero_title')}
        </h1>;
        <p className="text-muted-foreground text-lg">{t('marketplace.hero_subtitle')}</p>;
      </motion.div>;
      {marketStats && (;
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>;
          <MarketplaceInsights stats={marketStats} />;
        </motion.div>;
      )}
;
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>;
        <MarketplaceFilterControls;
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

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode="popLayout">
          {products.map((item, index) => (
            <motion.div
              key={item.id} 
              ref={index === products.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} ;
              animate={{ opacity: 1, scale: 1 }} ;
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} ;
              whileHover={{ scale: 1.02 }}
            >;
              <MarketplaceCard;
                product={item}
                onViewDetails={() => {;
                  if (typeof window !== 'undefined') {;
                    try {;
                      sessionStorage.setItem(`product:${item.id}`, JSON.stringify(item));
                    } catch {;
                      // ignore storage errors;
                    }
                  }
                  router.push(`/marketplace/listing/${item.id}`);
                }}
                onAddToCart={() => {;
                  dispatch(addItem({ id: item.id, title: item.title, price: item.price ?? 0 })),;
                  toast({;
                    title: 'Added to cart',;
                    description: `${item.title} has been added to your cart`,;
                    action: {;
                      label: 'View Cart';
                      onClick: () => router.push('/cart')}});
                }}
              />;
            </motion.div>;
          ))}
        </AnimatePresence>;
      </motion.div>;
      {(isFetching || loading) && products.length > 0 && (;
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <MarketplaceLoadingGrid count={4} />;
        </motion.div>;
      )}

      {hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Products
            </Button>
          )}
          {total !== undefined && (;
            <p className="mt-2 text-sm text-muted-foreground">;
              Showing {products.length} of {total} items;
            </p>;
          )}
        </div>;
      )}
;
      {!hasMore && products.length > 0 && (;
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div>;
          <div className="text-sm text-muted-foreground">Showing {products.length} marketplace items</div>;
        </motion.div>;
      )}
;
      <AnimatePresence>;
        {showScrollTop && (;
          <motion.button;
            onClick={scrollToTop} ;
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }} ;
            animate={{ opacity: 1, scale: 1 }} ;
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} ;
            whileTap={{ scale: 0.9 }}
          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
    </>;
  );
}
;
// Main export;
export default function MarketplacePage() {;
  return <MarketplacePageContent />;
}
;

// Main export export default function MarketplacePage() {
  return <MarketplacePageContent />;
};
}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  );

}, [sortBy, filterCategory, showRecommended]);
return () => clearTimeout (timeoutId) ;
}, [sortBy, filterCategory, showRecommended, refresh]);
const [showScrollTop, setShowScrollTop] = useState (false);
useEffect ( () => {;
  const handleScroll = () => setShowScrollTop (window.scrollY > 800);';
window.addEventListener ('scroll',  handleScroll);';
return () => window.removeEventListener ('scroll', handleScroll) ;
}, []);";
return (<> <NextSeo /> <div className="container py-8"> <motion.div initial= {;
  {;
  opacity: 0, y: 20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ;
}</h1> </motion.div> <MarketplaceLoadingGrid /> </div> </>) ;
}//Error state if (error && products.length === 0) {";
  return (<> <NextSeo /> <div className="container py-8"> <div className="text-center space-y-4"> <AlertTriangle className="mx-auto h-12 w-12 text-red-500"/> <h2 className="text-2xl font-bold">Unable to load marketplace</h2> Try Again </Button> <Button onClick={;
  () => window.location.reload () ;
}> Refresh Page </Button> </div> </div> </div> </>) ";
}return (<> <NextSeo /> <div className="container py-8"> <motion.div className="text-center mb-8"initial= {;
  {;
  opacity: 0, y: -20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;
}";
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> {;
  marketStats && (<motion.div initial= {;
  {;
  opacity: 0, y: 20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  delay: 0.2 ;

}> <MarketplaceInsights stats= {;
  marketStats ;
}/> </motion.div>) ;
}<motion.div initial= {;
  {;
  opacity: 0, y: 20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  delay: 0.3 ;

}> <MarketplaceFilterControls sortBy= {;
  sortBy ;
}setSortBy= {;
  setSortBy ;
}filterCategory= {;
  filterCategory ;
}setFilterCategory= {;
  setFilterCategory ;
}categories= {;
  categories ;
}showRecommended= {;
  showRecommended ;
}setShowRecommended= {;
  setShowRecommended ;
}loading= {;
  isFetching ;
}/> </motion.div> <motion.div key= {;
  item.id ;
}ref= {;
  index === products.length - 1 ? lastElementRef : null ;
}initial= {;
  {;
  opacity: 0, scale: 0.9 ;

}animate= {;
  {;
  opacity: 1, scale: 1 ;

}exit= {;
  {;
  opacity: 0, scale: 0.9 ;

}transition= {;
  {;
  delay: Math.min (index * 0.03, 0.5) ;

}whileHover= {;
  {;
  scale: 1.02 ;

}> <MarketplaceCard product= {;
  item ;
}onViewDetails= {;
  () => {';
  if (typeof window !== 'undefined') {;
  try {;
  ;

}/> </motion.div>) ) ;
}</AnimatePresence> </motion.div> {";
  (isFetching || loading) && products.length > 0 && (<motion.div className="mt-8"initial= {;
  {;
  opacity: 0 ;

}animate= {;
  {;
  opacity: 1 ;

}> <MarketplaceLoadingGrid count= {;
  4 ;
}/> </motion.div>) ;
}{";
  hasMore && !loading && (<div className="text-center mt-8"> {";
  isFetching ? (<Spinner className="mx-auto h-6 w-6"/>) : (<Button onClick={;
  loadMore ";
}variant=" outline"size=" lg"> Load More Products </Button>) ;
}{";
  total !== undefined && (<p className="mt-2 text-sm text-muted-foreground"> Showing {;
  products.length ;
}of {;
  total ;
}items </p>) ;
}</div>) ;
}{";
  !hasMore && products.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t"initial= {;
  {;
  opacity: 0 ;

}animate= {;
  {;
  opacity: 1 ;
}'";
}> <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available products!</div> <div className="text-sm text-muted-foreground">Showing {;
  products.length ;
}marketplace items</div> </motion.div>) ;
}<AnimatePresence> {;
  showScrollTop && (<motion.button onClick={;
  scrollToTop ";
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {;
  {;
  opacity: 0, scale: 0 ;

}animate= {;
  {;
  opacity: 1, scale: 1 ;

}exit= {;
  {;
  opacity: 0, scale: 0 ;

}whileHover= {;
  {;
  scale: 1.1 ;

}whileTap= {;
  {;
  scale: 0.9 ;
}";
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion.button>) ;
}</AnimatePresence> </div> </>) ;
}// Main export '"
origin/cursor/automate-test-improve-and-merge-code-2533
