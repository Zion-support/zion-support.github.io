<<<<<<< HEAD


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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
<<<<<<< HEAD



=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {preview ? (
            <div className="space-y-2">
              <div>

                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <div>
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
<<<<<<< HEAD

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default PostJob;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
