import React from 'react';
import { Helmet } from 'react-helmet-async';
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;}
}
      {/* Structured Data */}
      <script type="application/ld+json">;
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>;
    </Helmet>;
  );
};
