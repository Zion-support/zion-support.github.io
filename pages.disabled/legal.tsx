:pages_backup/legal.tsx
<<<<<<< HEAD:pages/legal.tsx
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/legal.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

:pages_backup/legal.tsx

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/legal.tsx
<<<<<<< HEAD

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/legal.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',
=======

import React from 'react';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/legal.tsx
import SEO from '../components/SEO';
import Link from 'next/link';
export default function LegalPage() {
	return (
		<>
			<SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Legal</h1>
				<ul className="list-disc ml-6 text-gray-300 space-y-2">
					<li><Link href="/privacy" className="text-cyan-400">Privacy Policy</Link></li>
					<li><Link href="/terms" className="text-cyan-400">Terms of Service</Link></li>
					<li><Link href="/cookies" className="text-cyan-400">Cookie Policy</Link></li>
				</ul>
			</div>
		</>
	)
};

export default function LegalPage() {
  return (
    <>
      <SEO
        title='Legal | Zion Tech Group'
        description='Legal resources including privacy policy, terms of service, and cookies.'
        canonical='/legal'
      />
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-6'>Legal</h1>
        <ul className='list-disc ml-6 text-gray-300 space-y-2'>
          <li>
            <Link href='/privacy' className='text-cyan-400'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='/terms' className='text-cyan-400'>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href='/cookies' className='text-cyan-400'>
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
:pages_backup/legal.tsx
<<<<<<< HEAD:pages/legal.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/legal.tsx
