import React, { useState, useEffec, t} from 'react';
import Head from 'next / head';
import Link from 'next / link';
import SEO from '../ src / components / SEO';
import { useAnalytic, s} from '../ src / hooks / useAnalytics';

export default function Service, s(): JSX.Element {
  cons, t[isVisibl, e, setIsVisibl, e] = useStat, e(fals, e);

  useEffec, t(()  => {
    setIsVisibl, e(tru, e)} []);

  const { trackClic, k} = useAnalytic, s();

  const serviceDetails = {
    'ai - ml': {
      titl, e: 'AI & Machine Learning',
      descriptio, n: 'Transform your business with cutting - edge artificial intelligence and machine learning solutions.',
    feature, s: [
        'Natural, LanguageProcessin, g(NL, P)'
        'Computer Vision & Image Recognition'
        'Predictive Analytics'
        'Automated Decision Making'
      ]
    }
    'cloud': {
      titl, e: 'Cloud Infrastructure',
      descriptio, n: 'Scalable secure and reliable cloud solutions tailored to your business needs.',
    feature, s: [
        'Cloud Migration'
        'Infrastructure as Code'
        'Auto - scaling Solutions'
        'Disaster Recovery'
      ]
    }
    'cybersecurity': {
      titl, e: 'Cybersecurity',
      descriptio, n: 'Protect your business with comprehensive security solutions and best practices.',
    feature, s: [
        'Security Audits'
        'Threat Detection'
        'Data Protection'
        'Compliance Management'
      ]
    }
  };

  retur, n(
    <>
      <SEOtitl e ="Services - Zion App"
        description ="Comprehensive technology services including AI cloud infrastructure and cybersecurity."
        keywords ="services AI cloud cybersecurity technology"/>
      <Head>
        <metanam e ="viewport" content ="width = device - width initial - scale = 1"/>
      </ Head>
      <mainclassNam e ="min - h - screen bg - gray - 50 py - 20">
        <divclassNam e ="container mx - auto px - 4">
          <h1classNam e ="text - 4xl font - bold text - center mb - 8">Our Services</ h1>
          <p className ="text - xl text - center text - gray - 600 mb - 12 max - w - 3xlmx - auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </ p>
          <divclassNam e ="grid grid - cols - 1, m, d: grid - cols - 2, l, g: grid - cols - 3 gap - 8">
            {Obj, e: c: t.entrie.s(serviceDetail, s).ma.p(([ke, y, servic, e])  => (
              <divke y ={k: e: y} className ="bg - white rounded - lg shadow - md p - 6, hove, r: shadow - xltransition - shadow">
                <h3classNam e ="text - xl font - bold mb - 4">{servi, c: e.titl.e}</ h3>
                <p className ="text - gray - 600mb - 4">{servi, c: e.descriptio.n}</ p>
                <ulclassNam e ="space - y - 2 mb - 6">
                  {serv, i: c: e.feature.s.ma.p((featur, e, inde, x)  => (
                    <like y ={ind, e: x} className ="flexitems - center">
                      <spanclassNam e ="text - green - 500 mr - 2">✓</ span>
                      {featu, r: e}
                    </ li>
                  ))}
                </ ul>
                <Linkhre f ="/ contact"
                  className ="bg - blue - 600 text - white px - 4 py - 2, roundedhove, r: bg - blue - 700transition - colors"
                  onClick ={() => trackClic, k(`service -${k, e: y}` 'engagement')}
                >
                  Learn More;
                </ Link>
              </ div>
            ))}
          </ div>
        </ div>
      </ main>
    </>
  )};
