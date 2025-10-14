import React from 'react'; import {X }from 'lucide-react'; import {Home }from 'lucide-react'; import {Users }from 'lucide-react'; import {Settings }from 'lucide-react'; import {Mail }from 'lucide-react'; import {Phone }from 'lucide-react'; import {Map Pin }from 'lucide-react'; import {Link }from 'react-router-dom'; interface Sidebar Props {is Open: boolean; on Close: ( )=> void; const Sidebar: React.FC<Sidebar Props> = ({is Open, on Close } )=> {const navigation Items = [ ]{name: 'Home', href: '/', icon: Home ; }, {name: 'About', href: '/about', icon: Users ; }, {name: 'Services', href: '/services', icon: Settings ; }, {name: 'Contact', href: '/contact', icon: Mail ; } ]; return (
    <>/* Overlay */ }{is Open && (<div className="fixedinset 0 bg blackbg-opacity-5 0 z-4 0 lg:hidden"; on Click= {on Close }/> )}{/* Sidebar */ }<div className= {` fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50 $ {is Open ? 'translate-x-0' : '-translate-x-full' }lg: translate-x-0 lg:static lg:inset-0; ` }> <div className="flexitems centerjustify betweenp-4 border-bborder-slate-7 0 0"> <h2 className="text xlfont boldtext-white">Zion Tech Group</h2> <button on Click= {on Close }className="text gray 4 0 0 hover:text-whitelg:hidden"; > <X className="w 6 h 6"/> </button> 
          </div> 
          </div> <nav className="mt 6"> <ul className="space y 2 px-4"> {navigation Items.map ( (item )=> {const Icon = item.icon; <li key= {item.name }> <Link to= {item.href }on Click= {on Close }className="fle x items centerpx 4 py-3 text-gray-3 0 0 hover:bg-slate-7 0 0 hover:text-whiterounded-lgtransition-colors"; > <Icon className="w 5 h 5 mr-3"/> {item.name
    </>
  ); } )}</ul> </nav> <div className="absolutebottom 4 left 4 right-4"> <div className="bg slate 7 0 0 rounded-lgp-4"> <div className="flexitems centertext smtext-gray-3 0 0 mb-2"> <Map Pin className="w 4 h 4 mr-2"/> <span>Contact Info</span> <div className="flexitems center text sm text-gray-3000 mb-1"> <Phone className="w 4 h 4 mr-2"/> <span>+1 (555 )123-4567</span> <div className="flexitems center text sm text-gray-3000"> <Mail className="w 4 h 4 mr-2"/> <span>info@ziontechgroup.com</span> 
          
        </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> 
          </div> 
    </>
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg: translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flexitems-centerjustify-betweenp-4 border-bborder-slate-7 0 0">
          <h2 className="text-xlfont-bold text-white">Zion Tech Group</h2>
          <button
            onClick={onClose}
            className="text-gray-4 0 0 hover:text-whitelg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="fle x items-centerpx-4 py-3 text-gray-3 0 0 hover:bg-slate-7 0 0 hover:text-whiterounded-lgtransition-colors"
                  >
                    <Icon className="w -5 h-5 mr-3" />
                    {item.name}
)
            })}
          </ul>
        
        <div className="absolutebottom-4 left-4 right-4">
          <div className="bg-slate-7 0 0 rounded-lg p-4">
            <div className="flexitems-centertext-smtext-gray-3 0 0 mb-2">
              <MapPin className="w -4 h-4 mr-2" />
              <span>Contact Info</span>
            <div className="flexitems-center text-sm text-gray-300 mb-1">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            <div className="flexitems-center text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
            </div>

  )
}
export default Sidebar
</Link>
</SidebarProps>
}
</div>
</li>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>
=======
  ); }; export default Sidebar;
