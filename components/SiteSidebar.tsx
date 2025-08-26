import Link from 'next/link';

export default function SiteSidebar(){
  return (
    <aside style={{minWidth:240,borderRight:'1px solid #e5e7eb',padding:'16px 12px'}}>
      <nav>
        <div style={{fontSize:12,textTransform:'uppercase',color:'#6b7280',margin:'8px 0'}}>Explore</div>
        <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:8}}>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/help">Help</Link></li>
        </ul>
        <div style={{fontSize:12,textTransform:'uppercase',color:'#6b7280',margin:'16px 0 8px'}}>Company</div>
        <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:8}}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
}