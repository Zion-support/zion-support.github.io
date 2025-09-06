<<<<<<< HEAD


import React from 'react';
import SEO from '../components/SEO';

=======
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
=======

import React from 'react';
import SEO from '../components/SEO';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com/resources/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h1>
<<<<<<< HEAD
          <p className="mt-3 text-gray-300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<p className="mt-3 text-gray-300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' }
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' }
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' }
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' }
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' }
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' },
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' },
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
            </Link>
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ].map((it) => (
            <Link key={it.href} href={it.href} className="p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block">
              <div className="text-sm text-gray-400">Resource</div>
              <h3 className="text-xl font-semibold text-white">{it.name}</h3>
              <p className="mt-1 text-gray-300">{it.blurb}</p>
              <div className="mt-3 text-cyan-300">Open →</div>
<<<<<<< HEAD
        </div>
        <div className=&quot;mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {[
            { name: 'Support Center', _href: '/support', _blurb: 'Help, _FAQs, _and contact options.'}, _{_name: 'Training & Certification', _href: '/training', _blurb: 'Workshops and curated curricula.'}, _{_name: 'Market Pricing', _href: '/market-pricing', _blurb: 'Vendor links and typical budgets.'}, _{_name: 'Services Advertising', _href: '/services-advertising', _blurb: 'Features, _capabilities, _and benefits.'}, _{_name: 'Case Studies', _href: '/case-studies', _blurb: 'Proof of value and outcomes.'}, _{_name: 'Developer Hub', _href: '/developer', _blurb: 'APIs, _SDKs, _and examples.'}
          ].map((it) => (
            <Link key={it.href} href={it.href} className=&quot;p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block&quot;>
              <div className=&quot;text-sm text-gray-400&quot;>Resource</div>
              <h3 className=&quot;text-xl font-semibold text-white&quot;>{it.name}</h3>
              <p className=&quot;mt-1 text-gray-300&quot;>{it.blurb}</p>
              <div className=&quot;mt-3 text-cyan-300&quot;>Open →</div>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Link>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react',
import SEO from '../components / SEO',
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground',
import Link from 'next / link',
export default /**
 * ResourcesPage - Function description
 */
function ResourcesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Resources | Zion Tech Group" description="Guides, case studies, support, training, and market pricing links." canonical="https://ziontechgroup.com / resources/" />;
      <div className="container mx - auto px - 4 py - 16 text - white">;
        <div className="text - center max - w-3xl mx - auto">;
          <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Resources</h1>;
          <p className="mt - 3 text - gray - 300">Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>;
        </div>;
        <div className="mt - 10 grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {[;
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' },
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market - pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services - advertising', blurb: 'Features, capabilities, and benefits.' },
            { name: 'Case Studies', href: '/case - studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map ((it) => (
            <Link key={it.href} href={it.href} className="p - 6 rounded - 2xl bg - black / 50 border border - gray - 800 hover:border - cyan - 500 / 50 transition - colors block">;
              <div className="text - sm text - gray - 400">Resource</div>;
              <h3 className="text - xl font - semibold text - white">{it.name}</h3>;
              <p className="mt - 1 text - gray - 300">{it.blurb}</p>;
              <div className="mt - 3 text - cyan - 300">Open →</div>;
            </Link>))}
        </div>;
      </div>;
    </UltraFuturisticBackground>);
},
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Whitepapers */}
      <section id="whitepapers" className="py - 20 bg - slate - 50">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD


          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
};
      {/* Whitepapers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="whitepapers" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Whitepapers & Guides</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In-depth research and comprehensive guides on the latest technology trends and best practices.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - slate - 900 mb - 6">Whitepapers & Guides</h2>;
            <p className="text - xl text - slate - 600 max - w-3xl mx - auto">;
              In - depth research and comprehensive guides on the latest technology trends and best practices.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 2 gap - 8">;
            {whitepapers.map ((paper, index) => (
              <motion.div;
<<<<<<< HEAD

=======
=======
      {/* Whitepapers */}
      <section id="whitepapers" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
};
      {/* Whitepapers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="whitepapers" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Whitepapers & Guides</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In-depth research and comprehensive guides on the latest technology trends and best practices.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={paper.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="bg - white rounded - 2xl shadow - lg overflow - hidden hover:shadow - xl transition - all duration - 300";
              >;
                <div className="bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 8">;
                  <div className="flex items - center justify - between mb - 4">;
                    <span className="inline - block bg - white / 20 px - 3 py - 1 rounded - full text - sm text - white">;
                      {paper.category}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={paper.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">

<<<<<<< HEAD
=======
                      {paper.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </span>
                    <span className="text-white/80 text-sm">{paper.pages} pages</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{paper.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{paper.description}</p>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-600 text-sm">
                      {paper.downloadCount} downloads
                    </span>
                    <a

<<<<<<< HEAD
=======

                      href={paper.downloadUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </motion.div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </span>;
                    <span className="text - white / 80 text - sm">{paper.pages} pages</span>;
                  </div>;
                  <h3 className="text - 2xl font - bold text - white mb - 3 leading - tight">{paper.title}</h3>;
                  <p className="text - blue - 100 leading - relaxed">{paper.description}</p>;
                </div>;
                <div className="p - 8">;
                  <div className="flex items - center justify - between mb - 6">;
                    <span className="text - slate - 600 text - sm">;
                      {paper.download_count} downloads;
                    </span>;
                    <a;
                      href={paper.download_url}
                      className="inline - flex items - center space - x-2 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 text - white px - 6 py - 3 rounded - xl font - medium transition - all duration - 200 transform hover:scale - 105";
                    >;
                      <Download className="w - 5 h - 5" />;
                      <span > Download</span>;
                    </a>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Case Studies */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Case Studies */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses across industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - slate - 900 mb - 6">Case Studies</h2>;
            <p className="text - xl text - slate - 600 max - w-3xl mx - auto">;
              Real - world examples of how our solutions have transformed businesses across industries.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {case_studies.map ((study, index) => (
              <motion.div;
<<<<<<< HEAD

                key={study.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}


                key={study.title  } catch (error) {
=======
=======
=======
                key={paper.title  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                      {paper.category}
                      {paper.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                    <span className="text-white/80 text-sm">{paper.pages} pages</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{paper.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{paper.description}</p>
                </div>
<<<<<<< HEAD
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">

<<<<<<< HEAD
=======

                  {study.industry  } catch (error) {
=======
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-600 text-sm">
                      {paper.downloadCount} downloads
                    </span>
                    <a
                      href={paper.downloadUrl}
                      href={paper.downloadUrl  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{study.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{study.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>

<<<<<<< HEAD
=======

                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>;
                </div>;
                <a;
                  href={study.readUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Case Studies */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses across industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={study.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg - slate - 50 rounded - 2xl p - 8 hover:bg - slate - 100 transition - all duration - 300 transform hover:-translate - y-2";
              >;
                <div className="w - 16 h - 16 rounded - xl bg - gradient - to - br from - blue - 500 to - cyan - 500 flex items - center justify - center mb - 6">;
                  <FileText className="w - 8 h - 8 text - white" />;
                </div>;
                <span className="inline - block bg - blue - 100 text - blue - 800 text - xs font - medium px - 3 py - 1 rounded - full mb - 4">;
                  {study.industry}
                </span>;
                <h3 className="text - xl font - bold text - slate - 900 mb - 4 leading - tight">{study.title}</h3>;
                <p className="text - slate - 600 leading - relaxed mb - 6">{study.description}</p>;
                <div className="mb - 6">;
                  <h4 className="font - semibold text - slate - 900 mb - 3">Key Results:</h4>;
                  <ul className="space - y-2">;
                    {study.results.map ((result, idx) => (
                      <li key={idx} className="text - sm text - slate - 600 flex items - center space - x-2">;
                        <ArrowRight className="w - 3 h - 3 text - blue - 500 flex - shrink - 0" />;
                        <span>{result}</span>;
                      </li>))}
                  </ul>;
                </div>;
                <a;
                  href={study.read_url}
                  className="inline - flex items - center space - x-2 text - blue - 600 hover:text - blue - 700 font - medium transition - colors duration - 200";
                >;
                  <span > Read Case Study</span>;
                  <ArrowRight className="w - 4 h - 4" />;
                </a>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Videos */}
      <section className="py - 20 bg - slate - 900">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD


                </Link>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Videos */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Video Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Visual learning resources and expert insights on technology trends and implementations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (
              <motion.div

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Video Resources</h2>;
            <p className="text - xl text - white / 70 max - w-3xl mx - auto">;
              Visual learning resources and expert insights on technology trends and implementations.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            {videos.map ((video, index) => (
              <motion.div;
<<<<<<< HEAD

                key={video.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white / 5 backdrop - blur - xl rounded - 2xl border border - white / 10 overflow - hidden hover:bg - white / 10 transition - all duration - 300";
              >;
                <div className="bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 6 text - center">;
                  <Play className="w - 12 h - 12 text - white mx - auto mb - 3" />;
                  <span className="inline - block bg - white / 20 px - 3 py - 1 rounded - full text - sm text - white">;
                    {video.category}


                key={video.title  } catch (error) {
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={study.title  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-center">
                  <Play className="w-12 h-12 text-white mx-auto mb-3" />
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">

<<<<<<< HEAD
=======
                    {video.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{video.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{video.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-sm">{video.duration}</span>
                  </div>
                  <a

<<<<<<< HEAD
=======

                    href={video.watchUrl  } catch (error) {
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {study.industry}
                  {study.industry  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Watch Video
                  </a>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{study.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{study.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
                <a
                  href={study.readUrl}
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>;
                </div>;
                <a;
                  href={study.readUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
            ))}
          </div>
        </div>
      </section>
      {/* Videos */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </Link>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Videos */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Video Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Visual learning resources and expert insights on technology trends and implementations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={video.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg - white / 5 backdrop - blur - xl rounded - 2xl border border - white / 10 overflow - hidden hover:bg - white / 10 transition - all duration - 300";
              >;
                <div className="bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 6 text - center">;
                  <Play className="w - 12 h - 12 text - white mx - auto mb - 3" />;
                  <span className="inline - block bg - white / 20 px - 3 py - 1 rounded - full text - sm text - white">;
                    {video.category}
                  </span>;
                </div>;
                <div className="p - 6">;
                  <h3 className="text - lg font - bold text - white mb - 3 leading - tight">{video.title}</h3>;
                  <p className="text - white / 70 text - sm leading - relaxed mb - 4">{video.description}</p>;
                  <div className="flex items - center justify - between mb - 4">;
                    <span className="text - white / 60 text - sm">{video.duration}</span>;
                  </div>;
                  <a;
                    href={video.watch_url}
                    className="block w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 text - white text - center py - 3 rounded - xl font - medium transition - all duration - 200 transform hover:scale - 105";
                  >;
                    Watch Video;
                  </a>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Documentation */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Documentation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Documentation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical documentation, implementation guides, and best practices for our solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documentation.map((doc, index) => (
              <motion.div

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - slate - 900 mb - 6">Documentation</h2>;
            <p className="text - xl text - slate - 600 max - w-3xl mx - auto">;
              Technical documentation, implementation guides, and best practices for our solutions.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {documentation.map ((doc, index) => (
              <motion.div;
<<<<<<< HEAD

                key={doc.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}


                key={doc.title  } catch (error) {
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={video.title  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-center">
                  <Play className="w-12 h-12 text-white mx-auto mb-3" />
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">
                    {video.category}
                    {video.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </span>
                </div>
<<<<<<< HEAD
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">

<<<<<<< HEAD
=======

                  {doc.type  } catch (error) {
=======
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{video.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{video.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-sm">{video.duration}</span>
                  </div>
                  <a
                    href={video.watchUrl}
                    href={video.watchUrl  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{doc.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{doc.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                  <span>{doc.pages} pages</span>
                  <span>Updated {doc.lastUpdated}</span>
                </div>
                <a

<<<<<<< HEAD
=======

                  href={doc.downloadUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Download
                </a>
              </motion.div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Watch Video
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Documentation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Documentation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical documentation, implementation guides, and best practices for our solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documentation.map((doc, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={doc.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg - slate - 50 rounded - 2xl p - 8 hover:bg - slate - 100 transition - all duration - 300 transform hover:-translate - y-2";
              >;
                <div className="w - 16 h - 16 rounded - xl bg - gradient - to - br from - blue - 500 to - cyan - 500 flex items - center justify - center mb - 6">;
                  <BookOpen className="w - 8 h - 8 text - white" />;
                </div>;
                <span className="inline - block bg - blue - 100 text - blue - 800 text - xs font - medium px - 3 py - 1 rounded - full mb - 4">;
                  {doc.type}
                </span>;
                <h3 className="text - xl font - bold text - slate - 900 mb - 4 leading - tight">{doc.title}</h3>;
                <p className="text - slate - 600 leading - relaxed mb - 6">{doc.description}</p>;
                <div className="flex items - center justify - between mb - 6 text - sm text - slate - 500">;
                  <span>{doc.pages} pages</span>;
                  <span > Updated {doc.last_updated}</span>;
                </div>;
                <a;
                  href={doc.download_url}
                  className="block w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 text - white text - center py - 3 rounded - xl font - medium transition - all duration - 200 transform hover:scale - 105";
                >;
                  Download;
                </a>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* CTA */}
      <section className="py - 20 bg - gradient - to - r from - blue - 600 to - cyan - 600">;
        <div className="max - w-4xl mx - auto px - 6 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need More Resources?</h2>
            <p className="text-xl text-blue-100 mb-8">

<<<<<<< HEAD
=======
              Can't find what you're looking for? Our team is here to help with custom research,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              Can't find what you're looking for? Our team is here to help with custom research, 

              Can't find what you're looking for? Our team is here to help with custom research,
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              personalized consultations, and tailored solutions for your specific needs.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Request Custom Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </>
  )

<<<<<<< HEAD
=======
=======
=======

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Need More Resources?</h2>;
            <p className="text - xl text - blue - 100 mb - 8">;
              Can't find what you're looking for? Our team is here to help with custom research,
              personalized consultations, and tailored solutions for your specific needs.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="/contact";
                className="bg - white text - blue - 600 hover:bg - blue - 50 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200 transform hover:scale - 105";
              >;
                Contact Our Experts;
              </a>;
              <a;
                href="/contact";
                className="border border - white / 20 text - white hover:bg - white / 10 px - 8 py - 4 rounded - xl font - semibold text - lg transition - all duration - 200";
              >;
                Request Custom Research;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </>);
              <a
                href=&quot;/contact&quot;
                className=&quot;bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105&quot;
              >
                Contact Our Experts
              </Link>
              <a
                href=&quot;/contact&quot;
                className=&quot;border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200&quot;
              >
                Request Custom Research
              </Link>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                key={doc.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {doc.type}
                  {doc.type  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{doc.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{doc.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
                  <span>{doc.pages} pages</span>
                  <span>Updated {doc.lastUpdated}</span>
                </div>
                <a
                  href={doc.downloadUrl}
                  href={doc.downloadUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need More Resources?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Can't find what you're looking for? Our team is here to help with custom research

              Can't find what you're looking for? Our team is here to help with custom research,
              Can't find what you're looking for? Our team is here to help with custom research, 
              Can't find what you're looking for? Our team is here to help with custom research,
              personalized consultations, and tailored solutions for your specific needs.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Request Custom Research
              </a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

      <EnhancedFooter />
    </>
  )

}
=======
      <EnhancedFooter />
    </>
  )
};
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Need More Resources?</h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Can't find what you're looking for? Our team is here to help with custom research;
              personalized consultations, and tailored solutions for your specific needs.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105";
              >;
                Contact Our Experts;
              </a>;
              <a;
                href="/contact";
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200";
              >;
                Request Custom Research;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
