<<<<<<< HEAD
import React from 'react';'
import Layout from '../../../components/layout/Layout';

interface MainLayoutProps {}
=======
import React from 'react';
import Layout from '../../../components/layout/Layout';

interface MainLayoutProps {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
}

<<<<<<< HEAD
export default function MainLayout({ title, description, children, keywords }: MainLayoutProps) {}
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>;
  );
}'
=======
export default function MainLayout({ title, description, children, keywords }: MainLayoutProps) {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
