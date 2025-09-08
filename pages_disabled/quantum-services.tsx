

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    

    return this.props.children;
  }
}
import React from 'react';
import Head from 'next / head';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import {Atom, CheckCircle, Shield, Sparkles} from 'lucide-react';



          <section>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>;
              Focus Areas;
            </h2>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              {features && features.map(f => (;





                <div
                  key={f}
                  className='flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60'>;
                  <CheckCircle className='w-5 h-5 text-emerald-400 mt-0 && 0.5' />;
                  <span className='text-gray-200'>{f}</span>                </div>;



            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2"><Sparkles className="w-5 h-5" /><span className="font-semibold">{s.name}</span></div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>




              ))}





          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>



            </div>;
          </section>;



          <section className='text-center'>;
            <div className='inline-flex items-center justify-center gap-3 text-gray-300'>;
              <Shield className='w-5 h-5 text-purple-400' />;
              <span>;
                Post-quantum readiness assessments and migration planning;


              </span>            </div>;
          </section>;
        </div>;
      </div>;






