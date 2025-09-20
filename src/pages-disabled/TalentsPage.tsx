import import { useRouter,,, ,,  } from 'next/router';
import import { useState,,, useEffect,,, useCallback,,, useMemo,,, ,,  } from 'react';
import import { motion,,, AnimatePresence,,, ,,  } from 'framer-motion';
import { ArrowUp,,, Filter,,, SortAsc,,, Users,,, TrendingUp,,, Star,,, Verified,,, MapPin,,  } from 'lucide-react'
import import { useInfiniteScrollPagination,,, ,,  } from '@/hooks/useInfiniteScroll';
import import { generateAITalents,,, getTalentMarketStats,,, getRecommendedTalents,,, ,,  } from '@/utils/talentAutoFeedAlgorithm';
import import { TALENT_PROFILES,,, ,,  } from '@/data/talentData';
import import { TalentProfile,,, ,,  } from '@/types/talent';
import import { SkeletonCard,,, ,,  } from '@/components/ui/skeleton';
import import { Button,,, ,,  } from '@/components/ui/button';
import import { Badge,,, ,,  } from '@/components/ui/badge';
import import { Card,,, CardContent,,, CardHeader,,, CardTitle,,, ,,  } from '@/components/ui/card';
import import Spinner from '@/components/ui/spinner';
// Market insights component for talents,
const TalentMarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className;
  // Loading state,
if (loading && talents.length === 0) {
    return (
      <div className="container py-8" data-testid="talents-loading">
        <motion.div,
initial={{ opacity: 0 y: 20 }}
          animate={{ opacity: 1 y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            AI & IT Talent Directory
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with world-class AI and technology professionals
          </p>
        </motion.div>
        <TalentLoadingGrid />
      </div>
    )
  }

