<<<<<<< HEAD

<<<<<<< HEAD
      <Head>
        <title>Post a Job - Zion</title>
      </Head>
      <h1 className='text-2xl font-semibold'>Post a Job</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        <form className='space-y-4'>

import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
=======

      <Head>;
        <title>Post a Job - Zion</title>;
      </Head>;

      <h1 className='text-2xl font-semibold'>Post a Job</h1>;

      <div className='grid md:grid-cols-2 gap-6'>;
        <form className='space-y-4'>;
          <div>;
            <label className='block text-sm font-medium mb-1'>Title</label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <input
              value={title}
              onChange={e => setTitle(e && e.target.value)}
              placeholder='e && e.g., Build a Next && Next.js website';
              className='w-full';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium mb-1'>;
              Description;
            </label>;
            <textarea
              value={description}
              onChange={e => setDescription(e && e.target.value)}
              placeholder='Describe your project...';
              rows={6}
              className='w-full';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium mb-1'>;
              Budget (USD);
            </label>;
            <input
              type='number'
              value={budget}
              onChange={e => setBudget(e && e.target.value)}
              placeholder='5000';
              className='w-full';
            />;
          </div>;
          <div className='flex gap-2'>;
            <EnhancedButton
              type='button'
              variant='secondary'
              onClick={() => setPreview(p => !p)}
            >;
              {preview ? 'Edit' : 'Preview'}

            </EnhancedButton>;
            <EnhancedButton type='submit'>Post Job</EnhancedButton>;
          </div>;
        </form>;

        <aside className='border rounded-md p-4'>;
          <h2 className='font-semibold mb-2'>Preview</h2>;
          {preview ? (;
            <div className='space-y-2'>;
              <div>;
                <div className='text-sm opacity-70'>Title</div>;
                <div className='font-medium'>{title || 'Untitled job'}</div>;
              </div>;
              <div>;
                <div className='text-sm opacity-70'>Budget</div>;
                <div className='font-medium'>;
                  {budget ? `$${budget}` : 'Not specified'}
                </div>;
              </div>;
              <div>;
                <div className='text-sm opacity-70'>Description</div>;
                <p className='whitespace-pre-wrap'>;
                  {description || 'No description provided.'}
                </p>;
              </div>;
            </div>;
          ) : (;
            <p className='text-sm opacity-80'>;
              Click Preview to see how your job will appear to talent.;

            </p>          )}
        </aside>;
      </div>;
    </div>;
  );

}
export default PostJob;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const PostJob: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [preview, setPreview] = useState(false);

  return (
    <div className="space-y-6 pb-20">
      <Head>
        <title>Post a Job - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Post a Job</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={6} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget (USD)</label>
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="5000" className="w-full" />
          </div>
          <div className="flex gap-2">
            <EnhancedButton type="button" variant="secondary" onClick={() => setPreview((p) => !p)}>
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>

<<<<<<< HEAD
=======
        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {preview ? (
            <div className="space-y-2">
              <div>

<<<<<<< HEAD
=======
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </div>
              <div>
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
<<<<<<< HEAD

            <p className='text-sm opacity-80'>
              Click Preview to see how your job will appear to talent.
            </p>          )}
        </aside>
      </div>
    </div>
  );
}
export default PostJob;

            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </aside>;
      </div>;
    </div>;
  );
},;

export default PostJob;

=======

=======
<<<<<<< HEAD
import type { NextPage } from 'next';
      <Head>;
        <title>Post a Job - Zion</title>;
      </Head>;
      <h1 className='text-2xl font-semibold'>Post a Job</h1>;
      <div className='grid md:grid-cols-2 gap-6'>;
        <form className='space-y-4'>;
          <div>;
            <label className='block text-sm font-medium mb-1'>Title</label>;
            <input
              value={title}
              onChange={e => setTitle(e && e.target.value)}
              placeholder='e && e.g., Build a Next && Next.js website';
              className='w-full';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium mb-1'>;
              Description;
            </label>;
            <textarea
              value={description}
              onChange={e => setDescription(e && e.target.value)}
              placeholder='Describe your project...';
              rows={6}
              className='w-full';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium mb-1'>;
              Budget (USD);
            </label>;
            <input
              type='number'
              value={budget}
              onChange={e => setBudget(e && e.target.value)}
              placeholder='5000';
              className='w-full';
            />;
          </div>;
          <div className='flex gap-2'>;
            <EnhancedButton
              type='button'
              variant='secondary'
              onClick={() => setPreview(p => !p)}
            >;
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>;
            <EnhancedButton type='submit'>Post Job</EnhancedButton>;
          </div>;
        </form>;
        <aside className='border rounded-md p-4'>;
          <h2 className='font-semibold mb-2'>Preview</h2>;
          {preview ? (;
            <div className='space-y-2'>;
              <div>;
                <div className='text-sm opacity-70'>Title</div>;
                <div className='font-medium'>{title || 'Untitled job'}</div>;
              </div>;
              <div>;
                <div className='text-sm opacity-70'>Budget</div>;
                <div className='font-medium'>;
                  {budget ? `$${budget}` : 'Not specified'}
                </div>;
              </div>;
              <div>;
                <div className='text-sm opacity-70'>Description</div>;
                <p className='whitespace-pre-wrap'>;
                  {description || 'No description provided.'}
                </p>;
              </div>;
            </div>;
          ) : (;
            <p className='text-sm opacity-80'>;
              Click Preview to see how your job will appear to talent.;
            </p>          )}
        </aside>;
      </div>;
    </div>;
  );
}
export default PostJob;
const PostJob: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [preview, setPreview] = useState(false);
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <Head>
        <title>Post a Job - Zion</title>
      </Head>
      <h1 className='text-2xl font-semibold'>Post a Job</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        <form className='space-y-4'>
=======
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
const PostJob: NextPage = () => {
  const [title, setTitle] = useState(''),
  const [description, setDescription] = useState(''),
  const [budget, setBudget] = useState(''),
  const [preview, setPreview] = useState(false),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className="space-y-6 pb-20">
      <Head>
        <title>Post a Job - Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold">Post a Job</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={6} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget (USD)</label>
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="5000" className="w-full" />
          </div>
          <div className="flex gap-2">
            <EnhancedButton type="button" variant="secondary" onClick={() => setPreview((p) => !p)}>
<<<<<<< HEAD
              {preview ? 'Edit' : 'Preview'}
=======
              {preview ? 'Edit' : 'Preview'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </EnhancedButton>
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>
<<<<<<< HEAD
        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          {preview ? (
            <div className="space-y-2">
              <div>
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
=======
<<<<<<< HEAD
        <aside className='border rounded-md p-4'>
          <h2 className='font-semibold mb-2'>Preview</h2>
=======
        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {preview ? (
            <div className="space-y-2">
              <div>
<<<<<<< HEAD
                <div className='text-sm opacity-70'>Title</div>
                <div className='font-medium'>{title |'Untitled job'}</div>
=======
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
              <div>
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
<<<<<<< HEAD
                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>
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

          )}
        </aside>
      </div>
    </div>
  )
};
export default PostJob;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Head from 'next / head';
import {useState} from 'react';
import EnhancedButton from '../../components / ui / EnhancedButton';
      <Head>;
        <title > Post a Job - Zion</title>;
      </Head>;
      <h1 className='text - 2xl font - semibold'>Post a Job</h1>;
      <div className='grid md:grid - cols - 2 gap - 6'>;
        <form className='space - y-4'>;
          <div>;
            <label className='block text - sm font - medium mb - 1'>Title</label>;
            <input;
              value={title}
              on_change={e => set_title (e.target.value)}
              placeholder='e.g., Build a Next.js website';
              className='w - full';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium mb - 1'>;
              Description;
            </label>;
            <textarea;
              value={description}
              on_change={e => set_description (e.target.value)}
              placeholder='Describe your project...';
              rows={6}
              className='w - full';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium mb - 1'>;
              Budget (USD);
            </label>;
            <input;
              type='number';
              value={budget}
              on_change={e => set_budget (e.target.value)}
              placeholder='5000';
              className='w - full';
            />;
          </div>;
          <div className='flex gap - 2'>;
            <EnhancedButton;
              type='button';
              variant='secondary';
              on_click={() => set_preview (p => !p)}
            >;
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>;
            <EnhancedButton type='submit'>Post Job</EnhancedButton>;
          </div>;
        </form>;
        <aside className='border rounded - md p - 4'>;
          <h2 className='font - semibold mb - 2'>Preview</h2>;
          {preview ? (
            <div className='space - y-2'>;
              <div>;
                <div className='text - sm opacity - 70'>Title</div>;
                <div className='font - medium'>{title || 'Untitled job'}</div>;
              </div>;
              <div>;
                <div className='text - sm opacity - 70'>Budget</div>;
                <div className='font - medium'>;
                  {budget ? `$${budget}` : 'Not specified'}
                </div>;
              </div>;
              <div>;
                <div className='text - sm opacity - 70'>Description</div>;
                <p className='whitespace - pre - wrap'>;
                  {description || 'No description provided.'}
                </p>;
              </div>;
            </div>) : (
            <p className='text - sm opacity - 80'>;
              Click Preview to see how your job will appear to talent.;
            </p>          )}
        </aside>;
      </div>;
    </div>);
}
;
=======



export default PostJob;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
                <div className='text-sm opacity-70'>Description</div>
                <p className='whitespace-pre-wrap'>
                  {description |'No description provided.'}
                </p>
              </div>
            </div>
          ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <p className='text-sm opacity-80'>
              Click Preview to see how your job will appear to talent.
            </p>          )}
        </aside>
      </div>
    </div>
  );
}
export default PostJob;

=======
<<<<<<< HEAD
                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </aside>;
      </div>;
    </div>;
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default PostJob;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
