<<<<<<< HEAD
=======
<<<<<<< HEAD:backup-problematic-pages/EquipmentPage.tsx
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
<<<<<<<< HEAD:backup-problematic-pages/EquipmentPage.tsx
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from "lucide-react";
import { useInfiniteScrollPagination } from "@/hooks/useInfiniteScroll";
import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment } from "@/utils/equipmentAutoFeedAlgorithm";
import { ProductListing } from "@/types/listings";
import { SkeletonCard } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from '@/components/ui/spinner';
import { EquipmentErrorBoundary } from "@/components/EquipmentErrorBoundary";
import { useCurrency } from "@/hooks/useCurrency";
========
import { useRouter, ,  } from 'next/router';
import { useState,, useEffect,, useCallback,, useMemo, ,  } from 'react';
import { motion,, AnimatePresence, ,  } from 'framer-motion';
import { ArrowUp,, Filter,, SortAsc,, Zap,, TrendingUp,, Star,, ShoppingCart,, MapPin,, Package,, AlertTriangle, RefreshCw,  } from 'lucide-react'
import { useInfiniteScrollPagination, ,  } from '@/hooks/useInfiniteScroll';
import { generateDatacenterEquipment,, getEquipmentMarketStats,, getRecommendedEquipment, ,  } from '@/utils/equipmentAutoFeedAlgorithm';
import { ProductListing, ,  } from '@/types/listings';
import { SkeletonCard, ,  } from '@/components/ui/skeleton';
import { Button, ,  } from '@/components/ui/button';
import { Badge, ,  } from '@/components/ui/badge';
import { Card,, CardContent,, CardHeader,, CardTitle, ,  } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
import { EquipmentErrorBoundary, ,  } from '@/components/EquipmentErrorBoundary';
import { useCurrency, ,  } from '@/hooks/useCurrency';
>>>>>>>> pr-22690:temp-broken-files/EquipmentPage.tsx
import { logErrorToProduction } from '@/utils/productionLogger';
// Enhanced initial equipment with more variety,
const INITIAL_EQUIPMENT: ProductListing[] = [
  {
    id: "nvidia-a100-server";
title: "NVIDIA A100 GPU Training Server";
    description: "High-performance AI training server with 8x A100 GPUs designed for demanding machine learning workloads.",
    category: "AI Hardware";
price: 85000;
    currency: "$";
brand: "NVIDIA";
    specifications: ["8x A100 GPUs", "2TB HBM2e", "NVLink"],
    tags: ["AI", "Machine Learning", "GPU"],
    author: { name: "NVIDIA", id: "nvidia" },
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto;
  // Loading state,
if (loading && equipment.length === 0) {
    return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0 y: 20 }} animate={{ opacity: 1 y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    )
  }
import React from 'react';

export default function EquipmentPage() {
  return (
=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function EquipmentPage() {
  return (
    <>
      <SEO 
        title="EquipmentPage - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">EquipmentPage</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/EquipmentPage.tsx
