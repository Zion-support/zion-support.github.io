
import { GradientHeading } from "@/components/GradientHeading",
import { SkeletonCard } from '@/components/ui',
import ErrorBoundary from "@/components/GlobalErrorBoundary",

import { Folder } from 'lucide-react'
import { CATEGORIES  } from '@/data/categories';
import { NextSeo  } from '@/components/NextSeo';
import {logErrorToProduction} from '@/utils/productionLogger';
interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string


