    const {scrollYProgress} = useScroll({target: containerRef,
        offset: ["start start", "end start"]}
    );
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) ;
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]) ;
;
export function HeroSection("props": "any) {;
    const { t "} = useTranslation();