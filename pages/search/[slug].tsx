import { GetServerSideProps } from 'next'
import { useRouter } from 'next/
import { useAuth } from '@/context/auth/
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components/
import { Button } from '@/components/ui/
import { Input } from '@/components/ui/
import { useRouter  } from 'next/
import { useAuth  } from '@/context/auth/
import { SEO  } from '@/components/
import { Button  } from '@/components/ui/
import { Input  } from '@/components/ui/
import ProductCard from '@/components/
import { TalentCard  } from '@/components/talent/
import { CategoryCard  } from '@/components/
import { SearchEmptyState  } from '@/components/marketplace/
import { MARKETPLACE_LISTINGS  } from '@/data/
import { TALENT_PROFILES  } from '@/data/
import { BLOG_POSTS  } from '@/data/
import { useDebounce  } from '@/hooks/
import { logInfo, logErrorToProduction } from '@/utils/
import { use_router } from 'next /
import { use_auth } from '@/context / auth /
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components /
import { Button } from '@/components / ui /
import { Input } from '@/components / ui /
import ProductCard from '@/components /
import {TalentCard} from '@/components / talent /
import {CategoryCard} from '@/components /
import {SearchEmptyState} from '@/components / marketplace /
import {MARKETPLACE_LISTINGS} from '@/data /
import {TALENT_PROFILES} from '@/data /
import {BLOG_POSTS} from '@/data /
import {use_debounce} from '@/hooks /
import {log_info, logErrorToProduction} from '@/utils /