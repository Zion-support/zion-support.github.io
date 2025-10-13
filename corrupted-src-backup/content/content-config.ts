export interface BlogPost {/* TODO: Fix JSX expression */};
};
export interface CaseStudy {/* TODO: Fix JSX expression */};
};
export interface Service {
}
  id: string;
  title: string
  description: string
  category: string,
  pricing: {,
<<<<<<< HEAD
    starting: string
    popular?: boolean,
export interface Service {/* TODO: Fix JSX expression */}
  }
=======
    starting: string;
    popular?: boolean;
export interface Service {/* TODO: Fix JSX expression */};
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  feature,
  s: string[],
  primar,
  y: string,
  secondar,
<<<<<<< HEAD
  y: string,
}

export const getRecentContent = (limit: number = 3) => {
  const allContent: (BlogPost | CaseStudy)[] = [
    // This would be populated with actual content arrays
  ],,
=======
  y: string};
export const getRecentContent = (limit: number = 3) => {;
const allContent: (BlogPost | CaseStudy)[] = [
    // This would be populated with actual content arrays;
  ];,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return allContent;
    .sort((a, b) => {
      const _aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;
      const _bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;
export const getRecentContent = (limi)
  t: number = 3) => {/* TODO: Fix JSX expression */};
  e: string }).date).getTime() : 0;
      const _bTime = 'date' in b ? new Date((b as {/* TODO: Fix JSX expression */})
  e: string }).date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
}
