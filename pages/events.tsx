<<<<<<< HEAD

import React from 'react',
import SEO from '../components / SEO',
export default /**
 * EventsPage - Function description
 */
function EventsPage() {
return (
  <>;
  <SEO title="Events | Zion Tech Group" description="Upcoming events and conferences." canonical="/events" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 4">Events</h1>;
    <p className="text - gray - 300">No upcoming events at this time. Check back soon.</p>;
  </div>;
  </>);
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function events() {
  return (
    <Layout>
      <Head>
        <title>Events - Zion Tech Group</title>
        <meta name="description" content="Events solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Events</h1>
          <p className="text-lg text-gray-600">
            Professional events solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
