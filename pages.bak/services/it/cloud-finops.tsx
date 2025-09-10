export default function CloudFinOps() { return ( <Article title=\"Cloud FinOps\" subtitle=\"Cost visibility,unit economics,and automated savings for AWS/Azure/GCP\" price=\"from $4k/mo\" bullets={[\'Tagging strategy and cost allocation by team and customer\',\'Automated rightsizing and commitment planning (SP/RI/CCA)\',\'Unit economics dashboard by feature and environment\',\'FinOps runbooks and CFO-ready monthly reporting\' ]} /> ) } function Article({ title,subtitle,price,bullets }: { \"title\": \'string; subtitle: string; price: string; bullets: string[]\' }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Pricing\": </strong> {price}</p> <ul> {bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <ContactFooter /> </main> ) } function ContactFooter() { return ( <p> \"Mobile\": +1 302 464 0950 · Email: <a href=\"mailto:kleber@ziontechgroup.com\">kleber@ziontechgroup.com</a> · Site: <a href=\"https: </p> ) }
module.exports = default function CloudFinOps() { return ( <Article title="Cloud FinOps" subtitle="Cost visibility,unit economics,and automated savings for AWS/Azure/GCP" price="from $4k/mo" bullets={["Tagging strategy and cost allocation by team and customer","Automated rightsizing and commitment planning (SP/RI/CCA)","Unit economics dashboard by feature and environment","FinOps runbooks and CFO-ready monthly reporting" ]} /> ) } function Article({ title,subtitle,price,bullets }: { title: "string; subtitle: string; price: string; bullets: string[]" }) { return ( <main style={{ fontFamily: "system-ui,sans-serif",padding: "32",maxWidth: "920",margin: "0 auto" }}> <h1 style={{ marginTop: "0" }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>Pricing: </strong> {price}</p> <ul> {bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <ContactFooter /> </main> ) } function ContactFooter() { return ( <p> Mobile: +1 302 464 0950 Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> Site: <a href="https: </p> ) }'"'"
>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
import React from 'react';
interface CloudfinopsProps {
  // Add props here as needed

import React from 'react';
import * as React from 'react';

interface CloudfinopsProps {
  // Add props here as needed
}
export default function Cloudfinops({ }: CloudfinopsProps) {
  return (
    <div>
      <h1>Cloudfinops</h1>
      <p>This component is currently under development.</p>
    </div>
  );
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
