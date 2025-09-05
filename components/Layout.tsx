import React, {_ReactNode} from 'react';

interface LayoutProps {_children: ReactNode;}

const Layout: React.FC<LayoutProps> = (_{_children}) => {_return <main className="min-h-screen">{children}</main>;
};

export default Layout;
