import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store'; // Changed to named import
import { WhitelabelProvider } from '@/context/WhitelabelContext'; // Added WhitelabelProvider
import { WalletProvider } from '@/context/WalletContext'; // Added WalletProvider
import { AnalyticsProvider } from '@/context/AnalyticsContext'; // Added AnalyticsProvider
import { CartProvider } from '@/context/CartContext'; // Added CartProvider
import { RouterWrapper } from '@/components/RouterWrapper'; // Add this import
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Toaster } from '@/components/ui/toaster';
import CustomErrorBoundary from '@/components/CustomErrorBoundary'; // Import the new Error Boundary
// If you have global CSS, import it here:
// import '../styles/globals.css';

function Header(): any {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CustomErrorBoundary> {/* Wrap the entire application with CustomErrorBoundary */}
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <HelmetProvider>
            <RouterWrapper> {/* RouterWrapper should be the one wrapping AuthProvider and others */}
              <AuthProvider>
                <WhitelabelProvider>
                  <I18nextProvider i18n={i18n}>
                    <WalletProvider>
                      <CartProvider>
                        <AnalyticsProvider>
                          <Component {...pageProps} />
                        </AnalyticsProvider>
                        <Toaster />
                      </CartProvider>
                    </WalletProvider>
                  </I18nextProvider>
                </WhitelabelProvider>
              </AuthProvider>
            </RouterWrapper>
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
    </CustomErrorBoundary>
  );
}

function Footer(): any {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white',
      padding: '40px 20px', marginTop: 'auto'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ 
            fontSize: '1.5rem', fontWeight: 700, marginBottom: 10,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Zion Tech Group</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Innovative IT Solutions & AI Services
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap',
          marginBottom: 20
        }}>
          <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Services</Link>
          <Link href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</Link>
          <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
          <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</Link>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #334155', paddingTop: 20, color: '#64748b', fontSize: '0.8rem'
        }}>
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}