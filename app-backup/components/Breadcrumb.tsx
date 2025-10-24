import React from 'react'
import { Home, ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
'use client'
interface BreadcrumbItem {
  name: string,
    path: string
  icon?: React.ComponentType<{ className?: string }>
}
const Breadcrumb: React.FC = ($2) => {
  $3
};
  const pathSegments = $2;
export default Breadcrumb