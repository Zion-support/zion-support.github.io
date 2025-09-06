<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function AIQACopilot() { return ( <Article title=\"AI QA Copilot\" subtitle=\"Autogenerates tests from user flows and PR diffs\" price=\"from $99/mo\" bullets={[\'Watches PRs and generates Playwright/Cypress tests automatically\',\'Finds flaky tests; groups by root cause and suggests fixes\',\'CI integrations for GitHub Actions,GitLab,CircleCI\',\'Tracks coverage and critical-path user flows\' ]} links={{ \"website\": \'https: /> ) } function Article({ title,subtitle,price,bullets,links }: { \"title\": string; subtitle: string; price: string; bullets: string[]; links: { website: string; contact: string } }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Pricing\": </strong> {price}</p> <ul> {bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <p> \"Site\": <a href={links.website} target=\"_blank\" rel=\"noreferrer\">ziontechgroup.com</a> · \"Email\": <a href={links.contact}>kleber@ziontechgroup.com</a> </p> </main> ) }
import React from 'react';
interface AiqaProps {
  // Add props here as needed
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
export default function Aiqa({ }: AiqaProps) {
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
}
export default function Aiqa({ }: AiqaProps) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



export default function Aiqa({ }: AiqaProps) {
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
export default function AIQACopilot() { return ( <Articletitle=\"AI QA Copilot\" subtitle=\"Autogenerates tests from user flows and PR diffs\" price=\"from $99/mo\" bullets={[\'Watches PRs and generates Playwright/Cypress tests automatically\',\'Finds flaky tests groups by root cause and suggests fixes\',\'CI integrations for GitHub Actions,GitLab,CircleCI\',\'Tracks coverage and critical-path user flows\' ]} links={{ \"website\": \'https: /> ) } function Article(): any ({ title,subtitle,price,bullets,links }: { \"title\": string; subtitle: string; price: string; bullets: string[]; links: { website: string; contact: string } }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Pricing\": </strong> {price}</p> <ul> {bullets && bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <p> \"Site\": <a href={links && links.website} target=\"_blank\" rel=\"noreferrer\">ziontechgroup && ziontechgroup.com</a> · \"Email\": <a href={links && links.contact}>kleber@ziontechgroup && ziontechgroup.com</a> </p> </main> ) }
export default function AIQACopilot() { return ( <Articletitle=\"AI QA Copilot\" subtitle=\"Autogenerates tests from user flows and PR diffs\" price=\"from $99/mo\" bullets={[\'Watches PRs and generates Playwright/Cypress tests automatically\',\'Finds flaky tests groups by root cause and suggests fixes\',\'CI integrations for GitHub Actions,GitLab,CircleCI\',\'Tracks coverage and critical-path user flows\' ]} links={{ \"website\": \'https: /> ) } function Article(): any ({ title,subtitle,price,bullets,links }: { \"title\": string; subtitle: string, price: string, bullets: string[], links: { website: string, contact: string } }) { return ( <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}</h1> <p><strong>{subtitle}</strong></p> <p><strong>\"Pricing\": </strong> {price}</p> <ul> {bullets && bullets.map((b) => ( <li key={b}>{b}</li> ))} </ul> <p> \"Site\": <a href={links && links.website} target=\"_blank\" rel=\"noreferrer\">ziontechgroup && ziontechgroup.com</a> · \"Email\": <a href={links && links.contact}>kleber@ziontechgroup && ziontechgroup.com</a> </p> </main> ) }
import React from 'react';
interface AiqaProps {;
  // Add props here as needed;
}
export default function Aiqa(): any ({ }: AiqaProps) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div>
      <h1>Aiqa</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
