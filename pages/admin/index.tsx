<<<<<<< HEAD
import Link from 'next/link';
import Link from 'next/link',;
import Link from 'next/link';
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
