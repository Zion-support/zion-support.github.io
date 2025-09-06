
;
import dynamic from 'next/dynamic',const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),export default function DocsRoute() {return <ApiDocsPage />;
}import dynamic from 'next/dynamic';
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })export default function DocsRoute() {try {return <ApiDocsPage />;
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
}const ApiDocsPage = null;
export default function DocsRoute() {return <ApiDocsPage />;
}