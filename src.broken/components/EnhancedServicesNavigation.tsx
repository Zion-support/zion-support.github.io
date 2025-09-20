
const EnhancedServicesNavigation: React.FC = () : JSX.Element => {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<any> (null) ;

        {

                      <div  className="space - y-2">
                        {category.services.map((service, serviceIndex) => (<motion.div
