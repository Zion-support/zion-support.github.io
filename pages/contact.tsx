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
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)} []);

  const { trackClick } = useAnalytics();

  consthandleInputChan ge = (e: React.ChangeEve nt<HTMLInputEleme nt | HTMLTextAreaEleme nt>) => {
    const { na me val ue } = e.targ et;
    setFormData(pr ev => ({
      ...pr ev
      [na me]: val ue
    }))};

  consthandleSubm it = async (e: React.FormEve nt) => {
    e.preventDefau lt();
    setIsSubmitti ng(true);
    
    // Simula te fo rm submissi on
    awa it new Promi se(resol ve => setTimeo ut(resol ve 2 0 0 0));
    
    setIsSubmitti ng(false);
    trackClick('conta ct-fo rm-subm it' 'conversi on');
    ale rt('Tha nk you for yo ur messa ge! We\'ll get ba ck to you so on.');
    
    // Res et fo rm
    setFormData({
      name: '',
		email: ''
      compa ny: ''
      subject: '',
      message: ''
    })};

  constcontactIn fo = [
    {
      ic on: '📧'
      tit le: 'Ema il Us'
      detai ls: 'hel lo@ziona pp.com'
      description: 'Se nd us an ema il and we\'ll respo nd with in 2 4 hou rs.'
    }
    {
      ic on: '📞'
      tit le: 'Ca ll Us'
      detai ls: '+1 (55 5) 12 3-4 5 6 7'
      description: 'Mon-Fri from 9am to 6pm EST'
    }
    {
      ic on: '📍'
      tit le: 'Vis it Us'
      detai ls: '12 3 Te ch Stre et Silic on Vall ey CA 94 0 0 0'
      description: 'Co me say hel lo at our offi ce'
    }
  ];

  return (
    <>
      <SEO />
      <Head>
        <title>ContactU s - Zi on App</title>
        <metaname="description" content="Get in tou ch wi th Zi on App. We're he re to he lp you transfo rm yo ur busine ss wi th cutti ng-ed ge technolo gy solutio ns." />
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
            <h 1 classNa me="te xt-5xl md:te xt-6xl fo nt-bo ld te xt-gr ay-90 0 mb-6">
              ContactU s
            </h 1>
            <pclassNa me="te xt-xl te xt-gr ay-60 0 max-w-3xl mx-au to">
              Rea dy to transfo rm yo ur busine ss? Let&ap os;sdiscu ss how we can he lp you achie ve yo ur goa ls.
            </p>
          </head er>

          <div classNa me="gr id gr id-co ls-1 l g:gr id-co ls-2 gap-1 2">
            {/* ContactF or m */}
            <div classNa me="bg-whi te round ed-2xl shad ow-xl p-8">
              <h 2 classNa me="te xt-2xl fo nt-bo ld te xt-gr ay-90 0 mb-6">Se nd us aMessa ge</h 2>
              <fo rm onSubm it={handleSubm it} classNa me="spa ce-y-6">
                <div classNa me="gr id gr id-co ls-1 m d:gr id-co ls-2 gap-6">
                  <div>
                    <lab el htmlF or="na me" classNa me="blo ck te xt-sm fo nt-medi um te xt-gr ay-70 0 mb-2">
                      Fu ll Na me *
                    </lab el>
                    <inp ut
                      type="te xt"
                      id="na me"
                      name="na me"
                      val ue={formData.na me}
                      onChan ge={handleInputChan ge}
                      requir ed
                      classNa me="w-fu ll px-4 p y-3 bord er bord er-gr ay-30 0 round ed-lg foc us:ri ng-2 foc us:ri ng-bl ue-50 0 foc us:bord er-transpare nt"
                      placehold er="Yo ur fu ll na me"
                    />
                  </div>
                  <div>
                    <lab el htmlF or="ema il" classNa me="blo ck te xt-sm fo nt-medi um te xt-gr ay-70 0 mb-2">
                      Ema il Addre ss *
                    </lab el>
                    <inp ut
                      type="ema il"
                      id="ema il"
                      name="ema il"
                      val ue={formData.ema il}
                      onChan ge={handleInputChan ge}
                      requir ed
                      classNa me="w-fu ll px-4 p y-3 bord er bord er-gr ay-30 0 round ed-lg foc us:ri ng-2 foc us:ri ng-bl ue-50 0 foc us:bord er-transpare nt"
                      placehold er="yo ur.ema il@examp le.com"
                    />
                  </div>
                </div>
                <div>
                  <lab el htmlF or="compa ny" classNa me="blo ck te xt-sm fo nt-medi um te xt-gr ay-70 0 mb-2">
                    Compa ny
                  </lab el>
                  <inp ut
                    type="te xt"
                    id="compa ny"
                    name="compa ny"
                    val ue={formData.compa ny}
                    onChan ge={handleInputChan ge}
                    classNa me="w-fu ll px-4 p y-3 bord er bord er-gr ay-30 0 round ed-lg foc us:ri ng-2 foc us:ri ng-bl ue-50 0 foc us:bord er-transpare nt"
                    placehold er="Yo ur compa ny na me"
                  />
                </div>
                <div>
                  <lab el htmlF or="subje ct" classNa me="blo ck te xt-sm fo nt-medi um te xt-gr ay-70 0 mb-2">
                    Subje ct *
                  </lab el>
                  <inp ut
                    type="te xt"
                    id="subje ct"
                    name="subje ct"
                    val ue={formData.subje ct}
                    onChan ge={handleInputChan ge}
                    requir ed
                    classNa me="w-fu ll px-4 p y-3 bord er bord er-gr ay-30 0 round ed-lg foc us:ri ng-2 foc us:ri ng-bl ue-50 0 foc us:bord er-transpare nt"
                    placehold er="Wh at can we he lp you wi th?"
                  />
                </div>
                <div>
                  <lab el htmlF or="messa ge" classNa me="blo ck te xt-sm fo nt-medi um te xt-gr ay-70 0 mb-2">
                    Messa ge *
                  </lab el>
                  <textar ea
                    id="messa ge"
                    name="messa ge"
                    val ue={formData.messa ge}
                    onChan ge={handleInputChan ge}
                    requir ed
                    ro ws={6}
                    classNa me="w-fu ll px-4 p y-3 bord er bord er-gr ay-30 0 round ed-lg foc us:ri ng-2 foc us:ri ng-bl ue-50 0 foc us:bord er-transpare nt"
                    placehold er="Te ll us abo ut yo ur proje ct or questi on..."
                  />
                </div>
                <butt on
                  type="subm it"
                  disabl ed={isSubmitti ng}
                  classNa me="w-fu ll bg-bl ue-60 0 te xt-whi te py-3 p x-6 round ed-lg fo nt-semibo ld hov er:bg-bl ue-70 0 transiti on-colo rs disabl ed:opaci ty-5 0 disabl ed:curs or-not-allow ed"
                >
                  {isSubmitti ng ? 'Sendi ng...' : 'Se nd Messa ge'}
                </butt on>
              </fo rm>
            </div>

            {/* ContactInformati on */}
            <div classNa me="spa ce-y-8">
              <div>
                <h 2 classNa me="te xt-2xl fo nt-bo ld te xt-gr ay-90 0 mb-6">Get in Tou ch</h 2>
                <pclassNa me="te xt-gr ay-60 0 mb-8">
                  We&ap os;re he re to he lp you succe ed. Rea ch out to us throu gh any of the channe ls bel ow and we&ap os;ll get ba ck to you as so on as possib le.
                </p>
              </div>

              <div classNa me="spa ce-y-6">
                {contactIn fo.map((in fo ind ex) => (
                  <div key={ind ex} classNa me="fl ex ite ms-sta rt spa ce-x-4 p-6 b g-whi te round ed-xl shad ow-lg">
                    <div classNa me="te xt-3xl">{in fo.ic on}</div>
                    <div>
                      <h 3 classNa me="te xt-lg fo nt-semibo ld te xt-gr ay-90 0 mb-2">{in fo.tit le}</h 3>
                      <pclassNa me="te xt-bl ue-60 0 fo nt-medi um mb-1">{in fo.detai ls}</p>
                      <pclassNa me="te xt-gr ay-60 0 te xt-sm">{in fo.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div classNa me="bg-bl ue-5 0 round ed-xl p-6">
                <h 3 classNa me="te xt-lg fo nt-semibo ld te xt-gr ay-90 0 mb-3">Respon se Ti me</h 3>
                <pclassNa me="te xt-gr ay-60 0 te xt-sm">
                  We typical ly respo nd to all inquiri es with in 2 4 hou rs duri ng busine ss da ys. 
                  For urge nt matte rs plea se ca ll us direct ly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}