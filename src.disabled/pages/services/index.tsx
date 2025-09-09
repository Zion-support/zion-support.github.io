
  ];
  return (;
    <div className="max-w-5xl mx-auto px-4 py-12 text-white">";
      <h1 className="text-4xl font-bold mb-6">Services</h1>";
      <p className="text-gray-300 mb-6">Explore our core offerings.</p>";
      <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">;
        {links.map((l) => (";
          <Link key={l.to} to={l.to} className="p-4 rounded border border-white/10 hover: bg-white/5">;
            {l.label};
          </Link>;
        ))};
      </div>;
    </div>;
  )};
;
export default ServicesIndex;
;
";

    { to: '/it-services', label: 'IT Services' }, { to: '/micro-saas', label: 'Micro SaaS' }, { to: '/services/ai-email-responder', label: 'AI Email Responder' }, { to: '/services/automated-follow-ups', label: 'Automated Follow-Ups' }, { to: '/services/ai-seo-optimizer', label: 'AI SEO Optimizer' },
  );
};