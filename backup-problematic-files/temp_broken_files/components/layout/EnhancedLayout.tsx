import React, { useEffect } from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
import i18n, { isRtl } from '../../utils/i18n',
import LanguageSwitchPrompt from '../i18n/LanguageSwitchPrompt',
export type EnhancedLayoutProps = {
  children: React.ReactNode
,

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect() => {
    const lng = i18n.resolvedLanguage || i18n.language,
    document.documentElement.setAttribute('dir', isRtl(lng) ? 'rtl' : 'ltr'),
    document.documentElement.setAttribute('lang', lng)
  }, []),
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <header>
        <EnhancedNavigation />
        <LanguageSwitchPrompt />
      </header>
      <main id=&quot;main&quot; className=&quot;flex-1 container mx-auto px-4 py-6&quot;>{children}</main>      <footer>
        <EnhancedFooter />
      </footer>
    </div>
  )}