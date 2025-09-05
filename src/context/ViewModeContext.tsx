import React, { createContext, useContext, useMemo, useState } from 'react'

export type ViewMode = 'grid' | 'list' | 'cards'

interface ViewModeContextValue {
	viewMode: ViewMode
	setViewMode: (mode: ViewMode) => void
	toggle: () => void
}

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined)

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [viewMode, setViewMode] = useState<ViewMode>('grid')

	const value = useMemo<ViewModeContextValue>(() => ({
		viewMode,
		setViewMode,
		toggle: () => setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid')),
	}), [viewMode])

	return (
		<ViewModeContext.Provider value={value}>
			{children}
		</ViewModeContext.Provider>
	)
}

export function useViewMode(): ViewModeContextValue {
	const ctx = useContext(ViewModeContext)
	if (!ctx) {
		throw new Error('useViewMode must be used within a ViewModeProvider')
	}
	return ctx
}