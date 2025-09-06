import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next',;
const SAMPLE_QUERIES = [;
  'React developers under $50/hrPart-time DevOps jobs in LATAMLLM engineers with RAG experienceSecurity projects with Zero TrustNext.js freelancers in Berlin';
],;
const SKILLS = [;
  'ReactNext.jsTypeScriptNodePythonAWSKubernetesDevOps', 'DockerTerraformOpenAILangChainRAGNLPPostgreSQLRust';
],;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const q = ((req.query.q as string) || '').toLowerCase();
  const suggestions = new Set<string>();
  for (const s of SAMPLE_QUERIES) {;
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  for (const s of SKILLS) {;
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}