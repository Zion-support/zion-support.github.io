import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services'
import { advancedITServices } from '../data/advanced-it-services'
import { innovativeAIServices } from '../data/innovative-ai-services'

export default function Services(){
	const microSaaS = innovativeRealMicroSaasServices2025.slice(0, 12)
	const itServices = advancedITServices.slice(0, 12)
	const aiServices = innovativeAIServices.slice(0, 12)

	return (
		<main style={{padding:20,fontFamily:'sans-serif', lineHeight:1.6}}>
			<Head>
				<title>Services | Zion Tech Group</title>
				<meta name='description' content='Micro SaaS, IT, and AI services by Zion Tech Group. Real, production-ready solutions with transparent pricing.' />
			</Head>
			<h1 style={{marginBottom:8}}>Services</h1>
			<p style={{marginTop:0, color:'#374151'}}>We deliver real, production-ready Micro SaaS, IT, and AI solutions. Explore highlights below or <Link href="/contact" style={{color:'#2563eb', textDecoration:'underline'}}>contact us</Link> for a tailored plan.</p>

			<section style={{marginTop:24}}>
				<h2 style={{marginBottom:8}}>Featured Micro SaaS</h2>
				<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16}}>
					{microSaaS.map(item => (
						<article key={item.id} style={{border:'1px solid #e5e7eb', borderRadius:8, padding:16}}>
							<div style={{fontSize:20, fontWeight:600}}>{item.icon} {item.name}</div>
							<div style={{color:'#6b7280', marginTop:4}}>{item.tagline}</div>
							<div style={{marginTop:8}}>
								<span style={{fontWeight:700}}>{item.price}</span>
								<span style={{color:'#6b7280'}}> {item.period}</span>
							</div>
							<ul style={{marginTop:8, paddingLeft:18}}>
								{item.features.slice(0,3).map((f, idx) => (<li key={idx} style={{color:'#374151'}}>{f}</li>))}
							</ul>
							<a href={item.link} style={{display:'inline-block', marginTop:10, color:'#2563eb', textDecoration:'underline'}}>Learn more</a>
						</article>
					))}
				</div>
			</section>

			<section style={{marginTop:32}}>
				<h2 style={{marginBottom:8}}>Advanced IT Services</h2>
				<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16}}>
					{itServices.map(item => (
						<article key={item.id} style={{border:'1px solid #e5e7eb', borderRadius:8, padding:16}}>
							<div style={{fontSize:20, fontWeight:600}}>{item.icon} {item.name}</div>
							<div style={{color:'#6b7280', marginTop:4}}>{item.tagline}</div>
							<div style={{marginTop:8}}>
								<span style={{fontWeight:700}}>{item.price}</span>
								<span style={{color:'#6b7280'}}> {item.period}</span>
							</div>
							<ul style={{marginTop:8, paddingLeft:18}}>
								{item.features.slice(0,3).map((f, idx) => (<li key={idx} style={{color:'#374151'}}>{f}</li>))}
							</ul>
							<a href={item.link} style={{display:'inline-block', marginTop:10, color:'#2563eb', textDecoration:'underline'}}>Learn more</a>
						</article>
					))}
				</div>
			</section>

			<section style={{marginTop:32}}>
				<h2 style={{marginBottom:8}}>Innovative AI Services</h2>
				<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16}}>
					{aiServices.map(item => (
						<article key={item.id} style={{border:'1px solid #e5e7eb', borderRadius:8, padding:16}}>
							<div style={{fontSize:20, fontWeight:600}}>{item.icon} {item.name}</div>
							<div style={{color:'#6b7280', marginTop:4}}>{item.tagline}</div>
							<div style={{marginTop:8}}>
								<span style={{fontWeight:700}}>{item.price}</span>
								<span style={{color:'#6b7280'}}> {item.period}</span>
							</div>
							<ul style={{marginTop:8, paddingLeft:18}}>
								{item.features.slice(0,3).map((f, idx) => (<li key={idx} style={{color:'#374151'}}>{f}</li>))}
							</ul>
							<a href={item.link} style={{display:'inline-block', marginTop:10, color:'#2563eb', textDecoration:'underline'}}>Learn more</a>
						</article>
					))}
				</div>
			</section>

			<section style={{marginTop:40, background:'#f9fafb', padding:16, borderRadius:8}}>
				<h2 style={{marginBottom:6}}>Why Zion Tech Group</h2>
				<ul style={{paddingLeft:18, color:'#374151'}}>
					<li>Real, battle-tested implementations (no mockups)</li>
					<li>Transparent pricing and fast onboarding</li>
					<li>Enterprise-grade security and compliance</li>
					<li>ROI-focused delivery and measurable outcomes</li>
				</ul>
				<p style={{marginTop:10}}>Average market prices (monthly): Micro SaaS $99–$999, AI Services $499–$4,999, Enterprise IT $2,000–$15,000. We price competitively based on scope.</p>
				<p>Call <a href="tel:+13024640950" style={{color:'#2563eb', textDecoration:'underline'}}>+1 302 464 0950</a>, email <a href="mailto:kleber@ziontechgroup.com" style={{color:'#2563eb', textDecoration:'underline'}}>kleber@ziontechgroup.com</a>, or visit <a href="https://ziontechgroup.com" style={{color:'#2563eb', textDecoration:'underline'}}>ziontechgroup.com</a>.</p>
			</section>
		</main>
	)
}
