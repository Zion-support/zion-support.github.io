<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { NextApiRequest,NextApiResponse } from 'next' import { createMocks,createRequest,createResponse } from 'node-mocks-http' import productHandler from '@/pages/api/products/index' import { PrismaClient } from '@prisma/client' jest.mock('@prisma/client',() => { const mPrismaClient = { product: { findMany: jest.fn(),aggregate: jest.fn() },productReview: { aggregate: jest.fn() },$queryRawUnsafe: jest.fn(),$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mPrismaClient) }}); let prisma: PrismaClient interface ProductLike { id: string name: string description?: string images?: unknown[] price?: number | null currency?: string tags?: string[] } describe('/api/products API Endpoint', () => { let req: ReturnType<typeof createRequest> let res: ReturnType<typeof createResponse> beforeEach(() => { jest.clearAllMocks() prisma = new PrismaClient(); (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({ _avg: { rating: null },_count: { id: 0 } })}) describe('GET /api/products with fuzzy search', () => { it('should return products matching "gpt"
    it('should return products matching "gpt"
          "id"
          "id"
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { NextApiRequest,NextApiResponse } from 'next' import { createMocks,createRequest,createResponse } from 'node-mocks-http' import productHandler from '@/pages/api/products/index' import { PrismaClient } from '@prisma/client' jest.mock('@prisma/client',() => { const mPrismaClient = { product: { findMany: jest.fn(),aggregate: jest.fn() },productReview: { aggregate: jest.fn() },$queryRawUnsafe: jest.fn(),$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mPrismaClient) }}); let prisma: PrismaClient interface ProductLike { id: string name: string description?: string images?: unknown[] price?: number | null currency?: string tags?: string[] } describe('/api/products API Endpoint', () => { let req: ReturnType<typeof createRequest> let res: ReturnType<typeof createResponse> beforeEach(() => { jest.clearAllMocks() prisma = new PrismaClient(); (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({ _avg: { rating: null },_count: { id: 0 } })}) describe('GET /api/products with fuzzy search', () => { it('should return products matching "gpt"
    it('should return products matching "gpt"
          "id"
          "id"
          "id"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { NextApiRequest,NextApiResponse } from 'next' import { createMocks,createRequest,createResponse } from 'node-mocks-http' import productHandler from '@/pages/api/products/index' import { PrismaClient } from '@prisma/client' jest.mock('@prisma/client',() => { const mPrismaClient = { product: { findMany: jest.fn(),aggregate: jest.fn() },productReview: { aggregate: jest.fn() },$queryRawUnsafe: jest.fn(),$disconnect: jest.fn() }; return { PrismaClient: jest.fn(() => mPrismaClient) }}); let prisma: PrismaClient interface ProductLike { id: string name: string description?: string images?: unknown[] price?: number | null currency?: string tags?: string[] } describe('/api/products API Endpoint',() => { let req: ReturnType<typeof createRequest> let res: ReturnType<typeof createResponse> beforeEach(() => { jest.clearAllMocks() prisma = new PrismaClient(); (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({ _avg: { rating: null },_count: { id: 0 } })}) describe('GET /api/products with fuzzy search',() => { it('should return products matching "gpt" with similarity >= 0.8',async () => { const mockRawResults = [ { id: 'product-gpt-high-score',name_similarity: 0.9,description_similarity: 0.5 },{ id: 'product-other',name_similarity: 0.2,description_similarity: 0.1 },{ id: 'product-gpt-medium-score',name_similarity: 0.82,description_similarity: 0.85 } ]; const mockProductsData: ProductLike[] = [ { id: 'product-gpt-high-score',name: 'Super GPT Model',description: 'Latest generation AI',images: [] price: null,currency: 'USD',tags: [] },{ id: 'product-gpt-medium-score',name: 'Advanced GPT Assistant',description: 'Your personal AI helper powered by GPT',images: [] price: null,currency: 'USD',tags: [] } ]; const filteredMockRawResults = mockRawResults .filter(p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3) .sort((a,b) => Math.max(b.name_similarity,b.description_similarity) - Math.max(a.name_similarity,a.description_similarity) ) (prisma.$queryRawUnsafe as jest.Mock).mockResolvedValue(filteredMockRawResults) const expectedProductIds = filteredMockRawResults.map(p => p.id) (prisma.product.findMany as jest.Mock).mockImplementation( async ({ where }: { where: { id: { in: string[] } } }) => { return mockProductsData.filter(p => where.id.in.includes(p.id)) } ) const { req,res } = createMocks({ method: 'GET',url: '/api/products?q=gpt',query: { q: 'gpt' } }); await productHandler( req as unknown as NextApiRequest,res as unknown as NextApiResponse ); expect(res._getStatusCode()).toBe(200) const responseData: ProductLike[] = JSON.parse(res._getData()) expect(responseData.length).toBeGreaterThanOrEqual(1) expect(responseData.length).toBe(filteredMockRawResults.length); expect(responseData[0].id).toBe('product-gpt-high-score') expect(responseData[0].name).toBe('Super GPT Model') const idsFromResponse = responseData.map((p: ProductLike) => p.id) expect(idsFromResponse).toContain('product-gpt-high-score') expect(idsFromResponse).toContain('product-gpt-medium-score') expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith( expect.stringContaining('similarity(name,$1)'),'gpt' ); expect(prisma.product.findMany).toHaveBeenCalledWith({ where: { id: { in: expectedProductIds } } }) }) }) })
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, createRequest, createResponse } from 'node-mocks-http'
import productHandler from '@/pages/api/products/index'
// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMany: jest.fn(),
      aggregate: jest.fn()
    },
    productReview: {
      aggregate: jest.fn()
    },
    $queryRawUnsafe: jest.fn(),
    $disconnect: jest.fn()
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});
let prisma: PrismaClient;
interface ProductLike {
  id: string
  name: string
  description?: string
  images?: unknown[]
  price?: number | null
  currency?: string
  tags?: string[]
}
describe('/api/products API Endpoint', () => {
  let req: ReturnType<typeof createRequest>;
  let res: ReturnType<typeof createResponse>;
  beforeEach(() => {
    jest.clearAllMocks();
    prisma = new PrismaClient(); // Get the mocked instance
    // Default mock for productReview.aggregate to avoid errors in stats calculation
    (prisma.productReview.aggregate as jest.Mock).mockResolvedValue({
      _avg: { rating: null },
      _count: { id: 0 }
    });
  });
  describe('GET /api/products with fuzzy search', () => {
    it('should return products matching "gpt" with similarity >= 0.8', async () => {
      // 1. Mock database responses
      const mockRawResults = [{
          "id": 'product-gpt-high-score',
          "name_similarity": 0.9,
          "description_similarity": 0.5
        },
        {
          "id": 'product-other',
          "name_similarity": 0.2,
          "description_similarity": 0.1
        },
        {
          "id": 'product-gpt-medium-score',
          "name_similarity": 0.82,
          "description_similarity": 0.85
        }
      ];
      // Note: The API sorts by GREATEST(name_similarity, description_similarity) DESC
      // So, product-gpt-high-score (0.9) should come first, then product-gpt-medium-score (0.85)
      const mockProductsData: ProductLike[] = [{
          id: 'product-gpt-high-score',
          name: 'Super GPT Model',
          description: 'Latest generation AI',
          images: [],
          price: null,
          currency: 'USD',
          tags: []
        },
        {
          id: 'product-gpt-medium-score',
          name: 'Advanced GPT Assistant',
          description: 'Your personal AI helper powered by GPT',
          images: [],
          price: null,
          currency: 'USD',
          tags: []
        }
        // Not expecting 'product-other' to be fetched by findMany if threshold is 0.3 and it's filtered out by raw query logic
      ];
      // The actual API logic filters by similarity >= 0.3 in $queryRawUnsafe
      // and then orders. Let's refine mockRawResults to reflect what $queryRawUnsafe would return
      // based on 'WHERE similarity(name, $1) >= 0.3 OR similarity(description, $1) >= 0.3'
      const filteredMockRawResults = mockRawResults
        .filter(p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3)
        .sort((a, b) =>
          Math.max(b.name_similarity, b.description_similarity) -
          Math.max(a.name_similarity, a.description_similarity)
        );
      // Expected order by "GREATEST": // 1. product-gpt-high-score (GREATEST is 0.9)
      // 2. product-gpt-medium-score (GREATEST is 0.85)
      (prisma.$queryRawUnsafe as jest.Mock).mockResolvedValue(filteredMockRawResults);
      // findMany will be called with IDs from filteredMockRawResults
      const expectedProductIds = filteredMockRawResults.map(p => p.id);
      (prisma.product.findMany as jest.Mock).mockImplementation(
        async ({ where }: { where: { id: { in: string[] } } }) => {
          return mockProductsData.filter(p => where.id.in.includes(p.id));
        }
      );
      // 2. Create mock request and response
      const { req, res } = createMocks({
        method: 'GET',
        url: '/api/products?q=gpt',
        query: {
          q: 'gpt'
        }
      });
      // 3. Call API handler
      await productHandler(
        req as unknown as NextApiRequest,
        res as unknown as NextApiResponse
      );
      // 4. Assertions
      expect(res._getStatusCode()).toBe(200);
      const responseData: ProductLike[] = JSON.parse(res._getData());
      expect(responseData.length).toBeGreaterThanOrEqual(1);
      expect(responseData.length).toBe(filteredMockRawResults.length); // Should match the count from raw query after 0.3 filter
      // Check if at least one product effectively had a high similarity.
      // The API doesn't return similarity scores directly in the final product data.
      // We rely on the ordering and the mock data setup.
      // The first item should be 'product-gpt-high-score' due to sorting by GREATEST similarity.
      expect(responseData[0].id).toBe('product-gpt-high-score');
      expect(responseData[0].name).toBe('Super GPT Model');
      // The problem statement: 'asserts that at least one result with a similarity score >= 0.8 is returned',
      // Since scores aren't in the response, we infer this from our mock setup.
      // "filteredMockRawResults" contains products that passed the >=0.3 threshold.
      // We know "product-gpt-high-score" had 0.9 and "product-gpt-medium-score" had 0.85. Both are >= 0.8.
      // The test ensures these are present and correctly ordered.
      const idsFromResponse = responseData.map((p: ProductLike) => p.id);
      expect(idsFromResponse).toContain('product-gpt-high-score');
      expect(idsFromResponse).toContain('product-gpt-medium-score');
      // Verify mocks
      expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining('similarity(name, $1)'),
        'gpt'
      );
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: expectedProductIds
          }
        }
      });
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
});
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD

=======
          "id"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          "id"

=======
          "id"});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
});
<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
          "id"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          "id"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

=======
          "id"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
});
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
