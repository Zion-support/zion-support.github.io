import React from 'react'

export default function Footer() {
  return (
    <div>

    <footer>
  
      <div>
  
        <div>
  
          <div>
  
            <div>
  
              <div>
  
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p>
  
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
          </div>

          <div>
  
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
  
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-gray-400 hover:text-white transition-colors">Micro SAAS</Link></li>
            </ul>
          </div>

          <div>
  
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
  
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
  
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div>
  
              <div>
  
                <Mail>
  
                <span className="text-gray-400">info@ziontechgroup.com</span>
              </div>
              <div>
  
                <Phone>
  
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div>
  
                <MapPin>
  
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div>
  
          <p>
  
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
