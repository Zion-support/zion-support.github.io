export default function BrandKit() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Influencer Brand Kit</h1>
      <p>Download assets and messaging to promote Zion AI Marketplace.</p>
      <ul className="list-disc pl-6">
        <li><a className="text-blue-600 underline" href="/brand-kit.txt">Brand Kit (txt)</Link></li>
      </ul>
      <div className="mt-4 p-4 rounded border">
        <h2 className="font-medium mb-2">Smart CTA</h2>
        <p>Invite your AI audience to earn & help them get hired.</p>
      </div>
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231