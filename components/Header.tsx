import Link from 'next/link'

export default function Header(){
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px',borderBottom:'1px solid #eee'}}>
      <Link href="/" style={{fontWeight:700,fontSize:18}}>Zion Tech Group</Link>
      <nav style={{display:'flex',gap:16}}>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  )
}