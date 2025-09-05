<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
const PostJob: NextPage = () => {
  const [title, setTitle] = useState(''),
  const [description, setDescription] = useState(''),
  const [budget, setBudget] = useState(''),
  const [preview, setPreview] = useState(false),

  return (
    <div className=&quot;space-y-6 pb-20&quot;>
      <Head>
        <title>Post a Job - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Post a Job</h1>

      <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
        <form className=&quot;space-y-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium mb-1&quot;>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder=&quot;e.g., Build a Next.js website&quot; className=&quot;w-full&quot; />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium mb-1&quot;>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder=&quot;Describe your project...&quot; rows={6} className=&quot;w-full&quot; />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium mb-1&quot;>Budget (USD)</label>
            <input type=&quot;number&quot; value={budget} onChange={(e) => setBudget(e.target.value)} placeholder=&quot;5000&quot; className=&quot;w-full&quot; />
          </div>
          <div className=&quot;flex gap-2&quot;>
            <EnhancedButton type=&quot;button&quot; variant=&quot;secondary&quot; onClick={() => setPreview((p) => !p)}>
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>
            <EnhancedButton type=&quot;submit&quot;>Post Job</EnhancedButton>
          </div>
        </form>

        <aside className=&quot;border rounded-md p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Preview</h2>
          {preview ? (
            <div className=&quot;space-y-2&quot;>
              <div>
                <div className=&quot;text-sm opacity-70&quot;>Title</div>
                <div className=&quot;font-medium&quot;>{title || 'Untitled job'}</div>
              </div>
              <div>
                <div className=&quot;text-sm opacity-70&quot;>Budget</div>
                <div className=&quot;font-medium&quot;>{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
                <div className=&quot;text-sm opacity-70&quot;>Description</div>
                <p className=&quot;whitespace-pre-wrap&quot;>{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
            <p className=&quot;text-sm opacity-80&quot;>Click Preview to see how your job will appear to talent.</p>
=======
import type { NextPage } from 'next',;
import Head from 'next/head',;
import { useState } from 'react',;
import EnhancedButton from '../../components/ui/EnhancedButton',;
const PostJob: NextPage = () => {;
  const [title, setTitle] = useState(''),;
  const [description, setDescription] = useState(''),;
  const [budget, setBudget] = useState(''),;
  const [preview, setPreview] = useState(false),;
  return (;
    <div className="space-y-6 pb-20">;
      <Head>;
        <title>Post a Job - Zion</title>;
      </Head>;
      <h1 className="text-2xl font-semibold">Post a Job</h1>;
      <div className="grid md:grid-cols-2 gap-6">;
        <form className="space-y-4">;
          <div>;
            <label className="block text-sm font-medium mb-1">Title</label>;
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className="w-full" />;
          </div>;
          <div>;
            <label className="block text-sm font-medium mb-1">Description</label>;
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={6} className="w-full" />;
          </div>;
          <div>;
            <label className="block text-sm font-medium mb-1">Budget (USD)</label>;
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="5000" className="w-full" />;
          </div>;
          <div className="flex gap-2">;
            <EnhancedButton type="button" variant="secondary" onClick={() => setPreview((p) => !p)}>;
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>;
            <EnhancedButton type="submit">Post Job</EnhancedButton>;
          </div>;
        </form>;
        <aside className="border rounded-md p-4">;
          <h2 className="font-semibold mb-2">Preview</h2>;
          {preview ? (;
            <div className="space-y-2">;
              <div>;
                <div className="text-sm opacity-70">Title</div>;
                <div className="font-medium">{title || 'Untitled job'}</div>;
              </div>;
              <div>;
                <div className="text-sm opacity-70">Budget</div>;
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>;
              </div>;
              <div>;
                <div className="text-sm opacity-70">Description</div>;
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>;
              </div>;
            </div>;
          ) : (;
            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        </aside>;
      </div>;
    </div>;
  );
},;
export default PostJob;