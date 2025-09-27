import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)} []);

  const { trackClick } = useAnalytics();

  const handleInputCha n g e = (e: React.ChangeEv e n t<HTMLInputElem e n t | HTMLTextAreaElem e n t>) => {
    const { n a m e va l u e } = e.tar g e t;
    setFormData(p r e v => ({
      ...p r e v
      [n a m e]: va l u e
    }))};

  const handleSub m i t = async (e: React.FormEv e n t) => {
    e.preventDefa u l t();
    setIsSubmitt i n g(true);
    
    // Simul a t e f o r m submiss i o n
    aw a i t ne w Prom i s e(reso l v e => setTime o u t(reso l v e 2 0 0 0));
    
    setIsSubmitt i n g(false);
    trackClick('cont a c t-f o r m-sub m i t' 'convers i o n');
    al e r t('Th a n k yo u fo r y o u r mess a g e! W e\'l l ge t b a c k t o yo u s o o n.');
    
    // Re s e t f o r m
    setFormData({
      name: ''
      email: ''
      comp a n y: ''
      subject: '',
      message: ''
    })};

  const contactI n f o = [
    {
      i c o n: '📧'
      ti t l e: 'Em a i l U s'
      deta i l s: 'he l l o@zion a p p.co m'
      description: 'S e n d u s a n em a i l an d w e\'l l resp o n d wit h i n 2 4 ho u r s.'
    }
    {
      i c o n: '📞'
      ti t l e: 'C a l l U s'
      deta i l s: '+1 (55 5) 12 3-4 5 6 7'
      description: 'Mo n-Fr i from 9a m t o 6p m ES T'
    }
    {
      i c o n: '📍'
      ti t l e: 'Vi s i t U s'
      deta i l s: '12 3 T e c h Str e e t Sili c o n Val l e y C A 94 0 0 0'
      description: 'C o m e sa y he l l o a t ou r off i c e'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Contact U s - Z i o n Ap p</title>
        <meta name="description" content="Ge t i n to u c h w i t h Z i o n Ap p. W e'r e h e r e t o h e l p yo u transf o r m y o u r busin e s s w i t h cutt i n g-e d g e technol o g y soluti o n s." />
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
            <h 1 classN a m e="t e x t-5x l m d:t e x t-6x l f o n t-b o l d t e x t-g r a y-90 0 m b-6">
              Contact U s
            </h 1>
            <p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o">
              Re a d y t o transf o r m y o u r busin e s s? Le t&a p o s;s disc u s s ho w w e ca n h e l p yo u achi e v e y o u r go a l s.
            </p>
          </hea d e r>

          <di v classN a m e="g r i d g r i d-c o l s-1 l g:g r i d-c o l s-2 ga p-1 2">
            {/* Contact F o r m */}
            <di v classN a m e="b g-wh i t e roun d e d-2x l sha d o w-x l p-8">
              <h 2 classN a m e="t e x t-2x l f o n t-b o l d t e x t-g r a y-90 0 m b-6">S e n d u s a Mess a g e</h 2>
              <f o r m onSub m i t={handleSub m i t} classN a m e="sp a c e-y-6">
                <di v classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 ga p-6">
                  <di v>
                    <la b e l html F o r="n a m e" classN a m e="bl o c k t e x t-s m f o n t-med i u m t e x t-g r a y-70 0 m b-2">
                      F u l l N a m e *
                    </la b e l>
                    <in p u t
                      type="t e x t"
                      i d="n a m e"
                      name="n a m e"
                      va l u e={formData.n a m e}
                      onCha n g e={handleInputCha n g e}
                      requi r e d
                      classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-l g fo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:bor d e r-transpar e n t"
                      placehol d e r="Y o u r f u l l n a m e"
                    />
                  </di v>
                  <di v>
                    <la b e l html F o r="em a i l" classN a m e="bl o c k t e x t-s m f o n t-med i u m t e x t-g r a y-70 0 m b-2">
                      Em a i l Addr e s s *
                    </la b e l>
                    <in p u t
                      type="em a i l"
                      i d="em a i l"
                      name="em a i l"
                      va l u e={formData.em a i l}
                      onCha n g e={handleInputCha n g e}
                      requi r e d
                      classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-l g fo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:bor d e r-transpar e n t"
                      placehol d e r="y o u r.em a i l@exam p l e.co m"
                    />
                  </di v>
                </di v>
                <di v>
                  <la b e l html F o r="comp a n y" classN a m e="bl o c k t e x t-s m f o n t-med i u m t e x t-g r a y-70 0 m b-2">
                    Comp a n y
                  </la b e l>
                  <in p u t
                    type="t e x t"
                    i d="comp a n y"
                    name="comp a n y"
                    va l u e={formData.comp a n y}
                    onCha n g e={handleInputCha n g e}
                    classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-l g fo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:bor d e r-transpar e n t"
                    placehol d e r="Y o u r comp a n y n a m e"
                  />
                </di v>
                <di v>
                  <la b e l html F o r="subj e c t" classN a m e="bl o c k t e x t-s m f o n t-med i u m t e x t-g r a y-70 0 m b-2">
                    Subj e c t *
                  </la b e l>
                  <in p u t
                    type="t e x t"
                    i d="subj e c t"
                    name="subj e c t"
                    va l u e={formData.subj e c t}
                    onCha n g e={handleInputCha n g e}
                    requi r e d
                    classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-l g fo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:bor d e r-transpar e n t"
                    placehol d e r="W h a t ca n w e h e l p yo u w i t h?"
                  />
                </di v>
                <di v>
                  <la b e l html F o r="mess a g e" classN a m e="bl o c k t e x t-s m f o n t-med i u m t e x t-g r a y-70 0 m b-2">
                    Mess a g e *
                  </la b e l>
                  <texta r e a
                    i d="mess a g e"
                    name="mess a g e"
                    va l u e={formData.mess a g e}
                    onCha n g e={handleInputCha n g e}
                    requi r e d
                    r o w s={6}
                    classN a m e="w-f u l l p x-4 p y-3 bor d e r bor d e r-g r a y-30 0 roun d e d-l g fo c u s:r i n g-2 fo c u s:r i n g-b l u e-50 0 fo c u s:bor d e r-transpar e n t"
                    placehol d e r="T e l l u s ab o u t y o u r proj e c t o r quest i o n..."
                  />
                </di v>
                <but t o n
                  type="sub m i t"
                  disab l e d={isSubmitt i n g}
                  classN a m e="w-f u l l b g-b l u e-60 0 t e x t-wh i t e p y-3 p x-6 roun d e d-l g f o n t-semib o l d ho v e r:b g-b l u e-70 0 transit i o n-col o r s disab l e d:opac i t y-5 0 disab l e d:cur s o r-no t-allo w e d"
                >
                  {isSubmitt i n g ? 'Send i n g...' : 'S e n d Mess a g e'}
                </but t o n>
              </f o r m>
            </di v>

            {/* Contact Informat i o n */}
            <di v classN a m e="sp a c e-y-8">
              <di v>
                <h 2 classN a m e="t e x t-2x l f o n t-b o l d t e x t-g r a y-90 0 m b-6">Ge t i n To u c h</h 2>
                <p classN a m e="t e x t-g r a y-60 0 m b-8">
                  W e&a p o s;r e h e r e t o h e l p yo u succ e e d. Re a c h ou t t o u s thro u g h an y o f th e chann e l s be l o w an d w e&a p o s;l l ge t b a c k t o yo u a s s o o n a s possi b l e.
                </p>
              </di v>

              <di v classN a m e="sp a c e-y-6">
                {contactI n f o.ma p((i n f o in d e x) => (
                  <di v ke y={in d e x} classN a m e="f l e x it e m s-st a r t sp a c e-x-4 p-6 b g-wh i t e roun d e d-x l sha d o w-l g">
                    <di v classN a m e="t e x t-3x l">{i n f o.i c o n}</di v>
                    <di v>
                      <h 3 classN a m e="t e x t-l g f o n t-semib o l d t e x t-g r a y-90 0 m b-2">{i n f o.ti t l e}</h 3>
                      <p classN a m e="t e x t-b l u e-60 0 f o n t-med i u m m b-1">{i n f o.deta i l s}</p>
                      <p classN a m e="t e x t-g r a y-60 0 t e x t-s m">{i n f o.description}</p>
                    </di v>
                  </di v>
                ))}
              </di v>

              <di v classN a m e="b g-b l u e-5 0 roun d e d-x l p-6">
                <h 3 classN a m e="t e x t-l g f o n t-semib o l d t e x t-g r a y-90 0 m b-3">Respo n s e T i m e</h 3>
                <p classN a m e="t e x t-g r a y-60 0 t e x t-s m">
                  W e typica l l y resp o n d t o al l inquir i e s wit h i n 2 4 ho u r s dur i n g busin e s s d a y s. 
                  Fo r urg e n t matt e r s ple a s e c a l l u s direc t l y.
                </p>
              </di v>
            </di v>
          </di v>
        </di v>
      </di v>
    </>
  )}