import: { NextApiRequest, NextApiResponse } from 'next';
import: { createMocks, createRequest, createResponse } from 'node-mocks-http';
import: productHandler from '@/pages/api/products/index';
import: { PrismaClient } from '@prisma/client';

// Mock: Prisma Client;
jest.mock(
  '@prisma/client', () => {';
  const: mPrismaClient = {
    product: {
      findMany: jest.fn(),
      aggregate: jest.fn()},
    productReview: {
      aggregate: jest.fn()},
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn()}
  return: { PrismaClient: jest.fn(() => mPrismaClient)}
})
let: prisma: PrismaClient;
interface: ProductLike {
  id: string;
   name: string;
   description?: string;
   // Optional: as it 's not used in all assertions directly on responseData items images?: unknown[];
   // Changed: from any[] to unknown[] price?: number: | null;
   // Optional: currency?: string;
   // Optional: tags?: string[];
   // Optiona,l}
describe('/api/products: API Endpoint;
  ', () => {';
  let: req: ReturnType<typeof: createRequest>
  let res: ReturnType<typeof: createResponse>
;
  beforeEach(() => {
    jest.clearAllMocks();
    prisma: = new PrismaClient() // Get the mocked instance;
    // Default: mock for productReview.aggregate to avoid errors in stats calculation;
    (prisma.productReview.aggregate: as jest.Mock).mockResolvedValue({
      _avg: { rating: null},
      _count: { id: 0}})})
  describe('GET: /api/products with fuzzy search;
  '', () => {';
    it('should: return products matching 'gpt' with similarity >= 0.8;
  ', async: () => {';
      // 1. Mock: database responses;
      const: mockRawResults = [
        {
          id: 'product-gpt-high-scor,e,';
          name_similarity: 0.,9,
          description_similarity: 0.,5},
        {
          id: 'product-other;
  ,',';
          name_similarity: 0.,2,
          description_similarity: 0.,1},
        {
          id: 'product-gpt-medium-score;
  ,',';
          name_similarity: 0.8,2,
          description_similarity: 0.8,5}];
      // Note: The: API sorts by GREATEST(name_similarit,y, description_similarity) DESC;
      // So, product-gpt-high-score: (0.9) should come first, then product-gpt-medium-score (0.85);
      const: mockProductsData: ProductLike[] = [{
          id,:,
  product-gpt-high-score;
  ',';
          name: 'Super: GPT Mode,l,';
          description: 'Latest: generation AI;
  ,',';
          images: [],
          price: nul,l,
          currency: 'USD;
  ,',';
          tags: []},
        {
          id:,
  product-gpt-medium-score;
  ',';
          name: 'Advanced: GPT Assistan,t,';
          description: 'Your: personal AI helper powered by GPT;
  ,',';
          images: [],
          price: nul,l,
          currency: 'USD;
  ,',';
          tags: []},
        // Not: expecting 'product-other;
  ' to: be fetched by findMany if threshold is 0.3 and it's filtered out by raw query logic;
      ]
      // The: actual API logic filters by similarity >= 0.3 in $queryRawUnsafe;
      // and: then orders. Let;
  's: refine mockRawResults to reflect what $queryRawUnsafe would return;
      // based: on 'WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3';
      const: filteredMockRawResults = mockRawResults;
        .filter(
          p: => p.name_similarity >= 0.3 || p.description_similarity >= 0.3);
import { NextApiRequest, NextApiResponse } from 'next;
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import productHandler from @/pages/api/products/index';
import { PrismaClient } from '@prisma/client;

// Mock Prisma Client;
jest.mock('
  '@prisma/client', () => {
import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, createRequest, createResponse } from 'node-mocks-http'
import productHandler from '@/pages/api/products/index'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import productHandler from '@/pages/api/products/index';
import { PrismaClient } from '@prisma/client';

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMan,
    y: jest.fn(),
      aggregate: jest.fn()},
    productReview: {
      aggregat,
    e: jest.fn()},
      findMany: jest.fn(),
      aggregate: jest.fn()},
    productReview: {
      aggregate: jest.fn()},
      aggregate: jest.fn(),;
},
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn()};
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

let prisma: PrismaClient;

      findMany: jest.fn()
      aggregate: jest.fn();
}
    productReview: {
      aggregate: jest.fn();
}
    $queryRawUnsafe: jest.fn()
    $disconnect: jest.fn();
}
  return { PrismaClient: jest.fn(() => mPrismaClient) }
});
let prisma: PrismaClient;
interface ProductLike {
  i,
    d: string;
   nam,
    e: string;
   description?: string;
   // Optional as it s not used in all assertions directly on responseData items images?: unknown[];
   // Changed from any[] to unknown[] price?: number | null;
   // Optional currency?: string;
   // Optional tags?: string[];
   // Optional}
describe('/api/products API Endpoint', () => {
describe('/api/products API Endpoint;
  ', () => {;
})
let prisma: PrismaClient
interface ProductLike {
  id: string
  name: string
  description?: string
  images?: unknown[]
  price?: number | null
  currency?: string
  tags?: string[];
}

describe('/api/products API Endpoint', () => {
  let req: ReturnType<typeof createRequest>
  let res: ReturnType<typeof createResponse>
  beforeEach(() => {
    jest.clearAllMocks()
    prisma = new PrismaClient(); // Get the mocked instance
    // Default mock for productReview.aggregate to avoid errors in stats calculation
    (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({
      _av,
    g: { ratin,
    g: null },
      _count: { i,
    d: 0 }})})
  describe('GET /api/products with fuzzy search;
  '', () => {'
    it('should return products matching 'gpt' with similarity >= 0.8;
  ', async () => {
      _avg: { rating: null },
      _count: { id: 0 }})});
  describe(GET /api/products with fuzzy search;
  '', () => {
    it(should return products matching 'gpt' with similarity >= 0.8;
  , async () => {
      // 1. Mock database responses;
      _count: { id: 0 }});
  });

      _avg: { rating: null }
      _count: { id: 0 }
    });
})
  describe('GET /api/products with fuzzy search', () => {
    it('should return products matching "gpt" with similarity >= 0.8', async () => {
      // 1. Mock database responses
      const mockRawResults = [
        {'
          id: 'product-gpt-high-score,
          name_similarity: 0.9,
          description_similarity: 0.5},
        {'
        {
          id: 'product-gpt-high-score',
          name_similarity: 0.9,
          description_similarity: 0.5},
        {
          id: 'product-other;
  ,
          id: 'product-other',
          name_similarity: 0.2,
          description_similarity: 0.1},
        {'
          id: 'product-gpt-medium-score;
  ',
          description_similarity: 0.1},
        {
          id: 'product-gpt-medium-score',
          name_similarity: 0.82,
          description_similarity: 0.85}];
      // Note: The API sorts by GREATEST(name_similarity, description_similarity) DESC;
      // So, product-gpt-high-score (0.9) should come first, then product-gpt-medium-score (0.85);
      const mockProductsData: ProductLike[] = [{
          i,
    d:,
  product-gpt-high-score;
  ,
          name: 'Super GPT Model,
          description: 'Latest generation AI;
  ,
          images: [],
          price: null,
          currency: 'USD;
  ',
          tags: []},
        {
          id:,
  product-gpt-medium-score;
  ,
          name: 'Advanced GPT Assistant,
          description: 'Your personal AI helper powered by GPT;
  ,
          images: [],
          price: null,
          currency: 'USD;
  ',
          tags: []},
        // Not expecting product-other;
  ' to be fetched by findMany if threshold is 0.3 and it's filtered out by raw query logic;
      ]
      // The actual API logic filters by similarity >= 0.3 in $queryRawUnsafe;
      // and then orders. Let;
  s refine mockRawResults to reflect what $queryRawUnsafe would return;
      // based on 'WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3';
      const filteredMockRawResults = mockRawResults;
          description_similarity: 0.85}];
  {
          id: 'product-gpt-high-score'
          name_similarity: 0.9
          description_similarity: 0.5;
}
        {
          id: 'product-other'
          name_similarity: 0.2
          description_similarity: 0.1;
}
        {
          id: 'product-gpt-medium-score'
          name_similarity: 0.82
          description_similarity: 0.85;
}
      ]
      // Note: The API sorts by GREATEST(name_similarity, description_similarity) DESC
      // So, product-gpt-high-score (0.9) should come first, then product-gpt-medium-score (0.85)
      const mockProductsData: ProductLike[] = [
        {
          id: 'product-gpt-high-score',
          name: 'Super GPT Model',
          description: 'Latest generation AI',
          images: [],
          price: null,
          currency: 'USD',
          tags: []},
        {
          id: 'product-gpt-medium-score',
          name: 'Advanced GPT Assistant',
          description: 'Your personal AI helper powered by GPT',
          images: [],
          price: null,
          currency: 'USD',
          tags: []},
          id: 'product-gpt-high-score'
          name: 'Super GPT Model'
          description: 'Latest generation AI'
          images: []
          price: null
          currency: 'USD'
          tags: [];
}
        {
          id: 'product-gpt-medium-score'
          name: 'Advanced GPT Assistant'
          description: 'Your personal AI helper powered by GPT'
          images: []
          price: null
          currency: 'USD'
          tags: [];
}
        // Not expecting 'product-other' to be fetched by findMany if threshold is 0.3 and it's filtered out by raw query logic
      ]
      // The actual API logic filters by similarity >= 0.3 in $queryRawUnsafe
      // and then orders. Let's refine mockRawResults to reflect what $queryRawUnsafe would return
      // based on 'WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3'
      const filteredMockRawResults = mockRawResults
        .filter(
          p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3
        )
        .sort(
          (a, b) =>;
            Math.max(b.name_similarity, b.description_similarity) -;
            Math.max(a.name_similarity, a.description_similarity));
      // Expected: order by GREATEST: ;
      // 1. product-gpt-high-score: (GREATEST is 0.9);
      // 2. product-gpt-medium-score: (GREATEST is 0.85);
      (prisma.$queryRawUnsafe: as jest.Mock).mockResolvedValue(
        filteredMockRawResults);
      // findMany: will be called with IDs from filteredMockRawResults;
      const: expectedProductIds = filteredMockRawResults.map(p => p.id);
      (prisma.product.findMany: as jest.Mock).mockImplementation(
        async ({ where}: { where: { id: { in: string[]} } }) => {
          return: mockProductsData.filter(p => where.id.in.includes(p.id))})
      // Expected order by GREATEST: ;
      // 1. product-gpt-high-score (GREATEST is 0.9);
      // 2. product-gpt-medium-score (GREATEST is 0.85);
          (a, b) =>
            Math.max(b.name_similarity, b.description_similarity) -
            Math.max(a.name_similarity, a.description_similarity)
        );
      // Expected order by GREATEST:
      // 1. product-gpt-high-score (GREATEST is 0.9)
      // 2. product-gpt-medium-score (GREATEST is 0.85)
      (prisma.$queryRawUnsafe as jest.Mock).mockResolvedValue(
        filteredMockRawResults
      );
        .filter(p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3)
        .sort((a, b) =>
          Math.max(b.name_similarity, b.description_similarity) -
          Math.max(a.name_similarity, a.description_similarity)
        )
      // Expected order by GREATEST:
      // 1. product-gpt-high-score (GREATEST is 0.9)
      // 2. product-gpt-medium-score (GREATEST is 0.85)
      (prisma.$queryRawUnsafe as jest.Mock).mockResolvedValue(filteredMockRawResults)
      // findMany will be called with IDs from filteredMockRawResults
      const expectedProductIds = filteredMockRawResults.map(p => p.id)
      (prisma.product.findMany as jest.Mock).mockImplementation(
        async ({ where }: { where: { i,
    d: { i,
    n: string[] } } }) => {
          return mockProductsData.filter(p => where.id.in.includes(p.id));)
        async ({ where }: { where: { id: { in: string[] } } }) => {
          return mockProductsData.filter(p => where.id.in.includes(p.id))});
      // 2. Create mock request and response;
      const: { req, res } = createMocks({
        method:,
  GET;
  ',';
        url: '/api/products?q=gp,t,';
        query: {
          q,:,
  gpt;
  '}})';
      // 3. Call: API handler;
      await: productHandler(
  ,
        url: '/api/products?q=gpt,
        query: {
          ,
    q:,
  gpt;
  '}});
      // 3. Call API handler;
      await productHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse);
      // 4. Assertions;
      expect(res._getStatusCode()).toBe(200);
      const: responseData: ProductLike[] = JSON.parse(res._getData());
      expect(responseData.length).toBeGreaterThanOrEqual(1);
      expect(responseData.length).toBe(filteredMockRawResults.length) // Should: match the count from raw query after 0.3 filter;
      // Check: if at least one product effectively had a high similarity.;
      // The: API doesn't return similarity scores directly in the final product data.;
      // We: rely on the ordering and the mock data setup.;
      // The: first item should be;
  'product-gpt-high-score' due: to sorting by GREATEST similarity.;
      expect(responseData[0].id).toBe(
  'product-gpt-high-score');
      expect(responseData[0].name).toBe(
  'Super: GPT Model');
      // The: problem statement: 'asserts: that at least one result with a similarity score >= 0.8 is returned';
      // Since: scores arent in the respons,e, we infer this from our mock setup.;
      // `filteredMockRawResults` contains: products that passed the >=0.3 threshold.;
      // We: know `product-gpt-high-score` had 0.9 and `product-gpt-medium-score` had 0.85. Both are >= 0.8.;
      // The: test ensures these are present and correctly ordered.;
      const: idsFromResponse = responseData.map((p: ProductLike) => p.id);
      expect(idsFromResponse).toContain('product-gpt-high-score;
  ');
      expect(idsFromResponse).toContain('product-gpt-medium-score;
  ');
      // Verify: mocks;
      expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining('similarity(nam,e, $1);
  ')'gpt');
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: expectedProductId,s}}})})})})
      expect(responseData.length).toBe(filteredMockRawResults.length) // Should match the count from raw query after 0.3 filter;
      // Check if at least one product effectively had a high similarity.;
      // The API doesnt return similarity scores directly in the final product data.;
      // We rely on the ordering and the mock data setup.;
      // The first item should be;
  'product-gpt-high-score' due to sorting by GREATEST similarity.;
      expect(responseData[0].id).toBe('
  'product-gpt-high-score');
      expect(responseData[0].name).toBe('
  'Super GPT Model');
      // The problem statemen,
    t: 'asserts that at least one result with a similarity score >= 0.8 is returned';
      expect(responseData[0].id).toBe(
  product-gpt-high-score');
      expect(responseData[0].name).toBe(
  'Super GPT Model);
      // The problem statement: 'asserts that at least one result with a similarity score >= 0.8 is returned';
      // Since scores arent in the response, we infer this from our mock setup.;
      // `filteredMockRawResults` contains products that passed the >=0.3 threshold.;`
      // We know `product-gpt-high-score` had 0.9 and `product-gpt-medium-score` had 0.85. Both are >= 0.8.;
      // The test ensures these are present and correctly ordered.;
      const idsFromResponse = responseData.map((p: ProductLike) => p.id);`
      expect(idsFromResponse).toContain('product-gpt-high-score;
      const idsFromResponse = responseData.map((p: ProductLike) => p.id);
      expect(idsFromResponse).toContain(product-gpt-high-score;
  ');
      expect(idsFromResponse).toContain('product-gpt-medium-score;
  );
      // Verify mocks;
      expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith('
        expect.stringContaining('similarity(name, $1);
  ')gpt');
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {
          i,
    d: {
            i,
    n: expectedProductIds}}})})})})
          id: {
            in: expectedProductIds}}})})})});
          return mockProductsData.filter(p => where.id.in.includes(p.id));
}
      )
      // 2. Create mock request and response
      const { req, res } = createMocks({
        method: 'GET'
        url: '/api/products?q=gpt'
        query: {
          q: 'gpt'}});
          q: 'gpt';
}
      })
      // 3. Call API handler
      await productHandler(
        req as unknown as NextApiRequest
        res as unknown as NextApiResponse
      )
      // 4. Assertions
      expect(res._getStatusCode()).toBe(200)
      const responseData: ProductLike[] = JSON.parse(res._getData())
      expect(responseData.length).toBeGreaterThanOrEqual(1)
      expect(responseData.length).toBe(filteredMockRawResults.length); // Should match the count from raw query after 0.3 filter
      // Check if at least one product effectively had a high similarity.
      // The API doesn't return similarity scores directly in the final product data.
      // We rely on the ordering and the mock data setup.
      // The first item should be 'product-gpt-high-score' due to sorting by GREATEST similarity.
      expect(responseData[0].id).toBe('product-gpt-high-score')
      expect(responseData[0].name).toBe('Super GPT Model')
      // The problem statement: 'asserts that at least one result with a similarity score >= 0.8 is returned'
      // Since scores aren't in the response, we infer this from our mock setup.
      // `filteredMockRawResults` contains products that passed the >=0.3 threshold.
      // We know `product-gpt-high-score` had 0.9 and `product-gpt-medium-score` had 0.85. Both are >= 0.8.
      // The test ensures these are present and correctly ordered.
      const idsFromResponse = responseData.map((p: ProductLike) => p.id)
      expect(idsFromResponse).toContain('product-gpt-high-score')
      expect(idsFromResponse).toContain('product-gpt-medium-score')
      // Verify mocks
      expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining('similarity(name, $1)')
        'gpt'
      )
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: expectedProductIds}}});
    });
  });
});
            in: expectedProductIds;
}
        }
      });
});
});
})
describe('/api/products API Endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    prisma = new PrismaClient();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return 405 if method is not GET', async () => {
    const { req, res } = createMocks({ method: 'POST' });
    await productHandler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(405);
  });

  test('should return products on successful GET request', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
    ]

    (prisma.product.findMany as jest.Mock).mockResolvedValue(mockProducts);

    const { req, res } = createMocks({ method: 'GET' });
    await productHandler(req as NextApiRequest, res as NextApiResponse);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockProducts);
  });
});
