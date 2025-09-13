import Link from 'next/link';
import { useMemo } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export default function Sidebar() {

import { 


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
import { ;
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {;




    <AnimatePresence>;





                    <Building2 className="w-8 h-8 text-white" />;

                  <X className="w-6 h-6" />;




                    <Link
                    </Link>;



                    <Phone className="w-4 h-4" />;
                    <Mail className="w-4 h-4" />;
                  <Link
                    <ExternalLink className="w-4 h-4" />;
                  </Link>;
    </AnimatePresence>;
  );

  const featureLinks: NavLink[] = useMemo(
    () => [
      { href: '/#features', label: 'Self‑Improving' },
      { href: '/#features', label: 'Repo Sync' },
      { href: '/#features', label: 'Zero Ops' },
      { href: '/#features', label: 'Safety‑First' },
      { href: '/#features', label: 'Scalable' },
      { href: '/#features', label: 'Observability' },
      { href: '/#features', label: 'Futuristic UI' },
      { href: '/#features', label: 'Cloud Automations' },
      { href: '/#features', label: 'Edge‑Optimized' },
    ],

    <AnimatePresence>;
                    <Building2 className="w - 8 h - 8 text - white" />;
                  <X className="w - 6 h - 6" />;
                    <Link;
                    </Link>))}
                    <Phone className="w - 4 h - 4" />;
                    <Mail className="w - 4 h - 4" />;
                  <Link;
                    <ExternalLink className="w - 4 h - 4" />;
                  </Link>;
    </AnimatePresence>);
                    <Phone className="w-4 h-4" />
                    <Mail className="w-4 h-4" />
                  <Link
                    <ExternalLink className="w-4 h-4" />
                  </Link>
    </AnimatePresence>

  const serviceLinks: NavLink[] = useMemo(
    () => serviceNames.map((name) => ({ href: `/.netlify/functions/${name}`, label: name })),
    [serviceNames]
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto border-r border-white/10 bg-slate-950/90 px-4 py-6 backdrop-blur-md">
      <div className="mb-4 px-2 text-lg font-bold tracking-wide">
        <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Zion</span>
        <span className="ml-2 text-white/60">Navigation</span>
      </div>

                <Link href={link.href}>
                </Link>

                <Link href={link.href}>
                </Link>

