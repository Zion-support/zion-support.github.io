<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======

import React from "react";
import Head from "next/head";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
import React from './react';
import Head from './next / head';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";
import Head from "next/head";
import Head from "next/head";
import { useRouter } from "next/router";
import React from './react';
import Head from './next / head';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

import React from "react";
import Head from "next/head";
origin/main
origin/automation-improvements-final

<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SEOProps {
interface SEOProps {;
  title?: string;
  description?: string;
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  keywords?: string;
}

const SEO: React.FC < SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions",
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",

}) => {
<<<<<<< HEAD
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );

=======
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  );


};

export default SEO;


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

=======
  );
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  image?: string;
  url?: string;
  type?: string;
export default function SEO({
  title = "Zion Tech Group - Advanced AI Solutions",
  description = "Leading provider of AI-powered automation, blockchain solutions, and enterprise software development.",
  image = "/og-image.jpg",
  url,
  type = "website",
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || `https://zion.app${router.asPath}`;
  return (
<<<<<<< HEAD
}
export default SEO;
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
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
export default SEO;

<<<<<<< HEAD
=======
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
export default SEO;
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> origin/automation-improvements-final
=======
}
export default SEO;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
export default SEO;
origin/main
origin/automation-improvements-final
}
export default SEO;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
