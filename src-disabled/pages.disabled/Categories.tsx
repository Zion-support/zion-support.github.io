

:src_backup/pages/Categories.tsx
:src/pages/Categories.tsx
import useSWR from 'swr',
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading";
import { SkeletonCard  } from '@/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Folder } from 'lucide-react'
import { CATEGORIES  } from '@/data/categories';
import { NextSeo  } from '@/components/NextSeo';
import {logErrorToProduction} from '@/utils/productionLogger';
:src/pages/Categories.tsx
import useSWR from 'swr,
import { CategoryCard } from "@/components/CategoryCard,
import { GradientHeading } from @/components/GradientHeading";
import { SkeletonCard  } from @/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary;
import { Folder } from 'lucide-react
import { CATEGORIES  } from @/data/categories';
import { NextSeo  } from '@/components/NextSeo;
import {logErrorToProduction} from @/utils/productionLogger';
import useSWR from 'swr;
import { CategoryCard } from @/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading;
import { SkeletonCard } from @/components/ui';
import ErrorBoundary from '@/components/GlobalErrorBoundary;
import { Folder } from lucide-react';
import { CATEGORIES } from '@/data/categories;
import { NextSeo } from @/components/NextSeo';
import { logErrorToProduction } from '@/utils/productionLogger;
import React from "react"
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})

import React from "react"
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})
:src_backup/pages/Categories.tsx
:src_backup/pages/Categories.tsx
:src/pages/Categories.tsx
import useSWR from 'swr',;
import { CategoryCard } from "@/components/CategoryCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { SkeletonCard } from '@/components/ui',;
import ErrorBoundary from "@/components/GlobalErrorBoundary",;
import { Folder } from 'lucide-react';
import { CATEGORIES } from '@/data/categories',;
import { NextSeo } from '@/components/NextSeo',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface CategoryType {;
  id: string,;
  name: string,;
  slug: string,;
  icon: string;
}
;
const fetcher = async (url: string): Promise<CategoryType[]> => {;
  try {;
    const response = await fetch(url),;
    if (!response.ok) {;
      logErrorToProduction('Categories API error:', { data: response.statusText }),;
      return CATEGORIES as CategoryType[];
    }
    const data = await response.json(),;
    return Array.isArray(data) && data.length > 0 ? data : CATEGORIES as CategoryType[];
  } catch (err) {;
    logErrorToProduction('Categories API fetch failed:', { data: err }),;
    return CATEGORIES as CategoryType[];
  }
},;
export interface CategoriesProps {;
  categories?: CategoryType[];
}


