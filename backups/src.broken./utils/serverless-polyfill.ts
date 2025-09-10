// Minimal serverless runtime polyfills for client bundles
// Intentionally lightweight and safe no-ops

export function initializeServerlessPolyfills(): void {
	// No-op: Add guarded shims only if missing
	try {
		if (typeof (globalThis as any).process === 'undefined') {
			(Object.assign(globalThis as any, { process: { env: {} } }));
		}
	} catch {
		// ignore
	}
}

// Auto-init at import time (client-only)
try {
	if (typeof window !== 'undefined') {
		initializeServerlessPolyfills();
	}
} catch {
	// ignore
}