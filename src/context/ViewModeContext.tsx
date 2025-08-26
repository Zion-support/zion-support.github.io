import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ViewMode = 'light' | 'dark' | 'system';

interface ViewModeContextValue {
	viewMode: ViewMode;
	setViewMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {
	const [viewMode, setViewMode] = useState<ViewMode>('system');

	return (
		<ViewModeContext.Provider value={{ viewMode, setViewMode }}>
			{children}
		</ViewModeContext.Provider>
	);
}

export function useViewMode(): ViewModeContextValue {
	const ctx = useContext(ViewModeContext);
	if (!ctx) {
		throw new Error('useViewMode must be used within a ViewModeProvider');
	}
	return ctx;
}