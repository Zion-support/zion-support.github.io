export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export const enhanceSEO = (data: SEOData) => {
  return {
    ...data,
    enhanced: true
  };
};
