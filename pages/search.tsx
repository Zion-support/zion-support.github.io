import React, { useState, useEffect } from 'react',
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, ArrowRight, ExternalLink;
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon;
  X, Sliders, SortAsc, SortDesc
 } from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]),
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [filters, setFilters] = useState({
    category: 'all';
    status: 'all';
    priceRange: 'all';
    technology: 'all'
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  // Mock data for search
  const allServices = null;
                      performSearch()
                    }}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'AI Development',
                'Cloud Services',
                'Cybersecurity',
                'Database Design',
                'Mobile Apps',
                'Web Development',
                'IT Support',
                'Consulting'
              ].map((term, index) => (
                <motion.button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {term}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}  )
}
)
}
