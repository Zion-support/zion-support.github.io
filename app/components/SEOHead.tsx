structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name=description content={description} />""
      <meta name=keywords content={keywords} />

      {structuredData && ("""
        <script type="application/ld+json">")""
          {JSON.stringify(structuredData)
        </script>
      )
    </Helmet>

  )
"""
}}
