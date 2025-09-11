

<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextPage } from 'next',;
import Head from 'next/head',;
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground',;
import Card from '../../components/ui/Card',;
import Link from 'next/link',;
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services',;
import { additionalEnhancedServices } from '../../data/additional-real-services',;
import { extraServices } from '../../data/extra-services',;
import { newlyAddedServices } from '../../data/newly-added-services',;
import { curatedMarketServices } from '../../data/curated-market-services',;
import { realMarketServices } from '../../data/real-market-services',;
import { new2025Services } from '../../data/new-2025-services',;
import { marketValidatedServices } from '../../data/market-validated-services',;
import { moreRealServices2025 } from '../../data/more-real-services-2025',;
import { realOperationalServices } from '../../data/real-operational-services',;
import { verified2025Additions } from '../../data/verified-2025-additions',;
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025',;
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025',;
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2',;
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025',;
import { real2025Q2Additions } from '../../data/real-2025-q2-additions',;
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3',;
import { realServicesQ22025 } from '../../data/real-services-q2-2025',;
import { realServicesQ32025 } from '../../data/real-services-q3-2025',;
import { realServicesQ42025 } from '../../data/real-services-q4-2025',;
// Define a common service interface
interface Service {
  id?: string,
  name: string,
  description?: string,
  price?: string,
  category?: string,
  popular?: boolean,
  launchDate?: string,
  [key: string]: unknown, // Allow additional properties
}

// Define a unified service interface
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
  link?: string
}

// Sample services for now
const sampleServices: Service[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    tagline: 'Advanced AI solutions for enterprise',
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2,999/month',
    category: 'AI',
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support'],
    popular: true,
    link: '/ai-services'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    tagline: 'Next-generation quantum solutions',
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',
    price: '$9,999/month',
    category: 'Quantum',
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'],
    link: '/quantum-computing'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Enterprise security solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
    price: '$1,999/month',
    category: 'Security',
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'],
    link: '/cybersecurity'
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    tagline: 'Scalable cloud infrastructure',
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',
    price: '$1,499/month',
    category: 'Cloud',
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools'],
    link: '/cloud-platform'
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    tagline: 'Innovative space solutions',
    description: 'Cutting-edge space technology services for satellite operations and space missions.',
    price: '$24,999/month',
    category: 'Space',
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'],
    link: '/space-tech'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextPage } from 'next';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground';
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
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';

import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realServicesQ42025 } from '../../data/real-services-q4-2025';

<<<<<<< HEAD
// Define a common service interface;
interface Service {;
  id?: string,;
  name: string;
  description?: string,;
  price?: string,;
  category?: string,;
  popular?: boolean,;
  launchDate?: string,;
  [key: string]: unknown, // Allow additional properties;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
;
// Define a unified service interface;
interface Service {;
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean,;
  icon?: string,;
  link?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
// Sample services for now;
const sampleServices: Service[] = [;
  {;
    id: 'ai-services';
    name: 'AI & Machine Learning',;
    tagline: 'Advanced AI solutions for enterprise',;
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',;
    price: '$2,999/month',;
    category: 'AI',;
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support'],;
    popular: true,;
    link: '/ai-services';
  },;
  {;
    id: 'quantum-computing',;
    name: 'Quantum Computing',;
    tagline: 'Next-generation quantum solutions',;
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',;
    price: '$9,999/month',;
    category: 'Quantum',;
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'],;
    link: '/quantum-computing';
  },;
  {;
    id: 'cybersecurity',;
    name: 'Cybersecurity',;
    tagline: 'Enterprise security solutions',;
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',;
    price: '$1,999/month',;
    category: 'Security',;
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'],;
    link: '/cybersecurity';
  },;
  {;
    id: 'cloud-platform',;
    name: 'Cloud Platform',;
    tagline: 'Scalable cloud infrastructure',;
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',;
    price: '$1,499/month',;
    category: 'Cloud',;
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools'],;
    link: '/cloud-platform';
  },;
  {;
    id: 'space-technology',;
    name: 'Space Technology',;
    tagline: 'Innovative space solutions',;
    description: 'Cutting-edge space technology services for satellite operations and space missions.',;
    price: '$24,999/month',;
    category: 'Space',;
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'],;
    link: '/space-tech';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],

<<<<<<< HEAD
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realServicesQ42025 } from '../../data/real-services-q4-2025';
// Define a common service interface
interface Service {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id?: string
  name: string
  description?: string
  price?: string
  category?: string
  popular?: boolean
  launchDate?: string
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  [key: string]: unknown, // Allow additional properties
}
// Define a unified service interface
interface Service {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string
  name: string
  tagline: string
  description: string
  price: string
  category: string
  features: string[]
  popular?: boolean
  icon?: string
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  link?: string
}
// Sample services for now
const sampleServices: Service[] = [
  {
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'ai-services'
    name: 'AI & Machine Learning'
    tagline: 'Advanced AI solutions for enterprise'
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.'
    price: '$2,999/month'
    category: 'AI'
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support']
    popular: true
<<<<<<< HEAD
    link: '/ai-services'
  }
  {
=======

    link: '/ai-services'
  }
  {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'quantum-computing'
    name: 'Quantum Computing'
    tagline: 'Next-generation quantum solutions'
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.'
    price: '$9,999/month'
    category: 'Quantum'
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support']
<<<<<<< HEAD
    link: '/quantum-computing'
  }
  {
=======

    link: '/quantum-computing'
  }
  {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'cybersecurity'
    name: 'Cybersecurity'
    tagline: 'Enterprise security solutions'
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.'
    price: '$1,999/month'
    category: 'Security'
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits']
<<<<<<< HEAD
    link: '/cybersecurity'
  }
  {
=======

    link: '/cybersecurity'
  }
  {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'cloud-platform'
    name: 'Cloud Platform'
    tagline: 'Scalable cloud infrastructure'
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.'
    price: '$1,499/month'
    category: 'Cloud'
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools']
<<<<<<< HEAD
    link: '/cloud-platform'
  }
  {
=======

    link: '/cloud-platform'
  }
  {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'space-technology'
    name: 'Space Technology'
    tagline: 'Innovative space solutions'
    description: 'Cutting-edge space technology services for satellite operations and space missions.'
    price: '$24,999/month'
    category: 'Space'
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems']
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    link: '/space-tech'
  }
]
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realServicesQ42025 } from '../../data/real-services-q4-2025';
// Define a common service interface;
interface Service {;
  id?: string,;
  name: string;
  description?: string,;
  price?: string,;
  category?: string,;
  popular?: boolean,;
  launchDate?: string,;
  [key: string]: unknown, // Allow additional properties;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
;
// Define a unified service interface;
interface Service {;
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean,;
  icon?: string,;
  link?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
// Sample services for now;
const sampleServices: Service[] = [;
  {;
    id: 'ai-services';
    name: 'AI & Machine Learning',;
    tagline: 'Advanced AI solutions for enterprise',;
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',;
    price: '$2,999/month',;
    category: 'AI',;
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support'],;
    popular: true,;
    link: '/ai-services';
  },;
  {;
    id: 'quantum-computing',;
    name: 'Quantum Computing',;
    tagline: 'Next-generation quantum solutions',;
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',;
    price: '$9,999/month',;
    category: 'Quantum',;
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'],;
    link: '/quantum-computing';
  },;
  {;
    id: 'cybersecurity',;
    name: 'Cybersecurity',;
    tagline: 'Enterprise security solutions',;
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',;
    price: '$1,999/month',;
    category: 'Security',;
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'],;
    link: '/cybersecurity';
  },;
  {;
    id: 'cloud-platform',;
    name: 'Cloud Platform',;
    tagline: 'Scalable cloud infrastructure',;
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',;
    price: '$1,499/month',;
    category: 'Cloud',;
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools'],;
    link: '/cloud-platform';
  },;
  {;
    id: 'space-technology',;
    name: 'Space Technology',;
    tagline: 'Innovative space solutions',;
    description: 'Cutting-edge space technology services for satellite operations and space missions.',;
    price: '$24,999/month',;
    category: 'Space',;
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'],;
    link: '/space-tech';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ServicesIndexPage() {
=======
export default function ServicesIndexPage() {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[]
      additionalEnhancedServices as unknown[]
      newlyAddedServices as unknown[]
      curatedMarketServices as unknown[]
      realMarketServices as unknown[]
      new2025Services as unknown[]
      marketValidatedServices as unknown[]
      moreRealServices2025 as unknown[]
      realOperationalServices as unknown[]
      verified2025Additions as unknown[]
      realServicesQ12025 as unknown[]
      realEnterpriseServices2025 as unknown[]
      realMarketAugmentations2025 as unknown[]
      verifiedRealServices2025Batch2 as unknown[]
      additionalLiveServices2025 as unknown[]
      real2025Q2Additions as unknown[]
      augmentedServicesBatch3 as unknown[]
      realServicesQ22025 as unknown[]
      realServicesQ32025 as unknown[]
      realServicesQ42025 as unknown[]
    )
    return acc
<<<<<<< HEAD
<<<<<<< HEAD

  }, {} as Record<string Service[]>),

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }, {} as Record<string Service[]>),

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, {} as Record<string, Service[]>),

  }, {} as Record<string Service[]>),

<<<<<<< HEAD
<<<<<<< HEAD
  }, {} as Record<string, Service[]>)
  }, {} as Record<string Service[]>),
  }, {} as Record<string, Service[]>),

  }, {} as Record<string Service[]>),
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        <div className="flex flex-col sm:flex-row gap-6">
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (

<<<<<<< HEAD
<<<<<<< HEAD
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />


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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {featuredServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026
<<<<<<< HEAD
<<<<<<< HEAD

                      key={`${service.id || service.name}-${index}`}
                      key={`${service.id |service.name}-${index}`}
=======


                      key={`${service.id || service.name}-${index}`}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      service={service}

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
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
                </div>
              </section>
            )}
            {/* Latest Services */}
                      key={`${service.id || service.name}-${index}`}
                      service={service}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {/* Latest Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {latestServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Services (2026)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026

<<<<<<< HEAD
<<<<<<< HEAD
                      key={`${service.id || service.name}-${index}`}


                      key={`${service.id |service.name}-${index}`}
                      key={`${service.id || service.name}-${index}`}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      key={`${service.id || service.name}-${index}`}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      service={service}
                      variant="ai"
                    />
                  ))}
                </div>
              </section>
            )}
            {/* Services by Category */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-20">
              <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Services by Category
              </h2>
              <div className="space-y-12">
                {categories.map((category) => {
<<<<<<< HEAD

<<<<<<< HEAD
export default function ServicesIndexPage() {_const _all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],

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
      extra_services as unknown[],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
<<<<<<< HEAD
realServicesQ42025 as unknown[]),
=======
      realServicesQ42025 as unknown[]),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return acc;
  }, {} as Record < string, Service[]>),
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title > Zion AI Marketplace - Services</title>;
        <meta name="description" content="Discover curated IT services. Request quotes with AI - assisted summaries." />;
      </Head>;
      <div className="relative">;
        <div className="absolute -z - 10 -top - 40 -left - 40 w - 96 h - 96 rounded - full blur - 3xl opacity - 40 bg - gradient - to - tr from - cyan - 400 via - blue - 500 to - purple - 500" />;
        <div className="flex flex - col sm:flex - row gap - 6">;
          <MarketplaceFilters available_categories={available_categories} value={filters} on_change={set_filters} />;
          <div className="flex - 1">;
            <div className="mb - 4 flex items - center justify - between">;
              <h1 className="text - 2xl font - semibold text - white">Services</h1>;
              <div className="text - sm text - white / 70">{filtered.length} results</div>;
            </div>;
            <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
              {filtered.map ((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />))}
            </div>;
          </div>;
        </section>;
            {/* Featured Services */}
            {featured_services.length > 0 && (
              <section className="mb - 20">;
                <h2 className="text - 3xl md:text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                  Featured Services;
                </h2>;
                <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                  {featured_services.map ((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026;
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="quantum";
                    />))}
                </div>;
              </section>)}
            {/* Latest Services */}
            {latest_services.length > 0 && (
              <section className="mb - 20">;
                <h2 className="text - 3xl md:text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent">;
                  Latest Services (2026);
                </h2>;
                <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                  {latest_services.map ((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026;
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="ai";
                    />))}
                </div>;
              </section>)}
            {/* Services by Category */}
            <section className="mb - 20">;
              <h2 className="text - 3xl md: text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - green - 400 to - emerald - 500 bg - clip - text text - transparent">;
                Services by Category;
              </h2>;
              <div className="space - y-12">;
                {categories.map ((category) => {
                  const category_services = servicesByCategory[category],
                  // Check condition
if (return null, ) {
  $2
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  return (
                    <div key={category} className="border border - gray - 800 rounded - 2xl p - 8 bg - black / 50 backdrop - blur - sm">;
                      <h3 className="text - 2xl font - bold mb - 6 text - white flex items - center gap - 3">;
                        <span className="text - 3xl">;
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  const categoryServices = servicesByCategory[category]
                  if (!categoryServices |categoryServices.length === 0) return null
                  const categoryServices = servicesByCategory[category],
                  if (!categoryServices || categoryServices.length === 0) return null,
                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {category === 'AI & Data' && '🧠'}
                          {category === 'Developer Tools' && '⚙️'}
                          {category === 'Cloud & FinOps' && '☁️'}
                          {category === 'Observability' && '📊'}
                          {category === 'Quality & Monitoring' && '🔍'}
                          {category === 'Quantum Computing' && '⚛️'}
                          {category === 'Space Technology' && '🚀'}
                          {category === 'Metaverse' && '🌐'}
                          {category === 'Cybersecurity' && '🛡️'}
                          {category === 'Supply Chain' && '📦'}
                          {category === 'Financial Services' && '💰'}
                          {category === 'Healthcare' && '🏥'}
                          {category === 'Manufacturing' && '🏭'}
                          {category === 'Retail' && '🛍️'}
                          {category === 'Education' && '📚'}
                          {category === 'Government' && '🏛️'}
                          {category === 'Energy' && '⚡'}
                          {category === 'Transportation' && '🚗'}
<<<<<<< HEAD
</span>;
                        {category}
<<<<<<< HEAD
=======


                  const categoryServices = servicesByCategory[category],
                  if (!categoryServices || categoryServices.length === 0) return null,

                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        </span>;
                        {category}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="mb-20">;
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


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                          <UltraFuturisticServiceCard2026

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span className="px - 3 py - 1 bg - gradient - to - r from - gray - 700 to - gray - 800 rounded - full text - sm text - gray - 300">;
                          {category_services.length} services;
                        </span>;
                      </h3>;
                      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
                        {category_services.slice (0, 6).map ((service: Service, index: number) => (
                          <UltraFuturisticServiceCard2026;
                            key={`${service.id || service.name}-${index}`}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            service={service}
                            variant="default";
                          />))}
                      </div>;
                      {category_services.length > 6 && (
                        <div className="mt - 6 text - center">;
                          <Link;
                            href={`/services / category/${to_slug (category)}`}
                            className="inline - flex items - center px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700 text - white font - medium rounded - lg transition - all duration - 300 hover:scale - 105";
                          >;
                            View All {category} Services;
                            <svg className="ml - 2 w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">;
                              <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9 5l7 7 - 7 7" />;
                            </svg>;
                          </Link>;
                        </div>)}
                    </div>);
                })}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                            variant="default"
                          />
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                      {categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link
<<<<<<< HEAD

                            href={`/services/category/${toSlug(category)}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            View All {category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>

                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  );
                })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </section>;
            {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">




                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>
        {categories.map((cat) => (


          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>


            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string, name?: string, link?: string, category?: string, tagline?: string, description?: string, price?: string, period?: string }
                const slug = service.link ? (() => { try { const u = new URL(service.link), const p = u.pathname.replace(/^\/+|\/+$/g, ''), return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id |service.name |'') } catch { return toSlug(service.id |service.name |'') } })() : toSlug(service.id |service.name |'')
                return (


                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>


                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline |service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">


                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover: border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                )


          {featuredServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026


                    key={`${service.id || service.name}-${index}`}
                    service={service}

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
          {/* Latest Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026


                    key={`${service.id || service.name}-${index}`}


                    service={service}
                    variant="ai"
                  />
                ))}
              </div>
            </section>
          )}
          {/* Services by Category */}

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



          <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Services by Category
            </h2>
            <div className="space-y-12">
              {categories.map((category) => {

              </div>;
            </section>;
            {/* CTA Section */}
            <section className="text - center">;
              <div className="bg - gradient - to - r from - gray - 900 to - black border border - gray - 800 rounded - 2xl p - 12">;
                <h2 className="text - 3xl md:text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                  Need a Custom Solution?;
                </h2>;
                <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                  Our team of experts can help you build custom solutions tailored to your specific needs.;
                  Let's discuss how we can transform your business with cutting - edge technology.;
                </p>;
                <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                  <Link;
                    href="/contact";
                    className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 600 to - blue - 600 hover:from - cyan - 700 hover:to - blue - 700 text - white font - medium rounded - lg transition - all duration - 300 hover:scale - 105";
                  >;
                    Get Started;
                  </Link>;
                  <Link;
                    href="/contact";
                    className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - medium rounded - lg transition - all duration - 300 hover:scale - 105";
                  >;
                    Schedule Demo;
                  </Link>;
                </div>;
              </div>;
            </section>;
          </div>;
        </div>;
      </UltraFuturisticBackground>;
        {categories.map ((cat) => (
          <section key={cat} id={anchor_map[cat] || to_slug (cat)}>;
            <h2 className="text - 2xl md:text - 3xl font - semibold text - white mb - 4">{cat}</h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
              {by_category[cat].slice (0, (shown_counts[cat] ?? 12)).map ((s) => {
                const service = s as { id?: string, name?: string, link?: string, category?: string, tagline?: string, description?: string, price?: string, period?: string },
                const slug = service.link ? (() => { try { const u = new URL (service.link), const p = u.pathname.replace (/^\/+|\/+$/g, ''), return p.starts_with ('services/') ? p.substring ('services/'.length) : to_slug (service.id || service.name || '') } catch { return to_slug (service.id || service.name || '') } })() : to_slug (service.id || service.name || ''),
                return (
                  <Card key={service.id || service.name} className="p - 6 bg - black / 50 border border - gray - 700 / 60 hover:border - cyan - 500 / 50 transition - colors shadow - lg / 10">;
                    <div className="text - sm text - gray - 400 mb - 1">{service.category || 'Service'}</div>;
                    <h3 className="text - white text - xl font - semibold mb - 2">{service.name}</h3>;
                    <p className="text - gray - 300 / 90 line - clamp - 3 mb - 3">{service.tagline || service.description}</p>;
                    <div className="text - gray - 100 font - bold mb - 4">{service.price}<span className="text - sm text - gray - 400 font - medium">{service.period}</span></div>;
                    <div className="flex gap - 3">;
                      <Link href={service.link || `/${slug}`} className="px - 4 py - 2 rounded - lg bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium shadow - glow hover:shadow - glow - lg">View</Link>;
                      <Link href={service.link || `/${slug}`} className="px - 4 py - 2 rounded - lg border border - gray - 600 text - gray - 200 hover: border - cyan - 500 / 70">Learn</Link>;
                    </div>;
                  </Card>);
              })}
            </div>;
          </div>;
          {/* Featured Services */}
          {featured_services.length > 0 && (
            <section className="mb - 20">;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Featured Services;
              </h2>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                {featured_services.map ((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026;
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="quantum";
                  />))}
              </div>;
            </section>)}
          {/* Latest Services */}
          {latest_services.length > 0 && (
            <section className="mb - 20">;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent">;
                Latest Services (2026);
              </h2>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                {latest_services.map ((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026;
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="ai";
                  />))}
              </div>;
            </section>)}
          {/* Services by Category */}
          <section className="mb - 20">;
            <h2 className="text - 3xl md: text - 4xl font - bold mb - 12 text - center bg - gradient - to - r from - green - 400 to - emerald - 500 bg - clip - text text - transparent">;
              Services by Category;
            </h2>;
            <div className="space - y-12">;
              {categories.map ((category) => {
                const category_services = servicesByCategory[category],
                // Check condition
if (return null, ) {
  $2
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                return (
                  <div key={category} className="border border - gray - 800 rounded - 2xl p - 8 bg - black / 50 backdrop - blur - sm">;
                    <h3 className="text - 2xl font - bold mb - 6 text - white flex items - center gap - 3">;
                      <span className="text - 3xl">;
<<<<<<< HEAD
            <section className="mb-20">;
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
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id |service.name}-${index}`}
                            key={`${service.id || service.name}-${index}`}
                            service={service}
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
                            variant="default"
                          />
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                      {categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            href={`/services/category/${toSlug(category)}`}
                            href={`/services/category/${toSlug(category)}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            View All {category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
            {/* CTA Section */}
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  );
                })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </section>;
            {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                  Our team of experts can help you build custom solutions tailored to your specific needs.
                  Our team of experts can help you build custom solutions tailored to your specific needs. 
                  Our team of experts can help you build custom solutions tailored to your specific needs.
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>
        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] |toSlug(cat)}>
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string, name?: string, link?: string, category?: string, tagline?: string, description?: string, price?: string, period?: string }
                const slug = service.link ? (() => { try { const u = new URL(service.link), const p = u.pathname.replace(/^\/+|\/+$/g, ''), return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id |service.name |'') } catch { return toSlug(service.id |service.name |'') } })() : toSlug(service.id |service.name |'')
                return (
                  <Card key={service.id |service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category |'Service'}</div>
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline |service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link |`/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link |`/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover: border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
          {/* Featured Services */}
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover: border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                )
<<<<<<< HEAD
              })}
            </div>
          </div>
          {/* Featured Services */}
            <section className="text-center">;
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">;
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Need a Custom Solution?;
                </h2>;
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                  Our team of experts can help you build custom solutions tailored to your specific needs.;
                  Let's discuss how we can transform your business with cutting-edge technology.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <Link;
                    href="/contact";
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105";
                  >;
                    Get Started;
                  </Link>;
                  <Link;
                    href="/contact";
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105";
                  >;
                    Schedule Demo;
                  </Link>;
                </div>;
              </div>;
            </section>;
          </div>;
        </div>;
      </UltraFuturisticBackground>;
        {categories.map((cat) => (;
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>;
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {;
                const service = s as { id?: string, name?: string, link?: string, category?: string, tagline?: string, description?: string, price?: string, period?: string },;
                const slug = service.link ? (() => { try { const u = new URL(service.link), const p = u.pathname.replace(/^\/+|\/+$/g, ''), return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || '') } catch { return toSlug(service.id || service.name || '') } })() : toSlug(service.id || service.name || '');
                return (;
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">;
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>;
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>;
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>;
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>;
                    <div className="flex gap-3">;
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>;
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover: border-cyan-500/70">Learn</Link>;
                    </div>;
                  </Card>;
                );
              })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
          {/* Featured Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {featuredServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
<<<<<<< HEAD
                    key={`${service.id |service.name}-${index}`}
                    service={service}
                    variant="quantum"
                  />
                ))}
              </div>
            </section>
          )}
          {/* Latest Services */}
                    key={`${service.id || service.name}-${index}`}
                    service={service}
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
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    variant="quantum"
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
          {/* Latest Services */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
<<<<<<< HEAD
                    key={`${service.id |service.name}-${index}`}
                    key={`${service.id || service.name}-${index}`}
=======


                    key={`${service.id || service.name}-${index}`}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    service={service}
                    variant="ai"
                  />
                ))}
              </div>
            </section>
          )}
          {/* Services by Category */}
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {category === 'AI & Data' && '🧠'}
                        {category === 'Developer Tools' && '⚙️'}
                        {category === 'Cloud & FinOps' && '☁️'}
                        {category === 'Observability' && '📊'}
                        {category === 'Quality & Monitoring' && '🔍'}
                        {category === 'Quantum Computing' && '⚛️'}
                        {category === 'Space Technology' && '🚀'}
                        {category === 'Metaverse' && '🌐'}
                        {category === 'Cybersecurity' && '🛡️'}
                        {category === 'Supply Chain' && '📦'}
                        {category === 'Financial Services' && '💰'}
                        {category === 'Healthcare' && '🏥'}
                        {category === 'Manufacturing' && '🏭'}
                        {category === 'Retail' && '🛍️'}
                        {category === 'Education' && '🎓'}
                        {category === 'Government' && '🏛️'}
                        {category === 'Energy' && '⚡'}
                        {category === 'Transportation' && '🚗'}
<<<<<<< HEAD
</span>;
                      {category}
<<<<<<< HEAD
=======


                const categoryServices = servicesByCategory[category],
                if (!categoryServices || categoryServices.length === 0) return null,

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      </span>;
                      {category}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <section className="mb-20">;
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


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026


                          key={`${service.id || service.name}-${index}`}

                          service={service}
<<<<<<< HEAD

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



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          variant="default"
                        />
                      ))}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
<<<<<<< HEAD


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

<<<<<<< HEAD
=======
                      <span className="text - sm text - gray - 400 bg - gray - 800 px - 3 py - 1 rounded - full">;
                        {category_services.length} services;
                      </span>;
                    </h3>;
                    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
                      {category_services.slice (0, 6).map ((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026;
                          key={`${service.id || service.name}-${index}`}
                          service={service}
                          variant="default";
                        />))}
                    </div>;
                    {category_services.length > 6 && (
                      <div className="text - center mt - 6">;
                        <Link;
                          href={`/services / category/${to_slug (category)}`}
                          className="inline - flex items - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 border border - cyan - 500 / 30 rounded - lg text - cyan - 300 hover:from - cyan - 500 / 30 hover:to - blue - 500 / 30 transition - all";
                        >;
                          View All {category} Services ({category_services.length});
                        </Link>;
                      </div>)}
                    <div className="flex items - center justify - between mb - 6">;
                      <div className="text - cyan - 400 group - hover:text - blue - 400 transition - colors duration - 300">;
                        <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center">;
                          <span className="text - 2xl font - bold">{service.name.char_at (0)}</span>;
                        </div>;
                      </div>;
                      <ArrowRight className="w - 5 h - 5 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 300" />;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                      {service.name}
                    </h3>;
                    <p className="text - cyan - 400 text - sm mb - 4">;
                      {service.tagline}
                    </p>;
                    <p className="text - gray - 300 mb - 6 leading - relaxed">;
                      {service.description}
                    </p>;
                    <div className="space - y-2 mb - 6">;
                      {service.features.slice (0, 3).map ((feature, feature_index) => (
                        <div key={feature_index} className="flex items - center text - sm text - gray - 400">;
                          <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                          {feature}
                        </div>))}
                    </div>;
                    <div className="flex items - center justify - between">;
                      <div className="text - 2xl font - bold text - white">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {service.price}
                      </div>;
          <section className="mb-20">;
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
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id |service.name}-${index}`}
                          key={`${service.id || service.name}-${index}`}
                          service={service}
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
                          variant="default"
                        />
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          href={`/services/category/${toSlug(category)}`}
                          href={`/services/category/${toSlug(category)}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {category} Services ({categoryServices.length})
                        </Link>
                      </div>
<<<<<<< HEAD
                    )}

=======




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
<<<<<<< HEAD
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                      </div>
                      {service.link && (
                        <a;
                          href={service.link}
<<<<<<< HEAD
=======


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </div>
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>

                          className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300";
                        >;
                          Learn More;
                        </a>)}
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
            {filtered_services.length === 0 && (
              <div className="text - center py - 12">;
                <p className="text - gray - 400 text - lg">No services found matching your criteria.</p>;
              </div>)}
          </div>;
        </section>;

        {/* Call to Action */}
        <section className="py - 20 px - 4">;
          <div className="container mx - auto max - w-4xl text - center">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
}

        <section className="py-20 px-4">
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
<<<<<<< HEAD
        {/* Call to Action */}
        <section className="py - 20 px - 4">;
          <div className="container mx - auto max - w-4xl text - center">;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <motion.div;
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )

}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);
}
<<<<<<< HEAD

};

                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Sales
                </Link>
                <a
                  href=&quot;/get-started&quot;
                  className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300&quot;
                >
                  Get Started
                </Link>
=======
                        </div>))}
                    </div>;
                    <div className="flex items - center justify - between">;
                      <div className="text - 2xl font - bold text - white">;

                        {service.price}
                      </div>;
                      {service.link && (
                        <a;
                          href={service.link}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
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
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
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
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 px-4">
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
<<<<<<< HEAD
            <motion.div;
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <motion.div;
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





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )
<<<<<<< HEAD
}
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

};

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            >;
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Contact us today to discuss how our services can transform your business.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105";
                >;
                  Contact Sales;
                </a>;
                <a;
                  href="/get-started";
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300";
                >;
                  Get Started;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
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
<<<<<<< HEAD
<<<<<<< HEAD

;
;
;
=======


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
