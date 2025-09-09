export: interface ZionService {
   id: string;

   price: string;
   billing: 'month' | 'year' | 'project' | 'hour;';
   features: string[];
   benefits: string[];
   useCases: string[];
   targetAudience: string[];

   contactInfo: {
   mobile: string;
   email: string;
}