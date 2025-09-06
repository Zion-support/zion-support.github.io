import React, { useState } from 'react';
import { useMessaging  } from '@/context/MessagingContext';
import Link from 'next/link';
import { ResponsiveNavigation  } from '@/components/navigation/ResponsiveNavigation';
import { Logo  } from '@/components/header/Logo';
import { useTranslation  } from 'react-i18next';
import { Menu, X } from 'lucide-react'
import { MobileMenu  } from '@/components/header/MobileMenu';
import { useIsMobile  } from '@/hooks/use-mobile';
import { MobileBottomNav  } from '@/components/header/MobileBottomNav';
import { PointsBadge  } from '@/components/loyalty/PointsBadge';
import { LoginModal  } from '@/components/auth/LoginModal';
import { useAuth  } from '@/hooks/useAuth';
import { UserMenu  } from '@/components/header/UserMenu';
import { useSelector  } from 'react-redux';
import type { RootState } from '@/store';
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router';
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = null;
                  openLoginModal(router.asPath)
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.signup')}
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
}
