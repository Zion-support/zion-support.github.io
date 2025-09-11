

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default /**
 * QuantumServicesPage - Function description
 */
function QuantumServicesPage() {
  const features = [;
    'Quantum - inspired optimization & annealing strategies',
    'Hybrid quantum - classical pipelines (QAOA, VQE) where applicable',
    'Quantum - safe cryptography assessments and roadmaps',
    'R & D ideation for quantum - ready workloads',
  ];
;
  const solutions = [;
    {
      name: 'Quantum Internet Security',
      href: '/quantum - internet - security - platform',
    },
    { name: 'Quantum AI Cognitive', href: '/quantum - ai - cognitive' },
    {
      name: 'Quantum Cloud Infrastructure',
      href: '/quantum - cloud - infrastructure',
    },
import React from 'react',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react';
export default function QuantumServicesPage() {

  const features = [
    'Quantum-inspired optimization & annealing strategies'
    'Hybrid quantum-classical pipelines (QAOA, VQE) where applicable'
    'Quantum-safe cryptography assessments and roadmaps'
    'R&D ideation for quantum-ready workloads'
  ];
  const solutions = [
    {
      name: 'Quantum Internet Security'
      href: '/quantum-internet-security-platform'
    }
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' }
    {
      name: 'Quantum Cloud Infrastructure'
      href: '/quantum-cloud-infrastructure'
    }
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];

import Button from '../components/ui/Button',
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react',
export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategiesHybrid quantum-classical pipelines (QAOA, VQE) where applicableQuantum-safe cryptography assessments and roadmapsR&D ideation for quantum-ready workloads'],
  const solutions = [
    { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }],
  return (

          </header>
          <section>


                className='px-8 py-4'>;
                See Market Pricing;
              </Button>            </div>;
          </header>;

                <div
                  key={f}
                  className='flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60'>;
                  <CheckCircle className='w-5 h-5 text-emerald-400 mt-0 && 0.5' />;
                  <span className='text-gray-200'>{f}</span>                </div>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
              ))}

            </div>;
          </section>;

          <section>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>;
              Highlighted Solutions;
            </h2>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
              {solutions && solutions.map(s => (;

                <a
                  key={s && s.name}
                  href={s && s.href}
                  className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors'>;
                  <div className='flex items-center gap-3 text-cyan-300 mb-2'>;
                    <Sparkles className='w-5 h-5' />;
                    <span className='font-semibold'>{s && s.name}</span>;
                  </div>;
                  <p className='text-gray-300 text-sm'>Learn more</p>                </a>;

=======

=======
            </div>;
          </section>;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </span>            </div>;
          </section>;
        </div>;
      </div>;

==============


=======  )
}

    </UltraAdvancedFuturisticBackground>);
;


  )
}
    </UltraAdvancedFuturisticBackground>);
;
);

}
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
==============


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
