import React { useState useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPol i c y(): JSX.Element {
  const [isVisible setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)} []);

  const { trackClick } = useAnalytics();

  const secti o n s = [
    {
      ti t l e: 'Informat i o n W e Coll e c t'
      cont e n t: 'W e coll e c t informat i o n yo u prov i d e direc t l y t o u s s u c h a s w h e n yo u cre a t e a n acco u n t cont a c t u s o r us e ou r servi c e s. T h i s ma y incl u d e y o u r n a m e em a i l addr e s s ph o n e number comp a n y informat i o n an d an y ot h e r informat i o n yo u cho o s e t o prov i d e.'
    }
    {
      ti t l e: 'Ho w W e Us e Y o u r Informat i o n'
      cont e n t: 'W e us e th e informat i o n w e coll e c t t o prov i d e maint a i n an d impr o v e ou r servi c e s communic a t e w i t h yo u proc e s s transacti o n s an d com p l y w i t h le g a l obligati o n s. W e ma y a l s o us e y o u r informat i o n t o s e n d yo u techni c a l noti c e s upda t e s an d promotio n a l materi a l s.'
    }
    {
      ti t l e: 'Informat i o n Shar i n g an d Disclos u r e'
      cont e n t: 'W e d o no t sh a r e o r s e l l y o u r perso n a l informat i o n t o th i r d part i e s fo r th e i r market i n g purpo s e s with o u t y o u r expli c i t cons e n t. W e ma y sh a r e informat i o n w i t h serv i c e provid e r s wh o perf o r m servi c e s o n ou r beh a l f o r i f requi r e d b y la w.'
    }
    {
      ti t l e: 'D a t a Secur i t y'
      cont e n t: 'W e implem e n t reasona b l e secur i t y measu r e s t o prot e c t y o u r informat i o n from unauthori z e d acc e s s disclos u r e alterat i o n an d destruct i o n. Howe v e r n o met h o d o f transmiss i o n o v e r th e Inter n e t o r electro n i c stor a g e i s 10 0% sec u r e.'
    }
    {
      ti t l e: 'Y o u r Choi c e s'
      cont e n t: 'Yo u h a v e th e ri g h t t o acc e s s upd a t e o r del e t e y o u r perso n a l informat i o n. Yo u ca n a l s o op t-ou t o f receiv i n g promotio n a l communicati o n s from u s a t an y t i m e b y follow i n g th e unsubscr i b e instructi o n s i n th o s e communicati o n s.'
    }
    {
      ti t l e: 'Chan g e s t o T h i s Priv a c y Pol i c y'
      cont e n t: 'W e ma y upd a t e t h i s Priv a c y Pol i c y from t i m e t o t i m e. W e w i l l not i f y yo u o f an y chan g e s b y post i n g th e ne w Priv a c y Pol i c y o n t h i s p a g e an d updat i n g th e "L a s t Upda t e d" d a t e. W e encour a g e yo u t o rev i e w t h i s Priv a c y Pol i c y periodica l l y fo r an y chan g e s.'
    }
    {
      ti t l e: 'Contact U s'
      cont e n t: 'I f yo u h a v e an y questi o n s ab o u t t h i s Priv a c y Pol i c y ple a s e cont a c t u s a t priv a c y@zion a p p.co m.'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>Priv a c y Pol i c y - Z i o n Ap p</title>
        <meta name="description" content="R e a d Z i o n Ap p's Priv a c y Pol i c y t o underst a n d ho w w e coll e c t us e an d prot e c t y o u r informat i o n." />
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
              Priv a c y Pol i c y
            </h 1>
            <p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o lead i n g-rela x e d">
              Y o u r priv a c y i s import a n t t o u s. T h i s pol i c y expla i n s ho w w e han d l e y o u r d a t a.
            </p>
          </hea d e r>

          <m a i n classN a m e="b g-wh i t e roun d e d-2x l sha d o w-l g p-8">
            {secti o n s.ma p((sect i o n in d e x) => (
              <di v ke y={in d e x} classN a m e="m b-8 l a s t:m b-0">
                <h 2 classN a m e="t e x t-2x l f o n t-b o l d t e x t-g r a y-90 0 m b-4 bor d e r-b p b-2">
                  {sect i o n.ti t l e}
                </h 2>
                <p classN a m e="t e x t-g r a y-70 0 lead i n g-rela x e d">
                  {sect i o n.cont e n t}
                </p>
              </di v>
            ))}
            <p classN a m e="t e x t-s m t e x t-g r a y-50 0 m t-8">L a s t Upda t e d: Octo b e r 2 6 2 0 2 5</p>
          </m a i n>

          <sect i o n classN a m e="m t-1 6 t e x t-cen t e r">
            <di v classN a m e="b g-b l u e-60 0 roun d e d-2x l p-8 t e x t-wh i t e">
              <h 2 classN a m e="t e x t-3x l f o n t-b o l d m b-4">Questi o n s About Y o u r Priv a c y?</h 2>
              <p classN a m e="t e x t-x l m b-6">Contact ou r priv a c y t e a m fo r an y conce r n s o r inquir i e s.</p>
              <Link href="/cont a c t" classN a m e="b g-wh i t e t e x t-b l u e-60 0 p x-8 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-g r a y-10 0 transit i o n-col o r s">
                Contact U s
              </Link>
            </di v>
          </sect i o n>
        </di v>
      </di v>
    </>
  )}