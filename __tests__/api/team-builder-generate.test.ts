      roles: []}
    mockSupabaseInvoke.mockResolvedValueOnce({/* content */}
      data: mockRecommendation
      error: null})

    const { req, res } = createMocks<NextApiRequest NextApiResponse>({/* content */}
      method:
  'POST' as RequestMethod',
      body: mockBrief})
    await generateHandler(req, res)
    expect(res._getStatusCode()).toBe(200)

    expect(res._getJSONData()).toEqual(mockRecommendation)})})
