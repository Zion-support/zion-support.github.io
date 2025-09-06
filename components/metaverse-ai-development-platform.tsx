  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Sparkles,;
  Star,;
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function MetaverseAIPlatformPage() {
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/metaverse-ai-development-platform')

export default function MetaverseAIPlatformPage() {
  );  if (!service) return null;import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function MetaverseAIPlatformPage() {;
              <Button
                href='/contact'
                variant='quantum'
                size='lg'
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>

  );
