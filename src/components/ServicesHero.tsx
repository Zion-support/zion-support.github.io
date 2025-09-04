import React from 'react';

const ServicesHero: React.FC = () => {
	return (
		<section style={{
			padding: '2.5rem 1.25rem',
			background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
			borderRadius: 16,
			color: 'white',
			marginBottom: '1.5rem'
		}}>
			<h1 style={{ margin: 0 }}>Services that ship outcomes</h1>
			<p style={{ marginTop: 8, opacity: 0.9 }}>
				From micro SaaS to enterprise AI and robust IT platforms, we deliver measurable ROI.
			</p>
		</section>
	);
};

export default ServicesHero;

