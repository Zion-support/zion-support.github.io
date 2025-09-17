import React, { useEffect } from 'react';

export default function ModernPerformanceMonitor(): JSX.Element | null {
	useEffect(() => {
		if (typeof window === 'undefined') return;
		try {
			const mark = 'modern-perf-monitor-init';
			performance.mark?.(mark);
		} catch {}
	}, []);
	return null;
}

