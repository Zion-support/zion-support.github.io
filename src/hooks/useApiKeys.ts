import { useMemo } from 'react';

interface ApiKeyInfo {
	id: string;
	name: string;
	createdAt: string;
	redactedKey: string;
}

interface UseApiKeysResult {
	apiKeys: ApiKeyInfo[];
	isLoading: boolean;
	error: null | Error;
	createKey: (name: string) => Promise<ApiKeyInfo>;
	revokeKey: (id: string) => Promise<void>;
}

export default function useApiKeys(): UseApiKeysResult {
	const apiKeys: ApiKeyInfo[] = [];
	return useMemo(
		() => ({
			apiKeys,
			isLoading: false,
			error: null,
			async createKey(name: string) {
				return {
					id: Math.random().toString(36).slice(2),
					name,
					createdAt: new Date().toISOString(),
					redactedKey: 'sk-****-stub',
				};
			},
			async revokeKey(_id: string) {
				return;
			},
		}),
		[]
	);
}