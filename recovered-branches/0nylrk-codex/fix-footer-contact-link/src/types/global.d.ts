

import {ReactNode} from 'react';

// Extend FeatureCardProps to include key for mapping
declare module '@/components/FeatureCard' {


    title: string;
    description: string;

    category: string;
    image?: string;
    tags?: string[];
    author?: string;


  }
}

