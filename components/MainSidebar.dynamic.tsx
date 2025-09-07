import React from \"react\";

interface MainSidebarProps {
  className?: string;}
  children?: React.ReactNode;}
}

const MainSidebar: React.FC<MainSidebarProps /> = ({
  className = \"\",}
  children,}
}) => {}
  return (}
    <div data-testid=\"ainsidebar\" className={className} />
      {children || <div />MainSidebar Component</div>}
    </div>
  );
};

export default MainSidebar;
