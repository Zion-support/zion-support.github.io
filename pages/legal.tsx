<<<<<<< HEAD


<<<<<<< HEAD
import SEO from '../components/SEO';
import Link from 'next/link';
export default function LegalPage() {
	return (
		<>
			<SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Legal</h1>
				<ul className="list-disc ml-6 text-gray-300 space-y-2">
					<li><Link href="/privacy" className="text-cyan-400">Privacy Policy</Link></li>
					<li><Link href="/terms" className="text-cyan-400">Terms of Service</Link></li>
					<li><Link href="/cookies" className="text-cyan-400">Cookie Policy</Link></li>
				</ul>
			</div>
		</>
	)

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
import React from 'react',
import SEO from '../components / SEO',
import Link from 'next / link',
export default /**
 * LegalPage - Function description
 */
function LegalPage() {
return (
  <>;
  <SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 6">Legal</h1>;
    <ul className="list - disc ml - 6 text - gray - 300 space - y-2">;
    <li><Link href="/privacy" className="text - cyan - 400">Privacy Policy</Link></li>;
    <li><Link href="/terms" className="text - cyan - 400">Terms of Service</Link></li>;
    <li><Link href="/cookies" className="text - cyan - 400">Cookie Policy</Link></li>;
    </ul>;
  </div>;
  </>);
}

=======

import React from 'react';

import SEO from '../components/SEO';
import Link from 'next/link';
export default function LegalPage() {
	return (
		<>
			<SEO title="Legal | Zion Tech Group" description="Legal resources including privacy policy, terms of service, and cookies." canonical="/legal" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Legal</h1>
				<ul className="list-disc ml-6 text-gray-300 space-y-2">
					<li><Link href="/privacy" className="text-cyan-400">Privacy Policy</Link></li>
					<li><Link href="/terms" className="text-cyan-400">Terms of Service</Link></li>
					<li><Link href="/cookies" className="text-cyan-400">Cookie Policy</Link></li>
				</ul>
			</div>
		</>
	)
<<<<<<< HEAD
};
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
