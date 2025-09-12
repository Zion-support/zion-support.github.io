import React from "react";
import SEOHead from "../src/components/SEOHead";
const NewsPage = () => {
  return (
    <>
      <SEOHead title="News - Zion Tech Group" description="Latest news and updates from Zion Tech Group."   />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">News</h1>
        <p className="text-gray-600">Stay tuned for company announcements, product updates, and industry insights.</p>
      </main>
    </>
  );
};
export default NewsPage;