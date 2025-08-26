import Link from 'next/link';

export default function SiteFooter(){
  return (
    <footer style={{borderTop:'1px solid #e5e7eb',background:'#0b1220',color:'#cbd5e1',marginTop:32}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'24px 20px',display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:20}}>
        <div>
          <h4 style={{margin:'0 0 8px 0',color:'#7dd3fc'}}>Company</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:6}}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{margin:'0 0 8px 0',color:'#7dd3fc'}}>Resources</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:6}}>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/help">Help</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{margin:'0 0 8px 0',color:'#7dd3fc'}}>Services</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:6}}>
            <li><Link href="/services">All Services</Link></li>
            <li><Link href="/services/ai-autonomous-systems">AI & Autonomous</Link></li>
            <li><Link href="/services/cybersecurity">Cybersecurity</Link></li>
            <li><Link href="/services/cloud-devops">Cloud & DevOps</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{margin:'0 0 8px 0',color:'#7dd3fc'}}>Legal</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:6}}>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/sitemap.xml">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div style={{borderTop:'1px solid #1f2937'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'12px 20px',display:'flex',justifyContent:'space-between',color:'#94a3b8'}}>
          <span>© {new Date().getFullYear()} Zion Tech Group</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}