import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t { Sear, c, h, MessageCirc, l, e, Pho, n, e, Ma, i, l, BookOp, e, n, Vid, e, o, Use, r, s, Z, a, p, Clo, c, k, CheckCirc, l, e } fr, o, m "luci, d, e-rea, c, t";
const, Suppor, t: Rea, c, t.FC = () => {
  con, s, t [searchQue, r, y, setSearchQue, r, y] = useSta, t, e('');
  con, s, t [selectedCatego, r, y, setSelectedCatego, r, y] = useSta, t, e('a, l, l');
  const, supportChannel, s = [
    {
      ic, o, n: Pho, n, e
      tit, l, e: 'Phone, Suppor, t'
      descripti, o, n: 'Speak, directly, with our, technical, experts'
      availabili, t, y: '24/7'
      responseTi, m, e: '< 2, minute, s'
      conta, c, t: '+1 (5, 5, 5) 1, 2, 3-45, 6, 7'
    }
    {
      ic, o, n: MessageCirc, l, e
      tit, l, e: 'Live, Cha, t'
      descripti, o, n: 'Get, instant, help through, our, chat syst, e, m'
      availabili, t, y: '24/7'
      responseTi, m, e: '< 30, second, s'
      conta, c, t: 'Start, Cha, t'
    }
    {
      ic, o, n: Ma, i, l
      tit, l, e: 'Email, Suppor, t'
      descripti, o, n: 'Send, us, detailed questions, and, get comprehensive, answer, s'
      availabili, t, y: '24/7'
      responseTi, m, e: '< 2, hour, s'
      conta, c, t: 'suppo, r, t@ziontechgro, u, p.c, o, m'
    }
    {
      ic, o, n: Vid, e, o
      tit, l, e: 'Video, Cal, l'
      descripti, o, n: 'Schedule, a, screen sharing, session, with our, expert, s'
      availabili, t, y: 'Business, Hour, s'
      responseTi, m, e: '< 4, hour, s'
      conta, c, t: 'Schedule, Cal, l'
    }
  ];
  const, faqCategorie, s = [
    {
      id: 'gener, a, l'
      tit, l, e: 'Gener, a, l'
      ic, o, n: BookOp, e, n;
    }
    {
      id: 'technic, a, l'
      tit, l, e: 'Technic, a, l'
      ic, o, n: Z, a, p;
    }
    {
      id: 'billi, n, g'
      tit, l, e: 'Billi, n, g'
      ic, o, n: Use, r, s;
    }
    {
      id: 'accou, n, t'
      tit, l, e: 'Accou, n, t'
      ic, o, n: Clo, c, k;
    }
  ];
  const, faq, s = [
    {
      catego, r, y: 'gener, a, l'
      questi, o, n: 'What, services, does Zion, Tech, Group off, e, r?'
      answ, e, r: 'We, offer, comprehensive AI, and, IT solutions, including, automation, cybersecuri, t, y, cloud, infrastructur, e, data, analytic, s, and, digital, transformation servic, e, s.'
    }
    {
      catego, r, y: 'technic, a, l'
      questi, o, n: 'How, do, I integrate, your, AI solutions, with, my existing, system, s?'
      answ, e, r: 'Our, team, provides complete, integration, support with, API, s, documentati, o, n, and, hand, s-on, assistance, to ensure, seamless, implementation.'
    }
    {
      catego, r, y: 'billi, n, g'
      questi, o, n: 'What, are, your pricing, model, s?'
      answ, e, r: 'We, offer, flexible pricing, including, subscription-bas, e, d, proje, c, t-bas, e, d, and, custom, enterprise solutions, tailored, to your, need, s.'
    }
    {
      catego, r, y: 'accou, n, t'
      questi, o, n: 'How, do, I update, my, account informati, o, n?'
      answ, e, r: 'You, can, update your, account, information through, our, client portal, or, contact our, support, team for, assistanc, e.'
    }
    {
      catego, r, y: 'technic, a, l'
      questi, o, n: 'Do, you, provide training, for, your solutio, n, s?'
      answ, e, r: 'Y, e, s, we, provide, comprehensive training, programs, including documentati, o, n, video, tutorial, s, and, live, training sessio, n, s.'
    }
    {
      catego, r, y: 'gener, a, l'
      questi, o, n: 'What, is, your response, time, for support, request, s?'
      answ, e, r: 'We, guarantee, response times, based, on your, support, pla
  n: Premi, u, m (30, minute, s), Standa, r, d (2, hour, s), Bas, i, c (24, hour, s).'
    }
  ];
  const, filteredFaq, s = fa, q, s.filt, e, r(f, a, q => 
    selectedCatego, r, y === 'a, l, l' || f, a, q.catego, r, y === selectedCatego, r, y;
  ).filt, e, r(f, a, q =>
    f, a, q.questi, o, n.toLowerCa, s, e().includ, e, s(searchQue, r, y.toLowerCa, s, e()) ||
    f, a, q.answ, e, r.toLowerCa, s, e().includ, e, s(searchQue, r, y.toLowerCa, s, e())
  );
  return (
    <>
      <Helmet>
        <title>Suppo, r, t - Zion, Tech, Group</title>
        <meta name="descripti, o, n" content="Get, help, and support, for, all Zion, Tech, Group servic, e, s. 24/7, technical, support, documentati, o, n, and, expert, assistance."  />
        <meta name="keywor, d, s" content="suppo, r, t, he, l, p, technical, assistanc, e, customer, servic, e, documentati, o, n"  />
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/suppo, r, t"  />
      </Helmet>
      <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
        {/* Hero, Sectio, n */}
        <section, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, tex, t-white, p, y-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
            <div, className="te, x, t-cent, e, r">
              <h1, className="te, x, t-4x, l, m
  d:te, x, t-5xl, fon, t-bold, m, b-6">
                Support, Cente, r;
              </h1>
              <p, className="te, x, t-xl, m, b-8, ma, x-w-3xl, m, x-au, t, o">
                Get, help, when you, need, it. Our, expert, support team, is, here 24/7, to, assist you, with, any questions, or, issues.
              </p>
              {/* Search, Ba, r */}
              <div, className="m, a, x-w-2xl, m, x-au, t, o">
                <div, className="relati, v, e">
                  <Search, className="absolute, lef, t-3, to, p-1/2, transfor, m -transla, t, e-y-1/2, tex, t-gr, a, y-40, 0, h-5 w-5"  />
                  <inp, u, t
  ty, p, e="te, x, t"
                    placehold, e, r="Search, for, help articl, e, s, FA, Q, s, or, topic, s..."
                    val, u, e={searchQue, r, y}
                    onChan, g, e={(e) => setSearchQue, r, y(e.targ, e, t.val, u, e)}
                    classNa, m, e="w-full, p, l-10, p, r-4, p, y-3, rounde, d-lg, tex, t-gr, a, y-900, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-whi, t, e"
                   />
                </d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Support, Channel, s */}
        <section, className="py-20, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="m, a, x-w-7xl, m, x-au, t, o">
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                Get, Suppor, t;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">
                Choose, the, support channel, that, works best, for, you;
              </p>
            </d, i, v>
            <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">
              {supportChanne, l, s.m, a, p((chann, e, l, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-lg, shado, w-l, g, p-6, hove, r:shad, o, w-xl, transitio, n-shad, o, w">
                  <div, className="te, x, t-cent, e, r">
                    <div, className="w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
                      <chann, e, l .icon, className="h-8 w-8, tex, t-bl, u, e-6, 0, 0"  />
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-2">
                      {chann, e, l.tit, l, e}
                    </h3>
                    <p, className="te, x, t-gr, a, y-600, m, b-4">
                      {chann, e, l.descripti, o, n}
                    </p>
                    <div, className="spa, c, e-y-2, tex, t-sm, tex, t-gr, a, y-500, m, b-4">
                      <div, className="flex, justif, y-betwe, e, n">
                        <sp, a, n>Availabili, t, y:</sp, a, n>
                        <span, className="fo, n, t-semibo, l, d">{chann, e, l.availabili, t, y}</sp, a, n>
                      </d, i, v>
                      <div, className="flex, justif, y-betwe, e, n">
                        <sp, a, n>Response, Tim, e:</sp, a, n>
                        <span, className="fo, n, t-semibo, l, d">{chann, e, l.responseTi, m, e}</sp, a, n>
                      </d, i, v>
                    </d, i, v>
                    <button, className="w-full, b, g-bl, u, e-600, tex, t-white, p, y-2, p, x-4, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s">
                      {chann, e, l.conta, c, t}
                    </butt, o, n>
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* FAQ, Sectio, n */}
        <section, className="py-20, p, x-4, s, m: px-6, l, g:px-8, b, g-whi, t, e">
          <div, className="m, a, x-w-7xl, m, x-au, t, o">
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                Frequently, Asked, Questions;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">
                Find, quick, answers to, common, questions;
              </p>
            </d, i, v>
      quest, i, o
  n: 'Is, there, a community, where, I can, get, help from, other, users?'
      answ, e, r: "Y, e, s! We, have, an active, community, forum where, users, can ask, question, s, share, best, practices, and, get, help from, both, our team, and, other experienced, user, s. It's, a, great place, to, learn and, networ, k."
    }
  ];
  const, quickAction, s = [
    { tit, l, e: 'Report, a, Bug', descripti, o, n: 'Found, an, issue? Let, us, know', li, n, k: '/conta, c, t', ic, o, n: '🐛' }
    { tit, l, e: 'Request, a, Feature', descripti, o, n: "Have, an, idea? We'd, love, to hear, i, t", li, n, k: '/conta, c, t', ic, o, n: '💡' }
    { tit, l, e: 'Schedule, Trainin, g', descripti, o, n: 'Book, a, training session, for, your te, a, m', li, n, k: '/traini, n, g', ic, o, n: '🎓' }
    { tit, l, e: 'View, Status, Page', descripti, o, n: 'Check, system, status and, uptim, e', li, n, k: '/stat, u, s', ic, o, n: '📊' }
  ];
  return (
    <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
      {/* Hero, Sectio, n */}
      <section, className="bg-gradie, n, t-to-br, fro, m-bl, u, e-600, vi, a-purp, l, e-600, t, o-te, a, l-600, tex, t-white, p, y-20">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-cent, e, r">
            <h1, className="te, x, t-4x, l, m
  d:te, x, t-6xl, fon, t-bold, m, b-6">
              We're, Here, to He, l, p;
            </h1>
            <p, className="te, x, t-xl, tex, t-bl, u, e-100, m, b-8, ma, x-w-3xl, m, x-au, t, o">
              Get, the, support you, need, to succeed, with, our AI, solution, s. 
              Our, expert, team is, ready, to help, you, every step, of, the w, a, y.
            </p>
            {/* Search, Ba, r */}
            <div, className="m, a, x-w-2xl, m, x-au, t, o">
              <div, className="relati, v, e">
                <Search, className="absolute, lef, t-4, to, p-1/2, transfor, m -transla, t, e-y-1/2, tex, t-gr, a, y-40, 0, w-5 h-5"  />
                <inp, u, t
  ty, p, e="te, x, t"
                  placehold, e, r="Search, our, knowledge ba, s, e..."
                  val, u, e={searchQue, r, y}
                  onChan, g, e={(e) => setSearchQue, r, y(e.targ, e, t.val, u, e)}
                  classNa, m, e="w-full, p, l-12, p, r-4, p, y-4, rounde, d-lg, tex, t-gr, a, y-900, tex, t-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:outli, n, e-no, n, e"
                 />
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
            {/* Category, Filte, r */}
            <div, className="flex, fle, x-wrap, justif, y-center, ga, p-4, m, b-12">
              <butt, o, n
  onCli, c, k={() => setSelectedCatego, r, y('a, l, l')}
                classNa, m, e={`px-6, p, y-3, rounde, d-lg, fon, t-semibold, transitio, n-colo, r, s ${`
                  selectedCatego, r, y === 'a, l, l'
                    ? 'bg-bl, u, e-600, tex, t-whi, t, e'
                    : 'bg-gr, a, y-200, tex, t-gr, a, y-700, hove, r:bg-gr, a, y-3, 0, 0'
                }`}`
              >
                All, Categorie, s;
              </butt, o, n>
              {faqCategori, e, s.m, a, p((catego, r, y) => (
                <butt, o, n
  k, e, y={catego, r, y.id}
                  onCli, c, k={() => setSelectedCatego, r, y(catego, r, y.id)}
                  classNa, m, e={`px-6, p, y-3, rounde, d-lg, fon, t-semibold, transitio, n-colors, flex, items-cent, e, r ${`
                    selectedCatego, r, y === catego, r, y.id;
                      ? 'bg-bl, u, e-600, tex, t-whi, t, e'
                      : 'bg-gr, a, y-200, tex, t-gr, a, y-700, hove, r:bg-gr, a, y-3, 0, 0'
                  }`}`
                >
                  <catego, r, y .icon, className="h-4 w-4, m, r-2"  />
                  {catego, r, y.tit, l, e}
                </butt, o, n>
              ))}
            </d, i, v>
            {/* FAQ, Item, s */}
            <div, className="spa, c, e-y-6">
              {filteredFa, q, s.m, a, p((f, a, q, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-gr, a, y-50, rounde, d-l, g, p-6">
                  <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-3">
                    {f, a, q.questi, o, n}
                  </h3>
                  <p, className="te, x, t-gr, a, y-6, 0, 0">
                    {f, a, q.answ, e, r}
                  </p>
                </d, i, v>
              ))}
            </d, i, v>
            {filteredFa, q, s.leng, t, h === 0 && (
              <div, className="te, x, t-center, p, y-12">
                <p, className="te, x, t-gr, a, y-500, tex, t-lg">
                  No, FAQs, found matching, your, search criter, i, a.
                </p>
              </d, i, v>
            )}
          </d, i, v>
        </secti, o, n>
        {/* Contact, CT, A */}
        <section, className="py-20, p, x-4, s, m: px-6, l, g:px-8, b, g-bl, u, e-6, 0, 0">
          <div, className="m, a, x-w-7xl, m, x-auto, tex, t-cent, e, r">
            <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-white, m, b-4">
              Still, Need, Help?
            </h2>
            <p, className="te, x, t-xl, tex, t-bl, u, e-100, m, b-8, ma, x-w-3xl, m, x-au, t, o">
              C, a, n't, find, what y, o, u're, looking, for? Our, support, team is, ready, to help, you, with any, questions, or issu, e, s.
            </p>
            <div, className="flex, fle, x-col, s, m:fl, e, x-row, ga, p-4, justif, y-cent, e, r">
              <Li, n, k
  to="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-3, border, border-transparent, tex, t-base, fon, t-medium, rounde, d-md, tex, t-bl, u, e-600, b, g-white, hove, r:bg-gr, a, y-50, transitio, n-colo, r, s"
              >
                Contact, Suppor, t;
                <MessageCircle, className="ml-2 h-5 w-5"  />
              </Li, n, k>
              <Li, n, k
  to="/documentati, o, n"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-3, border, border-white, tex, t-base, fon, t-medium, rounde, d-md, tex, t-white, hov, e
  r:bg-whi, t, e/10, transitio, n-colo, r, s"
              >
                View, Documentatio, n;
                <BookOpen, className="ml-2 h-5 w-5"  />
              </Li, n, k>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </d, i, v>
    < />
        </d, i, v>
      </secti, o, n>
    </d, i, v>
  );
};
export default Support;
