// Simple services API endpoint
interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
}

const SAMPLE_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    category: 'development',
    description: 'Modern web applications with React and Next.js'
  },
  {
    id: '2',
    title: 'AI Solutions',
    category: 'ai',
    description: 'Custom AI implementations and automation'
  },
  {
    id: '3',
    title: 'Cloud Services',
    category: 'cloud',
    description: 'Scalable cloud infrastructure and deployment'
  }
];

// Generic request/response types for compatibility with Next.js and node
interface Req {
  method?: string;
  url?: string;
}

interface Res {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
}

export default async function handler(req: Req, res: Res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  const url = new URL(req.url || '', 'http://localhost');
  const category = url.searchParams.get('category');
  const q = (url.searchParams.get('q') || '').toLowerCase();

  const data = SAMPLE_SERVICES.filter((item) => {
    if (category && item.category !== category) return false;
    if (q && !item.title.toLowerCase().includes(q)) return false;
    return true;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}