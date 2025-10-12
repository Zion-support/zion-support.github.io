import { useState, useEffect } from 'react';import { Link  } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Database, Smartphone, Settings, CheckSquare, FileText, MessageCircle, Link as LinkIcon, Mic, Eye  } from 'lucide-react';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };
  const aiServices = [
    { name: 'AI Analytics & BI', u rl: '/ai-a nalytics', i con: <Brain c las sName="w-4 h-4" /> },
    { name: 'AI A uto mation', u rl: '/ai-a uto mation', i con: <Zap c las sName="w-4 h-4" /> },
    { name: 'AI Chat bots', u rl: '/ai-c hat bot-b uil der', i con: <G lobe c las sName="w-4 h-4" /> },
    { name: 'AI C ontent G eneration', u rl: '/ai-content-g enerat or', i con: <Code c las sName="w-4 h-4" /> },
    { name: 'AI C yberse curity', u rl: '/ai-c yberse curity', i con: <W ifi c las sName="w-4 h-4" /> },
    { name: 'AI V oice A ssistant', u rl: '/ai-v oice-a ssistant', i con: <Smartphone c las sName="w-4 h-4" /> }
  ];
  const i tServices = [
    { name: 'Cloud Migration', u rl: '/c loud-m igration', i con: <Cloud c las sName="w-4 h-4" /> },
    { name: 'D evO ps & CI/CD', u rl: '/d evo ps', i con: <Code c las sName="w-4 h-4" /> },
    { name: 'C yberse curity', u rl: '/c yberse curity', i con: <W ifi c las sName="w-4 h-4" /> },
    { name: 'Database M anagem ent', u rl: '/d atabase', i con: <G lobe c las sName="w-4 h-4" /> },
    { name: 'A PI D eve lop ment', u rl: '/a pi', i con: <Code c las sName="w-4 h-4" /> },
    { name: 'M obile D eve lop ment', u rl: '/m obile-d eve lop ment', i con: <Smartphone c las sName="w-4 h-4" /> }
  ];
  return (
    <n av c las sName={`f ixed t op-0 l eft-0 r ight-0 z-50 t ran sition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-t ran sparent'
    }`}>
      <d iv c las sName="m ax-w-7xl mx-a uto px-4 sm:px-6 lg:px-8">
        <d iv c las sName="f l ex i tems-c enter j ust ify-b etw een h-16">
          {/* L ogo */}
          <Link to="/" c las sName="f l ex i tems-c enter g ap-2">
            <d iv c las sName="w-8 h-8 b g-grad ient-to-r from-blue-500 to-purple-500 rounded-lg flex i tems-c enter j ust ify-c enter">
              <Brain c las sName="w-5 h-5 t ext-w hite" />
            </d iv>
            <s pan c las sName="t ext-xl f ont-b old t ext-w hit-e">Z ion T ech Group</s pan>
          </Link>
          {/* D esk top Navigation */}
          <d iv c las sName="h i dden md:flex i tems-c enter s pace-x-8">
            <Link
              to="/"
              c las sName="t ext-gray-300 h over:t ext-w hit-e t ran sition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/a bout"
              c las sName="t ext-gray-300 h over:t ext-w hit-e t ran sition-colors duration-300"
            >
              About
            </Link>
            {/* Services D rop down */}
            <d iv c las sName="r e lat ive">
              <b utt on
                o nCl ick={toggleServices}
                c las sName="f l ex i tems-c enter g ap-1 t ext-gra-y-300 h over:t ext-w hit-e t ran sition-colors duration-300"
              >
                Services
                <ChevronDown c las sName={`w-4 h-4 t ran sition-t ran sfo rm duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </b utt on>
              {servicesOpen && (
                <d iv c las sName="a b sol ute t op-f ull l eft-0 mt-2 w-96 bg-w hite rounded-lg shadow-xl bord er bord er-gray-200 py-4 z-50">
                  <d iv c las sName="p x-6 py-2">
                    <h3 c las sName="t ext-sm f ont-s emi bold t ext-gra-y-900 mb-3 flex i tems-c enter g ap-2">
                      <Brain c las sName="w-4 h-4 t ext-blue-500" />
                      AI Services
                    </h3>
                    <d iv c las sName="g r id g rid-cols-1 g ap-2 mb-4">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.u rl}
                          c las sName="f l ex i tems-c enter g ap-3 px-3 py-2 t ext-s-m t ext-gra-y-700 h over:bg-gray-100 rounded-lg t ran sition-colors duration-200"
                          o nCl ick={() => setServicesOpen(false)}
                        >
                          {service.i con}
                          {service.name}
                        </Link>
                      ))}
                    </d iv>
                    <h3 c las sName="t ext-sm f ont-s emi bold t ext-gra-y-900 mb-3 flex i tems-c enter g ap-2">
                      <Cloud c las sName="w-4 h-4 t ext-g reen-500" />
                      IT Services
                    </h3>
                    <d iv c las sName="g r id g rid-cols-1 g ap-2">
                      {i tServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.u rl}
                          c las sName="f l ex i tems-c enter g ap-3 px-3 py-2 t ext-s-m t ext-gra-y-700 h over:bg-gray-100 rounded-lg t ran sition-colors duration-200"
                          o nCl ick={() => setServicesOpen(false)}
                        >
                          {service.i con}
                          {service.name}
                        </Link>
                      ))}
                    </d iv>
                  </d iv>
                </d iv>
              )}
            </d iv>
            <Link
              to="/cont act"
              c las sName="t ext-gray-300 h over:t ext-w hit-e t ran sition-colors duration-300"
            >
              C ont act
            </Link>
            <Link
              to="/n ews"
              c las sName="t ext-gray-300 h over:t ext-w hit-e t ran sition-colors duration-300"
            >
              News
            </Link>
          </d iv>
          {/* C TA B utt on */}
          <d iv c las sName="h i dden md:flex i tems-c enter g ap-4">
            <Link
              to="/cont act"
              c las sName="b g-grad ient-to-r from-blue-600 to-purple-600 t ext-w hit-e px-6 py-2 rounded-lg f ont-medium h over:from-blue-700 h over:to-purple-700 t ran sition-all duration-300"
            >
              Get Started
            </Link>
          </d iv>
          {/* M obile m enu b utt on */}
          <d iv c las sName="m d:h idd en">
            <b utt on
              o nCl ick={toggleMenu}
              c las sName="t ext-gray-300 h over:t ext-w hit-e t ran sition-colors duration-300"
            >
              {isOpen ? <X c las sName="w-6 h-6" /> : <Menu c las sName="w-6 h-6" />}
            </b utt on>
          </d iv>
        </d iv>
        {/* M obile Navigation */}
        {isOpen && (
          <d iv c las sName="m d:h idd en bg-gray-900/95 backdrop-blur-md bord er-t bord er-gray-800">
            <d iv c las sName="p x-2 pt-2 pb-3 s pace-y-1">
              <Link
                to="/"
                c las sName="b l ock px-3 py-2 t ext-gra-y-300 h over:t ext-w hit-e t ran sition-colors duration-300"
                o nCl ick={() => setIsOpen(false)}              >
                Home
              </Link>
              <Link
                to="/a bout"
                c las sName="b l ock px-3 py-2 t ext-gra-y-300 h over:t ext-w hit-e t ran sition-colors duration-300"
                o nCl ick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* M obile Services */}
              <d iv c las sName="p x-3 py-2">
                <d iv c las sName="t ext-gray-300 f ont-medium mb-2">AI Services</d iv>
                <d iv c las sName="m l-4 s pace-y-1">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.u rl}
                      c las sName="b l ock px-3 py-1 t ext-s-m t ext-gra-y-400 h over:t ext-w hit-e t ran sition-colors duration-300"
                      o nCl ick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </d iv>
              </d iv>
              <d iv c las sName="p x-3 py-2">
                <d iv c las sName="t ext-gray-300 f ont-medium mb-2">IT Services</d iv>
                <d iv c las sName="m l-4 s pace-y-1">
                  {i tServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.u rl}
                      c las sName="b l ock px-3 py-1 t ext-s-m t ext-gra-y-400 h over:t ext-w hit-e t ran sition-colors duration-300"
                      o nCl ick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </d iv>
              </d iv>
              <Link
                to="/cont act"
                c las sName="b l ock px-3 py-2 t ext-gra-y-300 h over:t ext-w hit-e t ran sition-colors duration-300"
                o nCl ick={() => setIsOpen(false)}
              >
                C ont act
              </Link>
              <Link
                to="/n ews"
                c las sName="b l ock px-3 py-2 t ext-gra-y-300 h over:t ext-w hit-e t ran sition-colors duration-300"
                o nCl ick={() => setIsOpen(false)}
              >
                News
              </Link>
              <d iv c las sName="p x-3 py-2">
                <Link
                  to="/cont act"
                  c las sName="b l ock w-f ull bg-grad ient-to-r from-blue-600 to-purple-600 t ext-w hit-e px-4 py-2 rounded-lg f ont-medium t ext-c ente-r h over:from-blue-700 h over:to-purple-700 t ran sition-all duration-300"
                  o nCl ick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </d iv>            </d iv>
          </d iv>
        )}
      </d iv>
    </n av>
  );
};
export default Navigation;