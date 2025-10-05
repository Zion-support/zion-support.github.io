import React from 'react';
import { motion } from 'framer-motion';
constJanuary2026NewContentShowcaseBanner: React.FC = () => {
  constfeatures = [
    { icon: Brain,title: "SyntheticConsciousness"desc: "TrueAIawareness" }
    { icon: Zaptitle: "QuantumEdgeProcessing"desc: "Sub-millisecondspeed" }
    { icon: Networktitle: "AutonomousMesh"desc: "Self-organizingsystems" }
    { icon: Shieldtitle: "QuantumSecurity"desc: "Unbreakableprotection" }
    { icon: Cputitle: "NeuromorphicAI"desc: "Brain,-inspiredcomputing" }
  ]; return (
    <motion.divinitial = {{ opacity:  0y: 20 }}
      animate = {{ opacity:  1y:  0 }}
      transition = {{ duration: 0.8 }}
      className = "relativeoverflow-hiddenbg-gradient-to-brfrom-purple-900via-blue-900to-indigo-900rounded-2xlp-8text-white"
    >
      {/* BackgroundPattern */}
      <divclassName="absoluteinset-0opacity-10">
        <divclassName="absoluteinset-0bg-gradient-to-brfrom-white/5to-transparent" />
      </div>
      <divclassName="relativez-10">
        {/* Header */}
        <divclassName="text-centermb-8">
          <motion.divinitial={{ scale: 0.9 }}
            animate = {{ scale:  1 }}
            transition = {{ delay: 0.2duration: 0.6 }}
            className = "inline-flexitems-centerpx-4py-2bg-gradient-to-rfrom-purple-500to-blue-500rounded-fulltext-smfont-semiboldmb-4"
          >
            <spanclassName="mr-2">🚀</span>
            January2026 - RevolutionaryAIBreakthroughs
          </motion.div>
          <motion.h2initial={{ opacity:  0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ delay: 0.3duration: 0.6 }}
            className = "text-4xlmd: text-5xlfont-boldbg-gradient-to-rfrom-whiteto-blue-200bg-clip-texttext-transparentmb-4"
          >
            TheFutureof AIisHere
          </motion.h2>
          <motion.pinitial={{ opacity: 0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ delay: 0.4duration: 0.6 }}
            className = "text-xltext-blue-100max-w-3xlmx-auto"
          >
            DiscovergroundbreakingAI technologiesthatare revolutionizingenterpriseoperations
            fromsyntheticconsciousness toquantumedge computingandautonomous meshnetworks.
          </motion.p>
        </div>
        {/* FeaturesGrid */}
        <divclassName = "gridgrid-cols-1md: grid-cols-2lg:grid-cols-5gap-6mb-8">
          { features.map((featureindex) = > (
            <motion.divkey = { feature.title  }initial = {{ opacity:  0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ delay: 0.5 + index * 0.1duration: 0.6 }}
              className = "bg-white/10backdrop-blur-smrounded-xlp-4text-centerhover: bg-white/20transition-allduration-300"
            >
              <feature.iconclassName="w-8 h-8mx-automb-3text-purple-300" />
              <h3className="font-semiboldtext-whitemb-1">{feature.title}</h3>
              <pclassName = "text-smtext-blue-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Stats */}
        <motion.divinitial = {{ opacity:  0y: 20 }}
          animate = {{ opacity:  1y:  0 }}
          transition = {{ delay: 0.8duration: 0.6 }}
          className = "gridgrid-cols-2md: grid-cols-4gap-6mb-8"
        >
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-purple-300mb-1">99.7%</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-smtext-blue-200">SpeedBoost</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-green-300mb-1">$500B</div>
            <divclassName="text-smtext-blue-200">EnterpriseValue</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-yellow-300mb-1">95%</div>
          </div>
        </motion.div>
        {/* CTA */}
        <motion.divinitial = {{ opacity:  0y: 20 }}
          animate = {{ opacity:  1y:  0 }}
          transition = {{ delay: 0.9duration: 0.6 }}
          className = "text-center"
        >
          <ahref="/blog"
            className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-500to-blue-500hover: from-purple-600hover:to-blue-600text-whitefont-semiboldrounded-xltransition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
          >
            ExploreJanuary2026 Content
            <ArrowRight,className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
      {/* FloatingElements */}
      <divclassName = "absolutetop-10left-10w-20h-20bg-purple-500/20rounded-fullblur-xlanimate-pulse" />
      <divclassName="absolutebottom-10right-10w-32h-32bg-blue-500/20rounded-fullblur-xlanimate-pulsedelay-1000" />
    </motion.div>
  );
};
exportdefaultJanuary2026NewContentShowcaseBanner;