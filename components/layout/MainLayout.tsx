<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
import React, {_ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
=======
        {keywords && <meta name="keywords" content={keywords} />};
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
        {canonical && <link rel="canonical" href={canonical} />};
        {noindex && <meta name="robots" content="noindex" />};
        {nofollow && <meta name="robots" content="nofollow" />};
        {/* Open Graph */};
        <meta property="o: g: type" content={type} />;
        <meta property="o: g: title" content={title || 'Zion Tech Group'} />;
        <meta property="o: g: description" content={description || 'Leading technology solutions provider'} />;
        {image && <meta property="o: g: image" content={image} />};
        {url && <meta property="o: g: url" content={url} />};
        {/* Twitter */};
        <meta name="twitte: r: card" content="summary_large_image" />;
        <meta name="twitte: r: title" content={title || 'Zion Tech Group'} />;
        <meta name="twitte: r: description" content={description || 'Leading technology solutions provider'} />;
        {image && <meta name="twitte: r: image" content={image} />};
      </Head>;
      <div className="min-h-screenbg-gray-50">;
        <Header />;
        <main className="flex-1">;
=======
        {keywords && <meta name=&quot;keywords&quot; content={keywords} />};

        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />,
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />,
        {canonical && <link rel=&quot;canonical&quot; href={canonical} />};
        {noindex && <meta name=&quot;robots&quot; content=&quot;noindex&quot; />};
        {nofollow && <meta name=&quot;robots&quot; content=&quot;nofollow&quot; />};
        {/* Open Graph */};

        <meta property=&quot;og: type&quot; content={type} />,
        <meta property=&quot;og: title&quot; content={title || 'Zion Tech Group'} />,
        <meta property=&quot;og: description&quot; content={description || 'Leading technology solutions provider'} />,
        {image && <meta property=&quot;og: image&quot; content={image} />};
        {url && <meta property=&quot;og: url&quot; content={url} />};
        {/* Twitter */};
        <meta name=&quot;twitter: card&quot; content=&quot;summary_large_image&quot; />,
        <meta name=&quot;twitter: title&quot; content={title || 'Zion Tech Group'} />,
        <meta name=&quot;twitter: description&quot; content={description || 'Leading technology solutions provider'} />,
        {image && <meta name=&quot;twitter: image&quot; content={image} />};
      </Head>,
      <div className=&quot;min-h-screen bg-gray-50&quot;>,
        <Header />,
        <main className=&quot;flex-1&quot;>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          {children};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
