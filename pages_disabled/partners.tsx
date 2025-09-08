import { 
  Globe, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Building,
  Shield,
  Zap,
  Target,
  Star,
  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Clock,
  TrendingUp,



} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PartnersPage() {
  const partners = [
    {




  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,


            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Partnership Types;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              We offer various partnership models to meet your business;
              objectives and growth goals;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes && partnershipTypes.map((type, index) => (;
              <motion&& motion.div
                key={type && type.title}





                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>




                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-white/70 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {benefit}
                    </li>



                  ))}
                </ul>;
              </motion && motion.div>;
            ))}


          </div>;
        </div>;
      </section>;


      {/* Current Partners */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div


            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>Our Partners</h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Leading technology companies and organizations that trust us to;
              deliver innovative solutions;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners && partners.map((partner, index) => (;
              <motion&& motion.div
                key={partner && partner.name}





                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}




              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">




                    <a
                      href={partner && partner.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;
                      <ExternalLink className='w-3 h-3' />;
                    </a>;
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;



