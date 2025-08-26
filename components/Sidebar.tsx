import Link from 'next/link'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/partners', label: 'Partners' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Sidebar(){
  return (
    <div style={{padding:12,borderRight:'1px solid #eee'}}>
      <h3 style={{fontSize:14,margin:'4px 0 12px',color:'#374151'}}>Navigation</h3>
      <ul style={{display:'grid',gap:8,listStyle:'none',padding:0,margin:0}}>
        {nav.map(item => (
          <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
        ))}
      </ul>
    </div>
  )
}