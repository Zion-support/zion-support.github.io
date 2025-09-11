
import Link from 'next/link';
import Link from 'next/link',;
import Link from 'next/link';
=======

export default function AdminIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <ul className="list-disc pl-6">
        <li><Link href="/admin/partners"><a className="text-blue-600 underline">Partners</a></Link></li>
      </ul>
    </div>
  )
};

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
}>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
