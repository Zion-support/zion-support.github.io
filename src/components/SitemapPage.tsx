import React from 'react';
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';

import React from 'react';
import { completeSitemap, dynamicPaths  } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { SEO  } from './SEO';
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {
