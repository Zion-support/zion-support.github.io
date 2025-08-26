import React from 'react'

interface AdItem {
	title: string
	description: string
	price?: string
	features?: string[]
	link?: string
	contactInfo?: Record<string, any>
}

export default function ServiceAds({ heading, subheading, items = [] as AdItem[] }: { heading: string; subheading?: string; items?: AdItem[] }) {
	return (
		<section className="max-w-5xl mx-auto">
			<div className="text-center mb-6">
				<h2 className="text-3xl font-bold text-white">{heading}</h2>
				{subheading ? <p className="text-white/70 mt-2">{subheading}</p> : null}
			</div>
			<div className="grid grid-cols-1 gap-6">
				{items.map((it) => (
					<div key={it.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-2xl font-semibold text-white mb-2">{it.title}</div>
						<p className="text-gray-300 text-sm mb-3">{it.description}</p>
						{it.features?.length ? (
							<ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
								{it.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
						) : null}
						<div className="mt-3 flex items-center justify-between text-sm">
							{it.price ? <span className="text-cyan-300 font-medium">{it.price}</span> : <span />}
							{it.link ? (
								<a href={it.link} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md">Learn more</a>
							) : null}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}