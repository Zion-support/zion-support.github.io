'use client';
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet-async';
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Description of the page and its benefits." />
        <meta name="keywords" content="relevant, keywords, for, seo" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
};

