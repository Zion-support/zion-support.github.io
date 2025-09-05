<<<<<<< HEAD
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="main-layout">{children}</div>;
}
=======

                isOpen={sidebarOpen};
                onClose={() => setSidebarOpen(false)};

              />,
              <div className=&quot;flex-1 ml-80&quot;>,
                {children};
              </div>
            </div>
          )};
          {!showSidebar && children};
        </main>,
        <Footer />,
      </div>,
    </>,
  ),

};

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
