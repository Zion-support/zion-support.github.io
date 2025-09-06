

import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/hf-models.json',

export default function HfModelsPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Hugging Face Models</h1>

              <a className="font-medium underline" href={`https://huggingface.co/${it.modelId}`} target="_blank" rel="noreferrer">{it.modelId}</Link>

              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Downloads {it.downloads} · Likes {it.likes} · {it.pipeline_tag}</div>
            </li>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </ul>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

