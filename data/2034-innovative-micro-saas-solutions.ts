export type InnovativeMicroSaas ={
	id: string;
	name: string;
	description: string;
	tagline?: string;
	category:
		| 'Content Marketing'
		| 'Business Operations'
		| 'Marketing Automation'
		| 'Customer Success'
		| 'Sales Automation'
		| 'Financial Technology'
		| 'Human Resources'
		| 'Supply Chain Management'
		| 'Customer Support';
	pricing: { starter: string; professional?: string; enterprise?: string };
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	realService?: boolean;
	rating?: number;
	launchDate?: string;
};
