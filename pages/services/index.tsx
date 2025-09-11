
                <EnhancedMarketplaceCard key={service.slug |service.id} service={service} onRequestQuote={handleRequestQuote} />
              ))}
            </div>
          </div>
        </section>
            {/* Featured Services */}
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />
              ))}
            </div>
          </div>
        </section>
            {/* Featured Services */}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
            {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />

                      key={`${service.id || service.name}-${index}`}
                      key={`${service.id |service.name}-${index}`}
=======


                      key={`${service.id || service.name}-${index}`}                      service={service}

=======


                      key={`${service.id || service.name}-${index}`}
                      service={service}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={`${service.id || service.name}-${index}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      service={service  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



                      variant="quantum"
                    />

                      key={`${service.id |service.name}-${index}`}
                      key={`${service.id || service.name}-${index}`}
=======
=======
                      key={`${service.id || service.name}-${index}`}


==============                      key={`${service.id || service.name}-${index}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      service={service  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      variant="ai"
                    />
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </section>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
            {/* Services by Category */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-20">
              <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Services by Category
              </h2>
              <div className="space-y-12">
                {categories.map((category) => {
=======
import type { NextPage } from 'next',
import Head from 'next / head',
import UltraAdvancedFuturisticBackground from '../../components / ui / UltraAdvancedFuturisticBackground',
import Card from '../../components / ui / Card',
import Link from 'next / link',
import { enhancedRealMicroSaasServices } from '../../data / enhanced - real - micro - saas - services',
import { additionalEnhancedServices } from '../../data / additional - real - services',
import { extra_services } from '../../data / extra - services',
import { newlyAddedServices } from '../../data / newly - added - services',
import { curatedMarketServices } from '../../data / curated - market - services',
import { realMarketServices } from '../../data / real - market - services',
import { new2025Services } from '../../data / new - 2025 - services',
import { marketValidatedServices } from '../../data / market - validated - services',
import { moreRealServices2025 } from '../../data / more - real - services - 2025',
import { realOperationalServices } from '../../data / real - operational - services',
import { verified2025Additions } from '../../data / verified - 2025 - additions',
import { realServicesQ12025 } from '../../data / real - services - q1 - 2025';
import { realEnterpriseServices2025 } from '../../data / real - enterprise - services - 2025',
import { realMarketAugmentations2025 } from '../../data / real - market - augmentations - 2025',
import { verifiedRealServices2025Batch2 } from '../../data / verified - real - services - 2025 - batch2',
import { additionalLiveServices2025 } from '../../data / additional - live - services - 2025',
import { real2025Q2Additions } from '../../data / real - 2025 - q2 - additions',
import { augmentedServicesBatch3 } from '../../data / real - augmented - services - 2025 - batch3',
import { realServicesQ22025 } from '../../data / real - services - q2 - 2025',
import { realServicesQ32025 } from '../../data / real - services - q3 - 2025',
import { realServicesQ42025 } from '../../data / real - services - q4 - 2025',
// Define a common service interface;
interface Service {
  id?: string,
  name: string,
  description?: string,
  price?: string,
  category?: string,
  popular?: boolean,
launch_date?: string,
  [key: string]: unknown, // Allow additional properties;
}
// Define a unified service interface;
interface Service {
  id: string,
  name: string,
  tagline: string,
  description: string,
  price: string,
  category: string,
  features: string[],
  popular?: boolean,
  icon?: string,
link?: string;
}
// Sample services for now;
const sample_services: Service[] = [;
  {
    id: 'ai - services',
    name: 'AI & Machine Learning',
    tagline: 'Advanced AI solutions for enterprise',
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2, 999 / month',
    category: 'AI',
    features: ['Custom AI ModelsMLOps PipelineReal - time Analytics24 / 7 Support'],
    popular: true,
    link: '/ai - services';
  },
  {
    id: 'quantum - computing',
    name: 'Quantum Computing',
    tagline: 'Next - generation quantum solutions',
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',
    price: '$9, 999 / month',
    category: 'Quantum',
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'],
    link: '/quantum - computing';
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Enterprise security solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
price: '$1, 999 / month',
    category: 'Security',
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'],
    link: '/cybersecurity';
  },
  {
    id: 'cloud - platform',
    name: 'Cloud Platform',
    tagline: 'Scalable cloud infrastructure',
    description: 'Multi - cloud platform services with automated scaling and global deployment capabilities.',
    price: '$1, 499 / month',
    category: 'Cloud',
    features: ['Multi - CloudAuto - scaling_global CDNDevOps Tools'],
    link: '/cloud - platform';
  },
  {
    id: 'space - technology',
    name: 'Space Technology',
    tagline: 'Innovative space solutions',
    description: 'Cutting - edge space technology services for satellite operations and space missions.',
    price: '$24, 999 / month',
    category: 'Space',
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'],
    link: '/space - tech';
  }
],
export default /**
 * ServicesIndexPage - Function description
 */
function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[]);
    .concat (
      extra_services as unknown[],      additionalEnhancedServices as unknown[],
=======
import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
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
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025 } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { real2030Q1Additions } from '../../data/real-2030-q1-additions';
import { real2031MicroSaasAdditions } from '../../data/real-2031-micro-saas-additions';
import { real2031ITServicesAdditions } from '../../data/real-2031-it-services-additions';
import { real2031AIServicesAdditions } from '../../data/real-2031-ai-services-additions';
import { real2030Q2Additions } from '../../data/real-2030-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { real2025Q4AugmentedBatch, real2025Q4AugmentedServices } from '../../data/real-2025-q4-augmented-batch';

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
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      realMarketServicesExtended as unknown[],
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
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
=======
                        </span>;
                        {category}            <section className="mb-20">;
              <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">;
                Services by Category;
              </h2>;
              <div className="space-y-12">;
                {categories.map((category) => {;
                  const categoryServices = servicesByCategory[category];
                  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
                        {category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                            key={`${service.id || service.name}-${index}`}

                            service={service}
=======
                            key={`${service.id || service.name}-${index}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            service={service  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Services by Category
            </h2>
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryServices = servicesByCategory[category]
                if (!categoryServices |categoryServices.length === 0) return null

                const categoryServices = servicesByCategory[category],
                if (!categoryServices || categoryServices.length === 0) return null,
                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">

                const categoryServices = servicesByCategory[category],
                if (!categoryServices || categoryServices.length === 0) return null,

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
=======
                      </span>;
                      {category}          <section className="mb-20">;
            <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">;
              Services by Category;
            </h2>;
            <div className="space-y-12">;
              {categories.map((category) => {;
                const categoryServices = servicesByCategory[category];
                if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
                      {category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



                          key={`${service.id || service.name}-${index}`}

                          service={service}



                          href={`/services/category/${toSlug(category)}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {category} Services ({categoryServices.length})
                        </Link>
                      </div>




                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">


                      {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                      {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}

                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                      {service.link && (;
                        <a;
                          href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  </div>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
      realQ4Services2025 as unknown[],
      real2025Q4Additions as unknown[],
      real2026Q1Additions as unknown[],
      added2026Q2Services as unknown[],
      real2026Q3Additions as unknown[],
      real2026Q4Additions as unknown[],
      real2026Q4NewServices as unknown[],
      real2027Q1Additions as unknown[],
      real2027Q2Additions as unknown[],
      real2027Q3Additions as unknown[],
      real2028ServiceExpansions as unknown[],
      real2029Q1Additions as unknown[],
      real2029Q2Additions as unknown[],
      real2029Q3Additions as unknown[],
      real2030Q1Additions as unknown[],
      real2030Q2Additions as unknown[],
      real2031MicroSaasAdditions as unknown[],
      real2031ITServicesAdditions as unknown[],
      real2031AIServicesAdditions as unknown[],
      real2027Q3Additions as unknown[],
      real2025Q4AugmentedBatch as unknown[],
      real2025Q4AugmentedServices as unknown[]
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

  const [shownCounts, setShownCounts] = React.useState<Record<string, number>>(() => Object.fromEntries(categories.map(c => [c, 12])));

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <SEO title="Services | Zion Tech Group" description="Browse 350+ real micro SaaS, IT, and AI services with transparent pricing and fast onboarding." canonical="https://ziontechgroup.com/services/" />

      <div className="container mx-auto px-4 py-16 space-y-12 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">All Services</h1>
          <p className="text-gray-300 text-lg">Productized solutions across AI, cloud, DevOps, observability, and more. Average market prices linked in <a href="/market-pricing" className="text-cyan-400 underline">Market Pricing</a>. Contact: +1 302 464 0950 • kleber@ziontechgroup.com.</p>
          <p className="mt-3 text-gray-400 text-sm">Prefer a tailored bundle? See <a href="/pricing" className="text-cyan-400 underline">Pricing</a> or <a href="/contact" className="text-cyan-400 underline">Contact Sales</a> for custom quotes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a href="#ai" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">AI & Data</a>
            <a href="#developer-tools" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Developer Tools</a>
            <a href="#cloud" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Cloud & FinOps</a>
            <a href="#observability" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Observability</a>
            <a href="#quality" className="px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50">Quality & Monitoring</a>
          </div>
        </div>

        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string };
                const slug = service.link ? (() => { try { const u = new URL(service.link); const p = u.pathname.replace(/^\/+|\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || ''); } catch { return toSlug(service.id || service.name || ''); } })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/services/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                );
              })}
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
            </div>
            {byCategory[cat].length > (shownCounts[cat] ?? 12) && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShownCounts(prev => ({ ...prev, [cat]: (prev[cat] ?? 12) + 12 }))}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/70 hover:border-cyan-500/50"
                >



      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )

}

                        {service.price}
                      </div>;
                      {service.link && (
                        <a;
                          href={service.link}                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                      {service.link && (;
                        <a;
                          href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  </div>;
                </motion.div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
        {/* Call to Action */}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-4xl text-center">;
=======            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >;
              <h2 className="text - 4xl font - bold text - white mb - 6">Ready to Get Started?</h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Contact us today to discuss how our services can transform your business.;
              </p>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Contact Sales;
                </a>;
                <a;
                  href="/get - started";
                  className="px - 8 py - 4 border - 2 border - cyan - 500 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 hover:text - black transition - all duration - 300";
                >;
                  Get Started;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}




      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )
=======
}

=======
      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

};

=======
export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Services — Autonomous Solutions</title>
        <meta name="description" content="Explore autonomous services and accelerators powered by Zion." />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
      </div>
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide"><span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span></div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/site-health"><a>Site Health</a></Link>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">Services — Autonomous Solutions</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">Explore autonomous services and accelerators powered by Zion.</p>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Popular Services</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
      { href: '/services/ai-seo-auditor', title: 'AI SEO Auditor' },
      { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot' },
      { href: '/services/landing-page-generator', title: 'Landing Page Generator' },
      { href: '/services/price-intelligence-service', title: 'Price Intelligence' },
    ].map((s) => (
      <Link key={s.href} href={s.href}><a className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30"><div className="text-lg font-semibold">{s.title}</div><div className="mt-1 text-sm text-white/70">Open →</div></a></Link>
    ))}
  </div>
</section>
      </main>
    </div>
  );
}=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      <QuoteRequestModal;
        open={modalOpen  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        onClose={() => setModalOpen(false)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        service={selected  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        onSubmit={handleSubmit  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
;
;
=======


;>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
=======
                  Show more
                </button>
              </div>
            )}
          </section>
        ))}
      </div>
    </UltraFuturisticBackground>
  );
}
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
