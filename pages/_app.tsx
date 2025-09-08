import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import '../src/index.css'

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#0b1220', color: 'white',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <nav style={{
        maxWidth: 1400, margin: '0 auto', padding: '12px 20px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
        <Link href="/" style={{ 
          fontWeight: 800, letterSpacing: 0.3, fontSize: '1.25rem',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none'
        }}>Zion Tech Group</Link>
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center'
        }} className="hidden md:flex">
          <Link href="/" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Home</Link>
          
          {/* Services Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              style={{ 
                padding: '8px 12px', borderRadius: 6, opacity: 0.9,
                transition: 'all 0.2s ease', background: 'none', border: 'none',
                color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
              }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              Services ▼
            </button>
            <div 
              style={{
                position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: 8, minWidth: 200, zIndex: 1000, 
                display: servicesDropdownOpen ? 'block' : 'none'
              }} 
              className="services-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link href="/services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>All Services</Link>
              <Link href="/micro-saas" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>Micro SaaS (150+ Products)</Link>
              <Link href="/ai-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>AI Services (100+ Solutions)</Link>
              <Link href="/it-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>IT Services (100+ Solutions)</Link>
              <Link href="/services-catalog" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
              }}>Services Catalog</Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              style={{ 
                padding: '8px 12px', borderRadius: 6, opacity: 0.9,
                transition: 'all 0.2s ease', background: 'none', border: 'none',
                color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
              }}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              Solutions ▼
            </button>
            <div 
              style={{
                position: 'absolute', top: '100%', left: 0, background: 'rgba(11, 18, 32, 0.98)',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: 8, minWidth: 250, zIndex: 1000, 
                display: solutionsDropdownOpen ? 'block' : 'none'
              }} 
              className="solutions-dropdown"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <Link href="/micro-saas" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>Cloud Cost Optimization</Link>
              <Link href="/ai-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>AI Automation & ML</Link>
              <Link href="/it-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>Digital Transformation</Link>
              <Link href="/micro-saas" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>Process Automation</Link>
              <Link href="/ai-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white',
                marginBottom: 4
              }}>Predictive Analytics</Link>
              <Link href="/it-services" style={{ 
                display: 'block', padding: '8px 12px', borderRadius: 4, opacity: 0.9,
                transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
              }}>Cybersecurity & Compliance</Link>
            </div>
          </div>

          <Link href="/pricing" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>Pricing</Link>
          <Link href="/about" style={{ 
            padding: '8px 12px', borderRadius: 6, opacity: 0.9,
            transition: 'all 0.2s ease', textDecoration: 'none', color: 'white'
          }}>About</Link>
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '8px 16px', borderRadius: 8,
            transition: 'all 0.2s ease', textDecoration: 'none'
          }}>Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div style={{
          display: 'flex', gap: 4, alignItems: 'center'
        }} className="md:hidden">
          <Link href="/contact" style={{ 
            fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '6px 12px', borderRadius: 6,
            transition: 'all 0.2s ease', textDecoration: 'none', fontSize: '0.9rem'
          }}>Contact</Link>
          <button 
            style={{
              background: 'none', border: 'none', color: 'white', fontSize: '1.2rem',
              cursor: 'pointer', padding: '6px', borderRadius: 4
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0b1220', color: 'white', marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', display: 'grid', gap: 16 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <strong>Zion Tech Group</strong>
          <span>Mobile: +1 302 464 0950</span>
          <span>Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></span>
          <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" style={{ opacity: 0.9 }}>All Services</Link>
          <Link href="/services/micro-saas" style={{ opacity: 0.9 }}>Micro SaaS</Link>
          <Link href="/services/ai-services" style={{ opacity: 0.9 }}>AI Services</Link>
          <Link href="/services/it-services" style={{ opacity: 0.9 }}>IT Services</Link>
          <Link href="/about" style={{ opacity: 0.9 }}>About</Link>
          <Link href="/pricing" style={{ opacity: 0.9 }}>Pricing</Link>
          <Link href="/contact" style={{ opacity: 0.9 }}>Contact</Link>
        </div>

        {/* Solutions */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Popular Solutions</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cloud Cost Optimization</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>AI Automation & ML</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Digital Transformation</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Process Automation</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Predictive Analytics</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Cybersecurity & Compliance</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Content Creation Tools</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Customer Support AI</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>5G & Edge Computing</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Blockchain Solutions</Link>
          </div>
        </div>

        {/* Emerging Technologies */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Emerging Technologies</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/quantum-computing" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Quantum Computing</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>5G & Edge Computing</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Blockchain & Web3</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Machine Learning Ops</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>IoT & Smart Devices</Link>
            <Link href="/ai-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Computer Vision</Link>
            <Link href="/it-services" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Zero Trust Security</Link>
            <Link href="/micro-saas" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>API Management</Link>
          </div>
        </div>

        {/* Company */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Company</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Link href="/" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link href="/about" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>About Us</Link>
            <Link href="/contact" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Contact Us</Link>
            <Link href="/faq" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>FAQ</Link>
            <Link href="/docs" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Documentation</Link>
            <Link href="/privacy" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Terms of Service</Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, textDecoration: 'none', color: 'white' }}>Main Website</a>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Get Started</h3>
          <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
            Ready to transform your business with our innovative solutions?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/contact" style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white', padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Request Quote</Link>
            <a href="tel:+13024640950" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Call Now</a>
            <a href="mailto:kleber@ziontechgroup.com" style={{ 
              background: 'rgba(255,255,255,0.1)', color: 'white', 
              padding: '10px 16px', borderRadius: 8,
              textAlign: 'center', textDecoration: 'none', fontWeight: 600
            }}>Email Us</a>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        padding: '20px', textAlign: 'center' 
      }}>
        <small style={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
          <Link href="/privacy" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Privacy Policy</Link> | 
          <Link href="/terms" style={{ color: '#93c5fd', marginLeft: 8, textDecoration: 'none' }}>Terms of Service</Link>
        </small>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<link rel="canonical" href={canonicalUrl} />
				<meta name="robots" content="index,follow" />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
			</Head>
			<div className="min-h-screen flex flex-col bg-black text-white">
				<main className="flex-1">
					<Component {...pageProps} />
				</main>
			</div>
		</div>
	)
}
