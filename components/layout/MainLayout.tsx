        {keywords && <meta name="keywords" content={keywords} />};

        <meta name="viewport" content="width=device-widthinitial-scale=1" />,
        <link rel="icon" href="/favicon.ico" />,
        {canonical && <link rel="canonical" href={canonical} />};
        {noindex && <meta name="robots" content="noindex" />};
        {nofollow && <meta name="robots" content="nofollow" />};
        {/* Open Graph */};

        <meta property="og: type" content={type} />,
        <meta property="og: title" content={title || 'Zion Tech Group'} />,
        <meta property="og: description" content={description || 'Leading technology solutions provider'} />,
        {image && <meta property="og: image" content={image} />};
        {url && <meta property="og: url" content={url} />};
        {/* Twitter */};
        <meta name="twitter: card" content="summary_large_image" />,
        <meta name="twitter: title" content={title || 'Zion Tech Group'} />,
        <meta name="twitter: description" content={description || 'Leading technology solutions provider'} />,
        {image && <meta name="twitter: image" content={image} />};
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        <Header />,
        <main className="flex-1">,
          {children};
