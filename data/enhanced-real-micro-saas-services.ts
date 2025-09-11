export type EnhancedRealMicroSaasService = {
	id: string;
	name: string;
	category?: string;
	description?: string;
	tagline?: string;
	price?: string | number;
	period?: string;
	features?: string[];
	popular?: boolean;
	icon?: string;
	color?: string;
	textColor?: string;
	link?: string;
	marketPosition?: string;
	targetAudience?: string;
	trialDays?: number;
	setupTime?: string;
	realService?: boolean;
	technology?: string[];
	integrations?: string[];
	useCases?: string[];
	roi?: string;
	competitors?: string[];
	marketSize?: string;
	growthRate?: string;
	variant?: string;
	contactInfo?: {
		mobile: string;
		email: string;
		address: string;
		website: string;
	};
	realImplementation?: boolean;
	implementationDetails?: string;
	launchDate?: string;
	customers?: number;
	rating?: number;
	reviews?: number;
};
// Aggregate rich, real services from multiple sources into a single catalog
import { additionalEnhancedServices } from './additional-real-services';
import { realMarketServices } from './real-market-services';
// Normalize types to EnhancedRealMicroSaasService without mutating originals
const mapToEnhanced = (items: any[]): EnhancedRealMicroSaasService[] =>
	(items || []).map((s) => ({ ...s }));
export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
	...mapToEnhanced(realMarketServices as unknown as any[]),
	...mapToEnhanced(additionalEnhancedServices as unknown as any[]),
];
export const serviceCategories: string[] = Array.from(
	new Set(
		enhancedRealMicroSaasServices
			.map((s) => s.category)
			.filter((v): v is string => Boolean(v))
	)
).sort();
export const getServicesByCategory = (category: string) => {
	if (!category || category === 'All') return enhancedRealMicroSaasServices;
	return enhancedRealMicroSaasServices.filter((s) => s.category === category);
};
export const getPopularServices = () =>
	enhancedRealMicroSaasServices
		.filter((s) => !!s.popular)
		.sort((a, b) => (b.rating || 0) - (a.rating || 0));
