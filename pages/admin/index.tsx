
<<<<<<< HEAD
import Link from 'next/link';


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
