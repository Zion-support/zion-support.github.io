import Head from 'next/head';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { real2025Q3Additions } from '../../data/real-2025-q3-additions';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      real2025Q3Additions as unknown[]
    );
  const byCategory: Record<string, unknown[]> = {};
  for (const c of categories) byCategory[c] = [];
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & Data',
    'AI & Machine Learning': 'AI & Data',
    'GenAI': 'AI & Data',
    'Cloud & FinOps': 'Cloud & FinOps',
    'Cloud & Data': 'Cloud & FinOps',
    'Platform Engineering': 'Cloud & FinOps',
    'Observability': 'Observability',
    'Observability & Telemetry': 'Observability',
    'Quality & Monitoring': 'Quality & Monitoring',
    'Security & Reliability': 'Quality & Monitoring',
    'Security & Compliance': 'Quality & Monitoring',
    'Developer Tools': 'Developer Tools',
    'Growth & Marketing': 'Developer Tools'
  };
  for (const s of all) {
    const service = s as { category?: string };
    const rawCat = (service.category || '').trim();
    const mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }

  const anchorMap: Record<string, string> = {
    'AI & Data': 'ai',
    'Developer Tools': 'developer-tools',
    'Cloud & FinOps': 'cloud',
    'Observability': 'observability',
    'Quality & Monitoring': 'quality',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud solutions, software development, data analytics, security, and automation services. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, cloud solutions, software development, data analytics, cybersecurity, automation, micro SAAS, technology consulting" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth. 
            From AI-powered micro SAAS applications to enterprise-grade infrastructure, 
            we deliver innovative solutions that drive real results.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-4">Contact our experts today for a free consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{category}</h2>
              <p className="text-gray-300 mb-8 text-lg">
                {category === 'AI & Data' && 'Cutting-edge AI solutions to transform your business'}
                {category === 'Developer Tools' && 'Essential tools for modern development workflows'}
                {category === 'Cloud & FinOps' && 'Scalable cloud solutions for modern businesses'}
                {category === 'Observability' && 'Monitor and optimize your systems in real-time'}
                {category === 'Quality & Monitoring' && 'Ensure reliability and performance at scale'}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {byCategory[category]?.slice(0, 6).map((service: any, serviceIndex: number) => (
                  <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name || service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description || service.summary}</p>
                    {service.price && (
                      <p className="text-green-400 font-semibold mb-4">{service.price}</p>
                    )}
                    <Link 
                      href={`/services/${toSlug(service.name || service.title)}`} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
              
              {byCategory[category]?.length > 6 && (
                <div className="text-center mt-6">
                  <Link 
                    href={`/services/category/${anchorMap[category]}`}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All {category} Services ({byCategory[category].length})
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p>Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>Round-the-clock support to ensure your systems run smoothly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p>Solutions that grow with your business, from startup to enterprise</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Let's discuss how we can help transform your business with technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
          </div>
          <p className="mt-4 text-sm">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </main>
    </div>
  );
}