export default function HomePage(props: any) {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-gray-300 mb-6">AI, cloud, and digital transformation services.</p>
      <div className="flex gap-3">
        <a href="/services" className="px-4 py-2 bg-zion-cyan text-black rounded">Explore Services</a>
        <a href="/pricing" className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded">View Pricing</a>
      </div>
    </div>
  );
}
