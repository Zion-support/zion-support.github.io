import { ServiceVariant  } from "../types/service-variants";
export interface MarketValidatedService {
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string,
  description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;
	setupTime?: string;
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
const contactInfo = {
  mobile: "+1 302 464 0950",;
	email: "kleber@ziontechgroup.com",;
	address: "364 E Main St STE 1008 Middletown DE 19709";




  website: "https://ziontechgroup.com"}
