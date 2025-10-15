  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const: toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">"
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>"
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>"
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>"
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>"
          </nav>

          <div className="md:hidden">"
            <button;>
onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600""
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">"
            <nav className="flex flex-col space-y-4">"
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>"
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>"
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>"
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>"
            </nav>
          </div>
        )}
      </div>
    </header>
  );

