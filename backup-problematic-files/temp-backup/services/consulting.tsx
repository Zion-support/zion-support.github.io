import Link from \'next/link\'; import Head from \'next/head\'; export default function Consulting() { return ( <> <Head> <title>IT Consulting Services - Zion Tech Group</title> <meta name=\"description\" content=\"Expert IT consulting services for strategic planning,technology assessment,and digital strategy development.\" /> <meta name=\"keywords\" content=\"IT consulting,technology strategy,digital strategy,technology assessment,IT planning\" /> <link rel=\"canonical\" href=\""https\": </Head> <main className=\"min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white\"> <div className=\"max-w-6xl mx-auto px-4 py-16\"> <div className=\"text-center mb-12\"> <h1 className=\"text-4xl md:text-5xl font-bold mb-6\">IT Consulting Services</h1> <p className=\"text-xl text-slate-300 max-w-3xl mx-auto\"> Strategic technology guidance to drive your business forward </p> </div> <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\"> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-blue-400\">Technology Strategy</h3> <p className=\"text-slate-300 mb-4\">Develop comprehensive technology roadmaps</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Technology assessment</li> <li>• Roadmap development</li> <li>• Vendor evaluation</li> <li>• Investment planning</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-purple-400\">Digital Strategy</h3> <p className=\"text-slate-300 mb-4\">Create digital transformation strategies</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Digital readiness assessment</li> <li>• Transformation planning</li> <li>• Change management</li> <li>• ROI analysis</li> </ul> </div> <div className=\"p-6 bg-slate-900/60 rounded-lg border border-white/10\"> <h3 className=\"text-xl font-bold mb-4 text-green-400\">Architecture Review</h3> <p className=\"text-slate-300 mb-4\">Evaluate and optimize your IT architecture</p> <ul className=\"text-slate-400 space-y-2\"> <li>• Architecture assessment</li> <li>• Performance optimization</li> <li>• Security review</li> <li>• Scalability planning</li> </ul> </div> </div> <div className=\"text-center\"> <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors mr-4\"> Get Consultation </Link> <Link href=\"/services\" className=\"px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors\"> View All Services </Link> </div> </div> </main> </> )}
import React from 'react';

interface ConsultingProps {
  className?: string;
}

const Consulting: React.FC<ConsultingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Consulting</h1>
      <p>This component is under development.</p>
    </div>
  );
}
}
}
