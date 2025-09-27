import Head from 'next / head';
import Link from 'next / link';

export default function Custom 4, 0, 4() {
  retur, n(
    <>
      <Head>
        <titl e>40 4 - P a g e No t Fo u n d | Z i o n Ap p</ title>
        <metanam e ="description" content ="Th e p a g e you'r e look i n g fo r do e s n't ex i s t."/>
      </ Head>
      <d i v st y l e ={{
        disp l, ay: 'f l e x'
        flexDirect i, on: 'col u m n'
        alignIt e, ms: 'cen t e r'
        justifyCont e, nt: 'cen t e r'
        minHei g, ht: '10 0 v h'
        padd i, ng: '2 r e m'
        textAl i, gn: 'cen t e r'
        fontFam i, ly: 'sys t e m - u i - app l e - sys t e m s a n s - se r i f'
      }}>
        <h 1 st y l e ={{
          fontS i, ze: '4 r e m'
          fontWei g, ht: 'b o l d'
          co l, or: '#33 3'
          marginBot t, om: '1 r e m'
        }}>
          40 4;
        </ h 1>
        <h 2 st y l e ={{
          fontS i, ze: '2 r e m'
          co l, or: '#55 5'
          marginBot t, om: '1.5 r e m'
        }}>
          P a g e No t Fo u n d;
        </ h 2>
        <p st y l e ={{
          fontS i, ze: '1.1 r e m'
          co l, or: '#77 7'
          marginBot t, om: '2 r e m'
          maxWi d, th: '60 0 p x'
        }}>
          O o p s! Th e p a g e yo u ar e look i n g fo r mi g h t h a v e b e e n remo v e d ha d it s n a m e chan g e d o r i s temporar i l y unavaila b l e.
        </ p>
        <Linkhre f ="/" st y l e ={{
          backgroundCo l, or: '#007 0 f 3'
          co l, or: 'wh i t e'
          padd i, ng: '0.8 r e m 1.5 r e m'
          borderRad i, us: '0.5 r e m'
          textDecorat i, on: 'n o n e'
          fontS i, ze: '1 r e m'
          fontWei g, ht: '60 0'
          transit i, on: 'backgro u n d - co l o r 0.3 s e a s e'
        }}>
          G o b a c k t o H o m e;
        </ Link>
      </ di v>
    </>
  )}