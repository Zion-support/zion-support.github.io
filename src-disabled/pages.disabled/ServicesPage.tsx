import { useState, useEffect, useCallback, useMemo  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { useRouter  } from 'next/router';
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, Clock, Award } from 'lucide-react'
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { generateITServices, getServicesMarketStats, getRecommendedServices  } from '@/utils/servicesAutoFeedAlgorithm';
import { ProductListing  } from '@/types/listings';
import { SkeletonCard  } from '@/components/ui/skeleton';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { SERVICES  } from '@/data/servicesData';
import { useCurrency } from '@/hooks/useCurrency';
// Initial services from existing data
const INITIAL_SERVICES: ProductListing[] = SERVICES;
// Market insights component
const ServicesMarketInsights = null;
  if (loading && services.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            IT & AI Services
          </h1>
          <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p>
        </motion.div>
        <ServicesLoadingGrid />

    allServices = [...allServices, ...newServices]
    let filteredServices = allServices
}
import React from 'react'
const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
            <p className="text-gray-600 mb-6">
              Cutting-edge artificial intelligence solutions including machine learning
              natural language processing, and intelligent automation.
            </p>
            <a href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive IT infrastructure, cloud migration, cybersecurity
              and digital transformation solutions.
            </p>
            <a href="/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-6">
              Innovative, focused software solutions that solve specific business
              problems with minimal overhead.
            </p>
            <a href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
    )
  }

  if (error) {
    return (
      <div className="container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2>
        <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p>
        <Button onClick={refresh}>Retry</Button>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          IT & AI Services
        </h1>
        <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <ServicesMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ServiceFilterControls
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
          {services.map((item, index) => (
            <motion.div
              key={item.id} ref={index === services.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }} whileHover={{ scale: 1.02 }}
            >;
              <ServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />;
            </motion.div>;
          ))}
        </AnimatePresence>;
      </motion.div>;
      {(isFetching || loading) && (;
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <ServicesLoadingGrid count={4} />;
        </motion.div>;
      )}
;
      {!hasMore && services.length > 0 && (;
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>;
          <div className="text-sm text-muted-foreground">Showing {services.length} IT & AI services</div>;
        </motion.div>;
      )}
;
      <AnimatePresence>;
        {showScrollTop && (;
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
  );
}
;
            >
              <ServiceCard service={item} onViewDetails={() => router.push(`/services/${item.id}`)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {(isFetching || loading) && (
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ServicesLoadingGrid count={4} />
        </motion.div>
      )}

      {!hasMore && services.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div>
          <div className="text-sm text-muted-foreground">Showing {services.length} IT & AI services</div>
        </motion.div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>

  );

}animate= {;
  {;
  opacity: 1, y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> IT & AI Services </h1> <p className="text-muted-foreground text-lg">Professional services for modern businesses and enterprises</p> </motion.div> <ServicesLoadingGrid /> </div>) ;
}if (error) {";
  return (<div className="container py-8 text-center"> <h2 className="text-2xl font-bold mb-4">Error Loading Services</h2> <p className="text-muted-foreground mb-4">Failed to load services. Please try again.</p> <Button onClick={;
  refresh ;
}>Retry</Button> </div>) ";
}return (<div className="container py-8"> <motion.div className="text-center mb-8" initial= {;
  {;
  opacity: 0, y: -20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;
}";
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> IT & AI Services </h1> <p className="text-muted-foreground text-lg">Professional services for digital transformation and technology innovation</p> </motion.div> {;
  marketStats && (<motion.div initial= {;
  {;
  opacity: 0, y: 20 ;

}animate= {;
  {;
  opacity: 1, y: 0 ;

}transition= {;
  {;
  delay: 0.2 ;

}> <ServicesMarketInsights stats= {;
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

}> <ServiceFilterControls sortBy= {;
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
  index === services.length - 1 ? lastElementRef : null ;
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

}> <ServiceCard service= {;
  item ;
}onViewDetails= {;
  () => router.push (`/services/$ {;
  item.id ;
}`) ;
}/> </motion.div>) ) ;
}</AnimatePresence> </motion.div> {";
  (isFetching || loading) && (<motion.div className="mt-8" initial= {;
  {;
  opacity: 0 ;

}animate= {;
  {;
  opacity: 1 ;

}> <ServicesLoadingGrid count= {;
  4 ;
}/> </motion.div>) ;
}{";
  !hasMore && services.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t" initial= {;
  {;
  opacity: 0 ;

}animate= {;
  {;
  opacity: 1 ;
}'";
}> <div className="text-muted-foreground text-lg mb-2">🚀 You've explored all available services!</div> <div className="text-sm text-muted-foreground">Showing {;
  services.length ;
}IT & AI services</div> </motion.div>) ;
}<AnimatePresence> {;
  showScrollTop && (<motion.button onClick={;
  scrollToTop ";
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50" initial= {;
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
}</AnimatePresence> </div>) ;
}'"
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/ServicesPage.tsx
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
