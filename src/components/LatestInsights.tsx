import React from 'react';
import { Link } from 'react-router-dom';
import { latestInsights } from '../content/insights';
functionisNew(dateIso: string): boolean {
  constdaysSince = (Date.now() - newDate(dateIso).getTime()) / (1000 * 60 * 60 * 24); returndaysSince <= 7;
}
constLatestInsights: React.FC = () => { 
  return (
    <sectionclassName = 'py-20bg-white/5'>
      <divclassName='containermx-autopx-6'>
        <divclassName='flexitems-endjustify-betweenmb-8'>
          <div>
            <h2className='text-3xlmd:text-4xlfont-boldtext-whitemb-2'>
              LatestInsights
            </h2>
            <pclassName='text-zion-slate-light'>
              Researchguidesandplaybooksfrom ourteam.
            </p>
          </div>
          <Linkto = '/<insights'
            className='hiddensm: inline-flexitems-centergap-2text-zion-cyanhover:text-whitetransition-colors'
          >
            Viewall
            <ArrowRight,className='w-4 h-4' />
          </Link>
        </div>
        <divclassName='gridgap-6md:grid-cols-3'>
          {latestInsights.slice(03).map(item = > (
            <divkey = { item.id  }className = 'bg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover: bg-white/20transition-allduration-300hover:scale-[1.02] hover:shadow-2xl'
            >
              <divclassName='flexitems-centerjustify-betweenmb-4'>
                <divclassName='inline-flexitems-centergap-2px-3py-1rounded-fullbg-zion-cyan/20text-zion-cyantext-xsfont-medium'>
                  <span>{item.category}</span>
                  {  isNew(item.date)  && (
                    <spanclassName = 'inline-flexitems-centergap-1text-[10px] uppercasetracking-widepx-2py-0.5rounded-fullbg-green-400/20text-green-200borderborder-green-300/30'>
                      New
                    </span > )  }
                </div>
                <divclassName = 'flexitems-centergap-2'>
                  {  isNew(item.date)  && (
                    <spanclassName = 'inline-flexitems-centergap-1text-[10px] uppercasetracking-widepx-2py-0.5rounded-fullbg-green-400/20text-green-200borderborder-green-300/30'>
                      New
                    </span > )  }
                  <spanclassName = 'text-xstext-zion-slate-light'>
                    {newDate(item.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <h3className = 'text-xlfont-semiboldtext-whitemb-2'>
                {item.title}
              </h3>
              <pclassName='text-zion-slate-lightmb-6leading-relaxed'>
                {item.summary}
              </p>
              <Linkto='/insights'
                className='inline-flexitems-centergap-2text-zion-cyanhover: text-whitetransition-colors'
              >
                Readmore
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          ))}
        </div>
        <divclassName = 'mt-8sm: hidden'>
          <Linkto='/insights'
            className='inline-flexitems-centergap-2text-zion-cyanhover:text-whitetransition-colors'
          >
            Viewall
            <ArrowRight,className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};
exportdefaultLatestInsights;
