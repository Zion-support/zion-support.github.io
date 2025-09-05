import React, {_ReactNode} from 'react';
import Header from '../Header';
import Footer from './Footer';

<<<<<<< HEAD
interface LayoutProps {
  childre: n: ReactNode;
}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
=======
interface LayoutProps {_children: ReactNode;}

const Layout: React.FC<LayoutProps> = (_{_children}) => {_return (
    <div className="min-h-screen flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Header />
<<<<<<< HEAD
      <main className="flex-1">{children}</main>
=======
      <main className=&quot;flex-1&quot;>
        {children}
      </main>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
