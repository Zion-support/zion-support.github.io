'use client';
import React from 'react'
interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'LocalBusiness'
  data?: Record<string, unknown>
}
const StructuredData: React.FC<StructuredDataProps> = ({ 
  type;

export default StructuredData