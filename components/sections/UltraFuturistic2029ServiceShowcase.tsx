  ChevronDown
  Star
  TrendingUp
  Zap
  Brain
  Cpu
  Shield
  Rocket
  Globe
  Database
  Lock
  Cloud
  Eye
  Timer
  Sparkles;
  ChevronDown,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Globe,
  Database,
  Lock,
  Cloud,
  Eye,
} from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';
import { CuttingEdgeInnovation2029 } from '../../data/2029-cutting-edge-innovations';
type Service = CuttingEdgeInnovation2029 | any;
interface UltraFuturistic2029ServiceShowcaseProps {

interface UltraFuturistic2029ServiceShowcaseProps {;
  services: Service[];
  title?: string;
  subtitle?: string;
const categoryColors: { [key: string]: string } = {
  'AI & Consciousness': 'from-purple-600 to-pink-600'
  'Quantum & Neuroscience': 'from-indigo-600 to-purple-600'
  'Space Colonization': 'from-red-600 to-orange-600'
  'Space Mining': 'from-yellow-600 to-orange-600'
  'Space Architecture': 'from-green-600 to-teal-600'
  'Space Energy': 'from-yellow-500 to-orange-500'
  'AI & Business': 'from-blue-600 to-cyan-600'
  'Quantum & Time': 'from-green-600 to-emerald-600'
  'AI & Augmented Reality': 'from-orange-600 to-red-600'
}
const categoryIcons: { [key: string]: any } = {
  'AI & Consciousness': Brain
  'Quantum & Neuroscience': Cpu
  'Space Colonization': Rocket
  'Space Mining': Zap
  'Space Architecture': Globe
  'Space Energy': Sparkles
  'AI & Business': Database
  'Quantum & Time': Timer
  'AI & Augmented Reality': Eye
}
const UltraFuturistic2029ServiceShowcase: React.FC<
  UltraFuturistic2029ServiceShowcaseProps
> = ({
  services
  title = '2029 Ultra-Futuristic Innovations'
  subtitle = 'Experience the future of technology with our revolutionary services'
  maxServices = 12
}) => {

const categoryColors: { [key: string]: string } = {;
  'AI & Consciousness': 'from-purple-600 to-pink-600',;
  'Quantum & Neuroscience': 'from-indigo-600 to-purple-600',;
  'Space Colonization': 'from-red-600 to-orange-600',;
  'Space Mining': 'from-yellow-600 to-orange-600',;
  'Space Architecture': 'from-green-600 to-teal-600',;
  'Space Energy': 'from-yellow-500 to-orange-500',;
  'AI & Business': 'from-blue-600 to-cyan-600',;
  'Quantum & Time': 'from-green-600 to-emerald-600',;
  'AI & Augmented Reality': 'from-orange-600 to-red-600',;
};

const categoryIcons: { [key: string]: any } = {;
  'AI & Consciousness': Brain,;
  'Quantum & Neuroscience': Cpu,;
  'Space Colonization': Rocket,;
  'Space Mining': Zap,;
  'Space Architecture': Globe,;
  'Space Energy': Sparkles,;
  'AI & Business': Database,;
  'Quantum & Time': Timer,;
  'AI & Augmented Reality': Eye,;
};

const UltraFuturistic2029ServiceShowcase: React.FC<;
  UltraFuturistic2029ServiceShowcaseProps;
> = ({;
  services,;
  title = '2029 Ultra-Futuristic Innovations',;
  subtitle = 'Experience the future of technology with our revolutionary services',;
  maxServices = 12,;
}) => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories;
  const categories = [;
    'all',;
    ...Array && Array.from(new Set(services && services.map(service => service && service.category))),;
  ];

  // Filter and sort services;
  const filteredServices = services;
    .filter(;
      service =>;
        selectedCategory === 'all' || service && service.category === selectedCategory;
    )    .sort((a, b) => {import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';
import { CuttingEdgeInnovation2029 } from '../../data/2029-cutting-edge-innovations';
type Service = CuttingEdgeInnovation2029 | any;

interface UltraFuturistic2029ServiceShowcaseProps {;
  services: Service[],;
  title?: string;
  subtitle?: string;
  max_services?: number;
}
const category_colors: { [key: string]: string } = {
  'AI & Consciousness': 'from - purple - 600 to - pink - 600Quantum & Neuroscience': 'from - indigo - 600 to - purple - 600Space Colonization': 'from - red - 600 to - orange - 600Space Mining': 'from - yellow - 600 to - orange - 600Space Architecture': 'from - green - 600 to - teal - 600Space Energy': 'from - yellow - 500 to - orange - 500AI & Business': 'from - blue - 600 to - cyan - 600Quantum & Time': 'from - green - 600 to - emerald - 600AI & Augmented Reality': 'from - orange - 600 to - red - 600';
}
;
const category_icons: { [key: string]: any } = {
  'AI & Consciousness': Brain;
  'Quantum & Neuroscience': Cpu;
  'Space Colonization': Rocket;
  'Space Mining': Zap;
  'Space Architecture': Globe;
  'Space Energy': Sparkles;
  'AI & Business': Database;
  'Quantum & Time': Timer;
  'AI & Augmented Reality': Eye;
}
;
const UltraFuturistic2029ServiceShowcase: React.FC < UltraFuturistic2029ServiceShowcaseProps> = ({
  services;
  title = "2029 Ultra - Futuristic Innovations";
  subtitle = "Experience the future of technology with our revolutionary services";
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          // Default to 'Advanced' if innovationLevel is not available
          const aLevel = (a as any).innovationLevel |'Advanced';
          const bLevel = (b as any).innovationLevel |'Advanced';
          const innovationOrder = {
            Revolutionary: 4
            Breakthrough: 3
            Advanced: 2
            Emerging: 1
          }
          return (
            (innovationOrder[bLevel] |0) - (innovationOrder[aLevel] |0)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
  return (
    <section className="py-20 relative overflow-hidden">;
      {/* Background Elements */}

        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
        {/* Filters and Controls */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
                <button

                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg';
                      : 'bg-gray-900/50 text-gray-300 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50';
                  }`}
                >;
                  {category === 'all' ? 'All Categories' : category}
            <select
              value={sortBy}
              onChange={e => setSortBy(e && e.target.value as any)}
              className='px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500';
            >;
              <option value='innovation'>Innovation Level</option>;
              <option value='price'>Price</option>;
              <option value='rating'>Rating</option>            </select>            <select
              value={sortBy}
            >;
              <option value="innovation">Innovation Level</option>;
              <option value="price">Price</option>;
              <option value="rating">Rating</option>;
            </select>;
          </div>;
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className='px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500'
            >
              <option value='innovation'>Innovation Level</option>
              <option value='price'>Price</option>

              <option value='rating'>Rating</option>            </select>

            </select>

          </div>
        </motion.div>

        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Experience the Future?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of forward-thinking companies already using our
              revolutionary 2029 technology solutions.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href='/contact'
        {/* Innovation Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                label: 'Revolutionary Services'
                value: services.filter(
                  s => s.innovationLevel === 'Revolutionary'
                ).length
                icon: Rocket
                color: 'from-purple-500 to-pink-500'
              }
              {
                label: 'Patent Pending'
                value: services.filter(s => s.patentStatus === 'Patent Pending')
                  .length
                icon: Shield
                color: 'from-blue-500 to-cyan-500'
              }
              {
                label: 'Total Customers'
                value: services.reduce((sum, s) => sum + s.customers, 0)
                icon: Star
                color: 'from-yellow-500 to-orange-500'
              }
              {
                label: 'Average Rating'
                value: (
                  services.reduce((sum, s) => sum + s.rating, 0) /
                  services.length
              <motion.div
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>;
            {[;
              {;
                label: 'Revolutionary Services',;
                value: services && services.filter(;
                  s => s && s.innovationLevel === 'Revolutionary';
                ).length,;
                icon: Rocket,;
                color: 'from-purple-500 to-pink-500',;
              },;
              {;
                label: 'Patent Pending',;
                value: services && services.filter(s => s && s.patentStatus === 'Patent Pending');
                  .length,;
                icon: Shield,;
                color: 'from-blue-500 to-cyan-500',;
              },;
              {;
                label: 'Total Customers',;
                value: services && services.reduce((sum, s) => sum + s && s.customers, 0),;
                icon: Star,;
                color: 'from-yellow-500 to-orange-500',;
              },;
              {;
                label: 'Average Rating',;
                value: (;
                  services && services.reduce((sum, s) => sum + s && s.rating, 0) /;
                  services && services.length;
                ).toFixed(1),;
                icon: TrendingUp,;
                color: 'from-green-500 to-teal-500',;
              },            ].map((stat, index) => (              { label: 'Revolutionary Services', value: services && services.filter(s => s && s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' },;
              { label: 'Patent Pending', value: services && services.filter(s => s && s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' },;
              { label: 'Total Customers', value: services && services.reduce((sum, s) => sum + s && s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' },;
              { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + s && s.rating, 0) / services && services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center'

              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat && stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>;
                  <stat && stat.icon className='w-8 h-8 text-white' />;
                </div>;
                <div className='text-3xl font-bold text-white mb-2'>;
                  {stat && stat.value}
                </div>;
                <div className='text-gray-400'>{stat && stat.label}</div>              </motion && motion.div>              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${stat && stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>;
                  <stat && stat.icon className="w-8 h-8 text-white" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat && stat.value}</div>;
                <div className="text-gray-400">{stat && stat.label}</div>;
              </motion && motion.div>;
            ))}
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );

export default UltraFuturistic2029ServiceShowcase;  );
}
export default UltraFuturistic2029ServiceShowcase;  )
}
};

            ))}
          </div>
        </motion.div>
      </div>
    </section>
export default UltraFuturistic2029ServiceShowcase;  )
}
export default UltraFuturistic2029ServiceShowcase;

export default UltraFuturistic2029ServiceShowcase;
