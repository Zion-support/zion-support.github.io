import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { realMarketServices } from '../../data/real-market-services';
import { real2026Additions } from '../../data/real-2026-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';

import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { realMarketServices } from '../../data/real-market-services';

  // Moved useMemo call before any early returns
  const service = React.useMemo(() => {
    if (!slug) return null; // Handle undefined slug inside useMemo
    return SERVICES.find((s) => slugify(s.title) === slug) || null;
  }, [slug]);

  if (!slug || !service) { // Combined checks
    return <Custom404 />;
  }

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: service.currency,
    },
  };
  return (
    <>
      <NextSeo
        title={service.title}
        description={service.description}
        openGraph={{ title: service.title, description: service.description }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
      </Helmet>
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </main>
    </>
  );
};

function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(curatedMarketServices as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realMarketAugmentations2025 as unknown as Service[])
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(real2025Q4AugmentedBatch as unknown as Service[])
		.concat(realMarketServicesExtended as unknown as Service[])
		.concat(realMarketServices as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		.concat(real2026Additions as unknown as Service[])
		.concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2028ServiceExpansions as unknown as Service[])
		.concat(real2029Q1Additions as unknown as Service[])
		.concat(realMarketServices as unknown as Service[]);
}

export default ServicePage;
