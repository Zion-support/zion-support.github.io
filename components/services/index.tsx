import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025'

const mapLocalToServiceItem = $2;
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10}),

const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]),
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]),
  const [filters, setFilters] = React.useState<Filters>({ categories: [] }),
  const [modalOpen, setModalOpen] = React.useState($2);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null),

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat($2);
  const byCategory: Record<string, unknown[]> = {},
  for (const c of categories) byCategory[c] = [],
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & DataAI & Machine Learning': 'AI & DataGenAI': 'AI & DataCloud & FinOps': 'Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering': 'Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry': 'ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability': 'Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools': 'Developer ToolsGrowth & Marketing': 'Developer Tools'
  },
  for (const s of all) {
    const service = $2;
    const rawCat = (service.category || '').trim($2);
    const mapped = $2;
    byCategory[mapped].push(s)
  }

  React.useEffect(() => {
    const next = $2;
      // Price
      const min = $2;
      const max = $2;
      if (filters.priceMin !== undefined && (min = $2;
      if (filters.priceMax !== undefined && (min = $2;
      // Rating
      if (filters.ratingMin !== undefined && (s.rating ?? 0) < filters.ratingMin) return false,
      // Delivery time (not available in data, simulate pass-through)
      return true
    }),
    setFiltered(next)
  }, [filters, services]),

  const availableCategories = $2;
    services.forEach((s) => s.categories.forEach((c) => set.add(c))),
    return Array.from(set)
  }, [services]),

  const handleRequestQuote = (service: ServiceItem) => {
    setSelected($2);
    setModalOpen(true)
  },

  const handleSubmit = async (values: QuoteFormValues) => {
    const res = await fetch('/api/quote-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service: values.serviceTitle,
        description: values.projectDescription,
        timeline: { start: values.timelineStart, end: values.timelineEnd },
        budgetRange: values.budgetRange,
        email: values.email})}),
    if (!res.ok) {
      const err = $2;
      throw new Error(err?.message || 'Failed to submit')
    }
  },

  return (
    <UltraFuturisticBackground variant = $2;
export default ServicesPage,
