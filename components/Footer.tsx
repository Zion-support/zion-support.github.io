import Link from 'next/link'

export default function Footer(){
  return (
    <footer style={{padding:'16px 20px',borderTop:'1px solid #eee',marginTop:24}}>
      <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <div>
          <strong>Zion Tech Group</strong>
          <div style={{color:'#6b7280',fontSize:13}}>© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <nav style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/solutions">Solutions</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/request-quote">Request a Quote</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}