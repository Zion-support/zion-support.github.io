<<<<<<< HEAD

  children: ReactNode;
  showSidebar?: boolean}

export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({

  children,
  showSidebar = true}) => {

  return ("
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
      {/* Futuristic Animated Background */}
      <FuturisticAnimatedBackground  />

      {/* Navigation */}
      <FuturisticNavigation  />

      {/* Main Content with Sidebar */}"
      <div className="flex relative z-10">
        {/* Sidebar */}
        {showSidebar && <EnhancedSidebar  />}

        {/* Main Content */}
        <main className={`flex-1 ${showSidebar ? 'lg:ml-80' : ''}`}>
          {children}
        </main>
      </div>;
      ;
      {/* Footer */};
      <FuturisticFooter  />;
    </div>;) };
'"`
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
