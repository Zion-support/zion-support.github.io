import React from 'react',
import * as React from 'react',
import Layout from '../../../components/Layout',
interface MainLayoutProps {,
  title: string,
  description: string,
  children: React.ReactNode,
  keywords?: string ,};
export default function MainLayout({ title, description, children, keywords }: MainLayoutProps) {,
  return(<Layout title={title } description={ description } keywords={ keywords }>,
      { children };
    </Layout>)};