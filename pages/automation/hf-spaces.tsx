<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/hf-spaces.json',

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function HfSpacesPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Hugging Face Spaces</h1>

<<<<<<< HEAD
              <a className="font-medium underline" href={`https://huggingface.co/spaces/${it.spaceId}`} target="_blank" rel="noreferrer">{it.spaceId}</Link>
=======
=======
}

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import EnhancedLayout from '../../components / layout / EnhancedLayout',
// @ts - ignore;
import data from '../../data / hf - spaces.json',
export default /**
 * HfSpacesPage - Function description
 */
function HfSpacesPage() {
  const items: any[] = (data?.items || []).slice (0, 60),
  return (
    <EnhancedLayout>;
      <div className="max - w-5xl mx - auto py - 10">;
        <h1 className="text - 3xl font - bold">Hugging Face Spaces</h1>;
        <p className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300">Updated at {data?.generated_at || '—'}</p>;
        <ul className="mt - 6 space - y-4">;
          {items.map ((it, idx) => (
            <li key={idx} className="p - 4 border border - gray - 200 dark:border - gray - 800 rounded - lg">;
              <a className="font - medium underline" href={`https://huggingface.co / spaces/${it.space_id}`} target="_blank" rel="noreferrer">{it.space_id}</a>;
              <div className="mt - 1 text - xs text - gray - 500 dark:text - gray - 400">Likes {it.likes} · {it.runtime}</div>;
            </li>))}
        </ul>;
      </div>;
    </EnhancedLayout>);
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/hf-spaces.json';
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
// @ts-ignore
import data from '../../data/hf-spaces.json',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',
// @ts-ignore;
import data from '../../data/hf-spaces.json',
export default function HfSpacesPage() {

  const items: any[] = (data?.items |[]).slice(0, 60)

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Hugging Face Spaces</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt |'—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={`https://huggingface.co/spaces/${it.spaceId}`} target="_blank" rel="noreferrer">{it.spaceId}</a>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a className="font-medium underline" href={`https://huggingface.co/spaces/${it.spaceId}`} target="_blank" rel="noreferrer">{it.spaceId}</a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Likes {it.likes} · {it.runtime}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
  );
};
              <a className="font-medium underline" href={`https://huggingface.co/spaces/${it.spaceId}`} target="_blank" rel="noreferrer">{it.spaceId}</Link>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Likes {it.likes} · {it.runtime}</div>
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
