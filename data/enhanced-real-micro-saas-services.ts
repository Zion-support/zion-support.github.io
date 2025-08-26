export type EnhancedRealMicroSaasService = {
	id: string;
	name: string;
	category: string;
	description: string;
};

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
	{ id: 'ai-sales-copilot', name: 'AI Sales Copilot', category: 'AI', description: 'AI assistant for sales teams.' },
];

export const injectedAdditionalServices: EnhancedRealMicroSaasService[] = [];

export const serviceCategories: string[] = ['All', 'AI'];
