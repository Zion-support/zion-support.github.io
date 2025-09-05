import React from 'react',
import SEO from '../components/SEO',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
export default function BlogPage() {
  return (
    <UltraFuturisticBackground intensity=&quot;high&quot; variant=&quot;quantum&quot;>
      <SEO title=&quot;Blog | Zion Tech Group&quot; description=&quot;Insights and updates on AI, cloud, and automation.&quot; canonical=&quot;https://ziontechgroup.com/blog/&quot; />
      <div className=&quot;container mx-auto px-4 py-16 text-white&quot;>
        <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Blog</h1>
        <p className=&quot;mt-4 text-gray-300 max-w-3xl&quot;>Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>
      </div>
    </UltraFuturisticBackground>
  )
}