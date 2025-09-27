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
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value and growth.',
      icon: '🎯',
      color: 'green'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do from code quality to user experience.',
      icon: '⭐',
      color: 'yellow'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear honest communication is the foundation of our relationships with clients and team members.',
      icon: '💬',
      color: 'purple'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace change and continuously learn adapt and improve to stay ahead in the fast-paced tech world.',
      icon: '📚',
      color: 'indigo'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>About U s - Z i o n Ap p</title>
        <meta name="description" content="Le a r n ab o u t Z i o n Ap p's miss i o n values an d commitm e n t t o deliver i n g cutt i n g-e d g e technol o g y soluti o n s." />
        <meta name="viewp o r t" content="wi d t h=dev i c e-wi d t h init i a l-sc a l e=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Zion App
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
            </p>
          </header>

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