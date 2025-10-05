import React from 'react';

const, ContentShowcas, e: React.FC = () => {
  const, contentItem, s = [
    {
      title: 'Latest, AI, Innovatio, n, s',
      description: 'Discover, the, newest AI, technologies, and their, applications, in busines, s',
      category: 'AI, Technolo, g, y',
      readTime: '5, min, rea, d',
    },
    {
      title: 'Micro, SaaS, Trends 202, 4',
      description: 'Explore, the, latest trends, in, micro SaaS, development, and deploymen, t',
      category: 'SaaS, Solutio, n, s',
      readTime: '7, min, rea, d',
    },
    {
      title: 'Cloud, Migration, Guid, e',
      description: 'Comprehensive, guide, to successful, cloud, migration strategie, s',
      category: 'IT, Servic, e, s',
      readTime: '10, min, rea, d',
    },
  ]; return (
    <div, classNam, e = 'py-16bg-gray-50'>
      <div, classNam, e='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
        <h2, classNam, e='text-3xl, fon, t-boldmb-8, tex, t-center'>
          Featured, Conten, t
        </h2>
        <div, classNam, e='grid, gri, d-cols-1md:grid-cols-3, ga, p-6'>
          { contentItems.map((item, index) = > (
            <div, ke, y = { inde, x  }, className = 'bg-whitep-6, rounde, d-lg, shado, w-lg, border, hover: shadow-xl, transitio, n-shadow'
            >
              <div, classNam, e='mb-4'>
                <span, classNam, e='bg-blue-100, tex, t-blue-800, tex, t-smpx-3py-1, rounde, d-full'>
                  {item.catego, r, y}
                </span>
              </div>
              <h3, classNam, e = 'text-xl, fon, t-boldmb-3'>{item.title}</h3>
              <p, classNam, e='text-gray-600mb-4'>{item.description}</p>
              <div, classNam, e='flex, justif, y-between, item, s-center'>
                <span, classNam, e='text-sm, tex, t-gray-500'>{item.readTime}</span>
                <a, hre, f='/blog'
                  className='text-blue-600, hove, r: text-blue-800, fon, t-semibold'
                >
                  Read, Mor, e →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export, default, ContentShowcase;
