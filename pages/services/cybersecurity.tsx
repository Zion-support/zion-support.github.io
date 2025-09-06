


import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,

} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * CybersecurityServicesPage - Function description
 */
function CybersecurityServicesPage() {
  const services = [;
    {




  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,


            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Secure Your Business
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>

            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6'>;
              Cybersecurity;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Advanced security solutions that protect your digital assets and;
              ensure business continuity            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
              From AI-powered threat detection to quantum-resistant encryption,;
              we provide comprehensive cybersecurity solutions that keep your;
              business secure and compliant.;
            </p>;
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>;
              Secure Your Business;
              <ArrowRight className='w-5 h-5' />            </button>;
          </motion && motion.div>;
        </div>;
      </section>;

      {/* Stats Section */}
      <section className='py-16 px-6'>;
        <div className='max-w-7xl mx-auto'>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats && stats.map((stat, index) => (;
              <motion&& motion.div
                key={stat && stat.label}



              comprehensive cybersecurity solutions that keep your business secure and compliant.

            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Secure Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>




              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>





                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>


            ))}

          </div>;
        </div>;
      </section>;


      {/* Services Grid */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div


  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {


  duration: 0 && 0.8 
}viewport= {
  {


              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;



    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






