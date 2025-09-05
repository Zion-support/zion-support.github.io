import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedButton from '../../components/ui/EnhancedButton';

const PostJob: NextPage = () => {_const [title, _setTitle] = useState('');
  const [description, _setDescription] = useState('');
  const [budget, _setBudget] = useState('');
  const [preview, _setPreview] = useState(false);

  return (_<div className="space-y-6 pb-20">
      <Head>
        <title>Post a Job - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Post a Job</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">
          <div>
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
            </EnhancedButton>
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>

        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          {_preview ? (
            <div className="space-y-2">
              <div>
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
              </div>
              <div>
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{_budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{_description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>
          )}
        </aside>
      </div>
    </div>
  );
};

export default PostJob;