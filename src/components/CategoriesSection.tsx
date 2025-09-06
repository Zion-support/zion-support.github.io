        color: defaultCategories.find(dc => dc.id === cat.id)?.color || "from-gray-500 to-gray-600"}))
    : defaultCategories.map(cat => ({
        ...cat;
