export interface PromotionalBanner {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  active: boolean;
  priority: number;
}

export const promotionalBanners: PromotionalBanner[] = [];

export default promotionalBanners;