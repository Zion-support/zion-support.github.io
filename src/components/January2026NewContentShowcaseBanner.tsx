import React from "react";
constJanuary2026NewContentShowcaseBanner: React.FC = () => {
  const, features = [
    { icon: Braintitle: "SyntheticConsciousnes, s", desc: "TrueAIawareness" }{ icon: Zaptitle: "Quantum, EdgeProcessing", desc: "Sub-millisecond, speed" },
    { icon: Networktitle: "AutonomousMesh", desc: "Self-organizing, systems" },
    { icon: Shieldtitle: "QuantumSecurity", desc: "Unbreakableprotection" }{ icon: Cputitle: "Neuromorphi, cAI", desc: "Brain-inspired, computing" }
  ]; return(
    <motion.div, initial={{ opacity:  0y: 20 }}
      anima, te={{ opacity:  1y:  0 }}
      transiti, on={{ duration:  0.8 }}
      className = "relativeoverflow -hiddenbg -gradient -to-brfrom -purple -900via -blue -900to -indigo -900rounded -2xlp -8text -white"
        <divclassName = "gridgrid -cols -1md: grid-cols -2lg: grid-cols -5gap -6mb-8">
          { features.map((fea, t, u, r, e, ind, e, x) = > (
            <motion.div, key={ feature.ti, t, l, e  }, initi, al={{ opacity:  0y: 20 }}
              anima, te={{ opacity:  1y:  0 }}
              transiti, on={{ delay: 0.5 + index * , 0.1duration: 0.6 }}
              className = "bg-white /10backdrop -blur -smrounded -xlp -4text -centerhover: bg-white/20transition -allduration -300"
            >
              <feature.iconclassName="w-8 h-8mx -automb -3text -purple -300" />
              <h3className="font -semiboldtext -whitemb-1">{feature.t, i, t, l, e}</h3>
              <pclassName = "text -smtext -blue -200">{feature.de, s, c}</p>
            </motion.di, v>
            Explore, January, 2026 Conte, n, t
            <ArrowRightclassName="ml-2 w-5 h-5" />