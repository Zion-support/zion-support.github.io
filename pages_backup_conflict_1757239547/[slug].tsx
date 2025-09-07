import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Button from '../components/ui/Button',
import Card from '../components/ui/Card';

import {Check, Mail, MapPin, Phone, ExternalLink} from 'lucide-react';
import {enhancedRealMicroSaasServices} from '../data/enhanced-real-micro-saas-services';
type Service = typeof enhancedRealMicroSaasServices[number];
const service = useMemo(() => {
  if (!slug) return undefined;
  const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any
        extraServices as any
        additionalEnhancedServices as any
        innovativeAIServices as any
        quantumSpaceServices as any
        enterpriseITServices as any
        newRealServices as any
        marketReadyServices as any
        realMarketServices as any
        new2025Services as any
        newRealInnovations as any
        emergingTechnologyServices as any
        comprehensiveITSolutions as any
        marketValidatedServices as any
        curatedMarketServices as any
        cuttingEdgeITServices as any
        nextGenerationAIServices as any
        nextGenAIServices as any
        industryRealServices as any
        professionalServices as any
        realEnterpriseServices2025 as any
        augmentedServicesBatch3 as any
        real2025Q3Additions as any
        realQ4Services2025 as any,        require('../data/real-2025-q4-additions-batch2').real2025Q4AdditionsBatch2 as any
      );
    const byLink = all.find(s => {
      try {
        const url = new URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '');
      } catch {
        return false;
      }
    });
    if (byLink) return byLink;
  }, [slug]);
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { new2025Services } from '../data/new-2025-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realServicesQ32025 } from '../data/real-services-q3-2025';
import { realQ4Services2025, real2025Q4Additions } from '../data/real-2025-q4-additions';
import { real2026Q1Additions } from '../data/real-2026-q1-additions';
import fs from 'fs';
import path from 'path';
type Service = typeof enhancedRealMicroSaasServices[number];
function getAllServices(): Service[] {
  return enhancedRealMicroSaasServices
    .concat(extraServices as Service[], additionalEnhancedServices as Service[])
    .concat(newlyAddedServices as unknown as Service[])
    .concat(curatedMarketServices as Service[])
    .concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[]);
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[]);
		.concat(realMarketAugmentations2025 as unknown as Service[]);
		.concat(additionalLiveServices2025 as unknown as Service[]);
		.concat(real2025Q2Additions as unknown as Service[]);
		.concat(augmentedServicesBatch3 as unknown as Service[]);
		.concat(realServicesQ22025 as unknown as Service[]);
		.concat(realServicesQ32025 as unknown as Service[]);
		.concat(realQ4Services2025 as unknown as Service[]);
		.concat(real2025Q4Additions as unknown as Service[]);
		.concat(realMarketServicesExtended as unknown as Service[]);
	return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[]);
		.concat(real2026Additions as unknown as Service[]);
		.concat(added2026Q2Services as unknown as Service[]);
		.concat(real2026Q3Additions as unknown as Service[]);
		.concat(real2026Q4Additions as unknown as Service[]);
		.concat(real2026Q4NewServices as unknown as Service[]);
		.concat(real2027Q1Additions as unknown as Service[]);
		.concat(newSaasItAiServices2025 as unknown as Service[]);
function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
function getExistingRootPageSlugs(): Set<string> {
	const pagesDir = path.join(process.cwd(), 'pages')
	const entries = fs.readdirSync(pagesDir, { withFileTypes: true })
	const reserved = new Set<string>(['apireportsservices'])
	const slugs = new Set<string>()
		}
		// Directories at root (folder routes);
		if (entry.isDirectory()) {slugs.add(entry.name);
	}
	return slugs;
export async function getStaticPaths() {
	const services = getAllServices()
	 }))
		fallback: false;
	}
export async function getStaticProps() {
	const incomingSlug = (params?.slug |'').replace(/^\/+|\/+$/g, '')
	let service: Service | undefined = services.find((s) => toSlug(s.id |'') === incomingSlug |toSlug(s.name |'') === incomingSlug)
	if (!service) {return { notFound: true }
	}
	return {props: { service }
	}
export default function RootServiceDetailPage({ service }: { service: Service }) {const canonical = `https://ziontechgroup.com/${toSlug(service.id |service.name |'')}`,	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline |service.description} />
				<link rel="canonical" href={canonical} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org"
								"@type": "Service",								name: service.name
								description: service.tagline |service.description
								url: canonical
								provider: {
									"@type": "Organization"
									name: "Zion Tech Group"
									url: "https://ziontechgroup.com"
								}
								offers: {
									"@type": "Offer"
									price: (service.price |'').replace(/[^0-9.]/g, ''),									priceCurrency: "USD"
									availability: "https://schema.org/InStock"
								}
							}
							null;
							2;
							);}
				/>;			</Head>
          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Category</h3>
                  <p className="text-slate-300">{service.category}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Price</h3>
                  <p className="text-slate-300">{service.price} {service.period}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Trial Period</h3>
                  <p className="text-slate-300">{service.trialDays} days free trial</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Setup Time</h3>
                  <p className="text-slate-300">{service.setupTime}</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{(service.features |[]).slice(0, 12).map((f: string) => (
								  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
							},
							null,
							2
							)
						}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				/>
			</Head>
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{f}</span>
									</li>
								))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
							</ul>
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
							<div className="flex flex-wrap gap-2">
								{(service.integrations |[]).slice(0, 12).map((i: string) => (
									<span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{i}</span>
								))}
								))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
							</div>
						</Card>
					</div>
					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-3xl font-bold text-white">{service.price} <span className="text-base text-gray-400">{service.period}</span></div>
							<p className="text-gray-400 text-sm mt-1">Transparent pricing with market references</p>
							<div className="mt-4 space-y-3">
								<a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
									<Phone className="w-4 h-4" /> +1 302 464 0950
								</Link>
								<a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
									<Mail className="w-4 h-4" /> kleber@ziontechgroup.com
								</Link>								<div className="flex items-start gap-2 text-gray-300">
									<MapPin className="w-4 h-4 mt-1" /> 364 E Main St STE 1008 Middletown DE 19709
								</div>
							</div>
							<div className="mt-6">
								<Button href="/contact" className="w-full">Talk to Sales</Button>
							</div>
						</Card>
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
							<a href={service.link |canonical} className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200">
								Open canonical page <ExternalLink className="w-4 h-4" />
							</a>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
);