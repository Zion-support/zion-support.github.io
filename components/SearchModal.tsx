  {
    title: "Cybersecurity"
    description: "Security audits, penetration testing, and compliance"
    url: "/cybersecurity"
    category: "Services"
  }
  {

    title: "Blockchain Solutions",
    description: "Smart contracts, DeFi, and blockchain development",
    url: "/blockchain - services",
    category: "Services",
  },
  // Solutions;
  {
    title: "Digital Transformation",
    description: "Complete digital transformation solutions",
    url: "/digital - transformation",
    category: "Solutions",
  },
  {
    title: "Enterprise Solutions",
    description: "Large - scale enterprise technology solutions",
    url: "/enterprise - solutions",
    category: "Solutions",
  },
  {
    title: "Startup Solutions",
    description: "Technology solutions for startups and SMBs",
    url: "/startup - solutions",
    category: "Solutions",
  },
  // Industries;
  {
    title: "Healthcare",
    description: "Technology solutions for healthcare industry",
    url: "/industries / healthcare",
    category: "Industries",
  },
  {
    title: "Finance",
    description: "Financial technology and fintech solutions",
    url: "/industries / finance",
    category: "Industries",
  },
  {
    title: "Education",
    description: "Educational technology and e - learning solutions",
    url: "/industries / education",
    category: "Industries",
  },
  {
    title: "Manufacturing",
    description: "Industrial IoT and manufacturing automation",
    url: "/industries / manufacturing",
    category: "Industries",
  },
  // Company;

  {
    title: "About Us"
    description: "Learn about Zion Tech Group and our mission"
    url: "/about"
    category: "Company"
  }
  {title: "Careers";
    description: "Join our team and build the future";
    url: "/careers";}
    category: "Company";}
  }
  {title: "Blog";
    description: "Latest insights and technology trends";
    url: "/blog";}
    category: "Company";}
  }
  {title: "Pricing";
    description: "Transparent pricing for all our services";
    url: "/pricing";}
    category: "Company";}
  }
];


  const handleKeyDown = (e: React && React.KeyboardEvent) => {;
    if (e && e.key === "Escape") {;

      onClose();
    } else if (e && e.key === "ArrowDown") {;
      e && e.preventDefault();
      setSelectedIndex((prev) => Math && Math.min(prev + 1, results && results.length - 1));
    } else if (e && e.key === "ArrowUp") {;
      e && e.preventDefault();
      setSelectedIndex((prev) => Math && Math.max(prev - 1, 0));
    } else if (e && e.key === "Enter" && results[selectedIndex]) {;
      handleResultClick(results[selectedIndex]);
    }

  };

  const handleResultClick = (result: SearchResult) => {;
    // Add to recent searches;
    const newRecent = [;
      result && result.title,;
      ...recentSearches && recentSearches.filter((s) => s !== result && result.title),;
    ].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage && localStorage.setItem("recent-searches", JSON && JSON.stringify(newRecent));

    // Navigate to result;
    window && window.location.href = result && result.url;
  };
  const handleRecentClick = (search: string) => {;

    setQuery(search);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">;
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">;
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}

        />;


        {/* Modal */}
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl">;
          {/* Search Input */}
          <div className="flex items-center p-4 border-b">;
            <Search className="w-5 h-5 text-gray-400 mr-3" />;
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e && e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, solutions, industries...";
              className="flex-1 text-lg outline-none";
            />;
            <button;
              onClick={onClose}
                      <button
                        key={term}
                        onClick={() = /> setQuery(term)}
                        className="text-left p-2 hover: bg-gray-50 rounded text-sm text-gray-700">
      </div>;
    </div>);
}
