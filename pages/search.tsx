import React, { useState, useEffect, useMemo } from 'react';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Search, Filter, GridIcon, List, Loader2, SortAsc } from 'lucide-react';






import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { DOCS_SEARCH_ITEMS } from '@/data/docsSearchData';
import type { ProductListing } from '@/types/listings';
import type { TalentProfile } from '@/types/talent';
import type { BlogPost } from '@/types/blog';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'talent' | 'blog' | 'service' | 'doc';
  category?: string;
  url?: string;
  image?: string;
  price?: number;
  currency?: string;
  rating?: number;
  tags?: string[];
  date?: string;
}

interface SearchFilters {
  types: string[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: string;
}

import React, { useState } from 'react';

// Highlight search terms in text
const HighlightText: React.FC<{ text: string; searchTerm: string; className?: string }> = ({ 
  text, 
  searchTerm, 
  className = '' 
}) => {
  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>;
  }

  




      
              <HighlightText text={result.title} searchTerm={searchTerm} />
            <Badge variant="secondary" className="text-xs">
            </Badge>

          <HighlightText text={result.description} searchTerm={searchTerm} />

              <Badge variant="outline" className="text-xs">
              </Badge>
              <Badge key={index} variant="outline" className="text-xs">
                <HighlightText text={tag} searchTerm={searchTerm} />
              </Badge>
          


    


              <Checkbox

      <Separator />

        <Select value={filters.category} onValueChange={(value) => 
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="all">All Categories</SelectItem>
              <SelectItem key={category} value={category}>
              </SelectItem>
          </SelectContent>
        </Select>

      <Separator />

          <Slider

      <Separator />

        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="0">Any Rating</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="1">1+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
          </SelectContent>
        </Select>


        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />

              <Button
              </Button>


export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }: { query: { q?: string } }) => {
export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }: { query: { q?: string } }) => {
  




  const [filters, setFilters] = useState<SearchFilters>({


    

















  logInfo('🔍 SearchPage component rendered with:', { 

            <EnhancedSearchInput
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>


            <Select value={filters.sort} onValueChange={(value) => 
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

              <Button
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button
                <List className="h-4 w-4" />
              </Button>

            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(true)}>
              <Filter className="h-4 w-4 mr-2" />
            </Button>

                <Button
                </Button>
            <FilterSidebar

            <NoResultsState 
                <SearchResultCard

export default function SearchPage() {


import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';


import { 
import SmartHeader from '../components/SmartHeader';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
import SmartFooter from '../components/SmartFooter';
export default function SearchPage() {



export default function SearchPage() {



export default function SearchPage() {;








    <Layout>;
      <Head>;
      </Head>;






                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />








import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';
import Layout from './components / Layout';
import Layout from './components / Layout';
import {
export default /**
    <Layout>;
      <Head>;
      </Head>;
                  <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                  <Filter className="w - 4 h - 4 mr - 2" />;
                  {show_filters ? <ChevronUp className="w - 4 h - 4 ml - 2" /> : <ChevronDown className="w - 4 h - 4 ml - 2" />}




                  <Grid className="w-5 h-5" />
                  <List className="w-5 h-5" />

                  <Sliders className="w-4 h-4" />



                  <X className="w-4 h-4" />








                <Search className="w-12 h-12 text-white/40" />
            <AnimatePresence mode="wait">




                <Search className='w-12 h-12 text-white/40' />
            <AnimatePresence mode='wait'>



                              <CheckCircle className='w-4 h-4 text-cyan-400 flex-shrink-0' />                              <span>{feature}</span>


</Link>
                      </Link>                    </div>


                          <Link
                          </Link>;
                          <Clock className="w-4 h-4 mr-1" />;
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />;
                      <Link
                        <ArrowRight className="w-5 h-5" />;
                      </Link>;




            </AnimatePresence>
                <Search className='w-12 h-12 text-white/40' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



}

export default function SearchPage() {
  const router = useRouter();
  const q = (router.query.q as string) || '';
  const [data, setData] = useState<ApiResponse | null>(null);
  const [tab, setTab] = useState<'all' | 'talent' | 'jobs' | 'projects'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) return;
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then(r => r.json())
      .then(j => setData(j))
      .finally(() => setLoading(false));
  }, [q]);

  const results = useMemo(() => {
    if (!data) return [] as any[];
    const map: any = { all: data.results.all, talent: data.results.talent, jobs: data.results.jobs, projects: data.results.projects };
    return map[tab] || [];
  }, [data, tab]);


      {loading && <div className="text-sm text-gray-500">Searching...</div>}


                  <Highlight text={r.title} keywords={data.keywords} />
                {r.subtitle && <div className="text-sm text-gray-600 dark:text-gray-400"><Highlight text={r.subtitle} keywords={data.keywords} /></div>}
                {r.description && <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-2"><Highlight text={r.description} keywords={data.keywords} /></div>}

    </Layout>);
