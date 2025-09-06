import type { AppProps } from 'next/
import Layout from '../components/
import '../styles/
import { useRouter } from 'next/
import { QueryClient, QueryClientProvider } from '@tanstack/
import type { AppProps } from 'next/
import { AuthProvider } from '@/context/auth/
import { store } from '@/
import { useAuth } from '@/hooks/
import { ErrorProvider } from '@/context/
import ErrorResetOnRouteChange from '@/components/
import i18n from '@/
import { LanguageProvider } from '@/context/
import GlobalErrorBoundary from '@/components/
import { ErrorBoundary } from '@/components/
import RootErrorBoundary from '@/components/
import { ApiErrorBoundary } from '@/components/
import ProductionErrorBoundary from '@/components/
import dynamic from 'next/
import { logInfo, logWarn, logErrorToProduction } from '@/utils/
import { HydrationErrorBoundary } from '@/components/
import { Inter, Poppins } from 'next/font/
import Head from 'next/
import '../src/
import * as Sentry from '@sentry/
import { initializeGlobalErrorHandlers } from '@/utils/
  initializeServices} from '@/utils/
  import('@/context/
  import('@/context/
  import('@/context/
  import('@/context/
  import('@/context/
  import('@/components/
  import('@/layout/