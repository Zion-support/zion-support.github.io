import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';
import type { ProductListing } from '@/types/listings';

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
