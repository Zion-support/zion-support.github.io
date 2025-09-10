  const navSections = [];
},
    {";
      title: "Services",
      links: [",
        { label: "All Services", href: "/services" },";
        { label: "AI Services", href: "/services/ai-services" },";
        { label: "IT Services", href: "/services/it-services" },";
        { label: "Micro SaaS", href: "/services/micro-saas" },";
        { label: "Pricing", href: "/pricing" }

];
},
    {";
      title: "Resources",
      links: [",
        { label: "Blog", href: "/blog" },";
        { label: "Case Studies", href: "/case-studies" },";
        { label: "White Papers", href: "/white-papers" },";
        { label: "Webinars", href: "/webinars" },";
        { label: "Documentation", href: "/documentation" }

];
},
    {";
      title: "Legal",
      links: [",
        { label: "Privacy Policy", href: "/privacy" },";
        { label: "Terms of Service", href: "/terms" },";
        { label: "Sitemap", href: "/sitemap' }

];
];

  const social = [];

  return (;
    <footer className="bg-slate-900 text-white">";
      <div className="max-w-7xl mx-auto px-6 py-16">";
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-5 gap-8">,
          {/* comment */}";
          <div className="lg: col-span-2">";
            <div className="flex items-center space-x-3 mb-6">";
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">";
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div>";
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                  ZION,
                </div>";
                <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>;
              </div>;
            </div>";
            <p className="text-gray-300 mb-6 max-w-md">,
              Leading technology solutions provider specializing in AI, cybersecurity,
              cloud infrastructure, and digital transformation services.;
            </p>";
            <div className="space-y-2 text-sm text-gray-400">;
              <div>+1 302 464 0950</div>;
              <div>kleber@ziontechgroup.com</div>;
              <div>364 E Main St STE 1008</div>;
              <div>Middletown DE 19709</div>;
            </div>;
          {/* comment */}

          {navSections.map((section) => (";
            <div key="{section.title}">";
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>";
              <ul className="space-y-3">;
                {section.links.map((link) => (";
                  <li key="{link.label}">";
                    <Link href="{link.href}
                      className="text-gray-300 hover: text-white transition-colors">,
                      {link.label}

                    </Link>;
                  </li>;
                ))}

              </ul>;
            </div>;
          ))}

        </div>;
        {/* comment */}";
        <div className="border-t border-slate-800 mt-12 pt-8">";
          <div className="flex flex-col md: flex-row justify-between items-center">";
            <div className="text-gray-400 text-sm mb-4 md:mb-0">,
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>";
            <div className="flex space-x-6">;
              {social.map((item) => (";
                <a key="{item.label}
                  href="{item.href}
                  target="_blank;
                  rel="noopener noreferrer;
                  className="text-gray-400 hover: text-white transition-colors">,
                  {item.label}

                </a>;
              ))}

            </div>;
    </footer>;
  )}
";
);
export default SiteFooter;"
import React from 'react',;',';'; ';';';'; import Link from 'next/link'; export function SiteFooter(props: any) {'; const currentYear = new Date().getFullYear();';'; const navSections = [';';' {',';'; ';';'; title: 'Company',';';'; links: [',';'; ';';' { label: 'Home',href: '/' },',';'; ';';' { label: 'About',href: '/about' },',';'; ';';' { label: 'Partners',href: '/partners' },',';'; ';';' { label: 'Careers',href: '/careers' },',';'; ';';' { label: 'Contact',href: '/contact' }'; ]';'},';';' {',';'; ';';'; title: 'Services',';';'; links: [',';'; ';';' { label: 'All Services',href: '/services' },',';'; ';';' { label: 'AI Services',href: '/services/ai-services' },',';'; ';';' { label: 'IT Services',href: '/services/it-services' },',';'; ';';' { label: 'Micro SaaS',href: '/services/micro-saas' },',';'; ';';' { label: 'Pricing',href: '/pricing' }'; ]';'},';';' {',';'; ';';'; title: 'Resources',';';'; links: [',';'; ';';' { label: 'Blog',href: '/blog' },',';'; ';';' { label: 'Case Studies',href: '/case-studies' },',';'; ';';' { label: 'White Papers',href: '/white-papers' },',';'; ';';' { label: 'Webinars',href: '/webinars' },',';'; ';';' { label: 'Documentation',href: '/documentation' }'; ]';'},';';' {',';'; ';';'; title: 'Legal',';';'; links: [',';'; ';';' { label: 'Privacy Policy',href: '/privacy' },',';'; ';';' { label: 'Terms of Service',href: '/terms' },',';'; ';';' { label: 'Sitemap',href: '/sitemap' } ]'}';'; ]';';'; const social = [',';'; ';';' { label: 'LinkedIn',href: 'https: ';';' { label: 'Twitter',href: 'https: ';';' { label: 'GitHub',href: 'https: ] return ( <footer className="bg-slate-900 text-white"> <div className="max-w-7xl mx-auto px-6 py-16"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-5 gap-8"> {} <div className="lg: co l-span-2"> <div className="flex items-center space-x-3 mb-6"> <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"> <span className="text-white font-bold text-xl">Z</span> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> ZION </div> <div className="text-xs text-blue-400 font-medium">TECH GROUP</div> </div> </div> <p className="text-gray-300 mb-6 max-w-md"> Leading technology solutions provider specializing in AI,cybersecurity,cloud infrastructure,and digital transformation services. </p> <div className="space-y-2 text-sm text-gray-400"> <div>+1 302 464 0950</div> <div>kleber@ziontechgroup.com</div> <div>364 E Main St STE 1008</div> <div>Middletown DE 19709</div> </div> </div> {} { navSections.map((section) => ( <div key={section.title}> <h3 className="text-lg font-semibold mb-4">{section.title}</h3> <ul className="space-y-3"> {section.links.map((link) => ( <li key={link.label}> <Link href={link.href} className="text-gray-300 hover: tex t-white transition-colors" > {link.label} </Link> </li> )) )} </div> )} </ul> </div> )) )} </div> )} </div> {} <div className="border-t border-slate-800 mt-12 pt-8"> <div className="flex flex-col md: fle x-row justify-between items-center"> <div className="text-gray-400 text-sm mb-4 md: m b-0"> © {currentYear} Zion Tech Group. All rights reserved. </div> <div className="flex space-x-6"> { social.map((item) => ( <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: tex t-white transition-colors" > {item.label} </a> )) )} </div> )} </div> </div> </div> </div> </footer>'; );';'}';';'; export default SiteFooter;"';';';';