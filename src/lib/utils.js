<<<<<<< HEAD
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function cn(...inputs) { return twMerge(clsx(inputs)); };
=======
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
>>>>>>> eb36f7602c9 (SEO + perf: add OG/Twitter/JSON-LD, resource hints; fix next.config eslint duplication; repair homepage build; fix utils cn imports; resolve duplicate services route; add missing deps)
