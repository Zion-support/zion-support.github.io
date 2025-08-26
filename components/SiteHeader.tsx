import Link from 'next/link';

export default function SiteHeader(){
  return (
    <header style={{borderBottom:'1px solid #e5e7eb',background:'#0b1220',color:'#e5e7eb'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" style={{fontWeight:700,fontSize:18,color:'#7dd3fc'}}>Zion Tech Group</Link>
        <nav style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/news">News</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}