import Head from 'next/head'
export default function Contact(){return (<main style={{padding:20,fontFamily:'sans-serif',lineHeight:1.6,maxWidth:800,margin:'0 auto'}}>
<Head><title>Contact | Zion Tech Group</title><meta name='description' content='Contact Zion Tech Group for Micro SaaS, AI, and IT solutions.'/></Head>
<h1>Contact</h1>
<p>We’d love to hear about your project. Reach us via any of the channels below.</p>

<ul style={{listStyle:'none',padding:0}}>
  <li style={{margin:'8px 0'}}><strong>Mobile:</strong> <a href="tel:+13024640950" style={{color:'#2563eb'}}>+1 302 464 0950</a></li>
  <li style={{margin:'8px 0'}}><strong>E‑mail:</strong> <a href="mailto:kleber@ziontechgroup.com" style={{color:'#2563eb'}}>kleber@ziontechgroup.com</a></li>
  <li style={{margin:'8px 0'}}><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</li>
  <li style={{margin:'8px 0'}}><strong>Website:</strong> <a href="https://ziontechgroup.com" target="_blank" rel="noopener" style={{color:'#2563eb'}}>ziontechgroup.com</a></li>
</ul>

<p>Prefer a quick start? Tell us about your goals and timeline, and we’ll propose a path forward within 1–2 business days.</p>
<p><a href="/services" style={{color:'#2563eb'}}>Explore our services</a></p>
</main>);}
