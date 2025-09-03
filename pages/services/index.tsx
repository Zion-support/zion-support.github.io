import NextLink from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function Services() {
  const items = [
    {
      title: 'Micro SaaS',
      href: '/services/micro-saas',
      desc: 'Small, focused products with immediate ROI and clear pricing.'
    },
    { title: 'IT Services', href: '/services/it-services', desc: 'Cloud, security, DevOps, and managed support.' },
    { title: 'AI Services', href: '/services/ai-services', desc: 'Applied AI/ML, data platforms, and automations.' }
  ]
  return (
    <div className="ztg-page">
      <div className="ztg-container">
        <div className="ztg-grid">
          <Sidebar />
          <div>
            <div className="ztg-card">
              <h1>Services</h1>
              <p>Tailored to accelerate delivery and lower TCO.</p>
            </div>
            <div className="ztg-section">
              <div className="ztg-grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
                {items.map((s) => (
                  <div key={s.href} className="ztg-card">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <NextLink className="ztg-btn" href={s.href}>Learn more</NextLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

