
export function EnhancedFuturisticFooter() {
	const year = new Date().getFullYear();
	return (
		<footer style={{borderTop: '1px solid #e5e7eb', background: '#fafafa', marginTop: 48}}>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, padding: '24px 16px', maxWidth: 1100, margin: '0 auto'}}>
				<section>
					<h2 style={{fontSize: 14, color: '#6b7280', margin: '0 0 8px'}}>Company</h2>
					<nav aria-label="Company">
						<Link to="/about" style={{display: 'block', color: '#374151'}}>About</Link>
						<Link to="/careers" style={{display: 'block', color: '#374151'}}>Careers</Link>
						<Link to="/contact" style={{display: 'block', color: '#374151'}}>Contact</Link>
					</nav>
				</section>
				<section>
					<h2 style={{fontSize: 14, color: '#6b7280', margin: '0 0 8px'}}>Services</h2>
					<nav aria-label="Services">
						<Link to="/services" style={{display: 'block', color: '#374151'}}>All Services</Link>
						<Link to="/services/ai-services" style={{display: 'block', color: '#374151'}}>AI Services</Link>
						<Link to="/services/it-services" style={{display: 'block', color: '#374151'}}>IT Services</Link>
						<Link to="/services/micro-saas" style={{display: 'block', color: '#374151'}}>Micro SaaS</Link>
					</nav>
				</section>
				<section>
					<h2 style={{fontSize: 14, color: '#6b7280', margin: '0 0 8px'}}>Solutions</h2>
					<nav aria-label="Solutions">
						<Link to="/solutions" style={{display: 'block', color: '#374151'}}>Overview</Link>
						<Link to="/solutions/enterprise" style={{display: 'block', color: '#374151'}}>Enterprise</Link>
					</nav>
				</section>
			</div>
			<div style={{padding: '12px 16px', borderTop: '1px solid #e5e7eb', color: '#6b7280', textAlign: 'center'}}>© {year} Zion Tech Group</div>
		</footer>
	);
}

export default EnhancedFuturisticFooter;
