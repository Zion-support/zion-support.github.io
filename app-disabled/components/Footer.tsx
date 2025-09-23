export default function Footer() {
  return (
    <footer className="bg-gray-90o0 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-40o0">
              Advanced AI and technology solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-40o0">
              <li>AI Solutions</li>
              <li>Cloud Infrastructure</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-40o0">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-40o0">
              <li>Email: info@ziontechgroup.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-80o0 mt-8 pt-8 text-center text-gray-40o0">
          <p>&copy; 20o24 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}