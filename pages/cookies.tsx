import React from 'react',
import SEO from '../components/SEO',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
export default function CookiesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title=&quot;Cookie Policy | Zion Tech Group&quot; description=&quot;Information about cookies used by Zion Tech Group.&quot; canonical=&quot;https://ziontechgroup.com/cookies/&quot; />
      <div className=&quot;container mx-auto px-4 py-24 text-white&quot;>
        <div className=&quot;max-w-3xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-5xl font-bold&quot;>Cookie Policy</h1>
          <p className=&quot;text-gray-300&quot;>We use minimal, privacy‑respecting analytics. Some third‑party embeds may set cookies. You can block non‑essential cookies via your browser.</p>
          <ul className=&quot;list-disc list-inside text-gray-300 space-y-1&quot;>            <li>Purpose: performance and security</li>
            <li>Retention: session or short‑term</li>
            <li>Opt‑out: browser settings and extensions</li>
          </ul>
          <p className=&quot;text-gray-400 text-sm&quot;>Questions? <a className=&quot;text-cyan-400&quot; href=&quot;mailto:kleber@ziontechgroup.com&quot;>kleber@ziontechgroup.com</Link></p>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}