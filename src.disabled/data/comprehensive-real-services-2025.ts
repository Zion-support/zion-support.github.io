
"export": interface ComprehensiveService {
   id: string;
   name: string;

   price: string;
   billing: 'month' | 'project' | 'hour';
   features: string[];
   benefits: string[];
   technology: string[];
   integrations: string[];
   useCases: string[];
   targetAudience: string;
   marketPosition: string;
   competitors: string[];
   roi: string;
   trialDays: number;
   setupTime: string;
   icon: string;
   color: string;
   link: string;
   marketSize: string;
   growthRate: string;
   rating?: number;
   reviews?: number;
   popular?: boolean;
   launchDate?: string;
   contactInfo: {
   mobile: string;
   email: string;

