                <Linkedin className='w-5 h-5' />
              </a>
              <a
                href='https://twitter.com/ziontechgroup'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <span className='text-lg'>🐦</span>
              </a>
              <a
                href='https://github.com/ziontechgroup'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Github className='w-5 h-5' />
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              {services.slice(0, 6).map(service => (
                <li key={service.name}>
                  <Link to={service.href}>
                    <span className='text-gray-300 hover:text-white transition-colors'>
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Products</h3>
            <ul className='space-y-2'>
              {products.slice(0, 6).map(product => (
                <li key={product.name}>
                  <Link to={product.href}>
                    <span className='text-gray-300 hover:text-white transition-colors'>
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map(item => (
                <li key={item.name}>
                  <Link to={item.href}>
                    <span className='text-gray-300 hover:text-white transition-colors'>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='flex items-center space-x-3'>
              <span className='text-blue-400 text-lg'>📧</span>
              <div>
                <p className='text-sm text-gray-400'>Email</p>
                <p className='text-white'>info@ziontechgroup.com</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <span className='text-blue-400 text-lg'>📞</span>
              <div>
                <p className='text-sm text-gray-400'>Phone</p>
                <p className='text-white'>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <span className='text-blue-400 text-lg'>📍</span>
              <div>
                <p className='text-sm text-gray-400'>Address</p>
                <p className='text-white'>123 Tech Street, Innovation City</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-300 text-sm'>
              &copy, {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link to='/legal/privacy'>
                <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                  Privacy Policy
                </span>
              </Link>
              <Link to='/legal/terms'>
                <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                  Terms of Service
                </span>
              </Link>
              <Link to='/legal/cookies'>
                <span className='text-gray-400 hover:text-white text-sm transition-colors'>
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
