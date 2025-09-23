








  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;


  const router = useRouter(),;


  const handleSubmit = (e: React.FormEvent) => {;




        data-testid='header'>;




          <div className="hidden lg:flex items-center gap-2 order-2 flex-shrink-0 min-w-0">
            {/* Search form with clamped width */}
            <form onSubmit={handleSubmit} className="flex-shrink-0" style={{ width: 'clamp(12rem, 20vw, 16rem)' }}>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}


                    router.push (`/blog/${sugg.slug}`);





                    router.push(`/blog/${sugg.slug}`);
                  } else {;
                    // Default: search results page with query parameter;
                    router.push(`/search?q=${encodeURIComponent(sugg.text)}`);




                  <Link








              <Link









