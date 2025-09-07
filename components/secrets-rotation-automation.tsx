<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';

=======
<<<<<<< HEAD
</div>) ) 
}</div> </a> <a href="https://cloud.google.com/kms" target="blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300" > <ExternalLink className="w-4 h-4" /> Google Cloud KMS </a> </div> </section> </main> </>) 
}
=======
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
=======
class ErrorBoundary extends React.Component {}
  constructor(props) {}
>>>>>>> origin/chore/fix-lint-and-merge
    super(props);
    this.state = { hasError: false ;};
  }
<<<<<<< HEAD

=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
export default function SecretsRotationAutomationPage() {;
  const features = [;
    "Automated key and secret rotation",;
    "JIT credentials with expirations",;
    "Policy approvals and audit trails",;
    "CI/CD integration (GitHub Actions, CircleCI)",;
    "Cloud KMS and Vault support",;
  ];
import React from 'react',
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";

export default function SecretsRotationAutomationPage() {

  const features = [
    "Automated key and secret rotation"
    "JIT credentials with expirations"
    "Policy approvals and audit trails"
    "CI/CD integration (GitHub Actions, CircleCI)"
    "Cloud KMS and Vault support"
  ];
  return (

export default function SecretsRotationAutomationPage() {
  const features = [
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from "react";"
import SEO from "../components/SEO";"
import { Check, ExternalLink } from "lucide-react";

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from './react';
import SEO from "../components / SEO";
import { Check, ExternalLink  } from './lucide-react';
export default /**
 * SecretsRotationAutomationPage - Function description
 */
function SecretsRotationAutomationPage() {
  const features = [;
<<<<<<< HEAD
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";
=======
<<<<<<< HEAD
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function SecretsRotationAutomationPage() {;
  const features = [;
    "Automated key and secret rotation",;
    "JIT credentials with expirations",;
    "Policy approvals and audit trails",;
    "CI/CD integration (GitHub Actions, CircleCI)",;
    "Cloud KMS and Vault support",;
  ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</div>) ) 
}</div> </a> <a href="https://cloud.google.com/kms" target="blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300" > <ExternalLink className="w-4 h-4" /> Google Cloud KMS </a> </div> </section> </main> </>) 
}
import React from 'react',
<<<<<<< HEAD
=======
=======
import React from 'react';

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import SEO from '../components/SEO';
import { Check, ExternalLink } from 'lucide-react';
import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";

<<<<<<< HEAD




=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function SecretsRotationAutomationPage() {

  const features = [
    "Automated key and secret rotation"
    "JIT credentials with expirations"
    "Policy approvals and audit trails"
    "CI/CD integration (GitHub Actions, CircleCI)"
    "Cloud KMS and Vault support"
  ];
  return (

<<<<<<< HEAD
export default function SecretsRotationAutomationPage() {
  const features = [


export default function SecretsRotationAutomationPage() {
	const features = [
		'Automated key and secret rotationJIT credentials with expirationsPolicy approvals and audit trailsCI/CD integration (GitHub Actions, CircleCI)Cloud KMS and Vault support'
	];

	return (
		<>
			<SEO title="Secrets Rotation Automation" description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tight">Secrets Rotation Automation</h1>
					<p className="mt-4 text-lg text-gray-300">Keep credentials short-lived and compliant. Automate rotations across providers with full auditability.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
								<p className="text-gray-200">{f}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $199/mo</a>
						<a href="/pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Pricing</a>
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
							</a>
						<a href="https://cloud.google.com/kms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Google Cloud KMS
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "Automated key and secret rotation",
    "JIT credentials with expirations",
    "Policy approvals and audit trails",
    "CI / CD integration (GitHub Actions, CircleCI)",
    "Cloud KMS and Vault support",

  ];
;
  return (
    <>;
      <SEO;"
        title="Secrets Rotation Automation";"
        description="Automate key and secret rotation across cloud and CI / CD with approvals and audit logs.";
      />;"
      <main id="main" className="container mx - auto px - 4 py - 24">;"
        <section className="max - w-5xl mx - auto">;"
          <h1 className="text - 4xl font - extrabold tracking - tight">;
            Secrets Rotation Automation;
          </h1>;"
          <p className="mt - 4 text - lg text - gray - 300">;
            Keep credentials short - lived and compliant. Automate rotations;
            across providers with full auditability.;
          </p>;"
          <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
            {features.map ((f) => (
              <div;
                key={f}"
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;"
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;"
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;"
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;"
              href="/contact";"
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover:bg - gray - 200";
            >;
              Start from $199 / mo;
            </a>;
            <a;"
              href="/pricing";"
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Pricing;
            </a>;
            <a;"
              href="https://developer.hashicorp.com / vault";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> HashiCorp Vault Docs;
            </a>;
            <a;"
              href="https://cloud.google.com / kms";"
              target="_blank";"
              rel="noreferrer";"
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;"
              <ExternalLink className="w - 4 h - 4" /> Google Cloud KMS;
<<<<<<< HEAD
=======

<<<<<<< HEAD
  return (
  return (
  return (

    </>);
}

    </>);
}

	const features = ['
		'Automated key and secret rotationJIT credentials with expirationsPolicy approvals and audit trailsCI/CD integration (GitHub Actions, CircleCI)Cloud KMS and Vault support'
	];

	return (
		<>"
			<SEO title="Secrets Rotation Automation" description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs." />"
			<main id="main" className="container mx-auto px-4 py-24">"
				<section className="max-w-5xl mx-auto">"
					<h1 className="text-4xl font-extrabold tracking-tight">Secrets Rotation Automation</h1>"
					<p className="mt-4 text-lg text-gray-300">Keep credentials short-lived and compliant. Automate rotations across providers with full auditability.</p>"
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => ("
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">"
								<Check className="w-5 h-5 text-cyan-400 mt-1" />"
<p className="text-gray-200">{f}</p>

							</div>
						))}
					</div>"
					<div className="mt-8 flex flex-wrap items-center gap-4">"
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $199/mo</a>"
						<a href="/pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Pricing</a>"
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">"
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs;
							</a>"
<a href="https://cloud.google.com/kms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">"
							<ExternalLink className="w-4 h-4" /> Google Cloud KMS;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
							</a>
					</div>
				</section>
			</main>
		</>
<<<<<<< HEAD
	)
}
=======
<<<<<<< HEAD
	)
}




=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </a>;
          </div>;
        </section>;
      </main>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>);
  return (
    <>;
      <SEO;
        title="Secrets Rotation Automation";
        description="Automate key and secret rotation across cloud and CI / CD with approvals and audit logs.";
      />;
      <main id="main" className="container mx - auto px - 4 py - 24">;
        <section className="max - w-5xl mx - auto">;
          <h1 className="text - 4xl font - extrabold tracking - tight">;
            Secrets Rotation Automation;
          </h1>;
          <p className="mt - 4 text - lg text - gray - 300">;
            Keep credentials short - lived and compliant. Automate rotations;
            across providers with full auditability.;
          </p>;
          <div className="mt - 8 grid sm:grid - cols - 2 gap - 6">;
            {features.map ((f) => (
              <div;
    <>
      <SEO
        title="Secrets Rotation Automation"
        description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs."
      />
      <main id="main" className="container mx-auto px-4 py-24">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Secrets Rotation Automation
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Keep credentials short-lived and compliant. Automate rotations
            across providers with full auditability.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div

                key={f}
                className="flex items - start space - x-3 p - 4 rounded - xl bg - white / 5 border border - white / 10";
              >;
                <Check className="w - 5 h - 5 text - cyan - 400 mt - 1" />;
                <p className="text - gray - 200">{f}</p>;
              </div>))}
          </div>;
          <div className="mt - 8 flex flex - wrap items - center gap - 4">;
            <a;
              href="/contact";
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover: bg - gray - 200";
            >;
              Start from $199 / mo;
            </a>;
            <a;
              href="/pricing";
              className="px - 5 py - 3 rounded - lg border border - white / 20 text - white hover:bg - white / 10";
            >;
              Pricing;
            </a>;
            <a;
              href="https://developer.hashicorp.com / vault";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> HashiCorp Vault Docs;
            </a>;
            <a;
              href="https://cloud.google.com / kms";
              target="_blank";
              rel="noreferrer";
              className="inline - flex items - center gap - 2 text - cyan - 400 hover:text - cyan - 300";
            >;
              <ExternalLink className="w - 4 h - 4" /> Google Cloud KMS;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </a>;
          </div>;
        </section>;
      </main>;

<<<<<<< HEAD
=======
);
=======
<<<<<<< HEAD

    </>);
}

	const features = [
		'Automated key and secret rotationJIT credentials with expirationsPolicy approvals and audit trailsCI/CD integration (GitHub Actions, CircleCI)Cloud KMS and Vault support'
	];
	return (
		<>
			<SEO title="Secrets Rotation Automation" description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs." />
			<main id="main" className="container mx-auto px-4 py-24">
				<section className="max-w-5xl mx-auto">
					<h1 className="text-4xl font-extrabold tracking-tight">Secrets Rotation Automation</h1>
					<p className="mt-4 text-lg text-gray-300">Keep credentials short-lived and compliant. Automate rotations across providers with full auditability.</p>
					<div className="mt-8 grid sm:grid-cols-2 gap-6">
						{features.map((f) => (
							<div key={f} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
								<Check className="w-5 h-5 text-cyan-400 mt-1" />
<p className="text-gray-200">{f}</p>

							</div>
						))}
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200">Start from $199/mo</a>
						<a href="/pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Pricing</a>
						<a href="https://developer.hashicorp.com/vault" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
							</a>
<a href="https://cloud.google.com/kms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Google Cloud KMS
							</a>
					</div>
				</section>
			</main>
		</>
);
}
    </>);
}
  return (

  return (


return (
  return (
    <>
      <SEO
        title="Secrets Rotation Automation"
        description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs."
      />
      <main id="main" className="container mx-auto px-4 py-24">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Secrets Rotation Automation
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Keep credentials short-lived and compliant. Automate rotations
            across providers with full auditability.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-5 h-5 text-cyan-400 mt-1" />
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200"
            >
              Start from $199/mo
            </a>
            <a
              href="/pricing"
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Pricing
            </a>
            <a
              href="https://developer.hashicorp.com/vault"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
            </a>
            <a
              href="https://cloud.google.com/kms"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> Google Cloud KMS
            </a>
          </div>
        </section>
      </main>
    </>
  );
  return (
    <>
      <SEO
        title="Secrets Rotation Automation"
        description="Automate key and secret rotation across cloud and CI/CD with approvals and audit logs."
      />
      <main id="main" className="container mx-auto px-4 py-24">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Secrets Rotation Automation
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Keep credentials short-lived and compliant. Automate rotations
            across providers with full auditability.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-5 h-5 text-cyan-400 mt-1" />
                <p className="text-gray-200">{f}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover: bg-gray-200"
            >
              Start from $199/mo
            </a>
            <a
              href="/pricing"
              className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10"
            >
              Pricing
            </a>
            <a
              href="https://developer.hashicorp.com/vault"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> HashiCorp Vault Docs
            </a>
            <a
              href="https://cloud.google.com/kms"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink className="w-4 h-4" /> Google Cloud KMS
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
>>>>>>> origin/chore/fix-lint-and-merge

origin/cursor/automate-test-improve-and-merge-code-2533

            >
              Start from $199/mo;
            </a>

            >
              Pricing;
            </a>

            </a>
          </div>
        </section>
      </main>
    </>
  );

            </a>
          </div>
        </section>
      </main>
    </>
  );
}

            </a>;
          </div>;
        </section>;
<<<<<<< HEAD
      </main>;
    </>;
  )}</a>;
          </div>;
        </section>;
      </main>;





=======
<<<<<<< HEAD
      </main>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
