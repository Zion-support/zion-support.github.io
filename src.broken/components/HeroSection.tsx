'
      if(e.key === 'ArrowLeft') prevSlide();'
      if(e.key === 'ArrowRight') nextSlide();'      if(e.key === ' ') {

        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying)}
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)}, [prevSlide, nextSlide, isAutoPlaying]);

  // Handle image loading
  useEffect(() => {
    
          img.onload = resolve;
          img.onerror = resolve;
          img.src = slide.image}) }) ;

      await Promise.all(imagePromises) ;
      setIsLoading(false) };

    preloadImages () }, [memoizedSlides]) ;

  if(isLoading) {

    return ("
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">"
        <div className="text-center">"
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>"
          <p className="text-cyan-400 text-lg">
            Loading amazing experiences...
          </p>
        </div>
      </div>) }
  return ("
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}"
      <div className="absolute inset-0 opacity-10">"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />"
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <GradientHeading className="mb-6 text-5xl md:text-7xl font-bold drop-shadow-md">
          {t('home.hero_title')}
        </GradientHeading>

      {/* Hero Content */}"
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">"
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}"
            className="space-y-8"
          >"
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium"
              >"
                <Star className="w-4 h-4 mr-2 text-yellow-400"  />                Leading Technology Solutions
              </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(164,80,255,0.7)] focus:shadow-[0_0_15px_2px_rgba(164,80,255,0.7)]"
            size="lg"
            asChild
          >
            <Link
              href="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup')}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            href="/marketplace"
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 text-base py-4 px-4 sm:text-lg sm:py-6 sm:px-6 rounded-md inline-flex items-center justify-center"
          >
            {t('home.browse_marketplace')}
          </Link>
        </div>
      </div>

      {/* Navigation Controls */}"
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">"
        <div className="flex space-x-2">
          {memoizedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}`
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide'
                  ? 'bg-cyan-400 scale-125''
                  : 'bg-slate-600 hover:bg-slate-500'`
              }`}`
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
        
      >"
        <ChevronLeft className="w-6 h-6"  />      </button>

      <button
        onClick={nextSlide}"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
        
      >"
        <ChevronRight className="w-6 h-6"  />
      </button>
    </section>) }
export { HeroSection };
'"`