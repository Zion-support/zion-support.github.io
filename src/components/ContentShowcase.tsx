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
  );
};

export, default, ContentShowcase;
