>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages.corrupted.1756905863/services/ai-services.tsx
import Sidebar from \'../../components/Sidebar\' export default function AIServices() { const services = [{ \"title\": \'AI Product Development\',\"price\": \'$25k–$150k project\',\"desc\": \'RAG,agents,evaluation,safety,and monitoring.\' },{ \"title\": \'Data Platforms\',\"price\": \'$5k–$20k/mo\',\"desc\": \'Pipelines,warehousing,governance,and BI.\' },{ \"title\": \'GenAI Integrations\',\"price\": \'$8k–$40k project\',\"desc\": \'Chat,summarization,structured extraction,and workflows.\' },{ \"title\": \'MLOps & Observability\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Evaluation suites,drift detection,and rollout safety.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>AI Services</h1> <p>Practical,production-grade AI for measurable business outcomes.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {services.map((s) => ( <div key={s.title} className=\"ztg-card\"> <h3>{s.title}</h3> <p>{s.desc}</p> <p><strong>{s.price}</strong></p> </div> ))} </div> <div className=\"ztg-card\"> <p> Reference pricing insights from{\' \'} <a href=\""https\": <a href=\"https: <a href=\"https: </p> </div> </div> </div> </div> </div> ) }
import React from 'react';
interface AiservicesProps {
  // Add props here as needed
}
export default function Aiservices({ }: AiservicesProps) {
  return (
    <div>
      <h1>Aiservices</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages.corrupted.1756905863/services/ai-services.tsx
