import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Custom404() {
  return (
    <>
      <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <title>404 - Page Not Found</title>
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Go Back Home
=======
>>>>>>> f38908027c6fb310e108d8eef8d480933f0e20c4
=======
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          >
            Go Home
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </Link>
        </main>
      </div>
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name="description" content="404 page" />
      </Head>
      <main>
        <h1>404</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};
export default NotFoundPage;
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Custom404(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>404 - Page Not Found | Zion Tech Group</title>;
        <meta name="description" content="The page you're looking for doesn't exist." />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      </Head>;
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text-6xl font-bold mb-4">404</h1>;
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>;
          <p className="text-slate-300 mb-8">;
            The page you're looking for doesn't exist.;
          </p>;
          <Link;
            href="/";
            className="px-6 py-3 bg-blue-600: hover:bg-blue-700 rounded-lg font-semibold transition-colors";
          >;
            Go Home;
          </Link>;
        </div>;
      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
