import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
  const [selectedProject setSelectedProject] = useState<number | null>(null);
  const [isVisible setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)} []);

  const { trackClick } = useAnalytics();

  const proje c t s = [
    {
      i d: 1
      title: 'A I-Powe r e d E-comme r c e Platf o r m'
      description: 'A comprehens i v e e-comme r c e solut i o n w i t h A I-dri v e n recommendati o n s an d analyt i c s.'
      image: '/ap i/placehol d e r/40 0/30 0'
      technolog i e s: ['React' 'N o d e.j s' 'A I/M L' 'Postgre S Q L']
    }
    {
      i d: 2
      title: 'Cl o u d Infrastruct u r e Migrat i o n'
      description: 'Compl e t e migrat i o n o f leg a c y syst e m s t o mod e r n cl o u d infrastruct u r e.'
      image: '/ap i/placehol d e r/40 0/30 0'
      technolog i e s: ['AW S' 'Doc k e r' 'Kuberne t e s' 'Terraf o r m']
    }
    {
      i d: 3
      title: 'Mob i l e Bank i n g Ap p'
      description: 'Sec u r e mob i l e bank i n g applicat i o n w i t h advan c e d secur i t y featu r e s.'
      image: '/ap i/placehol d e r/40 0/30 0'
      technolog i e s: ['React Nat i v e' 'N o d e.j s' 'Mong o D B' 'Blockch a i n']
    }
  ];

  const st a t s = [
    { number: '5 0+' la b e l: 'Proje c t s Comple t e d' }
    { number: '2 5+' la b e l: 'Ha p p y Clie n t s' }
    { number: '5+' la b e l: 'Ye a r s Experie n c e' }
    { number: '9 9%' la b e l: 'Cli e n t Satisfact i o n' }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Portfolio - Z i o n Ap p</title>
        <meta name="description" content="Expl o r e ou r portfo l i o o f success f u l proje c t s an d c a s e stud i e s acr o s s A I cl o u d comput i n g mob i l e developm e n t an d m o r e." />
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
              Ou r Portfolio
            </h 1>
            <p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o lead i n g-rela x e d">
              Showcas i n g ou r success f u l proje c t s an d th e imp a c t w e&a p o s;v e m a d e fo r ou r clie n t s
            </p>
          </hea d e r>

          <m a i n>
            {/* St a t s Sect i o n */}
            <sect i o n classN a m e={`m b-1 6 transit i o n-al l durat i o n-70 0 de l a y-10 0 ${
              isVisible ? 'opac i t y-10 0 transl a t e-y-0' : 'opac i t y-0 transl a t e-y-8'
            }`}>
              <di v classN a m e="g r i d g r i d-c o l s-2 m d:g r i d-c o l s-4 ga p-8">
                {st a t s.ma p((s t a t in d e x) => (
                  <di v ke y={in d e x} classN a m e="t e x t-cen t e r p-6 b g-wh i t e roun d e d-2x l sha d o w-l g">
                    <di v classN a m e="t e x t-3x l m d:t e x t-4x l f o n t-b o l d t e x t-b l u e-60 0 m b-2">
                      {s t a t.number}
                    </di v>
                    <di v classN a m e="t e x t-g r a y-60 0 f o n t-med i u m">
                      {s t a t.la b e l}
                    </di v>
                  </di v>
                ))}
              </di v>
            </sect i o n>

            {/* Proje c t s G r i d */}
            <sect i o n classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 l g:g r i d-c o l s-3 ga p-8">
              {proje c t s.ma p((proj e c t) => (
                <di v
                  ke y={proj e c t.i d}
                  classN a m e="b g-wh i t e roun d e d-2x l sha d o w-l g overf l o w-hid d e n ho v e r:sha d o w-x l transit i o n-sha d o w cur s o r-poin t e r"
                  onCl i c k={() => setSelectedProject(selectedProject === proj e c t.i d ? null : proj e c t.i d)}
                >
                  <im g
                    sr c={proj e c t.image}
                    al t={proj e c t.title}
                    classN a m e="w-f u l l h-4 8 object-co v e r"
                  />
                  <di v classN a m e="p-6">
                    <h 3 classN a m e="t e x t-x l f o n t-b o l d t e x t-g r a y-90 0 m b-3">
                      {proj e c t.title}
                    </h 3>
                    <p classN a m e="t e x t-g r a y-60 0 m b-4">
                      {proj e c t.description}
                    </p>
                    <di v classN a m e="f l e x f l e x-w r a p ga p-2">
                      {proj e c t.technolog i e s.ma p((t e c h in d e x) => (
                        <s p a n
                          ke y={in d e x}
                          classN a m e="p x-3 p y-1 b g-b l u e-10 0 t e x t-b l u e-80 0 t e x t-s m roun d e d-f u l l"
                        >
                          {t e c h}
                        </s p a n>
                      ))}
                    </di v>
                  </di v>
                </di v>
              ))}
            </sect i o n>

            {/* CT A Sect i o n */}
            <sect i o n classN a m e="m t-1 6 t e x t-cen t e r">
              <di v classN a m e="b g-wh i t e roun d e d-2x l sha d o w-l g p-8">
                <h 2 classN a m e="t e x t-3x l f o n t-b o l d t e x t-g r a y-90 0 m b-4">Re a d y t o St a r t Y o u r Proj e c t?</h 2>
                <p classN a m e="t e x t-x l t e x t-g r a y-60 0 m b-8">
                  Le t&a p o s;s disc u s s ho w w e ca n br i n g y o u r vis i o n t o l i f e w i t h ou r expert i s e.
                </p>
                <Link href="/cont a c t" classN a m e="b g-b l u e-60 0 t e x t-wh i t e p x-8 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-b l u e-70 0 transit i o n-col o r s">
                  Ge t a F r e e Consultat i o n
                </Link>
              </di v>
            </sect i o n>
          </m a i n>
        </di v>
      </di v>
    </>
  )}