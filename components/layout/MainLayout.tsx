        {keywords && <meta name=&quot;keywords&quot; content={keywords} />};

        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />,
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />,
        {canonical && <link rel=&quot;canonical&quot; href={canonical} />};
        {noindex && <meta name=&quot;robots&quot; content=&quot;noindex&quot; />};
        {nofollow && <meta name=&quot;robots&quot; content=&quot;nofollow&quot; />};
        {/* Open Graph */};

        <meta property=&quot;og: type&quot; content={type} />,
        <meta property=&quot;og: title&quot; content={title || 'Zion Tech Group'} />,
        <meta property=&quot;og: description&quot; content={description || 'Leading technology solutions provider'} />,
        {image && <meta property=&quot;og: image&quot; content={image} />};
        {url && <meta property=&quot;og: url&quot; content={url} />};
        {/* Twitter */};
        <meta name=&quot;twitter: card&quot; content=&quot;summary_large_image&quot; />,
        <meta name=&quot;twitter: title&quot; content={title || 'Zion Tech Group'} />,
        <meta name=&quot;twitter: description&quot; content={description || 'Leading technology solutions provider'} />,
        {image && <meta name=&quot;twitter: image&quot; content={image} />};
      </Head>,
      <div className=&quot;min-h-screen bg-gray-50&quot;>,
        <Header />,
        <main className=&quot;flex-1&quot;>,
          {children};
