
const EnhancedServicesNavigation: React.FC = () : JSX.Element => {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<any> (null) ;

        {                            key={service.title}
                            initial = {

  { opacity: 0,
  x: -10

}}
                            animate = {

  { opacity: 1,
  x: 0

}}
                            transition = {

  { duration: 0.2,
  delay: serviceIndex * 0.05

}}"
                            className="flex items-center justify-between p-2 rounded bg-white/20 hover:bg-white/30 transition-colors duration-200"
                          >"
                            <div className="flex-1">"
                              <div className="font-medium text-sm">{service.title}</div>"
                              <div className="text-xs opacity-80">{service.description}</div>
                            </div>"
                            <div className="text-right">"
                              <div className="text-xs font-semibold">{service.pricing}</div>
                            </div>
                          </motion.div>) ) }
                      </div>
                    </div>
                  </motion.div>) ) }
              </div>

              {/* Quick Links */}"
              <div className="border-t border-gray-200 pt-6">"
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Quick Access
                </h4>"
                <div className="grid grid-cols-2 md: grid-cols-4 gap-4">
                  {quickLinks.map((link, index)  => (
                    <motion.div
                      key={link.title}
                      initial = {

  { opacity: 0,
  y: 20

}}
                      animate = {

  { opacity: 1,
  y: 0

}}
                      transition = {

  { duration: 0.3,
  delay: index * 0.1

}}
                    >
                      <Link
                        to={link.url}
                        onClick={() => setIsOpen(false)}"
                        className="block p-4 text-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
                      >"
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                          {link.icon}
                        </div>"
                        <div className="font-medium text-gray-900 text-sm mb-1">
                          {link.title}
                        </div>"
                        <div className="text-xs text-gray-600">
                          {link.description}
                        </div>
                      </Link>
                    </motion.div>) ) }
                </div>
              </div>

              {/* Contact Information */}"
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">"
                <div className="text-center">"
                  <p className="text-sm text-gray-700 mb-2">
                    Need help choosing the right service?
                  </p>"
                  <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">"
                    <span className="text-gray-600">"
                      📱 <span className="font-medium">+1 302 464 0950</span>
                    </span>"
                    <span className="text-gray-600">"
                      ✉️ <span className="font-medium">kleber@ziontechgroup.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}"
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )};
    </div>;
  )};

export default EnhancedServicesNavigation;'"`