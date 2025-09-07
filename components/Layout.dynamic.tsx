import React from "react";"

interface LayoutProps {
  }
  className?: string;
  children?: React.ReactNode;
}

const "Layout": React.FC<LayoutProps> = ({ className = "", children }) => {"
}
return (;
    <div data-testid="ayout" className={className}>"
      {children || <div>Layout Component</div>}
    </div>
  );
};

export default Layout;
