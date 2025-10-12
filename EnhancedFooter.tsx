import React from 'react';import { Link  } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin  } from 'lucide-react';
const EnhancedFooter: React.FC = () => {
  r etu rn (
    <>
    </><f ooter c las sNa me="b g-s late-900 b ord er-t bor der-s late-800" />
      <d iv c las sNa me="m ax-w-7xl mx-a uto px-4 sm:px-6 lg:px-8-py-12">
        </d iv>
        <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-4g ap-8">
        </d iv>
          <d iv c las sNa me="c ol-s pan-1md:c ol-s pan-2">
        </d iv>
            <h3 c las sNa me="t e xt-2xl f ont-b old t ext-w hit em-b-4">Z ion T ech G roup</h3>
            <p c las sNa me="t e xt-g ray-300mb-6" />              L ead ing provider of AI and IT solutions for businesses worldwide.
    <>
            </p>
            <d iv c las sNa me="f l exs pace-x-4">
        </d iv>              <Link
                to="/cont act"
                c las sNa me="b g-g rad ient-to-r from-c yan-500 to-p urp le-600 t ext-w hit-e px-6 py-3 rounded-lg f ont-semibold hover:from-c yan-600 hover:to-p urp le-700 transition-all duration-300 flex i tems-center"
              >
                Get Star ted
    <>
                </><ArrowRight c las sNa me="w-4 h-4m l-2" />              </Link>
            </d iv>
    <>
          </><d iv />
            <h4 c las sNa me="t e xt-lg f ont-semibold t ext-w hit em-b-4">S erv ices</h4>
            <ul c las sNa me="s p ace-y-2" />
              <li /><Link to="/ai-solutions" c las sNa me="t e xt-g ray-300 hover:t ext-c ya-n-400transition-c olors">AI Solutions</Link></li>
              <li /><Link to="/it-s erv ices" c las sNa me="t e xt-g ray-300 hover:t ext-c ya-n-400transition-c olors">IT S erv ices</Link></li>
              <li /><Link to="/c loud-solutions" c las sNa me="t e xt-g ray-300 hover:t ext-c ya-n-400transition-c olors">Cloud Solutions</Link></li>
              <li /><Link to="/c ybe rse cur ity" c las sNa me="t e xt-g ray-300 hover:t ext-c ya-n-400transition-c olors">Cybe rse cur ity</Link></li>
            </ul>
          </d iv>
    <>
          </><d iv />
            <h4 c las sNa me="t e xt-lg f ont-semibold t ext-w hit em-b-4">C ont act</h4>
            <d iv c las sNa me="s p ace-y-3">
        </d iv>
              <d iv c las sNa me="f l ex i tems-centert ext-g ra-y-300">
        </d iv>
                <Mail c las sNa me="w-4 h-4m r-2" />
                <s pan>cont act@ziontechgroup.com</s pan>
              </d iv>
              <d iv c las sNa me="f l ex i tems-centert ext-g ra-y-300">
        </d iv>
                <Phone c las sNa me="w-4 h-4m r-2" />
                <s pan>+1 (555) 123-4567</s pan>
              </d iv>
              <d iv c las sNa me="f l ex i tems-centert ext-g ra-y-300">
        </d iv>
                <MapPin c las sNa me="w-4 h-4m r-2" />                <s pan>N ew York, NY</s pan>
              </d iv>
          </d iv>
    <>
        </><d iv c las sNa me="b o rder-t b ord er-s late-800 mt-8 pt-8-t ext-cente-r">
        </d iv>
          <p c las sNa me="t e xt-g ray-400" />
            © 2024 Z ion T ech G roup. All rights rese rved.
    <>          </p>
        </d iv>
    </f ooter>
  );
};
export default EnhancedFooter;
    </>
