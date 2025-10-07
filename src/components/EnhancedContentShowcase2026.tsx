import, Reac, t, {useState} fr, o, m 'react';
impo, r, t {Link} from 'react -router -dom';

interfaceContentItem { 
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  href: string;
  metrics?: {
    label: string;
    value: string;
   }[];
      { label: 'CostOptimization'value: '7, 0%' }{ label: 'Automatio, n', value: '95%' }{ label: 'Accuracy', value: '99%' }],
  },

  constgetCategoryColor = (category: string) => {
    switch(category) {
      case 'Cloud, Operation, s':
        return 'bg-cyan -100text -cyan -800'; case 'FinTech':
        return 'bg-emerald -100text -emerald -800';
      case 'Retail':
        return 'bg-orange -100text -orange -800';
      case 'Sustainability':
        return 'bg-green -100text -green -800';
      case 'Architecture':
        return 'bg-indigo -100text -indigo -800';
      case 'FinOps':
        return 'bg-violet -100text -violet -800';
      default: return 'bg-gray-100text -gr, ay-800';
    }
        <divclassName = 'flexflex -colmd: flex-rowgap -4mb -8justify -betweenitems -center'>
          <divclassName='flexflex -wrapgap-2'>
            { categories.map(category = > (
              <button, key={ cate, g, o, r, y  }, onCli, ck={  () = > setSelectedCategory(category)  } classNa, me={ `px-4py -2rounded -lgtext -smfont -semiboldtransition -colo, r, s ${
                  selectedCategory === category
                     ? 'bg-blue -600text -white'
                    : 'bg-whitetext -gray -700hover: bg-gray-100borderborder-gray-200'
                 }`}

          <divclassName = 'flexitems-centergap-2'>
            <spanclassName ='text -smtext -gray-600'>Sortby: </span>
            <select, value={ so, r, t, B, y }, onChan, ge={  e = > setSortBy(e.target.va, l, u, e)  } className = 'px-3py -2borderborder -gray -200rounded -lgtext -smfocus: outline-nonefocus: ring -2focus: ring-blue-500'
            ></sele, c, t>
                  <divclassName ='flexitems -centergap-2mb-3' > <span, className={`px-2py -1rounded -fulltext -xsfont -semibo, l, d ${getTypeColor(item.t, ype)}`}
                    >
                  <h3className = 'text -lgfont -boldtext -gray -900mb -3group -hover: text-blue -600transition -colorsline-clamp-2'>
                    {item.t, i, t, l, e}
                <divclassName ='px-6pb-6'>
                  <divclassName='text -blue -600font -semiboldtext -smgroup -hover: text-blue -700transition -colors'>
                    Read{' '}
                    { item.type = == 'case -stu, d, y'
                      ? 'CaseStudy'
                      : item.type === 'guide'
                         ? 'Guide'
                         : 'Article' }{' '}
                    →
          <divclassName='gridgrid -cols -2md: grid-cols -4gap-6'>
            <divclassName='text -center'>
              <divclassName='text -3xlfont -boldtext -blue -600mb-2'>50+</d, i, v>
              <divclassName='text -gray -600'>AI, Article, s</d, i, v>