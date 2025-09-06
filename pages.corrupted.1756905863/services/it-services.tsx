<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
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


=======
=======
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
;
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
import Sidebar from \'../../components/Sidebar\' export default function ITServices() { const offerings = [{ \"title\": \'Managed Cloud (AWS/GCP/Azure)\',\"price\": \'$3k–$12k/mo\',\"desc\": \'Provisioning,observability,cost optimization,and SRE.\' },{ \"title\": \'Cybersecurity & Compliance\',\"price\": \'$4k–$15k/mo\',\"desc\": \'vCISO,SOC hardening,ISO 27001/SOC2 readiness.\' },{ \"title\": \'DevOps & CI/CD\',\"price\": \'$2k–$8k/mo\',\"desc\": \'Pipelines,IaC,release automation,blue/green,canary.\' },{ \"title\": \'Modern Web & Mobile\',\"price\": \'$15k–$60k project\',\"desc\": \'Next.js,React Native,performance,accessibility.\' } ] return ( <div className=\"ztg-page\"> <div className=\"ztg-container\"> <div className=\"ztg-grid\"> <Sidebar /> <div> <div className=\"ztg-card\"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className=\"ztg-section\" style={{ \"display\": \'grid\',\"gridTemplateColumns\": \'repeat(2,minmax(0,1fr))\',\"gap\": \'24\' }}> {offerings.map((o) => ( <div key={o.title} className=\"ztg-card\"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
import Sidebar from '../../components/Sidebar' export default function ITServices() { const offerings = [{ "title": 'Managed Cloud (AWS/GCP/Azure)',"price": '$3k–$12k/mo',"desc": 'Provisioning,observability,cost optimization,and SRE.' },{ "title": 'Cybersecurity & Compliance',"price": '$4k–$15k/mo',"desc": 'vCISO,SOC hardening,ISO 27001/SOC2 readiness.' },{ "title": 'DevOps & CI/CD',"price": '$2k–$8k/mo',"desc": 'Pipelines,IaC,release automation,blue/green,canary.' },{ "title": 'Modern Web & Mobile',"price": '$15k–$60k project',"desc": 'Next.js,_React Native,performance,accessibility.' } ] return ( <div className="ztg-page"> <div className="ztg-container"> <div className="ztg-grid"> <Sidebar /> <div> <div className="ztg-card"> <h1>IT Services</h1> <p>Reliable delivery,measurable uptime,and transparent governance.</p> </div> <div className="ztg-section" style={{ "display": 'grid',"gridTemplateColumns": 'repeat(2,minmax(0,1fr))',"gap": '24' }}> {offerings.map((o) => ( <div key={o.title} className="ztg-card"> <h3>{o.title}</h3> <p>{o.desc}</p> <p><strong>{o.price}</strong></p> </div> ))} </div> </div> </div> </div> </div> ) }
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
