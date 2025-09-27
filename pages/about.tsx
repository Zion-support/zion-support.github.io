import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

const About = React.memo(function About(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership, AI Innovation',
      image: '👩‍💼',
      description: '15+ years in technology leadership, former VP at major tech companies.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture, DevOps',
      image: '👨‍💻',
      description: 'Expert in scalable cloud solutions and modern development practices.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      expertise: 'UX/UI Design, Product Strategy',
      image: '👩‍🎨',
      description: 'Award-winning designer with expertise in user-centered design principles.'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      expertise: 'Full-Stack Development, AI/ML',
      image: '👨‍💻',
      description: 'Full-stack developer specializing in AI integration and modern web technologies.'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities and pushing the boundaries of what\'s possible.',
      icon: '🚀',
      color: 'blue'
    }
    {
      title: 'Cli e n t Succ e s s'
      description: 'Y o u r succ e s s i s ou r succ e s s. W e&a p o s;r e commit t e d t o deliver i n g soluti o n s t h a t dr i v e r e a l busin e s s va l u e an d gro w t h.'
      icon: '🎯'
      color: 'gr e e n'
    }
    {
      title: 'Qual i t y Excelle n c e'
      description: 'W e maint a i n th e high e s t standa r d s i n everyth i n g w e d o from c o d e qual i t y t o u s e r experie n c e.'
      icon: '⭐'
      color: 'yel l o w'
    }
    {
      title: 'Transpar e n t Communicat i o n'
      description: 'Cl e a r hon e s t communicat i o n i s th e foundat i o n o f ou r relationsh i p s w i t h clie n t s an d t e a m memb e r s.'
      icon: '💬'
      color: 'pur p l e'
    }
    {
      title: 'Continu o u s Learn i n g'
      description: 'W e embr a c e cha n g e an d continuou s l y le a r n ad a p t an d impr o v e t o s t a y ahead i n th e f a s t-pa c e d t e c h wo r l d.'
      icon: '📚'
      color: 'ind i g o'
    }
    {
      title: 'Collaborat i v e Appro a c h'
      description: 'W e beli e v e i n th e po w e r o f collaborat i o n work i n g a s a n extens i o n o f y o u r t e a m t o achi e v e sha r e d go a l s an d mut u a l succ e s s.'
      icon: '🤝'
      color: 'ora n g e'
    }
  ];

  const st a t s = [
    { number: '10 0+' la b e l: 'Proje c t s Comple t e d' }
    { number: '5 0+' la b e l: 'Ha p p y Clie n t s' }
    { number: '1 0+' la b e l: 'Ye a r s Experie n c e' }
    { number: '2 4/7' la b e l: 'Supp o r t Availa b l e' }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>About U s - Z i o n Ap p</title>
        <meta name="description" content="Le a r n ab o u t Z i o n Ap p's miss i o n values an d commitm e n t t o deliver i n g cutt i n g-e d g e technol o g y soluti o n s." />
        <meta name="viewp o r t" content="wi d t h=dev i c e-wi d t h init i a l-sc a l e=1" />
      </Head>
      <di v classN a m e="mi n-h-scr e e n b g-gradi e n t-t o-b r from-b l u e-5 0 t o-ind i g o-10 0 p t-2 0">
        <di v classN a m e="contai n e r m x-a u t o p x-4 p y-8 ma x-w-7x l">
          <na v classN a m e="m b-8">
            <Link href="/" classN a m e="t e x t-b l u e-60 0 ho v e r:t e x t-b l u e-80 0 f o n t-med i u m transit i o n-col o r s">
              ← B a c k t o H o m e
            </Link>
          </na v>

          <hea d e r classN a m e="t e x t-cen t e r m b-1 6">
            <h 1 classN a m e="t e x t-5x l m d:t e x t-6x l f o n t-b o l d t e x t-b l u e-60 0 m b-4 b g-gradi e n t-t o-r from-b l u e-60 0 t o-ind i g o-60 0 b g-c l i p-t e x t t e x t-transpar e n t">
              About Z i o n Ap p
            </h 1>
            <p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o lead i n g-rela x e d">
              W e&a p o s;r e a t e a m o f passion a t e technologi s t s dedica t e d t o transform i n g busines s e s thro u g h innovat i v e soluti o n s an d cutt i n g-e d g e technol o g y.
            </p>
          </hea d e r>

          {/* Miss i o n Sect i o n */}
          <sect i o n classN a m e="m b-2 0">
            <di v classN a m e="b g-wh i t e roun d e d-2x l sha d o w-x l p-8 m d:p-1 2">
              <di v classN a m e="t e x t-cen t e r m b-1 2">
                <h 2 classN a m e="t e x t-4x l f o n t-b o l d t e x t-g r a y-90 0 m b-6">Ou r Miss i o n</h 2>
                <p classN a m e="t e x t-x l t e x t-g r a y-60 0 lead i n g-rela x e d ma x-w-4x l m x-a u t o">
                  T o empo w e r busines s e s w i t h innovat i v e technol o g y soluti o n s t h a t dr i v e gro w t h efficie n c y an d succ e s s i n th e digi t a l ag e.
                </p>
              </di v>
            </di v>
          </sect i o n>

          {/* Val u e s Sect i o n */}
          <sect i o n classN a m e="m b-2 0">
            <h 2 classN a m e="t e x t-4x l f o n t-b o l d t e x t-cen t e r t e x t-g r a y-90 0 m b-1 6">Ou r Val u e s</h 2>
            <di v classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 l g:g r i d-c o l s-3 ga p-8">
              {values.ma p((va l u e in d e x) => (
                <di v ke y={in d e x} classN a m e="b g-wh i t e roun d e d-x l p-6 sha d o w-l g ho v e r:sha d o w-x l transit i o n-sha d o w durat i o n-30 0">
                  <di v classN a m e="t e x t-4x l m b-4">{va l u e.icon}</di v>
                  <h 3 classN a m e="t e x t-x l f o n t-semib o l d t e x t-g r a y-90 0 m b-3">{va l u e.title}</h 3>
                  <p classN a m e="t e x t-g r a y-60 0 lead i n g-rela x e d">{va l u e.description}</p>
                </di v>
              ))}
            </di v>
          </sect i o n>

          {/* T e a m Sect i o n */}
          <sect i o n classN a m e="m b-2 0">
            <h 2 classN a m e="t e x t-4x l f o n t-b o l d t e x t-cen t e r t e x t-g r a y-90 0 m b-1 6">M e e t Ou r T e a m</h 2>
            <di v classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 l g:g r i d-c o l s-4 ga p-8">
              {teamMemb e r s.ma p((mem b e r in d e x) => (
                <di v ke y={in d e x} classN a m e="b g-wh i t e roun d e d-x l p-6 sha d o w-l g ho v e r:sha d o w-x l transit i o n-sha d o w durat i o n-30 0 t e x t-cen t e r">
                  <di v classN a m e="t e x t-6x l m b-4">{mem b e r.image}</di v>
                  <h 3 classN a m e="t e x t-x l f o n t-semib o l d t e x t-g r a y-90 0 m b-2">{mem b e r.n a m e}</h 3>
                  <p classN a m e="t e x t-b l u e-60 0 f o n t-med i u m m b-2">{mem b e r.r o l e}</p>
                  <p classN a m e="t e x t-s m t e x t-g r a y-50 0 m b-3">{mem b e r.expert i s e}</p>
                  <p classN a m e="t e x t-g r a y-60 0 t e x t-s m lead i n g-rela x e d">{mem b e r.description}</p>
                </di v>
              ))}
            </di v>
          </sect i o n>

          {/* St a t s Sect i o n */}
          <sect i o n classN a m e="m b-2 0">
            <di v classN a m e="b g-gradi e n t-t o-r from-b l u e-60 0 t o-ind i g o-60 0 roun d e d-2x l p-8 m d:p-1 2 t e x t-wh i t e">
              <h 2 classN a m e="t e x t-4x l f o n t-b o l d t e x t-cen t e r m b-1 2">Ou r Imp a c t</h 2>
              <di v classN a m e="g r i d g r i d-c o l s-2 m d:g r i d-c o l s-4 ga p-8">
                {st a t s.ma p((s t a t in d e x) => (
                  <di v ke y={in d e x} classN a m e="t e x t-cen t e r">
                    <di v classN a m e="t e x t-4x l m d:t e x t-5x l f o n t-b o l d m b-2">{s t a t.number}</di v>
                    <di v classN a m e="t e x t-b l u e-10 0">{s t a t.la b e l}</di v>
                  </di v>
                ))}
              </di v>
            </di v>
          </sect i o n>

          {/* CT A Sect i o n */}
          <sect i o n classN a m e="t e x t-cen t e r">
            <di v classN a m e="b g-wh i t e roun d e d-2x l sha d o w-x l p-8 m d:p-1 2">
              <h 2 classN a m e="t e x t-4x l f o n t-b o l d t e x t-g r a y-90 0 m b-6">Re a d y t o W o r k W i t h U s?</h 2>
              <p classN a m e="t e x t-x l t e x t-g r a y-60 0 m b-8 ma x-w-2x l m x-a u t o">
                Le t&a p o s;s disc u s s ho w w e ca n h e l p transf o r m y o u r busin e s s w i t h cutt i n g-e d g e technol o g y soluti o n s.
              </p>
              <di v classN a m e="f l e x f l e x-co l s m:f l e x-ro w ga p-4 just i f y-cen t e r">
                <Link href="/cont a c t" classN a m e="b g-b l u e-60 0 t e x t-wh i t e p x-8 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-b l u e-70 0 transit i o n-col o r s">
                  Ge t I n To u c h
                </Link>
                <Link href="/servi c e s" classN a m e="bor d e r-2 bor d e r-b l u e-60 0 t e x t-b l u e-60 0 p x-8 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-b l u e-60 0 ho v e r:t e x t-wh i t e transit i o n-col o r s">
                  V i e w Ou r Servi c e s
                </Link>
              </di v>
            </di v>
          </sect i o n>
        </di v>
      </di v>
    </>
  )});

export default About;