export type Innovative2026MicroSaas = {
	id: string;
	name: string;
	description: string;
	category: string;
};

export const innovative2026MicroSaasV2Services: Innovative2026MicroSaas[] = [
	{ id: 'sample-2026-ai', name: '2026 AI Sample', description: 'Sample 2026 AI service.', category: 'AI' },
];

export const getPopularServices = () => {
	return innovative2026MicroSaasV2Services;
};
