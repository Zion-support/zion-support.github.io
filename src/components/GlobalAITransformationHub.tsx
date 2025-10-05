import React from 'react';
import { Link } from 'react-router-dom';
import { TargetBrain,ZapShield } from 'lucide-react';
constGlobalAITransformationHub = () => { 
  consttransformationAreas = [
    {
      title: 'EnterpriseAutomation'
      description: 'Completebusinessprocess automationwith95% efficiencygains'
      value: '$2.3B'
      icon: <TargetclassName = "w-8 h-8" / > 
      color: 'from-blue-500to-cyan-500'
      link: '/services/enterprise-automation-transformation'
     }
    { 
      title: 'QuantumConsciousnessAI'
      description: 'RevolutionaryAIconsciousness integrationwithinfinite scalability'
      value: '$500B'
      icon: <Brain,className = "w-8 h-8" / > 
      color: 'from-purple-500to-violet-500'
      link: '/services/quantum-consciousness-ai-services'
     }
    { 
      title: 'AutonomousOperations'
      description: 'Self-managingsystemswith 99.99% uptimeandzero humanintervention'
      value: '$150B'
      icon: <ZapclassName = "w-8 h-8" / > 
      color: 'from-emerald-500to-teal-500'
      link: '/services/autonomous-operations-platform'
     }
    { 
      title: 'NeuralSecurity'
      description: 'AdvancedAI-poweredsecuritywith 99.7% threatprevention'
      value: '$87B'
      icon: <ShieldclassName = "w-8 h-8" / > 
      color: 'from-orange-500to-red-500'
      link: '/services/neural-security-framework'
     }
  ]; constsuccessMetrics = [
    { metric: '2.5M+'label: 'GlobalUsers' }
    { metric: '$15B+'label: 'ValueCreated' }
    { metric: '99.99%'label: 'SuccessRate' }
    { metric: '500K+'label: 'EnterpriseClients' }
  ]; return (
    <divclassName = "bg-gradient-to-brfrom-slate-900via-blue-900/20to-slate-900borderborder-blue-400/30rounded-2xlp-8mb-12animate-fade-inshadow-2xl">
      <divclassName="flexitems-centerjustify-centergap-3mb-6">
        <GlobeclassName="w-8 h-8text-blue-400animate-pulse" />
        <spanclassName="text-2xlfont-boldtext-blue-400">🌍 GLOBALAITRANSFORMATION HUB</span>
        <GlobeclassName="w-8 h-8text-blue-400animate-pulse" />
      </div>
      <h2className="text-4xlmd: text-5xlfont-extraboldmb-6text-centerbg-gradient-to-rfrom-blue-400via-cyan-400to-emerald-400bg-clip-texttext-transparent">
        TransformingBusinessOperations Worldwide
      </h2>
      <pclassName="text-xltext-gray-300text-centermb-8max-w-4xlmx-auto">
        Leadingtheglobal AIrevolutionwith cutting-edgetechnologiesthat deliverunprecedentedbusiness valueandoperational excellenceacrossall industries.
      </p>
      <divclassName="gridmd:grid-cols-2lg:grid-cols-4gap-6mb-8">
        { transformationAreas.map((areaindex) = > (
          <Linkkey = { index  }to={ area.link } className = { `bg-gradient-to-br ${area.color }rounded-xlp-6text-whitetransformhover: scale-105transition-allduration-300hover:shadow-xlgroup`}
          >
            <divclassName = "mb-4">{area.icon}</div>
            <h3className="text-xlfont-boldmb-3group-hover: text-yellow-300transition-colors">{area.title}</h3>
            <pclassName = "text-smmb-4opacity-90">{area.description}</p>
            <divclassName="flexitems-centerjustify-between">
              <spanclassName="text-lgfont-boldbg-white/20px-3py-1rounded-full">{area.value}</span>
              <ArrowRight,className="w-5 h-5group-hover: translate-x-1transition-transform" />
            </div>
          </Link>
        ))}
      </div>
      <divclassName = "bg-gradient-to-rfrom-blue-500/20to-emerald-500/20rounded-xlp-6mb-8borderborder-blue-400/30">
        <divclassName="flexitems-centerjustify-centergap-3mb-4">
          <TrendingUpclassName="w-6 h-6text-green-400" />
          <spanclassName="text-xlfont-boldtext-green-400">GlobalSuccessMetrics</span>
        </div>
        <divclassName="gridgrid-cols-2md: grid-cols-4gap-4text-center">
          { successMetrics.map((itemindex) = > (
            <divkey = {index }>
              <divclassName="text-3xlfont-boldtext-white">{item.metric}</div>
              <divclassName="text-smtext-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <divclassName = "gridmd: grid-cols-3gap-6mb-8">
        <divclassName="bg-gradient-to-brfrom-purple-500/20to-violet-500/20rounded-xlp-6borderborder-purple-400/30">
          <divclassName="flexitems-centergap-3mb-4">
            <RocketclassName="w-6 h-6text-purple-400" />
            <h3className="text-lgfont-boldtext-purple-400">RevolutionaryBreakthroughs</h3>
          </div>
          <pclassName="text-gray-300mb-4">LatestAIinnovations achievingunprecedentedaccuracy andconsciousnessintegration.</p>
          <Linkto="/blog/ai-2026-revolutionary-breakthrough-announcement" 
            className="text-purple-400hover:text-purple-300font-semiboldflexitems-centergap-2"
          >
            ExploreBreakthroughs <ArrowRight,className="w-4 h-4" />
          </Link>
        </div>
        <divclassName="bg-gradient-to-brfrom-emerald-500/20to-teal-500/20rounded-xlp-6borderborder-emerald-400/30">
          <divclassName="flexitems-centergap-3mb-4">
            <AwardclassName="w-6 h-6text-emerald-400" />
            <h3className="text-lgfont-boldtext-emerald-400">SuccessStories</h3>
          </div>
          <pclassName="text-gray-300mb-4">Real-worldtransformationsdelivering billionsinvalue creationandoperational excellence.</p>
          <Linkto="/case-studies" 
            className="text-emerald-400hover:text-emerald-300font-semiboldflexitems-centergap-2"
          >
            ViewCaseStudies <ArrowRight,className="w-4 h-4" />
          </Link>
        </div>
        <divclassName="bg-gradient-to-brfrom-orange-500/20to-red-500/20rounded-xlp-6borderborder-orange-400/30">
          <divclassName="flexitems-centergap-3mb-4">
            <UsersclassName="w-6 h-6text-orange-400" />
            <h3className="text-lgfont-boldtext-orange-400">ExpertServices</h3>
          </div>
          <pclassName="text-gray-300mb-4">ComprehensiveAItransformation servicestailoredto yourspecificbusiness needs.</p>
          <Linkto="/services" 
            className="text-orange-400hover:text-orange-300font-semiboldflexitems-centergap-2"
          >
            GetStarted <ArrowRight,className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <divclassName="text-center">
        <Linkto="/contact" 
          className="inline-flexitems-centergap-2bg-gradient-to-rfrom-blue-500to-emerald-500text-whitepx-8py-4rounded-xlfont-boldhover:from-blue-600hover:to-emerald-600transition-allduration-300hover:scale-105shadow-lg"
        >
          <SparklesclassName="w-5 h-5" />
          StartYourAI TransformationJourney
          <ArrowRight,className="w-5 h-5" />
        </Link>
        <pclassName="mt-4text-gray-400text-sm">
          🌍 Join2.5M+ professionalsworldwidetransforming theirbusinesseswith revolutionaryAItechnology
        </p>
      </div>
    </div>
  );
};
exportdefaultGlobalAITransformationHub;