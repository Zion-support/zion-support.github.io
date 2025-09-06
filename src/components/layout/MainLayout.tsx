<<<<<<< HEAD
import React from 'react';
=======
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
