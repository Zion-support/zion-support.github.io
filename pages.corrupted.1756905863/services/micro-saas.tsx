<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======


=======
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


=======
ursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import NextLink from \'next/link\' import Sidebar from \'../../components/Sidebar\' export default function MicroSaaS() { const products = [{ \"id\": \'ai-qa\',\"name\": \'AI QA Assistant\',\"price\": \'$299–$999/mo\',\"desc\": \'Autogenerate test cases,run PR checks,and file actionable defects.\' },{ \"id\": \'lead-enrichment\',\"name\": \'Lead Enrichment API\',\"price\": \'$99–$499/mo\',\"desc\": \'Firmographic,technographic,and intent data enrichment in minutes.\' },{ \"id\": \'contract-ai\',\"name\": \'Contract AI Reviewer\',\"price\": \'$199–$799/mo\',\"desc\": \'Clause extraction,risk scoring,and redline suggestions.\' },{ \"id\": \'ai-seo-auditor\',\"name\": \'AI SEO Auditor\',\"price\": \'$149–$599/mo\',\"desc\": \'Autofix metadata,generate briefs,and monitor rankings.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>Micro SaaS</h1> <p>Fast-to-adopt products with transparent pricing and measurable ROI.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {products.map((p) => ( <div key={p.id} className=\"ztg-card\"> <h3>{p.name}</h3> <p>{p.desc}</p> <p><strong>{p.price}</strong></p> <NextLink className=\"ztg-btn\" href={`/services/micro-saas/${p.id}`}>View details</NextLink> </div> ))} </div> <div className=\"ztg-card\"> <p> Market \"benchmarks\": Micro SaaS typically ranges from $49–$999/mo depending on usage and SLAs. See pricing guides at{\' \'} <a href=\""https\": <a href=\"https: </p> </div> </div> </div> </div> </div> ) }
import React from 'react';
interface MicrosaasProps {
  // Add props here as needed
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import NextLink from \'next/link\' import Sidebar from \'../../components/Sidebar\' export default function MicroSaaS() { const products = [{ \"id\": \'ai-qa\',\"name\": \'AI QA Assistant\',\"price\": \'$299–$999/mo\',\"desc\": \'Autogenerate test cases,run PR checks,and file actionable defects.\' },{ \"id\": \'lead-enrichment\',\"name\": \'Lead Enrichment API\',\"price\": \'$99–$499/mo\',\"desc\": \'Firmographic,technographic,and intent data enrichment in minutes.\' },{ \"id\": \'contract-ai\',\"name\": \'Contract AI Reviewer\',\"price\": \'$199–$799/mo\',\"desc\": \'Clause extraction,risk scoring,and redline suggestions.\' },{ \"id\": \'ai-seo-auditor\',\"name\": \'AI SEO Auditor\',\"price\": \'$149–$599/mo\',\"desc\": \'Autofix metadata,generate briefs,and monitor rankings.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>Micro SaaS</h1> <p>Fast-to-adopt products with transparent pricing and measurable ROI.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {products.map((p) => ( <div key={p.id} className=\"ztg-card\"> <h3>{p.name}</h3> <p>{p.desc}</p> <p><strong>{p.price}</strong></p> <NextLink className=\"ztg-btn\" href={`/services/micro-saas/${p.id}`}>View details</NextLink> </div> ))} </div> <div className=\"ztg-card\"> <p> Market \"benchmarks\": Micro SaaS typically ranges from $49–$999/mo depending on usage and SLAs. See pricing guides at{\' \'} <a href=\""https\": <a href=\"https: </p> </div> </div> </div> </div> </div> ) };
import React from 'react';
interface MicrosaasProps {
  // Add props here as needed

<<<<<<< HEAD
<<<<<<< HEAD
import NextLink from \'next/link\' import Sidebar from \'../../components/Sidebar\' export default function MicroSaaS() { const products = [{ \"id\": \'ai-qa\',\"name\": \'AI QA Assistant\',\"price\": \'$299–$999/mo\',\"desc\": \'Autogenerate test cases,run PR checks,and file actionable defects.\' },{ \"id\": \'lead-enrichment\',\"name\": \'Lead Enrichment API\',\"price\": \'$99–$499/mo\',\"desc\": \'Firmographic,technographic,and intent data enrichment in minutes.\' },{ \"id\": \'contract-ai\',\"name\": \'Contract AI Reviewer\',\"price\": \'$199–$799/mo\',\"desc\": \'Clause extraction,risk scoring,and redline suggestions.\' },{ \"id\": \'ai-seo-auditor\',\"name\": \'AI SEO Auditor\',\"price\": \'$149–$599/mo\',\"desc\": \'Autofix metadata,generate briefs,and monitor rankings.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>Micro SaaS</h1> <p>Fast-to-adopt products with transparent pricing and measurable ROI.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {products.map((p) => ( <div key={p.id} className=\"ztg-card\"> <h3>{p.name}</h3> <p>{p.desc}</p> <p><strong>{p.price}</strong></p> <NextLink className=\"ztg-btn\" href={`/services/micro-saas/${p.id}`}>View details</NextLink> </div> ))} </div> <div className=\"ztg-card\"> <p> Market \"benchmarks\": Micro SaaS typically ranges from $49–$999/mo depending on usage and SLAs. See pricing guides at{\' \'} <a href=\""https\": <a href=\"https: </p> </div> </div> </div> </div> </div> ) }
import React from 'react';
interface MicrosaasProps {
  // Add props here as needed
}

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c


origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function Microsaas({ }: MicrosaasProps) {
  return (
    <div>
      <h1>Microsaas</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
