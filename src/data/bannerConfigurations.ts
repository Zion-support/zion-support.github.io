export interface BannerConfiguration {
  id: string;
  title: string;
  type: string;
  position: string;
  content: string;
  active: boolean;
  priority: number;
}

export const bannerConfigurations: BannerConfiguration[] = [];

export default bannerConfigurations;