#!/usr/bin/env node

origin/cursor/expand-services-advertise-and-build-project-c28b
#!/usr/bin/env node

#!/usr/bin/env node;
>

#!/usr/bin/env node;
const fs = require('fs');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

const helpCategories = [
  {
    title: "Getting Started,
    icon: BookOpen,
    description: Learn the basics and get up and running quickly",
    articles: [



    ]
  },
  {
    title: "Account & Billing,
    icon: MessageCircle,
    description: Manage your account, billing, and subscription",
    articles: [



    ]
  },
  {
    title: "Technical Support,
    icon: Phone,
    description: Get help with technical issues and troubleshooting",
    articles: [



    ]
  }

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description content=Find answers to your questions and get help with our services." />
      </Head>


    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {}
  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
`
  },
  {
    path: pages/api/admin/pitch/add-slide.ts',
    content: `import type { NextApiRequest, NextApiResponse } from 'next;
import { ensureAdminFromApi } from ../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { allowed } = await ensureAdminFromApi(req);
    if (!allowed) return res.status(403).json({ error: 'Forbidden });


=======
    if (req.method === POST') {
      const { title, content } = req.body;
      if (!title || !content) return res.status(400).json({ error: 'Title and content required });

      // Mock slide creation
      const slide = {
        id: Date.now().toString(),
        title,
        content: Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.',
        createdAt: new Date().toISOString()
      }

      res.json({ slide });
    } else {
      res.setHeader('Allow, POST');
      res.status(405).end('Method Not Allowed);
    }
  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  }
];
const educationBenefits = [;
  {
    "icon: GraduationCap,
    title": Student Success',
    "description: 'Improve student outcomes with personalized learning and analytics.,
    metric": 40%';
  },
  {
    "icon: TrendingUp,
    title": 'Efficiency Gains,
    "description: Streamline administrative processes and reduce manual work.',
    metric": '60%;
  },
  {
    "icon: Shield,
    title": Data Security',
    "description: 'Protect sensitive student and institutional data with enterprise-grade security.,
    metric": 99.9%';
  }
];


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
