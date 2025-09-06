

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
