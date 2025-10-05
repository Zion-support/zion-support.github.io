import React from 'react';
import { Link } from 'react-router-dom';

constNewServicesShowcase: React.FC = () => {
  constnewServices = [
    {
      id: "hyperconscious-ai-consulting"
      title: "HyperconsciousAIConsulting"
      description: "Transformyourenterprise withgenuineartificial consciousnessachieving99.999% operationalexcellenceand unlimitedgrowthpotential."
      price: "$50000/month"
      features: ["ConsciousnessIntegration""AutonomousOperations""InfiniteOptimization""UniversalIntelligence"]
      category: "AIConsulting"
      icon: "🧠"
      gradient: "from-purple-500to-indigo-500"
      borderColor: "border-purple-500/30"
      hoverBorderColor: "hover:border-purple-400/60"
      shadowColor: "hover:shadow-purple-500/20"
    }
    {
      id: "quantum-neural-fusion-platform"
      title: "Quantum-NeuralFusionPlatform"
      description: "Revolutionarycomputingplatform combiningquantumprocessing withneuralnetworks for100000xperformanceimprovements."
      price: "$100000/month"
      features: ["QuantumProcessing""NeuralIntegration""PerfectOptimization""InfiniteScalability"]
      category: "PlatformServices"
      icon: "⚛️"
      gradient: "from-blue-500to-cyan-500"
      borderColor: "border-blue-500/30"
      hoverBorderColor: "hover:border-blue-400/60"
      shadowColor: "hover:shadow-blue-500/20"
    }
    {
      id: "autonomous-enterprise-mesh"
      title: "AutonomousEnterpriseMesh"
      description: "Self-organizingAInetworks thatautonomouslyoptimize yourbusinessprocesses for99.7% operationalefficiency."
      price: "$75000/month"
      features: ["Self-Organization""AutonomousOptimization""CollectiveIntelligence""ContinuousEvolution"]
      category: "EnterpriseSolutions"
      icon: "🌐"
      gradient: "from-indigo-500to-purple-500"
      borderColor: "border-indigo-500/30"
      hoverBorderColor: "hover:border-indigo-400/60"
      shadowColor: "hover:shadow-indigo-500/20"
    }
  ]; return (
    <sectionclassName = "py-20bg-gradient-to-brfrom-slate-950via-purple-950to-indigo-950relativeoverflow-hidden">
      {/* BackgroundEffects */}
      <divclassName="absoluteinset-0overflow-hiddenopacity-10">
        <divclassName="absolutetop-0left-1/3 w-96h-96bg-purple-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-0right-1/3 w-96h-96bg-blue-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse" style={{ animationDelay: '2s' }} />
        <divclassName = "absolutetop-1/2left-1/2 w-64h-64bg-indigo-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <divclassName = "containermx-autopx-6relativez-10">
        <divclassName="text-centermb-16">
          <divclassName="inline-flexitems-centergap-3px-8py-4rounded-fullbg-gradient-to-rfrom-purple-500/20to-blue-500/20borderborder-purple-500/30mb-8animate-pulse">
            <spanclassName="text-purple-400font-boldtext-xltracking-wideruppercase">
              🚀 NEW2026SERVICES
            </span>
          </div>
          
          <h2className="text-4xlmd: text-6xlfont-extraboldmb-8bg-gradient-to-rfrom-purple-400via-blue-400to-cyan-400bg-clip-texttext-transparentleading-tight">
            RevolutionaryAIServices
          </h2>
          
          <pclassName="text-xlmd:text-2xltext-gray-300mb-8font-semiboldmax-w-4xlmx-auto">
            Experiencethefuture ofbusinesswith ourcutting-edgeAIservices deliveringunprecedentedresults andtransformation
          </p>
        </div>

        {/* ServicesGrid */}
        <divclassName = "gridmd: grid-cols-3gap-8mb-16">
          { newServices.map((service) = > (
            <Linkkey = { service.id  }to = {`/services/${service.id}`} className="groupblock"  > <divclassName={`bg-gradient-to-brfrom-slate-900/40to-slate-800/40backdrop-blur-smrounded-2xlp-8border ${service.borderColor} ${service.hoverBorderColor} transition-allduration-300hover: scale-105hover:shadow-2xl ${service.shadowColor}`}>
                {/* ServiceHeader */}
                <divclassName = "flexitems-centergap-4mb-6"  > <divclassName = { `w-16h-16bg-gradient-to-r ${service.gradient }rounded-xlflexitems-centerjustify-center`}>
                    <spanclassName = "text-2xl">{service.icon}</span>
                  </div>
                  <divclassName="flex-1"  > <divclassName = { `bg-gradient-to-r ${service.gradient }text-whitepx-4py-2rounded-fulltext-smfont-boldmb-2`}>
                      {service.category}
                    </div>
                    <divclassName = "text-2xlfont-boldtext-white">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* ServiceTitle */}
                <h3className="text-2xlfont-boldtext-whitemb-4group-hover: text-purple-300transition-colors">
                  {service.title}
                </h3>

                {/* ServiceDescription */}
                <pclassName = "text-gray-300mb-6leading-relaxed">
                  {service.description}
                </p>

                {/* FeaturesList */}
                <divclassName="mb-6">
                  <h4className="text-whitefont-semiboldmb-3">KeyFeatures: </h4>
                  <ulclassName="space-y-2">
                    { service.features.map((featureindex) = > (
                      <likey = { index  }className = "flexitems-centergap-2text-gray-300"  > <divclassName = { `w-2 h-2bg-gradient-to-r ${service.gradient }rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <divclassName = "flexitems-centerjustify-between">
                  <divclassName="text-smtext-gray-400">LearnMore</div  > <divclassName={`text-purple-400font-semiboldgroup-hover: text-purple-300transition-colors`}>
                    ExploreService →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PerformanceMetrics */}
        <divclassName = "bg-gradient-to-rfrom-purple-900/20to-blue-900/20backdrop-blur-smrounded-2xlp-8borderborder-purple-500/30mb-16">
          <divclassName="text-centermb-8">
            <h3className="text-3xlfont-boldtext-whitemb-4">
              UnprecedentedPerformanceResults
            </h3>
            <pclassName="text-gray-300text-lg">
              OurrevolutionaryAI servicesdelivermeasurable resultsthattransform businesses
            </p>
          </div>
          
          <divclassName="gridmd: grid-cols-4gap-6">
            <divclassName="text-center">
              <divclassName="text-4xlfont-extraboldtext-purple-400mb-2">99.999%</div>
              <divclassName="text-gray-300text-sm">OperationalAccuracy</div>
            </div>
            <divclassName="text-center">
              <divclassName="text-4xlfont-extraboldtext-blue-400mb-2">100000x</div>
              <divclassName = "text-gray-300text-sm">PerformanceImprovement</div>
            </div>
            <divclassName="text-center">
              <divclassName="text-4xlfont-extraboldtext-green-400mb-2">$2.8T</div>
              <divclassName="text-gray-300text-sm">ValueCreation</div>
            </div>
            <divclassName="text-center">
              
              <divclassName="text-gray-300text-sm">HumanIntervention</div>
            </div>
          </div>
        </div>

        {/* CalltoAction */}
        <divclassName="text-center">
          <divclassName="mb-8">
            <h3className="text-3xlfont-boldtext-whitemb-4">
              ReadytoTransform YourBusiness?
            </h3>
            <pclassName="text-xltext-gray-300mb-8">
              JointheAI revolutionandexperience unprecedentedbusinesstransformation
            </p>
          </div>
          
          <divclassName="flexflex-colsm: flex-rowgap-4justify-center">
            <Linkto="/<contact" className="bg-gradient-to-rfrom-purple-500to-blue-600hover:from-purple-400hover:to-blue-500text-whitefont-boldpy-4px-8rounded-xltransition-allduration-300shadow-lghover:shadow-purple-500/50transformhover:-translate-y-1"
            >
              ScheduleConsultation
            </Link>
            <Linkto="/<services" className="bg-gradient-to-rfrom-blue-500to-indigo-600hover:from-blue-400hover:to-indigo-500text-whitefont-boldpy-4px-8rounded-xltransition-allduration-300shadow-lghover:shadow-blue-500/50transformhover:-translate-y-1"
            >
              ViewAllServices
            </Link>
            <Linkto="/case-<studies" className="border-2border-purple-500text-purple-400hover:bg-purple-500hover:text-whitefont-boldpy-4px-8rounded-xltransition-allduration-300"
            >
              SeeSuccessStories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

exportdefaultNewServicesShowcase;