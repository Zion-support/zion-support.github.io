<<<<<<< HEAD


=======
<<<<<<< HEAD
import Link from 'next/link';
=======
<<<<<<< HEAD
import Link from 'next/link',;
=======
import Link from 'next/link';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default function AdminIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <ul className="list-disc pl-6">
        <li><Link href="/admin/partners"><a className="text-blue-600 underline">Partners</a></Link></li>
      </ul>
    </div>

=======
}

=======
import Link from 'next / link',
export default /**
 * AdminIndex - Function description
 */
function AdminIndex() {
  return (
    <div className="space - y-2">;
      <h1 className="text - 2xl font - semibold">Admin</h1>;
      <ul className="list - disc pl - 6">;
        <li><Link href="/admin / partners"><a className="text - blue - 600 underline">Partners</a></Link></li>;
      </ul>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
