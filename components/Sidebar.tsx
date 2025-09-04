import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const router = useRouter();

  const navigationItems = [
    {
      title: 'Main Navigation',
      items: [
        { href: '/', label: 'Home', icon: '🏠' },
        { href: '/about', label: 'About Us', icon: 'ℹ️' },
        { href: '/contact', label: 'Contact', icon: '📞' },
        { href: '/pricing', label: 'Pricing', icon: '💰' },
        { href: '/faq', label: 'FAQ', icon: '❓' }
      ]
    },
    {
      title: 'Services',
      items: [
        { href: '/services', label: 'All Services', icon: '🔧' },
        { href: '/micro-saas', label: 'Micro SaaS', icon: '📱' },
        { href: '/ai-services', label: 'AI Services', icon: '🤖' },
        { href: '/it-services', label: 'IT Services', icon: '💻' },
        { href: '/services-catalog', label: 'Services Catalog', icon: '📋' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { href: '/privacy', label: 'Privacy Policy', icon: '🔒' },
        { href: '/terms', label: 'Terms of Service', icon: '📄' }
      ]
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
            display: 'block',
            '@media (min-width: 1024px)': { display: 'none' }
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-300px',
          width: '300px',
          height: '100vh',
          background: 'linear-gradient(135deg, #0b1220, #1e293b)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
          zIndex: 50,
          transition: 'left 0.3s ease',
          overflowY: 'auto',
          '@media (min-width: 1024px)': {
            position: 'static',
            left: 'auto',
            width: '280px',
            height: 'auto',
            background: 'rgba(11, 18, 32, 0.8)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            margin: '20px',
            padding: '20px'
          }
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '20px'
        }}>
          <Link href="/" style={{
            fontWeight: 800,
            fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none'
          }}>
            Zion Tech Group
          </Link>
          <p style={{
            fontSize: '0.9rem',
            opacity: 0.7,
            marginTop: '8px',
            lineHeight: 1.4
          }}>
            Innovative Technology Solutions
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '0 20px' }}>
          {navigationItems.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#93c5fd',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {section.title}
              </h3>
              <div style={{ display: 'grid', gap: '4px' }}>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: isActive(item.href) ? '#3b82f6' : 'rgba(255,255,255,0.8)',
                      background: isActive(item.href) ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                      border: isActive(item.href) ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                      fontSize: '0.95rem'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '20px'
        }}>
          <h4 style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '12px',
            color: '#93c5fd'
          }}>
            Contact Info
          </h4>
          <div style={{ display: 'grid', gap: '8px', fontSize: '0.85rem' }}>
            <div>📞 <a href="tel:+13024640950" style={{ color: '#93c5fd' }}>+1 302 464 0950</a></div>
            <div>✉️ <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#93c5fd' }}>kleber@ziontechgroup.com</a></div>
            <div>📍 Middletown, DE</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'grid', gap: '8px' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              Get Quote
            </Link>
            <Link href="/services-catalog" style={{
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              View Catalog
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}