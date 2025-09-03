import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

<<<<<<< HEAD:components/disabled/Layout.tsx
<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
=======
const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
>>>>>>> origin/main
}) => {
=======
const Layout: React.FC<LayoutProps> = ({ children }) => {
>>>>>>> main:components/Layout.tsx
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD:components/disabled/Layout.tsx
<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> origin/main
=======
export default Layout;
>>>>>>> main:components/Layout.tsx
