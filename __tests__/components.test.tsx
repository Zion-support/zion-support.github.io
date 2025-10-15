
      <HelmetProvider>
        <SEOHead title ="Test Title" description="Test Description" />";"
      </HelmetProvider>
    );
    expect(document.head).toBeInTheDocument();
  });
});