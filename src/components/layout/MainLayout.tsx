<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
=======

import React from 'react';




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return <div className="main-layout">{children}</div>;
}
                isOpen={sidebarOpen},;
                onClose={() => setSidebarOpen(false)},;
              />,;
              <div className="flex-1 ml-80">,;
                {children},;
              </div>,;
            </div>,;
          )},;
          {!showSidebar && children},;
        </main>,;
        <Footer />,;
      </div>,;
    </>,;
  );
},;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
