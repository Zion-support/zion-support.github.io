<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export default function CustomerExperienceAI() { return ( <Article title=\"Customer Experience Analytics\" subtitle=\"Unify NPS,chat,tickets,and product usage into actionable insights\" price=\"from $8k\" bullets={[\'Multimodal sentiment across chat,calls,reviews,and tickets\',\'Journey \"analytics\": drop-off detection and friction mapping\',\'Auto-generated help center content and chatbot fine-tuning\',\'ROI models that tie experience improvements to revenue\' ]} /> ) } function Article({ title,subtitle,price,bullets }: { \"title\": \'string; subtitle: string; price: string; bullets: string[]\' }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Engagement\": </strong> {price}</p> <ul> {bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <ContactFooter /> </main> ) } function ContactFooter() { return ( <p> \"Mobile\": +1 302 464 0950 · Email: <a href=\"mailto:kleber@ziontechgroup.com\">kleber@ziontechgroup.com</a> · Site: <a href=\"https: </p> ) }
import React from 'react';
interface CustomerexperienceProps {
  // Add props here as needed
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
export default function Customerexperience({ }: CustomerexperienceProps) {
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======



export default function Customerexperience({ }: CustomerexperienceProps) {
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
export default function CustomerExperienceAI() { return ( <Article title=\"Customer Experience Analytics\" subtitle=\"Unify NPS,chat,tickets,and product usage into actionable insights\" price=\"from $8k\" bullets={[\'Multimodal sentiment across chat,calls,reviews,and tickets\',\'Journey \"analytics\": drop-off detection and friction mapping\',\'Auto-generated help center content and chatbot fine-tuning\',\'ROI models that tie experience improvements to revenue\' ]} /> ) } function Article(): any ({ title,subtitle,price,bullets }: { \"title\": \'string; subtitle: string; price: string; bullets: string[]\' }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Engagement\": </strong> {price}</p> <ul> {bullets && bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <ContactFooter /> </main> ) } function ContactFooter() { return ( <p> \"Mobile\": +1 302 464 0950 · Email: <a href=\"mailto:kleber@ziontechgroup && ziontechgroup.com\">kleber@ziontechgroup && ziontechgroup.com</a> · Site: <a href=\"https: </p> ) }
export default function CustomerExperienceAI() { return ( <Article title=\"Customer Experience Analytics\" subtitle=\"Unify NPS,chat,tickets,and product usage into actionable insights\" price=\"from $8k\" bullets={[\'Multimodal sentiment across chat,calls,reviews,and tickets\',\'Journey \"analytics\": drop-off detection and friction mapping\',\'Auto-generated help center content and chatbot fine-tuning\',\'ROI models that tie experience improvements to revenue\' ]} /> ) } function Article(): any ({ title,subtitle,price,bullets }: { \"title\": \'string; subtitle: string, price: string, bullets: string[]\' }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Engagement\": </strong> {price}</p> <ul> {bullets && bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <ContactFooter /> </main> ) } function ContactFooter() { return ( <p> \"Mobile\": +1 302 464 0950 · Email: <a href=\"mailto:kleber@ziontechgroup && ziontechgroup.com\">kleber@ziontechgroup && ziontechgroup.com</a> · Site: <a href=\"https: </p> ) }
import React from 'react';
interface CustomerexperienceProps {;
  // Add props here as needed;
}
export default function Customerexperience(): any ({ }: CustomerexperienceProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return (
    <div>
      <h1>Customerexperience</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/main
<<<<<<< HEAD
<<<<<<< HEAD
=======

}

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
