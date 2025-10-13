export interface BlogPost {/* TODO: Fix JSX expression */}
;
export interface CaseStudy {/* TODO: Fix JSX expression */}
;
export interface Service {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  title: string
  description: string
  category: string,
  pricing: {,
    starting: string
    popular?: boolean,;
export interface Service {/* TODO: Fix JSX expression */}
  feature,
  s: string[],
  primar,
  y: string,
  secondar,
  y: string,
}
;
export const getRecentContent = (limit: number = 3) => {;
const allContent: (BlogPost | CaseStudy)[] = [
  // TODO: Add items
]
  // TODO: Add items
]
    // This would be populated with actual content arrays
  ],,
  return allContent
    .sort((a, b) => {;
const _aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;';
const _bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;';
export const getRecentContent = (limi)
  t: number = 3) => {/* TODO: Fix JSX expression */}
  e: string }).date).getTime() : 0;
const _bTime = 'date' in b ? new Date((b as {/* TODO: Fix JSX expression */})'
  e: string }).date).getTime() : 0
      return bTime - aTime
    })
    .slice(0, limit)
