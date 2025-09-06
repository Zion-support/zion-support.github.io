import { useState } from 'react'
import { logDebug, logErrorToProduction } from '@/utils/
import Link from 'next/
import { useRouter } from 'next/
import { Logo } from '@/components/header/
import { PointsBadge } from '@/components/loyalty/
import { UserMenu } from '@/components/header/
import { LanguageSelector } from '@/components/header/
import { ModeToggle } from '@/components/
import { useAuth } from '@/hooks/
import { useIsMobile } from '@/hooks/
import { useMessaging } from '@/context/
import { EnhancedSearchInput } from '@/components/search/
import { generateSearchSuggestions } from '@/data/
import { slugify } from '@/lib/
import { ResponsiveNavigation } from '@/components/navigation/
import { MobileMenu } from '@/components/header/
import { MobileBottomNav } from '@/components/header/
import { CartDrawer } from '@/components/cart/
import { LoginModal } from '@/components/auth/
> 