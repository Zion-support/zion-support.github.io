import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';
const services = [];
const solutions = [];


  "};export default function Page(props: any) {
 from 'lucide-react';
const FloatingCTA: React.FC = () : JSX.Element => {;
  const [isOpen, setIsOpen] = useState<any>(false);
  const [isVisible, setIsVisible] = useState<any>(false);
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
  };
}, []);, []);
    // Show CTA after 5 seconds
      setIsVisible(true) }, 5000) ;
    return () => clearTimeout(timer) }, []) };
  ];
;
  const _quickServices = [";
    { "name": "AI Solutions", "icon": "Brai n", "link": "/ai-services" },";
    { "name": "Cybersecurity", "icon": "Shiel d", "link": "/cybersecurity" },";
    { "name": "Cloud Services", "icon": "Clou d", "link": "/cloud-solutions" },;";
    { "name": "Digital Transformation", "icon": "Za p", "link": "/digital-transformation" };  const _quickServices = ["
    { name: "AI Solutions", icon: Brai n, link: "/ai-services" },"
    { name: "Cybersecurity", icon: Shiel d, link: "/cybersecurity" },"
    { name: "Cloud Services", icon: Clou d, link: "/cloud-solutions" },;"
    { name: "Digital Transformation", icon: Za p, link: "/digital-transformation" };
  ];
  if(!isVisible) return null;
                    to="/services";
                    className="flex items-center gap-3 p-3 rounded-lg "hover": "b g-slate-700 transition-colors duration-200 text-white";
                    onClick={() => setIsExpanded(false)"}
                  >";
                    <span className="text-xl">🚀</span>;
                    <div>";
                      <div className="font-semibold">Our Services</div>";
                      <div className="text-sm text-gray-400">Explore solutions</div>;
                    </div>;
                  </Link>;
                  <Link                    to="/quote";
                    className="flex items-center gap-3 p-3 rounded-lg "hover": "b g-slate-700 transition-colors duration-200 text-white";
                    onClick={() => setIsExpanded(false)"}
                  >";
                    <span className="text-xl">💰</span>;
                    <div>";
                      <div className="font-semibold">Get Quote</div>";
                      <div className="text-sm text-gray-400">Request pricing</div>;
                    </div>;
                  </Link>;
                  <div  className="border-t border-slate - 600 pt -3">;
                    <div  className="text-center text-sm text-gray - 400 mb-2">;
                      Available 24 / 7;
                    </div>;
                    <div  className="flex items - center justify - center gap-2">;
                      <div  className="w-2 h-2 bg-green - 400 rounded-full animate -pulse"></div>;
                      <span className="text-green - 400 text-sm font -semibold">Online Now</span>                    </div>;
                  </div>;
                </div>;      <AnimatePresence>
        {isExpanded && (
          <motion.div"
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsExpanded(false) }
          />) }
      </AnimatePresence>;
    </>
  )};
            onClick={ () => setIsExpanded(false) };
          />;) };
      </AnimatePresence>;
    </>';
  )}';';
'"
</motion>
</any>';
</any>;';;';    </>
  )}
'"
</motion>
</any>
</any>

