import React from 'react',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import Card from '../components/ui/Card',
import { FileText, Check, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react',

export default function AuditLogVaultPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const features = [
    'Append-only, tamper-evident storageFlexible retention and legal holdsCryptographic digests and attestationsFine-grained search and export bundlesChain-of-custody and access reviewsAlerts for risky access patterns'
  ],
  return (_<UltraAdvancedFuturisticBackground>
      <Head>
        <title>Audit Log Vault | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Immutable, indexed, long-term audit trails for compliance and forensics with search, exports and cryptographic attestations.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/audit-log-vault&quot; />      </Head>

      <div className=&quot;min-h-screen pt-24 pb-16 px-4&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;>
              <ShieldCheck className=&quot;w-10 h-10&quot; /> Audit Log Vault
            </h1>
            <p className=&quot;mt-4 text-xl text-gray-300 max-w-3xl mx-auto&quot;>Compliance-first audit log storage and search with WORM options, retention, attestations and exports.</p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
            <Card className=&quot;lg:col-span-2 p-6 bg-black/40 border border-gray-700/50&quot;>
              <h2 className=&quot;text-2xl font-semibold text-white mb-4&quot;>Overview</h2>
              <p className=&quot;text-gray-300 mb-6&quot;>Centralize audit logs from apps and platforms into an immutable, indexed store with strong retention controls and cryptographic integrity, ready for SOC 2, HIPAA and ISO reviews.</p>
              <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>Key Features</h3>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300&quot;>
                {features.map((f) => (
                  <li key={f} className=&quot;flex items-start gap-2&quot;><Check className=&quot;w-4 h-4 text-emerald-400 mt-0.5&quot; /> <span>{f}</span></li>                ))}
              </ul>
            </Card>
            <Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
              <div className=&quot;text-sm text-gray-400 mb-1&quot;>Pricing</div>
              <div className=&quot;text-3xl font-bold text-white&quot;>$89<span className=&quot;text-base text-gray-400&quot;>/month</span></div>
              <div className=&quot;text-sm text-gray-400 mt-2&quot;>Trial: 14 days  Setup: 30 minutes</div>
              <div className=&quot;mt-6 flex gap-3&quot;>
                <Link href=&quot;/contact&quot; className=&quot;flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white&quot;>Contact Sales</Button>
                <Link href=&quot;https://ziontechgroup.com/audit-log-vault&quot; variant=&quot;outline&quot; className=&quot;flex-1 border border-gray-600 text-gray-200&quot;><ExternalLink className=&quot;w-4 h-4 mr-2&quot; /> Learn More</Button>
              </div>
              <div className=&quot;mt-6 space-y-3 text-sm&quot;>
                <div className=&quot;flex items-center gap-2 text-cyan-400&quot;><Phone className=&quot;w-4 h-4&quot; /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className=&quot;hover:underline&quot;>{contactInfo.mobile}</a></div>
                <div className=&quot;flex items-center gap-2 text-purple-400&quot;><Mail className=&quot;w-4 h-4&quot; /><a href={`mailto:${contactInfo.email}`} className=&quot;hover:underline&quot;>{contactInfo.email}</a></div>
                <div className=&quot;flex items-center gap-2 text-green-400&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs hover:underline&quot;>{contactInfo.address}</a></div>              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
;