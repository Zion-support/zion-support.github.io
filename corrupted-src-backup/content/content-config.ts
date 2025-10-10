}

}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {,
    starting: string;
    popular?: boolean;
  };
  s: string[];
  primar,
  y: string;
  secondar,
  y: string;
}

export const getRecentContent = (limit: number = 3) => {
  const allContent: (BlogPost | CaseStudy)[] = [
    // This would be populated with actual content arrays;
  ];,
  return allContent;
    .sort((a, b) => {
      const _aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;
      const _bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;
export const getRecentContent = (limi)
  e: string }).date).getTime() : 0;
  e: string }).date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
};
