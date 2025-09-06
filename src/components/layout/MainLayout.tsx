<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
