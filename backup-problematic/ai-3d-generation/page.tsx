import { Link  } from 'react-router-dom';
import { Helmet  } from 'react-helmet-async';
import { ArrowRight  } from 'lucide-react';
export default function Ai3d Gen era tio nPa ge() {
}
  return (
}
  r etu rn (
    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Helmet>
        <title>AI 3D G ene ration - Zion Tech Group</title>
        <meta name="description" content="Crea te stunning 3D models with AI-powered gene ration. Transform text descriptions and images into detailed 3D a ssets instantly." />
        <meta name="keywords" content="AI 3D gene ration, 3D modeling, text-t-o-3D, image-to-3D, 3D a ssets, AI modeling" />
      </Helmet>
      {/* H ero S ection */
  );
}
      <s ection c las sNa me="r e lat ive py-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t ext-c enter mb-16">
            <h1 c las sNa me="t ext-4xl sm:text-5xl md:text-6xl f ont-b old text-whi-t-e mb-6">
              AI 3D G ene ration
            </h1>
            <p c las sNa me="t ext-lg sm:text-x-l text-g ra-y-300 m ax-w-3xl mx-a uto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered gene ration technology.
              Crea te detailed 3D a ssets from text descriptions or 2D images in s eco nds.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-g rad ient-to-r from-purple-500 to-b lue-600 text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all dura tion-300 f lex items-c enter j ust ify-c enter"
              >
                G et S tar ted
                <ArrowRight c las sNa me="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/d emo"
                c las sNa me="b order b ord er-white text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:text-g ra-y-900 transition-all dura tion-300"
              >
                Try Demo
              </Link>
            </d iv>
        </d iv>
      </s ection>
      {/* F eat ures S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t ext-c enter mb-16">
            <h2 c las sNa me="t ext-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
              Powerful 3D G ene ration F eat ures
            </h2>
            <p c las sNa me="t ext-xl text-g ra-y-300 m ax-w-3xl mx-a uto">
              Everything you need to c rea te professional 3D models with AI a ssistance.
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 sm:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
            {feat ures.map((feat ure, index) => (
              <d iv key={index} c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 b ord er b ord er-white/20 hover:bg-white/15 transition-all dura tion-300">
                <d iv c las sNa me="m b-4">{feat ure.i con}</d iv>
                <h3 c las sNa me="t ext-xl f ont-semibold text-whi-t-e mb-4">{feat ure.title}</h3>
                <p c las sNa me="t ext-g ray-300">{feat ure.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>
      {/* U se C ases S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 lg:p-12 b ord er b ord er-white/20">
            <d iv c las sNa me="t ext-c enter mb-12">
              <h2 c las sNa me="t ext-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
                Perfect F or
              </h2>
              <p c las sNa me="t ext-xl text-g ra-y-300">
                Our AI 3D gene ration technology excels in various indu stries and applica tions
              </p>
            </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2 md:g rid-c ols-4 g ap-6">
              {useC ases.map((useC ase, index) => (
                <d iv key={index} c las sNa me="f l ex items-c enter text-g ra-y-300">
                  <C hec kCi rcle c las sNa me="w-5 h-5 t ext-g reen-400 mr-3 f lex-s hrink-0" />
                  <s pan c las sNa me="t ext-sm">{useC ase}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>
      {/* C TA S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-g rad ient-to-r from-purple-600 to-p ink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-c ente-r">
            <h2 c las sNa me="t ext-2xl sm:text-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
              Ready to Crea te Amazing 3D M odels?
            </h2>
            <p c las sNa me="t ext-lg sm:text-x-l text-whi-t-e/90 mb-8 m ax-w-2xl mx-a uto">
              S tart gene rating professional 3D models with our AI-powered technology t oday.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-white text-purp-l-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-g ray-100 transition-all dura tion-300"
              >
                G et S tar ted Today
              </Link>
              <Link
                to="/ai-s erv ices"
                c las sNa me="b order b ord er-white text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:text-purp-l-e-600 transition-all dura tion-300"
              >
                View All AI Serv ices
              </Link>
            </d iv>
        </d iv>
      </s ection>    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Helmet>
        <title>AI 3D G ene ration - Zion Tech Group</title>
        <meta name="description" content="Crea te stunning 3D models with AI-powered gene ration. Transform text descriptions and images into detailed 3D a ssets instantly." />
        <meta name="keywords" content="AI 3D gene ration, 3D modeling, text-t-o-3D, image-to-3D, 3D a ssets, AI modeling" />
      </Helmet>
      {/* H ero S ection */}
      <s ection c las sNa me="r e lat ive py-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t ext-c enter mb-16">
            <h1 c las sNa me="t ext-4xl sm:text-5xl md:text-6xl f ont-b old text-whi-t-e mb-6">
              AI 3D G ene ration
            </h1>
            <p c las sNa me="t ext-lg sm:text-x-l text-g ra-y-300 m ax-w-3xl mx-a uto mb-8">
              Transform your ideas into stunning 3D models with our advanced AI-powered gene ration technology.
              Crea te detailed 3D a ssets from text descriptions or 2D images in s eco nds.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-g rad ient-to-r from-purple-500 to-b lue-600 text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all dura tion-300 f lex items-c enter j ust ify-c enter"
              >
                G et S tar ted
                <ArrowRight c las sNa me="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/d emo"
                c las sNa me="b order b ord er-white text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:text-g ra-y-900 transition-all dura tion-300"
              >
                Try Demo
              </Link>
            </d iv>
        </d iv>
      </s ection>
      {/* F eat ures S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t ext-c enter mb-16">
            <h2 c las sNa me="t ext-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
              Powerful 3D G ene ration F eat ures
            </h2>
            <p c las sNa me="t ext-xl text-g ra-y-300 m ax-w-3xl mx-a uto">
              Everything you need to c rea te professional 3D models with AI a ssistance.
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 sm:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
            {feat ures.map((feat ure, index) => (
              <d iv key={index} c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 b ord er b ord er-white/20 hover:bg-white/15 transition-all dura tion-300">
                <d iv c las sNa me="m b-4">{feat ure.i con}</d iv>
                <h3 c las sNa me="t ext-xl f ont-semibold text-whi-t-e mb-4">{feat ure.title}</h3>
                <p c las sNa me="t ext-g ray-300">{feat ure.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>
      {/* U se C ases S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 lg:p-12 b ord er b ord er-white/20">
            <d iv c las sNa me="t ext-c enter mb-12">
              <h2 c las sNa me="t ext-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
                Perfect F or
              </h2>
              <p c las sNa me="t ext-xl text-g ra-y-300">
                Our AI 3D gene ration technology excels in various indu stries and applica tions
              </p>
            </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2 md:g rid-c ols-4 g ap-6">
              {useC ases.map((useC ase, index) => (
                <d iv key={index} c las sNa me="f l ex items-c enter text-g ra-y-300">
                  <C hec kCi rcle c las sNa me="w-5 h-5 t ext-g reen-400 mr-3 f lex-s hrink-0" />
                  <s pan c las sNa me="t ext-sm">{useC ase}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>
      {/* C TA S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-g rad ient-to-r from-purple-600 to-p ink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-c ente-r">
            <h2 c las sNa me="t ext-2xl sm:text-3xl md:text-4xl f ont-b old text-whi-t-e mb-4">
              Ready to Crea te Amazing 3D M odels?
            </h2>
            <p c las sNa me="t ext-lg sm:text-x-l text-whi-t-e/90 mb-8 m ax-w-2xl mx-a uto">
              S tart gene rating professional 3D models with our AI-powered technology t oday.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-white text-purp-l-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-g ray-100 transition-all dura tion-300"
              >
                G et S tar ted Today
              </Link>
              <Link
                to="/ai-s erv ices"
                c las sNa me="b order b ord er-white text-whi-t-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:text-purp-l-e-600 transition-all dura tion-300"
              >
                View All AI Serv ices
              </Link>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}