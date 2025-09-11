

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";

<<<<<<< HEAD

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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======


import React from "react";
import SEO from "../components/SEO";
import { Check, ExternalLink } from "lucide-react";


import React from './react';
import SEO from "../components / SEO";
import { Check, ExternalLink  } from './lucide-react';
export default /**
 * SecretsRotationAutomationPage - Function description
 */
function SecretsRotationAutomationPage() {
  const features = [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "Automated key and secret rotation",
    "JIT credentials with expirations",
    "Policy approvals and audit trails",
    "CI / CD integration (GitHub Actions, CircleCI)",
    "Cloud KMS and Vault support",
  ];
;
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
              className="px - 5 py - 3 rounded - lg bg - white text - black font - semibold hover:bg - gray - 200";
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            </a>;
          </div>;
        </section>;
      </main>;

<<<<<<< HEAD
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
}


=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
