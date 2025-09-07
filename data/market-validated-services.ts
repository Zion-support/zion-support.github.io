

origin/cursor/expand-services-advertise-and-build-project-c28b
import { ServiceVariant } from '../types/service-variants';

	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;

	contactInfo: {
		mobile: string;
		email: string;
		address: string;

