import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type ViewMode = 'light' | 'dark' | 'system';

interface ViewModeContextValue {
	viewMode: ViewMode;
	setViewMode: (mode: ViewMode) => void;
	isDark: boolean;
}

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined);

function detectInitialMode(): ViewMode {
	if (typeof window === 'undefined') return 'system';
	const saved = window.localStorage.getItem('zion:viewMode') as ViewMode | null;
	if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
	return 'system';
}

function computeIsDark(mode: ViewMode): boolean {
	if (typeof window === 'undefined') return false;
	if (mode === 'dark') return true;
	if (mode === 'light') return false;
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [viewMode, setViewModeState] = useState<ViewMode>(detectInitialMode);
	const [isDark, setIsDark] = useState<boolean>(computeIsDark(viewMode));

	useEffect(() => {
		window.localStorage.setItem('zion:viewMode', viewMode);
		setIsDark(computeIsDark(viewMode));
	}, [viewMode]);

	useEffect(() => {
		const listener = (e: MediaQueryListEvent) => {
			if (viewMode === 'system') setIsDark(e.matches);
		};
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		mq.addEventListener?.('change', listener);
		return () => mq.removeEventListener?.('change', listener);
	}, [viewMode]);

	const setViewMode = (mode: ViewMode) => setViewModeState(mode);

	const value = useMemo<ViewModeContextValue>(() => ({ viewMode, setViewMode, isDark }), [viewMode, isDark]);

	return <ViewModeContext.Provider value={value}>{children}</ViewModeContext.Provider>;
};

export function useViewMode(): ViewModeContextValue {
	const ctx = useContext(ViewModeContext);
	if (!ctx) throw new Error('useViewMode must be used within a ViewModeProvider');
	return ctx;
}