import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {  useState,  useEffect  } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const About = React.memo(function About(): JSX.Element { 
  const [  isVisible,    setIsVisible  ] = useState(false);

  useEffect(() => {
    setIsVisible(true);
   }, []););

  const { trackClick } = useAnalytics();

  constteamMembe rs = [
    {
      name: 'Sar ah Johns on'
      ro le: 'CEO & Found er'
      experti se: 'Strateg ic Leadersh ip AI Innovati on'
      image: '👩‍💼',
		description: '1 5+ yea rs in technolo gy leadersh ip form er VP at maj or te ch compani es.'
    }
    {
      name: 'Micha el Ch en'
      ro le: 'CTO'
      experti se: 'Clo ud Architectu re DevO ps'
      image: '👨‍💻',
		description: 'Expe rt in scalab le clo ud solutio ns and mode rn developme nt practic es.'
    }
    {
      name: 'Emi ly Rodrigu ez'
      ro le: 'Le ad Design er'
      experti se: 'UX/UI Desi gn Produ ct Strate gy'
      image: '👩‍🎨',
		description: 'Awa rd-winni ng design er wi th experti se in us er-center ed desi gn principl es.'
    }
    {
      name: 'Dav id Kim'
      ro le: 'Seni or Develop er'
      experti se: 'Fu ll-Sta ck Developme nt AI/ML'
      image: '👨‍💻',
		description: 'Fu ll-sta ck develop er specializi ng in AI integrati on and mode rn web technologi es.'
    }
  ];

  constvalu es = [
    {
      tit le: 'Innovati on Fir st'
      description: 'We st ay at the forefro nt of technolo gy constant ly explori ng new possibiliti es and pushi ng the boundari es of wh at\'spossib le.'
      ic on: '🚀'
      col or: 'bl ue'
    }
    {
      tit le: 'Clie nt Succe ss'
      description: 'Yo ur succe ss is our succe ss. We&ap os;re committ ed to deliveri ng solutio ns th at dri ve re al busine ss val ue and grow th.'
      ic on: '🎯'
      col or: 'gre en'
    }
    {
      tit le: 'Quali ty Excellen ce'
      description: 'We mainta in the highe st standar ds in everythi ng we do fromc od equali ty to us er experien ce.'
      ic on: '⭐'
      col or: 'yell ow'
    }
    {
      tit le: 'Transpare nt Communicati on'
      description: 'Cle ar hone st communicati on is the foundati on of our relationshi ps wi th clien ts and te am membe rs.'
      ic on: '💬'
      col or: 'purp le'
    }
    {
      tit le: 'Continuo us Learni ng'
      description: 'We embra ce chan ge and continuous ly lea rn ada pt and impro ve to st ay aheadi nthe fa st-pac ed te ch wor ld.'
      ic on: '📚'
      col or: 'indi go'
    }
    {
      tit le: 'Collaborati ve Approa ch'
      description: 'We belie ve in the pow er of collaborati on worki ng as an extensi on of yo ur te am to achie ve shar ed goa ls and mutu al succe ss.'
      ic on: '🤝'
      col or: 'oran ge'
    }
  ];

  conststa ts = [
    { number: '10 0+' lab el: 'Projec ts Complet ed' }
    { number: '5 0+' lab el: 'Hap py Clien ts' }
    { number: '1 0+' lab el: 'Yea rs Experien ce' }
    { number: '2 4/7' lab el: 'Suppo rt Availab le' }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>AboutU s - Zi on App</title>
        <metaname="description" content="Lea rn abo ut Zi on App'smissi on valu es and commitme nt to deliveri ng cutti ng-ed ge technolo gy solutio ns." />
        <metaname="viewpo rt" content="wid th=devi ce-wid th initi al-sca le=1" />
      </Head>
      <div classNa me="min-h-scre en bg-gradie nt-to-br from-bl ue-5 0 to-indi go-10 0 pt-2 0">
        <div classNa me="contain er mx-au to px-4 p y-8 max-w-7xl">
          <nav classNa me="mb-8">
            <Linkhref="/" classNa me="te xt-bl ue-60 0 hov er:te xt-bl ue-80 0 fo nt-medi um transiti on-colo rs">
              ← Ba ck to Ho me
            </Link>
          </nav>

          <head er classNa me="te xt-cent er mb-1 6">
            <h 1 classNa me="te xt-5xl md:te xt-6xl fo nt-bo ld te xt-bl ue-60 0 mb-4 b g-gradie nt-to-rfrom-bl ue-60 0 to-indi go-60 0 bg-cl ip-te xt te xt-transpare nt">
              AboutZ io nApp
            </h 1>
            <pclassNa me="te xt-xl te xt-gr ay-60 0 max-w-3xl mx-au to leadi ng-relax ed">
              We&ap os;re at ea mo fpassiona te technologis ts dedicat ed to transformi ng business es throu gh innovati ve solutio ns and cutti ng-ed ge technolo gy.
            </p>
          </head er>

          {/* Missi on Secti on */}
          <secti on classNa me="mb-2 0">
            <div classNa me="bg-whi te round ed-2xl shad ow-xl p-8 m d:p-1 2">
              <div classNa me="te xt-cent er mb-1 2">
                <h 2 classNa me="te xt-4xl fo nt-bo ld te xt-gr ay-90 0 mb-6">Our Missi on</h 2>
                <pclassNa me="te xt-xl te xt-gr ay-60 0 leadi ng-relax ed max-w-4xl mx-au to">
                  To empow er business es wi th innovati ve technolo gy solutio ns th at dri ve grow th efficien cy and succe ss in the digit al age.
                </p>
              </div>
            </div>
          </secti on>

          {/* Valu es Secti on */}
          <secti on classNa me="mb-2 0">
            <h 2 classNa me="te xt-4xl fo nt-bo ld te xt-cent er te xt-gr ay-90 0 mb-1 6">Our Valu es</h 2>
            <div classNa me="gr id gr id-co ls-1 m d:gr id-co ls-2 l g:gr id-co ls-3 gap-8">
              {valu es.map((val ue ind ex) => (
                <div key={ind ex} classNa me="bg-whi te round ed-xl p-6 shad ow-lg hov er:shad ow-xl transiti on-shad ow durati on-30 0">
                  <div classNa me="te xt-4xl mb-4">{val ue.ic on}</div>
                  <h 3 classNa me="te xt-xl fo nt-semibo ld te xt-gr ay-90 0 mb-3">{val ue.tit le}</h 3>
                  <pclassNa me="te xt-gr ay-60 0 leadi ng-relax ed">{val ue.description}</p>
                </div>
              ))}
            </div>
          </secti on>

          {/* Te am Secti on */}
          <secti on classNa me="mb-2 0">
            <h 2 classNa me="te xt-4xl fo nt-bo ld te xt-cent er te xt-gr ay-90 0 mb-1 6">Me et Our Te am</h 2>
            <div classNa me="gr id gr id-co ls-1 m d:gr id-co ls-2 l g:gr id-co ls-4 gap-8">
              {teamMembe rs.map((memb er ind ex) => (
                <div key={ind ex} classNa me="bg-whi te round ed-xl p-6 shad ow-lg hov er:shad ow-xl transiti on-shad ow durati on-30 0 te xt-cent er">
                  <div classNa me="te xt-6xl mb-4">{memb er.image}</div>
                  <h 3 classNa me="te xt-xl fo nt-semibo ld te xt-gr ay-90 0 mb-2">{memb er.na me}</h 3>
                  <pclassNa me="te xt-bl ue-60 0 fo nt-medi um mb-2">{memb er.ro le}</p>
                  <pclassNa me="te xt-sm te xt-gr ay-50 0 mb-3">{memb er.experti se}</p>
                  <pclassNa me="te xt-gr ay-60 0 te xt-sm leadi ng-relax ed">{memb er.description}</p>
                </div>
              ))}
            </div>
          </secti on>

          {/* Sta ts Secti on */}
          <secti on classNa me="mb-2 0">
            <div classNa me="bg-gradie nt-to-rfrom-bl ue-60 0 to-indi go-60 0 round ed-2xl p-8 m d:p-1 2 te xt-whi te">
              <h 2 classNa me="te xt-4xl fo nt-bo ld te xt-cent er mb-1 2">Our Impa ct</h 2>
              <div classNa me="gr id gr id-co ls-2 m d:gr id-co ls-4 gap-8">
                {sta ts.map((st at ind ex) => (
                  <div key={ind ex} classNa me="te xt-cent er">
                    <div classNa me="te xt-4xl md:te xt-5xl fo nt-bo ld mb-2">{st at.number}</div>
                    <div classNa me="te xt-bl ue-10 0">{st at.lab el}</div>
                  </div>
                ))}
              </div>
            </div>
          </secti on>

          {/* CTA Secti on */}
          <secti on classNa me="te xt-cent er">
            <div classNa me="bg-whi te round ed-2xl shad ow-xl p-8 m d:p-1 2">
              <h 2 classNa me="te xt-4xl fo nt-bo ld te xt-gr ay-90 0 mb-6">Rea dy to Wo rk Wi th Us?</h 2>
              <pclassNa me="te xt-xl te xt-gr ay-60 0 mb-8 max-w-2xl mx-au to">
                Let&ap os;sdiscu ss how we can he lp transfo rm yo ur busine ss wi th cutti ng-ed ge technolo gy solutio ns.
              </p>
              <div classNa me="fl ex fl ex-col sm:fl ex-row gap-4 justi fy-cent er">
                <Linkhref="/conta ct" classNa me="bg-bl ue-60 0 te xt-whi te px-8 p y-3 round ed-lg fo nt-semibo ld hov er:bg-bl ue-70 0 transiti on-colo rs">
                  Get In Tou ch
                </Link>
                <Linkhref="/servic es" classNa me="bord er-2 bord er-bl ue-60 0 te xt-bl ue-60 0 px-8 p y-3 round ed-lg fo nt-semibo ld hov er:bg-bl ue-60 0 hov er:te xt-whi te transiti on-colo rs">
                  Vi ew Our Servic es
                </Link>
              </div>
            </div>
          </secti on>
        </div>
      </div>
    </>
  )});

exportdefaultAbout;