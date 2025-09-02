export interface SpecializedITService {
  id: string;
   title: string;
   description: string;
   category: string;
   subcategory?: string;
   price: number;
   currency: string;
   pricingModel: string;
   features: string[];
   benefits: string[];
   targetAudience: string[];
   marketPrice: string;
   website: string;
   contactEmail: string;
   contactPhone: string;
   address: string;
   tags: string[];
   technicalScore: number;
   rating: number;
   reviewCount: number;
   featured: boolean;
   location: string;
   availability: string;
   author: { name: string;
   id: string;
   avatarUrl?: string;
   verifie,d: boolean} images: string[] createdAt: string useCases: string[] integrations: string[] compliance: string[] support: string[] deploymentOptions: string[] scalabilit,y: string[] } export const SPECIALIZED_IT_SERVICES_2026: SpecializedITService[] = [ { i,d: &apos;cloud-native-application-platform&apos;,&apos;'; title: &apos;Cloud-Native Application Platform&apos;,&apos;'; description: &apos;Enterprise-grade platform for building, deploying, and managing cloud-native applications with microservices architecture and container orchestration.&apos;,&apos;'; category: &apos;Cloud & DevOps&apos;,&apos;'; subcategory: &apos;Application Platform&apos;,'; price: 3999,&apos;'; currency: &apos;$&apos;,&apos;'; pricingModel: &apos;monthly&apos;,'; features: [&apos;';Kubernetes orchestration&apos;,&apos;';Microservices architecture&apos;,&apos;';Auto-scaling capabilities&apos;,&apos;';CI/CD pipeline automation&apos;,&apos;';Service mesh implementation&apos;,&apos;';Monitoring and observability&apos;,&apos;';Security scanning&apos;,&apos;';Multi-cloud support&apos; ],'; benefits: [&apos;';Reduce deployment time by 80%&apos;,&apos;';Improve application scalability by 300%&apos;,&apos;';Lower infrastructure costs by 40%&apos;,&apos;';Enhance developer productivity by 60%&apos;,&apos;';Ensure high availability and reliability&apos;'; ],&apos;'; targetAudience: [&apos;Enterprises&apos;, &apos;Software companies&apos;, &apos;Digital agencies&apos;, &apos;E-commerce platforms&apos;, &apos;Financial services&apos;],&apos;'; marketPrice: &apos;$3,999-8,999/month&apos;,&apos;'; website: &quot;http,s:;&quot;}'