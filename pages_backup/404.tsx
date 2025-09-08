import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="404 - Page Not Found"
      description="Page not found"
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            Go back home
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

          </Link>
        </main>
      </div>
    </>

);

import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Custom404 - Function description
 */
function Custom404() {

}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import type { NextPage } from 'next';
import Head from 'next/head';
const NotFoundPage: NextPage = () => {

  return (
    <>;
      <Head>;
          </Link>;
        </div>;
}

      </div>;
    </>);
}

import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>404 - Page Not Found</title>

      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

}

      </main>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
