import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/hf-models.json';

export default function HfModelsPage() {
  const items: any[] = (data?.items || []).slice(0, 60);
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-5xl mx-auto py-10&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Hugging Face Models</h1>
        <p className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300&quot;>Updated at {data?.generatedAt || '—'}</p>
        <ul className=&quot;mt-6 space-y-4&quot;>
          {items.map((it, idx) => (
            <li key={idx} className=&quot;p-4 border border-gray-200 dark:border-gray-800 rounded-lg&quot;>
              <a className=&quot;font-medium underline&quot; href={`https://huggingface.co/${it.modelId}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{it.modelId}</Link>
              <div className=&quot;mt-1 text-xs text-gray-500 dark:text-gray-400&quot;>Downloads {it.downloads} · Likes {it.likes} · {it.pipeline_tag}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}