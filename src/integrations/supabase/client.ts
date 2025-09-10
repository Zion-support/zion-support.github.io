// Minimal safe Supabase client shim for build/type-check
export const isSupabaseConfigured = (): boolean => {
	return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
};

// Provide a tiny surface used by code that imports this module
export const supabase = {
	from: (_table: string) => ({
		select: async () => ({ data: null, error: null }),
		insert: async (_: unknown) => ({ data: null, error: null }),
		update: async (_: unknown) => ({ data: null, error: null }),
	}),
};

export async function checkOnline(): Promise<boolean> {
	try {
		return typeof navigator !== 'undefined' && (navigator as any).onLine;
	} catch {
		return false;
	}
}

export async function safeFetch(url: string, options: RequestInit = {}) {
	if (!(await checkOnline())) {
		throw new Error('Failed to connect to Supabase');
	}
	return fetch(url, options);
}