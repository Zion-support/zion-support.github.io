const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })

export default function ZionStackApiRoute() {
  return <ApiDocsPage />
import dynamic from 'next/dynamic',;
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),

export default function ZionStackApiRoute() {
  return <ApiDocsPage />;
};
import dynamic from 'next/dynamic';
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false });
export default function ZionStackApiRoute(req, res) {
  try {
  return <ApiDocsPage />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
