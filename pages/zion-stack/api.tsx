<<<<<<< HEAD
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
import dynamic from 'next / dynamic',
const ApiDocsPage = dynamic (() => import ('../../components / docs / ApiDocsPage'), { ssr: false }),
export default /**
 * ZionStackApiRoute - Function description
 */
function ZionStackApiRoute() {
  return <ApiDocsPage />;
}

=======
<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })

export default function ZionStackApiRoute() {
  return <ApiDocsPage />
=======
=======
<<<<<<< HEAD
import dynamic from 'next/dynamic',;
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),

export default function ZionStackApiRoute() {
  return <ApiDocsPage />;
};
=======
import dynamic from 'next/dynamic';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false });
export default function ZionStackApiRoute(req, res) {
  try {
  return <ApiDocsPage />;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
