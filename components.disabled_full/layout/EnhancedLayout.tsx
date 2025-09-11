ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

interface EnhancedLayoutProps {
  \"children\": ReactNode;
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

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
