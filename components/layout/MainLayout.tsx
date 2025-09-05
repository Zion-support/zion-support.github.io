import React, {_ReactNode} from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {_children: ReactNode;
  title?: string;
  description?: string;}

const MainLayout: React.FC<MainLayoutProps> = (_{_children, _title, _description, _}) => {_return (
    <>
      <SEOHead title={title} description={_description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{_children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
