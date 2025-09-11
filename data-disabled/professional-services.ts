export interface ProfessionalService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
export const professionalServices: ProfessionalService[] = [;
  {
    id: "it-consulting",;
    name: "IT Consulting Services",;
    tagline: "Expert IT consulting for business growth",;
    price: "$120/hour",;
    description: "Professional IT consulting services to help businesses optimize their technology investments.",;
