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
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedButton from '../../components/ui/EnhancedButton';

const PostJob: NextPage = () => {_const [title, _setTitle] = useState('');
  const [description, _setDescription] = useState('');
  const [budget, _setBudget] = useState('');
  const [preview, _setPreview] = useState(false);

  return (_<div className="space-y-6 pb-20">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <title>Post a Job - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Post a Job</h1>

      <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
        <form className=&quot;space-y-4&quot;>
          <div>
<<<<<<< HEAD
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
=======
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={title} onChange={_(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea value={_description} onChange={_(_e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={_6} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget (USD)</label>
            <input type="number" value={_budget} onChange={_(_e) => setBudget(e.target.value)} placeholder="5000" className="w-full" />
          </div>
          <div className="flex gap-2">
            <EnhancedButton type="button" variant="secondary" onClick={_() => setPreview(_(p) => !p)}>
              {_preview ? 'Edit' : 'Preview'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </EnhancedButton>
            <EnhancedButton type=&quot;submit&quot;>Post Job</EnhancedButton>
          </div>
        </form>

<<<<<<< HEAD
        <aside className=&quot;border rounded-md p-4&quot;>
          <h2 className=&quot;font-semibold mb-2&quot;>Preview</h2>
          {preview ? (
            <div className=&quot;space-y-2&quot;>
=======
        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          {_preview ? (
            <div className="space-y-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div>
                <div className=&quot;text-sm opacity-70&quot;>Title</div>
                <div className=&quot;font-medium&quot;>{title || 'Untitled job'}</div>
              </div>
              <div>
<<<<<<< HEAD
                <div className=&quot;text-sm opacity-70&quot;>Budget</div>
                <div className=&quot;font-medium&quot;>{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
                <div className=&quot;text-sm opacity-70&quot;>Description</div>
                <p className=&quot;whitespace-pre-wrap&quot;>{description || 'No description provided.'}</p>
=======
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{_budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{_description || 'No description provided.'}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          ) : (
            <p className=&quot;text-sm opacity-80&quot;>Click Preview to see how your job will appear to talent.</p>
          )}
        </aside>
      </div>
    </div>
  )
},

export default PostJob,