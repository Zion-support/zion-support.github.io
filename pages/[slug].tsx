import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Button from '../components/ui/Button',
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink  } from 'lucide-react';
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { extraServices  } from '../data/extra-services';
import { additionalEnhancedServices  } from '../data/additional-real-services';
import { newlyAddedServices  } from '../data/newly-added-services';
import { curatedMarketServices  } from '../data/curated-market-services';
import { new2025Services  } from '../data/new-2025-services';
import { marketValidatedServices  } from '../data/market-validated-services';
import { moreRealServices2025  } from '../data/more-real-services-2025';
import { verified2025Additions  } from '../data/verified-2025-additions';
import { realServicesQ12025  } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025  } from '../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2  } from '../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025  } from '../data/real-market-augmentations-2025';
import { additionalLiveServices2025  } from '../data/additional-live-services-2025';
import { real2025Q2Additions  } from '../data/real-2025-q2-additions';
import { augmentedServicesBatch3  } from '../data/real-augmented-services-2025-batch3';
import { realServicesQ22025  } from '../data/real-services-q2-2025';
import { realServicesQ32025  } from '../data/real-services-q3-2025';
import { realQ4Services2025, real2025Q4Additions  } from '../data/real-2025-q4-additions';
import { realMarketServicesExtended  } from '../data/real-market-services-extended';
import { real2026Additions  } from '../data/real-2026-additions';
import { real2026Q1Additions  } from '../data/real-2026-q1-additions';
import { added2026Q2Services  } from '../data/added-2026-q2-services';
import { real2026Q3Additions  } from '../data/real-2026-q3-additions';
import { real2026Q4Additions  } from '../data/real-2026-q4-additions';
import { real2026Q4NewServices  } from '../data/real-2026-q4-new-services';
import { real2027Q1Additions  } from '../data/real-2027-q1-additions';
import { newSaasItAiServices2025  } from '../data/new-saas-it-ai-services-2025';
import fs from 'fs';
import path from 'path';
type Service = any;
							2
							)
						}}
				/>
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name}
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
								))}
							</ul>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
							<div className="flex flex-wrap gap-2">
								{(service.integrations || []).slice(0, 12).map((i: string) => (
									<span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{i}</span>
								))}
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
								</a>
								<a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
									<Mail className="w-4 h-4" /> kleber@ziontechgroup.com
								</a>
								<div className="flex items-start gap-2 text-gray-300">
									<MapPin className="w-4 h-4 mt-1" /> 364 E Main St STE 1008 Middletown DE 19709
								</div>
							</div>
							<div className="mt-6">
								<Button href="/contact" className="w-full">Talk to Sales</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
							<a href={service.link || canonical} className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200">
								Open canonical page <ExternalLink className="w-4 h-4" />
							</a>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
}
