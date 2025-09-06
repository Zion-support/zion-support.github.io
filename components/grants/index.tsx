import {useEffect, useState} from 'react';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {
  GrantApplication,
  GrantCategory,
  GrantStatus,;
} from '../../types/grants';

const categories: GrantCategory[] = [
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants',
];
const statuses: GrantStatus[] = [
  'Draft',
  'Submitted',
  'Under Review',
  'Approved',
  'Rejected',
];

export default function GrantsPage() {
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.sector) params.set('sector', filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then(r => r.json())
      .then(d => setItems(d.items || []))
      .catch(() => setItems([]));  }, [filters]);

  return (
    <EnhancedLayout>

  }, [filters]);

  return (
    <EnhancedLayout>