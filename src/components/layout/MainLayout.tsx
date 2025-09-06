

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



