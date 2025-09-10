  const totalPages = itemsPerPage
    ? Math.ceil(filteredListings.length / itemsPerPage)
    : 1;