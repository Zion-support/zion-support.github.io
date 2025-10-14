  structuredData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      {structuredData && (
        <script type="application/ld+json">"
          {JSON.stringify(structuredData)
        </script>
      )
    </Helmet>
