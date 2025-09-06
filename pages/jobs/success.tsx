<<<<<<< HEAD
}
import Link from 'next / link',
export default /**
 * JobSuccessPage - Function description
 */
function JobSuccessPage() {
  return (
    <div className="max - w-xl text - center mx - auto py - 16">;
      <div className="mx - auto mb - 6 h - 20 w - 20 rounded - full bg - green - 100 dark: bg - green - 900 / 30 flex items - center justify - center">;
        <span className="text - 3xl">✅</span>;
      </div>;
      <h1 className="text - xl font - semibold mb - 2">Job posted successfully</h1>;
      <p className="text - sm opacity - 80 mb - 6">We are matching your job with top talent. You will be notified as applications come in.</p>;
      <div className="flex gap - 2 justify - center">;
        <Link href="/dashboard"><a className="px - 4 py - 2 rounded - md bg - blue - 600 text - white">Go to Dashboard</a></Link>;
        <Link href="/talent"><a className="px - 4 py - 2 rounded - md border">Browse Talent</a></Link>;
      </div>;
    </div>);
}
      </div>
      <h1 className=&quot;text-xl font-semibold mb-2&quot;>Job posted successfully</h1>
      <p className=&quot;text-sm opacity-80 mb-6&quot;>We are matching your job with top talent. You will be notified as applications come in.</p>
      <div className=&quot;flex gap-2 justify-center&quot;>
        <Link href=&quot;/dashboard&quot;><a className=&quot;px-4 py-2 rounded-md bg-blue-600 text-white&quot;>Go to Dashboard</Link></Link>
        <Link href=&quot;/talent&quot;><a className=&quot;px-4 py-2 rounded-md border&quot;>Browse Talent</Link></Link>
      </div>
    </div>
  )
}

=======
import Link from 'next/link';
export default function JobSuccessPage() {
  return (
    <div className="max-w-xl text-center mx-auto py-16">
      <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-green-100 dark: bg-green-900/30 flex items-center justify-center">
        <span className="text-3xl">✅</span>
      </div>
      <h1 className="text-xl font-semibold mb-2">Job posted successfully</h1>
      <p className="text-sm opacity-80 mb-6">We are matching your job with top talent. You will be notified as applications come in.</p>
      <div className="flex gap-2 justify-center">
<<<<<<< HEAD
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go to Dashboard</a></Link>
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</a></Link>
<<<<<<< HEAD
=======
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go to Dashboard</Link></Link>
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</Link></Link>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      </div>
    </div>
  )
};
=======
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go to Dashboard</Link></Link>
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</Link></Link>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
    </div>
  )
import Link from 'next/link';
export default function JobSuccessPage(req, res) {
  try {
  return (;
    <div className="max-w-xl text-center mx-auto py-16">;
      <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-green-100 dark: bg-green-900/30 flex items-center justify-center">;
        <span className="text-3xl">✅</span>;
      </div>;
      <h1 className="text-xl font-semibold mb-2">Job posted successfully</h1>;
      <p className="text-sm opacity-80 mb-6">We are matching your job with top talent. You will be notified as applications come in.</p>;
      <div className="flex gap-2 justify-center">;
        <Link href="/dashboard"><a className="px-4 py-2 rounded-md bg-blue-600 text-white">Go to Dashboard</a></Link>;
        <Link href="/talent"><a className="px-4 py-2 rounded-md border">Browse Talent</a></Link>;
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
