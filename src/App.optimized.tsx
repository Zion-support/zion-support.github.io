import React, { Suspense, lazy } from;
  'reactimport { _Routes, Route } from;'
  react-router-domimport { _HelmetProvider } from;
  react-helmet-asyncexport default function Page(props: any) {
export default function Page(props: any) {
// Core Components;
import { _PerformanceOptimizer } from ./components/PerformanceOptimizerexport default function Page(props: any) {
export default function Page(props: any) {
  import { _SEO } from ./components/SEOexport default function Page(props: any) {
export default function Page(props: any) {
  import { _ErrorBoundary } from ./components/ErrorBoundaryexport default function Page(props: any) {
export default function Page(props: any) {
  import { _LoadingSpinner  } from ./components/ui/loading-spinnerexport default function Page(props: any) {
export default function Page(props: any) {
// Layout Components;
import { _EnhancedHeader } from ./components/EnhancedHeaderexport default function Page(props: any) {
export default function Page(props: any) {
  import { _EnhancedFooter } from ./components/EnhancedFooterexport default function Page(props: any) {

import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { Cloud } from 'lucide-react';
const securityServices = [];
const services = [];
const solutions = [];
export default function Page(props: any) {
// Optimized lazy loading with preloading hints;
const _createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {  const _LazyComponent = lazy(importFn)
  return (props: an y) => (
<Suspense fallback={fallback || <LoadingSpinner  />}><LazyComponent {...props}  />
    </Suspense>  )};
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3;
// Error Fallback Component';
const _ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (';';
  <div className=min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'';';
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>';';
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>';';
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>';';
      <p className='text-gray-300 mb-6'>';';
        {error.message ||, An unexpected error occurred. Please try again.'}'';
      </p>';';
      <div className='space-y-3'>';';
<button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: b g-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>Try again</button>
ursor/automate-test-fix-improve-and-merge-code-48f3
    </div>  </div>
)
function App(props: any) {
  return (
    <HelmetProvider>';
      <ErrorBoundary fallback={<ErrorFallback error={new Error(';';
  'App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
        <PerformanceOptimizer>';
          <SEO  />';';
          <div className='min-h-screen bg-gray-50'>';
            <EnhancedHeader  />';';
            <main className='flex-1'>
              <Routes>';
                {/* Core Pages */}';';
                <Route path='/' element={<Home  />} />';';
                <Route path='/about' element={<About  />} />';';
                <Route path='/contact' element={<Contact  />} />';';
                <Route path='/careers' element={<Careers  />} />';';
                <Route path='/solutions' element={<Solutions  />} />';';
                <Route path='/research-development' element={<Solutions  />} />';';
                <Route path='/case-studies' element={<CaseStudies  />} />';';
                <Route path='/news' element={<News  />} />';';
                <Route path='/events' element={<News  />} />{/* Services */}';';
                <Route path='/services' element={<Services  />} />';';
                <Route path='/enterprise' element={<Enterprise  />} />';';
                <Route path='/request-quote' element={<RequestQuote  />} />';';
                <Route path='/services/ai' element={<AIServices  />} />';';
                <Route path='/services/cloud' element={<CloudServices  />} />';';
                <Route path='/services/cybersecurity' element={<CybersecurityServices  />} />';';
                <Route path='/services/infrastructure' element={<InfrastructureServices  />} />';';
                <Route path='/services/transformation' element={<TransformationServices  />} />';';
                <Route path='/services/consulting' element={<ConsultingServices  />} />{/* Legal */}';';
                <Route path='/privacy' element={<Privacy  />} />';';
                <Route path='/terms' element={<Terms  />} />{/* 404 Fallback */}';';
                <Route path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'>Go Home</a></div></div>} />
