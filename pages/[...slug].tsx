import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GenericPage() {
	const params = useParams();
	const slugParts = params['*'] ? params['*'].split('/') : [];
	const path = '/' + slugParts.join('/');
	const title = slugParts.length === 0 ? 'Page' : slugParts.map(s => s.replace(/-/g, ' ')).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' / ');
	const canonical = `https://ziontechgroup.com${path.endsWith('/') ? path : path + '/'}`;

	return (
		<main style={{padding:20,fontFamily:'sans-serif',lineHeight:1.6,maxWidth:900,margin:'0 auto'}}>
			<title>{title} | Zion Tech Group</title>
			<meta name="description" content={`Information about ${title} at Zion Tech Group.`} />
			<link rel="canonical" href={canonical} />
			
			<nav style={{marginBottom:16}} aria-label="Breadcrumbs">
				<Link to="/" style={{color:'#2563eb'}}>Home</Link>
				<span style={{margin:'0 8px', color:'#9ca3af'}}>/</span>
				<span>{title}</span>
			</nav>
			<h1 style={{marginBottom:8}}>{title}</h1>
			<p style={{color:'#374151'}}>This page is under active development. If you were expecting specific information, please contact us and we will prioritize it.</p>
			<section style={{marginTop:16, padding:'12px 16px', background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:8}}>
				<h2 style={{marginBottom:8}}>How we can help</h2>
				<ul style={{paddingLeft:18}}>
					<li>Micro SaaS solutions tailored to your workflow</li>
					<li>Applied AI: assistants, RAG, and automation</li>
					<li>Cloud, DevOps, data, and cybersecurity services</li>
				</ul>
				<p style={{marginTop:8}}>Have questions about {title.toLowerCase()}? <Link to="/contact" style={{color:'#2563eb'}}>Contact us</Link>.</p>
			</section>
		</main>
	);
}