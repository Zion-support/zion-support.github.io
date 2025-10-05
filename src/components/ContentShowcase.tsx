<<<<<<< HEAD
import React from 'react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
}

const ContentShowcase: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: "AI-Powered Enterprise Solutions",
      description: "Discover how our AI solutions are transforming enterprise operations and driving unprecedented growth.",
      category: "AI Solutions",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs",
      description: "Explore the latest advances in quantum computing and their applications in modern business.",
      category: "Technology",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Autonomous Systems Revolution",
      description: "Learn about self-managing systems that are revolutionizing how businesses operate.",
      category: "Automation",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest insights, case studies, and technical deep-dives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
=======
import, React, from 'rea, c, t';

const, ContentShowcas, e: Rea, c, t.FC = () => {
  const, contentItem, s = [
    {
      title: 'Latest, AI, Innovatio, n, s',
      description: 'Discover, the, newest AI, technologies, and their, applications, in busin, e, s, s',
      category: 'AI, Technolo, g, y',
      readTime: '5, min, rea, d',
    },
    {
      title: 'Micro, SaaS, Trends 2, 0, 2, 4',
      description: 'Explore, the, latest trends, in, micro SaaS, development, and deploym, e, n, t',
      category: 'SaaS, Solutio, n, s',
      readTime: '7, min, rea, d',
    },
    {
      title: 'Cloud, Migration, Guid, e',
      description: 'Comprehensive, guide, to successful, cloud, migration strateg, i, e, s',
      category: 'IT, Servic, e, s',
      readTime: '10, min, rea, d',
    },
  ]; retu, r, n (
    <div, classNam, e = 'py-16, b, g-gr, a, y-50'>
      <div, classNam, e='m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8'>
        <h2, classNam, e='te, x, t-3xl, fon, t-bold, m, b-8, tex, t-cent, e, r'>
          Featured, Conten, t
        </h2>
        <div, classNam, e='grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-3, ga, p-6'>
          { contentIte, m, s.m, a, p((it, e, m, ind, e, x) = > (
            <div, ke, y = { in, d, e, x  }, classNa, m, e = 'bg-whit, e, p-6, rounde, d-lg, shado, w-lg, border, hover: shad, o, w-xl, transitio, n-shad, o, w'
            >
              <div, classNam, e='mb-4'>
                <span, classNam, e='bg-bl, u, e-100, tex, t-bl, u, e-800, tex, t-sm, p, x-3, p, y-1, rounde, d-fu, l, l'>
                  {it, e, m.cate, g, o, r, y}
                </sp, a, n>
              </d, i, v>
              <h3, classNam, e = 'te, x, t-xl, fon, t-bold, m, b-3'>{it, e, m.title}</h3>
              <p, classNam, e='te, x, t-gr, a, y-600, m, b-4'>{it, e, m.description}</p>
              <div, classNam, e='flex, justif, y-between, item, s-cent, e, r'>
                <span, classNam, e='te, x, t-sm, tex, t-gr, a, y-5, 0, 0'>{it, e, m.readTime}</sp, a, n>
                <a, hre, f='/bl, o, g'
                  classNa, m, e='te, x, t-bl, u, e-600, hove, r: te, x, t-bl, u, e-800, fon, t-semibo, l, d'
                >
                  Read, Mor, e →
                </a>
              </d, i, v>
            </d, i, v>
          ))}
        </d, i, v>
      </d, i, v>
    </d, i, v>
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
  );
};

export, default, ContentShowcase;
