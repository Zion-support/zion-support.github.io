export type EnhancedRealMicroSaasService = {
	id: string;
	name: string;
	category?: string;
	description?: string;
};

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [];
export const serviceCategories: string[] = [];
export const getServicesByCategory = (_cat: string) => [] as EnhancedRealMicroSaasService[];
export const getPopularServices = () => [] as EnhancedRealMicroSaasService[];
