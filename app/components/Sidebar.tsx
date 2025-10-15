export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="/about" className="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="/services" className="text-gray-600 hover:text-gray-800">Services</a></li>
          <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </div>
    </aside>
  );
}
