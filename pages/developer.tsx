import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Link from 'next/link',
export default function DeveloperPage() {
  return (
    <>
      <Head>
        <title>Developer Portal | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Developer resources, API keys, examples, and SDKs.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/developer&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-16 text-gray-200&quot;>
        <h1 className=&quot;text-4xl md:text-6xl font-bold mb-4&quot;>Developer Portal</h1>
        <p className=&quot;text-gray-300 mb-6&quot;>Access docs, SDKs, and quickstarts for all services. Contact us for enterprise onboarding.</p>
              <div className=&quot;space-x-4&quot;>
        <a href=&quot;/api-docs&quot; className=&quot;text-cyan-400 underline&quot;>API Docs</Link>
        <a href=&quot;/docs&quot; className=&quot;text-cyan-400 underline&quot;>Guides</Link>
        <a href=&quot;/support&quot; className=&quot;text-cyan-400 underline&quot;>Support</Link>
      </div>
      </div>
    </>
  )
}