import { Badge } from '@/components / ui / badge';
 from '@/components / ui / button';
 from '@/components / ui / card';
 from '@/data / enhancedServices';

 from '@/components/ui/button';
 from '@/components/ui/card';
 from '@/components/ui/badge';
 from 'react-router-dom';
export default function Page() {
) => {

    const categoryServices = services.filter(service => service.category.toLowerCase().includes(category.toLowerCase()));
    if(categoryServices.length === 0)
        return null;
    const getCategoryIcon = (categoryName) => {

        const iconMap = {

  'AI & Machine Learning': <Brain className="w-6 h-6"/>,"
            'Cybersecurity & Compliance': <Shield className="w-6 h-6"/>,"
            'Data & Analytics': <Database className="w-6 h-6"/>,"
            'Business Process': <Briefcase className="w-6 h-6"/>,"
            'Marketing & Sales': <TrendingUp className="w-6 h-6"/>,"
            'Financial Services': <DollarSign className="w-6 h-6"/>,"
            'Healthcare & Life Sciences': <Heart className="w-6 h-6"/>,"
            'Education & Training': <GraduationCap className="w-6 h-6"/>,"
            'Supply Chain & Logistics': <Truck className="w-6 h-6"/>,"
            'Real Estate & Property': <Home className="w-6 h-6"/>,"
            'Legal & Compliance': <Lock className="w-6 h-6"/>,"