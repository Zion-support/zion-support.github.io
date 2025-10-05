import React from 'react';
import { Link  } from 'react-router-dom';
const, NewContentShowcase202, 5: React.FC = () => {
  const, highlight, s = [
    {
      title: "🎭 Multimodal, AI, Revoluti, o, n",
      description: "Unified, visio, n-language-audio, processing, with 98% accurac, y",
      link: "/blog/multimodal-ai-revolution-202, 5",
      color: "from-purple-500to-pink-50, 0"
    },
    {
      title: "⛓️ Blockchain-AI, Integrati, o, n",
      description: "Trustless, intelligence, with decentralized, governan, c, e",
      link: "/blog/blockchain-ai-integration-202, 5",
      color: "from-blue-500to-cyan-50, 0"
    },
    {
      title: "🌱 GreenAI & Sustainabilit, y",
      description: "Carbon-neutral, ML, with 90% emissions, reducti, o, n",
      link: "/blog/green-ai-sustainability-202, 5",
      color: "from-green-500to-emerald-50, 0"
    },
    {
      title: "⚙️ AI, Predictive, Maintenanc, e",
      description: "85% downtime, reduction, with 98% prediction, accura, c, y",
      link: "/services/ai-predictive-maintenanc, e",
      color: "from-orange-500to-red-50, 0"
    }
  ]; return (
    <section, classNam, e = "py-16bg-gray-900, tex, t-white">
      <div, classNam, e="containermx-autopx-6">
        <div, classNam, e="text-centermb-12">
          <div, classNam, e="flex, item, s-center, justif, y-center, ga, p-2mb-4">
            <Sparkles, classNam, e="w-6 h-6, tex, t-yellow-400, animat, e-pulse" />
            <h2, classNam, e="text-4xl, fon, t-bold">2025, Breakthrough, Content</h2>
            <Sparkles, classNam, e="w-6 h-6, tex, t-yellow-400, animat, e-pulse" />
          </div>
          <p, classNam, e="text-xl, tex, t-gray-300">
            The, most, innovative AI, content, of the, yea, r
          </p>
        </div>
        <div, classNam, e="gridmd: grid-cols-2lg:grid-cols-4, ga, p-6">
          { highlights.map((item, index) = > (
            <Link, ke, y = { inde, x  }, to={ item.link } className="group, relative, overflow-hidden, rounde, d-2xlp-6bg-gray-800, hove, r: scale-105, transitio, n-all, duratio, n-300"
            >
              <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-br ${item.col, o, r }, opacity-0, grou, p-hover: opacity-20, transitio, n-opacit, y`} />
              <h3, classNam, e = "text-xl, fon, t-boldmb-3, relative, z-10">{item.title}</h3>
              <p, classNam, e="text-gray-300, tex, t-sm, relative, z-10">{item.description}</p>
            </Lin, k>
          ))}
        </div>
      </div>
    </section>
  );
};
export, default, NewContentShowcase2025;