export {};
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string
  author: string
  tags: string[],
  featuredImage?: string
  }
}
// Navigation types;
export interface NavigationItem {
    label: string
  href: string,
  children?: NavigationItem[]
  }
}
// Analytics types;
export interface AnalyticsEvent {
    action: string
  category: string
  label?: string,
  value?: number
  }
}
export {}
