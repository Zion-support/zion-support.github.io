

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import Header from '../Header';
import Footer from '../Footer';




import React from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  title?: string;
  description?: string;
  keywords?: string;

  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group', 
  description = 'Building practical AI and modern web solutions.' 
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
    <div className="min-h-screen bg-gray-50">
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {children  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );

}
