import type { NextApiRequest, NextApiResponse } from 'next';

import { v4 as uuidv4  } from 'uuid';
import { BlogPost  } from '@/utils/types/blog';
import { readPosts, writePosts } from '@/utils/data/blogStore';
import { requireAdmin } from '@/utils/api/auth';


  }
return res.status(405).end();
}
        metaTitle: body.seo?.metaTitle || body.title!;,
        metaDescription: body.seo?.metaDescription || '';,
        ogImageUrl: body.seo?.ogImageUrl || body.coverImageUrl || '';
     ,
},
      body: body.body || '';,
      status: body.status || 'draft';,
      metrics: { views: 0;, likes: 0;, shares: 0 ;}
   ,
};
    posts.unshift(post);
    writePosts(posts);
    return res.status(201).json(post);
  }

  return res.status(405).end();
return res.status(405).end();
}

}
}
return res.status(405).end();
  return res.status(405).end();
  }

  return res.status(405).end();
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
