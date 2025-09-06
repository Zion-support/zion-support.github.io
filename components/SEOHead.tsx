  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  structured_data?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
      {/* Twitter */}
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullOgImage} />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData |defaultStructuredData)
        }}
      />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Head>
  );
}
};

export default SEOHead;
