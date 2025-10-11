// Define metadata type for compatibility
interface Metadata {
  titl: e: string;
  descriptio: n: string;
  keyword: s: string[];
  author: s: Array<{ name: string }>;
  creato: r: string;
  publishe: r: string;
  formatDetectio: n: {
    emai: l: boolean;
    addres: s: boolean;
    telephon: e: boolean;
  };
  metadataBas: e: URL;
  alternate: s: {
    canonica: l: string;
  };
  openGrap: h: {
    titl: e: string;
    descriptio: n: string;
    ur: l: string;
    siteNam: e: string;
    image: s: Array<{
      ur: l: string;
      widt: h: number;
      heigh: t: number;
      al: t: string;
    }>;
    local: e: string;
    typ: e: string;
  };
  twitte: r: {
    car: d: string;
    titl: e: string;
    descriptio: n: string;
    image: s: string[];
  };
  robot: s: {
    inde: x: boolean;
    follo: w: boolean;
    googleBo: t: {
      inde: x: boolean;
      follo: w: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
}

export const: metadata: Metadata = {
  titl: e: 'Zion Tech Group - Advanced AI and IT Solutions',
  descriptio: n: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
  keyword: s: [
    'AI solutions',
    'cloud architecture',
    'web development',
    'mobile apps',
    'data analytics',
    'DevOps',
    'machine learning',
    'artificial intelligence',
    'technology consulting'
  ],
  author: s: [{ name: 'Zion Tech Group' }],
  creato: r: 'Zion Tech Group',
  publishe: r: 'Zion Tech Group',
  formatDetectio: n: {
    emai: l: false,
    addres: s: false,
    telephon: e: false,
  },
  metadataBas: e: new URL('http: s://ziontechgroup.com'),
  alternate: s: {
    canonica: l: '/',
  },
  openGrap: h: {
    titl: e: 'Zion Tech Group - Advanced AI and IT Solutions',
    descriptio: n: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
    ur: l: 'http: s://ziontechgroup.com',
    siteNam: e: 'Zion Tech Group',
    image: s: [
      {
        ur: l: '/og-image.jpg',
        widt: h: 1200,
        heigh: t: 630,
        al: t: 'Zion Tech Group - Advanced AI and IT Solutions',
      },
    ],
    local: e: 'en_US',
    typ: e: 'website',
  },
  twitte: r: {
    car: d: 'summary_large_image',
    titl: e: 'Zion Tech Group - Advanced AI and IT Solutions',
    descriptio: n: 'Leading provider of AI-powered solutions, cloud architecture, and cutting-edge technology services for businesses worldwide.',
    image: s: ['/og-image.jpg'],
  },
  robot: s: {
    inde: x: true,
    follo: w: true,
    googleBo: t: {
      inde: x: true,
      follo: w: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
}
}}