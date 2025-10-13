&amp;apos;use client&amp;apos;;
import React from &amp;apos;react&amp;apos;;
import { Helmet } from &amp;apos;react-helmet-async&amp;apos;;

const LazyImage: React.FC = () =&amp;gt; {
  return (
    &amp;lt;div className=&amp;quot;min-h-screen bg-white&amp;quot;&amp;gt;
      &amp;lt;Helmet&amp;gt;
        &amp;lt;title&amp;gt;Lazy Image - Zion Tech Group&amp;lt;/title&amp;gt;
        &amp;lt;meta name=&amp;quot;description&amp;quot; content=&amp;quot;Professional lazy image services by Zion Tech Group.&amp;quot; /&amp;gt;
      &amp;lt;/Helmet&amp;gt;

      {/* Hero Section */}
      &amp;lt;section className=&amp;quot;py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-6xl mx-auto text-center&amp;quot;&amp;gt;
          &amp;lt;h1 className=&amp;quot;text-5xl font-bold text-gray-900 mb-6&amp;quot;&amp;gt;
            Lazy Image
          &amp;lt;/h1&amp;gt;
          &amp;lt;p className=&amp;quot;text-xl text-gray-600 max-w-3xl mx-auto&amp;quot;&amp;gt;
            Professional lazy image services 
            designed to help your business grow and succeed.
          &amp;lt;/p&amp;gt;
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;

      {/* Content Section */}
      &amp;lt;section className=&amp;quot;py-16 px-4&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-6xl mx-auto&amp;quot;&amp;gt;
          &amp;lt;div className=&amp;quot;grid md:grid-cols-2 gap-12 items-center&amp;quot;&amp;gt;
            &amp;lt;div&amp;gt;
              &amp;lt;h2 className=&amp;quot;text-3xl font-bold text-gray-900 mb-6&amp;quot;&amp;gt;Our Services&amp;lt;/h2&amp;gt;
              &amp;lt;p className=&amp;quot;text-lg text-gray-600 mb-6&amp;quot;&amp;gt;
                We provide comprehensive lazy image 
                solutions tailored to your specific needs and requirements.
              &amp;lt;/p&amp;gt;
              &amp;lt;ul className=&amp;quot;space-y-3&amp;quot;&amp;gt;
                &amp;lt;li className=&amp;quot;flex items-center&amp;quot;&amp;gt;
                  &amp;lt;span className=&amp;quot;w-2 h-2 bg-blue-600 rounded-full mr-3&amp;quot;&amp;gt;&amp;lt;/span&amp;gt;
                  Custom solutions
                &amp;lt;/li&amp;gt;
                &amp;lt;li className=&amp;quot;flex items-center&amp;quot;&amp;gt;
                  &amp;lt;span className=&amp;quot;w-2 h-2 bg-blue-600 rounded-full mr-3&amp;quot;&amp;gt;&amp;lt;/span&amp;gt;
                  Expert consultation
                &amp;lt;/li&amp;gt;
                &amp;lt;li className=&amp;quot;flex items-center&amp;quot;&amp;gt;
                  &amp;lt;span className=&amp;quot;w-2 h-2 bg-blue-600 rounded-full mr-3&amp;quot;&amp;gt;&amp;lt;/span&amp;gt;
                  Ongoing support
                &amp;lt;/li&amp;gt;
              &amp;lt;/ul&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div className=&amp;quot;bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white&amp;quot;&amp;gt;
              &amp;lt;h3 className=&amp;quot;text-2xl font-bold mb-4&amp;quot;&amp;gt;Get Started&amp;lt;/h3&amp;gt;
              &amp;lt;p className=&amp;quot;mb-6&amp;quot;&amp;gt;
                Ready to transform your business with our lazy image services?
              &amp;lt;/p&amp;gt;
              &amp;lt;a
                href=&amp;quot;/contact&amp;quot;
                className=&amp;quot;inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors&amp;quot;
              &amp;gt;
                Contact Us
              &amp;lt;/a&amp;gt;
            &amp;lt;/div&amp;gt;
          &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;

      {/* CTA Section */}
      &amp;lt;section className=&amp;quot;py-16 px-4 bg-blue-600&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-4xl mx-auto text-center&amp;quot;&amp;gt;
          &amp;lt;h2 className=&amp;quot;text-3xl font-bold text-white mb-6&amp;quot;&amp;gt;
            Ready to Get Started?
          &amp;lt;/h2&amp;gt;
          &amp;lt;p className=&amp;quot;text-xl text-blue-100 mb-8&amp;quot;&amp;gt;
            Let&amp;apos;s discuss how our lazy image 
            services can help you achieve your goals.
          &amp;lt;/p&amp;gt;
          &amp;lt;a
            href=&amp;quot;/contact&amp;quot;
            className=&amp;quot;inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors&amp;quot;
          &amp;gt;
            Get Started Today
          &amp;lt;/a&amp;gt;
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;
    &amp;lt;/div&amp;gt;
  );
};

export default LazyImage;