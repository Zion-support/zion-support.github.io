
export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 p-4">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/ai-services" className="text-blue-600 hover:text-blue-800">AI Services</a></li>
        <li><a href="/it-services" className="text-blue-600 hover:text-blue-800">IT Services</a></li>
        <li><a href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800">Cloud Infrastructure</a></li>
        <li><a href="/5g-solutions" className="text-blue-600 hover:text-blue-800">5G Solutions</a></li>
      </ul>
    </aside>
  );
}