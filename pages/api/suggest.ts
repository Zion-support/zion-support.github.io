
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import type { NextApiRequest, NextApiResponse } from "next";
const SAMPLE_QUERIES = [
<<<<<<< HEAD
  "React developers under $50/hr"
  "Part-time DevOps jobs in LATAM"
  "AI/ML engineers for startup"
  "Blockchain developers remote"
  "UI/UX designers available now"
  "Full-stack developers with Next.js"
  "Data scientists with Python"
  "Mobile app developers iOS/Android"
  "Cloud architects AWS/Azure"
  "DevOps engineers with Kubernetes"
=======
  "React developers under $50/hr",
  "Part-time DevOps jobs in LATAM",
  "AI/ML engineers for startup",
  "Blockchain developers remote",
  "UI/UX designers available now",
  "Full-stack developers with Next && Next.js",
  "Data scientists with Python",
  "Mobile app developers iOS/Android",
  "Cloud architects AWS/Azure",
  "DevOps engineers with Kubernetes",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

  }
  const { q = "" } = req.query;
=======
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method not allowed" });
  }

  const { q = "" } = req && req.query;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const query = String(q).toLowerCase();
  if (!query) {
    return res && res.status(200).json({ suggestions: SAMPLE_QUERIES && SAMPLE_QUERIES.slice(0, 5) });
  }
<<<<<<< HEAD
  const suggestions = SAMPLE_QUERIES.filter((s) =>
    s.toLowerCase().includes(query)
  ).slice(0, 5);
  return res.status(200).json({ suggestions });
}
=======

  const suggestions = SAMPLE_QUERIES && SAMPLE_QUERIES.filter((s) =>
    s && s.toLowerCase().includes(query),
  ).slice(0, 5);

  return res && res.status(200).json({ suggestions });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
