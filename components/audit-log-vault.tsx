

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import React from 'react';
 return (<UltraAdvancedFuturisticBackground> <Head> <title>Audit Log Vault | Zion Tech Group</title> </Head> <div className="min-h-screen pt-24 pb-16 px-4" > <div className="max-w-6xl mx-auto" > <div className="text-center mb-10" > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3" > <ShieldCheck className="w-10 h-10" /> Audit Log Vault </h1>) )
 return (<UltraAdvancedFuturisticBackground> <Head> <title>Audit Log Vault | Zion Tech Group</title> </Head> <div className="min-h-screen pt-24 pb-16 px-4" > <div className="max-w-6xl mx-auto" > <div className="text-center mb-10" > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3" > <ShieldCheck className="w-10 h-10" /> Audit Log Vault </h1>) ) 
}</ul> </Card> <Card className="p-6 bg-black/40 border border-gray-700/50" > <div className="text-sm text-gray-400 mb-1" >Pricing</div> <div className="text-3xl font-bold text-white" >$89<span className="text-base text-gray-400" >/month</span></div> <div className="text-sm text-gray-400 mt-2" >Trial: 14 days • Setup: 30 minutes</div> <div className="mt-6 flex gap-3" > <Link href="/contact" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white" >Contact Sales</Button> <Link href="https://ziontechgroup.com/audit-log-vault" variant="outline" className="flex-1 border border-gray-600 text-gray-200" ><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button> </div> </div> </Card> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
 return (<UltraAdvancedFuturisticBackground> <Head> <title>Audit Log Vault | Zion Tech Group</title> </Head> <div className="min-h-screen pt-24 pb-16 px-4" > <div className="max-w-6xl mx-auto" > <div className="text-center mb-10" > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3" > <ShieldCheck className="w-10 h-10" /> Audit Log Vault </h1>) ) ;
}</ul> </Card> <Card className="p-6 bg-black/40 border border-gray-700/50" > <div className="text-sm text-gray-400 mb-1" >Pricing</div> <div className="text-3xl font-bold text-white" >$89<span className="text-base text-gray-400" >/month</span></div> <div className="text-sm text-gray-400 mt-2" >Trial: 14 days • Setup: 30 minutes</div> <div className="mt-6 flex gap-3" > <Link href="/contact" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white" >Contact Sales</Button> <Link href="https://ziontechgroup && ziontechgroup.com/audit-log-vault" variant="outline" className="flex-1 border border-gray-600 text-gray-200" ><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button> </div> </div> </Card> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';


=======
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {FileText, Check, Phone, Mail, MapPin, ExternalLink, ShieldCheck} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from '@/components/ui/card';

<<<<<<< HEAD
  const contactInfo = {
export default function AuditLogVaultPage() {
=======
export default function AuditLogVaultPage() {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  }
  const features = [
<<<<<<< HEAD
<<<<<<< HEAD
    'Append-only, tamper-evident storageFlexible retention and legal holdsCryptographic digests and attestationsFine-grained search and export bundlesChain-of-custody and access reviewsAlerts for risky access patterns';
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Audit Log Vault | Zion Tech Group</title>
        <meta name="description" content="Immutable, indexed, long-term audit trails for compliance and forensics with search, exports and cryptographic attestations." />
        <link rel="canonical" href="https://ziontechgroup.com/audit-log-vault" />
      </Head>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <ShieldCheck className="w-10 h-10" /> Audit Log Vault
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Compliance-first audit log storage and search with WORM options, retention, attestations and exports.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-gray-300 mb-6">Centralize audit logs from apps and platforms into an immutable, indexed store with strong retention controls and cryptographic integrity, ready for SOC 2, HIPAA and ISO reviews.</p>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">$89<span className="text-base text-gray-400">/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 14 days • Setup: 30 minutes</div>
              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Contact Sales</Button>
                <Link href="https://ziontechgroup.com/audit-log-vault" variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
    'Append-only, tamper-evident storageFlexible retention and legal holdsCryptographic digests and attestationsFine-grained search and export bundlesChain-of-custody and access reviewsAlerts for risky access patterns'
=======
    'Append-only, tamper-evident storageFlexible retention and legal holdsCryptographic digests and attestationsFine-grained search and export bundlesChain-of-custody and access reviewsAlerts for risky access patterns'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    'Append-only, tamper-evident storageFlexible retention and legal holdsCryptographic digests and attestationsFine-grained search and export bundlesChain-of-custody and access reviewsAlerts for risky access patterns'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
return (<UltraAdvancedFuturisticBackground> <Head> <title > Audit Log Vault | Zion Tech Group</title> </Head> <div className="min - h-screen pt - 24 pb - 16 px - 4" > <div className="max - w-6xl mx - auto" > <div className="text - center mb - 10" > <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - purple - 400 via - indigo - 400 to - pink - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3" > <ShieldCheck className="w - 10 h - 10" /> Audit Log Vault </h1>) );
}</ul> </Card> <Card className="p - 6 bg - black / 40 border border - gray - 700 / 50" > <div className="text - sm text - gray - 400 mb - 1" >Pricing</div> <div className="text - 3xl font - bold text - white" >$89 < span className="text - base text - gray - 400" >/month</span></div> <div className="text - sm text - gray - 400 mt - 2" >Trial: 14 days • Setup: 30 minutes</div> <div className="mt - 6 flex gap - 3" > <Link href="/contact" className="flex - 1 bg - gradient - to - r from - purple - 600 to - indigo - 600 text - white" >Contact Sales</Button> <Link href="https://ziontechgroup.com / audit - log - vault" variant="outline" className="flex - 1 border border - gray - 600 text - gray - 200" ><ExternalLink className="w - 4 h - 4 mr - 2" /> Learn More</Button> </div> </div> </Card> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';
import Head from 'next / head';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import Card from '../components / ui / Card';
import {FileText, Check, Phone, Mail, MapPin, ExternalLink, ShieldCheck} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from '@/components / ui / card';
export default /**
 * AuditLogVaultPage - Function description
 */
function AuditLogVaultPage() {
  const contact_info = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
export default function AuditLogVaultPage() {
<<<<<<< HEAD
=======
  const contactInfo = {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
export default function AuditLogVaultPage() {
  const contactInfo = {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
  }
<<<<<<< HEAD
;
  const features = [;
    'Append - only, tamper - evident storage_flexible retention and legal holds_cryptographic digests and attestations_fine - grained search and export bundles_chain - of - custody and access reviews_alerts for risky access patterns';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
;
=======
}

;
  const features = [;
    'Append - only, tamper - evident storage_flexible retention and legal holds_cryptographic digests and attestations_fine - grained search and export bundles_chain - of - custody and access reviews_alerts for risky access patterns';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

export default function AuditLogVaultPage() {;
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com';
  };


              </div>;
            </Card>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
}

<<<<<<< HEAD
  );
}
}


}


;
=======
=======
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
