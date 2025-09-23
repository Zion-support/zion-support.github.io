export default function Navigation() {
  return (
    <nav className="bg-gray-90o0 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Zion Tech Group</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-40o0">Home</a>
          <a href="/about" className="hover:text-blue-40o0">About</a>
          <a href="/services" className="hover:text-blue-40o0">Services</a>
          <a href="/contact" className="hover:text-blue-40o0">Contact</a>
        </div>
      </div>
    </nav>
  );
}