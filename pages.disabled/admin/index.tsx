import Link from 'next/link',;
import Link from 'next/link';


export default function AdminIndex() {
import React from 'react';
export default function Page() {
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className='space-y-2'>
      <h1 className='text-2xl font-semibold'>Admin</h1>
      <ul className='list-disc pl-6'>
        <li>
          <Link href='/admin/partners'>
            <a className='text-blue-600 underline'>Partners</a>
          </Link>
        </li>
      </ul>
    </div>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
