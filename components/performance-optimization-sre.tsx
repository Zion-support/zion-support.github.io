
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Activity  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';

export default function PerformanceOptimizationSREPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/performance-optimization-sre');
  );  if (!service) return null;export default function PerformanceOptimizationSREPage() {;

  const service = extraServices.find(s => s.link.endsWith('/performance-optimization-sre'));
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>

            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
