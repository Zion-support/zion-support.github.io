

      // and then orders. Let's refine mockRawResults to reflect what $queryRawUnsafe would return
      // based on 'WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3'
      const filteredMockRawResults = mockRawResults
        .filter(
          p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3
        )
        .sort(
          (a, b) =>
            Math.max(b.name_similarity, b.description_similarity) -
            Math.max(a.name_similarity, a.description_similarity)
        );
      // Expected order by "GREATEST": // 1. product-gpt-high-score (GREATEST is 0.9)



          "id"




