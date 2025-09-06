import React from "react";
import Head from "next/head";
>>>>>>> origin/automation-improvements-final

=======
import React from './react';
import Head from './next / head';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface SEOProps {
=======
interface SEOProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title?: string;
  description?: string;
  keywords?: string;
}
}) => {
=======

const SEO: React.FC<SEOProps> = ({;
  title = "Zion Tech Group - Technology Solutions",;
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
    </Head>;
  );
>>>>>>> origin/automation-improvements-final
=======
}
export default SEO;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
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
