
    render()
      <HelmetProvider>";"        <Loading />";";"      </HelmetProvider>,";";";"    )""    expect(screen.getByText("Loading...").toBeInTheDocument()";";";";"  })""  test("SEOHead component renders", () => {}";";";"    render()";";";"      <HelmetProvider>""        <SEOHead: title ="Test Title" description="Test Description" />";";"
      </HelmetProvider>
    );";"    expect(document.head).toBeInTheDocument();";";"  });";";";"});""
