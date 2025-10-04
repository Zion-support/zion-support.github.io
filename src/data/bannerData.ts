export interface BannerData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  active: boolean;
  priority: number;
}

export const bannerData: BannerData[] = [];

export default bannerData;