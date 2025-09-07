<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD:pages/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx

      <Head>
        <title>Post a Job - Zion</title>
      </Head>
<<<<<<< HEAD:pages_backup/jobs/post.tsx
      <h1 className='text-2xl font-semibold'>Post a Job</h1>
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/post.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const PostJob: NextPage;
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/jobs/post.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/post.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className='grid md:grid-cols-2 gap-6'>
        <form className='space-y-4'>
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
=======
      <h1 className='text-2xl font-semibold'>Post a Job</h1>'
      <div className='grid md:grid-cols-2 gap-6'>'
        <form className='space-y-4'>'
import type { NextPage } from 'next','
import Head from 'next/head','
import { useState } from 'react','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
import EnhancedButton from '../../components/ui/EnhancedButton',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='grid md:grid-cols-2 gap-6'>
        <form className='space-y-4'>
import type { NextPage } from 'next',;
import Head from 'next/head',;
import { useState } from 'react',;
import EnhancedButton from '../../components/ui/EnhancedButton',;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx


<<<<<<< HEAD:pages_backup/jobs/post.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx



;
      <Head>;
        <title>Post a Job - Zion</title>;
      </Head>;
'
      <h1 className='text-2xl font-semibold'>Post a Job</h1>;
'
      <div className='grid md:grid-cols-2 gap-6'>;'
        <form className='space-y-4'>;
          <div>;'
            <label className='block text-sm font-medium mb-1'>Title</label>;
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <input
=======






            <input;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
              value={title}
              onChange={e => setTitle(e && e.target.value)}'
              placeholder='e && e.g., Build a Next && Next.js website';'
              className='w-full';
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium mb-1'>;
              Description;
            </label>;
            <textarea;
              value={description}
              onChange={e => setDescription(e && e.target.value)}'
              placeholder='Describe your project...';
              rows={6}'
              className='w-full';
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium mb-1'>;
              Budget (USD);
            </label>;
            <input'
              type='number'
              value={budget}
              onChange={e => setBudget(e && e.target.value)}'
              placeholder='5000';'
              className='w-full';
            />;
          </div>;'
          <div className='flex gap-2'>;
            <EnhancedButton'
              type='button''
              variant='secondary'
              onClick={() => setPreview(p => !p)}
            >;'
              {preview ? 'Edit' : 'Preview'}
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx





<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
const PostJob: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
=======

const PostJob: NextPage = () => {'
  const [title, setTitle] = useState('');'
  const [description, setDescription] = useState('');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
  const [budget, setBudget] = useState('');
  const [preview, setPreview] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="space-y-6 pb-20">
      <Head>
        <title>Post a Job - Zion</title>
      </Head>
"
      <h1 className="text-2xl font-semibold">Post a Job</h1>
"
      <div className="grid md:grid-cols-2 gap-6">"
        <form className="space-y-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          <div>"
            <label className="block text-sm font-medium mb-1">Title</label>"
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Build a Next.js website" className="w-full" />
          </div>
          <div>"
            <label className="block text-sm font-medium mb-1">Description</label>"
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your project..." rows={6} className="w-full" />
          </div>
          <div>"
            <label className="block text-sm font-medium mb-1">Budget (USD)</label>"
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="5000" className="w-full" />
          </div>"
          <div className="flex gap-2">"
            <EnhancedButton type="button" variant="secondary" onClick={() => setPreview((p) => !p)}>
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </EnhancedButton>
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>
<<<<<<< HEAD
<<<<<<< HEAD

        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          {preview ? (
            <div className="space-y-2">
              <div>

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {preview ? (
            <div className="space-y-2">
              <div>
                <div className='text-sm opacity-70'>Title</div>
                <div className='font-medium'>{title |'Untitled job'}</div>
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </EnhancedButton>"
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx




"
        <aside className="border rounded-md p-4">"
          <h2 className="font-semibold mb-2">Preview</h2>



          {preview ? ("
            <div className="space-y-2">
=======

<aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>

          {preview ? (
            <div className="space-y-2">
              <div>

                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
              </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
              <div>
"
                <div className="text-sm opacity-70">Title</div>'"
                <div className="font-medium">{title || 'Untitled job'}</div>

<<<<<<< HEAD:pages_backup/jobs/post.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
              </div>
              <div>"
                <div className="text-sm opacity-70">Budget</div>'"
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='text-sm opacity-70'>Description</div>
                <p className='whitespace-pre-wrap'>
                  {description |'No description provided.'}
                </p>
              </div>
            </div>
          ) : (
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
            <p className='text-sm opacity-80'>
              Click Preview to see how your job will appear to talent.
            </p>          )}
        </aside>
      </div>
    </div>
  );
}
            </p>
          )}
        </aside>
      </div>
    </div>
);
};

export default PostJob;
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/jobs/post.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx

                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
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
<<<<<<< HEAD
export default PostJob;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx


<<<<<<< HEAD:pages_backup/jobs/post.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next / head';
import {useState} from 'react';
=======
'
import Head from 'next / head';'
import {useState} from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
import EnhancedButton from '../../components / ui / EnhancedButton';
      <Head>;
        <title > Post a Job - Zion</title>;
      </Head>;'
      <h1 className='text - 2xl font - semibold'>Post a Job</h1>;'
      <div className='grid md:grid - cols - 2 gap - 6'>;'
        <form className='space - y-4'>;
          <div>;'
            <label className='block text - sm font - medium mb - 1'>Title</label>;
            <input;
              value={title}
              on_change={e => set_title (e.target.value)}'
              placeholder='e.g., Build a Next.js website';'
              className='w - full';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium mb - 1'>;
              Description;
            </label>;
            <textarea;
              value={description}
              on_change={e => set_description (e.target.value)}'
              placeholder='Describe your project...';
              rows={6}'
              className='w - full';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium mb - 1'>;
              Budget (USD);
            </label>;
            <input;'
              type='number';
              value={budget}
              on_change={e => set_budget (e.target.value)}'
              placeholder='5000';'
              className='w - full';
            />;
          </div>;'
          <div className='flex gap - 2'>;
            <EnhancedButton;'
              type='button';'
              variant='secondary';
              on_click={() => set_preview (p => !p)}
            >;'
              {preview ? 'Edit' : 'Preview'}
            </EnhancedButton>;'
            <EnhancedButton type='submit'>Post Job</EnhancedButton>;
          </div>;
        </form>;'
        <aside className='border rounded - md p - 4'>;'
          <h2 className='font - semibold mb - 2'>Preview</h2>;
          {preview ? ('
            <div className='space - y-2'>;
              <div>;'
                <div className='text - sm opacity - 70'>Title</div>;'
                <div className='font - medium'>{title || 'Untitled job'}</div>;
              </div>;
              <div>;'
                <div className='text - sm opacity - 70'>Budget</div>;'
                <div className='font - medium'>;'`
                  {budget ? `$${budget}` : 'Not specified'}
                </div>;
              </div>;
              <div>;'
                <div className='text - sm opacity - 70'>Description</div>;'
                <p className='whitespace - pre - wrap'>;'
                  {description || 'No description provided.'}
                </p>;
              </div>;
            </div>) : ('
            <p className='text - sm opacity - 80'>;
              Click Preview to see how your job will appear to talent.;
            </p>          )}
        </aside>;
      </div>;
    </div>);
}
;
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD:pages_backup/jobs/post.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
<<<<<<< HEAD:pages_backup/jobs/post.tsx
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx






export default PostJob;
;


export default PostJob;

<<<<<<< HEAD:pages_backup/jobs/post.tsx
                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm opacity-80">Click Preview to see how your job will appear to talent.</p>
          )  } catch (error) {
=======

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
const PostJob: NextPage = () => {
  const [title, setTitle] = useState(''),
  const [description, setDescription] = useState(''),
  const [budget, setBudget] = useState(''),
  const [preview, setPreview] = useState(false),
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
              {preview ? 'Edit' : 'Preview'  } catch (error) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/jobs/post.tsx
        </aside>;
      </div>;
    </div>;
  );
},;
export default PostJob;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default PostJob;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default PostJob;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/jobs/post.tsx
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/jobs/post.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            </EnhancedButton>
            <EnhancedButton type="submit">Post Job</EnhancedButton>
          </div>
        </form>
        <aside className='border rounded-md p-4'>
          <h2 className='font-semibold mb-2'>Preview</h2>
        <aside className="border rounded-md p-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          {preview ? (
            <div className="space-y-2">
              <div>
                <div className='text-sm opacity-70'>Title</div>
                <div className='font-medium'>{title |'Untitled job'}</div>
                <div className="text-sm opacity-70">Title</div>
                <div className="font-medium">{title || 'Untitled job'}</div>
              </div>
              <div>
                <div className="text-sm opacity-70">Budget</div>
                <div className="font-medium">{budget ? `$${budget}` : 'Not specified'}</div>
              </div>
              <div>

export default PostJob;
;
                <div className='text-sm opacity-70'>Description</div>
                <p className='whitespace-pre-wrap'>
                  {description |'No description provided.'}
                </p>
              </div>
            </div>
          ) : (
            <p className='text-sm opacity-80'>
              Click Preview to see how your job will appear to talent.
            </p>          )}
        </aside>
      </div>
    </div>
  );
}
export default PostJob;

                <div className="text-sm opacity-70">Description</div>
                <p className="whitespace-pre-wrap">{description || 'No description provided.'}</p>
              </div>
            </div>
          ) : (
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
export default PostJob;
export default PostJob;
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/jobs/post.tsx
