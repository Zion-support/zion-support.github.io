>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
interface EnhancedLayoutProps {
  \"children\": ReactNode;
}
export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col\">
      <EnhancedNavigation />
      <main className=\"container mx-auto px-4 py-8 flex-1\">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
