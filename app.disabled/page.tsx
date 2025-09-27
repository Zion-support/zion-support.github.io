import Link from 'next/link',
import { ArrowRight } from 'lucide-react',
export const metadata = {,
title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
}
,
export default function HomePage() {;
return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">,
      <div className="max-w-3xl text-center">,
        <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 leading-tight">,
          Advanced AI and,
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions
        
        <p className="text-lg text-gray-300 mb-8">Transform your business with cutting-edge AI, cloud, and cybersecurity solutions.
        <div className="flex flex-col sm: flex-row gap-4 justify-center">,
          <Link href="/services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center">,
            Explore Solutions,
            <ArrowRight className="ml-2 w-5 h-5" />,
          
          <Link href="/contact" className="border border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center">,
            Get Started,

    </main>)}
,
