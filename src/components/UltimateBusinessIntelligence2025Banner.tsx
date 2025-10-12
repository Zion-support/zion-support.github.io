  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible] = useState(true);
  ];
  const currentContent = content[currentSlide];
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);
  // Removed unused handleClose function
  if (!isVisible) return n ull;
    <s ection c las sNa me="r e lat ive m in-h-s cre en bg-g rad ient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Anim ated B ack gro und E ffe cts */}
      <d iv c las sNa me="a b sol ute i nset-0">
        <d iv c las sNa me="a b sol ute t op-1/4 l eft-1/4 w-96 h-96 bg-cyan-500/20 r ounded-full blur-3xl anim ate-pulse"></d iv>
        ></d iv>
        ></d iv>
      <d iv c las sNa me="r e lat ive z-10 cont ain er mx-a uto px-4 py-16">
        {/* H ead er */}
        <d iv c las sNa me="t e xt-c enter mb-16">
          <d iv c las sNa me="f l ex i tems-c enter j ust ify-c enter g ap-3 mb-6">
            <s pan c las sNa me="t e xt-2xl">🚀</s pan>
            <s pan c las sNa me="t e xt-cyan-400 f ont-b old t ext-x-l">
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </s pan>
            <s pan c las sNa me='t ext-2xl'>⚡</s pan>
          </d iv>
          <h1 c las sNa me="t e xt-4xl md:t ext-6xl f ont-e xtr abo ld t ext-whit-e mb-6">
            {currentContent.t itle}
          </h1>
          <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-4xl mx-a uto mb-8">
            {currentContent.description}
          </p>
        </d iv>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-r ow g ap-6 j ust ify-c enter mb-16">
            >
              G et Star ted T oday
              <s vg c las sNa me="m l-3 w-6 h-6" f ill="n one" s tro ke="currentColor" viewBox="0 0 24 24">
                />
              </s vg>
            </a>
            >
              Schedule Consultation
            </a>
          </d iv>
          {/* K ey B ene fits G rid */}
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-4 g ap-8">
            <d iv c las sNa me="b g-white/10 b ack drop-blur-sm r ounded-2xl p-8 bord er bord er-white/20 hover:bg-white/20 t ransition-a ll d ura tion-300">
              <d iv c las sNa me="w-16 h-16 b g-g rad ient-to-r from-blue-500 to-cyan-500 r ounded-2xl f lex i tems-c enter j ust ify-c enter mb-6 mx-a uto">
                >
                  />
                </s vg>
              </d iv>
            {/* M etr ics G rid */}
            <d iv c las sNa me="g r id g rid-c ols-2 md:g rid-c ols-4 g ap-6 mb-8">
                <d iv k ey={k ey} c las sNa me="t e xt-c enter bg-white/5 r ounded-xl p-4">
                  <d iv c las sNa me="t e xt-3xl f ont-b old t ext-cya-n-400 mb-2">{value}</d iv>
                  <d iv c las sNa me="t e xt-sm t ext-g ra-y-300 c api tal ize">
                    {k ey.replace(/([A-Z])/g, ' $1').t rim()}
                  </d iv>
              ))}
            </d iv>
            {/* T ags */}
            <d iv c las sNa me="f l ex f lex-w rap g ap-2 mb-8">
                >
                  {tag}
                </s pan>
              ))}
            </d iv>
            {/* C TA B utt ons */}
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-r ow i tems-c enter j ust ify-c enter g ap-6">
              >
                <s pan c las sNa me="t e xt-xl">📖</s pan>
                <s pan>Read {currentContent.t ype}</s pan>
                <s pan c las sNa me="g r oup-hover:t ran slate-x-1 t ransition-t ransform">-></s pan>
              </a>
              >
                <s pan c las sNa me="t e xt-xl">📞</s pan>
                <s pan>Call +1 302 464 0950</s pan>
              </a>
            </d iv>
          {/* Slide I ndi cat ors */}
          <d iv c las sNa me="f l ex j ust ify-c enter mt-8 s pace-x-2">
                onClick={() => setCurrentSlide(index)}
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </d iv>
        {/* Stats S ection */}
        <d iv c las sNa me="m t-16 g rid g rid-c ols-2 md:g rid-c ols-4 g ap-8">
          {[
            <d iv k ey={index} c las sNa me="t e xt-c enter">
              <d iv c las sNa me="t e xt-3xl f ont-b old t ext-cya-n-400 mb-2">{s tat.value}</d iv>
              <d iv c las sNa me="t e xt-g ray-300">{s tat.label}</d iv>
          ))}
        </d iv>
    </s ection>
  );
};
export default Ulti mateBusinessIntelligence2025Bann er;
