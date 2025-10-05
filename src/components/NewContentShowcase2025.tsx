import React from 'react';
import { Link } from 'react-router-dom';
constNewContentShowcase2025: React.FC = () => {
  consthighlights = [
    {
      title: "🎭 MultimodalAIRevolution"
      description: "Unifiedvision-language-audioprocessingwith 98% accuracy"
      link: "/blog/multimodal-ai-revolution-2025"
      color: "from-purple-500to-pink-500"
    }
    {
      title: "⛓️ Blockchain-AIIntegration"
      description: "Trustlessintelligencewith decentralizedgovernance"
      link: "/blog/blockchain-ai-integration-2025"
      color: "from-blue-500to-cyan-500"
    }
    {
      title: "🌱 GreenAI & Sustainability"
      description: "Carbon-neutralMLwith 90% emissionsreduction"
      link: "/blog/green-ai-sustainability-2025"
      color: "from-green-500to-emerald-500"
    }
    {
      title: "⚙️ AIPredictiveMaintenance"
      description: "85% downtimereductionwith 98% predictionaccuracy"
      link: "/services/ai-predictive-maintenance"
      color: "from-orange-500to-red-500"
    }
  ]; return (
    <sectionclassName = "py-16bg-gray-900text-white">
      <divclassName="containermx-autopx-6">
        <divclassName="text-centermb-12">
          <divclassName="flexitems-centerjustify-centergap-2mb-4">
            <SparklesclassName="w-6 h-6text-yellow-400animate-pulse" />
            <h2className="text-4xlfont-bold">2025BreakthroughContent</h2>
            <SparklesclassName="w-6 h-6text-yellow-400animate-pulse" />
          </div>
          <pclassName="text-xltext-gray-300">
            Themostinnovative AIcontentof theyear
          </p>
        </div>
        <divclassName="gridmd: grid-cols-2lg:grid-cols-4gap-6">
          { highlights.map((itemindex) = > (
            <Linkkey = { index  }to={ item.link } className="grouprelativeoverflow-hiddenrounded-2xlp-6bg-gray-800hover: scale-105transition-allduration-300"
            >
              <divclassName = { `absoluteinset-0bg-gradient-to-br ${item.color }opacity-0group-hover: opacity-20transition-opacity`} />
              <h3className = "text-xlfont-boldmb-3relativez-10">{item.title}</h3>
              <pclassName="text-gray-300text-smrelativez-10">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
exportdefaultNewContentShowcase2025;