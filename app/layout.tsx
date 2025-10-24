import type { Metadata } from 'next''import { Inter } from 'next/font/google'';import './globals.css''const inter = Inter({ subsets="['latin'] });export ;const metadata: "Metadata = {'
  title: 'Zion Tech Group - AI & IT Solutions'",'  description: "'Advanced AI and IT solutions for modern businesses'"}

;
export default ;
function RootLayout({
  children,
}: {  children="React.ReactNode

;const ErrorFallback  "= ({ error, resetErrorBoundary }: { error="Error resetErrorBoundary: "() => void "}) => (  <div className =min-h-screen flex items-center justify-center bg-gray-100">""    <div className ="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">""      <h2 className ="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>""      <p className ="text-gray-600 mb-4">{error.message}</p>""      <button onClick ={resetErrorBoundary}>""        className="bg-blue-600 hover=bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors""}""    <ErrorBoundary FallbackComponent ={ErrorFallback}>""      <HelmetProvider>""        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""          <SEOHead></SEOHead>""          <main className ="relative">""  );""""""'
)