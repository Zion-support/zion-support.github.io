

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD

import React from "react";
import Head from "next/head";




import React from './react';
import Head from './next / head';
;
import React from "react";
import Head from "next/head";
import Head from "next/head";
import { useRouter } from "next/router";
import React from './react';
import Head from './next / head';
;
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from "react";
import Head from "next/head";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Head from "next/head";
import { useRouter } from "next/router";
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react";
import Head from "next/head";
origin/main
origin/automation-improvements-final

<<<<<<< HEAD
=======

=======

import React from "react";
import Head from "next/head";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
import React from './react';
import Head from './next / head';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SEOProps {
interface SEOProps {;
  title?: string;
  description?: string;

  keywords?: string;
}

const SEO: React.FC < SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions",
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",

}) => {

const SEO: React.FC<SEOProps> = ({;
  title = "Zion Tech Group - Technology Solutions",;
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",;
}) => {;
  return (
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
    </Head>;
<<<<<<< HEAD
}

  );
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  keywords?: string;
}
const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions"
  description = "Leading provider of AI services, IT solutions, and micro SaaS development."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
};

export default SEO;
}
=======
  );


};

export default SEO;


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
  image?: string;
  url?: string;
  type?: string;
const SEO: React.FC<SEOProps> = ({
  title;
  description;
  keywords = "AI solutions, cloud services, technology consulting, digital transformation, IT services, Zion Tech Group"
  image = "https://ziontechgroup.com/og-image.png"
  url = "https://ziontechgroup.com"
  type = "website"
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : "${title} | Zion Tech Group";
  return (
<<<<<<< HEAD
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
export default SEO;


<<<<<<< HEAD
}
export default SEO;
}
export default SEO;
=======
>>>>>>> origin/automation-improvements-final
=======
}
export default SEO;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
    </Head>);
}
;
export default SEO;
;
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
export default SEO;
origin/main
origin/automation-improvements-final
}
export default SEO;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
