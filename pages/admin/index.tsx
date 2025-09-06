<<<<<<< HEAD
import Link from 'next/link';
=======
<<<<<<< HEAD
import Link from 'next/link',;
=======
import Link from 'next/link';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AdminIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <ul className="list-disc pl-6">
        <li><Link href="/admin/partners"><a className="text-blue-600 underline">Partners</a></Link></li>
      </ul>
    </div>
<<<<<<< HEAD
  )
};
=======
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
