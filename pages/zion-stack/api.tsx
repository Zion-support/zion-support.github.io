<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import dynamic from 'next/dynamic';

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
