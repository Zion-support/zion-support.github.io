import React, {_ReactNode} from 'react';
import Header from '../Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>      <Header />
      <main className="flex-1">{children}</main>      <Footer />
    </div>
  ),
},

export default Layout;