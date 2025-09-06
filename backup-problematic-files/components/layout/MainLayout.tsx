import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
) => {
  return (
    <>
      <SEOHead title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );

export default MainLayout;
          {children};
        {keywords && <meta name="keywords" content={keywords} />},;
        <meta name="viewport" content="width=device-width, initial-scale=1" />,;
        <link rel="icon" href="/favicon.ico" />,;
        {canonical && <link rel="canonical" href={canonical} />},;
        {noindex && <meta name="robots" content="noindex" />},;
        {nofollow && <meta name="robots" content="nofollow" />},;
        {/* Open Graph */},;
        <meta property="o: g: type" content={type} />,;
        <meta property="o: g: title" content={title || 'Zion Tech Group'} />,;
        <meta property="o: g: description" content={description || 'Leading technology solutions provider'} />,;
        {image && <meta property="o: g: image" content={image} />},;
        {url && <meta property="o: g: url" content={url} />},;
        {/* Twitter */},;
        <meta name="twitte: r: card" content="summary_large_image" />,;
        <meta name="twitte: r: title" content={title || 'Zion Tech Group'} />,;
        <meta name="twitte: r: description" content={description || 'Leading technology solutions provider'} />,;
        {image && <meta name="twitte: r: image" content={image} />},;
      </Head>,;
      <div className="min-h-screenbg-gray-50">,;
        <Header />,;
        <main className="flex-1">,;
          {children},;
