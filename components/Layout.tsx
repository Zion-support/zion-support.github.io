

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </>
  );
}


