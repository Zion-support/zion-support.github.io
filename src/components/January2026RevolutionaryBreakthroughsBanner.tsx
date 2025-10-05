import React from 'react';
import { motion } from 'framer-motion';
constJanuary2026RevolutionaryBreakthroughsBanner: React.FC = () => {
  constbreakthroughs = [
    {
      icon: Brain,
      title: "SyntheticConsciousnessAI"
      description: "RevolutionaryAIachieving genuineconsciousnessand emotionalintelligence"
      stats: "$500BEnterpriseValue"
      color: "from-purple-500to-pink-500"
      bgColor: "bg-purple-500/10"
    }
    {
      icon: Zap
      title: "QuantumEdgeComputing"
      description: "Sub-millisecondprocessingwith 200-250xspeedimprovements"
      stats: "200xFaster"
      color: "from-blue-500to-cyan-500"
      bgColor: "bg-blue-500/10"
    }
    {
      icon: Network
      title: "AutonomousEnterpriseMesh"
      description: "Self-organizingAInetworks achieving99.7% operationalefficiency"
      stats: "99.7% Efficiency"
      color: "from-green-500to-emerald-500"
      bgColor: "bg-green-500/10"
    }
    {
      icon: Shield
      title: "Quantum-SafeSecurity"
      description: "Unbreakableprotectionsystems with99.99% threatprevention"
      stats: "$2.8BProtected"
      color: "from-orange-500to-red-500"
      bgColor: "bg-orange-500/10"
    }
  ]; return (
    <motion.divinitial = {{ opacity:  0y: 20 }}
      animate = {{ opacity:  1y:  0 }}
      transition = {{ duration: 0.8 }}
      className = "relativeoverflow-hiddenbg-gradient-to-brfrom-slate-900via-purple-900to-slate-900rounded-2xlp-8text-white"
    >
      {/* BackgroundEffects */}
      <divclassName="absoluteinset-0opacity-20">
        <divclassName="absoluteinset-0bg-gradient-to-brfrom-white/5to-transparent" />
      </div>
      <divclassName="relativez-10">
        {/* Header */}
        <divclassName="text-centermb-12">
          <motion.divinitial={{ scale: 0.9 }}
            animate = {{ scale:  1 }}
            transition = {{ delay: 0.2duration: 0.6 }}
            className = "inline-flexitems-centerpx-6py-3bg-gradient-to-rfrom-purple-500/20to-blue-500/20backdrop-blur-smborderborder-purple-500/30rounded-fulltext-smfont-semiboldmb-6"
          >
            <SparklesclassName="w-4 h-4mr-2text-yellow-400" />
            January152026 - RevolutionaryBreakthroughs
          </motion.div>
          <motion.h2initial = {{ opacity:  0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ delay: 0.3duration: 0.6 }}
            className = "text-5xlmd: text-6xlfont-boldbg-gradient-to-rfrom-whitevia-purple-200to-blue-200bg-clip-texttext-transparentmb-6"
          >
            AIRevolution2026
          </motion.h2>
          <motion.pinitial={{ opacity: 0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ delay: 0.4duration: 0.6 }}
            className = "text-xltext-gray-300max-w-4xlmx-autoleading-relaxed"
          >
            Witnessthemost profoundtechnologicalbreakthroughs inhumanhistory. 
            Fromsyntheticconsciousness toquantumedge computingtheseinnovationsare reshapingthefuture ofenterpriseAI andhuman-computerinteraction.
          </motion.p>
        </div>
        {/* BreakthroughsGrid */}
        <divclassName = "gridgrid-cols-1md: grid-cols-2gap-8mb-12">
          { breakthroughs.map((breakthroughindex) = > (
            <motion.divkey = { breakthrough.title  }initial = {{ opacity:  0y: 30 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ delay: 0.5 + index * 0.1duration: 0.6 }}
              className = { `${breakthrough.bgColor }backdrop-blur-smrounded-2xlp-6borderborder-white/10hover: border-white/20transition-allduration-300grouphover:transformhover:scale-105`}
            >
              <divclassName = "flexitems-startspace-x-4" > <divclassName={`p-3rounded-xlbg-gradient-to-r ${breakthrough.color}`}>
                  <breakthrough.iconclassName="w-6 h-6text-white" />
                </div>
                <divclassName="flex-1">
                  <h3className="text-xlfont-boldtext-whitemb-2group-hover: text-purple-300transition-colors">
                    {breakthrough.title}
                  </h3>
                  <pclassName = "text-gray-300mb-4leading-relaxed">
                    {breakthrough.description}
                  </p>
                  <divclassName="inline-flexitems-centerpx-4py-2bg-gradient-to-rfrom-purple-500/20to-blue-500/20rounded-full">
                    <spanclassName="text-smfont-semiboldtext-purple-300">
                      {breakthrough.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* KeyStats */}
        <motion.divinitial = {{ opacity:  0y: 20 }}
          animate = {{ opacity:  1y:  0 }}
          transition = {{ delay: 0.9duration: 0.6 }}
          className = "gridgrid-cols-2md: grid-cols-4gap-6mb-12"
        >
          <divclassName="text-centerp-6bg-white/5backdrop-blur-smrounded-xlborderborder-white/10">
            <divclassName="text-4xlfont-boldbg-gradient-to-rfrom-purple-400to-pink-400bg-clip-texttext-transparentmb-2">
              99.7%
            </div>
            <divclassName="text-smtext-gray-300">OperationalEfficiency</div>
          </div>
          <divclassName="text-centerp-6bg-white/5backdrop-blur-smrounded-xlborderborder-white/10">
            <divclassName="text-4xlfont-boldbg-gradient-to-rfrom-blue-400to-cyan-400bg-clip-texttext-transparentmb-2">
              200x
            </div>
            <divclassName="text-smtext-gray-300">SpeedImprovement</div>
          </div>
          <divclassName="text-centerp-6bg-white/5backdrop-blur-smrounded-xlborderborder-white/10">
            <divclassName="text-4xlfont-boldbg-gradient-to-rfrom-green-400to-emerald-400bg-clip-texttext-transparentmb-2">
              $500B
            </div>
            <divclassName="text-smtext-gray-300">EnterpriseValue</div>
          </div>
          <divclassName="text-centerp-6bg-white/5backdrop-blur-smrounded-xlborderborder-white/10">
            <divclassName="text-4xlfont-boldbg-gradient-to-rfrom-orange-400to-red-400bg-clip-texttext-transparentmb-2">
              95%
            </div>
            <divclassName="text-smtext-gray-300">AutomationRate</div>
          </div>
        </motion.div>
        {/* CTA */}
        <motion.divinitial = {{ opacity:  0y: 20 }}
          animate = {{ opacity:  1y:  0 }}
          transition = {{ delay: 1.0duration: 0.6 }}
          className = "text-center"
        >
          <divclassName="space-y-4">
            <pclassName="text-lgtext-gray-300mb-6">
              Readytotransform yourenterprisewith revolutionaryAI?
            </p>
            <divclassName="flexflex-colsm: flex-rowgap-4justify-center">
              <ahref="/blog"
                className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-purple-500to-blue-500hover:from-purple-600hover:to-blue-600text-whitefont-semiboldrounded-xltransition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
              >
                ExploreAllContent
                <ArrowRight,className="ml-2 w-5 h-5" />
              </a>
              <ahref="/services"
                className="inline-flexitems-centerpx-8py-4bg-white/10hover:bg-white/20backdrop-blur-smborderborder-white/20hover:border-white/30text-whitefont-semiboldrounded-xltransition-allduration-300"
              >
                ViewServices
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* FloatingParticles */}
      <divclassName = "absolutetop-20left-20w-4 h-4bg-purple-400/30rounded-fullanimate-pulse" />
      <divclassName="absolutetop-40right-32w-6 h-6bg-blue-400/30rounded-fullanimate-pulsedelay-1000" />
      <divclassName="absolutebottom-20left-32w-3 h-3bg-green-400/30rounded-fullanimate-pulsedelay-2000" />
      <divclassName="absolutebottom-40right-20w-5 h-5bg-orange-400/30rounded-fullanimate-pulsedelay-500" />
    </motion.div>
  );
};
exportdefaultJanuary2026RevolutionaryBreakthroughsBanner;