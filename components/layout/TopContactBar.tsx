import React from 'react'

export default function TopContactBar() {
	return (
		<div className="w-full bg-black/60 border-b border-white/10 text-xs text-white/80">
			<div className="container mx-auto px-6 py-2 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<a href="tel:+13024640950" className="hover:text-cyan-300">+1 302 464 0950</a>
					<a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300">kleber@ziontechgroup.com</a>
				</div>
				<a href="/contact" className="hover:text-cyan-300">Contact Us</a>
			</div>
		</div>
	)
}