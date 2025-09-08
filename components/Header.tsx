import Link from 'next/link'

export default function Header(){
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderBottom:'1px solid #eee'}}>
      <Link href="/" style={{fontWeight:700,fontSize:18}}>Zion Tech Group</Link>
      <nav style={{display:'flex',gap:16,flexWrap:'wrap'}}>
        <Link href="/solutions">Solutions</Link>
        <Link href="/services">Services</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/request-quote">Request a Quote</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/news">News</Link>
        <Link href="/events">Events</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}