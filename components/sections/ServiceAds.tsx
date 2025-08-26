import React from 'react';

interface AdItem {
	title: string;
	description: string;
	price?: string;
	features?: string[];
	link?: string;
	contactInfo?: any;
}

interface ServiceAdsProps {
	heading: string;
	subheading?: string;
	items: AdItem[];
}

export default function ServiceAds({ heading, subheading, items }: ServiceAdsProps) {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-white">{heading}</h2>
				{subheading ? <p className="text-gray-300 mt-1">{subheading}</p> : null}
			</div>
			<div className="space-y-6">
				{items.map((it) => (
					<div key={it.title} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
						<h3 className="text-2xl font-bold text-white mb-2">{it.title}</h3>
						<p className="text-gray-300 mb-3">{it.description}</p>
						{it.price ? <div className="text-cyan-400 font-semibold mb-3">{it.price}</div> : null}
						{it.features?.length ? (
							<ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
								{it.features.map((f) => (<li key={f}>{f}</li>))}
							</ul>
						) : null}
						{it.link ? <a href={it.link} className="inline-block mt-4 text-cyan-300 hover:text-cyan-200">Learn more →</a> : null}
					</div>
				))}
			</div>
		</div>
	);
}