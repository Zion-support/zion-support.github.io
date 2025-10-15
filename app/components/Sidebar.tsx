

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 min-h-screen">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/ai-services" className="text-blue-600 hover:underline">AI Services</a></li>
          <li><a href="/it-services" className="text-blue-600 hover:underline">IT Services</a></li>
          <li><a href="/5g-solutions" className="text-blue-600 hover:underline">5G Solutions</a></li>
          <li><a href="/micro-saas-solutions" className="text-blue-600 hover:underline">Micro SaaS</a></li>
        </ul>
      </div>
    </aside>
  );
}
