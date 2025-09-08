

interface EnhancedLayoutProps {
  children: ReactNode}

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  useEffect(() => {
    const lng = i18n.resolvedLanguage |i18n.language;
export type EnhancedLayoutProps = {;
export type EnhancedLayoutProps = {
  children: React.ReactNode;};
export type EnhancedLayoutProps = {
  children: React.ReactNode
export type EnhancedLayoutProps = {
  children: React.ReactNode
};

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100" style={{ color: 'var(--brand, #111827)' }}>
      <header>
        <EnhancedNavigation />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6 pb-20 md:pb-6">{children}</main>
      <footer className="hidden md:block">
        <EnhancedFooter />
      </footer>
      <MobileTabBar />
    </div>
  )}
