// import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
// import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
// import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
// import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
// import { realServicesQ22025 } from '../../data/real-services-q2-2025';
// import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
// import { realMarketServicesExtended } from '../../data/real-market-services-extended';
// import { real2026Additions } from '../../data/real-2026-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
// import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { real2027Q4Additions } from '../../data/real-2027-q4-additions';

export default function ServiceSlugPage() {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Head>
				<title>{slug ? `${slug} | Zion Tech Group` : 'Service | Zion Tech Group'}</title>
				<meta name="description" content="Service details and information." />
			</Head>
			<main className="mx-auto max-w-4xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">
					{slug ? slug.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service'}
				</h1>
				<p className="text-gray-700">This page is under construction.</p>
			</main>
		</>
	);
}
