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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
