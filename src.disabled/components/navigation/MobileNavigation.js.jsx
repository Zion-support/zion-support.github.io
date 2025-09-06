

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import _React,{ useState } from react' import { Link } from';';react-router-dom' import { Menu,X,Search,User,Briefcase,HardDrive,Users,Lightbulb } from';';lucide-react' import { Button } from';';@/components/ui/button' const mobileMenuItems = [{ "name": 'Service,s,"icon": <Briefcase: className='w-5 h-5'/,>,"href": '; /services' },''' { "name": 'Talen,t,"icon": <Users: className='w-5 h-5'/,>,"href": '; /talent' },''' { "name": 'Equipmen,t,"icon": <HardDrive: className='w-5 h-5'/,>,"href": '; /equipment' },''' { "name": 'Innovatio,n,"icon": <Lightbulb: className='w-5 h-5'/,>,"href": ';';/category/innovation'}] "export": function MobileNavigation() { const [isOpen,setIsOpen] = useState(false) const toggleMenu = () => { setIsOpen(!isOpen)'';
