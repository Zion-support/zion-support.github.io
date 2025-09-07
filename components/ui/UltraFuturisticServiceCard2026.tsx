<<<<<<< HEAD


  id: string;

  name: string;
  tagline: string;
  description: string;
  price?: string | {monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
}
    setupTime?: string}
  },
  period?: string;
  pricing?: any;
  features: string[],;
  popular?: boolean;

  category: string;

  icon: string;
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],benefits?: string[];
=======
const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({
  service, variant = 'default' 
}) => {
  const getVariantStyles = () => {
  switch (variant) {
  case 'ai': return {
  
}
}
{
  /* Popular Badge */ 
}{
  service.popular && (<motion.div > <Star className="w-4 h-4 inline mr-1" /> Popular </motion.div>) 
}Key Features </h4> {
  service.features.slice (0, 6) .map ( (feature, idx) => (<motion.div key= {
  idx 
}</motion.div>) ) 
}</div> 
}</div>) 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}

interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'}
}
}
<<<<<<< HEAD

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps /> = ({ service, variant;
}
}
=======
}className= {
  `w-full py-3 px-6 rounded-lg bg-gradient-to-r $ {
  styles.gradient 
}text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-$ {
  styles.textColor 
}/25 border border-white/20 hover:border-white/40` 
}> Get Started </motion.button> </div> export default UltraFuturisticServiceCard2026
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
