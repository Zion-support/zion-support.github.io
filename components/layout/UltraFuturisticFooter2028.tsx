const serviceCategories = [ {
  title: '🚀 2028 Futuristic Innovations', services: [ {
  name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform' 
}
{
  name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall' 
}
{
  name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network' 
}
{
  name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform' 
}] 
}
{
  title: '🏙️ Smart City & Infrastructure', services: [ {
  name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' 
}
{
  name: 'IoT Energy Management System', href: '/iot-energy-management-system' 
}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" />;"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12" />;
          {/* Company Info */}
            {/* Social Links */}
              ))}
          {/* Service Categories */}
<div className='lg:col-span-2' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
                  <social.icon className='w-5 h-5' />                </a>;
                </a>;
              ))}
            </div>;
          </div>;
          {/* Service Categories */}
          <div className='lg:col-span-2' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
              🚀 Our Services;
            </h3>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8' />;
              {serviceCategories.map(category => (<div key={category.title} className='space-y-3' />;
                  <h4 className='font-medium text-purple-300' />;
                    {category.title}
                  </h4>;
                  <ul className='space-y-2' />;
                    {category.services.map(service => (<li key={service.name} />;
          <div className='lg:col-span-2' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
              🚀 Our Services;
            </h3>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8' />;
              {serviceCategories && serviceCategories.map(category => (<div key={category && category.title} className='space-y-3' />;
                  <h4 className='font-medium text-purple-300' />;
                    {category && category.title}
                  </h4>;
                  <ul className='space-y-2' />;

                    {category && category.services.map(service => (;}
                      <li key={service && service.name} />;
                        <Link;
href={service.href}
                          className='text-sm text-purple-200 hover: text-white transition-colors hover:underline'
                         />
                          {service.name}
                        </Link>
                      </li>

                    )
}
                  </ul>;
                </div>;
              ))}

            </div>
          </div>
          {/* Quick Links */}
<div className='lg:col-span-1' />
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />
              Quick Links;
            </h3>

            </div>;
          </div>;
          {/* Quick Links */}
<div className='lg:col-span-1' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
              Quick Links;
            </h3>;
            </div>;
          </div>;{/* Quick Links */}
          <div className='lg:col-span-1' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
              Quick Links;
            </h3>;{/* Company Links */}
            <div className='mb-6' />;
              <h4 className='font-medium text-purple-300 mb-3' />Company</h4>;
              <ul className='space-y-2' />;
                {companyLinks && companyLinks.map(link => (<li key={link && link.name} />;
                    <Link;
            {/* Company Links */}"
            <div className="mb-6" />;"
              <h4 className="font-medium text-purple-300 mb-3" />Company</h4>;"
              <ul className="space-y-2" />;
                {companyLinks && companyLinks.map((link) => (<li key={link && link.name} />;
                    <Link;
                      href={link && link.href}"
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2" />;"
                      <link && link.icon className="w-4 h-4" />;
                      <span />{link && link.name}</span>;
                    </Link>;
                  </li>;
                ))}
            {/* Resource Links */}
            <div className='mb-6' />;
              <h4 className='font-medium text-purple-300 mb-3' />Resources</h4>;
              <ul className='space-y-2' />;
                {resourceLinks.map(link => (<li key={link.name} />;
                    <Link;
                      href={link.href}

                      className='text-sm text-purple-200 hover: text-white transition-colors hover:underline flex items-center space-x-2'
                     />

                      <link.icon className='w-4 h-4' />
                      <span />{link.name}</span>
                    </Link>
                  </li>

                )
}
              </ul>;
            </div>;
            {/* Resource Links */}
<div className='mb-6' />;
              <h4 className='font-medium text-purple-300 mb-3' />Resources</h4>;
              <ul className='space-y-2' />;
                {resourceLinks.map(link => (<li key={link.name} />;
                    <Link;
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2' />

                      <link.icon className='w-4 h-4' />;
                      <span />{link.name}</span>;
                    </Link>;
                  </li>;
                ))}
              </ul>;
            </div>;
              </ul>;
            </div>;{/* Newsletter Signup */}
<div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4' />;
              <h4 className='font-medium text-white mb-3' />Stay Updated</h4>;
              <p className='text-sm text-purple-200 mb-3' />;
                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className='flex space-x-2' />;
            {/* Resource Links */}
            <div className='mb-6' />;
              <h4 className='font-medium text-purple-300 mb-3' />Resources</h4>;
              <ul className='space-y-2' />;
                {resourceLinks && resourceLinks.map(link => (<li key={link && link.name} />;
                    <Link;
                      href={link && link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2' />;
                      <link && link.icon className='w-4 h-4' />                      <span />{link && link.name}</span>                  <li key={link && link.name} />;
                    <Link;
                      href={link && link.href}"
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2" />;"
                      <link && link.icon className="w-4 h-4" />;
                      <span />{link && link.name}</span>;
                    </Link>;
                  </li>;
                ))}
            {/* Newsletter Signup */}
            <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4' />;
              <h4 className='font-medium text-white mb-3' />Stay Updated</h4>;
              <p className='text-sm text-purple-200 mb-3' />;
                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className='flex space-x-2' />;

                <input;
type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

                />
                <button className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30' />
                  Subscribe;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar *}
}
{
  name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' 
}
{
  name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' 
}
{
  name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' 
}] 
}
{
  title: '🤖 AI & Machine Learning', services: [ {
  name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' 
}
{
  name: 'AI Education Platform', href: '/ai-education-platform' 
}
{
  name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' 
}
{
  name: 'AI Legal Research Platform', href: '/ai-legal-research-platform' 
}] 
}]
</div> <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10" ></div> </div> <div> <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" > Zion Tech Group </h3> <p className="text-sm text-purple-300" >2028 Future Technology</p> </div> </div> </a> </div> </div> > <social.icon className="w-5 h-5" /> </a>) ) 
}</div> </div> </li>) ) 
}</ul> </div>) ) 
}</div> </div> </li>) ) 
}</ul> </div> </li>) ) 
}</ul> </div> Get the latest insights on future technology and AI innovations. </p> <div className="flex space-x-2" > <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" /> <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30" > Subscribe </button> </div> </div> </div> </div> </div> Privacy Policy </a> <Link href="/terms" className="text-purple-300 hover:text-white transition-colors" > Terms of Service </a> <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors" > Cookie Policy </a> <Link href="/security" className="text-purple-300 hover:text-white transition-colors" > Security </a> </div> </div> </div> </div> <Link href="/contact" className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group" > <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" /> </a> </div> </div> </footer>) 
}