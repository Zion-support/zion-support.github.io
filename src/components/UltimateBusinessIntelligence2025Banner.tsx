const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible] = useState(true);
;
  ];
  constcurrentContent = content[currentSlide];
;
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);
  // RemovedunusedhandleClosefunctionif (!isVisible) returnnull;
    <sectionclassName="r e lativemin-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* AnimatedBackgroundEffects */}
      <divclassName="a b soluteinset-0">;
        <divclassName="a b solutetop-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-fullblur-3xlanimate-pulse"></div>;
        ></div>;
        ></div>;
      <divclassName="r e lativez-10 containermx-autopx-4 py-16">;
        {/* Header */}
        <divclassName="t e xt-centermb-16">;
          <divclassName="f l exitems-centerjustify-centergap-3 mb-6">;
            <spanclassName="t e xt-2xl">🚀</span>;
            <spanclassName="t e xt-cyan-400 font-boldtext-xl">;
              BREAKING: ULTIMATEBUSINESSINTELLIGENCEREVOLUTION 2025;
            </span>;
            <spanclassName='text-2xl'>⚡</span>;
          </div>;
          <h1 className="t e xt-4xlmd:text-6xlfont-extraboldtext-whitemb-6">{currentContent.title}</h1>;
          <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-automb-8">{currentContent.description}</p>;
        </div>;
          <divclassName="f l exflex-colsm: flex-rowgap-6 justify-centermb-16">;
            >;
              GetStartedToday;
              <svgclassName="m l-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                />;
              </svg>;
            </a>;
            >;
              ScheduleConsultation;
            </a>;
          </div>;
          {/* KeyBenefitsGrid */}
          <divclassName="g r idgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">;
            <divclassName="b g-white/10 backdrop-blur-smrounded-2xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300">;
              <divclassName="w-16 h-16 b g-gradient-to-rfrom-blue-500 to-cyan-500 rounded-2xlflexitems-centerjustify-centermb-6 mx-auto">;
                >;
                  />;
                </svg>;
              </div>;
            {/* MetricsGrid */}
            <divclassName="g r idgrid-cols-2 md: grid-cols-4 gap-6 mb-8">;
                <divkey={key} className="t e xt-centerbg-white/5 rounded-xlp-4">;
                  <divclassName="t e xt-3xlfont-boldtext-cyan-400 mb-2">{value}</div>;
                  <divclassName="t e xt-smtext-gray-300 capitalize">;
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>;
              ))}
            </div>;
            {/* Tags */}
            <divclassName="f l exflex-wrapgap-2 mb-8">;
                >;
                  {tag}
                </span>;
              ))}
            </div>;
            {/* CTAButtons */}
            <divclassName="f l exflex-colsm: flex-rowitems-centerjustify-centergap-6">;
              >;
                <spanclassName="t e xt-xl">📖</span>;
                <span>Read {currentContent.type}</span>;
                <spanclassName="g r oup-hover: translate-x-1 transition-transform">→</span>;
              </a>;
              >;
                <spanclassName="t e xt-xl">📞</span>;
                <span>Call +1 302 464 0950</span>;
              </a>;
            </div>;
          {/* SlideIndicators */}
          <divclassName="f l exjustify-centermt-8 space-x-2">;
                onClick={() => setCurrentSlide(index)}
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30';
                }`}
                aria-label={`Gotoslide ${index + 1}`}
              />;
            ))}
          </div>;
        {/* StatsSection */}
        <divclassName="m t-16 gridgrid-cols-2 md: grid-cols-4 gap-8">;
          {[;
            <divkey={index} className="t e xt-center">;
              <divclassName="t e xt-3xlfont-boldtext-cyan-400 mb-2">{stat.value}</div>;
              <divclassName="t e xt-gray-300">{stat.label}</div>;
          ))}
        </div>;
    </section>;
  );
};
exportdefaultUltimateBusinessIntelligence2025Banner;
;
