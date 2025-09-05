
<<<<<<< HEAD
import { useState } from 'react',
import { useMessaging } from '@/context/MessagingContext',
import { MainNavigation } from './MainNavigation',
import { Logo } from '@/components/header/Logo',
import { LanguageSelector } from '@/components/header/LanguageSelector',
import { CurrencySelector } from '@/components/header/CurrencySelector',
import { useTranslation } from 'react-i18next',
import { Menu, X } from 'lucide-react',
import { MobileMenu } from '@/components/header/MobileMenu',
import { useIsMobile } from '@/hooks/use-mobile',
import { MobileBottomNav } from '@/components/header/MobileBottomNav',
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0,
  try {
    const { unreadCount: count } = useMessaging(),
    unreadCount = count
  } catch (error) {
    console.warn('Messaging context not available')
  }
  
  return (
    <>
      <header className=&quot;sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md&quot;>
        <div className=&quot;container flex h-16 items-center px-4 sm:px-6&quot;>
          <Logo />
          <div className=&quot;ml-6 flex-1 hidden md:block&quot;>
            <MainNavigation unreadCount={unreadCount} />
          </div>
          
          {/* Mobile menu button */}
          <div className=&quot;md:hidden ml-auto mr-4&quot;>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=&quot;inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none&quot;
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
            >
              <span className=&quot;sr-only&quot;>{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className=&quot;block h-6 w-6&quot; aria-hidden=&quot;true&quot; />
=======

export function AppHeader() {_const [mobileMenuOpen, _setMobileMenuOpen] = useState(false);
  const _isMobile = useIsMobile();
  const { t} = useTranslation();
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let _unreadCount = 0;
  try {_const { unreadCount: count} = useMessaging();
    unreadCount = count;
  } catch (error) {}
  
  return (_<>
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          <div className="ml-6 flex-1 hidden md:block">
            <MainNavigation unreadCount={_unreadCount} />
          </div>
          
          {_/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={_() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none"
              aria-expanded={_mobileMenuOpen}
              aria-label={_t('general.toggle_mobile_menu')}
            >
              <span className="sr-only">{_t('general.open_main_menu')}</span>
              {_mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <Menu className=&quot;block h-6 w-6&quot; aria-hidden=&quot;true&quot; />
              )}
            </button>
          </div>

          <CurrencySelector />
          <LanguageSelector />
        </div>
      </header>
      
<<<<<<< HEAD
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className=&quot;md:hidden fixed inset-0 z-40 pt-16&quot;>
=======
      {_/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {_mobileMenuOpen && (_<div className="md:hidden fixed inset-0 z-40 pt-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div 
            className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot;
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden=&quot;true&quot;
          />
          <div className=&quot;relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto&quot;>
            <MobileMenu 
              unreadCount={_unreadCount} 
              onClose={_() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}

      {_/* Mobile Bottom Navigation */}
      {_isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  )
}
