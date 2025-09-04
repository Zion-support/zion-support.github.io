import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationItems = {
    'Main': [
      { href: '/', label: 'Home', icon: '🏠' },
      { href: '/about', label: 'About Us', icon: '👥' },
      { href: '/contact', label: 'Contact', icon: '📞' },
    ],
    'Services': [
      { href: '/services', label: 'All Services', icon: '🔧' },
      { href: '/services-catalog', label: 'Services Catalog', icon: '📋' },
      { href: '/micro-saas', label: 'Micro SaaS', icon: '💻' },
      { href: '/ai-services', label: 'AI Services', icon: '🤖' },
      { href: '/it-services', label: 'IT Services', icon: '⚙️' },
    ],
    'Specialized': [
      { href: '/cloud-devops', label: 'Cloud DevOps', icon: '☁️' },
      { href: '/cybersecurity', label: 'Cybersecurity', icon: '🔒' },
      { href: '/quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
    ],
    'Resources': [
      { href: '/docs', label: 'Documentation', icon: '📚' },
      { href: '/docs/getting-started', label: 'Getting Started', icon: '🚀' },
      { href: '/docs/api-quick-start', label: 'API Quick Start', icon: '⚡' },
      { href: '/docs/integration-examples', label: 'Integration Examples', icon: '💡' },
      { href: '/pricing', label: 'Pricing', icon: '💰' },
      { href: '/faq', label: 'FAQ', icon: '❓' },
    ],
    'Legal': [
      { href: '/privacy', label: 'Privacy Policy', icon: '🔐' },
      { href: '/terms', label: 'Terms of Service', icon: '📄' },
    ]
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 40,
        }}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '320px',
        background: 'linear-gradient(135deg, #0b1220 0%, #1a1a2e 50%, #16213e 100%)',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        zIndex: 50,
        overflowY: 'auto',
        padding: '20px 0',
      }}>
        {/* Header */}
        <div style={{ padding: '0 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Zion Tech Group
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '4px',
              }}
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '20px 0' }}>
          {Object.entries(navigationItems).map(([section, items]) => (
            <div key={section} style={{ marginBottom: '24px' }}>
              <button
                onClick={() => toggleSection(section)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  padding: '12px 20px',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span>{section}</span>
                <span style={{ fontSize: '0.8rem' }}>
                  {expandedSections[section] ? '▼' : '▶'}
                </span>
              </button>
              
              {expandedSections[section] && (
                <div style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 20px 10px 40px',
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        <div style={{ 
          padding: '20px', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: 'auto'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px', color: 'white' }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link
              href="/contact"
              onClick={onClose}
              style={{
                display: 'block',
                padding: '10px 16px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              Get Quote
            </Link>
            <a
              href="tel:+13024640950"
              style={{
                display: 'block',
                padding: '10px 16px',
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#22c55e',
                textDecoration: 'none',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1px solid rgba(34, 197, 94, 0.2)',
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}