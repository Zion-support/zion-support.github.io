import NextHead from 'next/head';
import UltraFuturisticBackgroundComponent from '../components/ui/UltraFuturisticBackground';
import UIButton from '../components/ui/Button';
import UICard from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { realMarketServices } from '../data/real-market-services';
import { innovativeAiServices } from '../data/innovative-ai-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeItServices } from '../data/innovative-it-services';
import { nextGenAiServices } from '../data/next-gen-ai-services';
import { nextGenItServices } from '../data/next-gen-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { innovative2025NewServices } from '../data/innovative-2025-new-services';
import { innovative2026AiServices } from '../data/innovative-2026-ai-services';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas-services';
import { innovative2026ItInfrastructure } from '../data/innovative-2026-it-infrastructure';
import { innovative2026EmergingTechServices } from '../data/innovative-2026-emerging-tech-services';
import { newRealServices2025Q4 } from '../data/new-real-services-2025-q4';
import { newRealServices2027 } from '../data/new-real-services-2027';
import { newlyAddedServices } from '../data/newly-added-services';
import { real2025Q4Additions } from '../data/real-2025-q4-additions';
import { real2025Q5Additions } from '../data/real-2025-q5-additions';
import { real2026Q1Additions } from '../data/real-2026-q1-additions';
import { real2026Q2Services } from '../data/real-2026-q2-services';
import { real2026Q2VerifiedAdditions } from '../data/real-2026-q2-verified-additions';
import { real2027Q3Additions } from '../data/real-2027-q3-additions';
import { real2027Q4Additions } from '../data/real-2027-q4-additions';
import { real2029Q4Additions } from '../data/real-2029-q4-additions';
import { real2032ServiceAdditions } from '../data/real-2032-service-additions';
import { real2035Q2Additions } from '../data/real-2035-q2-additions';
import { realAugmentedServices2025Batch3 } from '../data/real-augmented-services-2025-batch3';
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025';
import { realMarketServicesExtended } from '../data/real-market-services-extended';
import { realServicesQ1_2025 } from '../data/real-services-q1-2025';
import { realServicesQ2_2025 } from '../data/real-services-q2-2025';
import { realServicesQ3_2025 } from '../data/real-services-q3-2025';
import { realVerifiedServiceAdditions2025 } from '../data/real-verified-service-additions-2025';
import { revolutionary2025AdvancedServices } from '../data/revolutionary-2025-advanced-services';
import { revolutionary2026AiServices } from '../data/revolutionary-2026-ai-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { revolutionary2026ItInfrastructure } from '../data/revolutionary-2026-it-infrastructure';
import { revolutionary2026MicroSaas } from '../data/revolutionary-2026-micro-saas';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045AiServices } from '../data/revolutionary-2045-ai-services';
import { revolutionary2045ItServices } from '../data/revolutionary-2045-it-services';
import { spaceInnovationServices } from '../data/space-innovation-services';
import { innovative2026MicroSaasV2 } from '../data/innovative-2026-micro-saas-v2';
import { innovative2026MicroSaasV4 } from '../data/innovative-2026-micro-saas-v4';
import { innovativeMicroSaasV2 } from '../data/innovative-micro-saas-v2';
import { iotEdgeServices } from '../data/iot-edge-services';
import { itInnovationServices } from '../data/it-innovation-services';
import { cybersecurityAiServices } from '../data/cybersecurity-ai-services';
import { emergingInnovationServices } from '../data/emerging-innovation-services';
import { emergingTech2025ServicesV2 } from '../data/emerging-tech-2025-services-v2';
import { emergingTech2025SpecializedServices } from '../data/emerging-tech-2025-specialized-services';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { quantumAiServices2025V2 } from '../data/quantum-ai-services-2025-v2';
import { quantumInnovationServices } from '../data/quantum-innovation-services';

interface Service {
  id?: string;
  name: string;
  description: string;
  tagline?: string;
  link?: string;
  features?: string[];
  useCases?: string[];
  integrations?: string[];
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

function getAllServices(): Service[] {
  return [
    ...enhancedRealMicroSaasServices,
    ...realMarketServices,
    ...innovativeAiServices,
    ...innovativeMicroSaasServices,
    ...innovativeItServices,
    ...nextGenAiServices,
    ...nextGenItServices,
    ...emergingTechServices,
    ...innovative2025NewServices,
    ...innovative2026AiServices,
    ...innovative2026MicroSaasServices,
    ...innovative2026ItInfrastructure,
    ...innovative2026EmergingTechServices,
    ...newRealServices2025Q4,
    ...newRealServices2027,
    ...newlyAddedServices,
    ...real2025Q4Additions,
    ...real2025Q5Additions,
    ...real2026Q1Additions,
    ...real2026Q2Services,
    ...real2026Q2VerifiedAdditions,
    ...real2027Q3Additions,
    ...real2027Q4Additions,
    ...real2029Q4Additions,
    ...real2032ServiceAdditions,
    ...real2035Q2Additions,
    ...realAugmentedServices2025Batch3,
    ...realMarketAugmentations2025,
    ...realMarketServicesExtended,
    ...realServicesQ1_2025,
    ...realServicesQ2_2025,
    ...realServicesQ3_2025,
    ...realVerifiedServiceAdditions2025,
    ...revolutionary2025AdvancedServices,
    ...revolutionary2026AiServices,
    ...revolutionary2026Innovations,
    ...revolutionary2026ItInfrastructure,
    ...revolutionary2026MicroSaas,
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045AiServices,
    ...revolutionary2045ItServices,
    ...spaceInnovationServices,
    ...innovative2026MicroSaasV2,
    ...innovative2026MicroSaasV4,
    ...innovativeMicroSaasV2,
    ...iotEdgeServices,
    ...itInnovationServices,
    ...cybersecurityAiServices,
    ...emergingInnovationServices,
    ...emergingTech2025ServicesV2,
    ...emergingTech2025SpecializedServices,
    ...emergingTech2026ServicesV2,
    ...emergingTech2026ServicesV4,
    ...quantumAiServices2025V2,
    ...quantumInnovationServices
  ];
}

function toSlug(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractSlugFromLink(link: string): string {
  try {
    const url = new URL(link);
    return url.pathname.replace(/^\/+|\/+$/g, '');
  } catch {
    return '';
  }
}

export async function getStaticPaths() {
  const services = getAllServices();
  const slugs = new Set<string>();

  services.forEach((s) => {
    if (s.id) slugs.add(toSlug(s.id));
    if (s.name) slugs.add(toSlug(s.name));
  });

  // Exclude any slugs that already have explicit pages under /pages
  const fs = require('fs');
  const path = require('path');
  const pagesDir = path.join(process.cwd(), 'pages');
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  const existing = new Set<string>();
  
  for (const entry of entries) {
    // skip internals and folders we don't want to shadow
    if (entry.name.startsWith('_')) continue;
    if (['api', 'reports', 'services'].includes(entry.name)) continue;
    if (entry.isDirectory()) {
      existing.add(entry.name);
      continue;
    }
    if (entry.isFile()) {
      const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
      if (m) {
        const base = m[1];
        if (!['index', '[slug]'].includes(base)) existing.add(base);
      }
    }
  }

  const filtered = Array.from(slugs).filter((slug) => !existing.has(slug));

  return {
    paths: filtered.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

  let service: Service | undefined = services.find((s) => {
    if (!s.link) return false;
    const fromLink = extractSlugFromLink(s.link);
    return fromLink === incomingSlug;
  });

  if (!service) {
    service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug);
  }

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service }
  };
}

export default function ServiceDetailTopLevelPage({ service }: { service: Service }) {
  const contactInfo = service.contactInfo || {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackgroundComponent variant="quantum" intensity="high">
      <NextHead>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        {service.link ? <link rel="canonical" href={service.link} /> : null}
      </NextHead>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {(service.features || []).slice(0, 12).map((f: string) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </UICard>

            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                  <ul className="list-disc list-inside space-y-1">
                    {(service.useCases || []).slice(0, 8).map((u: string) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Integrations</div>
                  <div className="flex flex-wrap gap-2">
                    {(service.integrations || []).slice(0, 10).map((i: string) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </UICard>
          </div>

          <div className="space-y-6">
            <UICard className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Visit Website
                  </a>
                </div>
              </div>
            </UICard>

            <UIButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Get Started
            </UIButton>
          </div>
        </div>
      </div>
    </UltraFuturisticBackgroundComponent>
  );
}
