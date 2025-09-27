import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us such as when you create an account contact us or use our services. This may include your name email address phone number company information and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide maintain and improve our services communicate with you process transactions and comply with legal obligations. We may also use your information to send you technical notices updates and promotional materials.'
    },
    {
      title: 'Information Sharing and Disclosure',
      content: 'We do not share or sell your personal information to third parties for their marketing purposes without your explicit consent. We may share information with service providers who perform services on our behalf or if required by law.'
    },
    {
      title: 'Data Security',
      content: 'We implement reasonable security measures to protect your information from unauthorized access disclosure alteration and destruction. However no method of transmission over the Internet or electronic storage is 100% secure.'
    },
    {
      title: 'Your Choices',
      content: 'You have the right to access update or delete your personal information. You can also opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions in those communications.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy please contact us at privacy@zionapp.com.'
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
          </nav>

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
                  {sect i o n.title}
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